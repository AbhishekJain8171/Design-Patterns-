import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-nav',
  templateUrl: './sidebar-nav.component.html',
  styleUrls: ['./sidebar-nav.component.css']
})
export class SidebarNavComponent {

  closedTabClicked=false;
  homeTabClicked=false;
  openTabClicked=false;
  constructor(private router:Router)
  {}
  
 OpenButtonClicked()
 {
   console.log("This button is open button");
  //  this.router.navigate(['/open']); 
   this.homeTabClicked=false;
   this.openTabClicked=true;
   this.closedTabClicked=false;
 }

 closedButtonClicked()
 {
  console.log("Closed Button is clicked");
  // this.router.navigate(['/closed']); 
  this.homeTabClicked=false;
  this.openTabClicked=false;
  this.closedTabClicked=true;
 }

 homeButtonClicked()
 {
   console.log("Home Button clicked");
  //  this.router.navigate(['/records']);
  this.homeTabClicked=true;
  this.openTabClicked=false;
  this.closedTabClicked=false;
 }


}

