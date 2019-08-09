(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["history-order-history-order-module"],{

/***/ "./src/app/history-order/history-order.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/history-order/history-order.module.ts ***!
  \*******************************************************/
/*! exports provided: HistoryOrderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryOrderPageModule", function() { return HistoryOrderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _history_order_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./history-order.page */ "./src/app/history-order/history-order.page.ts");







var routes = [
    {
        path: '',
        component: _history_order_page__WEBPACK_IMPORTED_MODULE_6__["HistoryOrderPage"]
    }
];
var HistoryOrderPageModule = /** @class */ (function () {
    function HistoryOrderPageModule() {
    }
    HistoryOrderPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_history_order_page__WEBPACK_IMPORTED_MODULE_6__["HistoryOrderPage"]]
        })
    ], HistoryOrderPageModule);
    return HistoryOrderPageModule;
}());



/***/ }),

/***/ "./src/app/history-order/history-order.page.html":
/*!*******************************************************!*\
  !*** ./src/app/history-order/history-order.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-card class=\"logo-card\">\n  <h1 class=\"logo\">Historial de ordenes</h1>\n  <ion-icon (click)=\"goBack()\" ion-button class=\"icon-btn\" ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\n</ion-card>\n\n<ion-content>\n  <ion-card style=\"margin-bottom: 0;\">\n    <p class=\"articles\">Lista de artículos</p>\n  </ion-card>\n\n  <!-- first - order -->\n\n  <ion-card style=\"margin-bottom: 0;\">\n    <p class=\"date\">2/ junio/ 2019</p>\n  </ion-card>\n\n\n  <ion-card class=\"article-container\">\n    <ion-grid style=\"border-top: 1px solid rgb(206, 206, 206);\">\n      <ion-row>\n        <ion-col style=\"padding-top: 0; padding-bottom: 0;\">\n          <p class=\"article-name\">Coca Cola</p>\n        </ion-col>\n        <ion-col style=\"padding-top: 0; padding-bottom: 0;\">\n          <p class=\"price\">$1.99</p>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid style=\"border-top: 1px solid rgb(206, 206, 206);\">\n      <ion-row>\n        <ion-col style=\"padding-top: 0; padding-bottom: 0;\">\n          <p class=\"article-name\">Doritos</p>\n        </ion-col>\n        <ion-col style=\"padding-top: 0; padding-bottom: 0;\">\n          <p class=\"price\">$1.99</p>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid style=\"border-top: 1px solid rgb(206, 206, 206);\">\n      <ion-row>\n        <ion-col style=\"padding-top: 0; padding-bottom: 0;\">\n          <p class=\"article-name\">Colgate</p>\n        </ion-col>\n        <ion-col style=\"padding-top: 0; padding-bottom: 0;\">\n          <p class=\"price\">$3.99</p>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid style=\"border-top: 1px solid rgb(206, 206, 206);\">\n      <ion-row>\n        <ion-col style=\"padding-top: 0; padding-bottom: 0;\">\n          <p class=\"article-name\">Barefoot Moscato</p>\n        </ion-col>\n        <ion-col style=\"padding-top: 0; padding-bottom: 0;\">\n          <p class=\"price\">$8.99</p>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid style=\"border-top: 1px solid rgb(206, 206, 206);\">\n      <ion-row>\n        <ion-col style=\"padding-top: 0; padding-bottom: 0;\">\n          <p class=\"article-name\">Kraft Mild Cheddar</p>\n        </ion-col>\n        <ion-col style=\"padding-top: 0; padding-bottom: 0;\">\n          <p class=\"price\">$2.99</p>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid style=\"border-top: 1px solid rgb(206, 206, 206); background: #FD5440\">\n      <ion-row>\n        <ion-col style=\"padding-top: 0; padding-bottom: 0;\">\n          <p class=\"article-name\" style=\"color: white; font-weight: 700; font-size: 15px;\">TOTAL</p>\n        </ion-col>\n        <ion-col style=\"padding-top: 0; padding-bottom: 0;\">\n          <p class=\"price\" style=\"color: white; font-weight: 700; font-size: 15px;\">$19.95</p>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n  <!-- first - order-->\n\n  <!-- second - order-->\n\n  <ion-card style=\"margin-bottom: 0;\">\n      <p class=\"date\">4/ junio/ 2019</p>\n    </ion-card>\n  \n  \n    <ion-card class=\"article-container\">\n      <ion-grid style=\"border-top: 1px solid rgb(206, 206, 206);\">\n        <ion-row>\n          <ion-col style=\"padding-top: 0; padding-bottom: 0;\">\n            <p class=\"article-name\">Coca Cola</p>\n          </ion-col>\n          <ion-col style=\"padding-top: 0; padding-bottom: 0;\">\n            <p class=\"price\">$1.99</p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n  \n      <ion-grid style=\"border-top: 1px solid rgb(206, 206, 206);\">\n        <ion-row>\n          <ion-col style=\"padding-top: 0; padding-bottom: 0;\">\n            <p class=\"article-name\">Doritos</p>\n          </ion-col>\n          <ion-col style=\"padding-top: 0; padding-bottom: 0;\">\n            <p class=\"price\">$1.99</p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n  \n      <ion-grid style=\"border-top: 1px solid rgb(206, 206, 206);\">\n        <ion-row>\n          <ion-col style=\"padding-top: 0; padding-bottom: 0;\">\n            <p class=\"article-name\">Colgate</p>\n          </ion-col>\n          <ion-col style=\"padding-top: 0; padding-bottom: 0;\">\n            <p class=\"price\">$3.99</p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n  \n      <ion-grid style=\"border-top: 1px solid rgb(206, 206, 206);\">\n        <ion-row>\n          <ion-col style=\"padding-top: 0; padding-bottom: 0;\">\n            <p class=\"article-name\">Barefoot Moscato</p>\n          </ion-col>\n          <ion-col style=\"padding-top: 0; padding-bottom: 0;\">\n            <p class=\"price\">$8.99</p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n  \n      <ion-grid style=\"border-top: 1px solid rgb(206, 206, 206);\">\n        <ion-row>\n          <ion-col style=\"padding-top: 0; padding-bottom: 0;\">\n            <p class=\"article-name\">Kraft Mild Cheddar</p>\n          </ion-col>\n          <ion-col style=\"padding-top: 0; padding-bottom: 0;\">\n            <p class=\"price\">$2.99</p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n  \n      <ion-grid style=\"border-top: 1px solid rgb(206, 206, 206); background: #FD5440\">\n        <ion-row>\n          <ion-col style=\"padding-top: 0; padding-bottom: 0;\">\n            <p class=\"article-name\" style=\"color: white; font-weight: 700; font-size: 15px;\">TOTAL</p>\n          </ion-col>\n          <ion-col style=\"padding-top: 0; padding-bottom: 0;\">\n            <p class=\"price\" style=\"color: white; font-weight: 700; font-size: 15px;\">$19.95</p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n\n  <!-- second - order-->\n\n  <!-- third - order-->\n\n  <ion-card style=\"margin-bottom: 0;\">\n      <p class=\"date\">6/ junio/ 2019</p>\n    </ion-card>\n  \n  \n    <ion-card class=\"article-container\">\n      <ion-grid style=\"border-top: 1px solid rgb(206, 206, 206);\">\n        <ion-row>\n          <ion-col style=\"padding-top: 0; padding-bottom: 0;\">\n            <p class=\"article-name\">Coca Cola</p>\n          </ion-col>\n          <ion-col style=\"padding-top: 0; padding-bottom: 0;\">\n            <p class=\"price\">$1.99</p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n  \n      <ion-grid style=\"border-top: 1px solid rgb(206, 206, 206);\">\n        <ion-row>\n          <ion-col style=\"padding-top: 0; padding-bottom: 0;\">\n            <p class=\"article-name\">Doritos</p>\n          </ion-col>\n          <ion-col style=\"padding-top: 0; padding-bottom: 0;\">\n            <p class=\"price\">$1.99</p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n  \n      <ion-grid style=\"border-top: 1px solid rgb(206, 206, 206);\">\n        <ion-row>\n          <ion-col style=\"padding-top: 0; padding-bottom: 0;\">\n            <p class=\"article-name\">Colgate</p>\n          </ion-col>\n          <ion-col style=\"padding-top: 0; padding-bottom: 0;\">\n            <p class=\"price\">$3.99</p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n  \n      <ion-grid style=\"border-top: 1px solid rgb(206, 206, 206);\">\n        <ion-row>\n          <ion-col style=\"padding-top: 0; padding-bottom: 0;\">\n            <p class=\"article-name\">Barefoot Moscato</p>\n          </ion-col>\n          <ion-col style=\"padding-top: 0; padding-bottom: 0;\">\n            <p class=\"price\">$8.99</p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n  \n      <ion-grid style=\"border-top: 1px solid rgb(206, 206, 206);\">\n        <ion-row>\n          <ion-col style=\"padding-top: 0; padding-bottom: 0;\">\n            <p class=\"article-name\">Kraft Mild Cheddar</p>\n          </ion-col>\n          <ion-col style=\"padding-top: 0; padding-bottom: 0;\">\n            <p class=\"price\">$2.99</p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n  \n      <ion-grid style=\"border-top: 1px solid rgb(206, 206, 206); background: #FD5440\">\n        <ion-row>\n          <ion-col style=\"padding-top: 0; padding-bottom: 0;\">\n            <p class=\"article-name\" style=\"color: white; font-weight: 700; font-size: 15px;\">TOTAL</p>\n          </ion-col>\n          <ion-col style=\"padding-top: 0; padding-bottom: 0;\">\n            <p class=\"price\" style=\"color: white; font-weight: 700; font-size: 15px;\">$19.95</p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n\n  <!-- third - order-->\n</ion-content>"

/***/ }),

