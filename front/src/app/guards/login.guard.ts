import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements  CanActivate{
  constructor(
    private AuthService: AuthService,
    private Router: Router
  ) { }

  canActivate(): Promise<boolean> {
    return new Promise(resolve => {
      this.AuthService.getAuth().onAuthStateChanged(user =>{
        if(user) this.Router.navigate(['home']);

        resolve(!user ? true : false);
      })
    });
  }
}
