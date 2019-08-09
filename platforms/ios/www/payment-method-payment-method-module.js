(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["payment-method-payment-method-module"],{

/***/ "./src/app/payment-method/payment-method.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/payment-method/payment-method.module.ts ***!
  \*********************************************************/
/*! exports provided: PaymentMethodPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentMethodPageModule", function() { return PaymentMethodPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _payment_method_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./payment-method.page */ "./src/app/payment-method/payment-method.page.ts");







var routes = [
    {
        path: '',
        component: _payment_method_page__WEBPACK_IMPORTED_MODULE_6__["PaymentMethodPage"]
    }
];
var PaymentMethodPageModule = /** @class */ (function () {
    function PaymentMethodPageModule() {
    }
    PaymentMethodPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_payment_method_page__WEBPACK_IMPORTED_MODULE_6__["PaymentMethodPage"]]
        })
    ], PaymentMethodPageModule);
    return PaymentMethodPageModule;
}());



/***/ }),

/***/ "./src/app/payment-method/payment-method.page.html":
/*!*********************************************************!*\
  !*** ./src/app/payment-method/payment-method.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-card class=\"logo-card\">\n  <h1 class=\"logo\">Método de pago</h1>\n  <ion-icon (click)=\"goBack()\" ion-button class=\"icon-btn\" ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\n</ion-card>\n\n<ion-content>\n  <ion-card style=\"margin-bottom: 0;\">\n    <p class=\"articles\">Tarjetas de crédito</p>\n  </ion-card>\n\n  <!-- first - card -->\n\n\n  <ion-card class=\"article-container\">\n    <ion-img src=\"assets/visa.png\" class=\"card-logo\"></ion-img>\n    <ion-grid style=\"border-top: 1px solid rgb(206, 206, 206); background: #FD5440\">\n      <ion-row>\n        <ion-col size=\"8\" style=\"padding-top: 0; padding-bottom: 0;\">\n          <p class=\"article-name\" style=\"color: white; font-weight: 700; font-size: 15px;\">XXXX-XXXX-XXXX-4242</p>\n        </ion-col>\n        <ion-col style=\"padding-top: 0; padding-bottom: 0;\">\n          <ion-icon ion-button class=\"delete-btn\" ios=\"ios-trash\" md=\"md-trash\"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n  <!-- second - card -->\n\n  <ion-card class=\"article-container\">\n    <ion-img src=\"assets/mastercard.png\" class=\"card-logo\"></ion-img>\n    <ion-grid style=\"border-top: 1px solid rgb(206, 206, 206); background: #FD5440\">\n      <ion-row>\n        <ion-col size=\"8\" style=\"padding-top: 0; padding-bottom: 0;\">\n          <p class=\"article-name\" style=\"color: white; font-weight: 700; font-size: 15px;\">XXXX-XXXX-XXXX-4242</p>\n        </ion-col>\n        <ion-col style=\"padding-top: 0; padding-bottom: 0;\">\n          <ion-icon ion-button class=\"delete-btn\" ios=\"ios-trash\" md=\"md-trash\"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n  <!-- third card -->\n\n  <ion-card class=\"article-container\">\n      <ion-img src=\"assets/discover.png\" class=\"card-logo\"></ion-img>\n      <ion-grid style=\"border-top: 1px solid rgb(206, 206, 206); background: #FD5440\">\n        <ion-row>\n          <ion-col size=\"8\" style=\"padding-top: 0; padding-bottom: 0;\">\n            <p class=\"article-name\" style=\"color: white; font-weight: 700; font-size: 15px;\">XXXX-XXXX-XXXX-4242</p>\n          </ion-col>\n          <ion-col style=\"padding-top: 0; padding-bottom: 0;\">\n            <ion-icon ion-button class=\"delete-btn\" ios=\"ios-trash\" md=\"md-trash\"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n\n    <!-- fourth card -->\n\n    <ion-card class=\"article-container\">\n        <ion-img src=\"assets/american express.png\" class=\"card-logo\"></ion-img>\n        <ion-grid style=\"border-top: 1px solid rgb(206, 206, 206); background: #FD5440\">\n          <ion-row>\n            <ion-col size=\"8\" style=\"padding-top: 0; padding-bottom: 0;\">\n              <p class=\"article-name\" style=\"color: white; font-weight: 700; font-size: 15px;\">XXXX-XXXX-XXXX-4242</p>\n            </ion-col>\n            <ion-col style=\"padding-top: 0; padding-bottom: 0;\">\n              <ion-icon ion-button class=\"delete-btn\" ios=\"ios-trash\" md=\"md-trash\"></ion-icon>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card>\n\n</ion-content>\n\n<ion-button class=\"add-btn\" expand=\"full\" (click)=\"openEdit()\">\n  <ion-icon ios=\"ios-add\" md=\"md-add\"></ion-icon>\n  AGREGAR TARJETA\n</ion-button>"

/***/ }),

