(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./src/app/register/register.module.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");







var routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }
];
var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/register/register.page.html":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"bg-orange\">\n\n  <ion-card style=\"box-shadow: none;\">\n    <ion-button style=\"--box-shadow: none;\" (click)=\"openCamera()\" class=\"picture-btn\" expand=\"block\">\n      <img class=\"circle-img\" src=\"assets/camarabuypin.png\">\n    </ion-button>\n    <h6 style=\"text-align: center; font-weight: 300; color: white; font-size: 15px;\">Profile Photo</h6>\n\n    <ion-button style=\"--box-shadow: none;\"  (click)=\"goBack()\" class=\"arrow-btn\">\n      <ion-icon class=\"arrow-icon\" ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\n    </ion-button>\n  </ion-card>\n\n  <ion-card  style=\"box-shadow: none; margin-top: 60px; padding: 10px;\">\n    <h5  class=\"title-input\">FULL NAME</h5>\n    <ion-input [(ngModel)]=\"fullName\" type=\"text\" class=\"name\" placeholder=\"Full Name\"></ion-input>\n    <h5  class=\"title-input\">EMAIL</h5>\n    <ion-input [(ngModel)]=\"email\" type=\"text\" class=\"name\" placeholder=\"Email Address\"></ion-input>\n    <h5  class=\"title-input\">PASSWORD</h5>\n    <ion-input [(ngModel)]=\"password\" type=\"password\" class=\"name\" placeholder=\"Password\"></ion-input>\n    <h5  class=\"title-input\">COMFIRM PASSWORD</h5>\n    <ion-input [(ngModel)]=\"confirmPass\" type=\"password\" class=\"name\" placeholder=\"Password\"></ion-input>\n  </ion-card>\n\n  <ion-card style=\"box-shadow: none;\">\n    <ion-button style=\"--box-shadow: none;\"  (click)=\"signUserUp()\" class=\"create-btn\" expand=\"block\">CREATE ACCOUNT</ion-button>\n    <ion-button style=\"--box-shadow: none;\"  (click)=\"openPage2()\" class=\"already-btn\" expand=\"full\">I'm already a member</ion-button>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/register/register.page.scss":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-orange {\n  --background: #FD5440; }\n\n.picture-btn {\n  width: 100px;\n  height: 100px;\n  --background: #565656;\n  --background-activated: #565656;\n  --border-radius: 50%;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 30px; }\n\n.arrow-icon {\n  color: white;\n  width: 25px;\n  height: 25px; }\n\n.arrow-btn {\n  --background: transparent;\n  --background-activated: transparent;\n  position: absolute;\n  top: 25px;\n  left: 0;\n  --box-shadow: none; }\n\n.circle-img {\n  width: 80px;\n  height: 80px;\n  -o-object-fit: contain;\n     object-fit: contain; }\n\n.title-input {\n  color: white;\n  margin-top: 20px;\n  font-weight: 700;\n  font-size: 13px;\n  padding-bottom: 5px;\n  letter-spacing: 1px; }\n\n.name {\n  margin-left: auto;\n  margin-right: auto;\n  border: 1px solid white;\n  --padding-start: 5px;\n  --placeholder-opacity: 10;\n  --color: rgb(255, 255, 255); }\n\n.checkbox-color {\n  margin-top: 40px;\n  margin-right: 10px;\n  --background: #ffc93a; }\n\n.create-btn {\n  --background: #565656;\n  --background-activated: #565656;\n  --border-radius: 25px;\n  font-size: 13px;\n  font-weight: 700;\n  height: 50px;\n  --box-shadow: none; }\n\n.already-btn {\n  border: none;\n  --background: transparent;\n  --background-activated: transparent;\n  border-bottom: 1px solid white;\n  width: 200px;\n  margin-left: auto;\n  margin-right: auto;\n  --box-shadow: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sb3JuYW1pY2hlbGxlL0Rvd25sb2Fkcy9idXlwaW4tYXBwLThmMjkwNWUwYzBkODlhYTIxMDZmMmRkY2FmZDVkY2U0NDJmMDZmODQvc3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBYSxFQUFBOztBQUdmO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixxQkFBYTtFQUNiLCtCQUF1QjtFQUN2QixvQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHZDtFQUNFLHlCQUFhO0VBQ2IsbUNBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsT0FBTztFQUNQLGtCQUFhLEVBQUE7O0FBR2Y7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFtQjtLQUFuQixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLG9CQUFnQjtFQUNoQix5QkFBc0I7RUFDdEIsMkJBQVEsRUFBQTs7QUFHVjtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIscUJBQWEsRUFBQTs7QUFHZjtFQUNFLHFCQUFhO0VBQ2IsK0JBQXVCO0VBQ3ZCLHFCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixrQkFBYSxFQUFBOztBQUlmO0VBQ0UsWUFBWTtFQUNaLHlCQUFhO0VBQ2IsbUNBQXVCO0VBQ3ZCLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnLW9yYW5nZSB7XG4gIC0tYmFja2dyb3VuZDogI0ZENTQ0MDtcbn1cblxuLnBpY3R1cmUtYnRuIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICAtLWJhY2tncm91bmQ6ICM1NjU2NTY7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICM1NjU2NTY7XG4gIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4uYXJyb3ctaWNvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbn1cblxuLmFycm93LWJ0biB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjVweDtcbiAgbGVmdDogMDtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xufVxuXG4uY2lyY2xlLWltZyB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5cbi50aXRsZS1pbnB1dCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuXG4ubmFtZSB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAtLXBhZGRpbmctc3RhcnQ6IDVweDtcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxMDtcbiAgLS1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xufVxuXG4uY2hlY2tib3gtY29sb3Ige1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIC0tYmFja2dyb3VuZDogI2ZmYzkzYTtcbn1cblxuLmNyZWF0ZS1idG4ge1xuICAtLWJhY2tncm91bmQ6ICM1NjU2NTY7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICM1NjU2NTY7XG4gIC0tYm9yZGVyLXJhZGl1czogMjVweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBoZWlnaHQ6IDUwcHg7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcblxufVxuXG4uYWxyZWFkeS1idG4ge1xuICBib3JkZXI6IG5vbmU7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XG4gIHdpZHRoOiAyMDBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgLS1ib3gtc2hhZG93OiBub25lO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/register/register.page.ts":
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "./node_modules/@ionic-native/native-page-transitions/ngx/index.js");
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! parse */ "./node_modules/parse/index.js");
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(parse__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _app_buypinprovider_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../app/buypinprovider.service */ "./src/app/buypinprovider.service.ts");








