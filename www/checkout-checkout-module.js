(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["checkout-checkout-module"],{

/***/ "./src/app/checkout/checkout.module.ts":
/*!*********************************************!*\
  !*** ./src/app/checkout/checkout.module.ts ***!
  \*********************************************/
/*! exports provided: CheckoutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPageModule", function() { return CheckoutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _checkout_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkout.page */ "./src/app/checkout/checkout.page.ts");







var routes = [
    {
        path: '',
        component: _checkout_page__WEBPACK_IMPORTED_MODULE_6__["CheckoutPage"]
    }
];
var CheckoutPageModule = /** @class */ (function () {
    function CheckoutPageModule() {
    }
    CheckoutPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_checkout_page__WEBPACK_IMPORTED_MODULE_6__["CheckoutPage"]]
        })
    ], CheckoutPageModule);
    return CheckoutPageModule;
}());



/***/ }),

/***/ "./src/app/checkout/checkout.page.html":
/*!*********************************************!*\
  !*** ./src/app/checkout/checkout.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"orange-bg\">\n  <ion-card class=\"logo-card\">\n    <h5 class=\"logo\">Checkout</h5>\n    <!-- <img class=\"logo\" src=\"assets/logo prueba.png\"> -->\n\n    <ion-button style=\"--box-shadow: none;\"  (click)=\"goBack()\" class=\"arrow-btn\">\n      <ion-icon class=\"arrow-icon\" ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\n    </ion-button>\n  </ion-card>\n</div>\n\n<ion-content>\n  <h5 style=\"color: grey; font-weight: 700; font-size: 15px; text-align: center;\">Enter your card info</h5>\n  <ion-card class=\"payment-card\">\n    <img src=\"assets/visas.png\" width=\"200px\" height=\"200px\" style=\"object-fit: contain;\">\n  </ion-card>\n\n  <ion-card class=\"input-card\">\n    <ion-input type=\"text\" style=\"margin-top: 10px;\" class=\"card\" clearInput placeholder=\"NAME CARD\"></ion-input>\n    <ion-input type=\"text\" class=\"card\" clearInput placeholder=\"CARD NUMBER\"></ion-input>\n    <!-- <ion-input type=\"text\" class=\"card\" clearInput placeholder=\"MM/YYYY\"></ion-input> -->\n    <ion-datetime class=\"card\" placeholder=\"MMMM/YY\" displayFormat=\"MMMM, YYYY\" max=\"2035\"></ion-datetime>\n\n    <ion-input type=\"text\" class=\"card\" clearInput placeholder=\"SECURITY CODE\"></ion-input>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"3\">\n          <ion-checkbox style=\"float: right;\" class=\"check\"></ion-checkbox>\n        </ion-col>\n        <ion-col size=\"9\">\n          <p style=\"margin: 0; padding: 0; margin-top: 5px; font-weight: 700; color: grey; font-size: 12px;\">Billing\n            address same as shipping</p>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-button style=\"--box-shadow: none;\"  class=\"next-btn\" (click)=\"presentPopover()\" expand=\"block\">PAYMENT</ion-button>\n\n  </ion-card>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/checkout/checkout.page.scss":
/*!*********************************************!*\
  !*** ./src/app/checkout/checkout.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".orange-bg {\n  background: #FD5440; }\n\n.logo-card {\n  box-shadow: none;\n  padding-bottom: 0;\n  margin-left: 0;\n  margin-right: 0; }\n\n.tags {\n  --background: rgb(255, 255, 255);\n  --background-activated: rgb(255, 255, 255);\n  color: #FD5440;\n  --color-activated: #FD5440;\n  font-weight: 700;\n  font-size: 12px;\n  --border-radius: 25px; }\n\n.logo {\n  text-align: center;\n  color: white;\n  padding-top: 10px;\n  font-weight: 700; }\n\n.arrow-icon {\n  color: white;\n  width: 25px;\n  height: 25px; }\n\n.arrow-btn {\n  --background: transparent;\n  --background-activated: transparent;\n  position: absolute;\n  top: 13px;\n  left: 0;\n  --box-shadow: none; }\n\n.payment-card {\n  box-shadow: none;\n  border-radius: 0;\n  background: rgba(223, 223, 223, 0.253);\n  margin: 0;\n  padding: 10px; }\n\n.input-card {\n  box-shadow: none;\n  border-radius: 0;\n  margin: 0;\n  margin-left: 10px;\n  margin-right: 10px; }\n\n.card {\n  border-bottom: 1px solid #afafaf;\n  margin-bottom: 10px;\n  --padding-start: 10px; }\n\n.check {\n  --background-checked: #FFC93A;\n  --border-radius: 6px;\n  --checkmark-color: #FD5440;\n  --border-color-checked: #FFC93A;\n  --border-color: #FFC93A;\n  --border-width: 2px;\n  --border-color: #FD5440;\n  --background: #FD5440; }\n\n.next-btn {\n  --background: #FD5440;\n  --background-activated: #FD5440;\n  color: #FFC93A;\n  --color-activated: #FFC93A;\n  margin-left: 30px;\n  margin-right: 30px;\n  font-weight: 700;\n  font-size: 13px;\n  height: 50px;\n  --border-radius: 25px;\n  margin-top: 40px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sb3JuYW1pY2hlbGxlL0Rvd25sb2Fkcy9idXlwaW4tYXBwLThmMjkwNWUwYzBkODlhYTIxMDZmMmRkY2FmZDVkY2U0NDJmMDZmODQvc3JjL2FwcC9jaGVja291dC9jaGVja291dC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsZ0NBQWE7RUFDYiwwQ0FBdUI7RUFDdkIsY0FBYztFQUNkLDBCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHFCQUFnQixFQUFBOztBQUdsQjtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdkO0VBQ0UseUJBQWE7RUFDYixtQ0FBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxPQUFPO0VBQ1Asa0JBQWEsRUFBQTs7QUFHZjtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsc0NBQXNDO0VBQ3RDLFNBQVM7RUFDVCxhQUFhLEVBQUE7O0FBR2Y7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsZ0NBQTJDO0VBQzNDLG1CQUFtQjtFQUNuQixxQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSw2QkFBcUI7RUFDckIsb0JBQWdCO0VBQ2hCLDBCQUFrQjtFQUNsQiwrQkFBdUI7RUFDdkIsdUJBQWU7RUFDZixtQkFBZTtFQUNmLHVCQUFlO0VBQ2YscUJBQWEsRUFBQTs7QUFHZjtFQUNFLHFCQUFhO0VBQ2IsK0JBQXVCO0VBQ3ZCLGNBQWM7RUFDZCwwQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFlBQVk7RUFDWixxQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jaGVja291dC9jaGVja291dC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3JhbmdlLWJnIHtcbiAgYmFja2dyb3VuZDogI0ZENTQ0MDtcbn1cblxuLmxvZ28tY2FyZCB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuXG4udGFncyB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIGNvbG9yOiAjRkQ1NDQwO1xuICAtLWNvbG9yLWFjdGl2YXRlZDogI0ZENTQ0MDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG5cbi5sb2dvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uYXJyb3ctaWNvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbn1cblxuLmFycm93LWJ0biB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTNweDtcbiAgbGVmdDogMDtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xufVxuXG4ucGF5bWVudC1jYXJkIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgyMjMsIDIyMywgMjIzLCAwLjI1Myk7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmlucHV0LWNhcmQge1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5jYXJkIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigxNzUsIDE3NSwgMTc1KTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xufVxuXG4uY2hlY2sge1xuICAtLWJhY2tncm91bmQtY2hlY2tlZDogI0ZGQzkzQTtcbiAgLS1ib3JkZXItcmFkaXVzOiA2cHg7XG4gIC0tY2hlY2ttYXJrLWNvbG9yOiAjRkQ1NDQwO1xuICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiAjRkZDOTNBO1xuICAtLWJvcmRlci1jb2xvcjogI0ZGQzkzQTtcbiAgLS1ib3JkZXItd2lkdGg6IDJweDtcbiAgLS1ib3JkZXItY29sb3I6ICNGRDU0NDA7XG4gIC0tYmFja2dyb3VuZDogI0ZENTQ0MDtcbn1cblxuLm5leHQtYnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiAjRkQ1NDQwO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjRkQ1NDQwO1xuICBjb2xvcjogI0ZGQzkzQTtcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6ICNGRkM5M0E7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/checkout/checkout.page.ts":
/*!*******************************************!*\
  !*** ./src/app/checkout/checkout.page.ts ***!
  \*******************************************/
