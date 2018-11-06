import { Component, OnInit,ViewChild } from '@angular/core';
import {HttpClient}from "@angular/common/http"
import { Router } from '@angular/router';
@Component({
  templateUrl: './signupcustomer.component.html',
  styleUrls: ['./signupcustomer.component.css']
})
export class SignupcustomerComponent implements OnInit {
  @ViewChild("customersignupform")form;
  constructor(private http:HttpClient,private route:Router ) { }
  signup(data){
    this.http.post("http://localhost:6363/user/signup",{
      name:data.name,
      email:data.email,
      phone:data.phone,
      password:data.password
    }).subscribe((res:any)=>{
      if(res.success){
        window.alert(res.msg);
        this.route.navigate(['/customer/login'])
      }
      else{
        window.alert(res.msg)
      }
    })
  }
  ngOnInit() {
  }

}

