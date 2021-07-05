import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-desc',
  templateUrl: './desc.component.html',
  styleUrls: ['./desc.component.css']
})
export class DescComponent implements OnInit {
  id!:number;
  Details:any;
  similar:any;
  constructor(private route:ActivatedRoute,private Moviesserv:MoviesService,private router:Router) { }

  ngOnInit() {
  this.route.params.subscribe(params =>{
     this.id = params['id'];
    });
  this.details();
  this.Similar();
  }
details(){
  this.Moviesserv.getDetails(this.id).subscribe( res => {
  this.Details = res ;
  })
}
Similar(){
  this.Moviesserv.getsimilar(this.id).subscribe( res => {
    this.similar = res
  })
}
navigate(id:any){
  this.router.navigateByUrl(this.router.url.replace( `${this.id}` ,id)).then(() => {
    window.location.replace(id);
  })
}
}
