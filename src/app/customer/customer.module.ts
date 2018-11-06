import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { LogincustomerComponent } from './logincustomer/logincustomer.component';
import { FormsModule } from "@angular/forms";
import { SignupcustomerComponent } from './signupcustomer/signupcustomer.component';
import { HttpClientModule } from "@angular/common/http";
import { VerifyComponent } from './verify/verify.component';
@NgModule({
  imports: [
    CommonModule,FormsModule,HttpClientModule,
    RouterModule.forChild([
      {
        path:"",
        redirectTo:"login",
        pathMatch:"full"
      },
    {
      path:"login",
      component:LogincustomerComponent
    },
  {
    path:"signup",
    component:SignupcustomerComponent
  },
  {
    path:"verify",
    component:VerifyComponent
  },
{
  path:"dashboard",
  loadChildren:"../dashboard/dashboard.module#DashboardModule"
}])
  ],
  declarations: [LogincustomerComponent,SignupcustomerComponent,VerifyComponent]
})
export class CustomerModule { }
