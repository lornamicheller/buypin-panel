(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");







var Tab1PageModule = /** @class */ (function () {
    function Tab1PageModule() {
    }
    Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }])
            ],
            declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
        })
    ], Tab1PageModule);
    return Tab1PageModule;
}());



/***/ }),

/***/ "./src/app/tab1/tab1.page.html":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"orange-bg\">\n  <ion-card class=\"logo-card\">\n    <img class=\"logo\" src=\"assets/logo prueba.png\">\n\n    <!-- <div class=\"cart-item\">\n\n      <ion-button style=\"--box-shadow: none;\" (click)=\"cartOpen()\" class=\"cart-btn\">\n        <img src=\"assets/cartera.png\" width=\"30px\" height=\"30px\" style=\"object-fit: contain;\">\n        <ion-badge color=\"success\" class=\"quantity-number\">5</ion-badge>\n      </ion-button>\n    </div> -->\n  </ion-card>\n</div>\n\n\n<ion-content>\n\n  <ion-card (click)=\"openPage()\" ion-button class=\"first-card\">\n    <img src=\"assets/convenecesrote.png\" width=\"200px\" height=\"200px\" style=\"object-fit: contain;\">\n    <p  class=\"title-store\">Convenience Store</p>\n  </ion-card>\n\n  <ion-card (click)=\"openPage()\" ion-button class=\"first-card\">\n    <img src=\"assets/farmacia.png\" width=\"200px\" height=\"200px\" style=\"object-fit: contain;\">\n    <p  class=\"title-store\">Farmacia</p>\n  </ion-card>\n\n  <ion-card (click)=\"openPage()\" ion-button class=\"first-card\">\n    <img src=\"assets/autopart.png\" width=\"200px\" height=\"200px\" style=\"object-fit: contain;\">\n    <p  class=\"title-store\">Auto Parts</p>\n  </ion-card>\n\n  <ion-card (click)=\"openPage()\" ion-button class=\"first-card\">\n    <img src=\"assets/alcholl.png\" width=\"200px\" height=\"200px\" style=\"object-fit: contain;\">\n    <p class=\"title-store\">Bebidas Alcohólicas</p>\n  </ion-card>\n\n  <ion-card (click)=\"openPage()\" ion-button class=\"first-card\">\n    <img src=\"assets/restaurant.png\" width=\"200px\" height=\"200px\" style=\"object-fit: contain;\">\n    <p  class=\"title-store\">Restaurantes</p>\n  </ion-card>\n\n  <ion-card (click)=\"openPage()\" ion-button class=\"first-card\">\n    <img src=\"assets/panaderia.png\" width=\"200px\" height=\"200px\" style=\"object-fit: contain;\">\n    <p class=\"title-store\">Panaderia</p>\n  </ion-card>\n\n  <ion-card (click)=\"openPage()\" ion-button class=\"first-card\">\n    <img src=\"assets/clothing.png\" width=\"200px\" height=\"200px\" style=\"object-fit: contain;\">\n    <p class=\"title-store\">Clothing</p>\n  </ion-card>\n\n  <ion-card (click)=\"openPage()\" ion-button class=\"first-card\">\n    <img src=\"assets/ferretería.png\" width=\"200px\" height=\"200px\" style=\"object-fit: contain;\">\n    <p class=\"title-store\">Ferretería</p>\n  </ion-card>\n\n  <ion-card (click)=\"openPage()\" ion-button class=\"first-card\">\n      <img src=\"assets/foodtruck.png\" width=\"200px\" height=\"200px\" style=\"object-fit: contain;\">\n    <p class=\"title-store\">Foodtruck</p>\n  </ion-card>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Mukta:300,400,500,600,700&display=swap\");\n.orange-bg {\n  background: #FD5440; }\n.logo-card {\n  box-shadow: none;\n  padding-bottom: 0; }\n.logo {\n  width: 100px;\n  height: 80px;\n  -o-object-fit: contain;\n     object-fit: contain;\n  margin-left: auto;\n  margin-right: auto; }\n.cart-btn {\n  --background: transparent;\n  --background-activated: transparent;\n  position: absolute;\n  top: 14px;\n  right: 0;\n  --box-shadow: none; }\n.quantity-number {\n  position: absolute;\n  top: 0px;\n  right: 14px;\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  --padding-top: 6px; }\n.first-card {\n  height: auto;\n  box-shadow: 4px 4px 6px #2c2c2c;\n  border-left: 1px solid #cecece;\n  border-right: 1px solid #cecece;\n  border-top: 1px solid #cecece; }\n.title-store {\n  background: #FFC93A;\n  color: #FD5440;\n  font-weight: 700;\n  font-size: 17px;\n  text-align: center;\n  margin-bottom: 0;\n  padding: 15px;\n  font-family: 'Mukta', sans-serif; }\n.btn-card {\n  height: auto;\n  width: 100%;\n  --background: transparent;\n  --background-activated: transparent;\n  --box-shadow: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sb3JuYW1pY2hlbGxlL0Rvd25sb2Fkcy9idXlwaW4tYXBwLThmMjkwNWUwYzBkODlhYTIxMDZmMmRkY2FmZDVkY2U0NDJmMDZmODQvc3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZGQUFZO0FBRVo7RUFDRSxtQkFBbUIsRUFBQTtBQUdyQjtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUIsRUFBQTtBQUduQjtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osc0JBQW1CO0tBQW5CLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7QUFHcEI7RUFDRSx5QkFBYTtFQUNiLG1DQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFFBQVE7RUFDUixrQkFBYSxFQUFBO0FBR2Y7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBYyxFQUFBO0FBR2hCO0VBQ0UsWUFBWTtFQUNaLCtCQUF1QztFQUN2Qyw4QkFBeUM7RUFDekMsK0JBQTBDO0VBQzFDLDZCQUF3QyxFQUFBO0FBRzFDO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUVmLGdDQUFnQyxFQUFBO0FBR2hDO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCx5QkFBYTtFQUNiLG1DQUF1QjtFQUN2QixrQkFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TXVrdGE6MzAwLDQwMCw1MDAsNjAwLDcwMCZkaXNwbGF5PXN3YXAnKTtcblxuLm9yYW5nZS1iZyB7XG4gIGJhY2tncm91bmQ6ICNGRDU0NDA7XG59XG5cbi5sb2dvLWNhcmQge1xuICBib3gtc2hhZG93OiBub25lO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cblxuLmxvZ28ge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogODBweDtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLmNhcnQtYnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNHB4O1xuICByaWdodDogMDtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xufVxuXG4ucXVhbnRpdHktbnVtYmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgcmlnaHQ6IDE0cHg7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLS1wYWRkaW5nLXRvcDogNnB4O1xufVxuXG4uZmlyc3QtY2FyZCB7XG4gIGhlaWdodDogYXV0bztcbiAgYm94LXNoYWRvdzogNHB4IDRweCA2cHggcmdiKDQ0LCA0NCwgNDQpO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYigyMDYsIDIwNiwgMjA2KTtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiKDIwNiwgMjA2LCAyMDYpO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDIwNiwgMjA2LCAyMDYpO1xufVxuXG4udGl0bGUtc3RvcmUge1xuICBiYWNrZ3JvdW5kOiAjRkZDOTNBO1xuICBjb2xvcjogI0ZENTQ0MDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHBhZGRpbmc6IDE1cHg7XG5cbmZvbnQtZmFtaWx5OiAnTXVrdGEnLCBzYW5zLXNlcmlmO1xufVxuXG4uYnRuLWNhcmQge1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "./node_modules/@ionic-native/native-page-transitions/ngx/index.js");




