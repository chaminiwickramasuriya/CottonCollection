import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {NgxPaginationModule} from "ngx-pagination";

import { AppComponent } from './app.component';
import {GalleryComponent} from "./views/gallery/gallery.component";
import {AsideCommonComponent} from "./views/aside-common/aside-common.component";
import {DashboardComponent} from "./views/dashboard/dashboard.component";
import {MainComponent} from "./views/main/main.component";
import { ImageDetailsComponent } from './views/image-details/image-details.component';
import {ContactComponent} from "./views/contact/contact.component";
import { CartComponent } from './views/cart/cart.component';
import { LoginComponent } from './views/login/login.component';
import { AdminDashboardComponent } from './views/admin-dashboard/admin-dashboard.component';
import { SignUpComponent } from './views/sign-up/sign-up.component';
import { ViewCustomerComponent } from './views/view-customer/view-customer.component';
import { CartOrdersComponent } from './views/cart-orders/cart-orders.component';
import { CategoryManagementComponent } from './views/category-management/category-management.component';
import { AdminContactComponent } from './views/admin-contact/admin-contact.component';

import {ImageFilterPipe } from "./views/image-details/sheard/filter.pipe";

import { UserService } from "./service/user.service";
import {CustomerService} from "./service/customer.service";
import {SheardService} from "./views/image-details/sheard/sheard.service";
import {CategoryService} from "./service/category.service";
import {ContactService} from "./service/contact.service";
import {ReservationService} from "./service/reservation.service";
import {OrdersService} from "./service/orders.service";


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DashboardComponent,
    AsideCommonComponent,
    GalleryComponent,
    ImageDetailsComponent,
    ImageFilterPipe,
    ContactComponent,
    CartComponent,
    LoginComponent,
    AdminDashboardComponent,
    SignUpComponent,
    ViewCustomerComponent,
    CartOrdersComponent,
    CategoryManagementComponent,
    AdminContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,

  ],
  providers: [
    SheardService,
    ImageFilterPipe,
    UserService,
    CustomerService,
    CategoryService,
    ContactService,
    ReservationService,
    OrdersService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
