import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOrderComponent } from './components/AddOrderComponent/add-order.component';
import { DashboardComponent } from './components/DashboardComponent/dashboard.component';
import { ErrorComponent } from './components/ErrorComponent/error.component';
import { LoginComponent } from './components/LoginComponent/login.component';
import { WorkOrderDetailsComponent } from './components/WorkOrderDetailsComponent/work-order-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '404/:errorKey', component: ErrorComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'details/:id', component: WorkOrderDetailsComponent },
  { path: 'add-order', component: AddOrderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
