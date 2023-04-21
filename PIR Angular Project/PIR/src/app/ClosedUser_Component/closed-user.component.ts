import { Component, OnInit } from '@angular/core';
import { User } from '../User_Service/user';
import { UserService } from '../User_Service/user.service';
import { LoginId } from '../Login_Service/login-id-service';

@Component({
  selector: 'app-closed-user',
  templateUrl: './closed-user.component.html',
  styleUrls: ['./closed-user.component.css']
})
//Component provide closeTab information which means showing outages which is in confirmed status 
export class ClosedUserComponent implements OnInit {

//variables Used
users:User[];
filteredUsers_TTR_Reach:User[];
filteredUsers_TTR_Not_Reach:User[];
filteredUsers_TTI_Reach:User[];
filteredUsers_TTI_Not_Reach:User[];
isAdmin=false;
LoginUser='';
isBanglore=false;
userId="";
showLoading=true;
showTable=false;



  //Here we are using UserService and LoginService in order to get UserInformation and its LoginId
  constructor(private userService:UserService,private user:LoginId)
  {


    //Here we are getting the information of user who is currently Loggedin
    //We are using LoginService in order to get userId and store UserId in variable userId
    
     //Here we are consuming UserService in order to get outages details
     //After consuming we are storing in User Array 
      this.userService.getUser(this.userId).subscribe((data:User[])=>{
         console.log(data);
         this.showLoading=false;
         this.showTable=true;
         this.users=data;
      },error =>{
        //If exception come we are handling that error here 
         console.log(error);
      });
  }

  ngOnInit(): void 
  {
    //when click on PIR first Time it shows AllList of Outages 
this.ListOfAllOutages();
//Find the Login User ID by DateService 
this.LoginUser=localStorage.getItem("uuid");
//checking if the Login User is Belong to Banglore Location or Not 
   //checking if the Login User is Belong to Banglore Location 
   if(this.LoginUser=='I531804' ||this.LoginUser=='I541900'|| this.LoginUser=='I577365'
   ||this.LoginUser=='I538309')
   {
     this.isBanglore=true;
   }
   //check whether the user isAdmin 
   if(this.LoginUser=='I539240' || this.LoginUser=='I577232'|| this.LoginUser=='I539128'
   || this.LoginUser=='I544226'||this.LoginUser=='I502998'|| this.LoginUser=='I354797'|| this.LoginUser=='I036000')
   {
   this.isAdmin=true;
   sessionStorage.setItem("isAdmin","true");
   }

}
//Show List of outages related to User 
ListOfAllOutages() {
    this.userService.getUser(this.userId).subscribe((data:User[])=>{
      console.log(data);
      this.users=data;
   },error =>{
     //If exception come we are handling that error here 
      console.log(error);
   });
 }

//Filter Result where TTR Reach in Dropdown
//Here we are checking according to Location whether it is Banglore Location or Global Location 
  TTR_Reach() {
    this.userService.getUser(this.userId).subscribe((data: User[]) => {
      this.users = data;
      const filteredData_TTR_Reach = this.users.filter(item => {
        if (item.time_to_resolve == null) {
          return false;
        }
            
       if(this.isBanglore)
          return parseInt(item.time_to_resolve.toString()) > 40 && item.ticket_id==null;

        return parseInt(item.time_to_resolve.toString()) > 60 && item.ticket_id==null;
      });
      this.filteredUsers_TTR_Reach = filteredData_TTR_Reach;
      this.users = [...this.filteredUsers_TTR_Reach]; // create a copy of the filtered array
    }, error => {
      console.log(error);
    });

  }
 //Filter Result where TTI Reach in Dropdown 
  TTI_Reach() {
    this.userService.getUser(this.userId).subscribe((data: User[]) => {

      console.log("TTI REACH")
      this.users = data;
      const filteredData_TTI_Reach = this.users.filter(item => {
        if (item.time_to_first_announcement== null) {
          return false;
        }
        const timeToFirstAnnouncement = parseInt(item.time_to_first_announcement.toString());
        return timeToFirstAnnouncement > 15 && item.ticket_id==null;
        
      });
      this.filteredUsers_TTI_Reach = filteredData_TTI_Reach;
      this.users = [...this.filteredUsers_TTI_Reach]; // create a copy of the filtered array
    }, error => {
      console.log(error);
    });

  }
//Filter Result where TTR Not Reach in Dropdown 
//Here we are checking according to Location whether it is Banglore Location or Global Location 
  TTR_Not_Reach()
  {
    this.userService.getUser(this.userId).subscribe((data: User[]) => {
      this.users = data;
      const filteredData_TTR_Not_Reach = this.users.filter(item => {
        if (item.time_to_resolve== null) {
          return false;
        }

        if(this.isBanglore)
           return parseInt(item.time_to_resolve.toString()) <= 40 && item.ticket_id==null;

        return parseInt(item.time_to_resolve.toString()) <= 60 && item.ticket_id==null;
      });
      this.filteredUsers_TTR_Not_Reach = filteredData_TTR_Not_Reach;
      this.users = [...this.filteredUsers_TTR_Not_Reach]; // create a copy of the filtered array
    }, error => {
      console.log(error);
    });
  }

//Filter Result where TTI Not Reach in Dropdown 
TTI_Not_Reach()
  {
    this.userService.getUser(this.userId).subscribe((data: User[]) => {
      this.users = data;
      const filteredData_TTI_Not_Reach = this.users.filter(item => {
        if (item.time_to_first_announcement == null) {
          return false;
        }
        const timeToFirstAnnouncement = parseInt(item.time_to_first_announcement.toString());
        return timeToFirstAnnouncement < 15 && item.ticket_id==null;
      });
      this.filteredUsers_TTI_Not_Reach = filteredData_TTI_Not_Reach;
      this.users = [...this.filteredUsers_TTI_Not_Reach]; // create a copy of the filtered array
    }, error => {
      console.log(error);
    });
  }

  
      
  }











