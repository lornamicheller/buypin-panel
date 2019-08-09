(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab4-tab4-module"],{

/***/ "./src/app/tab4/tab4.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab4/tab4.module.ts ***!
  \*************************************/
/*! exports provided: Tab4PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab4PageModule", function() { return Tab4PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab4.page */ "./src/app/tab4/tab4.page.ts");







var routes = [
    {
        path: '',
        component: _tab4_page__WEBPACK_IMPORTED_MODULE_6__["Tab4Page"]
    }
];
var Tab4PageModule = /** @class */ (function () {
    function Tab4PageModule() {
    }
    Tab4PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_tab4_page__WEBPACK_IMPORTED_MODULE_6__["Tab4Page"]]
        })
    ], Tab4PageModule);
    return Tab4PageModule;
}());



/***/ }),

/***/ "./src/app/tab4/tab4.page.html":
/*!*************************************!*\
  !*** ./src/app/tab4/tab4.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"orange-bg\">\n  <ion-card class=\"logo-card\">\n    <h5 class=\"logo\">Colmado Class</h5>\n    <!-- <img class=\"logo\" src=\"assets/logo prueba.png\"> -->\n\n    <ion-button style=\"--box-shadow: none;\" (click)=\"goBack()\" class=\"arrow-btn\">\n      <ion-icon class=\"arrow-icon\" ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\n    </ion-button>\n\n    <div class=\"cart-item\">\n      <ion-button style=\"--box-shadow: none;\" (click)=\"cartOpen()\" class=\"cart-btn\">\n        <img src=\"assets/cartera.png\" width=\"30px\" height=\"30px\" style=\"object-fit: contain;\">\n        <ion-badge color=\"success\" class=\"quantity-number\">5</ion-badge>\n      </ion-button>\n    </div>\n  </ion-card>\n</div>\n<ion-content>\n  <ion-card class=\"article-card\">\n    <img src=\"assets/032731.jpg\" width=\"300px\" height=\"200px\" style=\"object-fit: contain;\">\n    <p class=\"article-name\">Coca Cola</p>\n    <p class=\"article-content\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores aspernatur porro quis\n      consequuntur ab\n      repellendus mollitia autem.</p>\n    <h1 class=\"article-price\">$1.99</h1>\n  </ion-card>\n\n  <ion-card class=\"btn-card\">\n    <ion-grid style=\"padding: 0;\">\n      <ion-row>\n\n        <!-- first btn -->\n        <ion-col class=\"whole-btn\" size=\"5\">\n          <ion-grid style=\"padding: 0;\">\n            <ion-row>\n              <ion-col class=\"less-col\" size=\"4\">\n                <ion-button style=\"--box-shadow: none;\"  class=\"less-btn\"> - </ion-button>\n              </ion-col>\n              <ion-col size=\"4\">\n                <ion-badge class=\"quantity-number2\">1</ion-badge>\n              </ion-col>\n              <ion-col class=\"right-col\" size=\"4\">\n                <ion-button style=\"--box-shadow: none;\"  class=\"less-btn\"> + </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-col>\n        <!-- /first btn -->\n        <ion-col class=\"whole-btn\" size=\"5\">\n          <ion-button style=\"--box-shadow: none;\"  (click)=\"openPage()\" class=\"add-cart-btn\">ADD TO CART</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/tab4/tab4.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab4/tab4.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".orange-bg {\n  background: #FD5440; }\n\n.logo-card {\n  box-shadow: none;\n  padding-bottom: 0;\n  margin-left: 0;\n  margin-right: 0; }\n\n.tags {\n  --background: rgb(255, 255, 255);\n  --background-activated: rgb(255, 255, 255);\n  color: #FD5440;\n  --color-activated: #FD5440;\n  font-weight: 700;\n  font-size: 12px;\n  --border-radius: 25px; }\n\n.logo {\n  text-align: center;\n  color: white;\n  padding-top: 10px;\n  font-weight: 700; }\n\n.arrow-icon {\n  color: white;\n  width: 25px;\n  height: 25px; }\n\n.arrow-btn {\n  --background: transparent;\n  --background-activated: transparent;\n  position: absolute;\n  top: 13px;\n  left: 0;\n  --box-shadow: none; }\n\n.cart-btn {\n  --background: transparent;\n  --background-activated: transparent;\n  position: absolute;\n  top: 14px;\n  right: 0;\n  --box-shadow: none; }\n\n.quantity-number {\n  position: absolute;\n  top: 0px;\n  right: 14px;\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  --padding-top: 6px; }\n\n.article-card {\n  box-shadow: none;\n  border-radius: 0;\n  margin-left: 0;\n  margin-right: 0; }\n\n.article-name {\n  background: #FD5440;\n  padding: 20px;\n  text-align: center;\n  color: white;\n  font-weight: 700;\n  font-size: 14px; }\n\n.article-content {\n  margin: 15px;\n  text-align: justify; }\n\n.article-price {\n  margin: 0;\n  padding: 0;\n  color: #fd5440;\n  font-weight: 700;\n  font-size: 50px;\n  text-align: center; }\n\n.btn-card {\n  box-shadow: none;\n  border-radius: 0; }\n\n.whole-btn {\n  background: #ffc93a;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 15px; }\n\n.less-col {\n  border-right: 1px solid #fd5440;\n  padding: 0; }\n\n.less-btn {\n  font-weight: 700;\n  color: #fd5440;\n  --color-activated: #fd5440;\n  padding: 0;\n  --background: transparent;\n  --background-activated: transparent;\n  font-size: 15px; }\n\n.quantity-number2 {\n  --background: transparent;\n  font-size: 15px;\n  color: #fd5440;\n  --padding-top: 13px;\n  --padding-start: 10px; }\n\n.right-col {\n  border-left: 1px solid #fd5440;\n  padding: 0; }\n\n.add-cart-btn {\n  --background: transparent;\n  --background-activated: transparent;\n  font-weight: 700;\n  color: #fd5440;\n  --color-activated: #fd5440;\n  margin-right: auto;\n  margin-left: auto;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sb3JuYW1pY2hlbGxlL0Rvd25sb2Fkcy9idXlwaW4tYXBwLThmMjkwNWUwYzBkODlhYTIxMDZmMmRkY2FmZDVkY2U0NDJmMDZmODQvc3JjL2FwcC90YWI0L3RhYjQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGdDQUFhO0VBQ2IsMENBQXVCO0VBQ3ZCLGNBQWM7RUFDZCwwQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixxQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHZDtFQUNFLHlCQUFhO0VBQ2IsbUNBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsT0FBTztFQUNQLGtCQUFhLEVBQUE7O0FBR2Y7RUFDRSx5QkFBYTtFQUNiLG1DQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFFBQVE7RUFDUixrQkFBYSxFQUFBOztBQUdmO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWMsRUFBQTs7QUFHaEI7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsWUFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxZQUFZO0VBQ1osbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUE7O0FBSXJCO0VBQ0UsK0JBQStCO0VBQy9CLFVBQVUsRUFBQTs7QUFHWjtFQUNFLGdCQUFnQjtFQUVoQixjQUFjO0VBQ2QsMEJBQWtCO0VBQ2xCLFVBQVU7RUFDVix5QkFBYTtFQUNiLG1DQUF1QjtFQUN2QixlQUFlLEVBQUE7O0FBR2pCO0VBQ0UseUJBQWE7RUFDYixlQUFlO0VBQ2YsY0FBYztFQUNkLG1CQUFjO0VBQ2QscUJBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsOEJBQThCO0VBQzlCLFVBQVUsRUFBQTs7QUFHWjtFQUNFLHlCQUFhO0VBQ2IsbUNBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsMEJBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90YWI0L3RhYjQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9yYW5nZS1iZyB7XG4gIGJhY2tncm91bmQ6ICNGRDU0NDA7XG59XG5cbi5sb2dvLWNhcmQge1xuICBib3gtc2hhZG93OiBub25lO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cblxuLnRhZ3Mge1xuICAtLWJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICBjb2xvcjogI0ZENTQ0MDtcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6ICNGRDU0NDA7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgLS1ib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuXG4ubG9nbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmFycm93LWljb24ge1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG59XG5cbi5hcnJvdy1idG4ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEzcHg7XG4gIGxlZnQ6IDA7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmNhcnQtYnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNHB4O1xuICByaWdodDogMDtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xufVxuXG4ucXVhbnRpdHktbnVtYmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgcmlnaHQ6IDE0cHg7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLS1wYWRkaW5nLXRvcDogNnB4O1xufVxuXG4uYXJ0aWNsZS1jYXJkIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cblxuLmFydGljbGUtbmFtZSB7XG4gIGJhY2tncm91bmQ6ICNGRDU0NDA7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uYXJ0aWNsZS1jb250ZW50IHtcbiAgbWFyZ2luOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4uYXJ0aWNsZS1wcmljZSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgY29sb3I6ICNmZDU0NDA7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYnRuLWNhcmQge1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG4ud2hvbGUtYnRuIHtcbiAgYmFja2dyb3VuZDogI2ZmYzkzYTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgLy8gaGVpZ2h0OiA0MHB4O1xufVxuXG4ubGVzcy1jb2wge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZmQ1NDQwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4ubGVzcy1idG4ge1xuICBmb250LXdlaWdodDogNzAwO1xuICAvLyBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjZmQ1NDQwO1xuICAtLWNvbG9yLWFjdGl2YXRlZDogI2ZkNTQ0MDtcbiAgcGFkZGluZzogMDtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLnF1YW50aXR5LW51bWJlcjIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjZmQ1NDQwO1xuICAtLXBhZGRpbmctdG9wOiAxM3B4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG59XG5cbi5yaWdodC1jb2wge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmZDU0NDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5hZGQtY2FydC1idG4ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICNmZDU0NDA7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiAjZmQ1NDQwO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/tab4/tab4.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab4/tab4.page.ts ***!
  \***********************************/
