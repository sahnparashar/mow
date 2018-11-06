import { Component, OnInit } from '@angular/core';
import { AddItemComponent } from '../add-item/add-item.component';
import { HttpClient } from "@angular/common/http";
@Component({
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  constructor(private http:HttpClient) { }
  addcat(temp){
    this.http.post("http://localhost:6363/user/insertcategory",{
      category:temp.category
    }).subscribe((res:any)=>{
      if(res.msg=="Item already insterted")
      {
        let q='"'+res.msg+'" So please enter a new category'
        window.alert(q)
    }
    else{
      window.alert(res.msg)
    }
    })

  }
  ngOnInit() {
  }

}
