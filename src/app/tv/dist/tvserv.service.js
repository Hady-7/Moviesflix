"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TvservService = void 0;
var core_1 = require("@angular/core");
var TvservService = /** @class */ (function () {
    function TvservService(http) {
        this.http = http;
    }
    TvservService.prototype.toprated = function () {
        return this.http.get('https://api.themoviedb.org/3/trending/tv/day?api_key=c1b95ab390b77067f0861b8787c1b672');
    };
    TvservService.prototype.getdetails = function (id) {
        return this.http.get('https://api.themoviedb.org/3/tv/' + id + '?api_key=c1b95ab390b77067f0861b8787c1b672&language=en-US');
    };
    TvservService.prototype.getvedios = function (id) {
        return this.http.get('https://api.themoviedb.org/3/tv/' + id + '/videos?api_key=c1b95ab390b77067f0861b8787c1b672&language=en-US');
    };
    TvservService.prototype.getSearch = function (query) {
        return this.http.get('https://api.themoviedb.org/3/search/tv?api_key=c1b95ab390b77067f0861b8787c1b672&language=en-US&query=/' + query + '/&page=1&include_adult=false');
    };
    TvservService.prototype.getSeason = function (seasonNumber, id) {
        return this.http.get('https://api.themoviedb.org/3/tv/' + id + '/season/' + seasonNumber + '?api_key=c1b95ab390b77067f0861b8787c1b672&language=en-US');
    };
    TvservService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], TvservService);
    return TvservService;
}());
exports.TvservService = TvservService;
