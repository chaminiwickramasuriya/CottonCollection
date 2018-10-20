import {Component, OnInit, ViewChild} from '@angular/core';
import {ContactService} from "../../service/contact.service";
import {Contact} from "../../dtos/contact";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-admin-contact',
  templateUrl: './admin-contact.component.html',
  styleUrls: ['./admin-contact.component.css']
})
export class AdminContactComponent implements OnInit {

  contacts: Array<Contact> = [];
  selectedContact: Contact = new Contact();
  tempContact: Contact = null;
  manuallySelected: boolean = false;
  @ViewChild("frmContact") frmContact: NgForm;


  constructor(private contactService:ContactService) { }

  ngOnInit() {
    this.loadAllMessages();
  }

  loadAllMessages():void{
    this.contactService.getSelectMessage().subscribe(
      (result)=>{
        this.contacts=result;
        console.log(this.contacts);
      }
    )
  }

  deleteContact(contact: Contact): void {
    if (confirm("Are you sure you want to delete this contact?")) {
      this.contactService.deleteContact(contact.mailId).subscribe(
        (result) => {
          if (result) {
            alert("Contact has been deleted successfully");
            this.loadAllMessages();
          } else {
            alert("Failed to delete the contact");
          }

        }
      )
    }
  }

  selectContact(contact: Contact): void {
    this.clearContact();
    this.selectedContact = contact;
    this.tempContact = Object.assign({}, contact);
    this.manuallySelected = true;
    console.log(contact);
  }

  clearContact(): void {
    let index = this.contacts.indexOf(this.selectedContact);
    if (index !== -1) {
      this.contacts[index] = this.tempContact;
      this.tempContact = null;
    }
    this.selectedContact = new Contact();
    this.manuallySelected = false;
  }



}
