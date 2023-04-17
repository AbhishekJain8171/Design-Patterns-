import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { LoginUser } from '../Login_Service/login-user';
import { LoginUserService } from '../Login_Service/login-user.service';
import { AuthService } from '../AuthGuard_Service/auth-service';
import { NgForm } from '@angular/forms';
import { LoginId } from '../Login_Service/login-id-service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

//class contain the Login information of user
export class LoginComponent implements OnInit {

//Declare variable id in order to store id information of the user
id="";
//Password variable here store the user password information 
password="";

Is_Admin="";



//Here we are injecting the LoginService,AuthService and Router in order to perform operation
constructor(private userService:LoginUserService,private router:Router,private auth:AuthService,private setUser:LoginId,private toastr: ToastrService)
{}

onLoadServer()
{}

//Here we defining the Logic what should happen when user click on Submit Button
onSubmit(form:NgForm)
  {
      console.log(form.value);

      //Here we are getting value of username from form and store in Id variable
      this.id= form.value.uname;

      //Here we are storing the password information of the user in the variable 
      //Password which the user getting from the form 
      this.password=form.value.psw;


      //Here we setting the value in Login Id service which we are getting from User
      //Here we are setting UserId
      this.setUser.setUserId(this.id);

      //Here we setting user Password
      this.setUser.setPassword(this.password);

      //Here we are consuming LoginService 
      //Here we checking whether the User is Authenticate or not
      this.userService.getLoginUser().subscribe((data:LoginUser[])=>{

        console.log(data);

        data.forEach(function (value) {
          console.log(typeof(value.is_ADMIN));
          this.Is_Admin = value.is_ADMIN;
        }.bind(this));
        
        //Here we set User whether he is Admin or not
        this.setUser.setAdminStatus(this.Is_Admin);
        //Here we are Authenticate User using Auth Guard  
        this.auth.login();

        this.toastr.success("Welcome to PIR DASHBOARD :) ")
        
        //Here after Authenticate we are navigating to Main page 
        this.router.navigate(['/records']);
       
     },error =>{
      //Here we catch the Error
      console.log(error);
      //If Error occur AuthGuard not allowed the User to Access the Data
      this.auth.logout();
      this.toastr.error('Something went wrong')
    });  
   form.reset();
  }

  ngOnInit(): void
   { }

}
