import { MongoClient } from 'mongodb';

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

export async function insertPurchase(purchase) {
  await client.connect(); // 노랑
  client
    .db('ccms')
    .collection('purchase')
    .createIndex({ purchaseId: 1 }, { unique: 1 });
  await client
    .db('ccms')
    .collection('purchase')
    .insertOne(purchase)
    .then((item) => item)
    .catch((e) => e);
  return purchase;
}

export async function selectPurchaseList() {
  await client.connect(); // 노랑
  const result = await client
    .db('ccms')
    .collection('purchase')
    .find({}, {})
    .toArray();
  return result;
}

export async function selectPurchase(purchaseId) {
  await client.connect(); // 노랑
  const result = await client
    .db('ccms')
    .collection('purchase')
    .findOne({ purchaseId }, {});
  return result;
}

export default { insertPurchase, selectPurchaseList, selectPurchase };
