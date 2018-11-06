import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path:"",
        redirectTo:"fetch",
        pathMatch:"full"
      },
    {
      path:"fetch",
      loadChildren:"./fetch/fetch.module#FetchModule"
    },{
      path:"test",
      component:TestComponent
    },
  {
    path:"add",
    loadChildren:"./add/add.module#AddModule"
  },
{
  path:"restaurant",
  loadChildren:"./restaurant/restaurant.module#RestaurantModule"
},
{
  path:"customer",
  loadChildren:"./customer/customer.module#CustomerModule"
}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
