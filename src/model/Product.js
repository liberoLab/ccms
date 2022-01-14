export default class Product {
  _id;

  productId;

  name;

  price;

  amt;

  constructor({ productId, name, price, amt }) {
    this.productId = productId;
    this.name = name;
    this.price = price;
    this.amt = amt;
  }
}
