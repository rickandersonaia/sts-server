webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/admin/accounts/accounts.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  accounts works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/admin/accounts/accounts.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/accounts/accounts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AccountsComponent = (function () {
    function AccountsComponent() {
    }
    AccountsComponent.prototype.ngOnInit = function () {
    };
    AccountsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-accounts',
            template: __webpack_require__("../../../../../src/app/admin/accounts/accounts.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/accounts/accounts.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AccountsComponent);
    return AccountsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/useredit/useredit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" fxLayout=\"column\" fxLayoutGap=\"10px\">\n  <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\" fxLayout.xs=\"column\">\n    <div fxFlex=\"50\" fxFlex.xs=\"100\" class=\"user-form-wrapper\">\n      <div class=\"form-width\">\n        <h1>Edit User</h1>\n        <div *ngIf=\"user\" ngClass.xs=\"fxClass-xs\">\n          <form novalidate [formGroup]=\"editUserForm\" (ngSubmit)=\"onSubmit()\">\n            <p fxLayout=\"column\">\n              <mat-form-field>\n                <input matInput formControlName=\"username\" placeholder=\"Username\" type=\"text\">\n              </mat-form-field>\n              <mat-form-field>\n                <input matInput formControlName=\"email\" placeholder=\"Email\" type=\"email\" email>\n              </mat-form-field>\n              <mat-form-field>\n                <input matInput formControlName=\"password\" placeholder=\"Password\" type=\"password\">\n              </mat-form-field>\n              <mat-form-field>\n                <input matInput formControlName=\"displayname\" placeholder=\"Display Name\" type=\"text\">\n              </mat-form-field>\n\n              <label>Choose an Avatar: </label>\n              <mat-radio-group class=\"radio-group\" formControlName=\"avatar\">\n                <mat-radio-button *ngFor=\"let avatar of avatars\" value=\"{{avatar.value}}\">\n                  <img src=\"{{ AvatarURL + avatar.image}}\" height=\"64px\" width=\"64px\">\n                </mat-radio-button>\n              </mat-radio-group>\n\n              <mat-form-field>\n                <mat-select placeholder=\"Sets purchased\" formControlName=\"setspurchased\">\n                  <mat-option *ngFor=\"let option of options\" [value]=\"option.value\">\n                    {{ option.label }}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n              <mat-slide-toggle formControlName=\"istutor\">\n                This user is a tutor\n              </mat-slide-toggle>\n              <mat-slide-toggle formControlName=\"isadmin\">\n                This user is an admin\n              </mat-slide-toggle>\n              <mat-form-field>\n                <input matInput formControlName=\"parentid\" placeholder=\"Parent Id\" type=\"text\">\n              </mat-form-field>\n            </p>\n            <button mat-raised-button color=\"primary\">Submit</button>\n          </form>\n        </div>\n      </div>\n    </div>\n    <div fxFlex=\"50\" fxFlex.xs=\"100\" class=\"user-card-wrapper\" ngClass.xs=\"\">\n    <app-usercard  [user]=\"this.user\" [edit]=\"false\"></app-usercard>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/admin/useredit/useredit.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/useredit/useredit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsereditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_userdatamodel__ = __webpack_require__("../../../../../src/app/shared/userdatamodel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var UsereditComponent = (function () {
    function UsereditComponent(fb, userService, location, route, BaseURL, ImageURL, AudioURL, AvatarURL) {
        this.fb = fb;
        this.userService = userService;
        this.location = location;
        this.route = route;
        this.BaseURL = BaseURL;
        this.ImageURL = ImageURL;
        this.AudioURL = AudioURL;
        this.AvatarURL = AvatarURL;
        this.options = __WEBPACK_IMPORTED_MODULE_4__shared_userdatamodel__["c" /* setsPurchasedOptions */];
        this.avatars = __WEBPACK_IMPORTED_MODULE_4__shared_userdatamodel__["b" /* allAvatars */];
        this.createForm();
    }
    UsereditComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.params['id'];
        this.getFormData(id);
    };
    UsereditComponent.prototype.getFormData = function (id) {
        var _this = this;
        this.userService.getUserById(id)
            .subscribe(function (user) {
            _this.exusername = user.username ? user.username : null;
            _this.exemail = user.email ? user.email : null;
            _this.expassword = user.password ? user.password : null;
            _this.exdisplayname = user.displayName ? user.displayName : null;
            _this.exavatar = user.avatar ? user.avatar : null;
            _this.existutor = user.isTutor ? user.isTutor : null;
            _this.exisadmin = user.isAdmin ? user.isAdmin : null;
            _this.exparentid = user.parentId ? user.parentId : null;
            _this.exsetspurchased = user.setsPurchased ? user.setsPurchased : null;
            _this.user = user;
            _this.createForm();
        });
    };
    UsereditComponent.prototype.goBack = function () {
        this.location.back();
    };
    UsereditComponent.prototype.createForm = function () {
        this.editUserForm = this.fb.group({
            username: this.exusername,
            email: this.exemail,
            password: this.expassword,
            displayname: this.exdisplayname,
            avatar: this.exavatar,
            istutor: this.existutor,
            isadmin: this.exisadmin,
            parentid: this.exparentid,
            setspurchased: this.exsetspurchased
        });
    };
    UsereditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.userService.editUser(this.user._id, this.editUserForm.value)
            .subscribe(function (user) {
            console.log(user);
            _this.getFormData(_this.user._id);
        });
    };
    UsereditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-useredit',
            template: __webpack_require__("../../../../../src/app/admin/useredit/useredit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/useredit/useredit.component.scss")]
        }),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])('BaseURL')),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])('ImageURL')),
        __param(6, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])('AudioURL')),
        __param(7, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])('AvatarURL')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], Object, Object, Object, Object])
    ], UsereditComponent);
    return UsereditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/usernewform/newuserform.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" fxLayout=\"column\" fxLayoutGap=\"10px\">\r\n  <div class=\"form-width\">\r\n\r\n    <h1>Add new User</h1>\r\n    <form novalidate [formGroup]=\"newUserForm\" (ngSubmit)=\"onSubmit()\">\r\n      <p fxLayout=\"column\">\r\n        <mat-form-field>\r\n          <input matInput formControlName=\"username\" placeholder=\"Username\" type=\"text\">\r\n          <mat-error [hidden]=\"!(formErrors.username)\">{{formErrors.username}}</mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <input matInput formControlName=\"email\" placeholder=\"Email\" type=\"email\" email>\r\n          <mat-error [hidden]=\"!(formErrors.email)\">{{formErrors.email}}</mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <input matInput formControlName=\"password\" placeholder=\"Password\" type=\"password\">\r\n          <mat-error [hidden]=\"!(formErrors.password)\">{{formErrors.password}}</mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <input matInput formControlName=\"displayName\" placeholder=\"Display Name\" type=\"text\">\r\n          <mat-error [hidden]=\"!(formErrors.displayName)\">{{formErrors.displayName}}</mat-error>\r\n        </mat-form-field>\r\n\r\n        <label>Choose an Avatar: </label>\r\n        <mat-radio-group class=\"radio-group\" formControlName=\"avatar\">\r\n          <mat-radio-button *ngFor=\"let avatar of avatars\" value=\"{{avatar.value}}\">\r\n            <img src=\"{{ AvatarURL + avatar.image}}\" height=\"64px\" width=\"64px\">\r\n          </mat-radio-button>\r\n        </mat-radio-group>\r\n\r\n        <mat-form-field>\r\n          <mat-select placeholder=\"Sets purchased\" formControlName=\"setsPurchased\">\r\n            <mat-option *ngFor=\"let option of options\" [value]=\"option.value\">\r\n              {{ option.label }}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        <mat-slide-toggle formControlName=\"isTutor\">\r\n          This user is a tutor\r\n        </mat-slide-toggle>\r\n        <mat-slide-toggle formControlName=\"isAdmin\">\r\n          This user is an admin\r\n        </mat-slide-toggle>\r\n        <mat-form-field>\r\n          <input matInput formControlName=\"parentId\" placeholder=\"Parent Id\" type=\"text\">\r\n        </mat-form-field>\r\n      </p>\r\n      <button mat-raised-button color=\"primary\">Submit</button>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/admin/usernewform/newuserform.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/usernewform/newuserform.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewUserFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_userdatamodel__ = __webpack_require__("../../../../../src/app/shared/userdatamodel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var NewUserFormComponent = (function () {
    function NewUserFormComponent(fb, userService, location, BaseURL, ImageURL, AudioURL, AvatarURL) {
        this.fb = fb;
        this.userService = userService;
        this.location = location;
        this.BaseURL = BaseURL;
        this.ImageURL = ImageURL;
        this.AudioURL = AudioURL;
        this.AvatarURL = AvatarURL;
        this.options = __WEBPACK_IMPORTED_MODULE_2__shared_userdatamodel__["c" /* setsPurchasedOptions */];
        this.avatars = __WEBPACK_IMPORTED_MODULE_2__shared_userdatamodel__["b" /* allAvatars */];
        this.formErrors = {
            username: '',
            email: '',
            password: '',
            displayName: ''
        };
        this.validationMessages = {
            'username': {
                'required': 'Username is required',
                'minlength': 'Username must be at least 6 characters long',
                'maxlength': 'Username must be less than 26 characters long'
            },
            'email': {
                'required': 'Email is required',
                'email': 'Email must be valid email address'
            },
            'password': {
                'required': 'Password is required',
                'minlength': 'Password must be at least 8 characters long',
                'maxlength': 'Password must be less than 26 characters long'
            },
            'displayName': {
                'required': 'Display Name is required',
                'minlength': 'Display name must be at least 2 characters long',
                'maxlength': 'Display name must be less than 26 characters long'
            }
        };
    }
    NewUserFormComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    NewUserFormComponent.prototype.createForm = function () {
        var _this = this;
        this.newUserForm = this.fb.group({
            username: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].maxLength(25)]],
            email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].email]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].maxLength(25)]],
            displayName: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].maxLength(25)]],
            avatar: '',
            isTutor: false,
            isAdmin: false,
            parentId: [{ value: '', disabled: true }],
            setsPurchased: [],
        });
        this.newUserForm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged(); // reset form validation messages
    };
    NewUserFormComponent.prototype.onValueChanged = function (data) {
        if (!this.newUserForm) {
            return;
        }
        var form = this.newUserForm;
        for (var field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    NewUserFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.userService.addUser(this.newUserForm.value)
            .subscribe(function (user) {
            console.log(user);
            _this.user = user;
        });
        this.newUserForm.reset();
    };
    NewUserFormComponent.prototype.goBack = function () {
        this.location.back();
    };
    NewUserFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-newuserform',
            template: __webpack_require__("../../../../../src/app/admin/usernewform/newuserform.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/usernewform/newuserform.component.scss")]
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])('BaseURL')),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])('ImageURL')),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])('AudioURL')),
        __param(6, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])('AvatarURL')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */], Object, Object, Object, Object])
    ], NewUserFormComponent);
    return NewUserFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-width\" fxLayout=\"column\" fxLayoutGap=\"10px\">\n  <mat-list fxLayoutWrap fxLayout=\"row\"  *ngIf=\"users\">\n    <mat-list-item *ngFor=\"let user of users\" [routerLink]=\"['/users/edit', user._id]\"\n                   fxFlex.lg=\"25\" fxFlex.md=\"33\"\n                   fxFlex.sm=\"50\" fxFlex.xs=\"100\">\n      <img matListAvatar *ngIf=\"user.avatar\" src=\"{{AvatarURL + user.avatar}}\" alt=\"{{user.displayName}}\">\n      <img matListAvatar *ngIf=\"!user.avatar\" src=\"{{AvatarURL + generic.jpg}}\" alt=\"{{user.displayName}}\">\n      <p matLine><b>{{user.username}}</b></p>\n      <p matLine>display name: {{user.displayName}}</p>\n    </mat-list-item>\n  </mat-list>\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    <button class=\"newcard\" mat-raised-button\n            [routerLink]=\"['/users/new']\">Add New User</button>\n  </div>\n  <div [hidden]=\"users\">\n    <mat-progress-spinner></mat-progress-spinner>\n    <h4>Loading - Please wait...</h4>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/admin/users/users.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var UsersComponent = (function () {
    function UsersComponent(userService, BaseURL, ImageURL, AudioURL, AvatarURL) {
        this.userService = userService;
        this.BaseURL = BaseURL;
        this.ImageURL = ImageURL;
        this.AudioURL = AudioURL;
        this.AvatarURL = AvatarURL;
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUsers()
            .subscribe(function (users) {
            _this.users = users;
        });
    };
    UsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-users',
            template: __webpack_require__("../../../../../src/app/admin/users/users.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/users/users.component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])('BaseURL')),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])('ImageURL')),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])('AudioURL')),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])('AvatarURL')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */], Object, Object, Object, Object])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/worddetail/worddetail.component.html":
/***/ (function(module, exports) {

module.exports = "<app-wordcard [word]=\"this.word\"></app-wordcard>\r\n"

/***/ }),

/***/ "../../../../../src/app/admin/worddetail/worddetail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/worddetail/worddetail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorddetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_word_service__ = __webpack_require__("../../../../../src/app/services/word.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var WorddetailComponent = (function () {
    function WorddetailComponent(wordService, location, route, BaseURL, ImageURL, AudioURL) {
        this.wordService = wordService;
        this.location = location;
        this.route = route;
        this.BaseURL = BaseURL;
        this.ImageURL = ImageURL;
        this.AudioURL = AudioURL;
    }
    WorddetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.params['id'];
        this.wordService.getWordById(id)
            .subscribe(function (word) { return _this.word = word; });
    };
    WorddetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    WorddetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-worddetail',
            template: __webpack_require__("../../../../../src/app/admin/worddetail/worddetail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/worddetail/worddetail.component.scss")]
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])('BaseURL')),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])('ImageURL')),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])('AudioURL')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_word_service__["a" /* WordService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], Object, Object, Object])
    ], WorddetailComponent);
    return WorddetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/wordedit/wordedit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" fxLayout=\"column\" fxLayoutGap=\"10px\">\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\r\n    <div fxFlex=\"50\" fxFlex.xs=\"100\">\r\n      <div class=\"form-width\">\r\n        <h1>Edit Word</h1>\r\n        <form novalidate [formGroup]=\"wordForm\" (ngSubmit)=\"onSubmit()\">\r\n          <p fxLayout=\"column\">\r\n            <mat-form-field>\r\n              <input matInput formControlName=\"name\" placeholder=\"Word\" type=\"text\">\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n              <input matInput formControlName=\"image\" placeholder=\"Image Url\" type=\"text\">\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n              <input matInput formControlName=\"sentence\" placeholder=\"Sentence Url\" type=\"text\">\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n              <input matInput formControlName=\"audio\" placeholder=\"Audio Url\" type=\"text\">\r\n            </mat-form-field>\r\n            <mat-slide-toggle formControlName=\"isfree\">\r\n              This card is free\r\n            </mat-slide-toggle>\r\n            <mat-form-field>\r\n              <mat-select placeholder=\"Choose a card set\" formControlName=\"cardset\">\r\n                <mat-option *ngFor=\"let option of cardSet\" [value]=\"option.value\">\r\n                  {{ option.label }}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </p>\r\n\r\n          <button mat-raised-button color=\"primary\">Submit</button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <div fxFlex=\"50\" fxFlex.xs=\"100\">\r\n      <app-wordcard [word]=\"this.word\"></app-wordcard>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/admin/wordedit/wordedit.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/wordedit/wordedit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordeditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_worddatamodel__ = __webpack_require__("../../../../../src/app/shared/worddatamodel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_word_service__ = __webpack_require__("../../../../../src/app/services/word.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var WordeditComponent = (function () {
    function WordeditComponent(fb, wordService, location, route, BaseURL, ImageURL, AudioURL) {
        this.fb = fb;
        this.wordService = wordService;
        this.location = location;
        this.route = route;
        this.BaseURL = BaseURL;
        this.ImageURL = ImageURL;
        this.AudioURL = AudioURL;
        this.cardSet = __WEBPACK_IMPORTED_MODULE_2__shared_worddatamodel__["b" /* cardSetOptions */];
        this.createForm();
    }
    WordeditComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.params['id'];
        this.getFormData(id);
    };
    WordeditComponent.prototype.getFormData = function (id) {
        var _this = this;
        this.wordService.getWordById(id)
            .subscribe(function (word) {
            _this.exname = word.name ? word.name : null;
            _this.eximage = word.image ? word.image : null;
            _this.exsentence = word.sentence ? word.sentence : null;
            _this.exaudio = word.audio ? word.audio : null;
            _this.exisfree = word.isfree ? word.isfree : null;
            _this.excardset = word.cardset ? word.cardset : null;
            _this.word = word;
            _this.createForm();
        });
    };
    WordeditComponent.prototype.goBack = function () {
        this.location.back();
    };
    WordeditComponent.prototype.createForm = function () {
        this.wordForm = this.fb.group({
            name: this.exname,
            image: this.eximage,
            sentence: this.exsentence,
            audio: this.exaudio,
            cardset: this.excardset,
            isfree: this.exisfree
        });
    };
    WordeditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.wordService.editWord(this.word._id, this.wordForm.value)
            .subscribe(function (word) {
            console.log(word);
            _this.getFormData(_this.word._id);
        });
    };
    WordeditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-wordedit',
            template: __webpack_require__("../../../../../src/app/admin/wordedit/wordedit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/wordedit/wordedit.component.scss")]
        }),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])('BaseURL')),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])('ImageURL')),
        __param(6, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])('AudioURL')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__services_word_service__["a" /* WordService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */], Object, Object, Object])
    ], WordeditComponent);
    return WordeditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/wordnew/wordnew.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" fxLayout=\"column\" fxLayoutGap=\"10px\">\r\n\r\n\r\n  <div class=\"form-width\">\r\n    <h1>Add New Word</h1>\r\n    <form novalidate [formGroup]=\"newWordForm\" (ngSubmit)=\"onSubmit()\">\r\n      <p fxLayout=\"column\">\r\n        <mat-form-field>\r\n          <input matInput formControlName=\"name\" placeholder=\"Word\" type=\"text\">\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <input matInput formControlName=\"image\" placeholder=\"Image Url\" type=\"text\">\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <input matInput formControlName=\"sentence\" placeholder=\"Sentence Url\" type=\"text\">\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <input matInput formControlName=\"audio\" placeholder=\"Audio Url\" type=\"text\">\r\n        </mat-form-field>\r\n        <mat-slide-toggle formControlName=\"isfree\">\r\n          This card is free\r\n        </mat-slide-toggle>\r\n        <mat-form-field>\r\n          <mat-select placeholder=\"Choose a card set\" formControlName=\"cardset\">\r\n            <mat-option *ngFor=\"let option of cardSet\" [value]=\"option.value\">\r\n              {{ option.label }}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </p>\r\n\r\n      <button mat-raised-button color=\"primary\">Submit</button>\r\n    </form>\r\n  </div>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/admin/wordnew/wordnew.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/wordnew/wordnew.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordnewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_worddatamodel__ = __webpack_require__("../../../../../src/app/shared/worddatamodel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_word_service__ = __webpack_require__("../../../../../src/app/services/word.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var WordnewComponent = (function () {
    function WordnewComponent(fb, wordService, location, BaseURL, ImageURL, AudioURL) {
        this.fb = fb;
        this.wordService = wordService;
        this.location = location;
        this.BaseURL = BaseURL;
        this.ImageURL = ImageURL;
        this.AudioURL = AudioURL;
        this.cardSet = __WEBPACK_IMPORTED_MODULE_2__shared_worddatamodel__["b" /* cardSetOptions */];
    }
    WordnewComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    WordnewComponent.prototype.createForm = function () {
        this.newWordForm = this.fb.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            image: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            sentence: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            audio: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            cardset: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            isfree: [false, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
        });
    };
    WordnewComponent.prototype.onSubmit = function () {
        var _this = this;
        this.wordService.addWord(this.newWordForm.value)
            .subscribe(function (word) {
            console.log(word);
            _this.word = word;
        });
        this.newWordForm.reset();
    };
    WordnewComponent.prototype.goBack = function () {
        this.location.back();
    };
    WordnewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-newword',
            template: __webpack_require__("../../../../../src/app/admin/wordnew/wordnew.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/wordnew/wordnew.component.scss")]
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])('BaseURL')),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])('ImageURL')),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])('AudioURL')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__services_word_service__["a" /* WordService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */], Object, Object, Object])
    ], WordnewComponent);
    return WordnewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/words/words.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-width\" fxLayout=\"column\" fxLayoutGap=\"10px\">\r\n  <mat-list fxLayoutWrap fxLayout=\"row\"  *ngIf=\"words\">\r\n    <mat-list-item *ngFor=\"let word of words\" [routerLink]=\"['/words', word._id]\"\r\n                   fxFlex.lg=\"25\" fxFlex.md=\"33\"\r\n                   fxFlex.sm=\"50\" fxFlex.xs=\"100\">\r\n      <img matListAvatar src=\"{{ImageURL + word.image}}\" alt=\"{{word.name}}\">\r\n      <p matLine><b>{{word.name}}</b> - cardset {{word.cardset}}</p>\r\n      <p matLine>is free? {{word.isfree}}</p>\r\n    </mat-list-item>\r\n  </mat-list>\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n    <button class=\"newcard\" mat-raised-button\r\n            [routerLink]=\"['/words/new']\">Add New Card</button>\r\n  </div>\r\n  <div [hidden]=\"words\">\r\n    <mat-progress-spinner></mat-progress-spinner>\r\n    <h4>Loading - Please wait...</h4>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/admin/words/words.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/words/words.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_word_service__ = __webpack_require__("../../../../../src/app/services/word.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var WordsComponent = (function () {
    function WordsComponent(wordService, BaseURL, ImageURL, AudioURL) {
        this.wordService = wordService;
        this.BaseURL = BaseURL;
        this.ImageURL = ImageURL;
        this.AudioURL = AudioURL;
    }
    WordsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.wordService.getWords()
            .subscribe(function (words) { return _this.words = words; });
    };
    WordsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-words',
            template: __webpack_require__("../../../../../src/app/admin/words/words.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/words/words.component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])('BaseURL')),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])('ImageURL')),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])('AudioURL')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_word_service__["a" /* WordService */], Object, Object, Object])
    ], WordsComponent);
    return WordsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes__ = __webpack_require__("../../../../../src/app/app-routing/routes.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__routes__["a" /* routes */])
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing/routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__admin_words_words_component__ = __webpack_require__("../../../../../src/app/admin/words/words.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__enduser_home_home_component__ = __webpack_require__("../../../../../src/app/enduser/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_worddetail_worddetail_component__ = __webpack_require__("../../../../../src/app/admin/worddetail/worddetail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_usernewform_newuserform_component__ = __webpack_require__("../../../../../src/app/admin/usernewform/newuserform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__admin_wordnew_wordnew_component__ = __webpack_require__("../../../../../src/app/admin/wordnew/wordnew.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__admin_wordedit_wordedit_component__ = __webpack_require__("../../../../../src/app/admin/wordedit/wordedit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__admin_users_users_component__ = __webpack_require__("../../../../../src/app/admin/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__admin_useredit_useredit_component__ = __webpack_require__("../../../../../src/app/admin/useredit/useredit.component.ts");








var routes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_1__enduser_home_home_component__["a" /* HomeComponent */] },
    { path: 'words', component: __WEBPACK_IMPORTED_MODULE_0__admin_words_words_component__["a" /* WordsComponent */] },
    { path: 'words/new', component: __WEBPACK_IMPORTED_MODULE_4__admin_wordnew_wordnew_component__["a" /* WordnewComponent */] },
    { path: 'words/:id', component: __WEBPACK_IMPORTED_MODULE_2__admin_worddetail_worddetail_component__["a" /* WorddetailComponent */] },
    { path: 'words/edit/:id', component: __WEBPACK_IMPORTED_MODULE_5__admin_wordedit_wordedit_component__["a" /* WordeditComponent */] },
    { path: 'users', component: __WEBPACK_IMPORTED_MODULE_6__admin_users_users_component__["a" /* UsersComponent */] },
    { path: 'users/new', component: __WEBPACK_IMPORTED_MODULE_3__admin_usernewform_newuserform_component__["a" /* NewUserFormComponent */] },
    { path: 'users/edit/:id', component: __WEBPACK_IMPORTED_MODULE_7__admin_useredit_useredit_component__["a" /* UsereditComponent */] },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];


/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-maincontent></app-maincontent>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'See To Spell';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_cdk_layout__ = __webpack_require__("../../../cdk/esm5/layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_material_module__ = __webpack_require__("../../../../../src/app/shared/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routing_app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_word_service__ = __webpack_require__("../../../../../src/app/services/word.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_baseurl__ = __webpack_require__("../../../../../src/app/shared/baseurl.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_process_httpmsg_service__ = __webpack_require__("../../../../../src/app/services/process-httpmsg.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__admin_words_words_component__ = __webpack_require__("../../../../../src/app/admin/words/words.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__enduser_home_home_component__ = __webpack_require__("../../../../../src/app/enduser/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__admin_accounts_accounts_component__ = __webpack_require__("../../../../../src/app/admin/accounts/accounts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__enduser_sets_sets_component__ = __webpack_require__("../../../../../src/app/enduser/sets/sets.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__app_routing_routes__ = __webpack_require__("../../../../../src/app/app-routing/routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__mainlayout_toolbar_toolbar_component__ = __webpack_require__("../../../../../src/app/mainlayout/toolbar/toolbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__admin_worddetail_worddetail_component__ = __webpack_require__("../../../../../src/app/admin/worddetail/worddetail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__mainlayout_login_login_component__ = __webpack_require__("../../../../../src/app/mainlayout/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__admin_usernewform_newuserform_component__ = __webpack_require__("../../../../../src/app/admin/usernewform/newuserform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__admin_wordedit_wordedit_component__ = __webpack_require__("../../../../../src/app/admin/wordedit/wordedit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__admin_wordnew_wordnew_component__ = __webpack_require__("../../../../../src/app/admin/wordnew/wordnew.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__mainlayout_sidenav_sidenav_component__ = __webpack_require__("../../../../../src/app/mainlayout/sidenav/sidenav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__mainlayout_maincontent_maincontent_component__ = __webpack_require__("../../../../../src/app/mainlayout/maincontent/maincontent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__content_components_wordcard_wordcard_component__ = __webpack_require__("../../../../../src/app/content-components/wordcard/wordcard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__admin_useredit_useredit_component__ = __webpack_require__("../../../../../src/app/admin/useredit/useredit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__admin_users_users_component__ = __webpack_require__("../../../../../src/app/admin/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__content_components_usercard_usercard_component__ = __webpack_require__("../../../../../src/app/content-components/usercard/usercard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_17__admin_words_words_component__["a" /* WordsComponent */],
                __WEBPACK_IMPORTED_MODULE_18__enduser_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_19__admin_accounts_accounts_component__["a" /* AccountsComponent */],
                __WEBPACK_IMPORTED_MODULE_20__enduser_sets_sets_component__["a" /* SetsComponent */],
                __WEBPACK_IMPORTED_MODULE_22__mainlayout_toolbar_toolbar_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_23__admin_worddetail_worddetail_component__["a" /* WorddetailComponent */],
                __WEBPACK_IMPORTED_MODULE_24__mainlayout_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_25__admin_usernewform_newuserform_component__["a" /* NewUserFormComponent */],
                __WEBPACK_IMPORTED_MODULE_26__admin_wordedit_wordedit_component__["a" /* WordeditComponent */],
                __WEBPACK_IMPORTED_MODULE_27__admin_wordnew_wordnew_component__["a" /* WordnewComponent */],
                __WEBPACK_IMPORTED_MODULE_28__mainlayout_sidenav_sidenav_component__["a" /* SidenavComponent */],
                __WEBPACK_IMPORTED_MODULE_29__mainlayout_maincontent_maincontent_component__["a" /* MaincontentComponent */],
                __WEBPACK_IMPORTED_MODULE_30__content_components_wordcard_wordcard_component__["a" /* WordcardComponent */],
                __WEBPACK_IMPORTED_MODULE_31__admin_useredit_useredit_component__["a" /* UsereditComponent */],
                __WEBPACK_IMPORTED_MODULE_32__admin_users_users_component__["a" /* UsersComponent */],
                __WEBPACK_IMPORTED_MODULE_33__content_components_usercard_usercard_component__["a" /* UsercardComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_21__app_routing_routes__["a" /* routes */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_cdk_layout__["c" /* LayoutModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_11__app_routing_app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_9__shared_material_module__["a" /* MaterialModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__services_word_service__["a" /* WordService */],
                __WEBPACK_IMPORTED_MODULE_13__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_dialog__["b" /* MatDialogModule */],
                { provide: 'BaseURL', useValue: __WEBPACK_IMPORTED_MODULE_14__shared_baseurl__["c" /* baseURL */] },
                { provide: 'ImageURL', useValue: __WEBPACK_IMPORTED_MODULE_14__shared_baseurl__["d" /* imageURL */] },
                { provide: 'AudioURL', useValue: __WEBPACK_IMPORTED_MODULE_14__shared_baseurl__["a" /* audioURL */] },
                { provide: 'AvatarURL', useValue: __WEBPACK_IMPORTED_MODULE_14__shared_baseurl__["b" /* avatarURL */] },
                __WEBPACK_IMPORTED_MODULE_15__services_process_httpmsg_service__["a" /* ProcessHTTPMsgService */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_24__mainlayout_login_login_component__["a" /* LoginComponent */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/content-components/usercard/usercard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"single-user-container\">\n  <mat-card class=\"user-card\" *ngIf=\"user\">\n    <img src=\"{{AvatarURL + user.avatar}}\" alt=\"{{user.displayName}}\">\n    <mat-card-content class=\"user-card-content\">\n      <p matLine>{{user.username}}</p>\n      <h2 matLine>{{user.displayName}}</h2>\n    </mat-card-content>\n    <mat-card-actions *ngIf=\"edit\">\n      <button mat-raised-button [routerLink] = \"['/words/edit/' + word._id]\">Edit</button>\n    </mat-card-actions>\n  </mat-card>\n  <div [hidden]=\"user\">\n    <mat-spinner></mat-spinner>\n    <h4>Loading - Please wait...</h4>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/content-components/usercard/usercard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/content-components/usercard/usercard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsercardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_userdatamodel__ = __webpack_require__("../../../../../src/app/shared/userdatamodel.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var UsercardComponent = (function () {
    function UsercardComponent(BaseURL, AvatarURL) {
        this.BaseURL = BaseURL;
        this.AvatarURL = AvatarURL;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__shared_userdatamodel__["a" /* UserDataModel */])
    ], UsercardComponent.prototype, "user", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean)
    ], UsercardComponent.prototype, "edit", void 0);
    UsercardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-usercard',
            template: __webpack_require__("../../../../../src/app/content-components/usercard/usercard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/content-components/usercard/usercard.component.scss")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])('BaseURL')),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])('AvatarURL')),
        __metadata("design:paramtypes", [Object, Object])
    ], UsercardComponent);
    return UsercardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/content-components/wordcard/wordcard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"single-card-container\">\n  <mat-card class=\"word-card\" *ngIf=\"word\">\n    <mat-card-header>\n      <mat-card-title>{{word.name}}</mat-card-title>\n    </mat-card-header>\n    <img mat-card-image src=\"{{ImageURL + word.image}}\" alt=\"{{word.name}}\">\n    <mat-card-content>\n      <img src=\"{{ImageURL + word.sentence}}\" alt=\"{{word.sentence}}\">\n      <p matLine>{{word.cardset}}</p>\n      <p matLine>{{word.isfree}}</p>\n    </mat-card-content>\n    <mat-card-actions>\n      <button mat-raised-button [routerLink] = \"['/words/edit/' + word._id]\">Edit</button>\n    </mat-card-actions>\n  </mat-card>\n  <div [hidden]=\"word\">\n    <mat-spinner></mat-spinner>\n    <h4>Loading - Please wait...</h4>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/content-components/wordcard/wordcard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/content-components/wordcard/wordcard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordcardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_worddatamodel__ = __webpack_require__("../../../../../src/app/shared/worddatamodel.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var WordcardComponent = (function () {
    function WordcardComponent(BaseURL, ImageURL, AudioURL) {
        this.BaseURL = BaseURL;
        this.ImageURL = ImageURL;
        this.AudioURL = AudioURL;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__shared_worddatamodel__["a" /* WordDataModel */])
    ], WordcardComponent.prototype, "word", void 0);
    WordcardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-wordcard',
            template: __webpack_require__("../../../../../src/app/content-components/wordcard/wordcard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/content-components/wordcard/wordcard.component.scss")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])('BaseURL')),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])('ImageURL')),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])('AudioURL')),
        __metadata("design:paramtypes", [Object, Object, Object])
    ], WordcardComponent);
    return WordcardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/enduser/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" fxLayout=\"column\" fxLayoutGap=\"10px\" *ngIf=\"freewords\">\r\n  <mat-list fxFlex>\r\n    <mat-list-item *ngFor=\"let word of freewords\">\r\n      <img matListAvatar src=\"{{ImageURL + word.image}}\" alt=\"{{word.name}}\">\r\n      <h2 matLine>{{word.name}}</h2>\r\n      <img src=\"{{ImageURL + word.sentence}}\" alt=\"{{word.sentence}}\">\r\n      <p matLine>{{word.cardset}}</p>\r\n      <p matLine>{{word.isfree}}</p>\r\n    </mat-list-item>\r\n  </mat-list>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/enduser/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/enduser/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_word_service__ = __webpack_require__("../../../../../src/app/services/word.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var HomeComponent = (function () {
    function HomeComponent(wordservice, BaseURL, ImageURL, AudioURL) {
        this.wordservice = wordservice;
        this.BaseURL = BaseURL;
        this.ImageURL = ImageURL;
        this.AudioURL = AudioURL;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.wordservice.getFreeWords()
            .subscribe(function (freewords) { return _this.freewords = freewords; });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/enduser/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/enduser/home/home.component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])('BaseURL')),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])('ImageURL')),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])('AudioURL')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_word_service__["a" /* WordService */], Object, Object, Object])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/enduser/sets/sets.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  sets works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/enduser/sets/sets.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/enduser/sets/sets.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SetsComponent = (function () {
    function SetsComponent() {
    }
    SetsComponent.prototype.ngOnInit = function () {
    };
    SetsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sets',
            template: __webpack_require__("../../../../../src/app/enduser/sets/sets.component.html"),
            styles: [__webpack_require__("../../../../../src/app/enduser/sets/sets.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SetsComponent);
    return SetsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/mainlayout/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar mat-dialog-title color=\"primary\">\r\n  <mat-grid-list cols=\"2\" rowHeight=\"50px\">\r\n    <mat-grid-tile>\r\n      Login\r\n      <span class=\"flex-spacer\"></span>\r\n    </mat-grid-tile>\r\n    <mat-grid-tile>\r\n      <span class=\"flex-spacer\"></span>\r\n      <button mat-mini-fab [mat-dialog-close]=\"true\">&times;</button>\r\n    </mat-grid-tile>\r\n  </mat-grid-list>\r\n</mat-toolbar>\r\n\r\n<p>{{ user | json }}</p>\r\n<form novalidate #loginForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\r\n  <mat-dialog-content>\r\n    <p>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Username\" type=\"text\"\r\n               [(ngModel)]=\"user.username\" required name=\"username\" #username=\"ngModel\">\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Password\" type=\"password\"\r\n               [(ngModel)]=\"user.password\" required name=\"password\" #password=\"ngModel\">\r\n      </mat-form-field>\r\n      <mat-checkbox [(ngModel)]=\"user\" name=\"remember\" #remember=\"ngModel\">\r\n        Remember Me\r\n      </mat-checkbox>\r\n    </p>\r\n  </mat-dialog-content>\r\n  <mat-dialog-actions>\r\n    <button mat-button-raised type=\"submit\" color=\"primary\"[disabled]=\"loginForm.form.invalid\">Login</button>\r\n  </mat-dialog-actions>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/mainlayout/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/mainlayout/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = (function () {
    function LoginComponent(dialogRef) {
        this.dialogRef = dialogRef;
        this.user = { username: '', password: '', remember: false };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        this.dialogRef.close();
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/mainlayout/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/mainlayout/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatDialogRef */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/mainlayout/maincontent/maincontent.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container mat-typography\"\n     [class.is-mobile]=\"mobileQuery.matches\"\n     fxFlex fxFill\n     fxLayout=\"column\">\n\n  <mat-toolbar color=\"primary\"\n               class=\"toolbar\"\n               fxLayout=\"row\">\n    <div class=\"branding\"\n         fxFlex=\"30\"\n         fxFlex.xs=\"60\"\n         fxLayout=\"row\">\n      <button mat-icon-button (click)=\"snav.toggle()\">\n        <mat-icon>menu</mat-icon>\n      </button>\n      <h1 class=\"app-name\">See To Spell</h1>\n    </div>\n    <div class=\"toolbar-menu\"\n         fxFlex=\"50%\"\n         fxFlexAlign=\"center\"\n         fxShow fxHide.xs=\"true\">\n      <button mat-button routerLink=\"/home\">Home</button>\n      <button mat-button routerLink=\"/words\">Words</button>\n      <button mat-button routerLink=\"/users\">Users</button>\n    </div>\n    <div class=\"flex-spacer\" fxShow.xs=\"true\" fxHide></div>\n    <div class=\"account-menu\"\n         fxFlex=\"20%\"\n         fxFlex.xs=\"40\">\n      <button mat-raised-button color=\"accent\" (click)=\"openLoginForm()\">\n        <mat-icon>home</mat-icon>\n      </button>\n    </div>\n  </mat-toolbar>\n\n\n  <div\n    fxFlex\n    fxLayout=\"row\"\n    fxFill>\n    <mat-sidenav-container class=\"sidenav-container\"\n                           [style.marginTop.px]=\"mobileQuery.matches ? 64 : 0\">\n      <mat-sidenav class=\"sidenav\" #snav\n                   mode=\"over\"\n                   [fixedInViewport]=\"mobileQuery.matches\"\n                   fixedTopGap=\"64\"\n                   fixedBottomGap=\"10\"\n                   fxLayout=\"column\">\n\n        <app-sidenav></app-sidenav>\n\n      </mat-sidenav>\n\n      <mat-sidenav-content>\n        <div class=\"content-wrapper\"\n             fxLayout=\"column\"\n             ngClass.xl=\"big-desktop\"\n             ngClass.lg=\"desktop\"\n             ngClass.md=\"tablet\"\n             ngClass.sm=\"big-phone\"\n             ngClass.xs=\"phone\">\n          <router-outlet></router-outlet>\n        </div>\n      </mat-sidenav-content>\n    </mat-sidenav-container>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/mainlayout/maincontent/maincontent.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-container {\n  position: absolute;\n  width: 100%;\n  max-width: 100%;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0; }\n\nmat-toolbar.fixed {\n  position: fixed; }\n\nmat-toolbar.fixed + * {\n  padding-top: 64px; }\n\n.is-mobile .toolbar {\n  position: fixed;\n  /* Make sure the toolbar will stay on top of the content as it scrolls past. */\n  z-index: 2; }\n\nmat-toolbar h1 {\n  margin-top: 4px; }\n\n.sidenav-container {\n  /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\r\n     causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  max-width: 100%; }\n\n.is-mobile .sidenav-container {\n  /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\r\n     `<body>` to be our scrolling element for mobile layouts. */\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto; }\n\n.sidenav {\n  width: 300px; }\n\n.account-menu {\n  text-align: right; }\n\n.content-wrapper {\n  margin: 0 auto;\n  box-sizing: border-box;\n  max-width: 100%; }\n\n.big-desktop.content-wrapper,\n.desktop .content-wrapper {\n  width: 1440px; }\n\n.tablet.content-wrapper {\n  padding: 0 24px 24px 24px; }\n\n.big-phone.content-wrapper {\n  padding: 0 16px 16px 16px; }\n\n.phone.content-wrapper {\n  padding: 0 8px 8px 8px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/mainlayout/maincontent/maincontent.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaincontentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_layout__ = __webpack_require__("../../../cdk/esm5/layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("../../../../../src/app/mainlayout/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MaincontentComponent = (function () {
    function MaincontentComponent(changeDetectorRef, media, dialog) {
        this.dialog = dialog;
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    MaincontentComponent.prototype.ngOnDestroy = function () {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    };
    MaincontentComponent.prototype.openLoginForm = function () {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */], { width: '400px', height: '420px' });
    };
    MaincontentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-maincontent',
            template: __webpack_require__("../../../../../src/app/mainlayout/maincontent/maincontent.component.html"),
            styles: [__webpack_require__("../../../../../src/app/mainlayout/maincontent/maincontent.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_1__angular_cdk_layout__["d" /* MediaMatcher */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material_dialog__["a" /* MatDialog */]])
    ], MaincontentComponent);
    return MaincontentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/mainlayout/sidenav/sidenav.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  verticalnav works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/mainlayout/sidenav/sidenav.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0; }\n\n.is-mobile .toolbar {\n  position: fixed;\n  /* Make sure the toolbar will stay on top of the content as it scrolls past. */\n  z-index: 2; }\n\n.sidenav-container {\n  /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\r\n     causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n\n.is-mobile .sidenav-container {\n  /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\r\n     `<body>` to be our scrolling element for mobile layouts. */\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/mainlayout/sidenav/sidenav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidenavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidenavComponent = (function () {
    function SidenavComponent() {
    }
    SidenavComponent.prototype.ngOnInit = function () {
    };
    SidenavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sidenav',
            template: __webpack_require__("../../../../../src/app/mainlayout/sidenav/sidenav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/mainlayout/sidenav/sidenav.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SidenavComponent);
    return SidenavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/mainlayout/toolbar/toolbar.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"toolbar\">\r\n  <span>{{title}}</span>\r\n\r\n  <a mat-raised-button routerLink=\"/home\" color=\"accent\">Home</a>\r\n  <a mat-raised-button routerLink=\"/words\" color=\"accent\">Words</a>\r\n  <a mat-raised-button routerLink=\"/sets\" color=\"accent\">Sets</a>\r\n  <span class=\"flex-spacer\"></span>\r\n  <button mat-raised-button color=\"accent\" (click)=\"openLoginForm()\"><mat-icon>home</mat-icon></button>\r\n</mat-toolbar>\r\n"

/***/ }),

/***/ "../../../../../src/app/mainlayout/toolbar/toolbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/mainlayout/toolbar/toolbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/mainlayout/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = (function () {
    function HeaderComponent(dialog) {
        this.dialog = dialog;
        this.title = 'See To Spell';
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.openLoginForm = function () {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */], { width: '400px', height: '420px' });
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/mainlayout/toolbar/toolbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/mainlayout/toolbar/toolbar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__["a" /* MatDialog */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/process-httpmsg.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProcessHTTPMsgService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProcessHTTPMsgService = (function () {
    function ProcessHTTPMsgService() {
    }
    ProcessHTTPMsgService.prototype.handleError = function (error) {
        var errMsg;
        if (error.error instanceof Error) {
            errMsg = error.error.message;
        }
        else {
            errMsg = error.status + " - " + (error.statusText || '') + " " + error.error;
        }
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(errMsg);
    };
    ProcessHTTPMsgService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ProcessHTTPMsgService);
    return ProcessHTTPMsgService;
}());



/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_baseurl__ = __webpack_require__("../../../../../src/app/shared/baseurl.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__process_httpmsg_service__ = __webpack_require__("../../../../../src/app/services/process-httpmsg.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UserService = (function () {
    function UserService(http, processHTTPMsgService) {
        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
    }
    UserService.prototype.getUsers = function () {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_6__shared_baseurl__["c" /* baseURL */] + 'users')
            .catch(function (error) { return _this.processHTTPMsgService.handleError(error); });
    };
    UserService.prototype.getUserById = function (id) {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_6__shared_baseurl__["c" /* baseURL */] + 'users/' + id)
            .catch(function (error) { return _this.processHTTPMsgService.handleError(error); });
    };
    UserService.prototype.addUser = function (formContent) {
        var _this = this;
        return this.http.post(__WEBPACK_IMPORTED_MODULE_6__shared_baseurl__["c" /* baseURL */] + 'users/new', formContent)
            .catch(function (error) { return _this.processHTTPMsgService.handleError(error); });
    };
    UserService.prototype.editUser = function (id, formContent) {
        var _this = this;
        return this.http.put(__WEBPACK_IMPORTED_MODULE_6__shared_baseurl__["c" /* baseURL */] + 'users/edit/' + id, formContent)
            .catch(function (error) { return _this.processHTTPMsgService.handleError(error); });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_7__process_httpmsg_service__["a" /* ProcessHTTPMsgService */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/services/word.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_baseurl__ = __webpack_require__("../../../../../src/app/shared/baseurl.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__process_httpmsg_service__ = __webpack_require__("../../../../../src/app/services/process-httpmsg.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var WordService = (function () {
    function WordService(http, processHTTPMsgService) {
        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
    }
    WordService.prototype.getWords = function () {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_6__shared_baseurl__["c" /* baseURL */] + 'words')
            .catch(function (error) { return _this.processHTTPMsgService.handleError(error); });
    };
    WordService.prototype.getWord = function (name) {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_6__shared_baseurl__["c" /* baseURL */] + 'words/' + name)
            .catch(function (error) { return _this.processHTTPMsgService.handleError(error); });
    };
    WordService.prototype.getWordById = function (id) {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_6__shared_baseurl__["c" /* baseURL */] + 'words/' + id)
            .catch(function (error) { return _this.processHTTPMsgService.handleError(error); });
    };
    WordService.prototype.getFreeWords = function () {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_6__shared_baseurl__["c" /* baseURL */] + 'words?isfree=true')
            .catch(function (error) { return _this.processHTTPMsgService.handleError(error); });
    };
    WordService.prototype.getWordsInSet = function (cardset) {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_6__shared_baseurl__["c" /* baseURL */] + 'words?cardset=' + cardset)
            .catch(function (error) { return _this.processHTTPMsgService.handleError(error); });
    };
    WordService.prototype.addWord = function (formContent) {
        var _this = this;
        return this.http.post(__WEBPACK_IMPORTED_MODULE_6__shared_baseurl__["c" /* baseURL */] + 'words/new', formContent)
            .catch(function (error) { return _this.processHTTPMsgService.handleError(error); });
    };
    WordService.prototype.editWord = function (id, formContent) {
        var _this = this;
        return this.http.put(__WEBPACK_IMPORTED_MODULE_6__shared_baseurl__["c" /* baseURL */] + 'words/edit/' + id, formContent)
            .catch(function (error) { return _this.processHTTPMsgService.handleError(error); });
    };
    WordService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_7__process_httpmsg_service__["a" /* ProcessHTTPMsgService */]])
    ], WordService);
    return WordService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/baseurl.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return baseURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return imageURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return audioURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return avatarURL; });
var baseURL = 'http://localhost:5000/';
var imageURL = baseURL + 'images/';
var audioURL = baseURL + 'audio/';
var avatarURL = baseURL + 'avatars/';


/***/ }),

