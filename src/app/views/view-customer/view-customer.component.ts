import {Component, OnInit} from '@angular/core';
import {Customer} from "../../dtos/customer";
import {CustomerService} from "../../service/customer.service";

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {

  customers: Array<Customer> = [];
  selectedCustomer: Customer = new Customer();
  tempCustomer: Customer = null;
  manuallySelected: boolean = false;
  //@ViewChild("registerForm") registerForm: NgForm;

  constructor(private customerService:CustomerService) { }

  ngOnInit() {
    this.loadAllCustomers();
  }


  loadAllCustomers(): void {
    this.customerService.getAllCustomers().subscribe(//subscribe ekdi thami request ekat adla responce eka labenne.ethanat denne adala function eka
      (result) => {
        this.customers = result;
        console.log(this.customers);
      }
    )
  }

  clear(): void {
    let index = this.customers.indexOf(this.selectedCustomer);
    if (index !== -1) {
      this.customers[index] = this.tempCustomer;
      this.tempCustomer = null;
    }
    this.selectedCustomer = new Customer();
    this.manuallySelected = false;
  }

  selectCustomer(customer: Customer): void {
    this.clear();
    this.selectedCustomer = customer;
    this.tempCustomer = Object.assign({}, customer);
    this.manuallySelected = true;
  }

  deleteCustomer(customer: Customer): void {
    if (confirm("Are you sure you want to delete this customer?")) {
      this.customerService.deleteCustomer(customer.custId).subscribe(
        (result) => {
          if (result) {
            alert("Customer has been deleted successfully");
          } else {
            alert("Failed to delete the customer");
          }
          this.loadAllCustomers();
        }
      )
    }
  }
}
