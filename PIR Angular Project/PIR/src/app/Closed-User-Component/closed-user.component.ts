import { Component, OnInit } from '@angular/core';
import { User } from '../User-Service/user';
import { UserService } from '../User-Service/user.service';
import { LoginId } from '../Login-Service/login-id-service';

@Component({
  selector: 'app-closed-user',
  templateUrl: './closed-user.component.html',
  styleUrls: ['./closed-user.component.css']
})
export class ClosedUserComponent implements OnInit {

  users:User[];
  userId="";
  statusNow="confirmed";

  constructor(private userService:UserService,private user:LoginId)
  {
      this.userId=user.getUserId();
      this.userService.getUser(this.userId).subscribe((data:User[])=>{
         console.log(data);
         this.users=data;
      },error =>{
         console.log(error);
      });
  }

  ngOnInit(): void {
      
  }

}









