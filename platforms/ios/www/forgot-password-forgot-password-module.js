(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgot-password-forgot-password-module"],{

/***/ "./src/app/forgot-password/forgot-password.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.module.ts ***!
  \***********************************************************/
/*! exports provided: ForgotPasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageModule", function() { return ForgotPasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgot-password.page */ "./src/app/forgot-password/forgot-password.page.ts");







var routes = [
    {
        path: '',
        component: _forgot_password_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordPage"]
    }
];
var ForgotPasswordPageModule = /** @class */ (function () {
    function ForgotPasswordPageModule() {
    }
    ForgotPasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_forgot_password_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordPage"]]
        })
    ], ForgotPasswordPageModule);
    return ForgotPasswordPageModule;
}());



/***/ }),

/***/ "./src/app/forgot-password/forgot-password.page.html":
/*!***********************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-orange\">\n  <ion-card class=\"logo-card\">\n    <img class=\"logo\" src=\"assets/logo prueba.png\">\n\n    <ion-button style=\"--box-shadow: none;\"  (click)=\"goBack()\" class=\"arrow-btn\">\n      <ion-icon class=\"arrow-icon\" ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\n    </ion-button>\n\n    <img src=\"assets/key.png\" style=\"object-fit: contain; margin-bottom: 40px;\" width=\"150px\" height=\"150px\">\n  </ion-card>\n  <div class=\"triangle\"></div>\n</div>\n\n<ion-content>\n  <ion-card style=\"box-shadow: none; padding: 10px;\">\n    <h2 style=\"text-align: center; font-weight: 400; margin-top: 80px; color: black;\">Forgot password?</h2>\n    <p style=\"text-align: center;\">We just need your registered email id to send your password reset instructions.</p>\n    <ion-input type=\"text\" class=\"name\" placeholder=\"Email Address\"></ion-input>\n    <ion-button style=\"--box-shadow: none;\"  (click)=\"openPage()\" class=\"reset-btn\" expand=\"block\">RESET PASSWORD</ion-button>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/forgot-password/forgot-password.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-orange {\n  background: #FD5440; }\n\n.logo-card {\n  box-shadow: none;\n  padding-bottom: 0; }\n\n.logo {\n  width: 100px;\n  height: 80px;\n  -o-object-fit: contain;\n     object-fit: contain;\n  margin-left: auto;\n  margin-right: auto; }\n\n.arrow-icon {\n  color: white;\n  width: 25px;\n  height: 25px; }\n\n.arrow-btn {\n  --background: transparent;\n  --background-activated: transparent;\n  position: absolute;\n  top: 14px;\n  left: 0;\n  --box-shadow: none; }\n\n.triangle {\n  margin-left: auto;\n  margin-right: auto;\n  width: 0;\n  height: 0;\n  border-left: 25px solid transparent;\n  border-right: 25px solid transparent;\n  border-bottom: 40px solid white; }\n\n.name {\n  margin-left: auto;\n  margin-right: auto;\n  border: 1px solid #fd5440;\n  --padding-start: 5px;\n  --placeholder-opacity: 10; }\n\n.reset-btn {\n  margin-top: 50px;\n  --background: #fd5440;\n  --background-activated: #fd5440;\n  font-size: 13px;\n  font-weight: 700;\n  --border-radius: 25px;\n  height: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sb3JuYW1pY2hlbGxlL0Rvd25sb2Fkcy9idXlwaW4tYXBwLThmMjkwNWUwYzBkODlhYTIxMDZmMmRkY2FmZDVkY2U0NDJmMDZmODQvc3JjL2FwcC9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLHNCQUFtQjtLQUFuQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdkO0VBQ0UseUJBQWE7RUFDYixtQ0FBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxPQUFPO0VBQ1Asa0JBQWEsRUFBQTs7QUFJZjtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxtQ0FBbUM7RUFDbkMsb0NBQW9DO0VBQ3BDLCtCQUErQixFQUFBOztBQUdqQztFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLG9CQUFnQjtFQUNoQix5QkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxnQkFBZ0I7RUFDaEIscUJBQWE7RUFDYiwrQkFBdUI7RUFDdkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixxQkFBZ0I7RUFDaEIsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmctb3JhbmdlIHtcbiAgYmFja2dyb3VuZDogI0ZENTQ0MDtcbn1cblxuLmxvZ28tY2FyZCB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG4ubG9nbyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBvYmplY3QtZml0OiBjb250YWluO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4uYXJyb3ctaWNvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbn1cblxuLmFycm93LWJ0biB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTRweDtcbiAgbGVmdDogMDtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuXG59XG5cbi50cmlhbmdsZSB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlci1sZWZ0OiAyNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDI1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDQwcHggc29saWQgd2hpdGU7XG59XG5cbi5uYW1lIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZkNTQ0MDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA1cHg7XG4gIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTA7XG59XG5cbi5yZXNldC1idG4ge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICAtLWJhY2tncm91bmQ6ICNmZDU0NDA7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNmZDU0NDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgLS1ib3JkZXItcmFkaXVzOiAyNXB4O1xuICBoZWlnaHQ6IDUwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/forgot-password/forgot-password.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.page.ts ***!
  \*********************************************************/
/*! exports provided: ForgotPasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPage", function() { return ForgotPasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "./node_modules/@ionic-native/native-page-transitions/ngx/index.js");
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! parse */ "./node_modules/parse/index.js");
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(parse__WEBPACK_IMPORTED_MODULE_4__);






var parse = __webpack_require__(/*! parse */ "./node_modules/parse/index.js");
var ForgotPasswordPage = /** @class */ (function () {
    function ForgotPasswordPage(navigate, nativePageTransitions, alert) {
        this.navigate = navigate;
        this.nativePageTransitions = nativePageTransitions;
        this.alert = alert;
        parse__WEBPACK_IMPORTED_MODULE_4__["Parse"].initialize("C0XMchZu6Y9XWNUK4lM1UHnnuXhC3dcdpa5fGYpO", "EdN4Xnln11to6pfyNaQ5HD05laenoYu04txYAcfo");
        parse__WEBPACK_IMPORTED_MODULE_4__["Parse"].serverURL = 'https://parseapi.back4app.com/';
    }
    ForgotPasswordPage.prototype.ngOnInit = function () {
    };
    ForgotPasswordPage.prototype.openPage = function () {
        var options = {
            duration: 300,
            iosdelay: 300
        };
        console.log(options);
        this.nativePageTransitions.fade(options);
        this.navigate.navigateRoot("/login");
    };
    ForgotPasswordPage.prototype.goBack = function () {
        var options = {
            duration: 300,
            iosdelay: 300
        };
        console.log(options);
        this.nativePageTransitions.fade(options);
        this.navigate.navigateRoot("/login");
    };
    ForgotPasswordPage.prototype.empty = function () {
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
    ForgotPasswordPage.prototype.resetPassword = function () {
        if (this.username === null) {
            this.empty();
        }
        parse__WEBPACK_IMPORTED_MODULE_4__["Parse"].Cloud.run('resetPassword', {
            username: parse__WEBPACK_IMPORTED_MODULE_4__["Parse"].User.current().id
        });
    };
    ForgotPasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! ./forgot-password.page.html */ "./src/app/forgot-password/forgot-password.page.html"),
            styles: [__webpack_require__(/*! ./forgot-password.page.scss */ "./src/app/forgot-password/forgot-password.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_3__["NativePageTransitions"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], ForgotPasswordPage);
    return ForgotPasswordPage;
}());



/***/ })

}]);
//# sourceMappingURL=forgot-password-forgot-password-module.js.map