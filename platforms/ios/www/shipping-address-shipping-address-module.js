(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shipping-address-shipping-address-module"],{

/***/ "./src/app/shipping-address/shipping-address.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/shipping-address/shipping-address.module.ts ***!
  \*************************************************************/
/*! exports provided: ShippingAddressPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingAddressPageModule", function() { return ShippingAddressPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shipping_address_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shipping-address.page */ "./src/app/shipping-address/shipping-address.page.ts");







var routes = [
    {
        path: '',
        component: _shipping_address_page__WEBPACK_IMPORTED_MODULE_6__["ShippingAddressPage"]
    }
];
var ShippingAddressPageModule = /** @class */ (function () {
    function ShippingAddressPageModule() {
    }
    ShippingAddressPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_shipping_address_page__WEBPACK_IMPORTED_MODULE_6__["ShippingAddressPage"]]
        })
    ], ShippingAddressPageModule);
    return ShippingAddressPageModule;
}());



/***/ }),

/***/ "./src/app/shipping-address/shipping-address.page.html":
/*!*************************************************************!*\
  !*** ./src/app/shipping-address/shipping-address.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"orange-bg\">\n  <ion-card class=\"logo-card\">\n    <h5 class=\"logo\">Address</h5>\n    <!-- <img class=\"logo\" src=\"assets/logo prueba.png\"> -->\n\n    <ion-button style=\"--box-shadow: none;\"  (click)=\"goBack()\" class=\"arrow-btn\">\n      <ion-icon class=\"arrow-icon\" ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\n    </ion-button>\n  </ion-card>\n</div>\n\n<ion-content>\n\n  <ion-card style=\"box-shadow: none; margin-top: 60px; padding: 10px;\">\n\n    <ion-input [(ngModel)]=\"place\" type=\"text\" class=\"name\" placeholder=\"Place's name\"></ion-input>\n\n    <ion-input [(ngModel)]=\"address\" type=\"text\" class=\"name\" placeholder=\"Address\"></ion-input>\n\n    <ion-input [(ngModel)]=\"apt\" type=\"text\" class=\"name\" placeholder=\"Suit, floor, apt (Optional)\"></ion-input>\n\n    <ion-input [(ngModel)]=\"city\" type=\"text\" class=\"name\" placeholder=\"City\"></ion-input>\n\n    <ion-grid style=\"margin: 0; padding: 0;\">\n      <ion-row>\n        <ion-col style=\"padding: 0; padding-right: 5px;\">\n          <ion-input [(ngModel)]=\"state\" type=\"text\" class=\"name2\" placeholder=\"State\"></ion-input>\n        </ion-col>\n        <ion-col style=\"padding: 0; padding-left: 5px;\">\n          <ion-input [(ngModel)]=\"zipcode\" type=\"text\" class=\"name2\" placeholder=\"Zip Code\"></ion-input>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-button style=\"--box-shadow: none;\"  (click)=\"addAddress()\" class=\"create-btn\" expand=\"block\">ADD ADDRESS</ion-button>\n  </ion-card>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/shipping-address/shipping-address.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/shipping-address/shipping-address.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".orange-bg {\n  background: #FD5440; }\n\n.logo-card {\n  box-shadow: none;\n  padding-bottom: 0;\n  margin-left: 0;\n  margin-right: 0; }\n\n.tags {\n  --background: rgb(255, 255, 255);\n  --background-activated: rgb(255, 255, 255);\n  color: #FD5440;\n  --color-activated: #FD5440;\n  font-weight: 700;\n  font-size: 12px;\n  --border-radius: 25px; }\n\n.logo {\n  text-align: center;\n  color: white;\n  padding-top: 10px;\n  font-weight: 700; }\n\n.arrow-icon {\n  color: white;\n  width: 25px;\n  height: 25px; }\n\n.arrow-btn {\n  --background: transparent;\n  --background-activated: transparent;\n  position: absolute;\n  top: 13px;\n  left: 0;\n  --box-shadow: none; }\n\n.arrow-icon {\n  color: white;\n  width: 25px;\n  height: 25px; }\n\n.arrow-btn {\n  --background: transparent;\n  --background-activated: transparent;\n  position: absolute;\n  top: 13px;\n  left: 0;\n  --box-shadow: none; }\n\n.name {\n  margin-left: auto;\n  margin-right: auto;\n  border: 1px solid #FD5440;\n  --padding-start: 5px;\n  --placeholder-opacity: 10;\n  --color: rgb(160, 160, 160);\n  margin-bottom: 20px;\n  font-weight: 700;\n  font-size: 12px; }\n\n.name2 {\n  border: 1px solid #FD5440;\n  --padding-start: 5px;\n  --placeholder-opacity: 10;\n  --color: rgb(160, 160, 160);\n  margin-bottom: 20px;\n  font-weight: 700;\n  font-size: 12px; }\n\n.create-btn {\n  --background: #FD5440;\n  --background-activated: #FD5440;\n  --color-activated: #FFC93A;\n  --border-radius: 25px;\n  font-size: 13px;\n  font-weight: 700;\n  height: 50px;\n  --box-shadow: none;\n  color: #FFC93A;\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-top: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sb3JuYW1pY2hlbGxlL0Rvd25sb2Fkcy9idXlwaW4tYXBwLThmMjkwNWUwYzBkODlhYTIxMDZmMmRkY2FmZDVkY2U0NDJmMDZmODQvc3JjL2FwcC9zaGlwcGluZy1hZGRyZXNzL3NoaXBwaW5nLWFkZHJlc3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGdDQUFhO0VBQ2IsMENBQXVCO0VBQ3ZCLGNBQWM7RUFDZCwwQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixxQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHZDtFQUNFLHlCQUFhO0VBQ2IsbUNBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsT0FBTztFQUNQLGtCQUFhLEVBQUE7O0FBR2Y7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHZDtFQUNFLHlCQUFhO0VBQ2IsbUNBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsT0FBTztFQUNQLGtCQUFhLEVBQUE7O0FBR2Y7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixvQkFBZ0I7RUFDaEIseUJBQXNCO0VBQ3RCLDJCQUFRO0VBQ1IsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixlQUFlLEVBQUE7O0FBR2pCO0VBQ0UseUJBQXlCO0VBQ3pCLG9CQUFnQjtFQUNoQix5QkFBc0I7RUFDdEIsMkJBQVE7RUFDUixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxxQkFBYTtFQUNiLCtCQUF1QjtFQUN2QiwwQkFBa0I7RUFDbEIscUJBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGtCQUFhO0VBQ2IsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGlwcGluZy1hZGRyZXNzL3NoaXBwaW5nLWFkZHJlc3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9yYW5nZS1iZyB7XG4gIGJhY2tncm91bmQ6ICNGRDU0NDA7XG59XG5cbi5sb2dvLWNhcmQge1xuICBib3gtc2hhZG93OiBub25lO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cblxuLnRhZ3Mge1xuICAtLWJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICBjb2xvcjogI0ZENTQ0MDtcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6ICNGRDU0NDA7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgLS1ib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuXG4ubG9nbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmFycm93LWljb24ge1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG59XG5cbi5hcnJvdy1idG4ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEzcHg7XG4gIGxlZnQ6IDA7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmFycm93LWljb24ge1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG59XG5cbi5hcnJvdy1idG4ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEzcHg7XG4gIGxlZnQ6IDA7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLm5hbWUge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRkQ1NDQwO1xuICAtLXBhZGRpbmctc3RhcnQ6IDVweDtcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxMDtcbiAgLS1jb2xvcjogcmdiKDE2MCwgMTYwLCAxNjApO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5uYW1lMiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNGRDU0NDA7XG4gIC0tcGFkZGluZy1zdGFydDogNXB4O1xuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDEwO1xuICAtLWNvbG9yOiByZ2IoMTYwLCAxNjAsIDE2MCk7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmNyZWF0ZS1idG4ge1xuICAtLWJhY2tncm91bmQ6ICNGRDU0NDA7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNGRDU0NDA7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiAjRkZDOTNBO1xuICAtLWJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgaGVpZ2h0OiA1MHB4O1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIGNvbG9yOiAjRkZDOTNBO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/shipping-address/shipping-address.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/shipping-address/shipping-address.page.ts ***!
  \***********************************************************/
