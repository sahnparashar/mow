import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Session } from 'protractor';
@Component({
  selector: 'app-fetchcat',
  templateUrl: './fetchcat.component.html',
  styleUrls: ['./fetchcat.component.css']
})
export class FetchcatComponent implements OnInit {
  temp;tempcat;cats=[];cart=false;cartitemname=[];cartitemprice=[];cartitemquantity=[];
  constructor(private http:HttpClient) {
    this.temp=sessionStorage.getItem('resId')
    this.http.post(" /user/getcat", {
      id: this.temp
    }).subscribe((res: any) => {
      this.tempcat = res.data;
      this.cats = this.tempcat.category;
      // console.log("restid---", this.temp, "---")
      console.log("cats---", this.cats, "---")
      // console.log('tempcat',this.tempcat)
    })
    sessionStorage.setItem("catId", this.temp)
  }
  try(){
    console.log("try")
  }
  addtonewcart(itemname,itemprice){
    if((sessionStorage.getItem('itemname')==null)||(sessionStorage.getItem('itemname')==undefined)||(sessionStorage.getItem('itemname')=="")){
      sessionStorage.setItem('itemname',itemname);
      this.cartitemname.push(itemname);
      sessionStorage.setItem('itemprice',itemprice);
      this.cartitemprice.push(itemprice);
      sessionStorage.setItem('itemquantity','1');
      this.cartitemquantity.push(1);
      this.cart=true;
    }
  }
  addtooldcart(itemname,itemprice){
    // if((sessionStorage.getItem('itemname')==null)||(sessionStorage.getItem('itemname')==undefined)||(sessionStorage.getItem('itemname')=="")){
      // sessionStorage.setItem('itemname',itemname);
      // sessionStorage.setItem('itemprice',itemprice);
      // sessionStorage.setItem('itemquantity','1');
      // this.cart=true;
    // }
    // getting all the data from session storage
    this.cartitemname.push(JSON.parse(sessionStorage.getItem('itemname')))
    this.cartitemprice.push(JSON.parse(sessionStorage.getItem('itemprice')))
    this.cartitemquantity.push(JSON.parse(sessionStorage.getItem('itemquantity')))
    // adding new data in it
    this.cartitemname.push(itemname);
    this.cartitemprice.push(itemprice);
    this.cartitemquantity.push('1');
    // storing new data in sessionStorage
    sessionStorage.setItem('itemname',JSON.stringify(this.cartitemname));
      sessionStorage.setItem('itemprice',JSON.stringify(this.cartitemprice));
      sessionStorage.setItem('itemquantity',JSON.stringify(this.cartitemquantity));
  }
  add(index){
    console.log(index)
  }
  sub(index){
    console.log(index)
  }
  ngOnInit() {
  }

}