/***/ "./src/app/payment-method/payment-method.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/payment-method/payment-method.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo {\n  text-align: center;\n  font-size: 20px;\n  font-weight: 700;\n  font-family: 'Mukta', sans-serif;\n  color: white;\n  margin-top: 50px;\n  margin-bottom: 25x; }\n\n.logo-card {\n  box-shadow: none;\n  margin: 0;\n  border-radius: 0;\n  --background: #FD5440;\n  width: 100%; }\n\n.icon-btn {\n  color: white;\n  width: 25px;\n  height: 25px;\n  position: absolute;\n  top: 50px;\n  left: 10px; }\n\n.articles {\n  text-align: center;\n  font-family: 'Mukta', sans-serif;\n  font-size: 15px;\n  color: #3b3b3b; }\n\n.date {\n  font-family: 'Mukta', sans-serif;\n  font-size: 13px;\n  color: #3b3b3b; }\n\n.article-container {\n  box-shadow: 0 8px 6px -6px black;\n  background: rgba(224, 224, 224, 0.575);\n  margin: 40px;\n  margin-top: 0;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0; }\n\n.article-name {\n  text-align: left;\n  font-family: 'Mukta', sans-serif; }\n\n.delete-btn {\n  color: white;\n  font-size: 25px;\n  float: right;\n  margin-top: 15px; }\n\n.card-logo {\n  margin-left: auto;\n  margin-right: auto;\n  width: 100px;\n  height: 100px; }\n\n.add-btn {\n  height: 90px;\n  --background: #FD5440;\n  --background-activated: rgb(189, 60, 46);\n  font-family: 'Mukta', sans-serif;\n  margin: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sb3JuYW1pY2hlbGxlL0Rvd25sb2Fkcy9idXlwaW4tYXBwLThmMjkwNWUwYzBkODlhYTIxMDZmMmRkY2FmZDVkY2U0NDJmMDZmODQvc3JjL2FwcC9wYXltZW50LW1ldGhvZC9wYXltZW50LW1ldGhvZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQ0FBZ0M7RUFDaEMsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxnQkFBZ0I7RUFDaEIsU0FBUztFQUNULGdCQUFnQjtFQUNoQixxQkFBYTtFQUNiLFdBQVcsRUFBQTs7QUFHYjtFQUNFLFlBQXlCO0VBQ3pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVLEVBQUE7O0FBR1o7RUFDRSxrQkFBa0I7RUFDbEIsZ0NBQWdDO0VBQ2hDLGVBQWU7RUFDZixjQUFzQixFQUFBOztBQUd4QjtFQUNFLGdDQUFnQztFQUNoQyxlQUFlO0VBQ2YsY0FBc0IsRUFBQTs7QUFHeEI7RUFDRSxnQ0FBZ0M7RUFDaEMsc0NBQXNDO0VBQ3RDLFlBQVk7RUFDWixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLDBCQUEwQixFQUFBOztBQUc1QjtFQUNFLGdCQUFnQjtFQUNoQixnQ0FBZ0MsRUFBQTs7QUFHbEM7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhLEVBQUE7O0FBR2Y7RUFDRSxZQUFZO0VBQ1oscUJBQWE7RUFDYix3Q0FBdUI7RUFDdkIsZ0NBQWdDO0VBQ2hDLFNBQVMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BheW1lbnQtbWV0aG9kL3BheW1lbnQtbWV0aG9kLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtZmFtaWx5OiAnTXVrdGEnLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDI1eDtcbn1cblxuLmxvZ28tY2FyZCB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgLS1iYWNrZ3JvdW5kOiAjRkQ1NDQwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmljb24tYnRuIHtcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwcHg7XG4gIGxlZnQ6IDEwcHg7XG59XG5cbi5hcnRpY2xlcyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6ICdNdWt0YScsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6IHJnYig1OSwgNTksIDU5KTtcbn1cblxuLmRhdGUge1xuICBmb250LWZhbWlseTogJ011a3RhJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogcmdiKDU5LCA1OSwgNTkpO1xufVxuXG4uYXJ0aWNsZS1jb250YWluZXIge1xuICBib3gtc2hhZG93OiAwIDhweCA2cHggLTZweCBibGFjaztcbiAgYmFja2dyb3VuZDogcmdiYSgyMjQsIDIyNCwgMjI0LCAwLjU3NSk7XG4gIG1hcmdpbjogNDBweDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG59XG5cbi5hcnRpY2xlLW5hbWUge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LWZhbWlseTogJ011a3RhJywgc2Fucy1zZXJpZjtcbn1cblxuLmRlbGV0ZS1idG4ge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4uY2FyZC1sb2dvIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4uYWRkLWJ0biB7XG4gIGhlaWdodDogOTBweDtcbiAgLS1iYWNrZ3JvdW5kOiAjRkQ1NDQwO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiByZ2IoMTg5LCA2MCwgNDYpO1xuICBmb250LWZhbWlseTogJ011a3RhJywgc2Fucy1zZXJpZjtcbiAgbWFyZ2luOiAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/payment-method/payment-method.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/payment-method/payment-method.page.ts ***!
  \*******************************************************/
/*! exports provided: PaymentMethodPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentMethodPage", function() { return PaymentMethodPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "./node_modules/@ionic-native/native-page-transitions/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var PaymentMethodPage = /** @class */ (function () {
    function PaymentMethodPage(nativePageTransitions, navigate) {
        this.nativePageTransitions = nativePageTransitions;
        this.navigate = navigate;
    }
    PaymentMethodPage.prototype.ngOnInit = function () {
    };
    PaymentMethodPage.prototype.goBack = function () {
        var options = {
            duration: 300,
            iosdelay: 300,
            androiddelay: 100,
        };
        console.log(options);
        this.nativePageTransitions.fade(options);
        this.navigate.navigateRoot("/tabs/tabs/profile");
    };
    PaymentMethodPage.prototype.openEdit = function () {
        var options = {
            duration: 300,
            iosdelay: 300,
            androiddelay: 100,
        };
        console.log(options);
        this.nativePageTransitions.fade(options);
        this.navigate.navigateRoot("/edit-payment");
    };
    PaymentMethodPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-payment-method',
            template: __webpack_require__(/*! ./payment-method.page.html */ "./src/app/payment-method/payment-method.page.html"),
            styles: [__webpack_require__(/*! ./payment-method.page.scss */ "./src/app/payment-method/payment-method.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_2__["NativePageTransitions"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
    ], PaymentMethodPage);
    return PaymentMethodPage;
}());



/***/ })

}]);
//# sourceMappingURL=payment-method-payment-method-module.js.map