/*! exports provided: ShippingAddressPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingAddressPage", function() { return ShippingAddressPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "./node_modules/@ionic-native/native-page-transitions/ngx/index.js");
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! parse */ "./node_modules/parse/index.js");
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(parse__WEBPACK_IMPORTED_MODULE_4__);






var parse = __webpack_require__(/*! parse */ "./node_modules/parse/index.js");
var ShippingAddressPage = /** @class */ (function () {
    function ShippingAddressPage(navigate, nativePageTransitions, alertCtrl) {
        this.navigate = navigate;
        this.nativePageTransitions = nativePageTransitions;
        this.alertCtrl = alertCtrl;
        parse__WEBPACK_IMPORTED_MODULE_4__["Parse"].initialize("C0XMchZu6Y9XWNUK4lM1UHnnuXhC3dcdpa5fGYpO", "EdN4Xnln11to6pfyNaQ5HD05laenoYu04txYAcfo");
        parse__WEBPACK_IMPORTED_MODULE_4__["Parse"].serverURL = 'https://parseapi.back4app.com/';
    }
    ShippingAddressPage.prototype.ngOnInit = function () {
        console.log(parse__WEBPACK_IMPORTED_MODULE_4__["Parse"].User.current().id);
    };
    ShippingAddressPage.prototype.openPage = function () {
        var options = {
            duration: 300,
            iosdelay: 300
        };
        console.log(options);
        this.nativePageTransitions.fade(options);
        this.navigate.navigateRoot("/address-resume");
    };
    ShippingAddressPage.prototype.goBack = function () {
        var options = {
            duration: 300,
            iosdelay: 300
        };
        console.log(options);
        this.nativePageTransitions.fade(options);
        this.navigate.navigateRoot("/add-address");
    };
    ShippingAddressPage.prototype.errorAlert = function (error) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Error',
                            message: error,
                            buttons: [{
                                    text: 'OK',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        console.log('Confirm Cancel');
                                    }
                                }]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ShippingAddressPage.prototype.addAddress = function () {
        //end-point para añadir la direccion del usuario
        var _this = this;
        if (this.place == null || this.address == null || this.apt == null || this.city == null || this.state == null || this.zipcode == null) {
            this.empty();
        }
        else {
            console.log(this.place);
            console.log(this.address);
            console.log(this.apt);
            console.log(this.city);
            console.log(this.state);
            console.log(this.zipcode);
            parse__WEBPACK_IMPORTED_MODULE_4__["Parse"].Cloud.run('createAddress', {
                name: this.place,
                address: this.address,
                apt: this.apt,
                city: this.city,
                state: this.state,
                zipcode: this.zipcode,
                userId: parse__WEBPACK_IMPORTED_MODULE_4__["Parse"].User.current().id
            }).then(function (result) {
                console.log("Address added");
                _this.openPage();
            }, function (error) {
                _this.errorAlert(error);
                console.log(error);
            });
        }
    };
    ShippingAddressPage.prototype.empty = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: '¡ALERTA!',
                            message: 'Todos los campos son requeridos',
                            buttons: [{
                                    text: 'OK',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        console.log('Confirm Cancel');
                                    }
                                }]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ShippingAddressPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shipping-address',
            template: __webpack_require__(/*! ./shipping-address.page.html */ "./src/app/shipping-address/shipping-address.page.html"),
            styles: [__webpack_require__(/*! ./shipping-address.page.scss */ "./src/app/shipping-address/shipping-address.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_3__["NativePageTransitions"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], ShippingAddressPage);
    return ShippingAddressPage;
}());



/***/ })

}]);
//# sourceMappingURL=shipping-address-shipping-address-module.js.map