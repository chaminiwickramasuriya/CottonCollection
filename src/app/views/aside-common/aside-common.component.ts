import {Component, OnInit, ViewChild} from '@angular/core';
import {Contact} from "../../dtos/contact";
import {HttpClient} from "@angular/common/http";
import {ContactService} from "../../service/contact.service";
import {Category} from "../../dtos/category";
import {CategoryService} from "../../service/category.service";
import {NgForm} from "@angular/forms";
import {Reservation} from "../../dtos/reservation";
import {ReservationService} from "../../service/reservation.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-aside-common',
  templateUrl: './aside-common.component.html',
  styleUrls: ['./aside-common.component.css']
})
export class AsideCommonComponent implements OnInit {

  categories: Array<Category> = [];
  selectedCategory: Category = new Category();
  path:string="";
  tempCategory: Category = null;
  manuallySelected: boolean = false;

  constructor(private categoryService: CategoryService) {  }

  ngOnInit() {
     this.getPostedImages();

  }


  getPostedImages():void{
    this.categoryService.getImage(this.path).subscribe(
      (result)=>{
        this.categories=result;
        console.log(this.categories);
      }
    )
    this.getFile();
  }

  getFile():void{
    for (let category of this.categories){
      console.log(category.imgPath);
    }
  }

  //
  // getAllCategories(): void{
  //   this.categoryService.getAllCategories().subscribe(
  //     (result)=>{
  //       this.categories=result;
  //       console.log(this.categories);
  //     }
  //   )
  // }






  // loadAllImages(): void{
  //   this.contactService.getSelectImages().subscribe(
  //     (result)=>{
  //       this.contacts=result;
  //       console.log(this.contacts);
  //     }
  //   )
  // }
  // selectContact(contact: Contact): void {
  //   this.clearContact();
  //   this.selectedContact = contact;
  //   this.tempContact = Object.assign({}, contact);
  //   this.manuallySelected = true;
  //   console.log(contact);
  // }
}
