(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["address-resume-address-resume-module"],{

/***/ "./src/app/address-resume/address-resume.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/address-resume/address-resume.module.ts ***!
  \*********************************************************/
/*! exports provided: AddressResumePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressResumePageModule", function() { return AddressResumePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _address_resume_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./address-resume.page */ "./src/app/address-resume/address-resume.page.ts");







var routes = [
    {
        path: '',
        component: _address_resume_page__WEBPACK_IMPORTED_MODULE_6__["AddressResumePage"]
    }
];
var AddressResumePageModule = /** @class */ (function () {
    function AddressResumePageModule() {
    }
    AddressResumePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_address_resume_page__WEBPACK_IMPORTED_MODULE_6__["AddressResumePage"]]
        })
    ], AddressResumePageModule);
    return AddressResumePageModule;
}());



/***/ }),

/***/ "./src/app/address-resume/address-resume.page.html":
/*!*********************************************************!*\
  !*** ./src/app/address-resume/address-resume.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-orange\">\n  <ion-card class=\"logo-card\">\n    <img class=\"logo\" src=\"assets/logo prueba.png\">\n\n    <ion-button style=\"--box-shadow: none;\" (click)=\"goBack()\" class=\"arrow-btn\">\n      <ion-icon class=\"arrow-icon\" ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\n    </ion-button>\n\n  </ion-card>\n\n</div>\n\n<ion-content>\n  <ion-card\n    style=\"box-shadow: none; border-radius: 0; border-bottom: 1px solid grey; margin-left: 0; margin-right: 0; padding-left: 10px; padding-right: 10px;\">\n    <p style=\"font-size: 13px; font-weight: 700;\">NOMBRE</p>\n    <p style=\"font-size: 13px; font-weight: 300px; color: black;\">Jane Doe</p>\n    <ion-button\n      style=\"--box-shadow: none; --background: transparent; --background-actvated: transparent; position: absolute; top: 0; right: 0;\">\n      <ion-icon style=\"color: #FD5440; width: 40px; height: 40px;\" ios=\"ios-help\" md=\"md-help\"></ion-icon>\n    </ion-button>\n  </ion-card>\n\n  <ion-card *ngFor=\"let adrs of address\"\n    style=\"box-shadow: none; border-radius: 0; border-bottom: 1px solid grey; margin-left: 0; margin-right: 0; padding-left: 10px; padding-right: 10px;\">\n    <p style=\"font-size: 13px; font-weight: 700;\">DIRECCIÓN COMPLETA</p>\n    <p style=\"font-size: 13px; font-weight: 300px; color: black;\">{{adrs.get(Address)}}</p>\n    <ion-button\n      style=\"--box-shadow: none; --background: transparent; --background-actvated: transparent; position: absolute; top: 0; right: 0;\">\n      <ion-icon style=\"color: #FD5440; width: 40px; height: 40px;\" ios=\"ios-help\" md=\"md-help\"></ion-icon>\n    </ion-button>\n  </ion-card>\n\n  <ion-card\n    style=\"box-shadow: none; border-radius: 0; border-bottom: 1px solid grey; margin-left: 0; margin-right: 0; padding-left: 10px; padding-right: 10px;\">\n   \n    <ion-textarea class=\"note-text\" placeholder=\"ADD NOTE\"></ion-textarea>\n  </ion-card>\n\n  <ion-button style=\"--box-shadow: none;\" class=\"next-btn\" (click)=\"openPage()\" expand=\"block\">NEXT</ion-button>\n</ion-content>"

/***/ }),

