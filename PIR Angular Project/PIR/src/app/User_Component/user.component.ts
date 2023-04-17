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

  constructor(
    private userService: UserService,
    private user: LoginId,
    private DateService: DataPickerServiceTsService,
    
  ) {
    this.userId = user.getUserId();
    this.userService.getUser(this.userId).subscribe(
      (data: User[]) => {
        for (let value of data) {
          if (
            value.timeToResolve != null &&
            value.timeToFirstAnnouncement != null
          ) {
            if (
              (parseInt(value.timeToResolve.toString()) > 40 ||
                parseInt(value.timeToFirstAnnouncement.toString()) > 15) &&
              value.ticket_ID == null
            ) {
              console.log(value.outageName);
              this.notificationCount++;
            }
          }
        }
        console.log(this.notificationCount.toString());
        user.setPIR(this.notificationCount.toString());
        this.count = data.length;
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
}
