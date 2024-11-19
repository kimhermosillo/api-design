import { Router } from 'express'
import { body } from 'express-validator'
import { handleInputErrors } from './modules/middleware'
import { createProduct, deleteProduct, getOneProduct, getProducts, updateProduct } from './handlers/product'
const router = Router()

// Product
router.get('/product', getProducts)

router.get('/product/:id', getOneProduct)

router.put('/product/:id', body('title').exists(), body('body').exists(), body('status').optional(), handleInputErrors, updateProduct)

router.post('/product', body('name').isString(), handleInputErrors, createProduct)

router.delete('/product/:id', body('id').isString(), handleInputErrors, deleteProduct)


// Update
router.get('/update', () => {

})

router.get('/update/:id', () => {

})

router.put('/update/:id', body('title').optional(), body('body').optional(), body('status').isIn(['IN_PROGRESS', 'SHIPPED', 'DEPRECATED']), body('version').optional(), handleInputErrors, (req, res) => {

})

router.post('/update', body('title').exists(), body('body').exists(), handleInputErrors, () => {

})

router.delete('/update/:id', () => {

})

// Update Point
router.get('/updatepoint', () => {

})

router.get('/updatepoint/:id', body('name').optional().isString(), body('description').optional().isString(), handleInputErrors, () => {

})

router.put('/updatepoint/:id', () => {

})

router.post('/updatepoint', body('name').isString(), body('description').isString(), body('updateId').exists().isString(), handleInputErrors, () => {

})

router.delete('/updatepoint/:id', () => {

})

export default router