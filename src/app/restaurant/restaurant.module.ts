import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router'
import { LoginrestaurentComponent } from './loginrestaurent/loginrestaurent.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { SignuprestaurentComponent } from './signuprestaurent/signuprestaurent.component';
@NgModule({
  imports: [
    CommonModule,FormsModule,HttpClientModule,
    RouterModule.forChild([{
      path:"",
      redirectTo:"login",
      pathMatch:"full"
    },
  {
    path:"login",
    component:LoginrestaurentComponent
  },
{
  path:"signup",
  component:SignuprestaurentComponent
}])
  ],
  declarations: [LoginrestaurentComponent,SignuprestaurentComponent]
})
export class RestaurantModule { }
