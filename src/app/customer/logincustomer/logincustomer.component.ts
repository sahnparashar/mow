import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import{ Router,ActivatedRoute} from "@angular/router";
@Component({
  templateUrl: './logincustomer.component.html',
  styleUrls: ['./logincustomer.component.css']
})
export class LogincustomerComponent implements OnInit {

  num : String = "";
    flag: Boolean=false;

    ram = ""; 
  constructor(private http:HttpClient, 
              private router: Router,
              private activatedroute:ActivatedRoute
  ) {
    this.ram=sessionStorage.getItem('token')
    if(!this.ram || this.ram==""||this.ram==undefined)
    {

    }
    else{ 
      this.router.navigate(['/fetch/fetchrest'])

    }

  }

  
  
  login(data){
    
    this.http.post("http://localhost:6363/user/login",{
      email:data.email,
      password:data.password
    }).subscribe((res:any)=>{
      console.log(res.msg)
      
      if(res.msg=="please")
      { 
        console.log(this.flag);
       this.flag=true
       this.num=""; 
      }
      else{
        this.num=res.msg;
        this.flag=false
        sessionStorage.setItem('token',res.token)
        // window.alert(res.token)
        this.router.navigate(['/fetch/fetchrest'])


      }

      

    })
  
  }


    rembo() {
      this.router.navigate(['../dashboard/dashboard'],{relativeTo: this.activatedroute})
      console.log("rembo triggered")
    }


  ngOnInit() {
  }

}
