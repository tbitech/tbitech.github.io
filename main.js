(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/auth.guard */ "./src/app/core/auth.guard.ts");
/* harmony import */ var _ui_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/user-login/user-login.component */ "./src/app/ui/user-login/user-login.component.ts");
/* harmony import */ var _ui_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/home-page/home-page.component */ "./src/app/ui/home-page/home-page.component.ts");
/* harmony import */ var _notes_notes_list_notes_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notes/notes-list/notes-list.component */ "./src/app/notes/notes-list/notes-list.component.ts");
/* harmony import */ var _uploads_upload_page_upload_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./uploads/upload-page/upload-page.component */ "./src/app/uploads/upload-page/upload-page.component.ts");
/* harmony import */ var _users_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./users/user-list/user-list.component */ "./src/app/users/user-list/user-list.component.ts");
/* harmony import */ var _machines_machines_list_machines_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./machines/machines-list/machines-list.component */ "./src/app/machines/machines-list/machines-list.component.ts");
/* harmony import */ var _monitoring_monitoring_list_monitoring_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./monitoring/monitoring-list/monitoring-list.component */ "./src/app/monitoring/monitoring-list/monitoring-list.component.ts");
/* harmony import */ var _presentation_en_en_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./presentation/en/en.component */ "./src/app/presentation/en/en.component.ts");
/* harmony import */ var _presentation_fi_fi_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./presentation/fi/fi.component */ "./src/app/presentation/fi/fi.component.ts");
/* harmony import */ var _ui_ssr_page_ssr_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ui/ssr-page/ssr-page.component */ "./src/app/ui/ssr-page/ssr-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    { path: '', component: _ui_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"] },
    { path: 'login', component: _ui_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_3__["UserLoginComponent"] },
    { path: 'notes', component: _notes_notes_list_notes_list_component__WEBPACK_IMPORTED_MODULE_5__["NotesListComponent"], canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'uploads', component: _uploads_upload_page_upload_page_component__WEBPACK_IMPORTED_MODULE_6__["UploadPageComponent"], canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'users', component: _users_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_7__["UserListComponent"], canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'machines', component: _machines_machines_list_machines_list_component__WEBPACK_IMPORTED_MODULE_8__["MachinesListComponent"], canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'monitoring', component: _monitoring_monitoring_list_monitoring_list_component__WEBPACK_IMPORTED_MODULE_9__["MonitoringListComponent"], canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'presentation/en', component: _presentation_en_en_component__WEBPACK_IMPORTED_MODULE_10__["EnComponent"], canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'presentation/fi', component: _presentation_fi_fi_component__WEBPACK_IMPORTED_MODULE_11__["FiComponent"], canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'ssr', component: _ui_ssr_page_ssr_page_component__WEBPACK_IMPORTED_MODULE_12__["SsrPageComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\" class=\"content\">\r\n    <main-nav></main-nav>\r\n\r\n    <div class=\"columns\">\r\n        <aside class=\"column is-2\">\r\n            <user-profile></user-profile>\r\n        </aside>\r\n\r\n        <main class=\"column is-8\">\r\n           \r\n   \r\n            <notification-message></notification-message>\r\n\r\n            <router-outlet></router-outlet>\r\n        </main>\r\n    </div>\r\n\r\n\r\n    <footer class=\"footer\">\r\n        <p>   \r\n         <a routerLink=\"/\">\r\n            <img src=\"assets/totech_logo.jpg\" width=\"100px\" height=\"100px\" alt=\"TOTECH\" />\r\n        </a>\r\n       <i><b> Web Application</b></i></p>\r\n        <p>&copy; CopyRight www.totech.fi 2018</p>    \r\n    </footer>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/auth.service */ "./src/app/core/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(auth) {
        this.auth = auth;
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _uploads_uploads_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./uploads/uploads.module */ "./src/app/uploads/uploads.module.ts");
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ui/ui.module */ "./src/app/ui/ui.module.ts");
/* harmony import */ var _notes_notes_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./notes/notes.module */ "./src/app/notes/notes.module.ts");
/* harmony import */ var _users_users_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./users/users.module */ "./src/app/users/users.module.ts");
/* harmony import */ var _machines_machines_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./machines/machines.module */ "./src/app/machines/machines.module.ts");
/* harmony import */ var _monitoring_monitoring_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./monitoring/monitoring.module */ "./src/app/monitoring/monitoring.module.ts");
/* harmony import */ var _presentation_presentation_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./presentation/presentation.module */ "./src/app/presentation/presentation.module.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// Firestarter App Modules








// AngularFire2 Modules




//import { AngularFireFunctionsModule } from 'angularfire2/functions';
//Angular Material
//import { MaterialModule } from './material/material.module';
// IMPORTANT
// Add your own project credentials to environments/*.ts
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserTransferStateModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_9__["CoreModule"],
                _ui_ui_module__WEBPACK_IMPORTED_MODULE_11__["UiModule"],
                _notes_notes_module__WEBPACK_IMPORTED_MODULE_12__["NotesModule"],
                _users_users_module__WEBPACK_IMPORTED_MODULE_13__["UsersModule"],
                _machines_machines_module__WEBPACK_IMPORTED_MODULE_14__["MachinesModule"],
                _monitoring_monitoring_module__WEBPACK_IMPORTED_MODULE_15__["MonitoringModule"],
                _presentation_presentation_module__WEBPACK_IMPORTED_MODULE_16__["PresentationModule"],
                _uploads_uploads_module__WEBPACK_IMPORTED_MODULE_10__["UploadsModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_17__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].firebase, 'firestarter'),
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_18__["AngularFirestoreModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_20__["AngularFireAuthModule"],
                angularfire2_storage__WEBPACK_IMPORTED_MODULE_19__["AngularFireStorageModule"],
                //AngularFireFunctionsModule,
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_7__["ServiceWorkerModule"].register('/ngsw-worker.js', {
                    enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].production
                }),
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/core/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var _notify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notify.service */ "./src/app/core/notify.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router, notify) {
        this.auth = auth;
        this.router = router;
        this.notify = notify;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.auth.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) { return !!user; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (loggedIn) {
            if (!loggedIn) {
                console.log('access denied');
                _this.notify.update('You must be logged in!', 'error');
                _this.router.navigate(['/login']);
            }
        }));
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _notify_service__WEBPACK_IMPORTED_MODULE_4__["NotifyService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/core/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/core/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @firebase/app */ "./node_modules/@firebase/app/dist/index.cjs.js");
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var _notify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notify.service */ "./src/app/core/notify.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _users_users_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../users/users.service */ "./src/app/users/users.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AuthService = /** @class */ (function () {
    function AuthService(afAuth, afs, router, notify, usrservice) {
        var _this = this;
        this.afAuth = afAuth;
        this.afs = afs;
        this.router = router;
        this.notify = notify;
        this.usrservice = usrservice;
        this.user = this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (user) {
            if (user) {
                return _this.afs.doc("users/" + user.uid).valueChanges();
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(null);
            }
        })
        // tap(user => localStorage.setItem('user', JSON.stringify(user))),
        // startWith(JSON.parse(localStorage.getItem('user')))
        );
    }
    ////// OAuth Methods /////
    AuthService.prototype.googleLogin = function () {
        var provider = new _firebase_app__WEBPACK_IMPORTED_MODULE_2__["firebase"].auth.GoogleAuthProvider();
        return this.oAuthLogin(provider);
    };
    AuthService.prototype.githubLogin = function () {
        var provider = new _firebase_app__WEBPACK_IMPORTED_MODULE_2__["firebase"].auth.GithubAuthProvider();
        return this.oAuthLogin(provider);
    };
    AuthService.prototype.facebookLogin = function () {
        var provider = new _firebase_app__WEBPACK_IMPORTED_MODULE_2__["firebase"].auth.FacebookAuthProvider();
        return this.oAuthLogin(provider);
    };
    AuthService.prototype.twitterLogin = function () {
        var provider = new _firebase_app__WEBPACK_IMPORTED_MODULE_2__["firebase"].auth.TwitterAuthProvider();
        return this.oAuthLogin(provider);
    };
    AuthService.prototype.oAuthLogin = function (provider) {
        var _this = this;
        return this.afAuth.auth
            .signInWithPopup(provider)
            .then(function (credential) {
            _this.notify.update('Welcome to TOTECH web application!!!', 'success');
            return _this.updateUserData(credential.user);
        })
            .catch(function (error) { return _this.handleError(error); });
    };
    //// Anonymous Auth ////
    AuthService.prototype.anonymousLogin = function () {
        var _this = this;
        return this.afAuth.auth
            .signInAnonymously()
            .then(function (credential) {
            _this.notify.update('Welcome to TOTECH web application!!!', 'success');
            return _this.updateUserData(credential.user); // if using firestore
        })
            .catch(function (error) {
            _this.handleError(error);
        });
    };
    //// Email/Password Auth ////
    AuthService.prototype.emailSignUp = function (name, company, phone, email, password) {
        var _this = this;
        return this.afAuth.auth
            .createUserWithEmailAndPassword(email, password)
            .then(function (credential) {
            _this.notify.update('Welcome new user!', 'success');
            return _this.newupdateUserData(credential.user, name, company, phone); // if using firestore
        })
            .catch(function (error) { return _this.handleError(error); });
    };
    AuthService.prototype.emailLogin = function (email, password) {
        var _this = this;
        return this.afAuth.auth
            .signInWithEmailAndPassword(email, password)
            .then(function (credential) {
            _this.notify.update('Welcome back!', 'success');
            return _this.updateUserData(credential.user);
        })
            .catch(function (error) { return _this.handleError(error); });
    };
    // Sends email allowing user to reset password
    AuthService.prototype.resetPassword = function (email) {
        var _this = this;
        var fbAuth = _firebase_app__WEBPACK_IMPORTED_MODULE_2__["firebase"].auth();
        return fbAuth
            .sendPasswordResetEmail(email)
            .then(function () { return _this.notify.update('Password update email sent', 'info'); })
            .catch(function (error) { return _this.handleError(error); });
    };
    AuthService.prototype.signOut = function () {
        var _this = this;
        this.afAuth.auth.signOut().then(function () {
            _this.router.navigate(['/']);
        });
    };
    // If error, console log and notify user
    AuthService.prototype.handleError = function (error) {
        console.error(error);
        this.notify.update(error.message, 'error');
    };
    // Sets user data to firestore after succesful login
    AuthService.prototype.updateUserData = function (user) {
        var userRef = this.afs.doc("users/" + user.uid);
        var data = {
            uid: user.uid,
            email: user.email || null,
            photoURL: user.photoURL || '',
        };
        return userRef.set(data, { merge: true });
    };
    // Sets user data to firestore after succesful signuplogin
    AuthService.prototype.newupdateUserData = function (user, name, company, phone) {
        var userRef = this.afs.doc("users/" + user.uid);
        var data = {
            uid: user.uid,
            email: user.email || null,
            displayName: user.displayName || name,
            photoURL: user.photoURL || '',
            company: user.company || company,
            phone: user.phone || phone,
        };
        return userRef.set(data, { merge: true });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
            angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _notify_service__WEBPACK_IMPORTED_MODULE_5__["NotifyService"],
            _users_users_service__WEBPACK_IMPORTED_MODULE_8__["UsersService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.guard */ "./src/app/core/auth.guard.ts");
/* harmony import */ var _notify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notify.service */ "./src/app/core/notify.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            providers: [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"], _notify_service__WEBPACK_IMPORTED_MODULE_3__["NotifyService"]]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/notify.service.ts":
/*!****************************************!*\
  !*** ./src/app/core/notify.service.ts ***!
  \****************************************/
/*! exports provided: NotifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifyService", function() { return NotifyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var NotifyService = /** @class */ (function () {
    function NotifyService() {
        this._msgSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.msg = this._msgSource.asObservable();
    }
    NotifyService.prototype.update = function (content, style) {
        var msg = { content: content, style: style };
        this._msgSource.next(msg);
    };
    NotifyService.prototype.clear = function () {
        this._msgSource.next(null);
    };
    NotifyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], NotifyService);
    return NotifyService;
}());



