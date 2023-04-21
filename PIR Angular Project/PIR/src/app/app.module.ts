import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { UserComponent } from './User_Component/user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './Login_Component/login.component';
import {Routes,RouterModule} from '@angular/router';
import { AuthGuard } from './AuthGuard_Service/auth-guard.service';
import { AuthService } from './AuthGuard_Service/auth-service';
import { FormsModule }   from '@angular/forms';
import { SidebarNavComponent } from './Sidebar_nav_component/sidebar-nav.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ClosedUserComponent } from './ClosedUser_Component/closed-user.component';
import { OpenUserComponentComponent } from './Open_User_Component/open-user-component.component';
import { NotificationComponent } from './notification/notification.component';
import { ToastrModule } from 'ngx-toastr';
import { FilterComponent } from './filter/filter.component';
import { filter } from 'rxjs';
import { NgxPaginationModule } from 'ngx-pagination';
import {MatMenuModule}from '@angular/material/menu';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SpinnerModule } from '@coreui/angular';







const appRoutes:Routes=[
{path:'',component:SidebarNavComponent} , 
{path:'users',canActivate:[AuthGuard] ,component:UserComponent},
{path:'records',component:SidebarNavComponent}, 
{path:'closed',component:ClosedUserComponent},
{path:'open',component:OpenUserComponentComponent},
{path:'filter',component:FilterComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    SidebarNavComponent,
    ClosedUserComponent,
    OpenUserComponentComponent,
    NotificationComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatDividerModule,
    MatDatepickerModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    NgxPaginationModule,
    MatMenuModule,
    Ng2SearchPipeModule,
    MatSlideToggleModule,
    SpinnerModule, 
    
    
  ],
  providers: [AuthGuard,AuthService],
  bootstrap: [AppComponent] 
})
export class AppModule { }

