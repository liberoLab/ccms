import express from 'express';
import Purchase from '../model/Purchase.js';
import {
  postPurchase,
  getPurchaseList,
  getPurchase,
} from '../service/PurchaseService.js';

const router = express.Router();

/* 단건 인서트 */
router.post('/', async (req, res) => {
  const purchase = new Purchase(req.body); // 파랑
  const result = await postPurchase(purchase);
  res.json(result);
});

/* 리스트 조회 */
router.get('/', async (req, res) => {
  const result = await getPurchaseList();
  res.json(result);
});

/* 단건 조회 (고유 ID를 이용) */
router.get('/:purchaseId', async (req, res) => {
  let { purchaseId } = req.params; // 파랑
  purchaseId = parseInt(purchaseId, 10); // 주황
  const result = await getPurchase(purchaseId);
  res.json(result);
});

export default router;
