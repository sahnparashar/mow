import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FetchAllComponent } from './fetch-all/fetch-all.component';
import { RouterModule } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
import { FetchcatComponent } from './fetchcat/fetchcat.component';
import { FetchrestComponent } from './fetchrest/fetchrest.component';
import { FormsModule } from "@angular/forms";
@NgModule({
  imports: [
    CommonModule,HttpClientModule,FormsModule,
    RouterModule.forChild([
      {
        path:"",
        redirectTo:"fetchrest",
        pathMatch:"full"
      },
      {
        path:"fetchrest",
        component:FetchrestComponent
      },
      {
        path:"fetchcat",
        component:FetchcatComponent
      },
      {
      path:"fetchall",
      component:FetchAllComponent
    }])
  ],
  declarations: [FetchAllComponent, FetchcatComponent, FetchrestComponent]
})
export class FetchModule { }