/***/ }),

/***/ "./src/app/machines/machine-details/machine-details.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/machines/machine-details/machine-details.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tab-buttons\">\n    <button class=\"button\" (click)=\"showTab('machineinfo')\">\n        Machine Info\n    </button>\n\n    <button class=\"button\" (click)=\"showTab('dinames')\">\n       DI Names\n    </button>\n\n    <button class=\"button\" (click)=\"showTab('ainames')\">\n        AI Names\n     </button>\n\n     <button class=\"button\" (click)=\"showTab('counters')\">\n        Counters\n     </button>\n\n     <button class=\"button\" (click)=\"showTab('durations')\">\n        Durations\n     </button>\n\n     <button class=\"button\" (click)=\"showTab('errorcodes')\">\n        Error Codes\n     </button>\n\n</div>\n<hr class=\"dbline\">\n<div class=\"tab-content\">\n    <div class=\"tab\" *ngIf=\"tabId === 'machineinfo'\">\n        <div class=\"basic-note\">\n            <h3><b>Machine Name: {{ machine.name }}</b></h3>\n          \n            <input [(ngModel)]=\"newname\" placeholder = {{machine.name}} class=\"input\" name=\"newname\">\n          \n            <p>Machine IP: {{ machine.ip }}</p>\n          <input [(ngModel)]=\"newip\" placeholder = {{machine.ip}} class=\"input\" name=\"newip\">\n        </div>\n    </div>\n\n    <div class=\"tab\" *ngIf=\"tabId === 'dinames'\">\n        \n      Names of Digital inputs can be set here\n\n    </div>\n    <div class=\"tab\" *ngIf=\"tabId === 'ainames'\">\n        \n        Names of Analog inputs can be set here\n  \n      </div>\n      <div class=\"tab\" *ngIf=\"tabId === 'counters'\">\n        \n          Names of counters can be set here\n    \n        </div>          \n \n        <div class=\"tab\" *ngIf=\"tabId === 'durations'\">\n        \n            Names of duration measurements can be set here\n      \n          </div>          \n\n          <div class=\"tab\" *ngIf=\"tabId === 'errorcodes'\">\n        \n              Names of error codes can be set here\n        \n            </div>          \n     \n</div>\n<hr class=\"dbline\">\n<span class=\"button is-small is-info\" (click)='updateMachine(machine?.id)'>\n    Save changes\n  </span>\n<span class=\"button is-small is-info\" (click)='toggleEnabled(machine?.enabled)'>\nEnabled: {{machine.enabled}}\n</span>\n<span class=\"button is-small is-danger\" (click)='deleteMachine(machine?.id)'>Delete</span>\n<hr class=\"dbline\">\n<hr class=\"dbline\">\n\n"

/***/ }),

/***/ "./src/app/machines/machine-details/machine-details.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/machines/machine-details/machine-details.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "hr.dbline {\n  border-top: 3px double #8c8b8b; }\n"

/***/ }),

/***/ "./src/app/machines/machine-details/machine-details.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/machines/machine-details/machine-details.component.ts ***!
  \***********************************************************************/
/*! exports provided: MachineDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MachineDetailsComponent", function() { return MachineDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _machines_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../machines.service */ "./src/app/machines/machines.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MachineDetailsComponent = /** @class */ (function () {
    function MachineDetailsComponent(machinesService) {
        this.machinesService = machinesService;
        this.tabId = 'machineinfo';
    }
    MachineDetailsComponent.prototype.updateMachine = function (id) {
        if (this.machine.id) {
            this.machinesService.updateMachine(id, {
                //machinedata
                name: this.newname || this.machine.name,
                ip: this.newip || this.machine.ip,
                enabled: this.machine.enabled
            });
        }
        else {
            console.error('Machine missing ID!');
        }
    };
    MachineDetailsComponent.prototype.toggleEnabled = function (val) {
        if (this.machine.id) {
            this.machinesService.updateMachine(this.machine.id, { enabled: !this.machine.enabled });
        }
        else {
            console.error('User missing ID!');
        }
    };
    MachineDetailsComponent.prototype.deleteMachine = function (id) {
        this.machinesService.deleteMachine(id);
    };
    MachineDetailsComponent.prototype.showTab = function (tabId) {
        this.tabId = tabId;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MachineDetailsComponent.prototype, "machine", void 0);
    MachineDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'machine-details',
            template: __webpack_require__(/*! ./machine-details.component.html */ "./src/app/machines/machine-details/machine-details.component.html"),
            styles: [__webpack_require__(/*! ./machine-details.component.scss */ "./src/app/machines/machine-details/machine-details.component.scss")]
        }),
        __metadata("design:paramtypes", [_machines_service__WEBPACK_IMPORTED_MODULE_1__["MachinesService"]])
    ], MachineDetailsComponent);
    return MachineDetailsComponent;
}());



/***/ }),

/***/ "./src/app/machines/machines-list/machines-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/machines/machines-list/machines-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box\" >\n    <div *ngIf=\"auth.user | async; then authenticated else guest\">\n            <!-- template will replace this div -->\n    </div>\n  </div>\n  \n  <!-- User NOT logged in -->\n  <ng-template #guest class=\"box\">\n    <h3>GUEST</h3>\n    <p class=\"card-text\">You must be registered, logged in and admin to manage machines</p>\n    <button class=\"button\" routerLink=\"/login\">Login/Register</button>\n  </ng-template>\n  \n  <!-- User logged in -->\n  <ng-template #authenticated>\n    <div *ngIf=\"auth.user | async as user\">\n      <div *ngIf=\"user.isAdmin;else noadmin\">\n          <hr>\n          <p>Add new machine or edit machines below: </p>\n          <input [(ngModel)]=\"name\" placeholder=\"Machine name\" class=\"input\" name=\"machinename\">\n          <input [(ngModel)]=\"ip\" placeholder=\"Machine ip address\" class=\"input\" name=\"machineip\">\n          \n          <button class=\"button is-success\" (click)=\"clickHandler()\" [disabled]=\"name?.length < 2 || name?.length > 200 || ip?.length < 7 || ip?.length > 15\">\n            Add Machine\n          </button>\n          <hr>\n          \n        <div *ngFor=\"let machine of machines | async\">\n              <machine-details [machine]=\"machine\"></machine-details>\n          </div>\n      </div>\n     </div>\n  </ng-template>\n\n    <ng-template #noadmin class=\"box\">\n        <h3></h3>\n        <p class=\"card-text\">You must be admin to manage machines.</p>\n        <p class=\"card-text\">Contact your administrator to get admin status.</p>\n    </ng-template>\n    \n  "

/***/ }),

/***/ "./src/app/machines/machines-list/machines-list.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/machines/machines-list/machines-list.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/machines/machines-list/machines-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/machines/machines-list/machines-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: MachinesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MachinesListComponent", function() { return MachinesListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _machines_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../machines.service */ "./src/app/machines/machines.service.ts");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/auth.service */ "./src/app/core/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MachinesListComponent = /** @class */ (function () {
    function MachinesListComponent(machinesService, auth) {
        this.machinesService = machinesService;
        this.auth = auth;
        this.enabled = true;
    }
    MachinesListComponent.prototype.ngOnInit = function () {
        this.machines = this.machinesService.getData();
    };
    MachinesListComponent.prototype.clickHandler = function () {
        this.machinesService.createMachine(this.name, this.ip, this.enabled);
        this.name = '';
        this.ip = '';
    };
    MachinesListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'machines-list',
            template: __webpack_require__(/*! ./machines-list.component.html */ "./src/app/machines/machines-list/machines-list.component.html"),
            styles: [__webpack_require__(/*! ./machines-list.component.scss */ "./src/app/machines/machines-list/machines-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_machines_service__WEBPACK_IMPORTED_MODULE_1__["MachinesService"], _core_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], MachinesListComponent);
    return MachinesListComponent;
}());



/***/ }),

/***/ "./src/app/machines/machines.module.ts":
/*!*********************************************!*\
  !*** ./src/app/machines/machines.module.ts ***!
  \*********************************************/
/*! exports provided: MachinesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MachinesModule", function() { return MachinesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _machine_details_machine_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./machine-details/machine-details.component */ "./src/app/machines/machine-details/machine-details.component.ts");
/* harmony import */ var _machines_list_machines_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./machines-list/machines-list.component */ "./src/app/machines/machines-list/machines-list.component.ts");
/* harmony import */ var _machines_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./machines.service */ "./src/app/machines/machines.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var MachinesModule = /** @class */ (function () {
    function MachinesModule() {
    }
    MachinesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]
            ],
            declarations: [_machine_details_machine_details_component__WEBPACK_IMPORTED_MODULE_3__["MachineDetailsComponent"], _machines_list_machines_list_component__WEBPACK_IMPORTED_MODULE_4__["MachinesListComponent"]],
            providers: [_machines_service__WEBPACK_IMPORTED_MODULE_5__["MachinesService"]]
        })
    ], MachinesModule);
    return MachinesModule;
}());



/***/ }),

/***/ "./src/app/machines/machines.service.ts":
/*!**********************************************!*\
  !*** ./src/app/machines/machines.service.ts ***!
  \**********************************************/
