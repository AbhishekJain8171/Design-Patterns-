import { Component, OnInit } from '@angular/core';
import { User } from '../User_Service/user';
import { UserService } from '../User_Service/user.service';
import { LoginId } from '../Login_Service/login-id-service';

@Component({
  selector: 'app-open-user-component',
  templateUrl: './open-user-component.component.html',
  styleUrls: ['./open-user-component.component.css']
})

//Component provide openTab information which means showing outages which is inProgress 
export class OpenUserComponentComponent implements OnInit{

  //Here are Storing the information of Outages which inProgress in User Array
  users:User[];


  //UserId created in order to store userId which currently LoggedIn
  userId="";


  //Here we are declare status type for openTab 
  //So we will use this information in order to filter OpenTab information 
  //So we will get infomation of outages which in mitigation,verification,rca,inprogress
  statusInMigigation="in mitigation";
  statusInVerification="in verification";
  statusInRCA="in rca";
  statusInProgress="in progress";


  //Here we are using UserService and LoginService in order to get UserInformation and its LoginId
  constructor(private userService:UserService,private user:LoginId)
  {

    //Here we are getting the information of user who is currently Loggedin
    //We are using LoginService in order to get userId and store UserId in variable userId
      this.userId=user.getUserId();

     //Here we are consuming UserService in order to get outages details
     //After consuming we are storing in User Array
      this.userService.getUser(this.userId).subscribe((data:User[])=>{
         console.log(data);
         this.users=data;
      },error =>{
       //If exception come we are handling that error here 
         console.log(error);
      });
  }

ngOnInit(): void {
      
  }

}
