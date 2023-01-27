import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-nav',
  templateUrl: './sidebar-nav.component.html',
  styleUrls: ['./sidebar-nav.component.css']
})
export class SidebarNavComponent {

  constructor(private router:Router)
  {}
  
 OpenButtonClicked()
 {
   console.log("This button is open button");
  //  this.router.navigate(['/records']); 
 }

 closedButtonClicked()
 {
  console.log("Closed Button is clicked");
 }


}

