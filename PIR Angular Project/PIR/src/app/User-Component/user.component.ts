import { Component, OnInit } from '@angular/core';
import { User } from '../User-Service/user';
import { UserService } from '../User-Service/user.service';
import { LoginId } from '../Login-Service/login-id-service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{

  users:User[];
  userId="";
  

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
