import { Injectable } from '@angular/core';
import { users} from './users';


@Injectable({
  providedIn: 'root'
})
export class AppAuthService {

  constructor() { }

    public isAuthenticated(): boolean {
    for (const u of users)
      {
        if(u.username=="ak04")
          {
            if(u.password=="0404")
              return true;
              else return false;
          }
          
      }
    return false;
  }

  public authenticate(_username, _password): boolean {
    for (const u of users)
      {
        if(u.username==_username)
          {
            if(u.password==_password)
              return true;
              else return false;
          }
          
      }
    return false;
  }
}
