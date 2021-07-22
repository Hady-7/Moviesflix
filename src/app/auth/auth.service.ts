import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  signup(mail:string,pass:string){
    return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDl6AvJGTMwQ0IGBPW-2Q4Q6b1hi-C_jsM',{
      email : mail ,
      password : pass,
      returnSecureToken: true,
      });
  }
  signin(email:string,pass:string){
    return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDl6AvJGTMwQ0IGBPW-2Q4Q6b1hi-C_jsM',{
      email: email,
      password:pass,
      returnSecureToken: true,
    });
  }
}
