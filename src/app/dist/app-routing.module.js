"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var login_component_1 = require("./auth/login/login.component");
var tv_desc_component_1 = require("./tv/tv-desc/tv-desc.component");
var tv_component_1 = require("./tv/tv.component");
var desc_component_1 = require("./home/desc/desc.component");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component");
var auth_component_1 = require("./auth/auth.component");
var routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: ':id', component: desc_component_1.DescComponent },
    { path: 'home/tv', component: tv_component_1.TvComponent },
    { path: 'home/tv/:id', component: tv_desc_component_1.TvDescComponent },
    { path: 'auth/sign', component: auth_component_1.AuthComponent },
    { path: 'auth/login', component: login_component_1.LoginComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
