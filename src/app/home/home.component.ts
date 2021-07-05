import { MoviesService } from './movies.service';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  trending:any;
  query: any;
  search:any;
  constructor(private MoviesServ:MoviesService,private http:HttpClientModule) { }

  ngOnInit() {
    this.Trending();
    console.log(this.trending);

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
}
