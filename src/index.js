import express from 'express';
import bodyParser from 'body-parser';
import PurchaseContoller from './controller/PurchaseContoller.js';
import ProductContoller from './controller/ProductContoller.js';
import UserContoller from './controller/UserContoller.js';

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/purchase', PurchaseContoller);

app.use('/product', ProductContoller);

app.use('/user', UserContoller);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
