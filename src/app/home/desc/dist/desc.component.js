"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DescComponent = void 0;
var core_1 = require("@angular/core");
var DescComponent = /** @class */ (function () {
    function DescComponent(route, Moviesserv, router, _sanitizer) {
        this.route = route;
        this.Moviesserv = Moviesserv;
        this.router = router;
        this._sanitizer = _sanitizer;
        this.play = false;
        this.displayframe = false;
    }
    DescComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        this.details();
        this.Similar();
        this.Vedios();
    };
    DescComponent.prototype.details = function () {
        var _this = this;
        this.Moviesserv.getDetails(this.id).subscribe(function (res) {
            _this.Details = res;
        });
    };
    DescComponent.prototype.Similar = function () {
        var _this = this;
        this.Moviesserv.getsimilar(this.id).subscribe(function (res) {
            _this.similar = res;
        });
    };
    DescComponent.prototype.navigate = function (id) {
        this.router.navigateByUrl(this.router.url.replace("" + this.id, "" + id)).then(function () {
            window.location.replace(id);
        });
    };
    DescComponent.prototype.Vedios = function () {
        var _this = this;
        this.Moviesserv.getvedios(this.id).subscribe(function (res) {
            _this.vedios = res;
            console.log(_this.vedios);
        });
    };
    DescComponent.prototype.playing = function () {
        this.iframeurl = this._sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + this.vedios.results[0].key + "?rel=0&amp;autoplay=1");
        this.displayframe = true;
    };
    DescComponent.prototype.closing = function () {
        this.displayframe = false;
    };
    __decorate([
        core_1.ViewChild('iframe')
    ], DescComponent.prototype, "iframe");
    DescComponent = __decorate([
        core_1.Component({
            selector: 'app-desc',
            templateUrl: './desc.component.html',
            styleUrls: ['./desc.component.css']
        })
    ], DescComponent);
    return DescComponent;
}());
exports.DescComponent = DescComponent;
