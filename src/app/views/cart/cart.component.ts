import { Component, OnInit } from '@angular/core';
import {Category} from "../../dtos/category";
import {Customer} from "../../dtos/customer";
import {Reservation} from "../../dtos/reservation";
import {Orders} from "../../dtos/orders";
import {CategoryService} from "../../service/category.service";
import {CustomerService} from "../../service/customer.service";
import {ReservationService} from "../../service/reservation.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  categories: Array<Category> = [];
  selectedCategory: Category = new Category();
  tempCategory: Category = null;
  manuallySelectedCategory: boolean = false;

  customers: Array<Customer> = [];
  selectedCustomer: Customer = new Customer();
  tempCustomer: Customer = null;
  manuallySelectedCustomer: boolean = false;

  reservations: Array<Reservation> = [];
  reservation: Reservation;
  total_amount: number = 0;
  order = new Orders();

  constructor(private categoryService:CategoryService, private customerService: CustomerService, private reservationService: ReservationService) { }

  ngOnInit() {
    this.getAllCategories();
    this.loadAllCustomers();
  }

  getAllCategories(): void {
    this.categoryService.getAllCategories().subscribe(
      (result) => {
        this.categories = result;
        console.log(this.categories);
      }
    )
  }

  loadAllCustomers(): void {
    this.customerService.getAllCustomers().subscribe(
      (result) => {
        this.customers = result;
        console.log(this.customers);
      }
    )
  }

  selectCustomer(customer: Customer): void {
    this.clearCustomer();
    this.selectedCustomer = customer;
    this.tempCustomer = Object.assign({}, customer);
    this.manuallySelectedCustomer = true;
    console.log(customer);
  }

  selectCategory(category: Category): void {
    this.clearCategory();
    this.selectedCategory = category;
    this.tempCategory = Object.assign({}, category);
    this.manuallySelectedCategory = true;
  }

  clearCategory(): void {
    let index = this.categories.indexOf(this.selectedCategory);
    if (index !== -1) {
      this.categories[index] = this.tempCategory;
      this.tempCategory = null;
    }
    this.selectedCategory = new Category();
    this.manuallySelectedCategory = false;
  }

  clearCustomer(): void {
    let index = this.customers.indexOf(this.selectedCustomer);
    if (index !== -1) {
      this.customers[index] = this.tempCustomer;
      this.tempCustomer = null;
    }
    this.selectedCustomer = new Customer();
    this.manuallySelectedCustomer = false;
  }

  removeCategory(category) {
    let index = this.reservations.indexOf(category);
    this.reservations.splice(index, 1);
  }

  addCategory(qty): void {
    let total = qty * this.selectedCategory.catPrice;
    this.total_amount = this.total_amount + total;
    let remainingQTY = this.selectedCategory.qtyOnHand - qty;
    this.reservation = new Reservation(qty, total, this.selectedCategory);
    this.reservations.push(this.reservation);
    document.getElementById('finalTotal').setAttribute('value', this.total_amount.toString());
  }

  placeOrder(orderDate) {
    this.order = new Orders();
    this.order.date=orderDate;
    this.order.customer = this.selectedCustomer;
    this.order.reservationDTOs = this.reservations;
    console.log(this.order)
    this.reservationService.placeOrder(this.order).subscribe((result) => {
      if (result) {
        alert("Add To Cart successfully");
        location.reload();
      } else {
        alert("Failed to add.");
      }
    });
  }

}
