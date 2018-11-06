import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddItemComponent } from './add-item/add-item.component';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
@NgModule({
  imports: [
    CommonModule,FormsModule,HttpClientModule,
    RouterModule.forChild([{
      path:"",
      redirectTo:"addcat",
      pathMatch:"full"
    },
  {
    path:"addcat",
    component:AddCategoryComponent
  },
{
  path:"additem",
  component:AddItemComponent
}])
  ],
  declarations: [AddCategoryComponent, AddItemComponent]
})
export class AddModule { }
