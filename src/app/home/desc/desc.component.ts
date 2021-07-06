import { MoviesService } from './../movies.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-desc',
  templateUrl: './desc.component.html',
  styleUrls: ['./desc.component.css'],
})
export class DescComponent implements OnInit {
  id!:number;
  Details:any;
  similar:any;
  vedios:any;
  play=false;
  iframeurl!: SafeResourceUrl;
  displayframe =false;
  constructor(private route:ActivatedRoute,private Moviesserv:MoviesService,private router:Router,private _sanitizer: DomSanitizer) { }
@ViewChild('iframe') iframe !: ElementRef;
  ngOnInit() {
  this.route.params.subscribe(params =>{
     this.id = params['id'];
    });
  this.details();
  this.Similar();
  this.Vedios();
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
  this.router.navigateByUrl(this.router.url.replace( `${this.id}` ,`${id}`)).then(() => {
    window.location.replace(id);
  })
}
Vedios(){
  this.Moviesserv.getvedios(this.id).subscribe( res => {
    this.vedios = res ;
    console.log(this.vedios);
  })
}
playing(){
  this.iframeurl=this._sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.vedios.results[0].key}?rel=0&amp;autoplay=1`);
  this.displayframe=true;
}
closing(){
  this.displayframe=false;
}

}
