"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HomeComponent = void 0;
var core_1 = require("@angular/core");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(MoviesServ, http) {
        this.MoviesServ = MoviesServ;
        this.http = http;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.Trending();
    };
    HomeComponent.prototype.Query = function (event) {
        this.query = event.target.value;
    };
    HomeComponent.prototype.Search = function () {
        var _this = this;
        this.MoviesServ.getSearch(this.query).subscribe(function (res) {
            _this.search = res;
            console.log(_this.search);
        });
    };
    HomeComponent.prototype.Trending = function () {
        var _this = this;
        this.MoviesServ.gettrending().subscribe(function (res) {
            console.log(res);
            _this.trending = res;
        });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
        })
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
