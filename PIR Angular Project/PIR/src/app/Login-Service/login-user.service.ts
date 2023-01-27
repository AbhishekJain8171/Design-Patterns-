import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { LoginUser } from './login-user';
import { Observable } from 'rxjs';
import { LoginId } from './login-id-service';

@Injectable({
  providedIn: 'root'
})
export class LoginUserService {

     private url="";
     private Id="";
     private Password="";
  // private url="http://localhost:8080/login/I541900";

  constructor(private http:HttpClient,private userId:LoginId) { }
  getLoginUser(): Observable<LoginUser[]>
  {
      this.Id=this.userId.getUserId();
      this.Password=this.userId.getPassword();


      this.url="http://localhost:8080/login/"+this.Id+"/"+this.Password;
      return this.http.get<LoginUser[]>(`${this.url}`);
  }

}

