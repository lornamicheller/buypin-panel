(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/profile/profile.page.ts");







var routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]
    }
];
var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());



/***/ }),

/***/ "./src/app/profile/profile.page.html":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"bg-orange\">\n  <h2 style=\"color: white; font-weight: 700; font-size: 30px; margin-left: 30px; margin-top: 70px; font-family: 'Mukta', sans-serif;\">¡Hola!</h2>\n\n  <ion-button (click)= \"logOut()\" style=\"--box-shadow: none;\"  expand=\"block\" class=\"logout-btn\">\n    <img src=\"assets/logout.png\" width=\"35px\" height=\"35px\">\n  </ion-button>\n\n  <ion-card style=\"box-shadow: none;\">\n    <ion-button style=\"--box-shadow: none;\"  (click)=\"presentAlertConfirm()\" class=\"picture-btn\" expand=\"block\">\n      <img *ngIf=\"savedPhoto == null\" class=\"circle-img\" src=\"assets/camarabuypin.png\">\n      <img  *ngIf=\"savedPhoto != null\" class=\"circle-img\" src=\"{{savedPhoto.url()}}\">\n    </ion-button>\n    <h6 style=\"text-align: center; font-weight: 300; color: white; font-size: 15px; font-family: 'Mukta', sans-serif;\">Profile Photo</h6>\n  </ion-card>\n\n  <ion-button (click)=\"openOrderHistory()\" style=\"--box-shadow: none;\"  expand=\"full\" class=\"first-btn\">\n    <ion-card class=\"order-history\">\n      <ion-grid style=\"margin: 0; padding: 0;\">\n        <ion-row>\n          <ion-col size=\"2\">\n            <img class=\"icon\" src=\"assets/orderhistory.png\">\n          </ion-col>\n          <ion-col size=\"8\" class=\"order-title\">\n            Historial de ordenes\n          </ion-col>\n          <ion-col size=\"2\">\n            <ion-icon class=\"arrow-btn\" ios=\"ios-arrow-forward\" md=\"md-arrow-forward\"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n  </ion-button>\n\n  <!-- <ion-button style=\"--box-shadow: none;\" expand=\"full\" class=\"second-btn\">\n    <ion-card class=\"order-history\">\n      <ion-grid style=\"margin: 0; padding: 0;\">\n        <ion-row>\n          <ion-col size=\"2\">\n            <img class=\"icon\" src=\"assets/shipinaddress.png\">\n          </ion-col>\n          <ion-col size=\"8\" class=\"order-title\">\n            Dirección\n          </ion-col>\n          <ion-col size=\"2\">\n            <ion-icon class=\"arrow-btn\" ios=\"ios-arrow-forward\" md=\"md-arrow-forward\"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n  </ion-button> -->\n\n  <ion-button (click)=\"openPayment()\" style=\"--box-shadow: none;\"  expand=\"full\" class=\"second-btn\">\n    <ion-card class=\"order-history\">\n      <ion-grid style=\"margin: 0; padding: 0;\">\n        <ion-row>\n          <ion-col size=\"2\">\n            <img class=\"icon\" src=\"assets/paytment.png\">\n          </ion-col>\n          <ion-col size=\"8\" class=\"order-title\">\n            Método de pago\n          </ion-col>\n          <ion-col size=\"2\">\n            <ion-icon class=\"arrow-btn\" ios=\"ios-arrow-forward\" md=\"md-arrow-forward\"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n  </ion-button>\n\n  <ion-button style=\"--box-shadow: none;\"  expand=\"full\" class=\"second-btn\">\n    <ion-card class=\"order-history\">\n      <ion-grid style=\"margin: 0; padding: 0;\">\n        <ion-row>\n          <ion-col size=\"2\">\n            <img class=\"icon\" src=\"assets/terms&priva.png\">\n          </ion-col>\n          <ion-col size=\"8\" class=\"order-title\">\n            Terminos y Privacidad\n          </ion-col>\n          <ion-col size=\"2\">\n            <ion-icon class=\"arrow-btn\" ios=\"ios-arrow-forward\" md=\"md-arrow-forward\"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n  </ion-button>\n\n  <ion-button (click)=\"openAccount()\" style=\"--box-shadow: none;\"  expand=\"full\" class=\"second-btn\">\n    <ion-card class=\"order-history\">\n      <ion-grid style=\"margin: 0; padding: 0;\">\n        <ion-row>\n          <ion-col size=\"2\">\n            <img class=\"icon\" src=\"assets/accountsetting.png\">\n          </ion-col>\n          <ion-col size=\"8\" class=\"order-title\">\n            Cuenta\n          </ion-col>\n          <ion-col size=\"2\">\n            <ion-icon class=\"arrow-btn\" ios=\"ios-arrow-forward\" md=\"md-arrow-forward\"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n  </ion-button>\n\n  <!-- <ion-card style=\"box-shadow: none;\">\n    <ion-button class=\"logout-btn\" expand=\"block\">LOGOUT</ion-button>\n  </ion-card> -->\n\n  <!-- <p class=\"version-type\">Version 11.5 (470)</p> -->\n</ion-content>"

