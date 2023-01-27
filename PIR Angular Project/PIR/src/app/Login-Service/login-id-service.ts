import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })

export class LoginId
{
  private Id="";
  private Password="";
  
  setUserId(value: string)
  {
      this.Id=value;
  }
  getUserId()
  {
     return this.Id;
  }
  
  setPassword(val: string)
  {
    this.Password=val;
  }
  getPassword()
  {
       return this.Password;
  }

}