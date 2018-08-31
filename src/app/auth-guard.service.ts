import { AppAuthService } from './app-auth.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';


@Injectable()

export class AuthGuardService implements CanActivate {

  constructor(public router : Router, public aut: AppAuthService) { 
    
  }

  canActivate(): boolean {
    // localStorage.setItem('username', undefined);
    const token = localStorage.getItem('username');
    // console.log(localStorage.getItem('username23'));
    // console.log("took my charger: " + token);
    if(!token || token== undefined || token== "undefined")
      {
        this.router.navigate(['login']);
        return false;       
      }
      else 
        return true;

  }

}
