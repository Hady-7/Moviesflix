import { LoginComponent } from './auth/login/login.component';
import { TvDescComponent } from './tv/tv-desc/tv-desc.component';
import { TvComponent } from './tv/tv.component';
import { DescComponent } from './home/desc/desc.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  {path: '' , component:HomeComponent},
  {path: ':id' , component:DescComponent},
  {path: 'home/tv' , component:TvComponent },
  {path: 'home/tv/:id' , component:TvDescComponent},
  {path: 'auth/sign' , component:AuthComponent},
  {path: 'auth/login' , component:LoginComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
