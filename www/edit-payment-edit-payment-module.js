(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-payment-edit-payment-module"],{

/***/ "./src/app/edit-payment/edit-payment.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/edit-payment/edit-payment.module.ts ***!
  \*****************************************************/
/*! exports provided: EditPaymentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPaymentPageModule", function() { return EditPaymentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edit_payment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-payment.page */ "./src/app/edit-payment/edit-payment.page.ts");







var routes = [
    {
        path: '',
        component: _edit_payment_page__WEBPACK_IMPORTED_MODULE_6__["EditPaymentPage"]
    }
];
var EditPaymentPageModule = /** @class */ (function () {
    function EditPaymentPageModule() {
    }
    EditPaymentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_edit_payment_page__WEBPACK_IMPORTED_MODULE_6__["EditPaymentPage"]]
        })
    ], EditPaymentPageModule);
    return EditPaymentPageModule;
}());



/***/ }),

/***/ "./src/app/edit-payment/edit-payment.page.html":
/*!*****************************************************!*\
  !*** ./src/app/edit-payment/edit-payment.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"orange-bg\">\n    <ion-card class=\"logo-card\">\n      <h5 class=\"logo\">Editar método de pago</h5>\n      <!-- <img class=\"logo\" src=\"assets/logo prueba.png\"> -->\n  \n      <ion-button style=\"--box-shadow: none;\"  (click)=\"goBack()\" class=\"arrow-btn\">\n        <ion-icon class=\"arrow-icon\" ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-card>\n  </div>\n  \n  <ion-content>\n    <ion-card class=\"payment-card\">\n      <img src=\"assets/visas.png\" width=\"200px\" height=\"200px\" style=\"object-fit: contain;\">\n    </ion-card>\n  \n    <ion-card class=\"input-card\">\n      <ion-input type=\"text\" style=\"margin-top: 10px;\" class=\"card\" clearInput placeholder=\"Jane Doe\"></ion-input>\n      <ion-input type=\"text\" class=\"card\" clearInput placeholder=\"4242 4242 4242 4242\"></ion-input>\n\n      <ion-datetime class=\"card\" placeholder=\"MMMM/YY\" displayFormat=\"MMMM, YYYY\" max=\"2035\"></ion-datetime>\n\n      <!-- <ion-input type=\"text\" class=\"card\" clearInput placeholder=\"MM/YYYY\"></ion-input> -->\n      <ion-input type=\"text\" class=\"card\" clearInput placeholder=\"Security Code\"></ion-input>\n  \n      <ion-button style=\"--box-shadow: none;\"  class=\"next-btn\" (click)=\"saveInfo()\" expand=\"block\">GUARDAR</ion-button>\n  \n    </ion-card>\n  \n  </ion-content>"

/***/ }),

