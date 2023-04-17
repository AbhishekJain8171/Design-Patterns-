//Here we are using AuthService and check whether we allow the user to Access the DashBoard or not
export class AuthService
{
    loggedIn=false;
    isAuthenticated()
    {
       const promise = new Promise(
       (resolve,reject)=>{
        setTimeout(()=>{
            resolve(this.loggedIn)
        },100)
       }
       );
       return promise;
    }


    //Here we are define the Login which allow the user to Login to the DashBoard by setting the
    //property loggedIn to true 
    login()
    {
        this.loggedIn=true;
    }



    //Here we have Logout then AuthGuard not allow the user to see the User information 
    logout()
    {
        this.loggedIn=false;  
    }

}