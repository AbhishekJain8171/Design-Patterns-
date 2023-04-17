import { DatePipe } from '@angular/common';
import { Component, OnInit,AfterViewInit} from '@angular/core';
import { Router } from '@angular/router';
import {LoginUser} from '../Login_Service/login-user';
import {LoginUserService} from '../Login_Service/login-user.service';
import { DataPickerServiceTsService } from '../data-picker-service.ts.service';
import { ChangeDetectorRef } from '@angular/core';
import { LoginId } from '../Login_Service/login-id-service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-sidebar-nav',
  templateUrl: './sidebar-nav.component.html',
  styleUrls: ['./sidebar-nav.component.css']
})
export class SidebarNavComponent implements OnInit,AfterViewInit{
  
  //Here are declaring the variable to check whether Home,open and closed tab is clicked or not
  //Intially the tabs are not clicked so we are declaring the value of variable as false
  closedTabClicked=false;
  homeTabClicked=false;
  openTabClicked=false;
  fetch=false;
  notification=false;
  countPIRTickets: string ="0" ;

  
  

  //Here are storing the information of Login User 
  //Information comes from table PIR_Login in Incident Dragon which contains information 
  loginusers:LoginUser[];
  

  //Here are Using LoginUserService in order to get information about Login user
  //We are using Router in order to perform the navigation operation
  constructor(private router:Router,private loginService:LoginUserService,private Date:DataPickerServiceTsService, private changeDetectorRef: ChangeDetectorRef,private user:LoginId,private toastr: ToastrService)
  {
    this.loginService.getLoginUser().subscribe((data:LoginUser[])=>{  
    console.log(data);
    this.loginusers=data;
    setTimeout(() => {
      this.countPIRTickets = this.user.getPIR();
      this.toastr.info("PIR Tickets NOT MENTIONED "+"->"+this.countPIRTickets);
    }, 3000);
   
   });      
  }

startDate:any;
endDate:any;
startDateInput: any;
endDateInput: any;


fetchDate() {   
  this.startDate = this.startDateInput;
  this.endDate = this.endDateInput;
  this.Date.setStartDate(this.startDate);
  this.Date.setEndDate(this.endDate);
  this.router.navigate(['/filter']);
  
}

Notification()
{
  this.notification=true;
  this.fetch = false;
  this.closedTabClicked = false;
  this.homeTabClicked = false;
  this.openTabClicked = false;
  

}

//this function will work when someone clicked on the OpenTab
 OpenButtonClicked()
 {
   //Here we are setting OpenTabClicked to true in order to inform the Angular OpenTab should open at this time
   //By using that we are making some only OpenTab is diplayed and no other will open
   this.homeTabClicked=false;
   this.openTabClicked=true;
   this.closedTabClicked=false;
   this.fetch=false;
   this.notification=false;
  
 }



 //this function will work when someone clicked on the closedButtonTab
 closedButtonClicked()
 {
  //Here we are setting ClosedTabClicked to true in order to inform the Angular CloseTab should open at this time
   //By using that we are making some only CloseTab is diplayed and no other will open  
  this.homeTabClicked=false;
  this.openTabClicked=false;
  this.closedTabClicked=true;
  this.fetch=false;
  this.notification=false;
 }



//this function will work when someone clicked on the homeButton
 homeButtonClicked()
 {
 //Here we are setting homeButtonClicked to true in order to inform the Angular homeButtonTab should open at this time
 //By using that we are making some only homeTab is diplayed and no other will open
  this.homeTabClicked=true;
  this.openTabClicked=false;
  this.closedTabClicked=false;
  this.fetch=false;
  this.notification=false;



 }



 //Here are implementing the Logout feature and telling the angular move to Login Screen
 Logout()
 {
  //Router used which is provide by Angular and here I am saying move to Login screen some clicked Logout Button
  this.router.navigate(['/']);
 }




//Here are defining the Logic what should happen when someone first come to Main screen
 ngOnInit(): void {
  //Here are telling to the Angular please open Home tab as a default when someone first time Enter the Main Screen 
  this.homeTabClicked=true;
  this.openTabClicked=false;
  this.closedTabClicked=false;
  this.fetch=false;
  this.notification=false;
  

 }

 ngAfterViewInit(): void {
  this.changeDetectorRef.detectChanges();

  
 
}


}



