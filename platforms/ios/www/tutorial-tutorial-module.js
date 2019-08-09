(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tutorial-tutorial-module"],{

/***/ "./src/app/tutorial/tutorial.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tutorial/tutorial.module.ts ***!
  \*********************************************/
/*! exports provided: TutorialPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialPageModule", function() { return TutorialPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tutorial_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tutorial.page */ "./src/app/tutorial/tutorial.page.ts");







var routes = [
    {
        path: '',
        component: _tutorial_page__WEBPACK_IMPORTED_MODULE_6__["TutorialPage"]
    }
];
var TutorialPageModule = /** @class */ (function () {
    function TutorialPageModule() {
    }
    TutorialPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_tutorial_page__WEBPACK_IMPORTED_MODULE_6__["TutorialPage"]]
        })
    ], TutorialPageModule);
    return TutorialPageModule;
}());



/***/ }),

/***/ "./src/app/tutorial/tutorial.page.html":
/*!*********************************************!*\
  !*** ./src/app/tutorial/tutorial.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content no-bounce has-bouncing=\"false\" forceOverscroll=\"false\">\n  <ion-slide class=\"full-slide\">\n    <ion-slides pager=\"true\">\n      <ion-slide>\n        <ion-card class=\"tutorial-first-card\">\n          <ion-card-header>\n            <ion-card-title class=\"title-service\">Registrate.</ion-card-title>\n          </ion-card-header>\n          <ion-img class=\"circle-img\" src=\"/assets/login.svg\"></ion-img>\n        </ion-card>\n      </ion-slide>\n      <ion-slide>\n        <ion-card class=\"tutorial-first-card\">\n          <ion-card-header>\n            <ion-card-title class=\"title-service\">Encuentra lo que necesitas.</ion-card-title>\n          </ion-card-header>\n          <ion-img class=\"circle-img\" src=\"/assets/lupa.svg\"></ion-img>\n        </ion-card>\n      </ion-slide>\n      <ion-slide>\n        <ion-card class=\"tutorial-first-card\">\n          <ion-card-header>\n            <ion-card-title class=\"title-service\">Paga online.</ion-card-title>\n          </ion-card-header>\n          <ion-img class=\"circle-img\" src=\"/assets/paid online.svg\"></ion-img>\n        </ion-card>\n      </ion-slide>\n      <ion-slide>\n        <ion-card class=\"tutorial-first-card\">\n          <ion-card-header>\n            <ion-card-title class=\"title-service\">¡Relax! Nosotros te lo llevabamos.</ion-card-title>\n          </ion-card-header>\n          <ion-img class=\"circle-img\" src=\"/assets/entrega.svg\"></ion-img>\n          <ion-button style=\"--box-shadow: none;\" (click)=\"openPage()\" class=\"start-btn\" expand=\"block\">Comenzar</ion-button>\n        </ion-card>\n      </ion-slide>\n    </ion-slides>\n  </ion-slide>\n</ion-content>"

/***/ }),

/***/ "./src/app/tutorial/tutorial.page.scss":
/*!*********************************************!*\
  !*** ./src/app/tutorial/tutorial.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Mukta:300,400,500,600,700&display=swap\");\n.title-service {\n  font-size: 25px;\n  font-weight: 300;\n  margin-top: 15px;\n  color: #FD5440;\n  font-family: 'Mukta', sans-serif; }\n.circle-img {\n  width: 230px;\n  height: 230px;\n  margin-left: auto;\n  margin-right: auto; }\n.tutorial-first-card {\n  box-shadow: none; }\n.service-info {\n  line-height: 25px;\n  font-weight: 300;\n  font-size: 16px;\n  text-align: center;\n  font-family: 'Mukta', sans-serif; }\nion-slides {\n  --bullet-background: #FFC93A;\n  --bullet-background-active: #FD5440; }\n.start-btn {\n  --background: #FD5440;\n  --background-activated: #FFC93A;\n  --border-radius: 25px;\n  height: 50px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  font-family: 'Mukta', sans-serif; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sb3JuYW1pY2hlbGxlL0Rvd25sb2Fkcy9idXlwaW4tYXBwLThmMjkwNWUwYzBkODlhYTIxMDZmMmRkY2FmZDVkY2U0NDJmMDZmODQvc3JjL2FwcC90dXRvcmlhbC90dXRvcmlhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkZBQVk7QUFJWjtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxnQ0FBZ0MsRUFBQTtBQUdsQztFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBO0FBR3BCO0VBQ0UsZ0JBQWdCLEVBQUE7QUFHbEI7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0NBQWdDLEVBQUE7QUFHbEM7RUFDRSw0QkFBb0I7RUFDcEIsbUNBQTJCLEVBQUE7QUFHN0I7RUFDRSxxQkFBYTtFQUNiLCtCQUF1QjtFQUN2QixxQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZ0NBQWdDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90dXRvcmlhbC90dXRvcmlhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU11a3RhOjMwMCw0MDAsNTAwLDYwMCw3MDAmZGlzcGxheT1zd2FwJyk7XG5cbi8vIGZvbnQtZmFtaWx5OiAnTXVrdGEnLCBzYW5zLXNlcmlmO1xuXG4udGl0bGUtc2VydmljZSB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgY29sb3I6ICNGRDU0NDA7XG4gIGZvbnQtZmFtaWx5OiAnTXVrdGEnLCBzYW5zLXNlcmlmO1xufVxuXG4uY2lyY2xlLWltZyB7XG4gIHdpZHRoOiAyMzBweDtcbiAgaGVpZ2h0OiAyMzBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLnR1dG9yaWFsLWZpcnN0LWNhcmQge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4uc2VydmljZS1pbmZvIHtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogJ011a3RhJywgc2Fucy1zZXJpZjtcbn1cblxuaW9uLXNsaWRlcyB7XG4gIC0tYnVsbGV0LWJhY2tncm91bmQ6ICNGRkM5M0E7XG4gIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiAjRkQ1NDQwO1xufVxuXG4uc3RhcnQtYnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiAjRkQ1NDQwO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjRkZDOTNBO1xuICAtLWJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZm9udC1mYW1pbHk6ICdNdWt0YScsIHNhbnMtc2VyaWY7XG59Il19 */"

/***/ }),

/***/ "./src/app/tutorial/tutorial.page.ts":
/*!*******************************************!*\
  !*** ./src/app/tutorial/tutorial.page.ts ***!
  \*******************************************/
/*! exports provided: TutorialPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialPage", function() { return TutorialPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "./node_modules/@ionic-native/native-page-transitions/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var TutorialPage = /** @class */ (function () {
    function TutorialPage(nativePageTransitions, navigate) {
        this.nativePageTransitions = nativePageTransitions;
        this.navigate = navigate;
    }
    TutorialPage.prototype.ngOnInit = function () {
    };
    TutorialPage.prototype.openPage = function () {
        var options = {
            duration: 300,
            iosdelay: 300
        };
        console.log(options);
        this.nativePageTransitions.fade(options);
        this.navigate.navigateRoot("/login");
    };
    TutorialPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tutorial',
            template: __webpack_require__(/*! ./tutorial.page.html */ "./src/app/tutorial/tutorial.page.html"),
            styles: [__webpack_require__(/*! ./tutorial.page.scss */ "./src/app/tutorial/tutorial.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_2__["NativePageTransitions"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
    ], TutorialPage);
    return TutorialPage;
}());



/***/ })

}]);
//# sourceMappingURL=tutorial-tutorial-module.js.map