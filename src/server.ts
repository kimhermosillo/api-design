import express from 'express'
import router from './router'
import morgan from 'morgan'
import { protect } from './modules/auth'
import { createNewUser, signIn } from './handlers/user'

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get('/', (req, res) => {
    res.json({ user: 'Rager Hermosillo' })
})

// adding protect below so middleware prevents unauthorized users from routes
app.use('/api', protect, router)
// no protect below for new users/signing in
app.post('/user', createNewUser)
app.post('/signin', signIn)
export default app