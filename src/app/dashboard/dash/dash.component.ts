import { Component, OnInit } from '@angular/core';
// import { MyserviceService } from '../../myservice.service';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { Router, RouterLink, RouterLinkActive } from '../../../../node_modules/@angular/router';



@Component({

  templateUrl: './dash.component.html',
  styleUrls: ['../../../assets/css/bootstrap.min.css','./dash.component.css','../../../assets/css/themify-icons.css','../../../assets/css/swiper.min.css','../../../assets/css/style.css','../../../assets/css/simple-line-icons.css','../../../assets/css/set2.css','../../../assets/css/magnific-popup.css','../../../assets/css/font-awesome.min.css']
})

export class DashComponent implements OnInit {
  username =  '' ;
  
  constructor(private http:HttpClient,
  private router:Router) { 
    //  if(!sessionStorage.getItem('token') || sessionStorage.getItem('token')==null){
    //     console.log("works");
    //  }
    //  else{
    //    this.ram=true;
    //  }
    
      
    





    this.http.post("http://localhost:6363/user/username",{
      token: sessionStorage.getItem('token')
    }).subscribe((res:any)=>{
          if(res.msg == "error")
          {
            console.log("error--",res.error)
            this.username='';
          }
          else{
       this.username= res.msg

       console.log(this.username) 

          }
      })
   
   

  }
  

  logout() {
    sessionStorage.removeItem("token")
    this.router.navigate(['login/customer'])
  }
  
  
  
  
  ngOnInit() {
  }

}