/***/ "../../../../../src/app/shared/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_slide_toggle__ = __webpack_require__("../../../material/esm5/slide-toggle.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_checkbox__ = __webpack_require__("../../../material/esm5/checkbox.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_icon__ = __webpack_require__("../../../material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_sidenav__ = __webpack_require__("../../../material/esm5/sidenav.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_select__ = __webpack_require__("../../../material/esm5/select.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_input__ = __webpack_require__("../../../material/esm5/input.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_grid_list__ = __webpack_require__("../../../material/esm5/grid-list.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material_card__ = __webpack_require__("../../../material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material_progress_spinner__ = __webpack_require__("../../../material/esm5/progress-spinner.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material_radio__ = __webpack_require__("../../../material/esm5/radio.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var MaterialModule = (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_input__["b" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material_checkbox__["a" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatLineModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material_icon__["a" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material_dialog__["b" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material_slide_toggle__["a" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_select__["a" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material_grid_list__["a" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_sidenav__["a" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material_card__["a" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material_progress_spinner__["a" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material_radio__["a" /* MatRadioModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_input__["b" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material_checkbox__["a" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatLineModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material_icon__["a" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material_dialog__["b" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material_slide_toggle__["a" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_select__["a" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material_grid_list__["a" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_sidenav__["a" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material_card__["a" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material_progress_spinner__["a" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material_radio__["a" /* MatRadioModule */]
            ],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/userdatamodel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDataModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return setsPurchasedOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return allAvatars; });
/* unused harmony export adultAvatars */
/* unused harmony export kidAvatars */
var UserDataModel = (function () {
    function UserDataModel() {
    }
    return UserDataModel;
}());

var setsPurchasedOptions = [
    { value: [], label: 'none' },
    { value: [1], label: 'Set 1' },
    { value: [2], label: 'Set 2' },
    { value: [3], label: 'Set 3' },
    { value: [1, 2], label: 'Sets 1 & 2' },
    { value: [1, 3], label: 'Sets 1 & 3' },
    { value: [1, 2, 3], label: 'Sets 1, 2 & 3' },
    { value: [2, 3], label: 'Sets 2 & 3' }
];
var allAvatars = [
    { value: 'adult1.png', image: 'adult1.png' },
    { value: 'adult2.png', image: 'adult2.png' },
    { value: 'adult3.png', image: 'adult3.png' },
    { value: 'adult4.png', image: 'adult4.png' },
    { value: 'kid1.png', image: 'kid1.png' },
    { value: 'kid2.png', image: 'kid2.png' },
    { value: 'kid3.png', image: 'kid3.png' },
    { value: 'kid4.png', image: 'kid4.png' },
];
var adultAvatars = [
    { value: 'adult1.png', image: 'adult1.png' },
    { value: 'adult2.png', image: 'adult2.png' },
    { value: 'adult3.png', image: 'adult3.png' },
    { value: 'adult4.png', image: 'adult4.png' }
];
var kidAvatars = [
    { value: 'kid1.png', image: 'kid1.png' },
    { value: 'kid2.png', image: 'kid2.png' },
    { value: 'kid3.png', image: 'kid3.png' },
    { value: 'kid4.png', image: 'kid4.png' }
];


/***/ }),

/***/ "../../../../../src/app/shared/worddatamodel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordDataModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return cardSetOptions; });
var WordDataModel = (function () {
    function WordDataModel() {
    }
    return WordDataModel;
}());

var cardSetOptions = [
    { value: 1, label: 'Set 1' },
    { value: 2, label: 'Set 2' },
    { value: 3, label: 'Set 3' }
];


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map