(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-address-add-address-module"],{

/***/ "./src/app/add-address/add-address.module.ts":
/*!***************************************************!*\
  !*** ./src/app/add-address/add-address.module.ts ***!
  \***************************************************/
/*! exports provided: AddAddressPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAddressPageModule", function() { return AddAddressPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_address_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-address.page */ "./src/app/add-address/add-address.page.ts");







var routes = [
    {
        path: '',
        component: _add_address_page__WEBPACK_IMPORTED_MODULE_6__["AddAddressPage"]
    }
];
var AddAddressPageModule = /** @class */ (function () {
    function AddAddressPageModule() {
    }
    AddAddressPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_add_address_page__WEBPACK_IMPORTED_MODULE_6__["AddAddressPage"]]
        })
    ], AddAddressPageModule);
    return AddAddressPageModule;
}());



/***/ }),

/***/ "./src/app/add-address/add-address.page.html":
/*!***************************************************!*\
  !*** ./src/app/add-address/add-address.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"orange-bg\">\n    <ion-card class=\"logo-card\">\n      <h5 class=\"logo\">Address</h5>\n      <ion-button style=\"--box-shadow: none;\"  (click)=\"goBack()\" class=\"arrow-btn\">\n          <ion-icon class=\"arrow-icon\" ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\n        </ion-button>\n      </ion-card>\n    </div>\n\n<ion-content no-bounce has-bouncing=\"false\" forceOverscroll=\"false\">\n  <ion-card class=\"logo-card\">\n    <img class=\"location-icon\" src=\"assets/shipinaddress.png\">\n    <ion-button style=\"--box-shadow: none;\" (click)=\"openPage()\" class=\"create-btn\" expand=\"block\">ADD ADDRESS</ion-button>\n    <p style=\"text-align: center; font-weight: 700; margin-left: 20px; margin-right: 20px;\">Agregar dirección donde\n      quiere que se le entregue.</p>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/add-address/add-address.page.scss":
/*!***************************************************!*\
  !*** ./src/app/add-address/add-address.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".location-icon {\n  width: 250px;\n  height: 250px;\n  margin-left: auto;\n  margin-right: auto; }\n\n.location-title {\n  margin-top: 20px;\n  color: white;\n  font-weight: 700;\n  font-size: 13px;\n  text-align: center; }\n\n.create-btn {\n  --background: #FD5440;\n  --background-activated: #FD5440;\n  --color-activated: #FFC93A;\n  --border-radius: 25px;\n  font-size: 13px;\n  font-weight: 700;\n  height: 50px;\n  --box-shadow: none;\n  color: #FFC93A;\n  margin-left: 30px;\n  margin-right: 30px;\n  margin-top: 20px; }\n\n.orange-bg {\n  background: #FD5440; }\n\n.logo-card {\n  box-shadow: none;\n  padding-bottom: 0;\n  margin-left: 0;\n  margin-right: 0; }\n\n.tags {\n  --background: rgb(255, 255, 255);\n  --background-activated: rgb(255, 255, 255);\n  color: #FD5440;\n  --color-activated: #FD5440;\n  font-weight: 700;\n  font-size: 12px;\n  --border-radius: 25px; }\n\n.logo {\n  text-align: center;\n  color: white;\n  padding-top: 10px;\n  font-weight: 700; }\n\n.arrow-icon {\n  color: white;\n  width: 25px;\n  height: 25px; }\n\n.arrow-btn {\n  --background: transparent;\n  --background-activated: transparent;\n  position: absolute;\n  top: 13px;\n  left: 0;\n  --box-shadow: none; }\n\n.arrow-icon {\n  color: white;\n  width: 25px;\n  height: 25px; }\n\n.arrow-btn {\n  --background: transparent;\n  --background-activated: transparent;\n  position: absolute;\n  top: 13px;\n  left: 0;\n  --box-shadow: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sb3JuYW1pY2hlbGxlL0Rvd25sb2Fkcy9idXlwaW4tYXBwLThmMjkwNWUwYzBkODlhYTIxMDZmMmRkY2FmZDVkY2U0NDJmMDZmODQvc3JjL2FwcC9hZGQtYWRkcmVzcy9hZGQtYWRkcmVzcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UscUJBQWE7RUFDYiwrQkFBdUI7RUFDdkIsMEJBQWtCO0VBQ2xCLHFCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixrQkFBYTtFQUNiLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxnQ0FBYTtFQUNiLDBDQUF1QjtFQUN2QixjQUFjO0VBQ2QsMEJBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YscUJBQWdCLEVBQUE7O0FBR2xCO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2Q7RUFDRSx5QkFBYTtFQUNiLG1DQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsU0FBUztFQUNULE9BQU87RUFDUCxrQkFBYSxFQUFBOztBQUdmO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2Q7RUFDRSx5QkFBYTtFQUNiLG1DQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsU0FBUztFQUNULE9BQU87RUFDUCxrQkFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYWRkLWFkZHJlc3MvYWRkLWFkZHJlc3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi5sb2NhdGlvbi1pY29uIHtcbiAgd2lkdGg6IDI1MHB4O1xuICBoZWlnaHQ6IDI1MHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4ubG9jYXRpb24tdGl0bGUge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY3JlYXRlLWJ0biB7XG4gIC0tYmFja2dyb3VuZDogI0ZENTQ0MDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI0ZENTQ0MDtcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6ICNGRkM5M0E7XG4gIC0tYm9yZGVyLXJhZGl1czogMjVweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBoZWlnaHQ6IDUwcHg7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgY29sb3I6ICNGRkM5M0E7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5vcmFuZ2UtYmcge1xuICBiYWNrZ3JvdW5kOiAjRkQ1NDQwO1xufVxuXG4ubG9nby1jYXJkIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgcGFkZGluZy1ib3R0b206IDA7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG5cbi50YWdzIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgY29sb3I6ICNGRDU0NDA7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiAjRkQ1NDQwO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIC0tYm9yZGVyLXJhZGl1czogMjVweDtcbn1cblxuLmxvZ28ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5hcnJvdy1pY29uIHtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuXG4uYXJyb3ctYnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxM3B4O1xuICBsZWZ0OiAwO1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5hcnJvdy1pY29uIHtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuXG4uYXJyb3ctYnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxM3B4O1xuICBsZWZ0OiAwO1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/add-address/add-address.page.ts":
/*!*************************************************!*\
  !*** ./src/app/add-address/add-address.page.ts ***!
  \*************************************************/
