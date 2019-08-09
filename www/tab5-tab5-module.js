(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab5-tab5-module"],{

/***/ "./src/app/tab5/tab5.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab5/tab5.module.ts ***!
  \*************************************/
/*! exports provided: Tab5PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab5PageModule", function() { return Tab5PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tab5_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab5.page */ "./src/app/tab5/tab5.page.ts");







var routes = [
    {
        path: '',
        component: _tab5_page__WEBPACK_IMPORTED_MODULE_6__["Tab5Page"]
    }
];
var Tab5PageModule = /** @class */ (function () {
    function Tab5PageModule() {
    }
    Tab5PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_tab5_page__WEBPACK_IMPORTED_MODULE_6__["Tab5Page"]]
        })
    ], Tab5PageModule);
    return Tab5PageModule;
}());



/***/ }),

/***/ "./src/app/tab5/tab5.page.html":
/*!*************************************!*\
  !*** ./src/app/tab5/tab5.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"orange-bg\">\n  <ion-card class=\"logo-card\">\n    <h5 class=\"logo\">Cart</h5>\n    <!-- <img class=\"logo\" src=\"assets/logo prueba.png\"> -->\n\n    <div class=\"cart-item\">\n      <ion-button style=\"--box-shadow: none;\" (click)=\"cartOpen()\" class=\"cart-btn\">\n        <img src=\"assets/cartera.png\" width=\"30px\" height=\"30px\" style=\"object-fit: contain;\">\n        <ion-badge color=\"success\" class=\"quantity-number\">5</ion-badge>\n      </ion-button>\n    </div>\n  </ion-card>\n</div>\n\n<ion-content>\n  <ion-card style=\"box-shadow: none; margin: 0; border-bottom: 1px solid grey; border-radius: 0;\">\n    <ion-icon class=\"delete-icon\" ion-button ios=\"ios-close\" md=\"md-close\"></ion-icon>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"4\">\n          <img src=\"assets/032731.jpg\" width=\"300px\" height=\"200px\" style=\"object-fit: contain;\">\n        </ion-col>\n        <ion-col size=\"8\">\n          <p class=\"article-title\">Coca Cola</p>\n          <p class=\"article-content\">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>\n          <ion-grid style=\"padding: 0;\">\n            <ion-row>\n              <ion-col size=\"5\">\n                <p class=\"price-title\">$1.99</p>\n              </ion-col>\n              <ion-col class=\"whole-btn\" size=\"7\">\n                <ion-grid style=\"padding: 0;\">\n                  <ion-row>\n                    <ion-col class=\"less-col\" size=\"4\">\n                      <ion-button style=\"--box-shadow: none;\" class=\"less-btn\"> - </ion-button>\n                    </ion-col>\n                    <ion-col size=\"4\">\n                      <ion-badge class=\"quantity-number2\">1</ion-badge>\n                    </ion-col>\n                    <ion-col class=\"right-col\" size=\"4\">\n                      <ion-button style=\"--box-shadow: none;\" class=\"less-btn\"> + </ion-button>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n  <ion-card style=\"box-shadow: none; margin: 0; border-bottom: 1px solid grey; border-radius: 0;\">\n    <ion-icon class=\"delete-icon\" ion-button ios=\"ios-close\" md=\"md-close\"></ion-icon>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"4\">\n          <img src=\"assets/doritos.jpg\" width=\"300px\" height=\"200px\" style=\"object-fit: contain;\">\n        </ion-col>\n        <ion-col size=\"8\">\n          <p class=\"article-title\">Doritos</p>\n          <p class=\"article-content\">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>\n          <ion-grid style=\"padding: 0;\">\n            <ion-row>\n              <ion-col size=\"5\">\n                <p class=\"price-title\">$1.99</p>\n              </ion-col>\n              <ion-col class=\"whole-btn\" size=\"7\">\n                <ion-grid style=\"padding: 0;\">\n                  <ion-row>\n                    <ion-col class=\"less-col\" size=\"4\">\n                      <ion-button class=\"less-btn\"> - </ion-button>\n                    </ion-col>\n                    <ion-col size=\"4\">\n                      <ion-badge class=\"quantity-number2\">1</ion-badge>\n                    </ion-col>\n                    <ion-col class=\"right-col\" size=\"4\">\n                      <ion-button class=\"less-btn\"> + </ion-button>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n  <ion-card style=\"box-shadow: none; margin: 0; border-bottom: 1px solid grey; border-radius: 0;\">\n    <ion-icon class=\"delete-icon\" ion-button ios=\"ios-close\" md=\"md-close\"></ion-icon>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"4\">\n          <img src=\"assets/montes.jpg\" width=\"300px\" height=\"200px\" style=\"object-fit: contain;\">\n        </ion-col>\n        <ion-col size=\"8\">\n          <p class=\"article-title\">Vino Montes</p>\n          <p class=\"article-content\">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>\n          <ion-grid style=\"padding: 0;\">\n            <ion-row>\n              <ion-col size=\"5\">\n                <p class=\"price-title\">$1.99</p>\n              </ion-col>\n              <ion-col class=\"whole-btn\" size=\"7\">\n                <ion-grid style=\"padding: 0;\">\n                  <ion-row>\n                    <ion-col class=\"less-col\" size=\"4\">\n                      <ion-button style=\"--box-shadow: none;\" class=\"less-btn\"> - </ion-button>\n                    </ion-col>\n                    <ion-col size=\"4\">\n                      <ion-badge class=\"quantity-number2\">1</ion-badge>\n                    </ion-col>\n                    <ion-col class=\"right-col\" size=\"4\">\n                      <ion-button style=\"--box-shadow: none;\" class=\"less-btn\"> + </ion-button>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n  <ion-card class=\"total-card\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"6\">\n          <p>Starting Subtotal</p>\n          <p>Extra Savings</p>\n          <p>Subtotal</p>\n          <p>Delivery Fee</p>\n          <p>Taxes</p>\n          <p style=\"font-weight: 700; color: #fd5440;\">Order Total</p>\n        </ion-col>\n\n        <ion-col size=\"6\">\n          <p style=\"text-align: right\">$5.97</p>\n          <p style=\"text-align: right\">$0.00</p>\n          <p style=\"text-align: right\">$5.97</p>\n          <p style=\"text-align: right\">$3.00</p>\n          <p style=\"text-align: right\">$2.50</p>\n          <p style=\"text-align: right; font-weight: 700; color: #fd5440;\">$11.47</p>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n  <ion-card class=\"total-card\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"4\">\n          <p>Order total</p>\n          <p style=\"text-align: left; font-weight: 700; color: #fd5440;\">$11.47</p>\n        </ion-col>\n\n        <ion-col size=\"8\">\n          <ion-button style=\"--box-shadow: none;\" (click)=\"openPage()\" class=\"checkout-btn\" expand=\"block\">PROCEED TO\n            CHECKOUT</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/tab5/tab5.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab5/tab5.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".orange-bg {\n  background: #FD5440; }\n\n.logo-card {\n  box-shadow: none;\n  padding-bottom: 0;\n  margin-left: 0;\n  margin-right: 0; }\n\n.tags {\n  --background: rgb(255, 255, 255);\n  --background-activated: rgb(255, 255, 255);\n  color: #FD5440;\n  --color-activated: #FD5440;\n  font-weight: 700;\n  font-size: 12px;\n  --border-radius: 25px; }\n\n.logo {\n  text-align: center;\n  color: white;\n  padding-top: 10px;\n  font-weight: 700; }\n\n.arrow-icon {\n  color: white;\n  width: 25px;\n  height: 25px; }\n\n.arrow-btn {\n  --background: transparent;\n  --background-activated: transparent;\n  position: absolute;\n  top: 13px;\n  left: 0;\n  --box-shadow: none; }\n\n.cart-btn {\n  --background: transparent;\n  --background-activated: transparent;\n  position: absolute;\n  top: 14px;\n  right: 0;\n  --box-shadow: none; }\n\n.quantity-number {\n  position: absolute;\n  top: 0px;\n  right: 14px;\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  --padding-top: 6px; }\n\n.article-title {\n  font-weight: 300; }\n\n.article-content {\n  font-weight: 300; }\n\n.delete-icon {\n  position: absolute;\n  top: 10px;\n  right: 5px;\n  color: #fd5440;\n  width: 25px;\n  height: 25px; }\n\n.price-title {\n  margin: 0;\n  padding: 0;\n  color: #fd5440;\n  font-weight: 700;\n  font-size: 20px;\n  text-align: center;\n  padding: 0;\n  text-align: left;\n  margin-top: 10px; }\n\n.whole-btn {\n  background: #ffc93a;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 15px; }\n\n.less-col {\n  border-right: 1px solid #fd5440;\n  padding: 0; }\n\n.less-btn {\n  font-weight: 700;\n  color: #fd5440;\n  --color-activated: #fd5440;\n  padding: 0;\n  --background: transparent;\n  --background-activated: transparent;\n  font-size: 15px; }\n\n.quantity-number2 {\n  --background: transparent;\n  font-size: 15px;\n  color: #fd5440;\n  --padding-top: 13px;\n  --padding-start: 10px; }\n\n.right-col {\n  border-left: 1px solid #fd5440;\n  padding: 0; }\n\n.total-card {\n  box-shadow: none;\n  margin: 0;\n  border-bottom: 1px solid grey;\n  border-radius: 0;\n  border-bottom: 1px solid grey; }\n\n.checkout-btn {\n  margin-top: 20px;\n  --background: #ffc93a;\n  --background-activated: #ffc93a;\n  --border-radius: 25px;\n  color: #fd5440;\n  --color-activated: #fd5440;\n  font-weight: 700;\n  font-size: 13px;\n  height: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sb3JuYW1pY2hlbGxlL0Rvd25sb2Fkcy9idXlwaW4tYXBwLThmMjkwNWUwYzBkODlhYTIxMDZmMmRkY2FmZDVkY2U0NDJmMDZmODQvc3JjL2FwcC90YWI1L3RhYjUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGdDQUFhO0VBQ2IsMENBQXVCO0VBQ3ZCLGNBQWM7RUFDZCwwQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixxQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHZDtFQUNFLHlCQUFhO0VBQ2IsbUNBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsT0FBTztFQUNQLGtCQUFhLEVBQUE7O0FBR2Y7RUFDRSx5QkFBYTtFQUNiLG1DQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFFBQVE7RUFDUixrQkFBYSxFQUFBOztBQUdmO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWMsRUFBQTs7QUFHaEI7RUFDRSxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHZDtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUE7O0FBSXJCO0VBQ0UsK0JBQStCO0VBQy9CLFVBQVUsRUFBQTs7QUFHWjtFQUNFLGdCQUFnQjtFQUVoQixjQUFjO0VBQ2QsMEJBQWtCO0VBQ2xCLFVBQVU7RUFDVix5QkFBYTtFQUNiLG1DQUF1QjtFQUN2QixlQUFlLEVBQUE7O0FBR2pCO0VBQ0UseUJBQWE7RUFDYixlQUFlO0VBQ2YsY0FBYztFQUNkLG1CQUFjO0VBQ2QscUJBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsOEJBQThCO0VBQzlCLFVBQVUsRUFBQTs7QUFHWjtFQUNFLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsNkJBQTZCO0VBQzdCLGdCQUFnQjtFQUNoQiw2QkFBNkIsRUFBQTs7QUFHL0I7RUFDRSxnQkFBZ0I7RUFDaEIscUJBQWE7RUFDYiwrQkFBdUI7RUFDdkIscUJBQWdCO0VBQ2hCLGNBQWM7RUFDZCwwQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90YWI1L3RhYjUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9yYW5nZS1iZyB7XG4gIGJhY2tncm91bmQ6ICNGRDU0NDA7XG59XG5cbi5sb2dvLWNhcmQge1xuICBib3gtc2hhZG93OiBub25lO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cblxuLnRhZ3Mge1xuICAtLWJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICBjb2xvcjogI0ZENTQ0MDtcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6ICNGRDU0NDA7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgLS1ib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuXG4ubG9nbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmFycm93LWljb24ge1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG59XG5cbi5hcnJvdy1idG4ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEzcHg7XG4gIGxlZnQ6IDA7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmNhcnQtYnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNHB4O1xuICByaWdodDogMDtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xufVxuXG4ucXVhbnRpdHktbnVtYmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgcmlnaHQ6IDE0cHg7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLS1wYWRkaW5nLXRvcDogNnB4O1xufVxuXG4uYXJ0aWNsZS10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5hcnRpY2xlLWNvbnRlbnQge1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4uZGVsZXRlLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTBweDtcbiAgcmlnaHQ6IDVweDtcbiAgY29sb3I6ICNmZDU0NDA7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG59XG5cbi5wcmljZS10aXRsZSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgY29sb3I6ICNmZDU0NDA7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4ud2hvbGUtYnRuIHtcbiAgYmFja2dyb3VuZDogI2ZmYzkzYTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgLy8gaGVpZ2h0OiA0MHB4O1xufVxuXG4ubGVzcy1jb2wge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZmQ1NDQwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4ubGVzcy1idG4ge1xuICBmb250LXdlaWdodDogNzAwO1xuICAvLyBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjZmQ1NDQwO1xuICAtLWNvbG9yLWFjdGl2YXRlZDogI2ZkNTQ0MDtcbiAgcGFkZGluZzogMDtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLnF1YW50aXR5LW51bWJlcjIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjZmQ1NDQwO1xuICAtLXBhZGRpbmctdG9wOiAxM3B4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG59XG5cbi5yaWdodC1jb2wge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmZDU0NDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi50b3RhbC1jYXJkIHtcbiAgYm94LXNoYWRvdzogbm9uZTsgXG4gIG1hcmdpbjogMDsgXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmV5OyBcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XG59XG5cbi5jaGVja291dC1idG4ge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICAtLWJhY2tncm91bmQ6ICNmZmM5M2E7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNmZmM5M2E7XG4gIC0tYm9yZGVyLXJhZGl1czogMjVweDtcbiAgY29sb3I6ICNmZDU0NDA7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiAjZmQ1NDQwO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGhlaWdodDogNTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tab5/tab5.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab5/tab5.page.ts ***!
  \***********************************/
