import { Component, OnInit} from '@angular/core';
import { User } from '../User_Service/user';
import { UserService } from '../User_Service/user.service';
import { LoginId } from '../Login_Service/login-id-service';
import { DataPickerServiceTsService } from '../data-picker-service.ts.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  userId="";
  start="";
  users:User[];
  LoginUser='';
  isAdmin=false;
  isBanglore=false;
  startDate = new Date("2022-08-02");
  endDate = new Date("2022-09-31");
  showLoading=true;
  showTable=false;
  
  constructor(private userService:UserService,private user:LoginId,private Service:DataPickerServiceTsService,private router:Router)
  {
     this.startDate=new Date(this.Service.getStartDate());
     this.endDate=new Date(this.Service.getEndDate());
     this.userService.getUser(this.userId).subscribe((data:User[])=>{
       const filteredData =data.filter(item => {
         const date = new Date(item.incident_date_time);
         return date >= this.startDate && date <= this.endDate;
       });
        this.showLoading=false;
        this.showTable=true;
        this.users=filteredData;
    },error =>{
       console.log(error);
    });   
    }
   ngOnInit() {
 
     this.LoginUser=localStorage.getItem("uuid");
     //checking if the Login User is Belong to Banglore Location 
     if(this.LoginUser=='I531804' ||this.LoginUser=='I541900'|| this.LoginUser=='I577365'
     ||this.LoginUser=='I538309'|| this.LoginUser=='I036000')
     {
       this.isBanglore=true;
     }
     //check whether the user isAdmin 
     if(this.LoginUser=='I539240' || this.LoginUser=='I577232'|| this.LoginUser=='I539128'
     || this.LoginUser=='I544226'||this.LoginUser=='I502998'|| this.LoginUser=='I354797')
     {
     this.isAdmin=true;
     sessionStorage.setItem("isAdmin","true");
     }
 
 
   }
   BackToPIR()
   {
    this.router.navigate(['']);
   }
 
     
   }
  
