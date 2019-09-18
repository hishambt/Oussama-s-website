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
		var e = new Error("Cannot find module '" + req + "'");
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/portfolio/portfolio.component */ "./src/app/components/portfolio/portfolio.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");






var routes = [
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'portfolio', component: _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_4__["PortfolioComponent"] },
    { path: 'contact', component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"] },
    { path: '', pathMatch: 'full', redirectTo: 'home' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _core_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/app.component */ "./src/app/core/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/portfolio/portfolio.component */ "./src/app/components/portfolio/portfolio.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _core_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_6__["PortfolioComponent"],
                _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"]
            ],
            providers: [],
            bootstrap: [_core_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/contact/contact.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/contact/contact.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <mat-card class=\"col-12\">\r\n    <h4>Contact Information</h4>\r\n  </mat-card>\r\n</div>\r\n<mat-divider class=\"my-3\"></mat-divider>\r\n<div class=\"row mb-5\">\r\n  <div class=\"col-12 col-md-4\">\r\n    <address>\r\n      <p><strong>Fares Stita</strong></p>\r\n      <p>Brussels</p>\r\n      <p>Belgium</p>\r\n    </address>\r\n    <address>\r\n      <p><strong>Email</strong></p>\r\n      <a class=\"accent-color\" href=\"mailto:myemail@email.com\">myemail@email.com</a>\r\n    </address>\r\n  </div>\r\n  <div class=\"col-12 col-md-8\">\r\n    <form ngNoForm action=\"https://formspree.io/address@email.tld\" method=\"POST\">\r\n      <mat-form-field class=\"full-width mb-2\">\r\n        <input matInput type=\"email\" placeholder=\"Your Email\" name=\"_replyto\" required>\r\n      </mat-form-field>\r\n      <mat-form-field class=\"full-width mb-2\">\r\n        <input matInput placeholder=\"Subject\" name=\"subject\" required>\r\n      </mat-form-field>\r\n      <mat-form-field class=\"full-width mb-2\">\r\n        <textarea matInput placeholder=\"Message\" name=\"message\" required></textarea>\r\n      </mat-form-field>\r\n      <button mat-stroked-button type=\"submit\">Send message</button>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/contact/contact.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/contact/contact.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  margin-bottom: 0rem; }\n\n.full-width {\n  width: 100%; }\n\ntextarea {\n  min-height: 10rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L0M6XFxVc2Vyc1xcaGlzaGFcXERlc2t0b3BcXEFuZ3VsYXJcXFJlc3BvbnNpdmUtV2ViLURldmVsb3BtZW50LXdpdGgtQm9vdHN0cmFwLTQtYW5kLUFuZ3VsYXItNy9zcmNcXGFwcFxcY29tcG9uZW50c1xcY29udGFjdFxcY29udGFjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLFdBQVcsRUFBQTs7QUFHZjtFQUNJLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDByZW07XHJcbn1cclxuXHJcbi5mdWxsLXdpZHRoIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG50ZXh0YXJlYSB7XHJcbiAgICBtaW4taGVpZ2h0OiAxMHJlbTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/components/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/components/contact/contact.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-12 col-md-4\">\r\n    <mat-card class=\"skill-block\">\r\n      <mat-card-header>\r\n        <i mat-card-avatar class=\"fa fa-mobile-alt accent-color fa-2x\"></i>\r\n        <mat-card-title>Responsive</mat-card-title>\r\n      </mat-card-header>\r\n      <mat-card-content>\r\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident explicabo necessitatibus animi? Aperiam,\r\n          at earum?</p>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n  <div class=\"col-12 col-md-4\">\r\n    <mat-card class=\"skill-block\">\r\n      <mat-card-header>\r\n        <i mat-card-avatar class=\"fa fa-tablet-alt accent-color fa-2x\"></i>\r\n        <mat-card-title>Web</mat-card-title>\r\n      </mat-card-header>\r\n      <mat-card-content>\r\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident explicabo necessitatibus animi? Aperiam,\r\n          at earum?</p>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n  <div class=\"col-12 col-md-4\">\r\n    <mat-card class=\"skill-block\">\r\n      <mat-card-header>\r\n        <i mat-card-avatar class=\"fa fa-desktop accent-color fa-2x\"></i>\r\n        <mat-card-title>Design</mat-card-title>\r\n      </mat-card-header>\r\n      <mat-card-content>\r\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident explicabo necessitatibus animi? Aperiam,\r\n          at earum?</p>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n<mat-divider class=\"my-3\"></mat-divider>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-12 col-sm-6 col-md-8\">\r\n    <h3>About me</h3>\r\n    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis architecto dolore et. Temporibus error reiciendis\r\n      facilis minima enim, quaerat similique! Ab minima labore facilis sint ipsum.</p>\r\n    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis eum asperiores sint esse.</p>\r\n  </div>\r\n  <div class=\"col-12 col-sm-6 col-md-4\">\r\n    <div class=\"mb-3\">\r\n      <strong>HTML5 & CSS3</strong>\r\n      <span class=\"float-right\">100%</span>\r\n      <mat-progress-bar value=\"100\"></mat-progress-bar>\r\n    </div>\r\n    <div class=\"mb-3\">\r\n      <strong>BOOTSTRAP</strong>\r\n      <span class=\"float-right\">80%</span>\r\n      <mat-progress-bar value=\"80\" color=\"accent\"></mat-progress-bar>\r\n    </div>\r\n    <div class=\"mb-3\">\r\n      <strong>UX Design</strong>\r\n      <span class=\"float-right\">70%</span>\r\n      <mat-progress-bar value=\"70\" color=\"warn\"></mat-progress-bar>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row mt-5\">\r\n  <div class=\"col-3 text-center\">\r\n    <i class=\"fab fa-angular fa-10x angular-color d-none d-md-block\"></i>\r\n  </div>\r\n  <div class=\"col-12 col-md-9\">\r\n    <h2><i class=\"fab fa-angular angular-color d-md-none mr-2\"></i>Angular Development</h2>\r\n    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, alias illo aut tenetur expedita vel facere,\r\n      doloremque aliquam facilis voluptas adipisci corrupti debitis, dolorum quidem officiis?</p>\r\n    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non dicta sunt, magni voluptate distinctio, a earum\r\n      dolorem odio fugiat minima iste.</p>\r\n    <button [routerLink]=\"['/portfolio']\" [queryParams]=\"{filter:'Angular'}\" mat-stroked-button>View More</button>\r\n  </div>\r\n</div>\r\n<div class=\"row mt-5\">\r\n  <div class=\"col-12 col-md-9 text-right\">\r\n    <h2>React Development <i class=\"fab fa-react react-color d-md-none\"></i> </h2>\r\n    <p>Veritatis hic iusto aperiam vel vitae quia ipsa cum porro assumenda veniam commodi sit, consequatur autem quos\r\n      nesciunt, quasi omnis iure eligendi suscipit repellendus! Odio, voluptas?</p>\r\n    <p>Pariatur, optio. Aut iusto architecto accusantium repellat perspiciatis quidem, unde laudantium blanditiis iure\r\n      omnis. Deserunt tempore possimus minus accusantium, ad eos!</p>\r\n    <button [routerLink]=\"['/portfolio']\" [queryParams]=\"{filter:'React'}\" mat-stroked-button>View More</button>\r\n  </div>\r\n  <div class=\"col-3 text-center\">\r\n    <i class=\"fab fa-react fa-10x react-color d-none d-md-block\"></i>\r\n  </div>\r\n</div>\r\n<div class=\"row mt-5\">\r\n  <div class=\"col-3 text-center\">\r\n    <i class=\"fab fa-vuejs fa-10x vue-color d-none d-md-block\"></i>\r\n  </div>\r\n  <div class=\"col-12 col-md-9\">\r\n    <h2><i class=\"fab fa-vuejs vue-color d-md-none mr-2\"></i>Vue Development</h2>\r\n    <p>Inventore suscipit ut error labore nemo! Expedita architecto, consequatur voluptas eius exercitationem mollitia\r\n      labore officia totam enim, quo fugiat dicta magnam voluptate pariatur dolores! Deserunt, ullam!</p>\r\n    <p>Magni, est. Alias asperiores, quasi, animi, iure corrupti consectetur modi fugit minima totam porro tenetur\r\n      excepturi. Delectus rerum accusamus impedit voluptate?</p>\r\n    <button  [routerLink]=\"['/portfolio']\" [queryParams]=\"{filter:'Vue'}\" mat-stroked-button>View More</button>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"portfolio-preview\">\r\n  <div class=\"row no-gutters\">\r\n    <div class=\"col-12\">\r\n      <h2>Recent Apps</h2>\r\n      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis quia reiciendis molestiae sequi aliquam ex\r\n        officiis vero illum, eaque quos numquam?</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row no-gutters\">\r\n    <div *ngFor=\"let item of recentProjects;index as i\"\r\n         [ngClass]=\"{'col-12 col-sm-4 col-md-4': i < 3, 'col-12 col-sm-6 col-md-3': i >= 3 }\">\r\n      <img class=\"img-fluid\" [src]=\"item.preview + '?text=' + item.name\" [alt]=\"item.name\">\r\n    </div>\r\n\r\n    <div class=\"col-12 mt-3\">\r\n      <button [routerLink]=\"['/portfolio']\" mat-stroked-button>View More</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_portfolio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/portfolio.service */ "./src/app/services/portfolio.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(portfolioSvc) {
        this.portfolioSvc = portfolioSvc;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.portfolioSvc.get().subscribe(function (data) {
            _this.recentProjects = data.splice(0, 7);
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_portfolio_service__WEBPACK_IMPORTED_MODULE_2__["PortfolioService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/portfolio/portfolio.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/portfolio/portfolio.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"filter-card\">\r\n  <mat-card-header>\r\n    <mat-card-title>\r\n      <h4>Filter</h4>\r\n    </mat-card-title>\r\n  </mat-card-header>\r\n  <label class=\"mr-1 font-weight-bold\">Type:</label>\r\n  <mat-radio-group [(ngModel)]=\"selectedType\">\r\n    <mat-radio-button class=\"mx-2\" value=\"all\">All</mat-radio-button>\r\n    <mat-radio-button *ngFor=\"let type of types\" class=\"mx-2\" [value]=\"type\">{{type}}</mat-radio-button>\r\n  </mat-radio-group>\r\n</mat-card>\r\n<mat-divider class=\"my-3\"></mat-divider>\r\n<div @list class=\"row mb-5\" *ngIf=\"portfolios\">\r\n  <div @items class=\"col-12 col-sm-6 col-md-4 col-lg-3 mb-3\" *ngFor=\"let item of portfolios\">\r\n    <mat-card>\r\n      <mat-card-header>\r\n        <div mat-card-avatar>\r\n          <ng-container [ngSwitch]=\"item.type\">\r\n            <i class=\"fab fa-angular fa-2x angular-color\" *ngSwitchCase=\"'Angular'\"></i>\r\n            <i class=\"fab fa-react fa-2x react-color\" *ngSwitchCase=\"'React'\"></i>\r\n            <i class=\"fab fa-vuejs fa-2x vue-color\" *ngSwitchCase=\"'Vue'\"></i>\r\n            <i class=\"fas fa-question fa-2x\" *ngSwitchDefault></i>\r\n          </ng-container>\r\n        </div>\r\n        <mat-card-title>{{item.name}}</mat-card-title>\r\n      </mat-card-header>\r\n      <img mat-card-image [src]=\"item.preview + '?text=' + item.name\" [alt]=\"item.name\">\r\n      <mat-card-content>\r\n        {{item.description}}\r\n      </mat-card-content>\r\n      <mat-card-actions>\r\n        <button mat-button>Visit</button>\r\n      </mat-card-actions>\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/portfolio/portfolio.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/portfolio/portfolio.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9ydGZvbGlvL3BvcnRmb2xpby5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/portfolio/portfolio.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/portfolio/portfolio.component.ts ***!
  \*************************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_portfolio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/portfolio.service */ "./src/app/services/portfolio.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent(portfolioSvc, route) {
        this.portfolioSvc = portfolioSvc;
        this.route = route;
        this._selectedType = 'all';
        this.rooms = ['Room 1', 'Living Room', 'Kitchen', 'Bathroom'];
    }
    Object.defineProperty(PortfolioComponent.prototype, "selectedType", {
        get: function () {
            return this._selectedType;
        },
        set: function (newValue) {
            if (newValue !== this._selectedType) {
                this._selectedType = newValue;
                this.loadPortfolios(this._selectedType);
            }
        },
        enumerable: true,
        configurable: true
    });
    PortfolioComponent.prototype.ngOnInit = function () {
        var filter = this.route.snapshot.queryParamMap.get('filter');
        if (filter) {
            this._selectedType = filter;
        }
        this.loadPortfolios(this._selectedType);
    };
    PortfolioComponent.prototype.loadPortfolios = function (selectedType) {
        var _this = this;
        this.portfolioSvc.get().subscribe(function (data) {
            _this.types = data.map(function (p) { return p.type; }).filter(function (value, index, self) { return self.indexOf(value) === index; });
            _this.portfolios = data.filter(function (p) { return p.type === selectedType || selectedType === 'all'; });
        });
    };
    PortfolioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-portfolio',
            template: __webpack_require__(/*! ./portfolio.component.html */ "./src/app/components/portfolio/portfolio.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('list', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["query"])('@items', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["stagger"])(60, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animateChild"])()))
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('items', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ transform: 'scale(0)', opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('0.350s cubic-bezier(.8,-0.6,0.2,1.5)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ transform: 'scale(1)', opacity: 1 }))
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./portfolio.component.scss */ "./src/app/components/portfolio/portfolio.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_portfolio_service__WEBPACK_IMPORTED_MODULE_2__["PortfolioService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/app/core/app.component.html":
/*!*****************************************!*\
  !*** ./src/app/core/app.component.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"site\">\r\n  <div class=\"site-content\">\r\n    <div class=\"container\">\r\n      <nav class=\"navbar navbar-expand navbar-dark\">\r\n        <div class=\"navbar-nav\">\r\n          <a class=\"nav-item nav-link\" [routerLink]=\"['/home']\" routerLinkActive=\"active\"><i\r\n               class=\"d-none d-sm-inline-block fas fa-home mx-1\"></i>Home</a>\r\n          <a class=\"nav-item nav-link\" [routerLink]=\"['/portfolio']\" routerLinkActive=\"active\"><i\r\n               class=\"d-none d-sm-inline-block fas fa-images mx-1\"></i>Portfolio</a>\r\n          <a class=\"nav-item nav-link\" [routerLink]=\"['/contact']\" routerLinkActive=\"active\"><i\r\n               class=\"d-none d-sm-inline-block fas fa-envelope mx-1\"></i>Contact</a>\r\n        </div>\r\n      </nav>\r\n    </div>\r\n    <div class=\"header\">\r\n      <div class=\"container\">\r\n        <h1>Fares Stita</h1>\r\n        <h2>Developer</h2>\r\n      </div>\r\n    </div>\r\n    <main class=\"main-content container\">\r\n      <router-outlet></router-outlet>\r\n    </main>\r\n  </div>\r\n  <footer class=\"footer container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12 col-sm-6\">\r\n        <p>Copyright © 2019 Fares Stita</p>\r\n      </div>\r\n      <div class=\"col-12 col-sm-6\">\r\n        <ul class=\"social-icons float-right mt-3\">\r\n          <li><a class=\"fab fa-facebook\"></a></li>\r\n          <li><a class=\"fab fa-twitter\"></a></li>\r\n          <li><a class=\"fas fa-envelope-open-text\"></a></li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </footer>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/core/app.component.scss":
/*!*****************************************!*\
  !*** ./src/app/core/app.component.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvYXBwLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/core/app.component.ts":
/*!***************************************!*\
  !*** ./src/app/core/app.component.ts ***!
  \***************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'my-portfolio-website';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/core/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/core/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"]],
            exports: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"]],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/services/portfolio.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/portfolio.service.ts ***!
  \***********************************************/
/*! exports provided: PortfolioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioService", function() { return PortfolioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var PortfolioService = /** @class */ (function () {
    function PortfolioService(httpClient) {
        this.httpClient = httpClient;
    }
    PortfolioService.prototype.get = function () {
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl);
    };
    PortfolioService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PortfolioService);
    return PortfolioService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: './assets/mocks/portfolios.json'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\hisha\Desktop\Angular\Responsive-Web-Development-with-Bootstrap-4-and-Angular-7\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map