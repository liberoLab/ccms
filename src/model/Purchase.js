export default class Purchase {
  _id;

  purchaseId;

  depositName;

  depositDate;

  customerName;

  customerPnumber;

  customerEmail;

  customerAddress;

  customerAddressDetail;

  customerAddressNumber;

  product;

  depositAmount;

  memo;

  purchaseCreateDate;

  twitterId;

  constructor({
    purchaseId,
    depositName,
    depositDate,
    customerName,
    customerPnumber,
    customerEmail,
    customerAddress,
    customerAddressDetail,
    customerAddressNumber,
    product,
    depositAmount,
    memo,
    purchaseCreateDate,
    twitterId,
  }) {
    this.purchaseId = purchaseId; // number 길이가 5자리 꼭 min5 max 5
    this.depositName = depositName; // String   비어있는지 isempty
    this.depositDate = depositDate; // String , 날짜
    this.customerName = customerName; // String , 날짜
    this.customerPnumber = customerPnumber; // String , isMobilePhone
    this.customerEmail = customerEmail; // String , email
    this.customerAddress = customerAddress; // String , 비어있는지 isempty
    this.customerAddressDetail = customerAddressDetail; // optional
    this.customerAddressNumber = customerAddressNumber; // 5자리
    this.product = product; // optional
    this.depositAmount = depositAmount; // number , 비어있는지 isempty
    this.memo = memo; // optional
    this.purchaseCreateDate = purchaseCreateDate; // String , 날짜
    this.twitterId = twitterId; // optional
  }
}
