import { TvDescComponent } from './tv/tv-desc/tv-desc.component';
import { TvComponent } from './tv/tv.component';
import { DescComponent } from './home/desc/desc.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '' , component:HomeComponent},
  {path: ':id' , component:DescComponent},
  {path: 'tv' , component:TvComponent },
  {path: 'tv/:id' , component:TvDescComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
