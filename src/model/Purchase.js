export default class Purchase {
    _id;
    purchase_id;
    deposit_name;
    deposit_date;
    customer_name;
    customer_pnumber;
    customer_email;
    customer_address;
    customer_address_detail;
    customer_address_number;
    product;
    deposit_amount;
    memo;
    purchase_create_date;
    twitter_id;
    constructor({
        purchase_id,
        deposit_name,
        deposit_date,
        customer_name,
        customer_pnumber,
        customer_email,
        customer_address,
        customer_address_detail,
        customer_address_number,
        product,
        deposit_amount,
        memo,
        purchase_create_date,
        twitter_id,
    }) {
        this.purchase_id = purchase_id; // number 길이가 5자리 꼭 min5 max 5
        this.deposit_name = deposit_name; // String   비어있는지 isempty
        this.deposit_date = deposit_date; // String , 날짜
        this.customer_name = customer_name; // String , 날짜
        this.customer_pnumber = customer_pnumber; // String , isMobilePhone
        this.customer_email = customer_email; // String , email
        this.customer_address = customer_address; // String , 비어있는지 isempty
        this.customer_address_detail = customer_address_detail; // optional
        this.customer_address_number = customer_address_number; // 5자리
        this.product = product; // optional
        this.deposit_amount = deposit_amount; // number , 비어있는지 isempty
        this.memo = memo; // optional
        this.purchase_create_date = purchase_create_date; // String , 날짜
        this.twitter_id = twitter_id; // optional
    }
}
