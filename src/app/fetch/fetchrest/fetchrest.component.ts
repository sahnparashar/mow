import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
@Component({
  selector: 'app-fetchrest',
  templateUrl: './fetchrest.component.html',
  styleUrls: ['../../../assets/css/bootstrap.min.css', './fetchrest.component.css', '../../../assets/css/themify-icons.css', '../../../assets/css/swiper.min.css', '../../../assets/css/style.css', '../../../assets/css/simple-line-icons.css', '../../../assets/css/set2.css', '../../../assets/css/magnific-popup.css', '../../../assets/css/font-awesome.min.css']

})
export class FetchrestComponent implements OnInit {
  names; ids; cats; tempcat; restid; switchcondition; items; totalPrice = 0; username; token;
  status; website; phone; address; city = []; lane = []; landmark = []; pincode = []; street = [];
  cart = false; switchcondition1; itemnameArray = []; priceArray = []
  constructor(private http: HttpClient, private router: Router) {
    this.token = sessionStorage.getItem("token")
    // console.log(this.token)
    this.http.get("/user/getrest").subscribe((res: any) => {
      // console.log(res.id,'-----')
      this.names = res.name;
      this.ids = res.id;
      this.status = res.status;
      this.address = res.address; 
      this.phone = res.phone;
      this.website = res.website;
      for (let i = 0; i < this.address.length; i++) {
        this.lane.push(this.address[i].lane)
        this.city.push(this.address[i].city)
        this.landmark.push(this.address[i].landmark)
        this.pincode.push(this.address[i].pincode)
        this.street.push(this.address[i].street)
      }
    })
    if (!this.token || this.token == "undefined" || this.token == "") {
      console.log("token not found")
    }
    else {
      this.http.post("/user/username", {
        token: sessionStorage.getItem('token')
        // token: "kgxBvhjy1u5m0ddYvjhYg9SLpl0dbssZ"
      }).subscribe((res: any) => {
        if (res.msg == "error") {
          console.log("error--", res.error)
          this.username = '';
        }
        else {
          this.username = res.msg

          console.log(this.username)

        }
      })
    }





  }

  logout() {
    sessionStorage.removeItem("token")
    window.location.reload()
  }

  // showid(temp) {
  //   console.log(temp);
  // }
  // // to save restaurent id for fetch category in next page
  saveRestId(temp) {
    sessionStorage.setItem("resId", temp)
    this.router.navigate(['fetch/fetchcat'])
  }
  // //  To get items by id of restaurant
  // getitem(temp_id) {
  //   //  console.log(temp_id)
  //   this.http.post("/user/getitems", {
  //     catid: temp_id,
  //     id: this.restid
  //   }).subscribe((res: any) => {
  //     console.log("cat id--------", temp_id, "------------");
  //     this.items = res.data;
  //     // console.log(this.items);
  //     sessionStorage.setItem("catId", temp_id)
  //     setTimeout(() => {
  //       this.switchcondition = "item"
  //       // console.log("****",this.items,"****")
  //     }, 1)

  //   })
  // }
  // //add to cart function
  // addtocart(itemname, price) {
  //   this.itemnameArray.push(itemname);
  //   this.priceArray.push(price);
  //   this.totalPrice = this.totalPrice + price
  //   console.log("itemarray", this.itemnameArray);
  //   console.log("price array", this.priceArray)
  //   this.cart = true;
  // }
  // clearCart() {
  //   this.cart = false;
  //   this.itemnameArray = [];
  //   this.priceArray = [];
  //   this.totalPrice = 0;
  // }
  ngOnInit() {
  }

}
