import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  signupForm !: FormGroup;
  token:any;
  session:any;
  constructor(private Authserv:AuthService) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'username' : new FormControl(null,Validators.email),
      'password' : new FormControl(null,Validators.required)
    });
  }
  onsignup(){
    if(!this.signupForm.valid){
      return
    }
    const email = this.signupForm.value.username;
    const password = this.signupForm.value.password;
    this.Authserv.signup(email,password).subscribe(res=>{
      console.log(res);
    },
    error => {
      console.log(error);
    })
  }
}