/***/ "./src/app/history-order/history-order.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/history-order/history-order.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo {\n  text-align: center;\n  font-size: 20px;\n  font-weight: 700;\n  font-family: 'Mukta', sans-serif;\n  color: white;\n  margin-top: 50px;\n  margin-bottom: 25x; }\n\n.logo-card {\n  box-shadow: none;\n  margin: 0;\n  border-radius: 0;\n  --background: #FD5440;\n  width: 100%; }\n\n.icon-btn {\n  color: white;\n  width: 25px;\n  height: 25px;\n  position: absolute;\n  top: 50px;\n  left: 10px; }\n\n.articles {\n  text-align: center;\n  font-family: 'Mukta', sans-serif;\n  font-size: 15px;\n  color: #3b3b3b; }\n\n.date {\n  font-family: 'Mukta', sans-serif;\n  font-size: 13px;\n  color: #3b3b3b; }\n\n.article-container {\n  box-shadow: 0 8px 6px -6px black;\n  background: rgba(224, 224, 224, 0.575);\n  margin: 40px;\n  margin-top: 0;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0; }\n\n.article-name {\n  text-align: left;\n  font-family: 'Mukta', sans-serif; }\n\n.price {\n  text-align: right;\n  font-family: 'Mukta', sans-serif; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sb3JuYW1pY2hlbGxlL0Rvd25sb2Fkcy9idXlwaW4tYXBwLThmMjkwNWUwYzBkODlhYTIxMDZmMmRkY2FmZDVkY2U0NDJmMDZmODQvc3JjL2FwcC9oaXN0b3J5LW9yZGVyL2hpc3Rvcnktb3JkZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0NBQWdDO0VBQ2hDLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIscUJBQWE7RUFDYixXQUFXLEVBQUE7O0FBR2I7RUFDRSxZQUF5QjtFQUN6QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVSxFQUFBOztBQUdaO0VBQ0Usa0JBQWtCO0VBQ2xCLGdDQUFnQztFQUNoQyxlQUFlO0VBQ2YsY0FBc0IsRUFBQTs7QUFHeEI7RUFDRSxnQ0FBZ0M7RUFDaEMsZUFBZTtFQUNmLGNBQXNCLEVBQUE7O0FBR3hCO0VBQ0UsZ0NBQWdDO0VBQ2hDLHNDQUFzQztFQUN0QyxZQUFZO0VBQ1osYUFBYTtFQUNiLHlCQUF5QjtFQUN6QiwwQkFBMEIsRUFBQTs7QUFHNUI7RUFDRSxnQkFBZ0I7RUFDaEIsZ0NBQWdDLEVBQUE7O0FBSWxDO0VBQ0UsaUJBQWlCO0VBQ2pCLGdDQUFnQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvaGlzdG9yeS1vcmRlci9oaXN0b3J5LW9yZGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtZmFtaWx5OiAnTXVrdGEnLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDI1eDtcbn1cblxuLmxvZ28tY2FyZCB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgLS1iYWNrZ3JvdW5kOiAjRkQ1NDQwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmljb24tYnRuIHtcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwcHg7XG4gIGxlZnQ6IDEwcHg7XG59XG5cbi5hcnRpY2xlcyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6ICdNdWt0YScsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6IHJnYig1OSwgNTksIDU5KTtcbn1cblxuLmRhdGUge1xuICBmb250LWZhbWlseTogJ011a3RhJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogcmdiKDU5LCA1OSwgNTkpO1xufVxuXG4uYXJ0aWNsZS1jb250YWluZXIge1xuICBib3gtc2hhZG93OiAwIDhweCA2cHggLTZweCBibGFjaztcbiAgYmFja2dyb3VuZDogcmdiYSgyMjQsIDIyNCwgMjI0LCAwLjU3NSk7XG4gIG1hcmdpbjogNDBweDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG59XG5cbi5hcnRpY2xlLW5hbWUge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LWZhbWlseTogJ011a3RhJywgc2Fucy1zZXJpZjtcblxufVxuXG4ucHJpY2Uge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1mYW1pbHk6ICdNdWt0YScsIHNhbnMtc2VyaWY7XG5cbn0iXX0= */"