var Tab1Page = /** @class */ (function () {
    function Tab1Page(navigate, nativePageTransitions) {
        this.navigate = navigate;
        this.nativePageTransitions = nativePageTransitions;
    }
    Tab1Page.prototype.openPage = function () {
        var options = {
            duration: 300,
            iosdelay: 300
        };
        console.log(options);
        this.nativePageTransitions.fade(options);
        this.navigate.navigateRoot("/tabs/tabs/tab2");
    };
    Tab1Page.prototype.cartOpen = function () {
        var options = {
            duration: 300,
            iosdelay: 300
        };
        console.log(options);
        this.nativePageTransitions.fade(options);
        this.navigate.navigateRoot("/tabs/tabs/tab5");
    };
    Tab1Page.prototype.selection = function () {
        if (this.convenience == 'Convenience Store') {
            console.log("Convenience Store");
        }
        else if (this.pharmacy == 'Pharmacy') {
            console.log("Convenience Store");
        }
        else if (this.autoParts == 'Auto Parts') {
            console.log("Auto Parts");
        }
        else if (this.alcohol == 'Bebidas Alcohólicas') {
            console.log("Bebidas Alcohólicas");
        }
        else if (this.restaurants == 'Restaurantes') {
            console.log("Restaurantes");
        }
        else if (this.bakery == 'Panaderia') {
            console.log("Panaderia");
        }
        else if (this.clothing == 'Clothing') {
            console.log("Clothing");
        }
        else if (this.hardwareStrore == 'FERRETERIA') {
            console.log("Ferreteria");
        }
        else {
            console.log("Food Truck");
        }
    };
    Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab1',
            template: __webpack_require__(/*! ./tab1.page.html */ "./src/app/tab1/tab1.page.html"),
            styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_3__["NativePageTransitions"]])
    ], Tab1Page);
    return Tab1Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module.js.map