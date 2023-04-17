import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { LoginUser } from './login-user';
import { Observable } from 'rxjs';
import { LoginId } from './login-id-service';

@Injectable({
  providedIn: 'root'
})
export class LoginUserService {

//Declare variable url which is used to store url information
private url="";
//Declare variable Id which hold Id information of current LoggedIn user
private Id="";
//Declare variable Password which hold Password information of current LoggedIn user
private Password="";


//Here we are consuming the LoginService and HttpClient 
constructor(private http:HttpClient,private userId:LoginId) { }



//Method is Used to Get Login Information about the user.
getLoginUser(): Observable<LoginUser[]>
{
      //Here are Storing Id of User in Id variable.
      //Here we are Using Login Service Method getUserId().
      this.Id=this.userId.getUserId();

      //Here we are storing the Password of the user in password field by using Login Service Method getPassowrd()
      this.Password=this.userId.getPassword();

      //Here we are creating Dynamic url 
      this.url="http://localhost:8080/login/"+this.Id+"/"+this.Password;

      //We are calling Http client with url and return the result 
      return this.http.get<LoginUser[]>(`${this.url}`);
}



}

