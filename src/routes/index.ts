import express from 'express';
import { getAllProducts, getProductByName, getProductsByCategory, getProduct } from '../controllers/ProductController';
import { getAllCategories } from '../controllers/CategoryController';
import { getCarItems, getCarItemsLenght } from '../controllers/CarItemController';
import { addToCar,removeCarItem } from '../controllers/CarItemController';

const router = express.Router();

router.get('/products', getAllProducts);
router.get('/product/:id', getProduct);
router.get('/products/category/:categoryId', getProductsByCategory);
router.get('/products/:name', getProductByName);

router.get('/categories', getAllCategories);

router.get('/car-items', getCarItems);
router.get('/car-items-length', getCarItemsLenght);
router.post('/add-car-item', addToCar);
router.delete('/remove-car-item/:id', removeCarItem);

export default router;