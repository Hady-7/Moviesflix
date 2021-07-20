"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TvDescComponent = void 0;
var core_1 = require("@angular/core");
var TvDescComponent = /** @class */ (function () {
    function TvDescComponent(tvserv, router, _sanitizer) {
        this.tvserv = tvserv;
        this.router = router;
        this._sanitizer = _sanitizer;
        this.displayframe = false;
    }
    TvDescComponent.prototype.ngOnInit = function () {
        this.getid();
        this.getdetails();
        this.getvedios();
    };
    TvDescComponent.prototype.getid = function () {
        this.id = this.router.snapshot.params['id'];
    };
    TvDescComponent.prototype.getdetails = function () {
        var _this = this;
        this.tvserv.getdetails(this.id).subscribe(function (res) {
            _this.detailsseries = res;
        });
    };
    TvDescComponent.prototype.getvedios = function () {
        var _this = this;
        this.tvserv.getvedios(this.id).subscribe(function (res) {
            _this.vedios = res;
        });
    };
    TvDescComponent.prototype.playing = function () {
        this.iframeurl = this._sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + this.vedios.results[0].key + "?rel=0&amp;autoplay=1");
        this.displayframe = true;
    };
    TvDescComponent.prototype.closing = function () {
        this.displayframe = false;
    };
    TvDescComponent = __decorate([
        core_1.Component({
            selector: 'app-tv-desc',
            templateUrl: './tv-desc.component.html',
            styleUrls: ['./tv-desc.component.css']
        })
    ], TvDescComponent);
    return TvDescComponent;
}());
exports.TvDescComponent = TvDescComponent;
