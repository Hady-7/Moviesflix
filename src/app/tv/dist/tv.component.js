"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TvComponent = void 0;
var core_1 = require("@angular/core");
var TvComponent = /** @class */ (function () {
    function TvComponent(tvserv, route) {
        this.tvserv = tvserv;
        this.route = route;
    }
    TvComponent.prototype.ngOnInit = function () {
        this.topRated();
    };
    TvComponent.prototype.Query = function (event) {
        this.query = event.target.value;
    };
    TvComponent.prototype.topRated = function () {
        var _this = this;
        this.tvserv.toprated().subscribe(function (res) {
            _this.toprated = res;
            console.log(_this.toprated);
        });
    };
    TvComponent.prototype.navi = function (id) {
        this.route.navigate(['home/tv/' + id]);
    };
    TvComponent.prototype.Search = function () {
        var _this = this;
        this.tvserv.getSearch(this.query).subscribe(function (res) {
            _this.search = res;
            console.log(_this.search);
        });
    };
    TvComponent = __decorate([
        core_1.Component({
            selector: 'app-tv',
            templateUrl: './tv.component.html',
            styleUrls: ['./tv.component.css']
        })
    ], TvComponent);
    return TvComponent;
}());
exports.TvComponent = TvComponent;
