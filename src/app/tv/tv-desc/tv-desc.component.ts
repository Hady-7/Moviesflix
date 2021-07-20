import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TvservService } from '../tvserv.service';

@Component({
  selector: 'app-tv-desc',
  templateUrl: './tv-desc.component.html',
  styleUrls: ['./tv-desc.component.css']
})
export class TvDescComponent implements OnInit {
id:any;
detailsseries:any;
vedios:any;
iframeurl!:SafeResourceUrl;
displayframe=false;
  constructor(private tvserv:TvservService,private router:ActivatedRoute,private _sanitizer:DomSanitizer) { }

  ngOnInit() {
    this.getid();
    this.getdetails();
    this.getvedios();
  }
  getid(){
  this.id =  this.router.snapshot.params['id'];
  }
  getdetails(){
  this.tvserv.getdetails(this.id).subscribe( res => {
    this.detailsseries = res ;
  })
  }
  getvedios(){
    this.tvserv.getvedios(this.id).subscribe(res => {
    this.vedios = res ;
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
