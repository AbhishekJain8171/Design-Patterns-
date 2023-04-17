import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from 'rxjs';
import { AuthService } from "./auth-service";


@Injectable()
export class AuthGuard implements CanActivate
{
  constructor(private authService:AuthService,private router:Router)
  {}
  //Here we are defining the Logic whether user is Authenticate or not 
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<boolean> | Promise<boolean>| boolean
  {
        return  this.authService.isAuthenticated().then(
            (authenticated:boolean)=>
            {
                //If the user is successfully able to Login 
                if(authenticated)
                  {
                    return true;
                  }
                  else
                  {
                    //If the user is not Authenticate then router navigate to the LoginPage
                    this.router.navigate(['/']);
                  }
            }
         );
  }
}