import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./views/main/main.component";
import {DashboardComponent} from "./views/dashboard/dashboard.component";
import {GalleryComponent} from "./views/gallery/gallery.component";
import {AsideCommonComponent} from "./views/aside-common/aside-common.component";
import {ImageDetailsComponent} from "./views/image-details/image-details.component";
import {ContactComponent} from "./views/contact/contact.component";
import {CartComponent} from "./views/cart/cart.component";
import {LoginComponent} from "./views/login/login.component";
import {AdminDashboardComponent} from "./views/admin-dashboard/admin-dashboard.component";
import {SignUpComponent} from "./views/sign-up/sign-up.component";
import {ViewCustomerComponent} from "./views/view-customer/view-customer.component";
import {CartOrdersComponent} from "./views/cart-orders/cart-orders.component";
import {CategoryManagementComponent} from "./views/category-management/category-management.component";
import {AdminContactComponent} from "./views/admin-contact/admin-contact.component";

const appRoutes: Routes = [
  {
    path: "main",
    component: MainComponent,
    children: [
      {path: "dashboard", component: DashboardComponent},
      {path: "admin-dashboard", component: AdminDashboardComponent},
      {path: "admin-contact", component: AdminContactComponent},
      {path: "gallery", component: GalleryComponent},
      {path: "aside-common", component: AsideCommonComponent},
      {path: "image-details/:id", component: ImageDetailsComponent},
      {path: "contact", component: ContactComponent},
      {path: "cart", component: CartComponent},
      {path: "category-management", component: CategoryManagementComponent},
      {path: "view-customer", component: ViewCustomerComponent},
      {path: "cart-orders", component: CartOrdersComponent},

      // {path: "login", component: LoginComponent},

      {path: "", pathMatch: "full", redirectTo: "/main/dashboard"}
    ]
  },
  {path: "login", component: LoginComponent},
  {path: "sign-up", component: SignUpComponent},
  {path: "", pathMatch: "full", redirectTo: "/main/dashboard"}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
