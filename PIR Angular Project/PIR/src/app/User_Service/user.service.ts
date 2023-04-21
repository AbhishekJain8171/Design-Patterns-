import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { User } from './user';
import { Observable } from 'rxjs';
import { LoginId } from '../Login_Service/login-id-service';


@Injectable({
  providedIn: 'root'
})


export class UserService {
 // private url="http://localhost:8080/I541900";

  //defining variable
  private url="";

  //declare variable in order to check the status User whether he is Admin or not
  private Is_Admin="";

  //Inject HttpClient provided by angular in order to utilise API
  constructor(private http:HttpClient,private loginService:LoginId) { }

  //this function is used to return User record By Consuming the API
  getUser(Id: string): Observable<User[]>
  {
      
       //here I am checking the status of User whether User is Admin or not
       this.Is_Admin=this.loginService.getAdminStatus();  

      //here I am creating the url in order to get the information from spring boot based on certain Id
      // //this.url="http://localhost:8080/"+Id+"/"+this.Is_Admin;
      this.url="http://localhost:8080/PriorityDashboardRevamped/pir/tickets/"+"I531804"+"/"+"isAdmin";
      //here we are return the information of user 
      return this.http.get<User[]>(`${this.url}`);
  }

}