/*! exports provided: AddAddressPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAddressPage", function() { return AddAddressPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "./node_modules/@ionic-native/native-page-transitions/ngx/index.js");
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! parse */ "./node_modules/parse/index.js");
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(parse__WEBPACK_IMPORTED_MODULE_4__);






var parse = __webpack_require__(/*! parse */ "./node_modules/parse/index.js");
var AddAddressPage = /** @class */ (function () {
    function AddAddressPage(navigate, nativePageTransitions, alert) {
        this.navigate = navigate;
        this.nativePageTransitions = nativePageTransitions;
        this.alert = alert;
        parse__WEBPACK_IMPORTED_MODULE_4__["Parse"].initialize("C0XMchZu6Y9XWNUK4lM1UHnnuXhC3dcdpa5fGYpO", "EdN4Xnln11to6pfyNaQ5HD05laenoYu04txYAcfo");
        parse__WEBPACK_IMPORTED_MODULE_4__["Parse"].serverURL = 'https://parseapi.back4app.com/';
    }
    AddAddressPage.prototype.ngOnInit = function () {
    };
    AddAddressPage.prototype.openPage = function () {
        var options = {
            duration: 300,
            iosdelay: 300
        };
        console.log(options);
        this.nativePageTransitions.fade(options);
        this.navigate.navigateRoot("/shipping-address");
    };
    AddAddressPage.prototype.goBack = function () {
        var options = {
            duration: 300,
            iosdelay: 300
        };
        console.log(options);
        this.nativePageTransitions.fade(options);
        this.navigate.navigateRoot("/tabs/tabs/tab5");
    };
    AddAddressPage.prototype.info = function () {
    };
    AddAddressPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-address',
            template: __webpack_require__(/*! ./add-address.page.html */ "./src/app/add-address/add-address.page.html"),
            styles: [__webpack_require__(/*! ./add-address.page.scss */ "./src/app/add-address/add-address.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_3__["NativePageTransitions"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], AddAddressPage);
    return AddAddressPage;
}());



/***/ })

}]);
//# sourceMappingURL=add-address-add-address-module.js.map