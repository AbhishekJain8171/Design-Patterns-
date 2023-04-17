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

  //Here are Storing the information of Outages which inProgress in User Array
  users:User[];

  //UserId created in order to store userId which currently LoggedIn
  userId="";

  //Here we declare and intialize the variable which is uses to filter the outages 
  statusNow="confirmed";



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

  ngOnInit(): void 
  {
      
  }

}









