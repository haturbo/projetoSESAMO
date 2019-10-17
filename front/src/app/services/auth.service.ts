import { User } from './../interfaces/user';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private userautenticado:boolean=false;
  constructor(private ang: AngularFireAuth) { }

  login(user: User) {
    /*if(user.email==='user@gmail.com' && 
    user.password === '12345'){
    this.userautenticado=true;
    this.router.navigate(['/'])
    } else{
      this.userautenticado = false;
    }*/
    return this.ang.auth.signInWithEmailAndPassword(user.email, user.password);
  }
  register(user: User) {
    return this.ang.auth.createUserWithEmailAndPassword(user.email, user.password);
  }

  logout() {


  }
  getAuth() {
    return this.ang.auth;
  }
}