/*! exports provided: Tab4Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab4Page", function() { return Tab4Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "./node_modules/@ionic-native/native-page-transitions/ngx/index.js");




var Tab4Page = /** @class */ (function () {
    function Tab4Page(navigate, nativePageTransitions) {
        this.navigate = navigate;
        this.nativePageTransitions = nativePageTransitions;
    }
    Tab4Page.prototype.openPage = function () {
        var options = {
            duration: 300,
            iosdelay: 300
        };
        console.log(options);
        this.nativePageTransitions.fade(options);
        this.navigate.navigateRoot("/tabs/tabs/tab3");
    };
    Tab4Page.prototype.cartOpen = function () {
        var options = {
            duration: 300,
            iosdelay: 300
        };
        console.log(options);
        this.nativePageTransitions.fade(options);
        this.navigate.navigateRoot("/tabs/tabs/tab5");
    };
    Tab4Page.prototype.goBack = function () {
        var options = {
            duration: 300,
            iosdelay: 300
        };
        console.log(options);
        this.nativePageTransitions.fade(options);
        this.navigate.navigateRoot("/tabs/tabs/tab3");
    };
    Tab4Page.prototype.ngOnInit = function () {
    };
    Tab4Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab4',
            template: __webpack_require__(/*! ./tab4.page.html */ "./src/app/tab4/tab4.page.html"),
            styles: [__webpack_require__(/*! ./tab4.page.scss */ "./src/app/tab4/tab4.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_3__["NativePageTransitions"]])
    ], Tab4Page);
    return Tab4Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab4-tab4-module.js.map