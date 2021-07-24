import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
error!:any;
  constructor(private Authserv:AuthService,private route : Router) { }

  ngOnInit() {

  }
  onSubmit(form:NgForm){
    if(!form.valid){
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    this.Authserv.signup(email,password).subscribe( res => {
      console.log(res);
      this.route.navigate(['']);
    },err => {
      switch (err.error.error.message){
        case 'EMAIL_EXISTS':
          this.error = 'this email exists already'
      }
     }
    );
    form.reset();
}
}
