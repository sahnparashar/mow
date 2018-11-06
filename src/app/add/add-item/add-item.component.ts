import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Component({
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  obj;cat=[];
  constructor(private http:HttpClient) {
    this.http.get("http://localhost:6363/user/alldata").subscribe((res:any)=>{
      this.obj=res.data
      for(let i=0;i<this.obj.length;i++){
        this.cat.push(this.obj[i].category )
      }
  })
   }
   additem(temp){
    //  console.log(temp)
    this.http.post("http://localhost:6363/user/additem",{
      category:temp.category,
      item:temp.item
    }).subscribe((res:any)=>{
      window.alert(res.msg)
    })
    // this.http.get("http://localhost:6363/user/alldata").subscribe((res:any)=>{
    //   window.alert(res.msg)
    // })
   }
  ngOnInit() {

  }

}
