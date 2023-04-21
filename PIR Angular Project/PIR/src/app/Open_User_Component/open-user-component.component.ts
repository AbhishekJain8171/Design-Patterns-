import { Component, OnInit } from '@angular/core';
import { User } from '../User_Service/user';
import { UserService } from '../User_Service/user.service';
import { LoginId } from '../Login_Service/login-id-service';

@Component({
  selector: 'app-open-user-component',
  templateUrl: './open-user-component.component.html',
  styleUrls: ['./open-user-component.component.css']
})


export class OpenUserComponentComponent implements OnInit{
  users:User[];
  userId="";
  filteredUsers_TTR_Reach:User[];
  filteredUsers_TTR_Not_Reach:User[];
  filteredUsers_TTI_Reach:User[];
  filteredUsers_TTI_Not_Reach:User[];
  isAdmin=false;
  LoginUser='';
  isBanglore=false;
  showLoading=true;
  showTable=false;

  constructor(private userService:UserService,private user:LoginId)
  {

      this.userId=user.getUserId();
      this.showLoading=true;
      this.showTable=false;
      this.userService.getUser(this.userId).subscribe((data:User[])=>{
         console.log(data);
         this.showLoading=false;
         this.showTable=true;
         this.users=data;
      },error =>{
       
         console.log(error);
      });
  }

ngOnInit(): void {

this.ListOfAllOutages();

this.LoginUser=localStorage.getItem("uuid");

   if(this.LoginUser=='I531804' ||this.LoginUser=='I541900'|| this.LoginUser=='I577365'
   ||this.LoginUser=='I538309')
   {
     this.isBanglore=true;
   }
 
   if(this.LoginUser=='I539240' || this.LoginUser=='I577232'|| this.LoginUser=='I539128'
   || this.LoginUser=='I544226'||this.LoginUser=='I502998'|| this.LoginUser=='I354797'|| this.LoginUser=='I036000')
   {
   this.isAdmin=true;
   sessionStorage.setItem("isAdmin","true");
   }
}

ListOfAllOutages() {
  this.showLoading=true;
  this.showTable=false;
    this.userService.getUser(this.userId).subscribe((data:User[])=>{
      console.log(data);
      this.showLoading=false;
      this.showTable=true;
      this.users=data;
   },error =>{
      
      console.log(error);
   });
 }


  TTR_Reach() {
    this.showLoading=true;
    this.showTable=false;
    this.userService.getUser(this.userId).subscribe((data: User[]) => {
      this.users = data;
      const filteredData_TTR_Reach = this.users.filter(item => {
        if (item.time_to_resolve == null) {
          return false;
        }
            
       if(this.isBanglore)
          return parseInt(item.time_to_resolve.toString()) > 40;

        return parseInt(item.time_to_resolve.toString()) > 60;
      });
      this.filteredUsers_TTR_Reach = filteredData_TTR_Reach;
      this.showLoading=false;
      this.showTable=true;
      this.users = [...this.filteredUsers_TTR_Reach]; // create a copy of the filtered array
    }, error => {
      console.log(error);
    });

  }

  TTI_Reach() {
    this.showLoading=true;
    this.showTable=false;
    this.userService.getUser(this.userId).subscribe((data: User[]) => {

      console.log("TTI REACH")
      this.users = data;
      const filteredData_TTI_Reach = this.users.filter(item => {
        if (item.time_to_first_announcement == null) {
          return false;
        }
        const timeToFirstAnnouncement = parseInt(item.time_to_first_announcement.toString());
        return timeToFirstAnnouncement > 15;
        
      });
      this.filteredUsers_TTI_Reach = filteredData_TTI_Reach;
      this.showLoading=false;
      this.showTable=true;
      this.users = [...this.filteredUsers_TTI_Reach]; // create a copy of the filtered array
    }, error => {
      console.log(error);
    });

  }

  TTR_Not_Reach()
  {
    this.showLoading=true;
    this.showTable=false;
    this.userService.getUser(this.userId).subscribe((data: User[]) => {
      this.users = data;
      const filteredData_TTR_Not_Reach = this.users.filter(item => {
        if (item.time_to_resolve == null) {
          return false;
        }

        if(this.isBanglore)
           return parseInt(item.time_to_resolve.toString()) <= 40;

        return parseInt(item.time_to_resolve.toString()) <= 60;
      });
      this.filteredUsers_TTR_Not_Reach = filteredData_TTR_Not_Reach;
      this.showLoading=false;
      this.showTable=true;
      this.users = [...this.filteredUsers_TTR_Not_Reach]; // create a copy of the filtered array
    }, error => {
      console.log(error);
    });
  }


TTI_Not_Reach()
  {
    this.showLoading=true;
    this.showTable=false;
    this.userService.getUser(this.userId).subscribe((data: User[]) => {
      this.users = data;
      const filteredData_TTI_Not_Reach = this.users.filter(item => {
        if (item.time_to_first_announcement == null) {
          return false;
        }
        const timeToFirstAnnouncement = parseInt(item.time_to_first_announcement.toString());
        return timeToFirstAnnouncement < 15;
      });
      this.filteredUsers_TTI_Not_Reach = filteredData_TTI_Not_Reach;
      this.showLoading=false;
      this.showTable=true;
      this.users = [...this.filteredUsers_TTI_Not_Reach]; // create a copy of the filtered array
    }, error => {
      console.log(error);
    });
  }


      
  }