/*! exports provided: MachinesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MachinesService", function() { return MachinesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MachinesService = /** @class */ (function () {
    function MachinesService(afs) {
        this.afs = afs;
        this.machinesCollection = this.afs.collection('machines', function (ref) { return ref.orderBy('name', 'desc'); });
    }
    MachinesService.prototype.getData = function () {
        // ['added', 'modified', 'removed']
        return this.machinesCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                return __assign({ id: a.payload.doc.id }, data);
            });
        }));
    };
    MachinesService.prototype.getMachine = function (id) {
        return this.afs.doc("machines/" + id);
    };
    MachinesService.prototype.createMachine = function (name, ip, enabled) {
        var machine = {
            name: name,
            ip: ip,
            enabled: enabled,
        };
        return this.machinesCollection.add(machine);
    };
    MachinesService.prototype.updateMachine = function (id, data) {
        return this.getMachine(id).update(data);
    };
    MachinesService.prototype.deleteMachine = function (id) {
        return this.getMachine(id).delete();
    };
    MachinesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], MachinesService);
    return MachinesService;
}());



/***/ }),

/***/ "./src/app/monitoring/monitoring-detail/monitoring-detail.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/monitoring/monitoring-detail/monitoring-detail.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<hr class=\"dbline\">\n\n<div class=\"tab-buttons\">\n    <button class=\"button\" (click)=\"showTab('main')\">\n        Main\n    </button>\n\n    <button class=\"button\" (click)=\"showTab('data')\">\n       Data\n    </button>\n\n    <button class=\"button\" (click)=\"showTab('events')\">\n        Events\n     </button>\n\n     <button class=\"button\" (click)=\"showTab('errorcodes')\">\n        Errors\n     </button>\n</div>\n<hr>\n<div class=\"tab-content\">\n    <div class=\"tab\" *ngIf=\"tabId === 'main'\">\n        <div class=\"basic-note\">\n            <h3><b>Machine Name: {{ machine.name }}</b></h3>\n                 \n            <p>Machine IP: {{ machine.ip }}</p>\n        </div>\n    </div>\n\n    <div class=\"tab\" *ngIf=\"tabId === 'data'\">\n        \n      Data here\n\n    </div>\n    <div class=\"tab\" *ngIf=\"tabId === 'events'\">\n        \n        Events here\n  \n      </div>\n   \n          <div class=\"tab\" *ngIf=\"tabId === 'errorcodes'\">\n        \n              Error codes here\n        \n            </div>          \n     \n</div>\n<hr class=\"dbline\">"

/***/ }),

/***/ "./src/app/monitoring/monitoring-detail/monitoring-detail.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/monitoring/monitoring-detail/monitoring-detail.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "hr.dbline {\n  border-top: 3px double #8c8b8b; }\n"

/***/ }),

/***/ "./src/app/monitoring/monitoring-detail/monitoring-detail.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/monitoring/monitoring-detail/monitoring-detail.component.ts ***!
  \*****************************************************************************/
/*! exports provided: MonitoringDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonitoringDetailComponent", function() { return MonitoringDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _machines_machines_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../machines/machines.service */ "./src/app/machines/machines.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MonitoringDetailComponent = /** @class */ (function () {
    function MonitoringDetailComponent(machinesService) {
        //this.monitoredMachine = this.machinesService.getByMachineRef(this.machine.id);
        this.machinesService = machinesService;
        this.tabId = 'main';
    }
    MonitoringDetailComponent.prototype.showTab = function (tabId) {
        this.tabId = tabId;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MonitoringDetailComponent.prototype, "machine", void 0);
    MonitoringDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'monitoring-detail',
            template: __webpack_require__(/*! ./monitoring-detail.component.html */ "./src/app/monitoring/monitoring-detail/monitoring-detail.component.html"),
            styles: [__webpack_require__(/*! ./monitoring-detail.component.scss */ "./src/app/monitoring/monitoring-detail/monitoring-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_machines_machines_service__WEBPACK_IMPORTED_MODULE_1__["MachinesService"]])
    ], MonitoringDetailComponent);
    return MonitoringDetailComponent;
}());



/***/ }),

/***/ "./src/app/monitoring/monitoring-list/monitoring-list.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/monitoring/monitoring-list/monitoring-list.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n        <div class=\"btn-group btn-group-toggle\" ngbRadioGroup name=\"radioBasic\" [(ngModel)]=\"selectedmachine\">\n\n                <div *ngFor=\"let mach of machines | async\">\n                                <label ngbButtonLabel class=\"btn-primary\">\n                                <input ngbButton type=\"radio\" [value] = mach> {{mach.name}}\n                                </label>\n                        <!--                      \n                        <button (click)=\"showMachine(mach)\">\n                                {{mach.name}}\n                            </button>\n                        -->\n        \n                </div>\n        \n        </div>\n\n\n                <monitoring-detail [machine]=\"selectedmachine\"></monitoring-detail>\n\n"

/***/ }),

/***/ "./src/app/monitoring/monitoring-list/monitoring-list.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/monitoring/monitoring-list/monitoring-list.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/monitoring/monitoring-list/monitoring-list.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/monitoring/monitoring-list/monitoring-list.component.ts ***!
  \*************************************************************************/
/*! exports provided: MonitoringListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonitoringListComponent", function() { return MonitoringListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _machines_machines_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../machines/machines.service */ "./src/app/machines/machines.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MonitoringListComponent = /** @class */ (function () {
    function MonitoringListComponent(machinesService) {
        this.machinesService = machinesService;
        this.selectedmachine = "";
    }
    MonitoringListComponent.prototype.ngOnInit = function () {
        this.machines = this.machinesService.getData();
    };
    MonitoringListComponent.prototype.showMachine = function (machi) {
        this.selectedmachine = machi;
        //console.log(machi.id);
    };
    MonitoringListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'monitoring-list',
            template: __webpack_require__(/*! ./monitoring-list.component.html */ "./src/app/monitoring/monitoring-list/monitoring-list.component.html"),
            styles: [__webpack_require__(/*! ./monitoring-list.component.scss */ "./src/app/monitoring/monitoring-list/monitoring-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_machines_machines_service__WEBPACK_IMPORTED_MODULE_1__["MachinesService"]])
    ], MonitoringListComponent);
    return MonitoringListComponent;
}());



/***/ }),

/***/ "./src/app/monitoring/monitoring.module.ts":
/*!*************************************************!*\
  !*** ./src/app/monitoring/monitoring.module.ts ***!
  \*************************************************/
/*! exports provided: MonitoringModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonitoringModule", function() { return MonitoringModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _monitoring_list_monitoring_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./monitoring-list/monitoring-list.component */ "./src/app/monitoring/monitoring-list/monitoring-list.component.ts");
/* harmony import */ var _monitoring_detail_monitoring_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./monitoring-detail/monitoring-detail.component */ "./src/app/monitoring/monitoring-detail/monitoring-detail.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var MonitoringModule = /** @class */ (function () {
    function MonitoringModule() {
    }
    MonitoringModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
            ],
            declarations: [_monitoring_list_monitoring_list_component__WEBPACK_IMPORTED_MODULE_2__["MonitoringListComponent"], _monitoring_detail_monitoring_detail_component__WEBPACK_IMPORTED_MODULE_3__["MonitoringDetailComponent"]]
        })
    ], MonitoringModule);
    return MonitoringModule;
}());



/***/ }),

/***/ "./src/app/notes/note-detail/note-detail.component.html":
/*!**************************************************************!*\
  !*** ./src/app/notes/note-detail/note-detail.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"basic-note\">\r\n    <h3>{{ note.content }}</h3>\r\n    <span class=\"button is-small is-info\" (click)='addHeartToNote(note.hearts)'>\r\n    Like <i class=\"fa fa-heart\" style=\"margin-left: 5px;\"></i>\r\n  </span>\r\n    <span class=\"button is-small is-danger\" (click)='deleteNote(note?.id)'>Delete</span>\r\n    <p>Liked: {{ note.hearts || 0 }} times.</p>\r\n</div>"

/***/ }),

/***/ "./src/app/notes/note-detail/note-detail.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/notes/note-detail/note-detail.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".basic-note {\n  visibility: visible; }\n"

/***/ }),

/***/ "./src/app/notes/note-detail/note-detail.component.ts":
/*!************************************************************!*\
  !*** ./src/app/notes/note-detail/note-detail.component.ts ***!
  \************************************************************/
/*! exports provided: NoteDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteDetailComponent", function() { return NoteDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _notes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../notes.service */ "./src/app/notes/notes.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NoteDetailComponent = /** @class */ (function () {
    function NoteDetailComponent(notesService) {
        this.notesService = notesService;
    }
    NoteDetailComponent.prototype.addHeartToNote = function (val) {
        if (this.note.id) {
            this.notesService.updateNote(this.note.id, { hearts: val + 1 });
        }
        else {
            console.error('Note missing ID!');
        }
    };
    NoteDetailComponent.prototype.deleteNote = function (id) {
        this.notesService.deleteNote(id);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NoteDetailComponent.prototype, "note", void 0);
    NoteDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'note-detail',
            template: __webpack_require__(/*! ./note-detail.component.html */ "./src/app/notes/note-detail/note-detail.component.html"),
            styles: [__webpack_require__(/*! ./note-detail.component.scss */ "./src/app/notes/note-detail/note-detail.component.scss")],
        }),
        __metadata("design:paramtypes", [_notes_service__WEBPACK_IMPORTED_MODULE_1__["NotesService"]])
    ], NoteDetailComponent);
    return NoteDetailComponent;
}());



/***/ }),

/***/ "./src/app/notes/notes-list/notes-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/notes/notes-list/notes-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>TOTECH Comments</h1>\r\n<p>\r\n    Leave a comment or like a comment below:\r\n</p>\r\n<hr>\r\n\r\n<input [(ngModel)]=\"content\" placeholder=\"Add your own comment\" class=\"input\" name=\"note\">\r\n\r\n\r\n<button class=\"button is-success\" (click)=\"clickHandler()\" [disabled]=\"content?.length < 2 || content?.length > 200\">\r\n  Add Comment\r\n</button>\r\n<hr>\r\n<div *ngFor=\"let note of notes | async\">\r\n    <note-detail [note]=\"note\"></note-detail>\r\n</div>"

/***/ }),

/***/ "./src/app/notes/notes-list/notes-list.component.scss":
/*!************************************************************!*\
  !*** ./src/app/notes/notes-list/notes-list.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/notes/notes-list/notes-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/notes/notes-list/notes-list.component.ts ***!
  \**********************************************************/
/*! exports provided: NotesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesListComponent", function() { return NotesListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _notes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../notes.service */ "./src/app/notes/notes.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotesListComponent = /** @class */ (function () {
    function NotesListComponent(notesService) {
        this.notesService = notesService;
    }
    NotesListComponent.prototype.ngOnInit = function () {
        this.notes = this.notesService.getData();
    };
    NotesListComponent.prototype.clickHandler = function () {
        this.notesService.createNote(this.content);
        this.content = '';
    };
    NotesListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'notes-list',
            template: __webpack_require__(/*! ./notes-list.component.html */ "./src/app/notes/notes-list/notes-list.component.html"),
            styles: [__webpack_require__(/*! ./notes-list.component.scss */ "./src/app/notes/notes-list/notes-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_notes_service__WEBPACK_IMPORTED_MODULE_1__["NotesService"]])
    ], NotesListComponent);
    return NotesListComponent;
}());