var parse = __webpack_require__(/*! parse */ "./node_modules/parse/index.js");
var RegisterPage = /** @class */ (function () {
    function RegisterPage(camera, alert, navigate, nativePageTransitions, provider) {
        this.camera = camera;
        this.alert = alert;
        this.navigate = navigate;
        this.nativePageTransitions = nativePageTransitions;
        this.provider = provider;
        this.role = 'C';
        parse__WEBPACK_IMPORTED_MODULE_5__["Parse"].initialize("C0XMchZu6Y9XWNUK4lM1UHnnuXhC3dcdpa5fGYpO", "EdN4Xnln11to6pfyNaQ5HD05laenoYu04txYAcfo");
        parse__WEBPACK_IMPORTED_MODULE_5__["Parse"].serverURL = 'https://parseapi.back4app.com/';
    }
    RegisterPage.prototype.ngOnInit = function () {
    };
    RegisterPage.prototype.openCamera = function () {
        var _this = this;
        var options = {
            quality: 150,
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
                _this.changeInformation.set("petImage", savedFile);
                _this.changeInformation.save().then(function (result) {
                    console.log(result);
                    // this.savePhoto();
                });
                _this.provider.photo = savedFile; //foto tomada
            }, function (err) {
                console.log('error grabando file: ' + err);
            });
        }, function (err) {
            console.log('error de camara' + err);
            alert(err);
        });
    };
    RegisterPage.prototype.openLibrary = function () {
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
            self.changeInformation.set("petImage", self.picture);
            var base64Image = self.picture;
            var name = "photo.jpeg";
            var parseFile = new parse__WEBPACK_IMPORTED_MODULE_5__["Parse"].File(name, {
                base64: base64Image
            }); //convierte la foto a base64
            parseFile.save().then(function (savedFile) {
                console.log('file saved:' + savedFile);
                self.savedPhoto = self.picture;
                self.photo = savedFile;
                _this.changeInformation.set("petImage", savedFile);
                _this.changeInformation.save().then(function (result) {
                    console.log("SAVEDD LIBRARY");
                    // this.savePhoto();
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
    RegisterPage.prototype.openPage = function () {
        var options = {
            duration: 300,
            iosdelay: 300
        };
        console.log(options);
        this.nativePageTransitions.fade(options);
        this.navigate.navigateRoot("/location");
    };
    RegisterPage.prototype.openPage2 = function () {
        var options = {
            duration: 300,
            iosdelay: 300
        };
        console.log(options);
        this.nativePageTransitions.fade(options);
        this.navigate.navigateRoot("/login");
    };
    RegisterPage.prototype.goBack = function () {
        var options = {
            duration: 300,
            iosdelay: 300
        };
        console.log(options);
        this.nativePageTransitions.fade(options);
        this.navigate.navigateRoot("/login");
    };
    RegisterPage.prototype.signUserUp = function () {
        var _this = this;
        console.log(this.fullName);
        console.log(this.email);
        console.log(this.password);
        console.log(this.confirmPass);
        var user = new parse__WEBPACK_IMPORTED_MODULE_5__["Parse"].User();
        if (this.password !== this.confirmPass) {
            this.notEqual();
        }
        else if (this.fullName === null || this.email === null || this.password === null) {
            this.empty();
        }
        else {
            user.set('fullName', this.fullName);
            user.set('email', this.email);
            user.set('password', this.password);
            user.set('username', this.email);
            user.set('role', this.role);
            user.signUp().then(function (user) {
                console.log("User logged in", user);
                _this.openPage();
            }).catch(function (error) {
                console.log(error);
                return false;
            });
            return true;
        }
    };
    RegisterPage.prototype.empty = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alert.create({
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
    RegisterPage.prototype.notEqual = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alert.create({
                            header: '¡ALERTA!',
                            message: 'Las contraseñas no coinciden',
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
    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.page.html */ "./src/app/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/register/register.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_4__["NativePageTransitions"],
            _app_buypinprovider_service__WEBPACK_IMPORTED_MODULE_6__["BuypinproviderService"]])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=register-register-module.js.map