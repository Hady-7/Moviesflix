import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TvservService {

  constructor(private http:HttpClient) { }
  toprated(){
    return this.http.get('https://api.themoviedb.org/3/trending/tv/day?api_key=c1b95ab390b77067f0861b8787c1b672');
  }
  getdetails(id:any){
    return this.http.get('https://api.themoviedb.org/3/tv/'+id+'?api_key=c1b95ab390b77067f0861b8787c1b672&language=en-US');
  }
  getvedios(id:any){
    return this.http.get('https://api.themoviedb.org/3/tv/'+id+'/videos?api_key=c1b95ab390b77067f0861b8787c1b672&language=en-US');
  }
  getSearch(query:string){
    return this.http.get('https://api.themoviedb.org/3/search/tv?api_key=c1b95ab390b77067f0861b8787c1b672&language=en-US&query=/'+query+'/&page=1&include_adult=false');
  }
  getSeason(seasonNumber:string,id:any){
    return this.http.get('https://api.themoviedb.org/3/tv/'+id+'/season/'+seasonNumber+'?api_key=c1b95ab390b77067f0861b8787c1b672&language=en-US');
  }
}
