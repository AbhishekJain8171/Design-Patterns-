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
 
  closedTabClicked=false;
  homeTabClicked=false;
  openTabClicked=false;
  fetch=false;
  notification=false;
  countPIRTickets: string ="0" ;
  loginusers:LoginUser[];
  
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
  
  if (!this.startDateInput || !this.endDateInput) {
    alert("Please enter both a start date and an end date.");
  } 
  else{
  this.startDate = this.startDateInput;
  this.endDate = this.endDateInput;
  this.Date.setStartDate(this.startDate);
  this.Date.setEndDate(this.endDate);
  this.router.navigate(['/filter']);
  }
  
}

Notification()
{
  this.notification=true;
  this.fetch = false;
  this.closedTabClicked = false;
  this.homeTabClicked = false;
  this.openTabClicked = false;
  

}

 OpenButtonClicked()
 {
   
   this.homeTabClicked=false;
   this.openTabClicked=true;
   this.closedTabClicked=false;
   this.fetch=false;
   this.notification=false;
  
 }




 closedButtonClicked()
 {
   
  this.homeTabClicked=false;
  this.openTabClicked=false;
  this.closedTabClicked=true;
  this.fetch=false;
  this.notification=false;
 }


 homeButtonClicked()
 {
 
  this.homeTabClicked=true;
  this.openTabClicked=false;
  this.closedTabClicked=false;
  this.fetch=false;
  this.notification=false;

 }



 
 Logout()
 {
  
  this.router.navigate(['/']);
 }


 ngOnInit(): void {
  
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



