(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.html":
/*!***************************************!*\
  !*** ./src/app/login/login.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"bg\" no-bounce has-bouncing=\"false\" forceOverscroll=\"false\">\n\n  <ion-card class=\"logo-card\">\n    <img class=\"logo\" src=\"assets/logo prueba.png\">\n  </ion-card>\n\n\n  <ion-card class=\"bag-card\">\n    <img class=\"bag\" src=\"assets/bolsa.png\">\n  </ion-card>\n\n  <ion-card class=\"login-card\">\n    <ion-input [(ngModel)]=\"username\" id=\"name\" type=\"text\" placeholder=\"EMAIL\">\n      <ion-icon class=\"icon\" ios=\"ios-person\" md=\"md-person\"></ion-icon>\n    </ion-input>\n    <ion-input [(ngModel)]=\"password\" id=\"password\" type=\"password\" placeholder=\"PASSWORD\">\n      <ion-icon class=\"icon\" ios=\"ios-lock\" md=\"md-lock\"></ion-icon>\n    </ion-input>\n    <ion-button style=\"--box-shadow: none;\"  (click)=\"signIn()\" class=\"login-btn\" expand=\"block\">LOGIN</ion-button>\n    <ion-button style=\"--box-shadow: none;\"  (click)=\"openPage()\" class=\"create-btn\" expand=\"block\">CREATE ACCOUNT</ion-button>\n  </ion-card>\n\n  <ion-card style=\"box-shadow: none; margin: 0; margin-top: 200px;\">\n\n    <ion-grid>\n      <ion-row >\n        <ion-col size=\"2\" style=\"margin-top: 10px;\">\n          <ion-checkbox style=\"float: right;\" class=\"check\"></ion-checkbox>\n        </ion-col>\n        <ion-col size=\"4\" style=\"margin-top: 10px;\">\n          <p\n            style=\"margin: 0; padding: 0; margin-top: 5px; font-weight: 700; color: rgb(255, 255, 255); font-size: 15px; font-family: 'Mukta', sans-serif;\">\n            Remember me</p>\n        </ion-col>\n        <ion-col size=\"5\">\n          <ion-button (click)=\"openPage3()\" expand=\"full\"\n            style=\"--box-shadow: none; --background: transparent; --background-activated: transparent; font-weight: 700;font-size: 15px; font-family: 'Mukta', sans-serif;\">\n            Forgot password?</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Mukta:300,400,500,600,700&display=swap\");\n.bg {\n  --background: #FD5440; }\n.bag-card {\n  margin-top: 30px;\n  box-shadow: none;\n  --border-radius: 0;\n  --background: transparent; }\n.bag {\n  width: 218px;\n  height: 262px;\n  background-size: cover;\n  margin-left: auto;\n  margin-right: auto; }\n.logo-card {\n  box-shadow: none; }\n.logo {\n  width: 100px;\n  height: 80px;\n  -o-object-fit: contain;\n     object-fit: contain;\n  margin-left: auto;\n  margin-right: auto; }\n.login-card {\n  position: absolute;\n  top: 280px;\n  width: 300px;\n  background: white;\n  padding: 20px;\n  padding-top: 40px;\n  margin-left: auto;\n  margin-right: auto;\n  left: 0;\n  right: 0;\n  border-radius: 30px;\n  box-shadow: 0 8px 6px -6px black; }\n#name,\n#password {\n  --background: #FD5440;\n  --placeholder-color: rgb(255, 255, 255);\n  --placeholder-opacity: 10;\n  color: white;\n  font-weight: 700;\n  font-size: 11px;\n  --padding-start: 5px;\n  margin-bottom: 10px;\n  height: 40px;\n  --border-radius: 7px;\n  letter-spacing: 1px;\n  font-family: 'Mukta', sans-serif; }\n.login-btn {\n  --background: #FFC93A;\n  --background-activated: #565656;\n  margin-bottom: 10px;\n  --box-shadow: none;\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  height: 40px;\n  font-weight: 700;\n  font-size: 11px;\n  --border-radius: 0;\n  letter-spacing: 1px;\n  --box-shadow: none;\n  font-family: 'Mukta', sans-serif; }\n.create-btn {\n  --background: #565656;\n  --background-activated: #FFC93A;\n  margin-bottom: 10px;\n  --box-shadow: none;\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  height: 40px;\n  font-weight: 700;\n  font-size: 11px;\n  --border-radius: 0;\n  letter-spacing: 1px;\n  --box-shadow: none;\n  font-family: 'Mukta', sans-serif; }\n.icon {\n  color: white;\n  width: 20px;\n  height: 20px;\n  margin-left: 10px; }\n.check {\n  --background-checked: #FFC93A;\n  --border-radius: 6px;\n  --checkmark-color: #FD5440;\n  --border-color-checked: #FFC93A;\n  --border-color: #FFC93A;\n  --border-width: 2px;\n  --background: #FD5440; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sb3JuYW1pY2hlbGxlL0Rvd25sb2Fkcy9idXlwaW4tYXBwLThmMjkwNWUwYzBkODlhYTIxMDZmMmRkY2FmZDVkY2U0NDJmMDZmODQvc3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkZBQVk7QUFJWjtFQUNFLHFCQUFhLEVBQUE7QUFHZjtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWdCO0VBQ2hCLHlCQUFhLEVBQUE7QUFHZjtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTtBQUdwQjtFQUNFLGdCQUFnQixFQUFBO0FBR2xCO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixzQkFBbUI7S0FBbkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTtBQUdwQjtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsWUFBWTtFQUNaLGlCQUE4QjtFQUM5QixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFFBQVE7RUFDUixtQkFBbUI7RUFHbkIsZ0NBQWdDLEVBQUE7QUFHbEM7O0VBRUUscUJBQWE7RUFDYix1Q0FBb0I7RUFDcEIseUJBQXNCO0VBQ3RCLFlBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysb0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osb0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixnQ0FBZ0MsRUFBQTtBQUdsQztFQUNFLHFCQUFhO0VBQ2IsK0JBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBYTtFQUNiLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGtCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsa0JBQWE7RUFDYixnQ0FBZ0MsRUFBQTtBQUdsQztFQUNFLHFCQUFhO0VBQ2IsK0JBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBYTtFQUNiLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGtCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsa0JBQWE7RUFDYixnQ0FBZ0MsRUFBQTtBQUdsQztFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQixFQUFBO0FBR25CO0VBQ0UsNkJBQXFCO0VBQ3JCLG9CQUFnQjtFQUNoQiwwQkFBa0I7RUFDbEIsK0JBQXVCO0VBQ3ZCLHVCQUFlO0VBQ2YsbUJBQWU7RUFDZixxQkFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1NdWt0YTozMDAsNDAwLDUwMCw2MDAsNzAwJmRpc3BsYXk9c3dhcCcpO1xuXG4vLyBmb250LWZhbWlseTogJ011a3RhJywgc2Fucy1zZXJpZjtcblxuLmJnIHtcbiAgLS1iYWNrZ3JvdW5kOiAjRkQ1NDQwO1xufVxuXG4uYmFnLWNhcmQge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBib3gtc2hhZG93OiBub25lO1xuICAtLWJvcmRlci1yYWRpdXM6IDA7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5iYWcge1xuICB3aWR0aDogMjE4cHg7XG4gIGhlaWdodDogMjYycHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5sb2dvLWNhcmQge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4ubG9nbyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBvYmplY3QtZml0OiBjb250YWluO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4ubG9naW4tY2FyZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyODBweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHBhZGRpbmctdG9wOiA0MHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDhweCA2cHggLTZweCBibGFjaztcbiAgLW1vei1ib3gtc2hhZG93OiAwIDhweCA2cHggLTZweCBibGFjaztcbiAgYm94LXNoYWRvdzogMCA4cHggNnB4IC02cHggYmxhY2s7XG59XG5cbiNuYW1lLFxuI3Bhc3N3b3JkIHtcbiAgLS1iYWNrZ3JvdW5kOiAjRkQ1NDQwO1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTA7XG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgLS1ib3JkZXItcmFkaXVzOiA3cHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGZvbnQtZmFtaWx5OiAnTXVrdGEnLCBzYW5zLXNlcmlmO1xufVxuXG4ubG9naW4tYnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiAjRkZDOTNBO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjNTY1NjU2O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBoZWlnaHQ6IDQwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgLS1ib3JkZXItcmFkaXVzOiAwO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiAnTXVrdGEnLCBzYW5zLXNlcmlmO1xufVxuXG4uY3JlYXRlLWJ0biB7XG4gIC0tYmFja2dyb3VuZDogIzU2NTY1NjtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI0ZGQzkzQTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgaGVpZ2h0OiA0MHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDExcHg7XG4gIC0tYm9yZGVyLXJhZGl1czogMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICBmb250LWZhbWlseTogJ011a3RhJywgc2Fucy1zZXJpZjtcbn1cblxuLmljb24ge1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uY2hlY2sge1xuICAtLWJhY2tncm91bmQtY2hlY2tlZDogI0ZGQzkzQTtcbiAgLS1ib3JkZXItcmFkaXVzOiA2cHg7XG4gIC0tY2hlY2ttYXJrLWNvbG9yOiAjRkQ1NDQwO1xuICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiAjRkZDOTNBO1xuICAtLWJvcmRlci1jb2xvcjogI0ZGQzkzQTtcbiAgLS1ib3JkZXItd2lkdGg6IDJweDtcbiAgLS1iYWNrZ3JvdW5kOiAjRkQ1NDQwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "./node_modules/@ionic-native/native-page-transitions/ngx/index.js");
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! parse */ "./node_modules/parse/index.js");
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(parse__WEBPACK_IMPORTED_MODULE_4__);