/*! exports provided: Tab5Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab5Page", function() { return Tab5Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "./node_modules/@ionic-native/native-page-transitions/ngx/index.js");




var Tab5Page = /** @class */ (function () {
    function Tab5Page(navigate, nativePageTransitions) {
        this.navigate = navigate;
        this.nativePageTransitions = nativePageTransitions;
    }
    Tab5Page.prototype.ngOnInit = function () {
    };
    Tab5Page.prototype.openPage = function () {
        var options = {
            duration: 300,
            iosdelay: 300
        };
        console.log(options);
        this.nativePageTransitions.fade(options);
        this.navigate.navigateRoot("/add-address");
    };
    Tab5Page.prototype.cartOpen = function () {
        var options = {
            duration: 300,
            iosdelay: 300
        };
        console.log(options);
        this.nativePageTransitions.fade(options);
        this.navigate.navigateRoot("/tabs/tabs/tab5");
    };
    Tab5Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab5',
            template: __webpack_require__(/*! ./tab5.page.html */ "./src/app/tab5/tab5.page.html"),
            styles: [__webpack_require__(/*! ./tab5.page.scss */ "./src/app/tab5/tab5.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_3__["NativePageTransitions"]])
    ], Tab5Page);
    return Tab5Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab5-tab5-module.js.map