import express from 'express';
import Product from '../model/Product.js';
import {
  postProduct,
  getProductList,
  getProduct,
} from '../service/ProductService.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const product = new Product(req.body);
  const result = await postProduct(product);
  res.json(result);
});

router.get('/', async (req, res) => {
  const result = await getProductList();
  res.json(result);
});

router.get('/:productId', async (req, res) => {
  let { productId } = req.params;
  productId = parseInt(productId, 10); // 문자를 숫자로 변환
  const result = await getProduct(productId);
  res.json(result);
});

export default router;
