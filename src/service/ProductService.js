import {
  insertProduct,
  selectProductList,
  selectProduct,
} from '../dao/ProductDao.js';

export async function postProduct(product) {
  const result = await insertProduct(product);
  return result;
}

export async function getProductList() {
  const result = await selectProductList();
  return result;
}

export async function getProduct(productId) {
  const result = await selectProduct(productId);
  return result;
}

export default { postProduct, getProductList, getProduct };