/***/ }),

/***/ "./src/app/notes/notes.module.ts":
/*!***************************************!*\
  !*** ./src/app/notes/notes.module.ts ***!
  \***************************************/
/*! exports provided: NotesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesModule", function() { return NotesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _notes_list_notes_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notes-list/notes-list.component */ "./src/app/notes/notes-list/notes-list.component.ts");
/* harmony import */ var _note_detail_note_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./note-detail/note-detail.component */ "./src/app/notes/note-detail/note-detail.component.ts");
/* harmony import */ var _notes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notes.service */ "./src/app/notes/notes.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var NotesModule = /** @class */ (function () {
    function NotesModule() {
    }
    NotesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            declarations: [_notes_list_notes_list_component__WEBPACK_IMPORTED_MODULE_3__["NotesListComponent"], _note_detail_note_detail_component__WEBPACK_IMPORTED_MODULE_4__["NoteDetailComponent"]],
            providers: [_notes_service__WEBPACK_IMPORTED_MODULE_5__["NotesService"]]
        })
    ], NotesModule);
    return NotesModule;
}());



/***/ }),

/***/ "./src/app/notes/notes.service.ts":
/*!****************************************!*\
  !*** ./src/app/notes/notes.service.ts ***!
  \****************************************/
/*! exports provided: NotesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesService", function() { return NotesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotesService = /** @class */ (function () {
    function NotesService(afs) {
        this.afs = afs;
        this.notesCollection = this.afs.collection('notes', function (ref) { return ref.orderBy('time', 'desc').limit(5); });
    }
    NotesService.prototype.getData = function () {
        // ['added', 'modified', 'removed']
        return this.notesCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                return __assign({ id: a.payload.doc.id }, data);
            });
        }));
    };
    NotesService.prototype.getNote = function (id) {
        return this.afs.doc("notes/" + id);
    };
    NotesService.prototype.createNote = function (content) {
        var note = {
            content: content,
            hearts: 0,
            time: new Date().getTime(),
        };
        return this.notesCollection.add(note);
    };
    NotesService.prototype.updateNote = function (id, data) {
        return this.getNote(id).update(data);
    };
    NotesService.prototype.deleteNote = function (id) {
        return this.getNote(id).delete();
    };
    NotesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], NotesService);
    return NotesService;
}());



/***/ }),

/***/ "./src/app/presentation/en/en.component.html":
/*!***************************************************!*\
  !*** ./src/app/presentation/en/en.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngb-carousel *ngIf=\"images\">\r\n    <ng-template ngbSlide>\r\n      <img [src]=\"images[0]\" alt=\"slide\">\r\n      <div class=\"carousel-caption\">\r\n        <!-- <h3>First slide label</h3>-->\r\n      </div>\r\n    </ng-template>\r\n    <ng-template ngbSlide>\r\n      <img [src]=\"images[1]\" alt=\"slide\">\r\n      <div class=\"carousel-caption\">\r\n      </div>\r\n    </ng-template>\r\n    <ng-template ngbSlide>\r\n        <img [src]=\"images[2]\" alt=\"slide\">\r\n        <div class=\"carousel-caption\">\r\n        </div>\r\n      </ng-template>\r\n      <ng-template ngbSlide>\r\n          <img [src]=\"images[3]\" alt=\"slide\">\r\n          <div class=\"carousel-caption\">\r\n          </div>\r\n        </ng-template>\r\n        <ng-template ngbSlide>\r\n            <img [src]=\"images[4]\" alt=\"slide\">\r\n            <div class=\"carousel-caption\">\r\n            </div>\r\n          </ng-template>\r\n          <ng-template ngbSlide>\r\n              <img [src]=\"images[5]\" alt=\"slide\">\r\n              <div class=\"carousel-caption\">\r\n              </div>\r\n            </ng-template>\r\n            <ng-template ngbSlide>\r\n                <img [src]=\"images[6]\" alt=\"slide\">\r\n                <div class=\"carousel-caption\">\r\n                </div>\r\n              </ng-template>\r\n              <ng-template ngbSlide>\r\n                  <img [src]=\"images[7]\" alt=\"slide\">\r\n                  <div class=\"carousel-caption\">\r\n                  </div>\r\n                </ng-template>\r\n                <ng-template ngbSlide>\r\n                    <img [src]=\"images[8]\" alt=\"slide\">\r\n                    <div class=\"carousel-caption\">\r\n                    </div>\r\n                  </ng-template>\r\n                  <ng-template ngbSlide>\r\n                      <img [src]=\"images[9]\" alt=\"slide\">\r\n                      <div class=\"carousel-caption\">\r\n                      </div>\r\n                    </ng-template>\r\n                    <ng-template ngbSlide>\r\n                        <img [src]=\"images[10]\" alt=\"slide\">\r\n                        <div class=\"carousel-caption\">\r\n                        </div>\r\n                      </ng-template>\r\n                      <ng-template ngbSlide>\r\n                          <img [src]=\"images[11]\" alt=\"slide\">\r\n                          <div class=\"carousel-caption\">\r\n                          </div>\r\n                        </ng-template>\r\n                            </ngb-carousel>"

/***/ }),

/***/ "./src/app/presentation/en/en.component.scss":
/*!***************************************************!*\
  !*** ./src/app/presentation/en/en.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/presentation/en/en.component.ts":
/*!*************************************************!*\
  !*** ./src/app/presentation/en/en.component.ts ***!
  \*************************************************/
/*! exports provided: EnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnComponent", function() { return EnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EnComponent = /** @class */ (function () {
    function EnComponent() {
        this.images = [
            "./assets/en/Slide1.PNG",
            "./assets/en/Slide2.PNG",
            "./assets/en/Slide3.PNG",
            "./assets/en/Slide4.PNG",
            "./assets/en/Slide5.PNG",
            "./assets/en/Slide6.PNG",
            "./assets/en/Slide7.PNG",
            "./assets/en/Slide8.PNG",
            "./assets/en/Slide9.PNG",
            "./assets/en/Slide10.PNG",
            "./assets/en/Slide11.PNG",
            "./assets/en/Slide12.PNG"
        ];
    }
    EnComponent.prototype.ngOnInit = function () {
    };
    EnComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'en',
            template: __webpack_require__(/*! ./en.component.html */ "./src/app/presentation/en/en.component.html"),
            styles: [__webpack_require__(/*! ./en.component.scss */ "./src/app/presentation/en/en.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EnComponent);
    return EnComponent;
}());



/***/ }),

/***/ "./src/app/presentation/fi/fi.component.html":
/*!***************************************************!*\
  !*** ./src/app/presentation/fi/fi.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngb-carousel *ngIf=\"images\">\n    <ng-template ngbSlide>\n      <img [src]=\"images[0]\" alt=\"Random first slide\">\n      <div class=\"carousel-caption\">\n        <h3>First slide label</h3>\n        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\n      </div>\n    </ng-template>\n    <ng-template ngbSlide>\n      <img [src]=\"images[1]\" alt=\"Random second slide\">\n      <div class=\"carousel-caption\">\n        <h3>Second slide label</h3>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n      </div>\n    </ng-template>\n  </ngb-carousel>"

/***/ }),

/***/ "./src/app/presentation/fi/fi.component.scss":
/*!***************************************************!*\
  !*** ./src/app/presentation/fi/fi.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/presentation/fi/fi.component.ts":
/*!*************************************************!*\
  !*** ./src/app/presentation/fi/fi.component.ts ***!
  \*************************************************/
/*! exports provided: FiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiComponent", function() { return FiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FiComponent = /** @class */ (function () {
    function FiComponent() {
        this.images = [
            "./assets/totech_logo.jpg",
            "./assets/totech_logo_inverse.jpg"
        ];
    }
    FiComponent.prototype.ngOnInit = function () {
    };
    FiComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fi',
            template: __webpack_require__(/*! ./fi.component.html */ "./src/app/presentation/fi/fi.component.html"),
            styles: [__webpack_require__(/*! ./fi.component.scss */ "./src/app/presentation/fi/fi.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FiComponent);
    return FiComponent;
}());



/***/ }),

/***/ "./src/app/presentation/presentation.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/presentation/presentation.module.ts ***!
  \*****************************************************/
/*! exports provided: PresentationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresentationModule", function() { return PresentationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _en_en_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./en/en.component */ "./src/app/presentation/en/en.component.ts");
/* harmony import */ var _fi_fi_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fi/fi.component */ "./src/app/presentation/fi/fi.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PresentationModule = /** @class */ (function () {
    function PresentationModule() {
    }
    PresentationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]
            ],
            declarations: [_en_en_component__WEBPACK_IMPORTED_MODULE_2__["EnComponent"], _fi_fi_component__WEBPACK_IMPORTED_MODULE_3__["FiComponent"]]
        })
    ], PresentationModule);
    return PresentationModule;
}());



/***/ }),

/***/ "./src/app/ui/home-page/home-page.component.html":
/*!*******************************************************!*\
  !*** ./src/app/ui/home-page/home-page.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n         <!--Partner logos-->\r\n         <logos></logos>\r\n         \r\n<div class=\"centered-wrapper\">\r\n    <div class=\"centered-content>\">    \r\n    <a routerLink=\"/\" align=\"center\">\r\n    <img src=\"assets/totech_logo.jpg\" alt=\"TOTECH\" />\r\n</a>\r\n<h1>Web Application</h1>\r\n\r\n<p>Coming soon...</p>\r\n\r\n<p>Email: <a href=\"mailto:toni.pitkakangas@totech.fi?Subject=Hello%20TOTECH\" target=\"_top\">toni.pitkakangas@totech.fi</a></p>\r\n<p>Phone: +358 407356596</p>\r\n</div>\r\n</div>"

/***/ }),

/***/ "./src/app/ui/home-page/home-page.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/ui/home-page/home-page.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".centered-wrapper {\n  position: relative;\n  text-align: center; }\n\n.centered-wrapper:before {\n  content: \"\";\n  position: relative;\n  display: inline-block;\n  width: 0;\n  height: 100%;\n  vertical-align: middle; }\n\n.centered-content {\n  display: inline-block;\n  vertical-align: middle; }\n"

/***/ }),

