import { query } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient) { }
  gettrending(){
    return this.http.get('https://api.themoviedb.org/3/trending/movie/day?api_key=c1b95ab390b77067f0861b8787c1b672');
  }
  getSearch(query:string){
    return this.http.get('https://api.themoviedb.org/3/search/movie?api_key=c1b95ab390b77067f0861b8787c1b672&language=en-US&query=/'+query+'/&page=1&include_adult=false')
  }
  getTopRated(){
    return this.http.get('https://api.themoviedb.org/3/movie/top_rated?api_key=c1b95ab390b77067f0861b8787c1b672&language=en-US&page=1')
  }
  popular(){
    return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=c1b95ab390b77067f0861b8787c1b672&language=en-US&page=1')
  }
  upcoming(){
    return this.http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=c1b95ab390b77067f0861b8787c1b672&language=en-US&page=1')
  }
  getDetails(id:any){
    return this.http.get('https://api.themoviedb.org/3/movie/'+id+'?api_key=c1b95ab390b77067f0861b8787c1b672&language=en-US')
  }
  getsimilar(id:any){
    return this.http.get('https://api.themoviedb.org/3/movie/'+id+'/similar?api_key=c1b95ab390b77067f0861b8787c1b672&language=en-US&page=1')
  }
}
