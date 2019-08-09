(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["thankyou-splash-thankyou-splash-module"],{

/***/ "./src/app/thankyou-splash/thankyou-splash.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/thankyou-splash/thankyou-splash.module.ts ***!
  \***********************************************************/
/*! exports provided: ThankyouSplashPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankyouSplashPageModule", function() { return ThankyouSplashPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _thankyou_splash_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./thankyou-splash.page */ "./src/app/thankyou-splash/thankyou-splash.page.ts");







var routes = [
    {
        path: '',
        component: _thankyou_splash_page__WEBPACK_IMPORTED_MODULE_6__["ThankyouSplashPage"]
    }
];
var ThankyouSplashPageModule = /** @class */ (function () {
    function ThankyouSplashPageModule() {
    }
    ThankyouSplashPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_thankyou_splash_page__WEBPACK_IMPORTED_MODULE_6__["ThankyouSplashPage"]]
        })
    ], ThankyouSplashPageModule);
    return ThankyouSplashPageModule;
}());



/***/ }),

/***/ "./src/app/thankyou-splash/thankyou-splash.page.html":
/*!***********************************************************!*\
  !*** ./src/app/thankyou-splash/thankyou-splash.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg\">\n\n</div>"

/***/ }),

/***/ "./src/app/thankyou-splash/thankyou-splash.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/thankyou-splash/thankyou-splash.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg {\n  background-image: url(\"/assets/gracias.jpg\");\n  height: 100vh;\n  background-size: cover; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sb3JuYW1pY2hlbGxlL0Rvd25sb2Fkcy9idXlwaW4tYXBwLThmMjkwNWUwYzBkODlhYTIxMDZmMmRkY2FmZDVkY2U0NDJmMDZmODQvc3JjL2FwcC90aGFua3lvdS1zcGxhc2gvdGhhbmt5b3Utc3BsYXNoLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLDRDQUE0QztFQUM1QyxhQUFhO0VBQ2Isc0JBQXNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90aGFua3lvdS1zcGxhc2gvdGhhbmt5b3Utc3BsYXNoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZyB7XG4gYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2dyYWNpYXMuanBnJyk7XG4gaGVpZ2h0OiAxMDB2aDtcbiBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/thankyou-splash/thankyou-splash.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/thankyou-splash/thankyou-splash.page.ts ***!
  \*********************************************************/
/*! exports provided: ThankyouSplashPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankyouSplashPage", function() { return ThankyouSplashPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "./node_modules/@ionic-native/native-page-transitions/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var ThankyouSplashPage = /** @class */ (function () {
    function ThankyouSplashPage(NavCtrl, nativePageTransitions) {
        this.NavCtrl = NavCtrl;
        this.nativePageTransitions = nativePageTransitions;
    }
    ThankyouSplashPage.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { _this.goHome(); }, 4200);
        console.log("working");
    };
    ThankyouSplashPage.prototype.goHome = function () {
        // Parse.User.currentAsync().then(user => {
        //   console.log('Logged user', user);
        //   user != null ? this.NavCtrl.navigateRoot('/tutorial') : this.NavCtrl.navigateRoot('/tutorial');
        // }, err => {
        //   console.log('Error getting logged user',err);
        //   let options: NativeTransitionOptions = {
        //     direction: 'left',
        //     duration: 200,
        //     slowdownfactor: -1,
        //     slidePixels: 20,
        //     iosdelay: 100, 
        //     androiddelay: 100,
        //    }
        //   });
        this.NavCtrl.navigateRoot("/tabs/tabs/tab1");
    };
    ThankyouSplashPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-thankyou-splash',
            template: __webpack_require__(/*! ./thankyou-splash.page.html */ "./src/app/thankyou-splash/thankyou-splash.page.html"),
            styles: [__webpack_require__(/*! ./thankyou-splash.page.scss */ "./src/app/thankyou-splash/thankyou-splash.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_2__["NativePageTransitions"]])
    ], ThankyouSplashPage);
    return ThankyouSplashPage;
}());



/***/ })

}]);
//# sourceMappingURL=thankyou-splash-thankyou-splash-module.js.map