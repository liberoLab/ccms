import express from 'express';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';
import Purchase from './model/Purchase';

const app = express();
const port = 3000;

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

/* 단건 인서트 */
app.post('/purchase', async (req, res) => {
  const purchase = new Purchase(req.body);
  console.log(purchase);
  await client.connect();
  client
    .db('ccms')
    .collection('purchase')
    .createIndex({ purchase_id: 1 }, { unique: 1 });
  await client
    .db('ccms')
    .collection('purchase')
    .insertOne(purchase)
    .then(() => {
      res.json(purchase);
    })
    .catch((e) => {
      res.json({ name: 'Bad Request', reason: e });
    });
});
/* 리스트 조회 */
app.get('/purchase', async (req, res) => {
  await client.connect();
  const result = await client
    .db('ccms')
    .collection('purchase')
    .find({}, {})
    .toArray();
  res.json(result);
});
/* 단건 조회 (고유 ID를 이용) */
app.get('/purchase/:purchaseId', async (req, res) => {
  let { purchaseId } = req.params;
  purchaseId = parseInt(purchaseId, 2);
  await client.connect();
  const result = await client
    .db('ccms')
    .collection('purchase')
    .findOne({ purchaseId }, {});
  res.json(result);
});

app.get('/login', (req, res) => {
  res.send('Hello World! losgin');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
