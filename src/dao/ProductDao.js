import { MongoClient } from 'mongodb';

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

export async function insertProduct(product) {
  await client.connect();
  client
    .db('ccms')
    .collection('product')
    .createIndex({ productId: 1 }, { unique: 1 });

  await client
    .db('ccms')
    .collection('product')
    .insertOne(product)
    .then((item) => item)
    .catch((e) => e);
  return product;
}

export async function selectProductList() {
  await client.connect();
  const result = await client
    .db('ccms')
    .collection('product')
    .find({}, {})
    .toArray();
  return result;
}

export async function selectProduct(productId) {
  await client.connect();
  const result = await client
    .db('ccms')
    .collection('product')
    .findOne({ productId }, {});
  return result;
}

export default { insertProduct, selectProductList, selectProduct };
