import { Component, OnInit} from '@angular/core';
import { User } from '../User_Service/user';
import { UserService } from '../User_Service/user.service';
import { LoginId } from '../Login_Service/login-id-service';
import { DataPickerServiceTsService } from '../data-picker-service.ts.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  users:User[];
  //Declare UserId which is used to store information about the user
  userId="";
  start="";
  startDate = new Date("2022-08-02");
  endDate = new Date("2022-09-31");
  
  constructor(private userService:UserService,private user:LoginId,private DateService:DataPickerServiceTsService,private router:Router)
  {
     //Here are using LoginService and Get the current user information and then store in userId
      this.userId=user.getUserId();
      this.startDate=new Date(this.DateService.getStartDate());
      this.endDate=new Date(this.DateService.getEndDate());
      //Here we are using UserService in order to Get the User information 
      //Here are subscribe to the User information and then store information in our define Users Array
      this.userService.getUser(this.userId).subscribe((data:User[])=>{
          const filteredData = data.filter(item => {
          const date = new Date(item.incidentDateTime);
          console.log(date);
          return date >= this.startDate && date <= this.endDate;
        });
         this.users=filteredData;
      },error =>{
        //If some error come during subscribe we are printing here
        console.log(error);
      });
       }

       ngOnInit(): void {
           
       }

       onBack()
       {
        console.log("Back Button clicked")
        this.router.navigate(['/records']);
       }
     
   }
  
