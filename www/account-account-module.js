(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-account-module"],{

/***/ "./src/app/account/account.module.ts":
/*!*******************************************!*\
  !*** ./src/app/account/account.module.ts ***!
  \*******************************************/
/*! exports provided: AccountPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageModule", function() { return AccountPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _account_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account.page */ "./src/app/account/account.page.ts");







var routes = [
    {
        path: '',
        component: _account_page__WEBPACK_IMPORTED_MODULE_6__["AccountPage"]
    }
];
var AccountPageModule = /** @class */ (function () {
    function AccountPageModule() {
    }
    AccountPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_account_page__WEBPACK_IMPORTED_MODULE_6__["AccountPage"]]
        })
    ], AccountPageModule);
    return AccountPageModule;
}());



/***/ }),

/***/ "./src/app/account/account.page.html":
/*!*******************************************!*\
  !*** ./src/app/account/account.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-card class=\"logo-card\">\n  <h1 class=\"logo\">Cuenta</h1>\n  <ion-icon (click)=\"goBack()\" ion-button class=\"icon-btn\" ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\n</ion-card>\n\n\n<ion-content>\n\n  <ion-item>\n    <ion-input class=\"input\" type=\"text\" placeholder=\"Nombre\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-input class=\"input\" type=\"text\" placeholder=\"Correo Electrónico\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-input class=\"input\" type=\"tel\" placeholder=\"Número de licencia\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-input class=\"input\" type=\"tel\" placeholder=\"Teléfono\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-input class=\"input\" type=\"text\" placeholder=\"Dirección\"></ion-input>\n  </ion-item>\n\n  <ion-card>\n\n    <ion-button class=\"save-btn\" expand=\"block\">GUARDAR</ion-button>\n\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/account/account.page.scss":
/*!*******************************************!*\
  !*** ./src/app/account/account.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo {\n  text-align: center;\n  font-size: 20px;\n  font-weight: 700;\n  font-family: 'Mukta', sans-serif;\n  color: white;\n  margin-top: 50px;\n  margin-bottom: 25x; }\n\n.logo-card {\n  box-shadow: none;\n  margin: 0;\n  border-radius: 0;\n  --background: #FD5440;\n  width: 100%; }\n\n.icon-btn {\n  color: white;\n  width: 25px;\n  height: 25px;\n  position: absolute;\n  top: 50px;\n  left: 10px; }\n\n.input {\n  margin-top: 10px;\n  font-family: 'Mukta', sans-serif;\n  --placeholder-color: grey; }\n\n.save-btn {\n  --background: #FD5440;\n  --background-activated: #FD5440;\n  color: #FFC93A;\n  --color-activated: #FFC93A;\n  margin-left: 30px;\n  margin-right: 30px;\n  font-weight: 700;\n  font-size: 13px;\n  height: 50px;\n  --border-radius: 25px;\n  margin-top: 40px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sb3JuYW1pY2hlbGxlL0Rvd25sb2Fkcy9idXlwaW4tYXBwLThmMjkwNWUwYzBkODlhYTIxMDZmMmRkY2FmZDVkY2U0NDJmMDZmODQvc3JjL2FwcC9hY2NvdW50L2FjY291bnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0NBQWdDO0VBQ2hDLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIscUJBQWE7RUFDYixXQUFXLEVBQUE7O0FBR2I7RUFDRSxZQUF5QjtFQUN6QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVSxFQUFBOztBQUdaO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdDQUFnQztFQUNsQyx5QkFBb0IsRUFBQTs7QUFHcEI7RUFDRSxxQkFBYTtFQUNiLCtCQUF1QjtFQUN2QixjQUFjO0VBQ2QsMEJBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixZQUFZO0VBQ1oscUJBQWdCO0VBQ2hCLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYWNjb3VudC9hY2NvdW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtZmFtaWx5OiAnTXVrdGEnLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDI1eDtcbn1cblxuLmxvZ28tY2FyZCB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgLS1iYWNrZ3JvdW5kOiAjRkQ1NDQwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmljb24tYnRuIHtcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwcHg7XG4gIGxlZnQ6IDEwcHg7XG59XG5cbi5pbnB1dCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiAnTXVrdGEnLCBzYW5zLXNlcmlmO1xuLS1wbGFjZWhvbGRlci1jb2xvcjogZ3JleTtcbn1cblxuLnNhdmUtYnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiAjRkQ1NDQwO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjRkQ1NDQwO1xuICBjb2xvcjogI0ZGQzkzQTtcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6ICNGRkM5M0E7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/account/account.page.ts":
/*!*****************************************!*\
  !*** ./src/app/account/account.page.ts ***!
  \*****************************************/
/*! exports provided: AccountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPage", function() { return AccountPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "./node_modules/@ionic-native/native-page-transitions/ngx/index.js");




var AccountPage = /** @class */ (function () {
    function AccountPage(navigate, nativePageTransitions) {
        this.navigate = navigate;
        this.nativePageTransitions = nativePageTransitions;
    }
    AccountPage.prototype.ngOnInit = function () {
    };
    AccountPage.prototype.goBack = function () {
        var options = {
            duration: 300,
            iosdelay: 300
        };
        console.log(options);
        this.nativePageTransitions.fade(options);
        this.navigate.navigateRoot("/tabs/tabs/profile");
    };
    AccountPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-account',
            template: __webpack_require__(/*! ./account.page.html */ "./src/app/account/account.page.html"),
            styles: [__webpack_require__(/*! ./account.page.scss */ "./src/app/account/account.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_3__["NativePageTransitions"]])
    ], AccountPage);
    return AccountPage;
}());



/***/ })

}]);
//# sourceMappingURL=account-account-module.js.map