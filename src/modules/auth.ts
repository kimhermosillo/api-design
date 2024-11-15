import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

export const comparePasswords = (password, hashedPassword) => {
    return bcrypt.compare(password, hashedPassword)
}

export const hashPassword = (password) => {
    return bcrypt.hash(password, 5)
}

export const createJWT = (user) => {
    const token = jwt.sign({
        id: user.id,
        username: user.username
    },
        process.env.JWT_SECRET
    )
    return token
}


export const protect = (req, res, next) => {
    const bearer = req.headers.authorization
    const [, token] = bearer.split(' ')

    if (!bearer || !token) {
        res.status(401)
        res.json({ message: 'nope' })
        return
    }

    try {
        const user = jwt.verify(token, process.env.JWT_SECRET)
        req.user = user
        next()
    } catch (e) {
        console.log(e)
        res.status(401)
        res.json({ message: 'not valid' })
        return
    }

}