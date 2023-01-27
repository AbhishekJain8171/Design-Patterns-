import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginUser } from '../Login-Service/login-user';
import { LoginUserService } from '../Login-Service/login-user.service';
import { AuthService } from '../Auth-Guard-Services/auth-service';
import { NgForm } from '@angular/forms';
import { LoginId } from '../Login-Service/login-id-service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {


  usersLogin:LoginUser[];
  constructor(private userService:LoginUserService,private router:Router,private auth:AuthService,private setUser:LoginId)
  {
         
  }

  onLoadServer()
  {
     console.log('How are you Abhishek Jain');
  }

  id="";
  password="";
  onSubmit(form:NgForm)
  {
      console.log(form.value);

      this.id= form.value.uname;
      this.password=form.value.psw;

      this.setUser.setUserId(this.id);
      this.setUser.setPassword(this.password);


      this.userService.getLoginUser().subscribe((data:LoginUser[])=>{
        console.log(data);
        this.usersLogin=data;
        this.auth.login();
        this.router.navigate(['/records']);
     },error =>{
      console.log(error);
      this.auth.logout();
    });  
   form.reset();
  }


  ngOnInit(): void
   {
   }

}
