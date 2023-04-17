import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
  
//class is used to Hold the LoginInformation of User So that we can use this class where we want to be  
export class LoginId
{

  //Declare variable to Hold the User Id 
  private Id="";

  //Declare variable which is used to store the User Password information 
  private Password="";

  //Declare flag which store whether user is Admin or not
  private Is_Admin="";

  private CountPIR="";

  //Here we are setting UserId
  setUserId(value: string)
  {
      this.Id=value;
  }

  //Here are Getting UserId 
  getUserId()
  {
     return this.Id;
  }
  
  //Here are Setting User Password
  setPassword(val: string)
  {
    this.Password=val;
  }

  //Here we are defining getPassword method 
  //used to get the password information of User
  getPassword()
  {
   return this.Password;
  }

  setAdminStatus(val:string)
  {
      this.Is_Admin=val;  
  }
  getAdminStatus()
  {
     return this.Is_Admin;
  }

  setPIR(val:string)
  {
    this.CountPIR=val;
  }
  getPIR()
  {
    return this.CountPIR;
  }


}