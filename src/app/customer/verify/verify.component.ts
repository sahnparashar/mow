import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Component({
  
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {
      dd :String="";
      flag:Boolean = false

  constructor(private http:HttpClient) { }

  verify(data){
    
    this.http.post("http://localhost:6363/user/verify",{
      token:data.token
    }).subscribe((res:any)=>{
     
     if(res.msg=="found")
     {
       this.dd="";
       this.flag=true;

     }
     else{
       this.dd=res.msg;
       this.flag=false;
     }
      
    })
  
  }

  ngOnInit() {
  }

}
