import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Category} from "../../dtos/category";
import {CategoryService} from "../../service/category.service";

@Component({
  selector: 'app-category-management',
  templateUrl: './category-management.component.html',
  styleUrls: ['./category-management.component.css']
})
export class CategoryManagementComponent implements OnInit {

  categories: Array<Category> = [];
  selectedCategory: Category = new Category();
  imageFile:File;
  tempCategory: Category = null;
  manuallySelected: boolean = false;
  @ViewChild("frmCategory") frmCategory: NgForm;
  // @ViewChild("frmImage") frmImage: NgForm;


  constructor( private categoryService: CategoryService) { }

  ngOnInit() {
   this.loadAllCategories();
  }

  loadAllCategories():void{
    this.categoryService.getAllCategories().subscribe(
      (result)=>{
        this.categories=result;
        console.log(this.categories);
      }
    );
  }

  saveCategory():void{
    const file:FormData=new FormData();
    file.append("file",this.imageFile)
    this.categoryService.saveFile(file).subscribe(
      (result)=>{
        if (result){
          console.log(this.selectedCategory)
          this.categoryService.saveCategory(this.selectedCategory).subscribe(
            (result)=>{
              if(result){
                alert("Category Save Successfully.");
                this.loadAllCategories();
                location.reload();
              }
              else{
                alert("Category Save Failed.");
              }
            }
          )
        }
      }
    )
  }

  setImage(event){
    const file=event.target.files[0];
    this.imageFile=file;
    console.log(this.imageFile)
  }

  clear(): void {
    let index = this.categories.indexOf(this.selectedCategory);
    if (index !== -1) {
      this.categories[index] = this.tempCategory;
      this.tempCategory = null;
    }
    this.selectedCategory = new Category();
    this.manuallySelected = false;
  }

  deleteCategory(category:Category):void{
    if (confirm("Are you sure you want to delete this category?")) {
      this.categoryService.deleteCategory(category.catCode).subscribe(
        (result) => {
          if (result) {
            alert("Category has been deleted successfully");
          } else {
            alert("Failed to delete the Category");
          }
          this.loadAllCategories();
        }
      )
    }
  }
}
