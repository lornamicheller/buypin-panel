(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["splash-splash-module"],{

/***/ "./src/app/splash/splash.module.ts":
/*!*****************************************!*\
  !*** ./src/app/splash/splash.module.ts ***!
  \*****************************************/
/*! exports provided: SplashPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashPageModule", function() { return SplashPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _splash_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./splash.page */ "./src/app/splash/splash.page.ts");







var routes = [
    {
        path: '',
        component: _splash_page__WEBPACK_IMPORTED_MODULE_6__["SplashPage"]
    }
];
var SplashPageModule = /** @class */ (function () {
    function SplashPageModule() {
    }
    SplashPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_splash_page__WEBPACK_IMPORTED_MODULE_6__["SplashPage"]]
        })
    ], SplashPageModule);
    return SplashPageModule;
}());



/***/ }),

/***/ "./src/app/splash/splash.page.html":
/*!*****************************************!*\
  !*** ./src/app/splash/splash.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"splash\" no-bounce has-bouncing=\"false\" forceOverscroll=\"false\"></div>\n"

/***/ }),

/***/ "./src/app/splash/splash.page.scss":
/*!*****************************************!*\
  !*** ./src/app/splash/splash.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".splash {\n  height: 100vh;\n  background-image: url(\"/assets/splash-buypin.gif\");\n  background-size: cover;\n  background-position: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sb3JuYW1pY2hlbGxlL0Rvd25sb2Fkcy9idXlwaW4tYXBwLThmMjkwNWUwYzBkODlhYTIxMDZmMmRkY2FmZDVkY2U0NDJmMDZmODQvc3JjL2FwcC9zcGxhc2gvc3BsYXNoLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixrREFBa0Q7RUFDbEQsc0JBQXNCO0VBQ3RCLDJCQUEyQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc3BsYXNoL3NwbGFzaC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3BsYXNoIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL3NwbGFzaC1idXlwaW4uZ2lmJyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/splash/splash.page.ts":
/*!***************************************!*\
  !*** ./src/app/splash/splash.page.ts ***!
  \***************************************/
/*! exports provided: SplashPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashPage", function() { return SplashPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! parse */ "./node_modules/parse/index.js");
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(parse__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "./node_modules/@ionic-native/native-page-transitions/ngx/index.js");





var parse = __webpack_require__(/*! parse */ "./node_modules/parse/index.js");
var SplashPage = /** @class */ (function () {
    function SplashPage(NavCtrl, nativePageTransitions) {
        this.NavCtrl = NavCtrl;
        this.nativePageTransitions = nativePageTransitions;
        // parse.serverURL = 'https://parseapi.back4app.com/';
        // Parse.initialize("2lVOPqiL2Ea7bit43NHkjtF0R5UFKxtiUuO8aqnr", "zGjEtvRTwS0a559cBZBvYQjMN58ZxpXNGrKxLfBp");
    }
    SplashPage.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { _this.goHome(); }, 4200);
        console.log("working");
    };
    SplashPage.prototype.goHome = function () {
        var _this = this;
        parse__WEBPACK_IMPORTED_MODULE_3___default.a.initialize("C0XMchZu6Y9XWNUK4lM1UHnnuXhC3dcdpa5fGYpO", "EdN4Xnln11to6pfyNaQ5HD05laenoYu04txYAcfo");
        parse__WEBPACK_IMPORTED_MODULE_3___default.a.serverURL = 'https://parseapi.back4app.com/';
        parse__WEBPACK_IMPORTED_MODULE_3___default.a.User.currentAsync().then(function (user) {
            console.log('Logged user', user);
            user != null ? _this.NavCtrl.navigateRoot('/tabs/tabs/tab1') : _this.NavCtrl.navigateRoot('/tutorial');
        }, function (err) {
            console.log('Error getting logged user', err);
            var options = {
                duration: 300,
                iosdelay: 300
            };
            console.log(options);
            _this.nativePageTransitions.fade(options);
        });
        this.NavCtrl.navigateRoot("/login");
    };
    SplashPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-splash',
            template: __webpack_require__(/*! ./splash.page.html */ "./src/app/splash/splash.page.html"),
            styles: [__webpack_require__(/*! ./splash.page.scss */ "./src/app/splash/splash.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_4__["NativePageTransitions"]])
    ], SplashPage);
    return SplashPage;
}());



/***/ })

}]);
//# sourceMappingURL=splash-splash-module.js.map