var parse = __webpack_require__(/*! parse */ "./node_modules/parse/index.js");
var LoginPage = /** @class */ (function () {
    function LoginPage(navigate, nativePageTransitions, alert) {
        this.navigate = navigate;
        this.nativePageTransitions = nativePageTransitions;
        this.alert = alert;
        parse__WEBPACK_IMPORTED_MODULE_4__["Parse"].initialize("C0XMchZu6Y9XWNUK4lM1UHnnuXhC3dcdpa5fGYpO", "EdN4Xnln11to6pfyNaQ5HD05laenoYu04txYAcfo");
        parse__WEBPACK_IMPORTED_MODULE_4__["Parse"].serverURL = 'https://parseapi.back4app.com/';
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.openPage = function () {
        var options = {
            duration: 300,
            iosdelay: 300
        };
        console.log(options);
        this.nativePageTransitions.fade(options);
        this.navigate.navigateRoot("/register");
    };
    LoginPage.prototype.openPage2 = function () {
        var options = {
            duration: 300,
            iosdelay: 300
        };
        console.log(options);
        this.nativePageTransitions.fade(options);
        this.navigate.navigateRoot("/tabs/tabs/tab1");
    };
    LoginPage.prototype.openPage3 = function () {
        var options = {
            duration: 300,
            iosdelay: 300
        };
        console.log(options);
        this.nativePageTransitions.fade(options);
        this.navigate.navigateRoot("/forgot-password");
    };
    LoginPage.prototype.empty = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alert.create({
                            header: '¡ALERTA!',
                            message: 'Todos los campos son requeridos',
                            buttons: [{
                                    text: 'OK',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        console.log('Confirm Cancel');
                                    }
                                }]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.signIn = function () {
        var _this = this;
        if (this.username == null || this.password == null) {
            this.empty();
        }
        else {
            parse__WEBPACK_IMPORTED_MODULE_4__["Parse"].User.logIn(this.username, this.password).then(function (resp) {
                console.log(_this.username);
                console.log(_this.password);
                console.log('Logged in successfully', resp);
                _this.openPage2();
            }, function (err) {
                console.log('Error logging in', err);
            });
        }
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_3__["NativePageTransitions"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map