/***/ }),

/***/ "./src/app/history-order/history-order.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/history-order/history-order.page.ts ***!
  \*****************************************************/
/*! exports provided: HistoryOrderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryOrderPage", function() { return HistoryOrderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "./node_modules/@ionic-native/native-page-transitions/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var HistoryOrderPage = /** @class */ (function () {
    function HistoryOrderPage(nativePageTransitions, navigate) {
        this.nativePageTransitions = nativePageTransitions;
        this.navigate = navigate;
    }
    HistoryOrderPage.prototype.ngOnInit = function () {
    };
    HistoryOrderPage.prototype.goBack = function () {
        var options = {
            duration: 300,
            iosdelay: 300,
            androiddelay: 100,
        };
        console.log(options);
        this.nativePageTransitions.fade(options);
        this.navigate.navigateRoot("/tabs/tabs/profile");
    };
    HistoryOrderPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-history-order',
            template: __webpack_require__(/*! ./history-order.page.html */ "./src/app/history-order/history-order.page.html"),
            styles: [__webpack_require__(/*! ./history-order.page.scss */ "./src/app/history-order/history-order.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_2__["NativePageTransitions"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
    ], HistoryOrderPage);
    return HistoryOrderPage;
}());



/***/ })

}]);
//# sourceMappingURL=history-order-history-order-module.js.map