/***/ "./src/app/ui/home-page/home-page.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/ui/home-page/home-page.component.ts ***!
  \*****************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/ui/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.scss */ "./src/app/ui/home-page/home-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/ui/loading-spinner/loading-spinner.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/ui/loading-spinner/loading-spinner.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner\">\r\n  <div class=\"rect1\"></div>\r\n  <div class=\"rect2\"></div>\r\n  <div class=\"rect3\"></div>\r\n  <div class=\"rect4\"></div>\r\n  <div class=\"rect5\"></div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ui/loading-spinner/loading-spinner.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/ui/loading-spinner/loading-spinner.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spinner {\n  margin: 100px auto;\n  width: 50px;\n  height: 40px;\n  text-align: center;\n  font-size: 10px; }\n\n.spinner > div {\n  background-color: #333;\n  height: 100%;\n  width: 6px;\n  display: inline-block;\n  -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;\n  animation: sk-stretchdelay 1.2s infinite ease-in-out; }\n\n.spinner .rect2 {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s; }\n\n.spinner .rect3 {\n  -webkit-animation-delay: -1.0s;\n  animation-delay: -1.0s; }\n\n.spinner .rect4 {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s; }\n\n.spinner .rect5 {\n  -webkit-animation-delay: -0.8s;\n  animation-delay: -0.8s; }\n\n@-webkit-keyframes sk-stretchdelay {\n  0%, 40%, 100% {\n    -webkit-transform: scaleY(0.4); }\n  20% {\n    -webkit-transform: scaleY(1); } }\n\n@keyframes sk-stretchdelay {\n  0%, 40%, 100% {\n    transform: scaleY(0.4);\n    -webkit-transform: scaleY(0.4); }\n  20% {\n    transform: scaleY(1);\n    -webkit-transform: scaleY(1); } }\n"

/***/ }),

/***/ "./src/app/ui/loading-spinner/loading-spinner.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/ui/loading-spinner/loading-spinner.component.ts ***!
  \*****************************************************************/
/*! exports provided: LoadingSpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingSpinnerComponent", function() { return LoadingSpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingSpinnerComponent = /** @class */ (function () {
    function LoadingSpinnerComponent() {
    }
    LoadingSpinnerComponent.prototype.ngOnInit = function () {
    };
    LoadingSpinnerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'loading-spinner',
            template: __webpack_require__(/*! ./loading-spinner.component.html */ "./src/app/ui/loading-spinner/loading-spinner.component.html"),
            styles: [__webpack_require__(/*! ./loading-spinner.component.scss */ "./src/app/ui/loading-spinner/loading-spinner.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoadingSpinnerComponent);
    return LoadingSpinnerComponent;
}());



/***/ }),

/***/ "./src/app/ui/logos/logos.component.html":
/*!***********************************************!*\
  !*** ./src/app/ui/logos/logos.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <ul style = \"list-style-type:none\">\n      <li style = \"float:left\"><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://industrial.omron.fi/fi/home\"> <img src=\"assets/logos/OMRON_Logo_png.png\" alt=\"OMRON\" /></a></li>\n    <li style = \"float:right\"><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.bedika.fi/\"> <img src=\"assets/logos/BEDIKA_Logo_png.png\" alt=\"BEDIKA\" /></a></li>\n  </ul>\n</div>\n<hr>\n"

/***/ }),

/***/ "./src/app/ui/logos/logos.component.scss":
/*!***********************************************!*\
  !*** ./src/app/ui/logos/logos.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ui/logos/logos.component.ts":
/*!*********************************************!*\
  !*** ./src/app/ui/logos/logos.component.ts ***!
  \*********************************************/
/*! exports provided: LogosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogosComponent", function() { return LogosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LogosComponent = /** @class */ (function () {
    function LogosComponent() {
    }
    LogosComponent.prototype.ngOnInit = function () {
    };
    LogosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'logos',
            template: __webpack_require__(/*! ./logos.component.html */ "./src/app/ui/logos/logos.component.html"),
            styles: [__webpack_require__(/*! ./logos.component.scss */ "./src/app/ui/logos/logos.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LogosComponent);
    return LogosComponent;
}());



/***/ }),

/***/ "./src/app/ui/main-nav/main-nav.component.html":
/*!*****************************************************!*\
  !*** ./src/app/ui/main-nav/main-nav.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar bg-dark\" role=\"navigation\" aria-label=\"main navigation\">\r\n    <div class=\"navbar-brand\">\r\n        <a routerLink=\"/\">\r\n            <img src=\"assets/totech_logo_inverse.jpg\" width = \"20%\" height=\"20%\"alt=\"TOTECH\" />\r\n        </a>\r\n\r\n        <a id=\"navToggle\" role=\"button\" class=\"navbar-burger\" (click)=\"toggleCollapse()\" [ngClass]=\"{'is-active': show}\">\r\n            <span aria-hidden=\"true\"></span>\r\n            <span aria-hidden=\"true\"></span>\r\n            <span aria-hidden=\"true\"></span>\r\n        </a>\r\n    </div>\r\n\r\n    <div class=\"navbar-menu\" [ngClass]=\"{'is-active': show}\">\r\n   \r\n            <div class=\"navbar-end\">\r\n            <a routerLink=\"/\">\r\n        Contact\r\n      </a>\r\n      <span>&nbsp;&nbsp;</span>\r\n            <a routerLink=\"/\">\r\n        About\r\n            </a>\r\n        </div>\r\n    </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/ui/main-nav/main-nav.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/ui/main-nav/main-nav.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\n  border-bottom: 1px solid #E4E4E4;\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.1);\n  margin-bottom: 25px; }\n\n.navbar-default .navbar-brand {\n  padding: 0 3em 0 2em;\n  color: orangered !important; }\n\n.navbar-menu {\n  padding-right: 3em; }\n"

/***/ }),

/***/ "./src/app/ui/main-nav/main-nav.component.ts":
/*!***************************************************!*\
  !*** ./src/app/ui/main-nav/main-nav.component.ts ***!
  \***************************************************/
/*! exports provided: MainNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavComponent", function() { return MainNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainNavComponent = /** @class */ (function () {
    function MainNavComponent() {
        this.show = false;
    }
    MainNavComponent.prototype.toggleCollapse = function () {
        this.show = !this.show;
    };
    MainNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'main-nav',
            template: __webpack_require__(/*! ./main-nav.component.html */ "./src/app/ui/main-nav/main-nav.component.html"),
            styles: [__webpack_require__(/*! ./main-nav.component.scss */ "./src/app/ui/main-nav/main-nav.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MainNavComponent);
    return MainNavComponent;
}());



/***/ }),

/***/ "./src/app/ui/notification-message/notification-message.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/ui/notification-message/notification-message.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"notify.msg | async as msg\" class=\"notification\"\r\n  [ngClass]=\"{ \r\n    'is-danger': msg.style == 'error',\r\n    'is-success': msg.style == 'success',\r\n    'is-info': msg.style == 'info'\r\n  }\">\r\n  <button class=\"delete\" (click)=\"notify.clear()\"></button>\r\n  {{ msg.content }}\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ui/notification-message/notification-message.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/ui/notification-message/notification-message.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ui/notification-message/notification-message.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/ui/notification-message/notification-message.component.ts ***!
  \***************************************************************************/
/*! exports provided: NotificationMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationMessageComponent", function() { return NotificationMessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_notify_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/notify.service */ "./src/app/core/notify.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationMessageComponent = /** @class */ (function () {
    function NotificationMessageComponent(notify) {
        this.notify = notify;
    }
    NotificationMessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'notification-message',
            template: __webpack_require__(/*! ./notification-message.component.html */ "./src/app/ui/notification-message/notification-message.component.html"),
            styles: [__webpack_require__(/*! ./notification-message.component.scss */ "./src/app/ui/notification-message/notification-message.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_notify_service__WEBPACK_IMPORTED_MODULE_1__["NotifyService"]])
    ], NotificationMessageComponent);
    return NotificationMessageComponent;
}());



/***/ }),

/***/ "./src/app/ui/ssr-page/ssr-page.component.html":
/*!*****************************************************!*\
  !*** ./src/app/ui/ssr-page/ssr-page.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Angular Universal Server Rendered Page</h1>\r\n\r\n<p>\r\n  This page is prerendered with Angular Universal and is 100% search engine and linkbot friedly - and highly performant. Give this URL a whirl in the\r\n  <a href=\"https://cards-dev.twitter.com/validator\">twitter-card validator</a>\r\n</p>\r\n\r\n<p>Learn all about <a href=\"https://angularfirebase.com/tag/ssr/\">server-side rendering strategies in Angular</a></p>\r\n\r\n<h2>Dynamic Firebase Data</h2>\r\n\r\n<p>Need SSR with dynamic Firebase data? No problem. Here are some animals I retrieved from Cloud Firestore.</p>\r\n\r\n<div *ngFor=\"let animal of animals\" class=\"box\">\r\n  <article class=\"media\">\r\n    <div class=\"media-left\">\r\n      <figure class=\"image is-128x128\">\r\n        <img [src]=\"animal.imgURL\" alt=\"{{ animal.bio }}\">\r\n      </figure>\r\n    </div>\r\n    <div class=\"media-content\">\r\n      <div class=\"content\">\r\n        <p>\r\n          <strong>{{ animal.name }}</strong>\r\n          <br> {{ animal.bio }}\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </article>\r\n</div>"

/***/ }),

/***/ "./src/app/ui/ssr-page/ssr-page.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/ui/ssr-page/ssr-page.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ui/ssr-page/ssr-page.component.ts":
/*!***************************************************!*\
  !*** ./src/app/ui/ssr-page/ssr-page.component.ts ***!
  \***************************************************/
/*! exports provided: SsrPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SsrPageComponent", function() { return SsrPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DATA = Object(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["makeStateKey"])('animals');
var SsrPageComponent = /** @class */ (function () {
    function SsrPageComponent(afs, meta, titleService, state) {
        this.afs = afs;
        this.meta = meta;
        this.titleService = titleService;
        this.state = state;
    }
    SsrPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        // set metatags for twitter
        this.setMetaTags();
        // Get the animals from the database
        var animals$ = this.afs.collection('animals').valueChanges();
        // If state is available, start with it your observable
        var exists = this.state.get(DATA, []);
        if (!exists.length) {
            animals$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (list) {
                _this.state.set(DATA, list);
                _this.animals = list;
            }))
                .subscribe();
        }
        else {
            this.animals = exists;
        }
    };
    SsrPageComponent.prototype.setMetaTags = function () {
        this.titleService.setTitle('Angular Firebase Animals');
        // Set meta tags
        this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
        this.meta.updateTag({ name: 'twitter:site', content: '@angularfirebase' });
        this.meta.updateTag({ name: 'twitter:title', content: 'Angular Firebase Animals' });
        this.meta.updateTag({ name: 'twitter:description', content: 'A server-rendered list of animals from Cloud Firestore in Angular' });
        this.meta.updateTag({ name: 'twitter:image', content: 'https://goo.gl/MzskMe' });
    };
    SsrPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ssr-page',
            template: __webpack_require__(/*! ./ssr-page.component.html */ "./src/app/ui/ssr-page/ssr-page.component.html"),
            styles: [__webpack_require__(/*! ./ssr-page.component.scss */ "./src/app/ui/ssr-page/ssr-page.component.scss")]
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["TransferState"]])
    ], SsrPageComponent);
    return SsrPageComponent;
}());



/***/ }),

