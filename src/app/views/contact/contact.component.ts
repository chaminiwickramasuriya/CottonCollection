import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Contact} from "../../dtos/contact";
import {ContactService} from "../../service/contact.service";
import {Router} from "@angular/router";
import {Customer} from "../../dtos/customer";
import {CustomerService} from "../../service/customer.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  contacts: Array<Contact> = [];
  selectedContact: Contact = new Contact();
  tempContact: Contact = null;
  manuallySelected: boolean = false;
  @ViewChild("frmContact") frmContact: NgForm;

  customers: Array<Customer> = [];
  selectedCustomer: Customer = new Customer();
  tempCustomer: Customer = null;
  manuallySelectedCustomer: boolean = false;

  constructor(private contactService: ContactService,private customerService: CustomerService, private router: Router) { }

  ngOnInit() {
    this.loadAllMessages();
    this.loadAllCustomers();
  }

  loadAllCustomers(): void {
    this.customerService.getAllCustomers().subscribe(
      (result) => {
        this.customers = result;
        console.log(this.customers);
      }
    )
  }

  saveContact():void{
    this.contactService.saveContact(this.selectedContact).subscribe(
      (result)=>{
        if(result){
          alert("E-Mail saved successfully");
          this.loadAllMessages();
          location.reload();
        }
        else
          alert("E-Mail saved Failed");
      }
    )
  }

  clear(): void {
    let index = this.contacts.indexOf(this.selectedContact);
    if (index !== -1) {
      this.contacts[index] = this.tempContact;
      this.tempContact = null;
    }
    this.selectedContact = new Contact();
    this.manuallySelected = false;
  }

  loadAllMessages():void{
    this.contactService.getSelectMessage().subscribe(
      (result)=>{
        this.contacts=result;
        console.log(this.contacts);
      }
    )
  }



}
