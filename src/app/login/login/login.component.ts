import { AppAuthService } from './../../app-auth.service';
import { Component, OnInit } from '@angular/core';



import { Router, CanActivate } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username: string;
  public password: string;
  

  constructor(private ser: AppAuthService, private router: Router) { }

  ngOnInit() {
  }

      public opened: boolean = true;
       
      public login()
      {
        this.opened=false;

        console.log(this.username);
        console.log(this.password);

        if(this.ser.authenticate(this.username, this.password))
          {
            localStorage.setItem("username",this.username);
            
            //this.router.navigate(['fb']);
            this.router.navigate(['fb', {"uname": this.username}]);
            
            console.log("Successful login");
          }
          else 
            {
              // this.router.navigate(['login']);
              location.reload();
              console.log("Failed to login");
            }
            
      }

}
