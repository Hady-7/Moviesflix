"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MoviesService = void 0;
var core_1 = require("@angular/core");
var MoviesService = /** @class */ (function () {
    function MoviesService(http) {
        this.http = http;
    }
    MoviesService.prototype.gettrending = function () {
        return this.http.get('https://api.themoviedb.org/3/trending/movie/day?api_key=c1b95ab390b77067f0861b8787c1b672');
    };
    MoviesService.prototype.getSearch = function (query) {
        return this.http.get('https://api.themoviedb.org/3/search/movie?api_key=c1b95ab390b77067f0861b8787c1b672&language=en-US&query=/' + query + '/&page=1&include_adult=false');
    };
    MoviesService.prototype.getTopRated = function () {
        return this.http.get('https://api.themoviedb.org/3/movie/top_rated?api_key=c1b95ab390b77067f0861b8787c1b672&language=en-US&page=1');
    };
    MoviesService.prototype.popular = function () {
        return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=c1b95ab390b77067f0861b8787c1b672&language=en-US&page=1');
    };
    MoviesService.prototype.upcoming = function () {
        return this.http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=c1b95ab390b77067f0861b8787c1b672&language=en-US&page=1');
    };
    MoviesService.prototype.getDetails = function (id) {
        return this.http.get('https://api.themoviedb.org/3/movie/' + id + '?api_key=c1b95ab390b77067f0861b8787c1b672&language=en-US');
    };
    MoviesService.prototype.getsimilar = function (id) {
        return this.http.get('https://api.themoviedb.org/3/movie/' + id + '/similar?api_key=c1b95ab390b77067f0861b8787c1b672&language=en-US&page=1');
    };
    MoviesService.prototype.getvedios = function (id) {
        return this.http.get('https://api.themoviedb.org/3/movie/' + id + '/videos?api_key=c1b95ab390b77067f0861b8787c1b672&language=en-US');
    };
    MoviesService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], MoviesService);
    return MoviesService;
}());
exports.MoviesService = MoviesService;