/***/ "./src/app/address-resume/address-resume.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/address-resume/address-resume.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-orange {\n  background: #FD5440; }\n\n.logo-card {\n  box-shadow: none;\n  padding-bottom: 0; }\n\n.logo {\n  width: 100px;\n  height: 80px;\n  -o-object-fit: contain;\n     object-fit: contain;\n  margin-left: auto;\n  margin-right: auto; }\n\n.arrow-icon {\n  color: white;\n  width: 25px;\n  height: 25px; }\n\n.arrow-btn {\n  --background: transparent;\n  --background-activated: transparent;\n  position: absolute;\n  top: 14px;\n  left: 0;\n  --box-shadow: none; }\n\n.next-btn {\n  --background: #FD5440;\n  --background-activated: #FD5440;\n  color: #FFC93A;\n  --color-activated: #FFC93A;\n  margin-left: 30px;\n  margin-right: 30px;\n  font-weight: 700;\n  font-size: 13px;\n  height: 50px;\n  --border-radius: 25px; }\n\n.note-text {\n  color: grey; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sb3JuYW1pY2hlbGxlL0Rvd25sb2Fkcy9idXlwaW4tYXBwLThmMjkwNWUwYzBkODlhYTIxMDZmMmRkY2FmZDVkY2U0NDJmMDZmODQvc3JjL2FwcC9hZGRyZXNzLXJlc3VtZS9hZGRyZXNzLXJlc3VtZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixzQkFBbUI7S0FBbkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHZDtFQUNFLHlCQUFhO0VBQ2IsbUNBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsT0FBTztFQUNQLGtCQUFhLEVBQUE7O0FBR2Y7RUFDRSxxQkFBYTtFQUNiLCtCQUF1QjtFQUN2QixjQUFjO0VBQ2QsMEJBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixZQUFZO0VBQ1oscUJBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYWRkcmVzcy1yZXN1bWUvYWRkcmVzcy1yZXN1bWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnLW9yYW5nZSB7XG4gIGJhY2tncm91bmQ6ICNGRDU0NDA7XG59XG5cbi5sb2dvLWNhcmQge1xuICBib3gtc2hhZG93OiBub25lO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cblxuLmxvZ28ge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogODBweDtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLmFycm93LWljb24ge1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG59XG5cbi5hcnJvdy1idG4ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE0cHg7XG4gIGxlZnQ6IDA7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLm5leHQtYnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiAjRkQ1NDQwO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjRkQ1NDQwO1xuICBjb2xvcjogI0ZGQzkzQTtcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6ICNGRkM5M0E7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG5cbi5ub3RlLXRleHQge1xuICBjb2xvcjogZ3JleTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/address-resume/address-resume.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/address-resume/address-resume.page.ts ***!
  \*******************************************************/
/*! exports provided: AddressResumePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressResumePage", function() { return AddressResumePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "./node_modules/@ionic-native/native-page-transitions/ngx/index.js");
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! parse */ "./node_modules/parse/index.js");
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(parse__WEBPACK_IMPORTED_MODULE_4__);






var parse = __webpack_require__(/*! parse */ "./node_modules/parse/index.js");
var AddressResumePage = /** @class */ (function () {
    function AddressResumePage(navigate, nativePageTransitions, alert) {
        this.navigate = navigate;
        this.nativePageTransitions = nativePageTransitions;
        this.alert = alert;
        parse__WEBPACK_IMPORTED_MODULE_4__["Parse"].initialize("C0XMchZu6Y9XWNUK4lM1UHnnuXhC3dcdpa5fGYpO", "EdN4Xnln11to6pfyNaQ5HD05laenoYu04txYAcfo");
        parse__WEBPACK_IMPORTED_MODULE_4__["Parse"].serverURL = 'https://parseapi.back4app.com/';
    }
    AddressResumePage.prototype.ngOnInit = function () {
        this.getAddress();
    };
    AddressResumePage.prototype.openPage = function () {
        var options = {
            duration: 300,
            iosdelay: 300
        };
        console.log(options);
        this.nativePageTransitions.fade(options);
        this.navigate.navigateRoot("/checkout");
    };
    AddressResumePage.prototype.goBack = function () {
        var options = {
            duration: 300,
            iosdelay: 300
        };
        console.log(options);
        this.nativePageTransitions.fade(options);
        this.navigate.navigateRoot("/shipping-address");
    };
    AddressResumePage.prototype.getAddress = function () {
        var _this = this;
        //end-point para añadir la direccion del usuario
        parse__WEBPACK_IMPORTED_MODULE_4__["Parse"].Cloud.run('getAddress', {
            userId: parse__WEBPACK_IMPORTED_MODULE_4__["Parse"].User.current().id,
        }).then(function (result) {
            console.log(result);
            _this.address = result;
        }, function (error) {
            console.log(error);
        });
    };
    AddressResumePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-address-resume',
            template: __webpack_require__(/*! ./address-resume.page.html */ "./src/app/address-resume/address-resume.page.html"),
            styles: [__webpack_require__(/*! ./address-resume.page.scss */ "./src/app/address-resume/address-resume.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_3__["NativePageTransitions"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], AddressResumePage);
    return AddressResumePage;
}());



/***/ })

}]);
//# sourceMappingURL=address-resume-address-resume-module.js.map