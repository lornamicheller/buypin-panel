(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./src/app/tab2/tab2.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");







var Tab2PageModule = /** @class */ (function () {
    function Tab2PageModule() {
    }
    Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"] }])
            ],
            declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]]
        })
    ], Tab2PageModule);
    return Tab2PageModule;
}());



/***/ }),

/***/ "./src/app/tab2/tab2.page.html":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"orange-bg\">\n  <ion-card class=\"logo-card\">\n    <h5 class=\"logo\">Convenience Store</h5>\n    <!-- <img class=\"logo\" src=\"assets/logo prueba.png\"> -->\n\n    <div class=\"cart-item\">\n       \n            <ion-icon ion-button class=\"btnBack\" (click)=  \"transitionBack()\" name=\"ios-arrow-back\"></ion-icon>\n          \n      <!-- <ion-button style=\"--box-shadow: none;\"  (click)=\"cartOpen()\" class=\"cart-btn\">\n        <img src=\"assets/cartera.png\" width=\"30px\" height=\"30px\" style=\"object-fit: contain;\">\n        <ion-badge color=\"success\" class=\"quantity-number\">5</ion-badge>\n      </ion-button> -->\n    </div>\n  </ion-card>\n</div>\n\n<ion-content class=\"bg\">\n\n  <ion-card class=\"card-store\">\n    <div>\n      <img src=\"assets/store1.jpg\">\n    </div>\n    <h4 class=\"title-store\">To Go Stores</h4>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"8\">\n          <p class=\"time\">Horario: <span style=\"font-weight: 300;\">6:00AM</span> - <span\n              style=\"font-weight: 300;\">10:00PM</span></p>\n          <p class=\"phone\">Teléfono: <span style=\"font-weight: 300;\">787-888-8888</span></p>\n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-button style=\"--box-shadow: none;\"  expand=\"block\" color=\"success\" (click)=\"openPage()\" class=\"open\">OPEN</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n  <ion-card class=\"card-store\">\n    <div>\n      <img src=\"assets/store1.jpg\">\n    </div>\n    <h4 class=\"title-store\">Colmado Melendez</h4>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"8\">\n          <p class=\"time\">Horario: <span style=\"font-weight: 300;\">6:00AM</span> - <span\n              style=\"font-weight: 300;\">10:00PM</span></p>\n          <p class=\"phone\">Teléfono: <span style=\"font-weight: 300;\">787-888-8888</span></p>\n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-button style=\"--box-shadow: none;\"  expand=\"block\" color=\"danger\" class=\"open\">CLOSE</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n  <ion-card class=\"card-store\">\n    <div>\n      <img src=\"assets/store1.jpg\">\n    </div>\n    <h4 class=\"title-store\">Colmado Class</h4>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"8\">\n          <p class=\"time\">Horario: <span style=\"font-weight: 300;\">6:00AM</span> - <span\n              style=\"font-weight: 300;\">10:00PM</span></p>\n          <p class=\"phone\">Teléfono: <span style=\"font-weight: 300;\">787-888-8888</span></p>\n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-button style=\"--box-shadow: none;\"  expand=\"block\" (click)=\"openPage()\" color=\"success\" class=\"open\">OPEN</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n  <ion-card class=\"card-store\">\n    <div>\n      <img src=\"assets/store1.jpg\">\n    </div>\n    <h4 class=\"title-store\">Colmado Don Pepe</h4>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"8\">\n          <p class=\"time\">Horario: <span style=\"font-weight: 300;\">6:00AM</span> - <span\n              style=\"font-weight: 300;\">10:00PM</span></p>\n          <p class=\"phone\">Teléfono: <span style=\"font-weight: 300;\">787-888-8888</span></p>\n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-button style=\"--box-shadow: none;\"  expand=\"block\" color=\"danger\" class=\"open\">CLOSE</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n  <ion-card class=\"card-store\">\n    <div>\n      <img src=\"assets/store1.jpg\">\n    </div>\n    <h4 class=\"title-store\">24 Pa' Ti</h4>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"8\">\n          <p class=\"time\">Horario: <span style=\"font-weight: 300;\">6:00AM</span> - <span\n              style=\"font-weight: 300;\">10:00PM</span></p>\n          <p class=\"phone\">Teléfono: <span style=\"font-weight: 300;\">787-888-8888</span></p>\n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-button style=\"--box-shadow: none;\"  expand=\"block\" (click)=\"openPage()\" color=\"success\" class=\"open\">OPEN</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n  <ion-card class=\"card-store\">\n    <div>\n      <img src=\"assets/store1.jpg\">\n    </div>\n    <h4 class=\"title-store\">Market Place</h4>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"8\">\n          <p class=\"time\">Horario: <span style=\"font-weight: 300;\">6:00AM</span> - <span\n              style=\"font-weight: 300;\">10:00PM</span></p>\n          <p class=\"phone\">Teléfono: <span style=\"font-weight: 300;\">787-888-8888</span></p>\n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-button style=\"--box-shadow: none;\"  expand=\"block\" color=\"danger\" class=\"open\">CLOSE</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n  <ion-card class=\"card-store\">\n    <div>\n      <img src=\"assets/store1.jpg\">\n    </div>\n    <h4 class=\"title-store\">Convenience Aguadilla</h4>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"8\">\n          <p class=\"time\">Horario: <span style=\"font-weight: 300;\">6:00AM</span> - <span\n              style=\"font-weight: 300;\">10:00PM</span></p>\n          <p class=\"phone\">Teléfono: <span style=\"font-weight: 300;\">787-888-8888</span></p>\n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-button style=\"--box-shadow: none;\"  expand=\"block\" (click)=\"openPage()\" color=\"success\" class=\"open\">OPEN</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/tab2/tab2.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".orange-bg {\n  background: #FD5440; }\n\n.bg {\n  --background: #FD5440; }\n\n.logo-card {\n  box-shadow: none;\n  padding-bottom: 0; }\n\n.btnBack {\n  color: white;\n  position: absolute;\n  top: 23px;\n  left: 0px;\n  font-size: 25px;\n  --box-shadow:none;\n  --background: none; }\n\n.logo {\n  text-align: center;\n  color: white;\n  padding-top: 10px;\n  font-weight: 700; }\n\n.cart-btn {\n  --background: transparent;\n  --background-activated: transparent;\n  position: absolute;\n  top: 14px;\n  right: 0;\n  --box-shadow: none; }\n\n.quantity-number {\n  position: absolute;\n  top: 0px;\n  right: 14px;\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  --padding-top: 6px; }\n\n.card-store {\n  box-shadow: none;\n  margin: 0;\n  border-radius: 0;\n  background: white;\n  margin-bottom: 20px; }\n\n.time {\n  font-weight: 700;\n  color: black; }\n\n.phone {\n  font-weight: 700;\n  color: black; }\n\n.open {\n  --border-radius: 15px;\n  font-weight: 700;\n  font-size: 15px;\n  margin-top: 17px; }\n\n.title-store {\n  text-align: center;\n  position: absolute;\n  top: 50px;\n  margin-left: auto;\n  margin-right: auto;\n  left: 0;\n  right: 0;\n  color: white;\n  font-weight: 700;\n  font-size: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sb3JuYW1pY2hlbGxlL0Rvd25sb2Fkcy9idXlwaW4tYXBwLThmMjkwNWUwYzBkODlhYTIxMDZmMmRkY2FmZDVkY2U0NDJmMDZmODQvc3JjL2FwcC90YWIyL3RhYjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UscUJBQWEsRUFBQTs7QUFHZjtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxZQUFZO0VBQ2Qsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxTQUFTO0VBQ1QsZUFBZTtFQUNmLGlCQUFhO0VBQ2Isa0JBQWEsRUFBQTs7QUFHYjtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLHlCQUFhO0VBQ2IsbUNBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUTtFQUNSLGtCQUFhLEVBQUE7O0FBR2Y7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBYyxFQUFBOztBQUdoQjtFQUNFLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWSxFQUFBOztBQUdkO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVksRUFBQTs7QUFHZDtFQUNFLHFCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFFBQVE7RUFDUixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3JhbmdlLWJnIHtcbiAgYmFja2dyb3VuZDogI0ZENTQ0MDtcbn1cblxuLmJnIHtcbiAgLS1iYWNrZ3JvdW5kOiAjRkQ1NDQwO1xufVxuXG4ubG9nby1jYXJkIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbi5idG5CYWNre1xuICBjb2xvcjogd2hpdGU7XG5wb3NpdGlvbjogYWJzb2x1dGU7XG50b3A6IDIzcHg7XG5sZWZ0OiAwcHg7XG5mb250LXNpemU6IDI1cHg7XG4tLWJveC1zaGFkb3c6bm9uZTtcbi0tYmFja2dyb3VuZDogbm9uZTtcbn1cblxuLmxvZ28ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5jYXJ0LWJ0biB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTRweDtcbiAgcmlnaHQ6IDA7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLnF1YW50aXR5LW51bWJlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIHJpZ2h0OiAxNHB4O1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIC0tcGFkZGluZy10b3A6IDZweDtcbn1cblxuLmNhcmQtc3RvcmUge1xuICBib3gtc2hhZG93OiBub25lO1xuICBtYXJnaW46IDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4udGltZSB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnBob25lIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4ub3BlbiB7XG4gIC0tYm9yZGVyLXJhZGl1czogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtYXJnaW4tdG9wOiAxN3B4O1xufVxuXG4udGl0bGUtc3RvcmUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDIwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/tab2/tab2.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "./node_modules/@ionic-native/native-page-transitions/ngx/index.js");
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! parse */ "./node_modules/parse/index.js");
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(parse__WEBPACK_IMPORTED_MODULE_4__);