/***/ }),

/***/ "./src/app/profile/profile.page.scss":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Mukta:300,400,500,600,700&display=swap\");\n.bg-orange {\n  --background: #FD5440; }\n.picture-btn {\n  width: 100px;\n  height: 100px;\n  --background: #565656;\n  --background-activated: #565656;\n  --border-radius: 50%;\n  margin-left: auto;\n  margin-right: auto; }\n.circle-img {\n  width: 80px;\n  height: 80px;\n  -o-object-fit: contain;\n     object-fit: contain; }\n.first-btn {\n  --background: transparent;\n  --background-activated: transparent;\n  margin: 0;\n  padding: 0;\n  height: auto;\n  border-top: 1px solid white;\n  border-bottom: 1px solid white;\n  padding-top: 10px;\n  padding-bottom: 10px; }\n.second-btn {\n  --background: transparent;\n  --background-activated: transparent;\n  margin: 0;\n  padding: 0;\n  height: auto;\n  border-bottom: 1px solid white;\n  padding-top: 10px;\n  padding-bottom: 10px; }\n.order-history {\n  padding: 0;\n  margin: 0;\n  box-shadow: none; }\n.order-title {\n  color: white;\n  margin-top: 15px;\n  font-weight: 700;\n  font-size: 15px;\n  font-family: 'Mukta', sans-serif; }\n.arrow-btn {\n  color: #FFC93A;\n  width: 20px;\n  height: 20px;\n  margin-top: 13px; }\n.logout-btn {\n  position: absolute;\n  top: 63px;\n  right: 20px;\n  --background: transparent;\n  --background-activated: transparent; }\n.version-type {\n  font-size: 10px;\n  color: white;\n  text-align: center;\n  margin: 0;\n  padding: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sb3JuYW1pY2hlbGxlL0Rvd25sb2Fkcy9idXlwaW4tYXBwLThmMjkwNWUwYzBkODlhYTIxMDZmMmRkY2FmZDVkY2U0NDJmMDZmODQvc3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZGQUFZO0FBSVo7RUFDRSxxQkFBYSxFQUFBO0FBR2Y7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHFCQUFhO0VBQ2IsK0JBQXVCO0VBQ3ZCLG9CQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7QUFHcEI7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFtQjtLQUFuQixtQkFBbUIsRUFBQTtBQUdyQjtFQUNFLHlCQUFhO0VBQ2IsbUNBQXVCO0VBQ3ZCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQiw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLG9CQUFvQixFQUFBO0FBR3RCO0VBQ0UseUJBQWE7RUFDYixtQ0FBdUI7RUFDdkIsU0FBUztFQUNULFVBQVU7RUFDVixZQUFZO0VBQ1osOEJBQThCO0VBQzlCLGlCQUFpQjtFQUNqQixvQkFBb0IsRUFBQTtBQUd0QjtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1QsZ0JBQWdCLEVBQUE7QUFHbEI7RUFDRSxZQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQ0FBZ0MsRUFBQTtBQUdsQztFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQixFQUFBO0FBR2xCO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gseUJBQWE7RUFDYixtQ0FBdUIsRUFBQTtBQUl6QjtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1NdWt0YTozMDAsNDAwLDUwMCw2MDAsNzAwJmRpc3BsYXk9c3dhcCcpO1xuXG4vLyBmb250LWZhbWlseTogJ011a3RhJywgc2Fucy1zZXJpZjtcblxuLmJnLW9yYW5nZSB7XG4gIC0tYmFja2dyb3VuZDogI0ZENTQ0MDtcbn1cblxuLnBpY3R1cmUtYnRuIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICAtLWJhY2tncm91bmQ6ICM1NjU2NTY7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICM1NjU2NTY7XG4gIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4uY2lyY2xlLWltZyB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5cbi5maXJzdC1idG4ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbi5zZWNvbmQtYnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLm9yZGVyLWhpc3Rvcnkge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5vcmRlci10aXRsZSB7XG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC1mYW1pbHk6ICdNdWt0YScsIHNhbnMtc2VyaWY7XG59XG5cbi5hcnJvdy1idG4ge1xuICBjb2xvcjogI0ZGQzkzQTtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luLXRvcDogMTNweDtcbn1cblxuLmxvZ291dC1idG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNjNweDtcbiAgcmlnaHQ6IDIwcHg7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xuICBcbn1cblxuLnZlcnNpb24tdHlwZSB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/profile/profile.page.ts":
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "./node_modules/@ionic-native/native-page-transitions/ngx/index.js");
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! parse */ "./node_modules/parse/index.js");
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(parse__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _app_buypinprovider_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../app/buypinprovider.service */ "./src/app/buypinprovider.service.ts");








