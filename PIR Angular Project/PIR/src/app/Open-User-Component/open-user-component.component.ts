import { Component, OnInit } from '@angular/core';
import { User } from '../User-Service/user';
import { UserService } from '../User-Service/user.service';
import { LoginId } from '../Login-Service/login-id-service';

@Component({
  selector: 'app-open-user-component',
  templateUrl: './open-user-component.component.html',
  styleUrls: ['./open-user-component.component.css']
})
export class OpenUserComponentComponent implements OnInit{
  users:User[];
  userId="";
  statusInMigigation="in mitigation";
  statusInVerification="in verification";
  statusInRCA="in rca";
  statusInProgress="in progress";

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
