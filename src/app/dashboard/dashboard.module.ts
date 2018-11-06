import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router"
import { FormsModule } from "@angular/forms";
import { DashComponent } from './dash/dash.component';
// import { MyserviceService } from '../myservice.service';

@NgModule({
  imports: [
    CommonModule,HttpClientModule,FormsModule,
    RouterModule.forChild([{
      path:"",
      redirectTo:"dashboard",
      pathMatch:"full"
    },
     {
      path:"dashboard",
      component:DashComponent
     }
  
  ])
  ],providers: [],
  declarations: [DashComponent]
})
export class DashboardModule { }
