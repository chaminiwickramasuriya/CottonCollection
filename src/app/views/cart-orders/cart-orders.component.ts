import { Component, OnInit } from '@angular/core';
import {Orders} from "../../dtos/orders";
import {OrdersService} from "../../service/orders.service";


@Component({
  selector: 'app-cart-orders',
  templateUrl: './cart-orders.component.html',
  styleUrls: ['./cart-orders.component.css']
})
export class CartOrdersComponent implements OnInit {

  orders: Array<Orders>=[];
  selectedOrder: Orders = new Orders;
  tempOrder: Orders=null;
  manuallySelected: boolean = false;



  constructor(private orderService: OrdersService) { }

  ngOnInit() {
     // this.loadAllOrders();
  }

  // loadAllOrders():void{
  //     this.orderService.getAllOrders().subscribe(
  //       (result) => {
  //         this.orders = result;
  //         console.log(this.orders);
  //       }
  //     )
  // }
  //
  // selectOrder(order: Orders): void {
  //   this.clear();
  //   this.selectedOrder = order;
  //   this.tempOrder = Object.assign({}, order);
  //   this.manuallySelected = true;
  // }
  //
  // clear(): void {
  //   let index = this.orders.indexOf(this.selectedOrder);
  //   if (index !== -1) {
  //     this.orders[index] = this.tempOrder;
  //     this.tempOrder = null;
  //   }
  //   this.selectedOrder = new Orders();
  //   this.manuallySelected = false;
  // }

}
