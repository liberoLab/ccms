export default class User {
  _id;

  name;

  pnumber;

  email;

  address;

  addressDetail;

  addressNumber;

  constructor({ name, pnumber, email, address, addressDetail, addressNumber }) {
    this.name = name;
    this.pnumber = pnumber;
    this.email = email;
    this.address = address;
    this.addressDetail = addressDetail;
    this.addressNumber = addressNumber;
  }
}
