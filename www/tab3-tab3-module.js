(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"],{

/***/ "./src/app/tab3/tab3.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3.page */ "./src/app/tab3/tab3.page.ts");







var Tab3PageModule = /** @class */ (function () {
    function Tab3PageModule() {
    }
    Tab3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"] }])
            ],
            declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
        })
    ], Tab3PageModule);
    return Tab3PageModule;
}());



/***/ }),

/***/ "./src/app/tab3/tab3.page.html":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"orange-bg\">\n  <ion-card class=\"logo-card\">\n    <h5 class=\"logo\">Colmado Class</h5>\n    <!-- <img class=\"logo\" src=\"assets/logo prueba.png\"> -->\n\n    <ion-button style=\"--box-shadow: none;\"  (click)=\"goBack()\" class=\"arrow-btn\">\n      <ion-icon class=\"arrow-icon\" ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\n    </ion-button>\n\n    <div class=\"cart-item\">\n      <ion-button style=\"--box-shadow: none;\"  (click)=\"cartOpen()\" class=\"cart-btn\">\n        <img src=\"assets/cartera.png\" width=\"30px\" height=\"30px\" style=\"object-fit: contain;\">\n        <ion-badge color=\"success\" class=\"quantity-number\">5</ion-badge>\n      </ion-button>\n    </div>\n\n    <div class=\"scroll-tags\">\n      <ion-button style=\"--box-shadow: none;\" class=\"tags\">Higiene</ion-button>\n      <ion-button style=\"--box-shadow: none;\" class=\"tags\">Alcohol</ion-button>\n      <ion-button style=\"--box-shadow: none;\" class=\"tags\">Refrigerios</ion-button>\n      <ion-button style=\"--box-shadow: none;\" class=\"tags\">Mascotas</ion-button>\n      <ion-button style=\"--box-shadow: none;\" class=\"tags\">Hogar</ion-button>\n      <ion-button style=\"--box-shadow: none;\" class=\"tags\">Desayuno</ion-button>\n      <ion-button style=\"--box-shadow: none;\" class=\"tags\">Todos</ion-button>\n      <ion-button style=\"--box-shadow: none;\" class=\"tags\">Higiene</ion-button>\n      <ion-button style=\"--box-shadow: none;\" class=\"tags\">Alcohol</ion-button>\n      <ion-button style=\"--box-shadow: none;\" class=\"tags\">Refrigerios</ion-button>\n      <ion-button style=\"--box-shadow: none;\" class=\"tags\">Mascotas</ion-button>\n      <ion-button style=\"--box-shadow: none;\" class=\"tags\">Hogar</ion-button>\n      <ion-button style=\"--box-shadow: none;\" class=\"tags\">Desayuno</ion-button>\n      <ion-button style=\"--box-shadow: none;\" class=\"tags\">Todos</ion-button>\n    </div>\n  </ion-card>\n</div>\n\n<div class=\"search-container\">\n  <ion-card class=\"search-card\">\n    <ion-grid style=\"padding: 0;\">\n      <ion-row>\n        <ion-col style=\"padding: 0; background: rgba(194, 194, 194, 0.062);\" size=\"1\">\n          <ion-icon class=\"icon\" ios=\"ios-search\" md=\"md-search\"></ion-icon>\n        </ion-col>\n        <ion-col style=\"padding: 0;\">\n          <ion-input clearInput class=\"search-input\" type=\"text\" placeholder=\"Buscar\"></ion-input>\n        </ion-col>\n      </ion-row>\n  </ion-grid>\n  </ion-card>\n</div>\n\n<ion-content class=\"bg\">\n\n  <ion-card class=\"first-card\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-card class=\"item-card\">\n            <h5 class=\"item-name\">Coca Cola</h5>\n            <ion-button style=\"--box-shadow: none;\"  (click)=\"openPage()\" expand=\"block\" class=\"btn-card\">\n              <img class=\"item\" src=\"assets/032731.jpg\" width=\"200px\" height=\"100px\" style=\"object-fit: contain;\">\n            </ion-button>\n            <ion-grid>\n              <ion-row>\n                <ion-col size=\"6\">\n                  <ion-button style=\"--box-shadow: none;\"  class=\"add-btn\" expand=\"block\">ADD</ion-button>\n                </ion-col>\n                <ion-col style=\"border-left: 1px solid rgb(189, 189, 189);\" size=\"6\">\n                  <p class=\"prices\">$3.99</p>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-card>\n        </ion-col>\n\n        <ion-col size=\"6\">\n          <ion-card class=\"item-card\">\n            <h5 class=\"item-name\">Doritos</h5>\n            <ion-button style=\"--box-shadow: none;\"  (click)=\"openPage()\" expand=\"block\" class=\"btn-card\">\n              <img class=\"item\" src=\"assets/doritos.jpg\" width=\"200px\" height=\"100px\" style=\"object-fit: contain;\">\n            </ion-button>\n            <ion-grid>\n              <ion-row>\n                <ion-col size=\"6\">\n                  <ion-button style=\"--box-shadow: none;\"  class=\"add-btn\" expand=\"block\">ADD</ion-button>\n                </ion-col>\n                <ion-col style=\"border-left: 1px solid rgb(189, 189, 189);\" size=\"6\">\n                  <p class=\"prices\">$3.99</p>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n  <ion-card class=\"first-card\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-card class=\"item-card\">\n            <h5 class=\"item-name\">Adobo Goya</h5>\n            <ion-button style=\"--box-shadow: none;\"  (click)=\"openPage()\" expand=\"block\" class=\"btn-card\">\n              <img class=\"item\" src=\"assets/adobo.jpeg\" width=\"200px\" height=\"100px\" style=\"object-fit: contain;\">\n            </ion-button>\n            <ion-grid>\n              <ion-row>\n                <ion-col size=\"6\">\n                  <ion-button style=\"--box-shadow: none;\"  class=\"add-btn\" expand=\"block\">ADD</ion-button>\n                </ion-col>\n                <ion-col style=\"border-left: 1px solid rgb(189, 189, 189);\" size=\"6\">\n                  <p class=\"prices\">$3.99</p>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-card>\n        </ion-col>\n\n        <ion-col size=\"6\">\n          <ion-card class=\"item-card\">\n            <h5 class=\"item-name\">Agua Dasani</h5>\n            <ion-button style=\"--box-shadow: none;\"  (click)=\"openPage()\" expand=\"block\" class=\"btn-card\">\n              <img class=\"item\" src=\"assets/dasana.jpg\" width=\"200px\" height=\"100px\" style=\"object-fit: contain;\">\n            </ion-button>\n            <ion-grid>\n              <ion-row>\n                <ion-col size=\"6\">\n                  <ion-button style=\"--box-shadow: none;\"  class=\"add-btn\" expand=\"block\">ADD</ion-button>\n                </ion-col>\n                <ion-col style=\"border-left: 1px solid rgb(189, 189, 189);\" size=\"6\">\n                  <p class=\"prices\">$3.99</p>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n  <ion-card class=\"first-card\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-card class=\"item-card\">\n            <h5 class=\"item-name\">19 Crimes</h5>\n            <ion-button style=\"--box-shadow: none;\"  (click)=\"openPage()\" expand=\"block\" class=\"btn-card\">\n              <img class=\"item\" src=\"assets/19crimes.jpg\" width=\"200px\" height=\"100px\" style=\"object-fit: contain;\">\n            </ion-button>\n            <ion-grid>\n              <ion-row>\n                <ion-col size=\"6\">\n                  <ion-button style=\"--box-shadow: none;\"  class=\"add-btn\" expand=\"block\">ADD</ion-button>\n                </ion-col>\n                <ion-col style=\"border-left: 1px solid rgb(189, 189, 189);\" size=\"6\">\n                  <p class=\"prices\">$3.99</p>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-card>\n        </ion-col>\n\n        <ion-col size=\"6\">\n          <ion-card class=\"item-card\">\n            <h5 class=\"item-name\">Vino Montes</h5>\n            <ion-button style=\"--box-shadow: none;\"  (click)=\"openPage()\" expand=\"block\" class=\"btn-card\">\n              <img class=\"item\" src=\"assets/montes.jpg\" width=\"200px\" height=\"100px\" style=\"object-fit: contain;\">\n            </ion-button>\n            <ion-grid>\n              <ion-row>\n                <ion-col size=\"6\">\n                  <ion-button style=\"--box-shadow: none;\"  class=\"add-btn\" expand=\"block\">ADD</ion-button>\n                </ion-col>\n                <ion-col style=\"border-left: 1px solid rgb(189, 189, 189);\" size=\"6\">\n                  <p class=\"prices\">$3.99</p>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-card>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/tab3/tab3.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".orange-bg {\n  background: #FD5440; }\n\n.logo-card {\n  box-shadow: none;\n  padding-bottom: 0;\n  margin-left: 0;\n  margin-right: 0; }\n\n.tags {\n  --background: rgb(255, 255, 255);\n  --background-activated: rgb(255, 255, 255);\n  color: #FD5440;\n  --color-activated: #FD5440;\n  font-weight: 700;\n  font-size: 12px;\n  --border-radius: 25px;\n  font-family: 'Mukta', sans-serif; }\n\n.logo {\n  text-align: center;\n  color: white;\n  padding-top: 10px;\n  font-weight: 700;\n  font-family: 'Mukta', sans-serif; }\n\n.search-container {\n  background: transparent; }\n\n.search-card {\n  border-radius: 0;\n  margin: 0;\n  background: transparent; }\n\n.search-input {\n  --padding-start: 5px;\n  height: 60px;\n  background: rgba(194, 194, 194, 0.062);\n  font-family: 'Mukta', sans-serif; }\n\n.arrow-icon {\n  color: white;\n  width: 25px;\n  height: 25px; }\n\n.arrow-btn {\n  --background: transparent;\n  --background-activated: transparent;\n  position: absolute;\n  top: 13px;\n  left: 0;\n  --box-shadow: none; }\n\n.cart-btn {\n  --background: transparent;\n  --background-activated: transparent;\n  position: absolute;\n  top: 14px;\n  right: 0;\n  --box-shadow: none; }\n\n.quantity-number {\n  position: absolute;\n  top: 0px;\n  right: 14px;\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  --padding-top: 6px;\n  font-family: 'Mukta', sans-serif; }\n\n.first-card {\n  height: auto;\n  margin-top: 0;\n  box-shadow: none; }\n\n.item-name {\n  font-size: 10px;\n  margin-left: 20px;\n  font-weight: 700;\n  color: #FD5440;\n  font-family: 'Mukta', sans-serif; }\n\n.item-card {\n  height: auto;\n  box-shadow: 4px 4px 6px #2c2c2c;\n  border-left: 1px solid #cecece;\n  border-right: 1px solid #cecece;\n  border-top: 1px solid #cecece;\n  border-radius: 0;\n  margin: 0; }\n\n.title-store {\n  background: #FFC93A;\n  color: #FD5440;\n  font-weight: 700;\n  font-size: 17px;\n  text-align: center;\n  margin-bottom: 0;\n  padding: 15px;\n  font-family: 'Mukta', sans-serif; }\n\n.btn-card {\n  height: auto;\n  width: 100%;\n  --background: transparent;\n  --background-activated: transparent;\n  --box-shadow: none; }\n\n.add-btn {\n  --background: #FD5440;\n  --background-activated: #FFC93A;\n  font-size: 12px;\n  font-weight: 700;\n  --border-radius: 25px;\n  font-family: 'Mukta', sans-serif; }\n\n.prices {\n  text-align: center;\n  font-weight: 700;\n  font-size: 12px;\n  font-family: 'Mukta', sans-serif; }\n\n.scroll-tags {\n  padding-top: 20px;\n  display: flex;\n  overflow-x: scroll;\n  padding-left: 10px;\n  padding-right: 10px; }\n\n.icon {\n  font-size: 25px;\n  margin-top: 20px;\n  margin-left: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sb3JuYW1pY2hlbGxlL0Rvd25sb2Fkcy9idXlwaW4tYXBwLThmMjkwNWUwYzBkODlhYTIxMDZmMmRkY2FmZDVkY2U0NDJmMDZmODQvc3JjL2FwcC90YWIzL3RhYjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGdDQUFhO0VBQ2IsMENBQXVCO0VBQ3ZCLGNBQWM7RUFDZCwwQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixxQkFBZ0I7RUFDaEIsZ0NBQWdDLEVBQUE7O0FBR2xDO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGdDQUFnQyxFQUFBOztBQUdsQztFQUNFLHVCQUF1QixFQUFBOztBQUd6QjtFQUNFLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsdUJBQXVCLEVBQUE7O0FBR3pCO0VBRUUsb0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixzQ0FBc0M7RUFDdEMsZ0NBQWdDLEVBQUE7O0FBR2xDO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2Q7RUFDRSx5QkFBYTtFQUNiLG1DQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsU0FBUztFQUNULE9BQU87RUFDUCxrQkFBYSxFQUFBOztBQUlmO0VBQ0UseUJBQWE7RUFDYixtQ0FBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1Isa0JBQWEsRUFBQTs7QUFHZjtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFjO0VBQ2QsZ0NBQWdDLEVBQUE7O0FBR2xDO0VBQ0UsWUFBWTtFQUtaLGFBQWE7RUFDYixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZ0NBQWdDLEVBQUE7O0FBR2xDO0VBQ0UsWUFBWTtFQUNaLCtCQUF1QztFQUN2Qyw4QkFBeUM7RUFDekMsK0JBQTBDO0VBQzFDLDZCQUF3QztFQUN4QyxnQkFBZ0I7RUFDaEIsU0FBUyxFQUFBOztBQUdYO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGdDQUFnQyxFQUFBOztBQUdsQztFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gseUJBQWE7RUFDYixtQ0FBdUI7RUFDdkIsa0JBQWEsRUFBQTs7QUFHZjtFQUNFLHFCQUFhO0VBQ2IsK0JBQXVCO0VBQ3ZCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIscUJBQWdCO0VBQ2hCLGdDQUFnQyxFQUFBOztBQUdsQztFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdDQUFnQyxFQUFBOztBQUdsQztFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGFiMy90YWIzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vcmFuZ2UtYmcge1xuICBiYWNrZ3JvdW5kOiAjRkQ1NDQwO1xufVxuXG4ubG9nby1jYXJkIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgcGFkZGluZy1ib3R0b206IDA7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG5cbi50YWdzIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgY29sb3I6ICNGRDU0NDA7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiAjRkQ1NDQwO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIC0tYm9yZGVyLXJhZGl1czogMjVweDtcbiAgZm9udC1mYW1pbHk6ICdNdWt0YScsIHNhbnMtc2VyaWY7XG59XG5cbi5sb2dvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LWZhbWlseTogJ011a3RhJywgc2Fucy1zZXJpZjtcbn1cblxuLnNlYXJjaC1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLnNlYXJjaC1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgbWFyZ2luOiAwO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLnNlYXJjaC1pbnB1dCB7XG4gIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMTcwLCAxNzAsIDE3MCk7XG4gIC0tcGFkZGluZy1zdGFydDogNXB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTk0LCAxOTQsIDE5NCwgMC4wNjIpO1xuICBmb250LWZhbWlseTogJ011a3RhJywgc2Fucy1zZXJpZjtcbn1cblxuLmFycm93LWljb24ge1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG59XG5cbi5hcnJvdy1idG4ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEzcHg7XG4gIGxlZnQ6IDA7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcblxufVxuXG4uY2FydC1idG4ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE0cHg7XG4gIHJpZ2h0OiAwO1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5xdWFudGl0eS1udW1iZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICByaWdodDogMTRweDtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAtLXBhZGRpbmctdG9wOiA2cHg7XG4gIGZvbnQtZmFtaWx5OiAnTXVrdGEnLCBzYW5zLXNlcmlmO1xufVxuXG4uZmlyc3QtY2FyZCB7XG4gIGhlaWdodDogYXV0bztcbiAgLy8gYm94LXNoYWRvdzogNHB4IDRweCA2cHggcmdiKDQ0LCA0NCwgNDQpO1xuICAvLyBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYigyMDYsIDIwNiwgMjA2KTtcbiAgLy8gYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiKDIwNiwgMjA2LCAyMDYpO1xuICAvLyBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDIwNiwgMjA2LCAyMDYpO1xuICBtYXJnaW4tdG9wOiAwO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4uaXRlbS1uYW1lIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICNGRDU0NDA7XG4gIGZvbnQtZmFtaWx5OiAnTXVrdGEnLCBzYW5zLXNlcmlmO1xufVxuXG4uaXRlbS1jYXJkIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3gtc2hhZG93OiA0cHggNHB4IDZweCByZ2IoNDQsIDQ0LCA0NCk7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiKDIwNiwgMjA2LCAyMDYpO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2IoMjA2LCAyMDYsIDIwNik7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoMjA2LCAyMDYsIDIwNik7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuLnRpdGxlLXN0b3JlIHtcbiAgYmFja2dyb3VuZDogI0ZGQzkzQTtcbiAgY29sb3I6ICNGRDU0NDA7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBwYWRkaW5nOiAxNXB4O1xuICBmb250LWZhbWlseTogJ011a3RhJywgc2Fucy1zZXJpZjtcbn1cblxuLmJ0bi1jYXJkIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmFkZC1idG4ge1xuICAtLWJhY2tncm91bmQ6ICNGRDU0NDA7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNGRkM5M0E7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgLS1ib3JkZXItcmFkaXVzOiAyNXB4O1xuICBmb250LWZhbWlseTogJ011a3RhJywgc2Fucy1zZXJpZjtcbn1cblxuLnByaWNlcyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogJ011a3RhJywgc2Fucy1zZXJpZjtcbn1cblxuLnNjcm9sbC10YWdzIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG4uaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/tab3/tab3.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "./node_modules/@ionic-native/native-page-transitions/ngx/index.js");
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! parse */ "./node_modules/parse/index.js");
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(parse__WEBPACK_IMPORTED_MODULE_4__);






