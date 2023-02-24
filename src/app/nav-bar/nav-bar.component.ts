import { Component } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  isloggedIn:boolean = false;

  constructor(private authService:AuthService) { 
    this.isloggedIn = authService.isLoggedin;
  }

  login(){
    this.authService.loginOrLogout();
    this.isloggedIn = this.authService.isLoggedin;
  }

  logout(){
    this.authService.loginOrLogout();
    this.isloggedIn = this.authService.isLoggedin;
  }

}
