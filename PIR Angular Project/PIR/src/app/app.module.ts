import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { UserComponent } from './User-Component/user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './Login-Component/login.component';
import {Routes,RouterModule} from '@angular/router';
import { AuthGuard } from './Auth-Guard-Services/auth-guard.service';
import { AuthService } from './Auth-Guard-Services/auth-service';
import { FormsModule }   from '@angular/forms';
import { SidebarNavComponent } from './Sidebar-nav-component/sidebar-nav.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';



const appRoutes:Routes=[
{path:'',component:LoginComponent} , 
{path:'users',canActivate:[AuthGuard] ,component:UserComponent},
{path:'records',component:SidebarNavComponent} , 
];



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    SidebarNavComponent
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
  ],
  providers: [AuthGuard,AuthService],
  bootstrap: [AppComponent] 
})
export class AppModule { }

