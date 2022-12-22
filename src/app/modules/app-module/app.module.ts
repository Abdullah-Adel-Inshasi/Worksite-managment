import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../routing-module/app-routing.module';
import { AppComponent } from '../../components/AppComponent/app.component';
import { LoginComponent } from '../../components/LoginComponent/login.component';
import { DashboardComponent } from '../../components/DashboardComponent/dashboard.component';
import { WorkOrderComponent } from '../../components/WorkOrderComponent/work-order.component';
import { WorkOrderDetailsComponent } from '../../components/WorkOrderDetailsComponent/work-order-details.component';
import { FormsModule } from '@angular/forms';
import { AddOrderComponent } from '../../components/AddOrderComponent/add-order.component';
import { ErrorComponent } from '../../components/ErrorComponent/error.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from '../../components/HeaderComponent/header.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    WorkOrderComponent,
    WorkOrderDetailsComponent,
    AddOrderComponent,
    ErrorComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
