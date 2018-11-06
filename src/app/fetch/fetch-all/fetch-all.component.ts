import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Component({
  templateUrl: './fetch-all.component.html',
  styleUrls: ['./fetch-all.component.css']
})
export class FetchAllComponent implements OnInit {
  obj;flag;
  constructor(private http:HttpClient) {
    this.http.get("http://localhost:6363/user/alldata").subscribe((res:any)=>{
      this.obj=res.data
    })
    setTimeout(()=>{
      console.log(this.obj)
      this.flag=true
    },1 )
   }

  ngOnInit() {
  }

}
