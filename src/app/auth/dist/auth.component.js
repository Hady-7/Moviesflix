"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var AuthComponent = /** @class */ (function () {
    function AuthComponent(Authserv) {
        this.Authserv = Authserv;
    }
    AuthComponent.prototype.ngOnInit = function () {
        this.signupForm = new forms_1.FormGroup({
            'username': new forms_1.FormControl(null, forms_1.Validators.email),
            'password': new forms_1.FormControl(null, forms_1.Validators.required)
        });
    };
    AuthComponent.prototype.onsignup = function () {
        if (!this.signupForm.valid) {
            return;
        }
        var email = this.signupForm.value.username;
        var password = this.signupForm.value.password;
        this.Authserv.signup(email, password).subscribe(function (res) {
            console.log(res);
        }, function (error) {
            console.log(error);
        });
    };
    AuthComponent = __decorate([
        core_1.Component({
            selector: 'app-auth',
            templateUrl: './auth.component.html',
            styleUrls: ['./auth.component.css']
        })
    ], AuthComponent);
    return AuthComponent;
}());
exports.AuthComponent = AuthComponent;
