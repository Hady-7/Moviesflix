import { MoviesService } from './movies.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  trending:any;
  query: any;
  search:any;
  topRated:any;
  popular:any;
  upComing:any;
  constructor(private MoviesServ:MoviesService,private route:Router) { }

  ngOnInit() {
    this.Trending();
    this.TopRated();
    this.Popular();
    this.Upcoming();
  }
  Query(event: Event){
    this.query = (<HTMLInputElement>event.target).value;
  }
  Search(){
    this.MoviesServ.getSearch(this.query).subscribe( res => {
      this.search = res;
      console.log(this.search);

    })
  }
  Trending(){
    this.MoviesServ.gettrending().subscribe( res => {
      console.log(res);
      this.trending = res ;
    })
  }
  TopRated(){
    this.MoviesServ.getTopRated().subscribe( res => {
      this.topRated = res ;
    })
  }
  Popular(){
    this.MoviesServ.popular().subscribe( res => {
    this.popular = res;
    })
  }
  Upcoming(){
    this.MoviesServ.upcoming().subscribe ( res => {
      this.upComing = res;
    })
  }
  navi(id:any){
    this.route.navigate([id]);
  }
}
