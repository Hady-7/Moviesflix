import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescComponent } from './desc/desc.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '' , component:HomeComponent,children: [
    {path:':id' , component:DescComponent}
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