/***/ "./src/app/ui/ui.module.ts":
/*!*********************************!*\
  !*** ./src/app/ui/ui.module.ts ***!
  \*********************************/
/*! exports provided: UiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiModule", function() { return UiModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-login/user-login.component */ "./src/app/ui/user-login/user-login.component.ts");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/ui/home-page/home-page.component.ts");
/* harmony import */ var _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main-nav/main-nav.component */ "./src/app/ui/main-nav/main-nav.component.ts");
/* harmony import */ var _loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./loading-spinner/loading-spinner.component */ "./src/app/ui/loading-spinner/loading-spinner.component.ts");
/* harmony import */ var _notification_message_notification_message_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./notification-message/notification-message.component */ "./src/app/ui/notification-message/notification-message.component.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/ui/user-profile/user-profile.component.ts");
/* harmony import */ var _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user-form/user-form.component */ "./src/app/ui/user-form/user-form.component.ts");
/* harmony import */ var _ssr_page_ssr_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ssr-page/ssr-page.component */ "./src/app/ui/ssr-page/ssr-page.component.ts");
/* harmony import */ var _logos_logos_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./logos/logos.component */ "./src/app/ui/logos/logos.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var UiModule = /** @class */ (function () {
    function UiModule() {
    }
    UiModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
            declarations: [
                _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_5__["UserLoginComponent"],
                _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_6__["HomePageComponent"],
                _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_7__["MainNavComponent"],
                _loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_8__["LoadingSpinnerComponent"],
                _notification_message_notification_message_component__WEBPACK_IMPORTED_MODULE_9__["NotificationMessageComponent"],
                _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_10__["UserProfileComponent"],
                _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_11__["UserFormComponent"],
                _ssr_page_ssr_page_component__WEBPACK_IMPORTED_MODULE_12__["SsrPageComponent"],
                _logos_logos_component__WEBPACK_IMPORTED_MODULE_13__["LogosComponent"]
            ],
            exports: [
                _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_7__["MainNavComponent"],
                _loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_8__["LoadingSpinnerComponent"],
                _notification_message_notification_message_component__WEBPACK_IMPORTED_MODULE_9__["NotificationMessageComponent"],
                _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_10__["UserProfileComponent"],
                _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_11__["UserFormComponent"],
                _logos_logos_component__WEBPACK_IMPORTED_MODULE_13__["LogosComponent"]
            ]
        })
    ], UiModule);
    return UiModule;
}());



/***/ }),

/***/ "./src/app/ui/user-form/user-form.component.html":
/*!*******************************************************!*\
  !*** ./src/app/ui/user-form/user-form.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"userForm\" *ngIf=\"newUser\" (ngSubmit)=\"signup()\">\r\n\r\n    <h3>Or signup with any email address below</h3>\r\n    <p class=\"button is-small\" (click)=\"toggleForm()\">Already have account. Login here!</p>\r\n    <hr>\r\n\r\n    <label for=\"name\">Name</label>\r\n    <input type=\"name\" class=\"input\" formControlName=\"name\" name=\"name\" required>\r\n\r\n    <label for=\"company\">Company</label>\r\n    <input type=\"company\" class=\"input\" formControlName=\"company\" name=\"company\">\r\n\r\n    <label for=\"phone\">Phone number</label>\r\n    <input type=\"phone\" class=\"input\" formControlName=\"phone\" name=\"phone\">\r\n\r\n    <label for=\"email\">Email</label>\r\n    <input type=\"email\" class=\"input\" formControlName=\"email\" name=\"email\" required autocomplete=\"new-password\">\r\n\r\n    <div *ngIf=\"formErrors.email\" class=\"notification is-danger\">\r\n        {{ formErrors.email }}\r\n    </div>\r\n\r\n    <label for=\"password\">Password</label>\r\n    <input type=\"password\" class=\"input\" formControlName=\"password\" name=\"password\" required>\r\n\r\n    <div *ngIf=\"formErrors.password\" class=\"notification is-danger\">\r\n        {{ formErrors.password }}\r\n    </div>\r\n\r\n    <div *ngIf=\"userForm.valid\" class=\"notification is-success\">\r\n        <p>\r\n                By registering you will get access to more options and information\r\n                on the website and TOTECH will borrow and store a copy of your \r\n                provided contact details.\r\n        </p>\r\n        <p>\r\n                TOTECH will store the following information:\r\n        </p>\r\n        <p>\r\n                The users name, email, company name and phone number.\r\n                Purpose is to have contact details of our registered users.\r\n        </p>\r\n        <p>\r\n                In addition to this TOTECH will also store a Userlevel indication ( Admin ).\r\n                Purpose is to give some users (usually internal users or partners) even more options\r\n                and information available to them on the TOTECH website.\r\n        </p>\r\n        <p>\r\n                You can at any time ask us to show and/or delete the stored information about you.\r\n            </p>\r\n            <p><b>\r\n                By clicking submit you indicate that you have read and agreed to all of the above \r\n            </b>\r\n        </p>\r\n\r\n    </div>\r\n    <button type=\"submit\" class=\"button\" [disabled]=\"!userForm.valid\">Submit</button>\r\n\r\n</form>\r\n\r\n\r\n<form [formGroup]=\"userForm\" *ngIf=\"!newUser\" (ngSubmit)=\"login()\">\r\n\r\n    <h3>Existing User Login with email and password below</h3>\r\n    <p class=\"btn button is-small\" (click)=\"toggleForm()\">New User? Back to signup</p>\r\n    <hr>\r\n\r\n    <label for=\"email\">Email</label>\r\n    <input type=\"email\" id=\"email\" name=\"email2\" class=\"input\" formControlName=\"email\" required autocomplete=\"new-password\">\r\n\r\n    <div *ngIf=\"formErrors.email\" class=\"help is-danger\">\r\n        {{ formErrors.email }}\r\n    </div>\r\n\r\n    <label for=\"password\">Password</label>\r\n    <input type=\"password\" id=\"password\" name=\"password2\" class=\"input\" formControlName=\"password\" required autocomplete=\"new-password\">\r\n\r\n    <div *ngIf=\"formErrors.password\" class=\"help is-danger\">\r\n        {{ formErrors.password }}\r\n    </div>\r\n\r\n    <button type=\"submit\" class=\"button\" [disabled]=\"!userForm.valid\">Submit</button>\r\n\r\n    <span *ngIf=\"userForm.valid\" class=\"help is-success\">Form Looks Valid</span>\r\n\r\n    <a *ngIf=\"!passReset && userForm.controls.email.valid\" class=\"help is-info\" (click)=\"resetPassword()\">Reset Password for {{userForm.value.email}}?</a>\r\n    <p *ngIf=\"passReset\" class=\"help is-info\">Reset requested. Check your email instructions.</p>\r\n\r\n</form>"

/***/ }),

/***/ "./src/app/ui/user-form/user-form.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/ui/user-form/user-form.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ui/user-form/user-form.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/ui/user-form/user-form.component.ts ***!
  \*****************************************************/
/*! exports provided: UserFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFormComponent", function() { return UserFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/auth.service */ "./src/app/core/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserFormComponent = /** @class */ (function () {
    function UserFormComponent(fb, auth) {
        this.fb = fb;
        this.auth = auth;
        this.newUser = true; // to toggle login or signup form
        this.passReset = false; // set to true when password reset is triggered
        this.formErrors = {
            'email': '',
            'password': '',
        };
        this.validationMessages = {
            'email': {
                'required': 'Email is required.',
                'email': 'Email must be a valid email',
            },
            'password': {
                'required': 'Password is required.',
                'pattern': 'Password must be include at one letter and one number.',
                'minlength': 'Password must be at least 4 characters long.',
                'maxlength': 'Password cannot be more than 40 characters long.',
            },
        };
    }
    UserFormComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    UserFormComponent.prototype.toggleForm = function () {
        this.newUser = !this.newUser;
    };
    UserFormComponent.prototype.signup = function () {
        this.auth.emailSignUp(this.userForm.value['name'], this.userForm.value['company'], this.userForm.value['phone'], this.userForm.value['email'], this.userForm.value['password']);
    };
    UserFormComponent.prototype.login = function () {
        this.auth.emailLogin(this.userForm.value['email'], this.userForm.value['password']);
    };
    UserFormComponent.prototype.resetPassword = function () {
        var _this = this;
        this.auth.resetPassword(this.userForm.value['email'])
            .then(function () { return _this.passReset = true; });
    };
    UserFormComponent.prototype.buildForm = function () {
        var _this = this;
        this.userForm = this.fb.group({
            'name': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2),
                ]],
            'company': ['', []],
            'phone': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(7),
                ]],
            'email': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email,
                ]],
            'password': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(25),
                ]],
        });
        this.userForm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged(); // reset validation messages
    };
    // Updates validation state on form changes.
    UserFormComponent.prototype.onValueChanged = function (data) {
        if (!this.userForm) {
            return;
        }
        var form = this.userForm;
        for (var field in this.formErrors) {
            if (Object.prototype.hasOwnProperty.call(this.formErrors, field) && (field === 'email' || field === 'password')) {
                // clear previous error message (if any)
                this.formErrors[field] = '';
                var control = form.get(field);
                if (control && control.dirty && !control.valid) {
                    var messages = this.validationMessages[field];
                    if (control.errors) {
                        for (var key in control.errors) {
                            if (Object.prototype.hasOwnProperty.call(control.errors, key)) {
                                this.formErrors[field] += messages[key] + " ";
                            }
                        }
                    }
                }
            }
        }
    };
    UserFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'user-form',
            template: __webpack_require__(/*! ./user-form.component.html */ "./src/app/ui/user-form/user-form.component.html"),
            styles: [__webpack_require__(/*! ./user-form.component.scss */ "./src/app/ui/user-form/user-form.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _core_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], UserFormComponent);
    return UserFormComponent;
}());



/***/ }),

