import { Component} from '@angular/core';
import { User } from '../User_Service/user';
import { UserService } from '../User_Service/user.service';
import { LoginId } from '../Login_Service/login-id-service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})

export class NotificationComponent {
  users:User[];
  userId="";
  constructor(private userService:UserService,private user:LoginId)
  {
       this.userId=user.getUserId();
       this.userService.getUser(this.userId).subscribe((data:User[])=>{
       this.users=data;
      },error =>{
           console.log(error);
      });
       }    
  }