var parse = __webpack_require__(/*! parse */ "./node_modules/parse/index.js");
var Tab3Page = /** @class */ (function () {
    function Tab3Page(navigate, nativePageTransitions, alert) {
        this.navigate = navigate;
        this.nativePageTransitions = nativePageTransitions;
        this.alert = alert;
        parse__WEBPACK_IMPORTED_MODULE_4__["Parse"].initialize("C0XMchZu6Y9XWNUK4lM1UHnnuXhC3dcdpa5fGYpO", "EdN4Xnln11to6pfyNaQ5HD05laenoYu04txYAcfo");
        parse__WEBPACK_IMPORTED_MODULE_4__["Parse"].serverURL = 'https://parseapi.back4app.com/';
    }
    Tab3Page.prototype.ngOnInit = function () {
        this.getProduct();
    };
    Tab3Page.prototype.openPage = function () {
        var options = {
            duration: 300,
            iosdelay: 300
        };
        console.log(options);
        this.nativePageTransitions.fade(options);
        this.navigate.navigateRoot("/tabs/tabs/tab4");
    };
    Tab3Page.prototype.cartOpen = function () {
        var options = {
            duration: 300,
            iosdelay: 300
        };
        console.log(options);
        this.nativePageTransitions.fade(options);
        this.navigate.navigateRoot("/tabs/tabs/tab5");
    };
    Tab3Page.prototype.goBack = function () {
        var options = {
            duration: 300,
            iosdelay: 300
        };
        console.log(options);
        this.nativePageTransitions.fade(options);
        this.navigate.navigateRoot("/tabs/tabs/tab2");
    };
    Tab3Page.prototype.getProduct = function () {
        parse__WEBPACK_IMPORTED_MODULE_4__["Parse"].Cloud.run('getProduct', {}).then(function (result) {
            console.log(result);
        }, function (error) {
            console.log(error);
        });
    };
    Tab3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab3',
            template: __webpack_require__(/*! ./tab3.page.html */ "./src/app/tab3/tab3.page.html"),
            styles: [__webpack_require__(/*! ./tab3.page.scss */ "./src/app/tab3/tab3.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_3__["NativePageTransitions"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], Tab3Page);
    return Tab3Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab3-tab3-module.js.map