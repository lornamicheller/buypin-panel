(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ad-ad-module"],{

/***/ "./src/app/ad/ad.module.ts":
/*!*********************************!*\
  !*** ./src/app/ad/ad.module.ts ***!
  \*********************************/
/*! exports provided: AdPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdPageModule", function() { return AdPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ad_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ad.page */ "./src/app/ad/ad.page.ts");







var routes = [
    {
        path: '',
        component: _ad_page__WEBPACK_IMPORTED_MODULE_6__["AdPage"]
    }
];
var AdPageModule = /** @class */ (function () {
    function AdPageModule() {
    }
    AdPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_ad_page__WEBPACK_IMPORTED_MODULE_6__["AdPage"]]
        })
    ], AdPageModule);
    return AdPageModule;
}());



/***/ }),

/***/ "./src/app/ad/ad.page.html":
/*!*********************************!*\
  !*** ./src/app/ad/ad.page.html ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ad\">\n  <ion-button style=\"--box-shadow: none;\" class=\"ask-btn\" (click)=\"openPage()\" expand=\"block\">¡A pedir!</ion-button>\n  <ion-button style=\"--box-shadow: none;\" (click)=\"openPage()\" class=\"skip-btn\" expand=\"block\">Skip</ion-button>\n</div>\n"

/***/ }),

/***/ "./src/app/ad/ad.page.scss":
/*!*********************************!*\
  !*** ./src/app/ad/ad.page.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ad {\n  background: url(\"/assets/promo chu.jpg\");\n  background-size: cover; }\n\n.ask-btn {\n  margin-top: 700px;\n  margin-left: 10px;\n  margin-right: 10px;\n  --background: #FFC93A;\n  --background-activated: #FFC93A;\n  --border-radius: 25px;\n  font-weight: 700;\n  font-size: 15px;\n  height: 50px; }\n\n.skip-btn {\n  margin-right: 130px;\n  margin-left: 130px;\n  font-weight: 700;\n  font-size: 15px;\n  --background: transparent;\n  --background-activated: transparent;\n  border-bottom: 1px solid white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sb3JuYW1pY2hlbGxlL0Rvd25sb2Fkcy9idXlwaW4tYXBwLThmMjkwNWUwYzBkODlhYTIxMDZmMmRkY2FmZDVkY2U0NDJmMDZmODQvc3JjL2FwcC9hZC9hZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSx3Q0FBd0M7RUFDeEMsc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIscUJBQWE7RUFDYiwrQkFBdUI7RUFDdkIscUJBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsWUFBWSxFQUFBOztBQUlkO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHlCQUFhO0VBQ2IsbUNBQXVCO0VBQ3ZCLDhCQUE4QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYWQvYWQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkIHtcbiAgLy8gaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL3Byb21vIGNodS5qcGcnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmFzay1idG4ge1xuICBtYXJnaW4tdG9wOiA3MDBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgLS1iYWNrZ3JvdW5kOiAjRkZDOTNBO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjRkZDOTNBO1xuICAtLWJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgaGVpZ2h0OiA1MHB4O1xuXG59XG5cbi5za2lwLWJ0biB7XG4gIG1hcmdpbi1yaWdodDogMTMwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMzBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/ad/ad.page.ts":
/*!*******************************!*\
  !*** ./src/app/ad/ad.page.ts ***!
  \*******************************/
/*! exports provided: AdPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdPage", function() { return AdPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "./node_modules/@ionic-native/native-page-transitions/ngx/index.js");




var AdPage = /** @class */ (function () {
    function AdPage(navigate, nativePageTransitions) {
        this.navigate = navigate;
        this.nativePageTransitions = nativePageTransitions;
    }
    AdPage.prototype.ngOnInit = function () {
    };
    AdPage.prototype.openPage = function () {
        var options = {
            duration: 300,
            iosdelay: 300
        };
        console.log(options);
        this.nativePageTransitions.fade(options);
        this.navigate.navigateRoot("/tutorial");
    };
    AdPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ad',
            template: __webpack_require__(/*! ./ad.page.html */ "./src/app/ad/ad.page.html"),
            styles: [__webpack_require__(/*! ./ad.page.scss */ "./src/app/ad/ad.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_3__["NativePageTransitions"]])
    ], AdPage);
    return AdPage;
}());



/***/ })

}]);
//# sourceMappingURL=ad-ad-module.js.map