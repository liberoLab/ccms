import {
  insertPurchase,
  selectPurchaseList,
  selectPurchase,
} from '../dao/PurchaseDao.js';

export async function postPurchase(purchase) {
  const result = await insertPurchase(purchase);
  return result;
}

export async function getPurchaseList() {
  const result = await selectPurchaseList();
  return result;
}

export async function getPurchase(purchaseId) {
  const result = await selectPurchase(purchaseId);
  return result;
}
export default { postPurchase, getPurchaseList, getPurchase };
