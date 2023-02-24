import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedin:boolean = false;

  constructor() { }

  loginOrLogout(){
    this.isLoggedin = !this.isLoggedin;
  }

  

}