/***/ "./src/app/ui/user-login/user-login.component.html":
/*!*********************************************************!*\
  !*** ./src/app/ui/user-login/user-login.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div *ngIf=\"!(auth.user | async); else alreadyLoggedIn\">\r\n\r\n  <h3>You can use your existing Google account to register/login</h3>\r\n    <p>\r\n        <button class=\"button btn-social btn-google\" (click)=\"isCollapsed = !isCollapsed\"\r\n                [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseExample\">\r\n                <i class=\"fa fa-google fa-lg\"></i>Use Google Account\r\n        </button>\r\n      </p>\r\n      <div id=\"collapseExample\" [ngbCollapse]=\"isCollapsed\">\r\n        <div class=\"card\">\r\n          <div class=\"card-body\">\r\n              <div class=\"notification is-success\">\r\n                  <p>\r\n                          By registering you will get access to more options and information\r\n                          on the website and TOTECH will borrow and store a copy of your \r\n                          provided contact details.\r\n                  </p>\r\n                  <p>\r\n                          When using your Google account, TOTECH will store the following information\r\n                          ( as it is available from yuor Google profile )\r\n                  </p>\r\n                  <p>\r\n                          The users name, email, phone number.\r\n                          Purpose is to have contact details of our registered users.\r\n                          <b>OBS! When using your Google account your Google profile photo will\r\n                          also get stored automatically!</b>\r\n                  </p>\r\n                  <p>\r\n                          In addition to this TOTECH may also add a Userlevel indication ( Admin ).\r\n                          Purpose is to give some users (usually internal users or partners) even more options\r\n                          and information available to them on the TOTECH website.\r\n                  </p>\r\n                  <p>\r\n                          You can at any time ask us to show and/or delete the stored information about you.\r\n                      </p>\r\n                      <p><b>\r\n                          By clicking connect you indicate that you have read and agreed to all of the above \r\n                      </b>\r\n                  </p>\r\n   \r\n                  <button (click)=\"signInWithGoogle()\" class=\"button btn-social btn-google\">\r\n                      <i class=\"fa fa-google fa-lg\"></i> Connect Google\r\n                    </button>\r\n       \r\n              </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n\r\n    <hr>\r\n\r\n    <user-form></user-form>\r\n\r\n</div>\r\n\r\n<ng-template #alreadyLoggedIn>\r\n  <p class=\"text-success\">\r\n    You are logged in <i class=\"fa fa-thumbs-up\"></i>\r\n  </p>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/ui/user-login/user-login.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/ui/user-login/user-login.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ui/user-login/user-login.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/ui/user-login/user-login.component.ts ***!
  \*******************************************************/
/*! exports provided: UserLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLoginComponent", function() { return UserLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/auth.service */ "./src/app/core/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var UserLoginComponent = /** @class */ (function () {
    function UserLoginComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.isCollapsed = true;
    }
    /// Social Login
    UserLoginComponent.prototype.signInWithGithub = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.auth.githubLogin()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.afterSignIn()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UserLoginComponent.prototype.signInWithGoogle = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.auth.googleLogin()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.afterSignIn()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UserLoginComponent.prototype.signInWithFacebook = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.auth.facebookLogin()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.afterSignIn()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserLoginComponent.prototype.signInWithTwitter = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.auth.twitterLogin()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.afterSignIn()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /// Anonymous Sign In
    UserLoginComponent.prototype.signInAnonymously = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.auth.anonymousLogin()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.afterSignIn()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /// Shared
    UserLoginComponent.prototype.afterSignIn = function () {
        // Do after login stuff here, such router redirects, toast messages, etc.
        return this.router.navigate(['/']);
    };
    UserLoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'user-login',
            template: __webpack_require__(/*! ./user-login.component.html */ "./src/app/ui/user-login/user-login.component.html"),
            styles: [__webpack_require__(/*! ./user-login.component.scss */ "./src/app/ui/user-login/user-login.component.scss")],
        }),
        __metadata("design:paramtypes", [_core_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], UserLoginComponent);
    return UserLoginComponent;
}());



/***/ }),

/***/ "./src/app/ui/user-profile/user-profile.component.html":
/*!*************************************************************!*\
  !*** ./src/app/ui/user-profile/user-profile.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box\" >\r\n  <div *ngIf=\"auth.user | async; then authenticated else guest\">\r\n          <!-- template will replace this div -->\r\n  </div>\r\n</div>\r\n\r\n<!-- User NOT logged in -->\r\n<ng-template #guest class=\"box\">\r\n  <h3>GUEST</h3>\r\n  <p class=\"card-text\">Login or register to get started...</p>\r\n  <button class=\"button btn-block\" routerLink=\"/login\">Login/Register</button>\r\n</ng-template>\r\n\r\n<!-- User logged in -->\r\n<ng-template #authenticated>\r\n  <div *ngIf=\"auth.user | async as user\">\r\n    <img [src]=\"user.photoURL || 'assets/totech_icon.jpg'\" class=\"cntr\">\r\n    <h3>{{ user.displayName }}</h3>\r\n    <h3>{{ user.company }}</h3>\r\n    <p class=\"text-truncate\">{{ user.email }}</p>\r\n    <div *ngIf=\"user.isAdmin\">\r\n    \r\n        <button class=\"btn btn-outline-primary btn-block\" (click)=\"toggleCollapse()\">Admin\r\n        <span [hidden]=\"show\" class=\"fa fa-bars fa-lg float-right\"></span>\r\n        <span [hidden]=\"!show\" class=\"fa fa-times fa-lg float-right\"></span>\r\n      </button>\r\n        <div class=\"collapse\" [class.show]=\"show\">\r\n          <button class=\"button btn-block\" routerLink=\"/users\">Manage Users</button>\r\n          <button class=\"button btn-block\" routerLink=\"/machines\">Manage machines</button>\r\n        </div>\r\n    </div>\r\n    <br>\r\n    <button class=\"button btn-block\" routerLink=\"/monitoring\">Machine Monitoring</button>\r\n    <button class=\"button btn-block\" routerLink=\"/presentation/en\">Presentation (EN)</button>\r\n    <button class=\"button btn-block\" routerLink=\"/presentation/fi\">Presentation (FI)</button>\r\n    <button class=\"button btn-block\" routerLink=\"/notes\">Comment</button>\r\n    <button class=\"btn btn-outline-primary btn-block\" (click)=\"logout()\">Logout</button>\r\n  </div>\r\n</ng-template>\r\n\r\n"

/***/ }),

/***/ "./src/app/ui/user-profile/user-profile.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/ui/user-profile/user-profile.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cntr {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%; }\n"

/***/ }),

/***/ "./src/app/ui/user-profile/user-profile.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/ui/user-profile/user-profile.component.ts ***!
  \***********************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/auth.service */ "./src/app/core/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(auth) {
        this.auth = auth;
        this.show = false;
    }
    UserProfileComponent.prototype.logout = function () {
        this.auth.signOut();
    };
    UserProfileComponent.prototype.toggleCollapse = function () {
        this.show = !this.show;
    };
    UserProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'user-profile',
            template: __webpack_require__(/*! ./user-profile.component.html */ "./src/app/ui/user-profile/user-profile.component.html"),
            styles: [__webpack_require__(/*! ./user-profile.component.scss */ "./src/app/ui/user-profile/user-profile.component.scss")],
        }),
        __metadata("design:paramtypes", [_core_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "./src/app/uploads/drop-zone.directive.ts":
/*!************************************************!*\
  !*** ./src/app/uploads/drop-zone.directive.ts ***!
  \************************************************/
/*! exports provided: DropZoneDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropZoneDirective", function() { return DropZoneDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DropZoneDirective = /** @class */ (function () {
    function DropZoneDirective() {
        this.dropped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.hovered = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    DropZoneDirective.prototype.onDrop = function ($event) {
        $event.preventDefault();
        this.dropped.emit($event.dataTransfer.files);
        this.hovered.emit(false);
    };
    DropZoneDirective.prototype.onDragOver = function ($event) {
        $event.preventDefault();
        this.hovered.emit(true);
    };
    DropZoneDirective.prototype.onDragLeave = function ($event) {
        $event.preventDefault();
        this.hovered.emit(false);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DropZoneDirective.prototype, "dropped", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DropZoneDirective.prototype, "hovered", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('drop', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DropZoneDirective.prototype, "onDrop", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('dragover', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DropZoneDirective.prototype, "onDragOver", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('dragleave', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DropZoneDirective.prototype, "onDragLeave", null);
    DropZoneDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[dropZone]'
        }),
        __metadata("design:paramtypes", [])
    ], DropZoneDirective);
    return DropZoneDirective;
}());



/***/ }),

/***/ "./src/app/uploads/file-size.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/uploads/file-size.pipe.ts ***!
  \*******************************************/
/*! exports provided: FileSizePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileSizePipe", function() { return FileSizePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FILE_SIZE_UNITS = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
var FILE_SIZE_UNITS_LONG = ['Bytes', 'Kilobytes', 'Megabytes', 'Gigabytes', 'Pettabytes', 'Exabytes', 'Zettabytes', 'Yottabytes'];
var FileSizePipe = /** @class */ (function () {
    function FileSizePipe() {
    }
    FileSizePipe.prototype.transform = function (sizeInBytes, longForm) {
        var units = longForm
            ? FILE_SIZE_UNITS_LONG
            : FILE_SIZE_UNITS;
        var power = Math.round(Math.log(sizeInBytes) / Math.log(1024));
        power = Math.min(power, units.length - 1);
        var size = sizeInBytes / Math.pow(1024, power); // size in new units
        var formattedSize = Math.round(size * 100) / 100; // keep up to 2 decimals
        var unit = units[power];
        return size ? formattedSize + " " + unit : '0';
    };
    FileSizePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'fileSize'
        })
    ], FileSizePipe);
    return FileSizePipe;
}());



/***/ }),

/***/ "./src/app/uploads/upload-page/upload-page.component.html":
/*!****************************************************************!*\
  !*** ./src/app/uploads/upload-page/upload-page.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Firebase Storage Demo</h1>\r\n\r\n<p>\r\n  Learn how to build an\r\n  <a href=\"https://angularfirebase.com/lessons/firebase-storage-with-angularfire-dropzone-file-uploader/\">AngularFirebase dropzone uploader</a>\r\n</p>\r\n\r\n<hr>\r\n\r\n<div class=\"dropzone\" dropZone (hovered)=\"toggleHover($event)\" (dropped)=\"startUpload($event)\" [class.hovering]=\"isHovering\">\r\n\r\n  <h3>AngularFire Drop Zone</h3>\r\n  <p>Drag and Drop a File</p>\r\n  <div class=\"file\">\r\n    <label class=\"file-label\">\r\n\r\n\r\n      <input class=\"file-input\" type=\"file\" (change)=\"startUpload($event.target.files)\">\r\n\r\n      <span class=\"file-cta\">\r\n        <span class=\"file-icon\">\r\n          <i class=\"fa fa-upload\"></i>\r\n        </span>\r\n        <span class=\"file-label\">\r\n          or choose a file…\r\n        </span>\r\n      </span>\r\n    </label>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n<div *ngIf=\"percentage | async as pct\">\r\n\r\n  <progress class=\"progress is-info\" [value]=\"pct\" max=\"100\">\r\n  </progress>\r\n\r\n  {{ pct | number }}%\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n<div *ngIf=\"(snapshot | async) as snap\">\r\n  {{ snap.bytesTransferred | fileSize }} of {{ snap.totalBytes | fileSize }}\r\n\r\n\r\n  <div *ngIf=\"downloadURL | async as url\">\r\n    <h3>Results!</h3>\r\n    <img [src]=\"url\">\r\n    <br>\r\n    <a [href]=\"url\" target=\"_blank\" rel=\"noopener\">Download Me!</a>\r\n  </div>\r\n  <hr>\r\n\r\n\r\n\r\n\r\n\r\n\r\n  <button (click)=\"task.pause()\" class=\"button is-warning\" [disabled]=\"!isActive(snap)\">Pause</button>\r\n  <button (click)=\"task.cancel()\" class=\"button is-danger\" [disabled]=\"!isActive(snap)\">Cancel</button>\r\n  <button (click)=\"task.resume()\" class=\"button is-info\" [disabled]=\"!(snap?.state === 'paused')\">Resume</button>\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/uploads/upload-page/upload-page.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/uploads/upload-page/upload-page.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropzone {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  font-weight: 200;\n  height: 300px;\n  border: 2px dashed #f16624;\n  border-radius: 5px;\n  background: white;\n  margin: 10px 0; }\n  .dropzone.hovering {\n    border: 2px solid #f16624;\n    color: #dadada !important; }\n  .dropzone .file-label {\n    font-size: 1.2em; }\n  progress::-webkit-progress-value {\n  transition: width 0.1s ease; }\n  img {\n  width: 250px; }\n"

/***/ }),

