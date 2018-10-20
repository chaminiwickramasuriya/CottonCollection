import {Component, OnInit, ViewChild} from '@angular/core';
import {Customer} from "../../dtos/customer";
import {NgForm} from "@angular/forms";
import {CustomerService} from "../../service/customer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  customers: Array<Customer> = [];
  selectedCustomer: Customer = new Customer();
  tempCustomer: Customer = null;
  manuallySelected: boolean = false;
  @ViewChild("frmCustomers") frmCustomers: NgForm;

  constructor(private customerService:CustomerService,private  router:Router) { }

  ngOnInit() {

  }


  saveCustomer():void{
      this.customerService.saveCustomer(this.selectedCustomer).subscribe(
        (result)=>{
          if(result){
            alert("Sign Up successfully");
             this.router.navigate(['/main/aside-common']);
          }
          else {
            alert("Failed! ");
          }
        }
      )
  }


  selectCustomer(customer: Customer): void {
    this.clear();
    this.selectedCustomer = customer;
    this.tempCustomer = Object.assign({}, customer);
    this.manuallySelected = true;
    console.log(customer);
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

}
