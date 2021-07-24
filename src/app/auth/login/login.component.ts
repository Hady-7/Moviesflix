import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error!:any;
  constructor(private signserv:AuthService,private route:Router) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    if(!form.valid){
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    this.signserv.signin(email,password).subscribe( res =>{
      console.log(res);
      this.route.navigate(['']);
    },err => {
      switch (err.error.error.message){
        case 'EMAIL_NOT_FOUND':
          this.error = 'this email not exists'
          break;
        case 'INVALID_PASSWORD':
          this.error = 'Wrong password'
          break;
      }
     })
    form.reset();
  }
}
