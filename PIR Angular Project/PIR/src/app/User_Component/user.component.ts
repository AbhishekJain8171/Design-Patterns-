import { Component, OnInit} from '@angular/core';
import { User } from '../User_Service/user';
import { UserService } from '../User_Service/user.service';
import { LoginId } from '../Login_Service/login-id-service';
import { DataPickerServiceTsService } from '../data-picker-service.ts.service';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[] = [];
  userId = '';
  start = '';
  notificationCount = 0;
  title = 'Pagination';
  page = 1;
  count = 0;
  tableSize = 5;
  tableSizes = [5, 10, 15, 20];
  filteredUsers_TTR_Reach:User[];
filteredUsers_TTR_Not_Reach:User[];
filteredUsers_TTI_Reach:User[];
filteredUsers_TTI_Not_Reach:User[];
searchText:any;
isAdmin=true;
startDate:any;
endDate:any;
startDateInput: any;
endDateInput: any;
showSearchOutage =true;
showSearchService =true;
searchTextService = '';
searchTextOutage: any;
LoginUser='';
isBanglore=false;
isMenuOpen=true;
filteredUsers_Banglore:User[];
filteredUsers_TTI_Reach_Banglore:User[];
filteredUsers_TTI_Not_Reach_Banglore:User[];
clickOutage=false;
clickService=false;
showLoading=true;
showTable=false;

  constructor(
    private userService: UserService,
    private user: LoginId,
    private DateService: DataPickerServiceTsService,
    
  ) {
    this.userId = user.getUserId();
    this.userService.getUser(this.userId).subscribe(
      (data: User[]) => {
        for (let value of data) {
          if ( value. time_to_resolve != null && value. time_to_first_announcement != null) {
            if ((parseInt(value.time_to_resolve.toString()) > 40 || parseInt(value.time_to_first_announcement.toString()) > 15) &&
              value.ticket_id== null )
               {
                  this.notificationCount++;
               }
            }
        }
        console.log(this.notificationCount.toString());
        user.setPIR(this.notificationCount.toString());
        this.count = data.length;
        this.showLoading=false;
        this.showTable=true;
        this.users = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {}

  onTableDataChange(event: any): void {
    this.page = event;
    this.GetList();
  }

  GetList(): void {
    this.userService.getUser(this.userId).subscribe(
      
      (data: User[]) => {
        this.count = data.length;
        this.users = data.slice(
          (this.page - 1) * this.tableSize,
          (this.page - 1) * this.tableSize + this.tableSize
        );
        console.log(this.users);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  isToggleOn: boolean = false;
onToggleChange() {
  console.log('Toggle clicked');
  if (this.isToggleOn) {
    console.log('Toggle ON');
    this.ListOfAllOutages_Banglore();
  } else {
    this.showLoading=true;
    this.showTable=false;
    this.userService.getUser(this.userId).subscribe((data:User[])=>{
      this.showLoading=false;
      this.showTable=true;
      this.users=data;
      },error =>{
            console.log(error);
      });
  } 
}

ResetFilter()
{
 this.showSearchOutage = false;
 this.showSearchService = false;
 this.searchTextOutage='';
 this.searchTextService ='';
}
TTR_Reach() {
  this.showLoading=true;
  this.showTable=false;
  this.userService.getUser(this.userId).subscribe((data: User[]) => {
    this.users = data;
    const filteredData_TTR_Reach = this.users.filter(item => {
      if (item.time_to_resolve== null) {
        return false;
      }        
     if(this.isBanglore)
        return parseInt(item.time_to_resolve.toString()) > 40;

      return parseInt(item.time_to_resolve.toString()) > 60;
    });
    this.filteredUsers_TTR_Reach = filteredData_TTR_Reach;

    console.log(this.filteredUsers_TTR_Reach );
    this.showLoading=false;
    this.showTable=true;
    this.users = [...this.filteredUsers_TTR_Reach];
    console.log(this.users ); 
    
  }, error => {
    console.log(error);
  });
}
//Filter Result where TTI Reach 
TTI_Reach() {
  this.showLoading=true;
  this.showTable=false;
  this.userService.getUser(this.userId).subscribe((data: User[]) => {
    this.users = data;
    const filteredData_TTI_Reach = this.users.filter(item => {
      if (item.time_to_first_announcement == null) {
        return false;
      }
      const timeToFirstAnnouncement = parseInt(item.time_to_first_announcement.toString());
      return timeToFirstAnnouncement > 15;       
    });
    this.filteredUsers_TTI_Reach = filteredData_TTI_Reach;
    this.showLoading=false;
    this.showTable=true;
    this.users = [...this.filteredUsers_TTI_Reach]; 
  }, error => {
    console.log(error);
  });
}
//Filter Result where TTR Not Reach 
//Here we are checking according to Location whether it is Banglore Location or Global Location 
TTR_Not_Reach()
{
  this.showLoading=true;
  this.showTable=false;
  this.userService.getUser(this.userId).subscribe((data: User[]) => {
    this.users = data;
    const filteredData_TTR_Not_Reach = this.users.filter(item => {
      if (item.time_to_resolve == null) {
        return false;
      }
      if(this.isBanglore)
         return parseInt(item.time_to_resolve.toString()) <= 40;

      return parseInt(item.time_to_resolve.toString()) <= 60;
    });
    this.filteredUsers_TTR_Not_Reach = filteredData_TTR_Not_Reach;
    this.showLoading=false;
    this.showTable=true;
    this.users = [...this.filteredUsers_TTR_Not_Reach]; 
  }, error => {
    console.log(error);
  });
}
//Filter Result where TTI Not Reach  
TTI_Not_Reach()
{
  this.showLoading=true;
  this.showTable=false;
  this.userService.getUser(this.userId).subscribe((data: User[]) => {
    this.users = data;
    const filteredData_TTI_Not_Reach = this.users.filter(item => {
      if (item.time_to_first_announcement == null) {
        return false;
      }
      const timeToFirstAnnouncement = parseInt(item.time_to_first_announcement.toString());
      return timeToFirstAnnouncement < 15;
    });
    this.filteredUsers_TTI_Not_Reach = filteredData_TTI_Not_Reach;
    this.showLoading=false;
    this.showTable=true;
    this.users = [...this.filteredUsers_TTI_Not_Reach]; 
  }, error => {
    console.log(error);
  });
}
//Show List of outages related to User 
ListOfAllOutages() {
  this.showLoading=true;
  this.showTable=false;
this.userService.getUser(this.userId).subscribe((data:User[])=>{
  this.showLoading=false;
  this.showTable=true;
this.users=data;
},error =>{
      console.log(error);
});
}
//TTR reach and its Banglore Location 
TTR_Reach_Banglore() {
  this.showLoading=true;
  this.showTable=false;
  this.isToggleOn=true;
  this.isAdmin=true;
  this.isBanglore=true;
  console.log('Toggle is on!');
  this.userService.getUser(this.userId).subscribe((data: User[]) => {
    this.users = data;
    const usersToCheck=['I539240','I531804','I541900','I502998','I544226','I577365','I354797','I538309'];
    const filteredData_TTR_Reach = this.users.filter(item => {
      if ( item.time_to_resolve== null) {
        return false;
      }  
      if (item.reported_by == null || item.reported_by == undefined) {
        return false;
      }
      if (!usersToCheck.includes(item.reported_by.toString())) {
        return false;
      }
        return parseInt(item.time_to_resolve.toString()) > 40;
    });
   
    this.filteredUsers_TTR_Reach = filteredData_TTR_Reach;
    this.showLoading=false;
    this.showTable=true;
    this.users = [...this.filteredUsers_TTR_Reach];
  }, error => {
    console.log(error);
  });
} 
//TTR Not reach and its Banglore Location 
TTR_Not_Reach_Banglore()
{
  this.showLoading=true;
  this.showTable=false;
  this.isToggleOn=true;
  this.isAdmin=true;
  this.isBanglore=true;
   this.userService.getUser(this.userId).subscribe((data: User[]) => {
    this.users = data;
    const usersToCheck=['I539240','I531804','I541900','I502998','I544226','I577365','I354797','I538309'];
    const filteredData_TTR_Not_Reach = this.users.filter(item => {
      if ( item.time_to_resolve== null) {
        return false;
      }  
      if (item.reported_by == null || item.reported_by == undefined) {
        return false;
      }
      if (!usersToCheck.includes(item.reported_by.toString())) {
        return false;
      }
       
        return parseInt(item.time_to_resolve.toString()) < 40;
    });
  
    this.filteredUsers_TTR_Not_Reach = filteredData_TTR_Not_Reach;
    this.showLoading=false;
    this.showTable=true;
    this.users = [...this.filteredUsers_TTR_Not_Reach];
  }, error => {
    console.log(error);
  });

}
//TTI reach and its Banglore Location 
TTI_Reach_Banglore()
{
  this.showLoading=true;
  this.showTable=false;
  this.isToggleOn=true;
  this.isAdmin=true;
  this.isBanglore=true;
  console.log('Toggle is on!');
  this.userService.getUser(this.userId).subscribe((data: User[]) => {
    this.users = data;
    const usersToCheck=['I539240','I531804','I541900','I502998','I544226','I577365','I354797','I538309'];
    const filteredData_TTI_Reach_Banglore = this.users.filter(item => {
      if ( item.time_to_first_announcement == null) {
        return false;
      }  
      if (item.reported_by == null || item.reported_by == undefined) {
        return false;
      }
      if (!usersToCheck.includes(item.reported_by.toString())) {
        return false;
      }
       
        return parseInt(item.time_to_first_announcement.toString()) > 15;
    });

    this.filteredUsers_TTI_Reach_Banglore = filteredData_TTI_Reach_Banglore ;
    this.showLoading=false;
    this.showTable=true;
    this.users = [...this.filteredUsers_TTI_Reach_Banglore ]; 

  }, error => {
    console.log(error);
  });

}
//TTI Not reach and its Banglore Location 
TTI_Not_Reach_Banglore()
{
  this.showLoading=true;
  this.showTable=false;
  this.isToggleOn=true;
  this.isAdmin=true;
  this.isBanglore=true;
  console.log('Toggle is on!');
  this.userService.getUser(this.userId).subscribe((data: User[]) => {
    this.users = data;
    const usersToCheck=['I539240','I531804','I541900','I502998','I544226','I577365','I354797','I538309'];
    const filteredData_TTI_Not_Reach_Banglore = this.users.filter(item => {
      if ( item.time_to_first_announcement == null) {
        return false;
      }  
      if (item.reported_by == null || item.reported_by == undefined) {
        return false;
      }
      if (!usersToCheck.includes(item.reported_by.toString())) {
        return false;
      }
       
        return parseInt(item.time_to_first_announcement.toString()) < 15;
    });
    console.log('Filtered data:', filteredData_TTI_Not_Reach_Banglore );
    this.filteredUsers_TTI_Not_Reach_Banglore = filteredData_TTI_Not_Reach_Banglore ;
    this.showLoading=false;
    this.showTable=true;
    this.users = [...this.filteredUsers_TTI_Not_Reach_Banglore ];
  }, error => {
    console.log(error);
  });
}
//List of all the outages for Banglore Location  
ListOfAllOutages_Banglore()
{
  this.showLoading=true;
  this.showTable=false;
  this.isToggleOn=true;
  this.isAdmin=true;
  this.isBanglore=true;
   this.userService.getUser(this.userId).subscribe((data: User[]) => {
    this.users = data;
    const usersToCheck=['I539240','I531804','I541900','I502998','I544226','I577365','I354797','I538309'];
    const filteredData_Banglore = this.users.filter(item => {
     
      if (item.reported_by == null || item.reported_by == undefined) {
        return false;
      }
      if (!usersToCheck.includes(item.reported_by.toString())) {
        return false;
      }
       
      return usersToCheck.includes(item.reported_by.toString());
    });
   
    this.filteredUsers_Banglore = filteredData_Banglore;
    this.showLoading=false;
    this.showTable=true;
    this.users = [... this.filteredUsers_Banglore ]; 
  }, error => {
    console.log(error);
  });
}


}