var parse = __webpack_require__(/*! parse */ "./node_modules/parse/index.js");
var ProfilePage = /** @class */ (function () {
    function ProfilePage(camera, navigate, nativePageTransitions, provider, alert) {
        this.camera = camera;
        this.navigate = navigate;
        this.nativePageTransitions = nativePageTransitions;
        this.provider = provider;
        this.alert = alert;
        parse__WEBPACK_IMPORTED_MODULE_5__["Parse"].initialize("C0XMchZu6Y9XWNUK4lM1UHnnuXhC3dcdpa5fGYpO", "EdN4Xnln11to6pfyNaQ5HD05laenoYu04txYAcfo");
        parse__WEBPACK_IMPORTED_MODULE_5__["Parse"].serverURL = 'https://parseapi.back4app.com/';
    }
    ProfilePage.prototype.ngOnInit = function () {
        this.user = parse__WEBPACK_IMPORTED_MODULE_5__["Parse"].User.current();
    };
    ProfilePage.prototype.openCamera = function () {
        var _this = this;
        var options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.picture = 'data:image/jpeg;base64,' + imageData;
            var base64Image = _this.picture;
            var name = "photo.jpeg";
            var parseFile = new parse__WEBPACK_IMPORTED_MODULE_5__["Parse"].File(name, {
                base64: base64Image
            }); //convierte la foto a base64
            parseFile.save().then(function (savedFile) {
                console.log('file saved:' + savedFile);
                _this.savedPhoto = _this.picture;
                _this.user.set('profilePic', savedFile);
                _this.user.save().then(function (result) {
                    console.log(result);
                    console.log("photo saved");
                });
            }, function (err) {
                console.log('error grabando file: ' + err);
            });
        }, function (err) {
            console.log('error de camara' + err);
            alert(err);
        });
    };
    ProfilePage.prototype.openLibrary = function () {
        var _this = this;
        var options = {
            quality: 50,
            targetWidth: 900,
            targetHeight: 600,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            saveToPhotoAlbum: false,
            allowEdit: true
        };
        var self = this;
        this.camera.getPicture(options).then(function (imageData) {
            self.picture = 'data:image/jpeg;base64,' + imageData;
            self.changeInformation.set('profilePic', self.picture);
            var base64Image = self.picture;
            var name = "photo.jpeg";
            var parseFile = new parse__WEBPACK_IMPORTED_MODULE_5__["Parse"].File(name, {
                base64: base64Image
            }); //convierte la foto a base64
            parseFile.save().then(function (savedFile) {
                console.log('file saved:' + savedFile);
                self.savedPhoto = self.picture;
                _this.user.save().then(function (result) {
                    console.log(result);
                    console.log("photo saved");
                });
            }, function (err) {
                console.log('error grabando file: ' + err);
                alert(err);
            });
        }, function (err) {
            console.log('error de camara' + err);
            alert(err);
        });
    };
    ProfilePage.prototype.presentAlertConfirm = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alert.create({
                            header: 'Profile Picture',
                            subHeader: 'Choose an option',
                            buttons: [
                                {
                                    text: 'Camera',
                                    role: 'camera',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        _this.openCamera();
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'Gallery',
                                    handler: function () {
                                        _this.openLibrary();
                                        console.log('Confirm Okay');
                                    }
                                },
                                {
                                    text: 'Cancel',
                                    handler: function () {
                                        console.log('Confirm Okay');
                                    }
                                }
                            ]
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
    ProfilePage.prototype.logOut = function () {
        var _this = this;
        parse__WEBPACK_IMPORTED_MODULE_5__["Parse"].User.logOut().then(function (resp) {
            console.log('Logged out successfully', resp);
            _this.openPage();
        }, function (err) {
            console.log('Error logging out', err);
        });
    };
    ProfilePage.prototype.openPage = function () {
        var options = {
            direction: 'left',
            duration: 400,
            slowdownfactor: -1,
            slidePixels: 20,
            iosdelay: 100
        };
        console.log(options);
        this.nativePageTransitions.slide(options);
        this.navigate.navigateRoot("/login");
    };
    ProfilePage.prototype.openOrderHistory = function () {
        var options = {
            duration: 300,
            iosdelay: 300
        };
        console.log(options);
        this.nativePageTransitions.fade(options);
        this.navigate.navigateRoot("/history-order");
    };
    ProfilePage.prototype.openPayment = function () {
        var options = {
            duration: 300,
            iosdelay: 300
        };
        console.log(options);
        this.nativePageTransitions.fade(options);
        this.navigate.navigateRoot("/payment-method");
    };
    ProfilePage.prototype.openAccount = function () {
        var options = {
            duration: 300,
            iosdelay: 300
        };
        console.log(options);
        this.nativePageTransitions.fade(options);
        this.navigate.navigateRoot("/account");
    };
    ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.page.html */ "./src/app/profile/profile.page.html"),
            styles: [__webpack_require__(/*! ./profile.page.scss */ "./src/app/profile/profile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_4__["NativePageTransitions"], _app_buypinprovider_service__WEBPACK_IMPORTED_MODULE_6__["BuypinproviderService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
    ], ProfilePage);
    return ProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=profile-profile-module.js.map