import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // private url="http://localhost:8080/I541900";

  private url="";

  constructor(private http:HttpClient) { }
  getUser(value: string): Observable<User[]>
  {
      this.url="http://localhost:8080/"+value;
      return this.http.get<User[]>(`${this.url}`);
  }
}