/***/ "./src/app/edit-payment/edit-payment.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/edit-payment/edit-payment.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".orange-bg {\n  background: #FD5440; }\n\n.logo-card {\n  box-shadow: none;\n  padding-bottom: 0;\n  margin-left: 0;\n  margin-right: 0; }\n\n.tags {\n  --background: rgb(255, 255, 255);\n  --background-activated: rgb(255, 255, 255);\n  color: #FD5440;\n  --color-activated: #FD5440;\n  font-weight: 700;\n  font-size: 12px;\n  --border-radius: 25px; }\n\n.logo {\n  text-align: center;\n  color: white;\n  padding-top: 10px;\n  font-weight: 700; }\n\n.arrow-icon {\n  color: white;\n  width: 25px;\n  height: 25px; }\n\n.arrow-btn {\n  --background: transparent;\n  --background-activated: transparent;\n  position: absolute;\n  top: 13px;\n  left: 0;\n  --box-shadow: none; }\n\n.payment-card {\n  box-shadow: none;\n  border-radius: 0;\n  background: rgba(223, 223, 223, 0.253);\n  margin: 0;\n  padding: 10px; }\n\n.input-card {\n  box-shadow: none;\n  border-radius: 0;\n  margin: 0;\n  margin-left: 10px;\n  margin-right: 10px; }\n\n.card {\n  border-bottom: 1px solid #afafaf;\n  margin-bottom: 10px;\n  --padding-start: 10px; }\n\n.check {\n  --background-checked: #FFC93A;\n  --border-radius: 6px;\n  --checkmark-color: #FD5440;\n  --border-color-checked: #FFC93A;\n  --border-color: #FFC93A;\n  --border-width: 2px;\n  --border-color: #FD5440;\n  --background: #FD5440; }\n\n.next-btn {\n  --background: #FD5440;\n  --background-activated: #FD5440;\n  color: #FFC93A;\n  --color-activated: #FFC93A;\n  margin-left: 30px;\n  margin-right: 30px;\n  font-weight: 700;\n  font-size: 13px;\n  height: 50px;\n  --border-radius: 25px;\n  margin-top: 40px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sb3JuYW1pY2hlbGxlL0Rvd25sb2Fkcy9idXlwaW4tYXBwLThmMjkwNWUwYzBkODlhYTIxMDZmMmRkY2FmZDVkY2U0NDJmMDZmODQvc3JjL2FwcC9lZGl0LXBheW1lbnQvZWRpdC1wYXltZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxnQ0FBYTtFQUNiLDBDQUF1QjtFQUN2QixjQUFjO0VBQ2QsMEJBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YscUJBQWdCLEVBQUE7O0FBR2xCO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2Q7RUFDRSx5QkFBYTtFQUNiLG1DQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsU0FBUztFQUNULE9BQU87RUFDUCxrQkFBYSxFQUFBOztBQUdmO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixzQ0FBc0M7RUFDdEMsU0FBUztFQUNULGFBQWEsRUFBQTs7QUFHZjtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsU0FBUztFQUNULGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxnQ0FBMkM7RUFDM0MsbUJBQW1CO0VBQ25CLHFCQUFnQixFQUFBOztBQUdsQjtFQUNFLDZCQUFxQjtFQUNyQixvQkFBZ0I7RUFDaEIsMEJBQWtCO0VBQ2xCLCtCQUF1QjtFQUN2Qix1QkFBZTtFQUNmLG1CQUFlO0VBQ2YsdUJBQWU7RUFDZixxQkFBYSxFQUFBOztBQUdmO0VBQ0UscUJBQWE7RUFDYiwrQkFBdUI7RUFDdkIsY0FBYztFQUNkLDBCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsWUFBWTtFQUNaLHFCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2VkaXQtcGF5bWVudC9lZGl0LXBheW1lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9yYW5nZS1iZyB7XG4gIGJhY2tncm91bmQ6ICNGRDU0NDA7XG59XG5cbi5sb2dvLWNhcmQge1xuICBib3gtc2hhZG93OiBub25lO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cblxuLnRhZ3Mge1xuICAtLWJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICBjb2xvcjogI0ZENTQ0MDtcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6ICNGRDU0NDA7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgLS1ib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuXG4ubG9nbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmFycm93LWljb24ge1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG59XG5cbi5hcnJvdy1idG4ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEzcHg7XG4gIGxlZnQ6IDA7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLnBheW1lbnQtY2FyZCB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjIzLCAyMjMsIDIyMywgMC4yNTMpO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5pbnB1dC1jYXJkIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uY2FyZCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMTc1LCAxNzUsIDE3NSk7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTBweDtcbn1cblxuLmNoZWNrIHtcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICNGRkM5M0E7XG4gIC0tYm9yZGVyLXJhZGl1czogNnB4O1xuICAtLWNoZWNrbWFyay1jb2xvcjogI0ZENTQ0MDtcbiAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogI0ZGQzkzQTtcbiAgLS1ib3JkZXItY29sb3I6ICNGRkM5M0E7XG4gIC0tYm9yZGVyLXdpZHRoOiAycHg7XG4gIC0tYm9yZGVyLWNvbG9yOiAjRkQ1NDQwO1xuICAtLWJhY2tncm91bmQ6ICNGRDU0NDA7XG59XG5cbi5uZXh0LWJ0biB7XG4gIC0tYmFja2dyb3VuZDogI0ZENTQ0MDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI0ZENTQ0MDtcbiAgY29sb3I6ICNGRkM5M0E7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiAjRkZDOTNBO1xuICBtYXJnaW4tbGVmdDogMzBweDtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGhlaWdodDogNTBweDtcbiAgLS1ib3JkZXItcmFkaXVzOiAyNXB4O1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/edit-payment/edit-payment.page.ts":
/*!***************************************************!*\
  !*** ./src/app/edit-payment/edit-payment.page.ts ***!
  \***************************************************/
/*! exports provided: EditPaymentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPaymentPage", function() { return EditPaymentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "./node_modules/@ionic-native/native-page-transitions/ngx/index.js");




var EditPaymentPage = /** @class */ (function () {
    function EditPaymentPage(navigate, nativePageTransitions) {
        this.navigate = navigate;
        this.nativePageTransitions = nativePageTransitions;
    }
    EditPaymentPage.prototype.ngOnInit = function () {
    };
    EditPaymentPage.prototype.goBack = function () {
        var options = {
            duration: 300,
            iosdelay: 300
        };
        console.log(options);
        this.nativePageTransitions.fade(options);
        this.navigate.navigateRoot("/payment-method");
    };
    EditPaymentPage.prototype.saveInfo = function () {
        var options = {
            duration: 300,
            iosdelay: 300
        };
        console.log(options);
        this.nativePageTransitions.fade(options);
        this.navigate.navigateRoot("/payment-method");
    };
    EditPaymentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-payment',
            template: __webpack_require__(/*! ./edit-payment.page.html */ "./src/app/edit-payment/edit-payment.page.html"),
            styles: [__webpack_require__(/*! ./edit-payment.page.scss */ "./src/app/edit-payment/edit-payment.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_3__["NativePageTransitions"]])
    ], EditPaymentPage);
    return EditPaymentPage;
}());



/***/ })

}]);
//# sourceMappingURL=edit-payment-edit-payment-module.js.map