/***/ "./src/app/uploads/upload-page/upload-page.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/uploads/upload-page/upload-page.component.ts ***!
  \**************************************************************/
/*! exports provided: UploadPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadPageComponent", function() { return UploadPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UploadPageComponent = /** @class */ (function () {
    function UploadPageComponent(storage, db) {
        this.storage = storage;
        this.db = db;
    }
    UploadPageComponent.prototype.toggleHover = function (event) {
        this.isHovering = event;
    };
    UploadPageComponent.prototype.startUpload = function (event) {
        var _this = this;
        // The File object
        var file = event.item(0);
        // Client-side validation example
        if (file.type.split('/')[0] !== 'image') {
            console.error('unsupported file type :( ');
            return;
        }
        // The storage path
        var path = "test/" + new Date().getTime() + "_" + file.name;
        // Totally optional metadata
        var customMetadata = { app: 'My AngularFire-powered PWA!' };
        // The main task
        this.task = this.storage.upload(path, file, { customMetadata: customMetadata });
        // Progress monitoring
        this.percentage = this.task.percentageChanges();
        this.snapshot = this.task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (snap) {
            if (snap.bytesTransferred === snap.totalBytes) {
                // Update firestore on completion
                _this.db.collection('photos').add({ path: path, size: snap.totalBytes });
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () { return _this.downloadURL = _this.storage.ref(path).getDownloadURL(); }));
        // The file's download URL
    };
    // Determines if the upload task is active
    UploadPageComponent.prototype.isActive = function (snapshot) {
        return (snapshot.state === 'running' &&
            snapshot.bytesTransferred < snapshot.totalBytes);
    };
    UploadPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'upload-page',
            template: __webpack_require__(/*! ./upload-page.component.html */ "./src/app/uploads/upload-page/upload-page.component.html"),
            styles: [__webpack_require__(/*! ./upload-page.component.scss */ "./src/app/uploads/upload-page/upload-page.component.scss")]
        }),
        __metadata("design:paramtypes", [angularfire2_storage__WEBPACK_IMPORTED_MODULE_1__["AngularFireStorage"],
            angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], UploadPageComponent);
    return UploadPageComponent;
}());



/***/ }),

/***/ "./src/app/uploads/uploads.module.ts":
/*!*******************************************!*\
  !*** ./src/app/uploads/uploads.module.ts ***!
  \*******************************************/
/*! exports provided: UploadsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadsModule", function() { return UploadsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _upload_page_upload_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upload-page/upload-page.component */ "./src/app/uploads/upload-page/upload-page.component.ts");
/* harmony import */ var _drop_zone_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drop-zone.directive */ "./src/app/uploads/drop-zone.directive.ts");
/* harmony import */ var _file_size_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./file-size.pipe */ "./src/app/uploads/file-size.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var UploadsModule = /** @class */ (function () {
    function UploadsModule() {
    }
    UploadsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_upload_page_upload_page_component__WEBPACK_IMPORTED_MODULE_2__["UploadPageComponent"], _drop_zone_directive__WEBPACK_IMPORTED_MODULE_3__["DropZoneDirective"], _file_size_pipe__WEBPACK_IMPORTED_MODULE_4__["FileSizePipe"]]
        })
    ], UploadsModule);
    return UploadsModule;
}());



/***/ }),

/***/ "./src/app/users/user-details/user-details.component.html":
/*!****************************************************************!*\
  !*** ./src/app/users/user-details/user-details.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"basic-note\">\n    <h3>{{ usr.displayName }}/{{usr.company}}</h3>\n    <p>{{ usr.phone }}</p>\n    <p>{{ usr.email }}</p>\n    <span class=\"button is-small is-info\" (click)='toggleAdmin(user?.isAdmin)'>\n    Admin: {{usr.isAdmin}}<i class=\"fa fa-user\" style=\"margin-left: 5px;\"></i>\n  </span>\n  <!--  <span class=\"button is-small is-danger\" (click)='deleteUser(user?.id)'>Delete</span> -->\n    <hr class=\"dbline\">\n</div>"

/***/ }),

/***/ "./src/app/users/user-details/user-details.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/users/user-details/user-details.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "hr.dbline {\n  border-top: 3px double #8c8b8b; }\n"

/***/ }),

/***/ "./src/app/users/user-details/user-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/users/user-details/user-details.component.ts ***!
  \**************************************************************/
/*! exports provided: UserDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsComponent", function() { return UserDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../users.service */ "./src/app/users/users.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserDetailsComponent = /** @class */ (function () {
    function UserDetailsComponent(usersService) {
        this.usersService = usersService;
    }
    UserDetailsComponent.prototype.modifyUser = function () {
        if (this.usr.id) {
            this.usersService.updateUser(this.usr.id, {});
        }
        else {
            console.error('Note missing ID!');
        }
    };
    UserDetailsComponent.prototype.toggleAdmin = function (val) {
        if (this.usr.id) {
            this.usersService.updateUser(this.usr.id, { isAdmin: !this.usr.isAdmin });
        }
        else {
            console.error('User missing ID!');
        }
    };
    UserDetailsComponent.prototype.deleteUser = function (uid) {
        this.usersService.deleteUser(uid);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UserDetailsComponent.prototype, "usr", void 0);
    UserDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'user-details',
            template: __webpack_require__(/*! ./user-details.component.html */ "./src/app/users/user-details/user-details.component.html"),
            styles: [__webpack_require__(/*! ./user-details.component.scss */ "./src/app/users/user-details/user-details.component.scss")]
        }),
        __metadata("design:paramtypes", [_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"]])
    ], UserDetailsComponent);
    return UserDetailsComponent;
}());



/***/ }),

/***/ "./src/app/users/user-list/user-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/users/user-list/user-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box\" >\n    <div *ngIf=\"auth.user | async; then authenticated else guest\">\n            <!-- template will replace this div -->\n    </div>\n  </div>\n  \n  <!-- User NOT logged in -->\n  <ng-template #guest class=\"box\">\n    <h3>GUEST</h3>\n    <p class=\"card-text\">You must be registered, logged in and admin to manage users</p>\n    <button class=\"button\" routerLink=\"/login\">Login/Register</button>\n  </ng-template>\n  \n  <!-- User logged in -->\n  <ng-template #authenticated>\n    <div *ngIf=\"auth.user | async as user\">\n      <div *ngIf=\"user.isAdmin;else noadmin\">\n        <div *ngFor=\"let usr of users | async\">\n              <user-details [usr]=\"usr\"></user-details>\n          </div>\n      </div>\n     </div>\n  </ng-template>\n\n    <ng-template #noadmin class=\"box\">\n        <h3></h3>\n        <p class=\"card-text\">You must be admin to manage users.</p>\n        <p class=\"card-text\">Contact your administrator to get admin status.</p>\n    </ng-template>\n    \n  "

/***/ }),

/***/ "./src/app/users/user-list/user-list.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/users/user-list/user-list.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/users/user-list/user-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/users/user-list/user-list.component.ts ***!
  \********************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../users.service */ "./src/app/users/users.service.ts");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/auth.service */ "./src/app/core/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserListComponent = /** @class */ (function () {
    function UserListComponent(usrsService, auth) {
        this.usrsService = usrsService;
        this.auth = auth;
    }
    UserListComponent.prototype.ngOnInit = function () {
        this.users = this.usrsService.getData();
    };
    UserListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'user-list',
            template: __webpack_require__(/*! ./user-list.component.html */ "./src/app/users/user-list/user-list.component.html"),
            styles: [__webpack_require__(/*! ./user-list.component.scss */ "./src/app/users/user-list/user-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"], _core_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "./src/app/users/users.module.ts":
/*!***************************************!*\
  !*** ./src/app/users/users.module.ts ***!
  \***************************************/
/*! exports provided: UsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-list/user-list.component */ "./src/app/users/user-list/user-list.component.ts");
/* harmony import */ var _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-details/user-details.component */ "./src/app/users/user-details/user-details.component.ts");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./users.service */ "./src/app/users/users.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var UsersModule = /** @class */ (function () {
    function UsersModule() {
    }
    UsersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            declarations: [_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_3__["UserListComponent"], _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_4__["UserDetailsComponent"]],
            providers: [_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"]]
        })
    ], UsersModule);
    return UsersModule;
}());



/***/ }),

/***/ "./src/app/users/users.service.ts":
/*!****************************************!*\
  !*** ./src/app/users/users.service.ts ***!
  \****************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersService = /** @class */ (function () {
    function UsersService(afs) {
        this.afs = afs;
        this.usersCollection = this.afs.collection('users', function (ref) { return ref.orderBy('email', 'desc'); });
    }
    UsersService.prototype.getData = function () {
        // ['added', 'modified', 'removed']
        return this.usersCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                return __assign({ id: a.payload.doc.id }, data);
            });
        }));
    };
    UsersService.prototype.getUser = function (uid) {
        return this.afs.doc("users/" + uid);
    };
    UsersService.prototype.createUser = function (displayName, email) {
        var user = {
            displayName: displayName,
            email: email,
            isAdmin: false,
        };
        return this.usersCollection.add(user);
    };
    UsersService.prototype.updateUser = function (uid, data) {
        return this.getUser(uid).update(data);
    };
    UsersService.prototype.deleteUser = function (uid) {
        return this.getUser(uid).delete();
    };
    UsersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], UsersService);
    return UsersService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyBKSxO8Ola_ZhQlY6bD9XCwwWGqxOBJZ1o",
        authDomain: "totech-841db.firebaseapp.com",
        databaseURL: "https://totech-841db.firebaseio.com",
        projectId: "totech-841db",
        storageBucket: "totech-841db.appspot.com",
        messagingSenderId: "559544589098"
    }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
document.addEventListener('DOMContentLoaded', function () {
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
        .catch(function (err) { return console.log(err); });
});


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Totech\angular-firestarter\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map