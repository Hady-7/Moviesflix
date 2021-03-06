"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginComponent = void 0;
var core_1 = require("@angular/core");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(signserv, route) {
        this.signserv = signserv;
        this.route = route;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (!form.valid) {
            return;
        }
        var email = form.value.email;
        var password = form.value.password;
        this.signserv.signin(email, password).subscribe(function (res) {
            console.log(res);
            _this.route.navigate(['']);
        }, function (err) {
            switch (err.error.error.message) {
                case 'EMAIL_NOT_FOUND':
                    _this.error = 'this email not exists';
                    break;
                case 'INVALID_PASSWORD':
                    _this.error = 'Wrong password';
                    break;
            }
        });
        form.reset();
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
