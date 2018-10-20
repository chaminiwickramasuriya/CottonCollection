import {Category} from "./category";
// import {Orders} from "./orders";
export class Reservation {
  order_qty:number;
  total_amount:number;
  category:Category;
  // orders:Orders;


  constructor(order_qty: number, total_amount: number, category: Category) {
    this.order_qty = order_qty;
    this.total_amount = total_amount;
    this.category = category;
    // this.orders = orders;
  }
}
