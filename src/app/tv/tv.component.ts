import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TvservService } from './tvserv.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {
  toprated:any;
  constructor(private tvserv:TvservService,private route:Router) { }

  ngOnInit() {
    this.topRated();
  }
  topRated(){
    this.tvserv.toprated().subscribe( res => {
      this.toprated = res;
      console.log(this.toprated);

    })
  }
  navi(id:any){
    this.route.navigate(['home/tv/'+id])
  }
}
