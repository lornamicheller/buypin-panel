(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-search-module"],{

/***/ "./src/app/search/search.module.ts":
/*!*****************************************!*\
  !*** ./src/app/search/search.module.ts ***!
  \*****************************************/
/*! exports provided: SearchPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _search_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search.page */ "./src/app/search/search.page.ts");







var routes = [
    {
        path: '',
        component: _search_page__WEBPACK_IMPORTED_MODULE_6__["SearchPage"]
    }
];
var SearchPageModule = /** @class */ (function () {
    function SearchPageModule() {
    }
    SearchPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_search_page__WEBPACK_IMPORTED_MODULE_6__["SearchPage"]]
        })
    ], SearchPageModule);
    return SearchPageModule;
}());



/***/ }),

/***/ "./src/app/search/search.page.html":
/*!*****************************************!*\
  !*** ./src/app/search/search.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"orange-bg\">\n  <ion-card class=\"logo-card\">\n    <img class=\"logo\" src=\"assets/logo prueba.png\">\n  </ion-card>\n</div>\n\n<div class=\"search-container\">\n  <ion-card class=\"search-card\">\n    <ion-input class=\"search-input\" type=\"text\" placeholder=\"Buscar\"></ion-input>\n  </ion-card>\n</div>\n\n\n<ion-content>\n\n  <ion-item ion-button (click)=\"buttonClick()\">\n    <ion-label class=\"name\">\n      Colmado Don Marcos\n    </ion-label>\n  </ion-item>\n\n  <ion-item ion-button (click)=\"buttonClick()\">\n    <ion-label class=\"name\">\n      Ferretería Vicente\n    </ion-label>\n  </ion-item>\n\n  <ion-item ion-button (click)=\"buttonClick()\">\n    <ion-label class=\"name\">\n      Fresh Store\n    </ion-label>\n  </ion-item>\n\n  <ion-item ion-button (click)=\"buttonClick()\">\n    <ion-label class=\"name\">\n      Electroshock Store\n    </ion-label>\n  </ion-item>\n\n  <ion-item ion-button (click)=\"buttonClick()\">\n    <ion-label class=\"name\">\n      Y Boutique\n    </ion-label>\n  </ion-item>\n\n  <ion-item ion-button (click)=\"buttonClick()\">\n    <ion-label class=\"name\">\n      Calibali Boutique\n    </ion-label>\n  </ion-item>\n\n  <ion-item ion-button (click)=\"buttonClick()\">\n    <ion-label class=\"name\">\n      Los Cidrines\n    </ion-label>\n  </ion-item>\n\n  <ion-item ion-button (click)=\"buttonClick()\">\n    <ion-label class=\"name\">\n      Panadería La Cagueña\n    </ion-label>\n  </ion-item>\n\n  <ion-item ion-button (click)=\"buttonClick()\">\n    <ion-label class=\"name\">\n      Restaurante Puttanesca Trattoria\n    </ion-label>\n  </ion-item>\n\n  <ion-item ion-button (click)=\"buttonClick()\">\n    <ion-label class=\"name\">\n      Ojalá\n    </ion-label>\n  </ion-item>\n\n  <ion-item ion-button (click)=\"buttonClick()\">\n    <ion-label class=\"name\">\n      Burrillos\n    </ion-label>\n  </ion-item>\n\n  <ion-item ion-button (click)=\"buttonClick()\">\n    <ion-label class=\"name\">\n      La Nachera\n    </ion-label>\n  </ion-item>\n\n  <ion-item ion-button (click)=\"buttonClick()\">\n    <ion-label class=\"name\">\n      Antohouse\n    </ion-label>\n  </ion-item>\n\n  <ion-item ion-button (click)=\"buttonClick()\">\n    <ion-label class=\"name\">\n     El Vagón\n    </ion-label>\n  </ion-item>\n\n  <ion-item ion-button (click)=\"buttonClick()\">\n    <ion-label class=\"name\">\n      Nacho Libre\n    </ion-label>\n  </ion-item>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/search/search.page.scss":
/*!*****************************************!*\
  !*** ./src/app/search/search.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Mukta:300,400,500,600,700&display=swap\");\n.orange-bg {\n  background: #FD5440; }\n.logo-card {\n  box-shadow: none;\n  padding-bottom: 0; }\n.logo {\n  width: 100px;\n  height: 80px;\n  -o-object-fit: contain;\n     object-fit: contain;\n  margin-left: auto;\n  margin-right: auto; }\n.search-container {\n  background: transparent; }\n.search-card {\n  border-radius: 0;\n  margin: 0;\n  background: transparent; }\n.search-input {\n  --padding-start: 10px;\n  height: 60px;\n  background: rgba(194, 194, 194, 0.062); }\n.name {\n  color: grey;\n  font-family: 'Mukta', sans-serif;\n  font-size: 13px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sb3JuYW1pY2hlbGxlL0Rvd25sb2Fkcy9idXlwaW4tYXBwLThmMjkwNWUwYzBkODlhYTIxMDZmMmRkY2FmZDVkY2U0NDJmMDZmODQvc3JjL2FwcC9zZWFyY2gvc2VhcmNoLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2RkFBWTtBQUVaO0VBQ0UsbUJBQW1CLEVBQUE7QUFHckI7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCLEVBQUE7QUFHbkI7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLHNCQUFtQjtLQUFuQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBO0FBR3BCO0VBQ0UsdUJBQXVCLEVBQUE7QUFHekI7RUFDRSxnQkFBZ0I7RUFDaEIsU0FBUztFQUNULHVCQUF1QixFQUFBO0FBR3pCO0VBRUUscUJBQWdCO0VBQ2hCLFlBQVk7RUFDWixzQ0FBc0MsRUFBQTtBQUd4QztFQUNFLFdBQVc7RUFDWCxnQ0FBZ0M7RUFDaEMsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2VhcmNoL3NlYXJjaC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU11a3RhOjMwMCw0MDAsNTAwLDYwMCw3MDAmZGlzcGxheT1zd2FwJyk7XG5cbi5vcmFuZ2UtYmcge1xuICBiYWNrZ3JvdW5kOiAjRkQ1NDQwO1xufVxuXG4ubG9nby1jYXJkIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbi5sb2dvIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5zZWFyY2gtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5zZWFyY2gtY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIG1hcmdpbjogMDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5zZWFyY2gtaW5wdXQge1xuICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDE3MCwgMTcwLCAxNzApO1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgxOTQsIDE5NCwgMTk0LCAwLjA2Mik7XG59XG5cbi5uYW1lIHtcbiAgY29sb3I6IGdyZXk7XG4gIGZvbnQtZmFtaWx5OiAnTXVrdGEnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEzcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/search/search.page.ts":
/*!***************************************!*\
  !*** ./src/app/search/search.page.ts ***!
  \***************************************/
/*! exports provided: SearchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPage", function() { return SearchPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "./node_modules/@ionic-native/native-page-transitions/ngx/index.js");




var SearchPage = /** @class */ (function () {
    function SearchPage(navigate, nativePageTransitions) {
        this.navigate = navigate;
        this.nativePageTransitions = nativePageTransitions;
    }
    SearchPage.prototype.ngOnInit = function () {
    };
    SearchPage.prototype.buttonClick = function () {
        var options = {
            duration: 300,
            iosdelay: 300
        };
        console.log(options);
        this.nativePageTransitions.fade(options);
        this.navigate.navigateRoot("/tabs/tabs/tab3");
    };
    SearchPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.page.html */ "./src/app/search/search.page.html"),
            styles: [__webpack_require__(/*! ./search.page.scss */ "./src/app/search/search.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_3__["NativePageTransitions"]])
    ], SearchPage);
    return SearchPage;
}());



/***/ })

}]);
//# sourceMappingURL=search-search-module.js.map