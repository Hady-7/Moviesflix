import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
export interface response{
  idToken:string,
  email:string,
  refreshToken:string,
  expiresIn:string,
  localId:string,
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  signup(pass:string,email:string){
    return this.http.post<response>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDl6AvJGTMwQ0IGBPW-2Q4Q6b1hi-C_jsM',{
        password: pass,
        email: email,
        returnSecureToken: true,
      });
  }
}