var parse = __webpack_require__(/*! parse */ "./node_modules/parse/index.js");
var Tab2Page = /** @class */ (function () {
    function Tab2Page(navigate, nativePageTransitions) {
        this.navigate = navigate;
        this.nativePageTransitions = nativePageTransitions;
        parse__WEBPACK_IMPORTED_MODULE_4__["Parse"].initialize("C0XMchZu6Y9XWNUK4lM1UHnnuXhC3dcdpa5fGYpO", "EdN4Xnln11to6pfyNaQ5HD05laenoYu04txYAcfo");
        parse__WEBPACK_IMPORTED_MODULE_4__["Parse"].serverURL = 'https://parseapi.back4app.com/';
    }
    Tab2Page.prototype.ngOnInit = function () {
        console.log(parse__WEBPACK_IMPORTED_MODULE_4__["Parse"].User.current().id);
        this.getStores();
    };
    Tab2Page.prototype.openPage = function () {
        var options = {
            duration: 300,
            iosdelay: 300
        };
        console.log(options);
        this.nativePageTransitions.fade(options);
        this.navigate.navigateRoot("/tabs/tabs/tab3");
    };
    Tab2Page.prototype.transitionBack = function () {
        var options = {
            duration: 300,
            iosdelay: 300
        };
        console.log(options);
        this.nativePageTransitions.fade(options);
        this.navigate.navigateRoot('tabs/tabs/tab1');
    };
    Tab2Page.prototype.cartOpen = function () {
        var options = {
            duration: 300,
            iosdelay: 300
        };
        console.log(options);
        this.nativePageTransitions.fade(options);
        this.navigate.navigateRoot("/tabs/tabs/tab5");
    };
    // createStore(){
    //   Parse.Cloud.run('createStore', {
    //     storeCategory: this.category,
    //     storeDescription: this.description,   
    //     storeName: this.name,  
    //     storePhone: this.phone, 
    //     storeHours: this.hours,     
    //     storeSubCategories: this.subCategories 
    //   }). then ((result) => {
    //     console.log("Store Added")
    //   }, (error) => {
    //     console.log(error);
    //   });
    // }
    Tab2Page.prototype.getStores = function () {
        parse__WEBPACK_IMPORTED_MODULE_4__["Parse"].Cloud.run('getStore', {
        // serviceId: this.storeId.id
        }).then(function (result) {
            console.log(result);
        }, function (error) {
            console.log(error);
        });
    };
    Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab2',
            template: __webpack_require__(/*! ./tab2.page.html */ "./src/app/tab2/tab2.page.html"),
            styles: [__webpack_require__(/*! ./tab2.page.scss */ "./src/app/tab2/tab2.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_3__["NativePageTransitions"]])
    ], Tab2Page);
    return Tab2Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module.js.map