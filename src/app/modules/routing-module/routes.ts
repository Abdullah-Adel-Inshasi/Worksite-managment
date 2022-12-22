import { Routes } from '@angular/router';
import { AddOrderComponent } from 'src/app/components/AddOrderComponent/add-order.component';
import { DashboardComponent } from 'src/app/components/DashboardComponent/dashboard.component';
import { ErrorComponent } from 'src/app/components/ErrorComponent/error.component';
import { LoginComponent } from 'src/app/components/LoginComponent/login.component';
import { WorkOrderDetailsComponent } from 'src/app/components/WorkOrderDetailsComponent/work-order-details.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '404/:errorKey', component: ErrorComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'details/:id', component: WorkOrderDetailsComponent },
  { path: 'add-order', component: AddOrderComponent },
  { path: '**', component: ErrorComponent },
];