/*! exports provided: CheckoutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPage", function() { return CheckoutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "./node_modules/@ionic-native/native-page-transitions/ngx/index.js");
/* harmony import */ var _popoverservice_popoverservice_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../popoverservice/popoverservice.component */ "./src/app/popoverservice/popoverservice.component.ts");






var CheckoutPage = /** @class */ (function () {
    function CheckoutPage(navigate, nativePageTransitions, popoverController) {
        this.navigate = navigate;
        this.nativePageTransitions = nativePageTransitions;
        this.popoverController = popoverController;
    }
    CheckoutPage.prototype.ngOnInit = function () {
    };
    // openPage() {
    //   let options: NativeTransitionOptions = {
    //       direction: 'left', 
    //       duration: 400, 
    //       slowdownfactor: -1, 
    //       slidePixels: 20, 
    //       iosdelay: 100
    //   }
    //   console.log(options);
    //   this.nativePageTransitions.slide(options);
    //   this.navigate.navigateRoot("/thankyou-splash");
    // }
    CheckoutPage.prototype.goBack = function () {
        var options = {
            duration: 300,
            iosdelay: 300
        };
        console.log(options);
        this.nativePageTransitions.fade(options);
        this.navigate.navigateRoot("/address-resume");
    };
    CheckoutPage.prototype.presentPopover = function (ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _popoverservice_popoverservice_component__WEBPACK_IMPORTED_MODULE_4__["PopoverserviceComponent"],
                            event: ev,
                            translucent: false
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CheckoutPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-checkout',
            template: __webpack_require__(/*! ./checkout.page.html */ "./src/app/checkout/checkout.page.html"),
            styles: [__webpack_require__(/*! ./checkout.page.scss */ "./src/app/checkout/checkout.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_3__["NativePageTransitions"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])
    ], CheckoutPage);
    return CheckoutPage;
}());



/***/ })

}]);
//# sourceMappingURL=checkout-checkout-module.js.map