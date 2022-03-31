(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Duelist\Website\Duelist\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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
const environment = {
    production: false
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

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _album_album_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./album/album.component */ "gq2R");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/main.component */ "wlho");
/* harmony import */ var _intro_intro_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./intro/intro.component */ "drGS");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_album_album_component__WEBPACK_IMPORTED_MODULE_2__["AlbumComponent"],
        _main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"],
        _intro_intro_component__WEBPACK_IMPORTED_MODULE_4__["IntroComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]] }); })();


/***/ }),

/***/ "drGS":
/*!******************************************!*\
  !*** ./src/app/intro/intro.component.ts ***!
  \******************************************/
/*! exports provided: IntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroComponent", function() { return IntroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class IntroComponent {
    constructor() { }
    ngOnInit() {
        this.startUpAnimation();
    }
    startUpAnimation() {
        var logo = document.getElementById("logo");
        logo.classList.add("redGlow");
        setTimeout(function () {
            logo.classList.remove("redGlow");
            logo.classList.remove("initialLogo");
            logo.style.display = "none";
        }, 2100);
    }
}
IntroComponent.ɵfac = function IntroComponent_Factory(t) { return new (t || IntroComponent)(); };
IntroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IntroComponent, selectors: [["app-intro"]], decls: 2, vars: 0, consts: [["id", "logo", 1, "logo", "initialLogo"]], template: function IntroComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Duelist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@font-face {\r\n\tfont-family: teutonic;\r\n\tsrc: url('teutonic1.ttf');\r\n}\r\n\r\n.logo[_ngcontent-%COMP%] {\r\n\tfont-family: teutonic;\r\n\t\r\n\tcolor: #FFFFFF;\r\n\t\r\n\ttext-shadow: 3px 3px 3px #000000,\r\n\t\t\t\t 6px 6px 10px gray;\r\n\t\t\t\t \r\n\t-webkit-user-select: none;   \r\n\tuser-select: none; \r\n\t\r\n\tanimation: staticAnimation 6s infinite, fadeIn 3s 1;\t\r\n}\r\n\r\n.redGlow[_ngcontent-%COMP%] {\r\n    animation: staticAnimation 2s infinite, redGlowAnimation 2s 1, fadeIn 3s 1;\t\r\n}\r\n\r\n.initialLogo[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    margin-top: 30vh;\r\n\r\n    font-size: 8vw;\r\n}\r\n\r\n@keyframes fadeIn {\r\n    from {\r\n        opacity: 0;\r\n    }\r\n    to {\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n@keyframes staticAnimation {\r\n\t0%, 90%   {\r\n\t\t\ttext-shadow: 3px 3px 3px #000000,\r\n\t\t\t\t6px 6px 10px gray;\r\n\t\t\ttransform: translate(0, 0);\r\n\t\t }\r\n\t96%, 97%   {\r\n\t\t\ttext-shadow: 3px 3px 3px red,\r\n\t\t\t\t 6px 6px 10px gray;\r\n\t\t\ttransform: translate(-5px, 0);\r\n\t\t }\r\n\t98%, 99%   {\r\n\t\t\r\n\t\t\ttext-shadow: 7px 3px 3px cyan,\r\n\t\t\t\t 6px 6px 10px gray;\r\n\t\t\ttransform: translate(5px, 0);\r\n\t\t\t\r\n\t\t }\r\n\t100%   {\r\n\t\t\ttext-shadow: 0px 3px 3px yellow,\r\n\t\t\t\t 6px 6px 10px gray;\r\n\t\t\ttransform: translate(-5px, 0);\r\n\t\t }\r\n}\r\n\r\n@keyframes redGlowAnimation {\r\n\t0%, 90%   {\r\n\t\t\tfilter: drop-shadow(0px 0px 100px red);\r\n            opacity: 1;\r\n\t\t }\r\n\t96%, 97%   {\r\n\t\t\tfilter: drop-shadow(-50px 0px 100px red);\r\n            opacity: 0.7;\r\n\t\t }\r\n\t98%, 99%   {\r\n\t\t\tfilter: drop-shadow(50px 0px 100px red);\r\n            opacity: 0.4;\r\n\t\t }\r\n\t100%   {\r\n\t\t\tfilter: drop-shadow(-50px 0px 100px red);\r\n            opacity: 0;\r\n\t\t }\r\n}\r\n\r\n@keyframes fadeInText {\r\n\tfrom {\r\n\t\ttransform: translate(-80px, 0);\r\n\t\topacity: 0;\r\n\t}\r\n\t\r\n\tto {\r\n\t\ttransform: translate(0, 0);\r\n\t\topacity: 1;\r\n\t}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludHJvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxxQkFBcUI7Q0FDckIseUJBQXdDO0FBQ3pDOztBQUVBO0NBQ0MscUJBQXFCOztDQUVyQixjQUFjOztDQUVkO3NCQUNxQjs7Q0FFckIseUJBQXlCLEVBQUUsV0FBVyxFQUNkLFlBQVksRUFDYixlQUFlO0NBQ3RDLGlCQUFpQixFQUFFLGFBQWE7O0NBRWhDLG1EQUFtRDtBQUNwRDs7QUFFQTtJQUNJLDBFQUEwRTtBQUM5RTs7QUFFQTtDQUNDLGFBQWE7SUFDVix1QkFBdUI7SUFDdkIsbUJBQW1COztJQUVuQixnQkFBZ0I7O0lBRWhCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7O0FBRUE7Q0FDQztHQUNFO3FCQUNrQjtHQUNsQiwwQkFBMEI7R0FDMUI7Q0FDRjtHQUNFO3NCQUNtQjtHQUNuQiw2QkFBNkI7R0FDN0I7Q0FDRjs7R0FFRTtzQkFDbUI7R0FDbkIsNEJBQTRCOztHQUU1QjtDQUNGO0dBQ0U7c0JBQ21CO0dBQ25CLDZCQUE2QjtHQUM3QjtBQUNIOztBQUVBO0NBQ0M7R0FDRSxzQ0FBc0M7WUFDN0IsVUFBVTtHQUNuQjtDQUNGO0dBQ0Usd0NBQXdDO1lBQy9CLFlBQVk7R0FDckI7Q0FDRjtHQUNFLHVDQUF1QztZQUM5QixZQUFZO0dBQ3JCO0NBQ0Y7R0FDRSx3Q0FBd0M7WUFDL0IsVUFBVTtHQUNuQjtBQUNIOztBQUVBO0NBQ0M7RUFDQyw4QkFBOEI7RUFDOUIsVUFBVTtDQUNYOztDQUVBO0VBQ0MsMEJBQTBCO0VBQzFCLFVBQVU7Q0FDWDtBQUNEIiwiZmlsZSI6ImludHJvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcclxuXHRmb250LWZhbWlseTogdGV1dG9uaWM7XHJcblx0c3JjOiB1cmwoJy4uLy4uL3RldXRvbmljL3RldXRvbmljMS50dGYnKTtcclxufVxyXG5cclxuLmxvZ28ge1xyXG5cdGZvbnQtZmFtaWx5OiB0ZXV0b25pYztcclxuXHRcclxuXHRjb2xvcjogI0ZGRkZGRjtcclxuXHRcclxuXHR0ZXh0LXNoYWRvdzogM3B4IDNweCAzcHggIzAwMDAwMCxcclxuXHRcdFx0XHQgNnB4IDZweCAxMHB4IGdyYXk7XHJcblx0XHRcdFx0IFxyXG5cdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFNhZmFyaSAqLyAgICAgICAgXHJcblx0LW1vei11c2VyLXNlbGVjdDogbm9uZTsgLyogRmlyZWZveCAqL1xyXG5cdC1tcy11c2VyLXNlbGVjdDogbm9uZTsgLyogSUUxMCsvRWRnZSAqL1xyXG5cdHVzZXItc2VsZWN0OiBub25lOyAvKiBTdGFuZGFyZCAqL1xyXG5cdFxyXG5cdGFuaW1hdGlvbjogc3RhdGljQW5pbWF0aW9uIDZzIGluZmluaXRlLCBmYWRlSW4gM3MgMTtcdFxyXG59XHJcblxyXG4ucmVkR2xvdyB7XHJcbiAgICBhbmltYXRpb246IHN0YXRpY0FuaW1hdGlvbiAycyBpbmZpbml0ZSwgcmVkR2xvd0FuaW1hdGlvbiAycyAxLCBmYWRlSW4gM3MgMTtcdFxyXG59XHJcblxyXG4uaW5pdGlhbExvZ28ge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgbWFyZ2luLXRvcDogMzB2aDtcclxuXHJcbiAgICBmb250LXNpemU6IDh2dztcclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlSW4ge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHN0YXRpY0FuaW1hdGlvbiB7XHJcblx0MCUsIDkwJSAgIHtcclxuXHRcdFx0dGV4dC1zaGFkb3c6IDNweCAzcHggM3B4ICMwMDAwMDAsXHJcblx0XHRcdFx0NnB4IDZweCAxMHB4IGdyYXk7XHJcblx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xyXG5cdFx0IH1cclxuXHQ5NiUsIDk3JSAgIHtcclxuXHRcdFx0dGV4dC1zaGFkb3c6IDNweCAzcHggM3B4IHJlZCxcclxuXHRcdFx0XHQgNnB4IDZweCAxMHB4IGdyYXk7XHJcblx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01cHgsIDApO1xyXG5cdFx0IH1cclxuXHQ5OCUsIDk5JSAgIHtcclxuXHRcdFxyXG5cdFx0XHR0ZXh0LXNoYWRvdzogN3B4IDNweCAzcHggY3lhbixcclxuXHRcdFx0XHQgNnB4IDZweCAxMHB4IGdyYXk7XHJcblx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlKDVweCwgMCk7XHJcblx0XHRcdFxyXG5cdFx0IH1cclxuXHQxMDAlICAge1xyXG5cdFx0XHR0ZXh0LXNoYWRvdzogMHB4IDNweCAzcHggeWVsbG93LFxyXG5cdFx0XHRcdCA2cHggNnB4IDEwcHggZ3JheTtcclxuXHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTVweCwgMCk7XHJcblx0XHQgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHJlZEdsb3dBbmltYXRpb24ge1xyXG5cdDAlLCA5MCUgICB7XHJcblx0XHRcdGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDBweCAxMDBweCByZWQpO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG5cdFx0IH1cclxuXHQ5NiUsIDk3JSAgIHtcclxuXHRcdFx0ZmlsdGVyOiBkcm9wLXNoYWRvdygtNTBweCAwcHggMTAwcHggcmVkKTtcclxuICAgICAgICAgICAgb3BhY2l0eTogMC43O1xyXG5cdFx0IH1cclxuXHQ5OCUsIDk5JSAgIHtcclxuXHRcdFx0ZmlsdGVyOiBkcm9wLXNoYWRvdyg1MHB4IDBweCAxMDBweCByZWQpO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjQ7XHJcblx0XHQgfVxyXG5cdDEwMCUgICB7XHJcblx0XHRcdGZpbHRlcjogZHJvcC1zaGFkb3coLTUwcHggMHB4IDEwMHB4IHJlZCk7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcblx0XHQgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVJblRleHQge1xyXG5cdGZyb20ge1xyXG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTgwcHgsIDApO1xyXG5cdFx0b3BhY2l0eTogMDtcclxuXHR9XHJcblx0XHJcblx0dG8ge1xyXG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XHJcblx0XHRvcGFjaXR5OiAxO1xyXG5cdH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 8, vars: 0, consts: [[1, "footer", "center"], ["href", "https://www.linkedin.com/in/tin-fioli%C4%87-78748520a/", "target", "_blank"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Created by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Tin Fioli\u0107");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Duelist \u00A9 2022 - All rights reserved (Huge thanks to Paul Lloyd, creator of Teutonic font)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".footer[_ngcontent-%COMP%] {\r\n    margin-top: 20vh;\r\n    \r\n    color: #FE5D26;\r\n\r\n    font-size: 20px;\r\n    font-family: 'Open Sans Condensed';\r\n\r\n    margin-right: 5vw;\r\n}\r\n\r\n.center[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\nhr[_ngcontent-%COMP%] {\r\n    border: 0;\r\n    height: 1px;\r\n    background-image: linear-gradient(to right, rgba(10, 13, 20, 0.205), #7e0000, rgba(10, 13, 20, 0.205));\r\n}\r\n\r\na[_ngcontent-%COMP%]:link {\r\n    color: red;\r\n    text-decoration: none;\r\n  }\r\n\r\na[_ngcontent-%COMP%]:visited {\r\n    color: rgb(255, 0, 0);\r\n    text-decoration: none;\r\n  }\r\n\r\na[_ngcontent-%COMP%]:hover {\r\n    color: rgb(207, 0, 0);\r\n    text-decoration: none;\r\n  }\r\n\r\na[_ngcontent-%COMP%]:active {\r\n    color: rgb(255, 0, 0);\r\n    text-decoration: none;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCOztJQUVoQixjQUFjOztJQUVkLGVBQWU7SUFDZixrQ0FBa0M7O0lBRWxDLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxXQUFXO0lBQ1gsc0dBQXNHO0FBQzFHOztBQUVDO0lBQ0csVUFBVTtJQUNWLHFCQUFxQjtFQUN2Qjs7QUFFQTtJQUNFLHFCQUFxQjtJQUNyQixxQkFBcUI7RUFDdkI7O0FBRUE7SUFDRSxxQkFBcUI7SUFDckIscUJBQXFCO0VBQ3ZCOztBQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLHFCQUFxQjtFQUN2QiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xyXG4gICAgbWFyZ2luLXRvcDogMjB2aDtcclxuICAgIFxyXG4gICAgY29sb3I6ICNGRTVEMjY7XHJcblxyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgQ29uZGVuc2VkJztcclxuXHJcbiAgICBtYXJnaW4tcmlnaHQ6IDV2dztcclxufVxyXG5cclxuLmNlbnRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmhyIHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDEwLCAxMywgMjAsIDAuMjA1KSwgIzdlMDAwMCwgcmdiYSgxMCwgMTMsIDIwLCAwLjIwNSkpO1xyXG59XHJcblxyXG4gYTpsaW5rIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIGE6dmlzaXRlZCB7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMCwgMCk7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIGE6aG92ZXIge1xyXG4gICAgY29sb3I6IHJnYigyMDcsIDAsIDApO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICBcclxuICBhOmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMCwgMCk7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfSAiXX0= */"] });


/***/ }),

/***/ "gq2R":
/*!******************************************!*\
  !*** ./src/app/album/album.component.ts ***!
  \******************************************/
/*! exports provided: AlbumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumComponent", function() { return AlbumComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AlbumComponent {
    constructor() { }
    ngOnInit() {
    }
}
AlbumComponent.ɵfac = function AlbumComponent_Factory(t) { return new (t || AlbumComponent)(); };
AlbumComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlbumComponent, selectors: [["app-album"]], decls: 15, vars: 0, consts: [[1, "content", "center"], [1, "title"]], template: function AlbumComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "A Fall From Grace");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "A Fall From Grace");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "The album is available on all streaming services!PENIS CANNONPENIS CANNONPENIS CANNONPENIS CANNONPENIS CANNONPENIS CANNONPENIS CANNONPENIS CANNONPENIS CANNONPENIS CANNONPENIS CANNONPENIS CANNONPENIS CANNONPENIS CANNONPENIS CANNONPENIS CANNONPENIS CANNONPENIS CANNONPENIS CANNONPENIS CANNONPENIS CANNONPENIS CANNONPENIS CANNONPENIS CANNONPENIS CANNONPENIS CANNONPENIS CANNONPENIS CANNONPENIS CANNONPENIS CANNONPENIS CANNONPENIS CANNONPENIS CANNONPENIS CANNONPENIS CANNON");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "A Fall From Grace");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "The album is available on all streaming services! PENIS CANNON PENIS CANNONPENIS CANNONPENIS CANNONPENIS CANNONPENIS CANNONPENIS CANNONPENIS CANNONPENIS CANNONPENIS CANNON");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".title[_ngcontent-%COMP%] {\r\n    color: #FE5D26;\r\n\r\n    font-family: 'Open Sans Condensed';\r\n    font-size: 70px;\r\n}\r\n\r\n.center[_ngcontent-%COMP%] {\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-align: center;\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n   margin-right: 10vw;\r\n   margin-top: 6vh;\r\n}\r\n\r\n.album[_ngcontent-%COMP%] {\r\n    transform: skewY(10deg); \r\n    margin-top: 5vh;\r\n    box-shadow: 1px 1px 0px #999,\r\n                2px 2px 0px #999,\r\n                3px 3px 0px #999,\r\n                4px 4px 0px #999,\r\n                5px 5px 0px #999,\r\n                6px 6px 0px #999,\r\n                7px 7px 0px #999,\r\n                8px 8px 0px #999,\r\n                9px 9px 0px #999;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n    font-family: 'Barlow', sans-serif;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsYnVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjOztJQUVkLGtDQUFrQztJQUNsQyxlQUFlO0FBQ25COztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7R0FDRyxrQkFBa0I7R0FDbEIsZUFBZTtBQUNsQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2Y7Ozs7Ozs7O2dDQVE0QjtBQUNoQzs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6ImFsYnVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xyXG4gICAgY29sb3I6ICNGRTVEMjY7XHJcblxyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgQ29uZGVuc2VkJztcclxuICAgIGZvbnQtc2l6ZTogNzBweDtcclxufVxyXG5cclxuLmNlbnRlciB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICAgbWFyZ2luLXJpZ2h0OiAxMHZ3O1xyXG4gICBtYXJnaW4tdG9wOiA2dmg7XHJcbn1cclxuXHJcbi5hbGJ1bSB7XHJcbiAgICB0cmFuc2Zvcm06IHNrZXdZKDEwZGVnKTsgXHJcbiAgICBtYXJnaW4tdG9wOiA1dmg7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDBweCAjOTk5LFxyXG4gICAgICAgICAgICAgICAgMnB4IDJweCAwcHggIzk5OSxcclxuICAgICAgICAgICAgICAgIDNweCAzcHggMHB4ICM5OTksXHJcbiAgICAgICAgICAgICAgICA0cHggNHB4IDBweCAjOTk5LFxyXG4gICAgICAgICAgICAgICAgNXB4IDVweCAwcHggIzk5OSxcclxuICAgICAgICAgICAgICAgIDZweCA2cHggMHB4ICM5OTksXHJcbiAgICAgICAgICAgICAgICA3cHggN3B4IDBweCAjOTk5LFxyXG4gICAgICAgICAgICAgICAgOHB4IDhweCAwcHggIzk5OSxcclxuICAgICAgICAgICAgICAgIDlweCA5cHggMHB4ICM5OTk7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgZm9udC1mYW1pbHk6ICdCYXJsb3cnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "wlho":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _intro_intro_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../intro/intro.component */ "drGS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer/footer.component */ "fp1T");
/* harmony import */ var _album_album_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../album/album.component */ "gq2R");





function MainComponent_app_album_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-album");
} }
class MainComponent {
    constructor() {
        this.currentPage = "discography";
        this.pageList = ["discography", "streaming", "download", "about", "contact"];
    }
    ngOnInit() {
        this.startUpAnimation();
    }
    startUpAnimation() {
        var logo = document.getElementById("introLogo");
        var body = document.getElementById("mainBody");
        var menuItem = document.getElementById("discography");
        //TODO DELETE
        //logo.style.display = "none";
        body.style.display = "none";
        menuItem.classList.add("selected");
        setTimeout(function () {
            logo.style.display = "none";
            body.style.display = "block";
        }, 2500);
    }
    changePage(id) {
        for (let page of this.pageList) {
            document.getElementById(page).classList.remove("selected");
        }
        document.getElementById(id).classList.add("selected");
        this.currentPage = id;
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 26, vars: 1, consts: [["id", "introLogo"], ["id", "mainBody"], ["id", "sidebar", 2, "min-width", "35vw"], [1, "logo", "center"], [1, "center", "menu"], ["id", "discography", 1, "menuItem", 3, "click"], ["id", "streaming", 1, "menuItem", 3, "click"], ["id", "download", 1, "menuItem", 3, "click"], ["id", "about", 1, "menuItem", 3, "click"], ["id", "contact", 1, "menuItem", 3, "click"], [1, "content", 2, "min-width", "60vw"], [4, "ngIf"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-intro", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Duelist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainComponent_Template_p_click_8_listener() { return ctx.changePage("discography"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Discography");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainComponent_Template_p_click_11_listener() { return ctx.changePage("streaming"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Streaming & Media");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainComponent_Template_p_click_14_listener() { return ctx.changePage("download"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Download Songs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainComponent_Template_p_click_17_listener() { return ctx.changePage("about"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "About The Band");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainComponent_Template_p_click_20_listener() { return ctx.changePage("contact"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, MainComponent_app_album_24_Template, 1, 0, "app-album", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentPage == "discography");
    } }, directives: [_intro_intro_component__WEBPACK_IMPORTED_MODULE_1__["IntroComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], _album_album_component__WEBPACK_IMPORTED_MODULE_4__["AlbumComponent"]], styles: ["@font-face {\r\n    font-family: teutonic;\r\n    src: url('teutonic1.ttf');\r\n}\r\n\r\n*[_ngcontent-%COMP%] {\r\n    cursor: url('cursor.png'), auto;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%] {\r\n    font-family: teutonic;\r\n\r\n    color: #FFFFFF;\r\n\r\n    text-shadow: 3px 3px 3px #000000,\r\n        6px 6px 10px gray;\r\n\r\n    font-size: 100px;\r\n\r\n    padding-bottom: 3vh;\r\n\r\n    -webkit-user-select: none;\r\n    \r\n    \r\n    \r\n    user-select: none;\r\n    \r\n\r\n    animation: staticAnimation 6s infinite;\r\n}\r\n\r\nhr[_ngcontent-%COMP%] {\r\n    border: 0;\r\n    height: 3px;\r\n    background-image: linear-gradient(to right, rgba(10, 13, 20, 0.205), #7e0000, rgba(10, 13, 20, 0.205));\r\n    animation: lineAnimation 6s infinite;\r\n}\r\n\r\n#sidebar[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 15vh;\r\n}\r\n\r\n#mainBody[_ngcontent-%COMP%] {\r\n    animation: fadeIn 2s 1;\r\n}\r\n\r\n.center[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\n.menu[_ngcontent-%COMP%] {\r\n    margin-top: 3vh;\r\n    width: 20vw;\r\n    filter: drop-shadow(0px 20px 70px red);\r\n}\r\n\r\n.menuItem[_ngcontent-%COMP%] {\r\n    font-family: 'Francois One', sans-serif;\r\n    font-size: 30px;\r\n\r\n    text-shadow: 3px 3px 3px #000000,\r\n        6px 6px 10px gray;\r\n}\r\n\r\n.menuItem[_ngcontent-%COMP%]:hover {\r\n    text-shadow: 3px 3px 3px #7e0000,\r\n        6px 6px 10px gray;\r\n\r\n    transform: translate(1px, 1px);\r\n\r\n    color: #F19A3E;\r\n}\r\n\r\n.selected[_ngcontent-%COMP%] {\r\n    color: #FE5D26;\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n    margin-left: 35vw;\r\n}\r\n\r\n@keyframes lineAnimation {\r\n    0% {\r\n        width: 25vw;\r\n    }\r\n\r\n    50% {\r\n        width: 15vw;\r\n    }\r\n\r\n    100% {\r\n        width: 25vw;\r\n    }\r\n}\r\n\r\n@keyframes staticAnimation {\r\n    0%, 60% {\r\n        text-shadow: 3px 3px 3px #000000,\r\n            6px 6px 10px gray;\r\n        transform: translate(0, 0);\r\n    }\r\n\r\n    96%, 97% {\r\n        text-shadow: 3px 3px 3px red,\r\n            6px 6px 10px gray;\r\n        transform: translate(-5px, 0);\r\n    }\r\n\r\n    98%, 99% {\r\n\r\n        text-shadow: 7px 3px 3px cyan,\r\n            6px 6px 10px gray;\r\n        transform: translate(5px, 0);\r\n\r\n    }\r\n\r\n    100% {\r\n        text-shadow: 0px 3px 3px yellow,\r\n            6px 6px 10px gray;\r\n        transform: translate(-5px, 0);\r\n    }\r\n}\r\n\r\n@keyframes fadeInText {\r\n    from {\r\n        transform: translate(-80px, 0);\r\n        opacity: 0;\r\n    }\r\n\r\n    to {\r\n        transform: translate(0, 0);\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n\r\n\r\n@media only screen and (max-width: 1600px) {\r\n    hr[_ngcontent-%COMP%] {\r\n        border: 0;\r\n        height: 2px;\r\n        background-image: linear-gradient(to right, rgba(10, 13, 20, 0.205), #7e0000, rgba(10, 13, 20, 0.205));\r\n        animation: lineAnimation 0s 0;\r\n    }\r\n\r\n    .logo[_ngcontent-%COMP%] {\r\n        font-family: teutonic;\r\n    \r\n        color: #FFFFFF;\r\n    \r\n        text-shadow: 3px 3px 3px #000000,\r\n            6px 6px 10px gray;\r\n    \r\n        font-size: 100px;\r\n\r\n    \r\n        padding-bottom: 3vh;\r\n    \r\n        -webkit-user-select: none;\r\n        \r\n        \r\n        \r\n        user-select: none;\r\n        \r\n    \r\n        animation: staticAnimation 6s infinite;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 1220px) {\r\n    hr[_ngcontent-%COMP%] {\r\n        border: 0;\r\n        height: 2px;\r\n        background-image: linear-gradient(to right, rgba(10, 13, 20, 0.205), #7e0000, rgba(10, 13, 20, 0.205));\r\n        animation: lineAnimation 0s 0;\r\n    }\r\n\r\n    .logo[_ngcontent-%COMP%] {\r\n        font-family: teutonic;\r\n    \r\n        color: #FFFFFF;\r\n    \r\n        text-shadow: 3px 3px 3px #000000,\r\n            6px 6px 10px gray;\r\n    \r\n        font-size: 60px;\r\n    \r\n        padding-bottom: 3vh;\r\n    \r\n        -webkit-user-select: none;\r\n        \r\n        \r\n        \r\n        user-select: none;\r\n        \r\n    \r\n        animation: staticAnimation 6s infinite;\r\n    }\r\n\r\n    .menu[_ngcontent-%COMP%] {\r\n        margin-top: 3vh;\r\n        width: 20vw;\r\n        filter: drop-shadow(0px 20px 70px red);\r\n    }\r\n    \r\n    .menuItem[_ngcontent-%COMP%] {\r\n        font-family: 'Francois One', sans-serif;\r\n        font-size: 23px;\r\n    \r\n        text-shadow: 3px 3px 3px #000000,\r\n            6px 6px 10px gray;\r\n    }\r\n}\r\n\r\n\r\n\r\n@media only screen and (max-width: 920px) {\r\n    hr[_ngcontent-%COMP%] {\r\n        border: 0;\r\n        height: 2px;\r\n        background-image: linear-gradient(to right, rgba(10, 13, 20, 0.205), #7e0000, rgba(10, 13, 20, 0.205));\r\n        animation: lineAnimation 0s 0;\r\n        display: none;\r\n    }\r\n\r\n    .logo[_ngcontent-%COMP%] {\r\n        font-family: teutonic;\r\n    \r\n        color: #FFFFFF;\r\n    \r\n        text-shadow: 3px 3px 3px #000000,\r\n            6px 6px 10px gray;\r\n    \r\n        font-size: 70px;\r\n    \r\n        margin-top: -3vh;\r\n        margin-left: -45%;\r\n    \r\n        padding-bottom: 60px;\r\n        padding-top: 10px;\r\n    \r\n        -webkit-user-select: none;\r\n        \r\n        \r\n        \r\n        user-select: none;\r\n        \r\n    \r\n        animation: staticAnimation 0s 0;\r\n\r\n        background-image: url('bg.jpg');\r\n        border-bottom: 1px solid black;\r\n        z-index: 1;\r\n    }\r\n\r\n    .menu[_ngcontent-%COMP%] {\r\n        margin-top: -45px;\r\n        margin-left: -30vw;\r\n        width: 100vw;\r\n        filter: drop-shadow(0px 20px 70px red);\r\n    }\r\n    \r\n    .menuItem[_ngcontent-%COMP%] {\r\n        font-family: 'Francois One', sans-serif;\r\n        font-size: 18px;\r\n        display: inline;\r\n\r\n        padding-right: 2vw;\r\n    \r\n        text-shadow: 3px 3px 3px #000000,\r\n            6px 6px 10px gray;\r\n    }\r\n\r\n    #sidebar[_ngcontent-%COMP%] {\r\n        position: fixed;\r\n        top: 3vh;\r\n        left: 30vw;\r\n    }\r\n\r\n    .content[_ngcontent-%COMP%] {\r\n        margin-top: 150px;\r\n        margin-left: 10vw;\r\n    }\r\n\r\n    br[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 590px) {\r\n    hr[_ngcontent-%COMP%] {\r\n        border: 0;\r\n        height: 2px;\r\n        background-image: linear-gradient(to right, rgba(10, 13, 20, 0.205), #7e0000, rgba(10, 13, 20, 0.205));\r\n        animation: lineAnimation 0s 0;\r\n        display: none;\r\n    }\r\n\r\n    .logo[_ngcontent-%COMP%] {\r\n        font-family: teutonic;\r\n    \r\n        color: #FFFFFF;\r\n    \r\n        text-shadow: 3px 3px 3px #000000,\r\n            6px 6px 10px gray;\r\n    \r\n        font-size: 60px;\r\n    \r\n        margin-top: -3vh;\r\n        margin-left: -45%;\r\n    \r\n        padding-bottom: 55px;\r\n        padding-top: 20px;\r\n    \r\n        -webkit-user-select: none;\r\n        \r\n        \r\n        \r\n        user-select: none;\r\n        \r\n    \r\n        animation: staticAnimation 0s 0;\r\n\r\n        background-image: url('bg.jpg');\r\n        z-index: 1;\r\n\r\n        border-bottom: 1px solid black;\r\n    }\r\n\r\n    .menu[_ngcontent-%COMP%] {\r\n        margin-top: -50px;\r\n        margin-left: -30vw;\r\n        width: 100vw;\r\n        filter: drop-shadow(0px 20px 70px red);\r\n        background: rgb(22, 10, 10, 0);\r\n    }\r\n    \r\n    .menuItem[_ngcontent-%COMP%] {\r\n        font-family: 'Francois One', sans-serif;\r\n        font-size: 15px;\r\n        display: inline;\r\n\r\n        padding-right: 4vw;\r\n\r\n        text-shadow: 3px 3px 3px #000000,\r\n            6px 6px 10px gray;\r\n    }\r\n\r\n    #sidebar[_ngcontent-%COMP%] {\r\n        position: fixed;\r\n        top: 3vh;\r\n        left: 30vw;\r\n    }\r\n\r\n    .content[_ngcontent-%COMP%] {\r\n        margin-top: 150px;\r\n        margin-left: 10vw;\r\n    }\r\n\r\n    br[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,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QUNJLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLHNDQUFzQztJQUMxQzs7SUFFQTtRQUNJLHVDQUF1QztRQUN2QyxlQUFlO1FBQ2YsZUFBZTs7UUFFZixrQkFBa0I7O1FBRWxCOzZCQUNxQjtJQUN6Qjs7SUFFQTtRQUNJLGVBQWU7UUFDZixRQUFRO1FBQ1IsVUFBVTtJQUNkOztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksU0FBUztRQUNULFdBQVc7UUFDWCxzR0FBc0c7UUFDdEcsNkJBQTZCO1FBQzdCLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxxQkFBcUI7O1FBRXJCLGNBQWM7O1FBRWQ7NkJBQ3FCOztRQUVyQixlQUFlOztRQUVmLGdCQUFnQjtRQUNoQixpQkFBaUI7O1FBRWpCLG9CQUFvQjtRQUNwQixpQkFBaUI7O1FBRWpCLHlCQUF5QjtRQUN6QixXQUFXO1FBRVgsWUFBWTtRQUVaLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsYUFBYTs7UUFFYiwrQkFBK0I7O1FBRS9CLCtCQUFxQztRQUNyQyxVQUFVOztRQUVWLDhCQUE4QjtJQUNsQzs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLHNDQUFzQztRQUN0Qyw4QkFBOEI7SUFDbEM7O0lBRUE7UUFDSSx1Q0FBdUM7UUFDdkMsZUFBZTtRQUNmLGVBQWU7O1FBRWYsa0JBQWtCOztRQUVsQjs2QkFDcUI7SUFDekI7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsUUFBUTtRQUNSLFVBQVU7SUFDZDs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCO0FBQ0oiLCJmaWxlIjoibWFpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogdGV1dG9uaWM7XHJcbiAgICBzcmM6IHVybCgnLi4vLi4vdGV1dG9uaWMvdGV1dG9uaWMxLnR0ZicpO1xyXG59XHJcblxyXG4qIHtcclxuICAgIGN1cnNvcjogdXJsKCcuLi8uLi9jdXJzb3IucG5nJyksIGF1dG87XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICAgIGZvbnQtZmFtaWx5OiB0ZXV0b25pYztcclxuXHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuXHJcbiAgICB0ZXh0LXNoYWRvdzogM3B4IDNweCAzcHggIzAwMDAwMCxcclxuICAgICAgICA2cHggNnB4IDEwcHggZ3JheTtcclxuXHJcbiAgICBmb250LXNpemU6IDEwMHB4O1xyXG5cclxuICAgIHBhZGRpbmctYm90dG9tOiAzdmg7XHJcblxyXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC8qIFNhZmFyaSAqL1xyXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC8qIEZpcmVmb3ggKi9cclxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC8qIElFMTArL0VkZ2UgKi9cclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLyogU3RhbmRhcmQgKi9cclxuXHJcbiAgICBhbmltYXRpb246IHN0YXRpY0FuaW1hdGlvbiA2cyBpbmZpbml0ZTtcclxufVxyXG5cclxuaHIge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgaGVpZ2h0OiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMTAsIDEzLCAyMCwgMC4yMDUpLCAjN2UwMDAwLCByZ2JhKDEwLCAxMywgMjAsIDAuMjA1KSk7XHJcbiAgICBhbmltYXRpb246IGxpbmVBbmltYXRpb24gNnMgaW5maW5pdGU7XHJcbn1cclxuXHJcbiNzaWRlYmFyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMTV2aDtcclxufVxyXG5cclxuI21haW5Cb2R5IHtcclxuICAgIGFuaW1hdGlvbjogZmFkZUluIDJzIDE7XHJcbn1cclxuXHJcbi5jZW50ZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubWVudSB7XHJcbiAgICBtYXJnaW4tdG9wOiAzdmg7XHJcbiAgICB3aWR0aDogMjB2dztcclxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDIwcHggNzBweCByZWQpO1xyXG59XHJcblxyXG4ubWVudUl0ZW0ge1xyXG4gICAgZm9udC1mYW1pbHk6ICdGcmFuY29pcyBPbmUnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG5cclxuICAgIHRleHQtc2hhZG93OiAzcHggM3B4IDNweCAjMDAwMDAwLFxyXG4gICAgICAgIDZweCA2cHggMTBweCBncmF5O1xyXG59XHJcblxyXG4ubWVudUl0ZW06aG92ZXIge1xyXG4gICAgdGV4dC1zaGFkb3c6IDNweCAzcHggM3B4ICM3ZTAwMDAsXHJcbiAgICAgICAgNnB4IDZweCAxMHB4IGdyYXk7XHJcblxyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMXB4LCAxcHgpO1xyXG5cclxuICAgIGNvbG9yOiAjRjE5QTNFO1xyXG59XHJcblxyXG4uc2VsZWN0ZWQge1xyXG4gICAgY29sb3I6ICNGRTVEMjY7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzNXZ3O1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGxpbmVBbmltYXRpb24ge1xyXG4gICAgMCUge1xyXG4gICAgICAgIHdpZHRoOiAyNXZ3O1xyXG4gICAgfVxyXG5cclxuICAgIDUwJSB7XHJcbiAgICAgICAgd2lkdGg6IDE1dnc7XHJcbiAgICB9XHJcblxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgd2lkdGg6IDI1dnc7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc3RhdGljQW5pbWF0aW9uIHtcclxuICAgIDAlLCA2MCUge1xyXG4gICAgICAgIHRleHQtc2hhZG93OiAzcHggM3B4IDNweCAjMDAwMDAwLFxyXG4gICAgICAgICAgICA2cHggNnB4IDEwcHggZ3JheTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuICAgIH1cclxuXHJcbiAgICA5NiUsIDk3JSB7XHJcbiAgICAgICAgdGV4dC1zaGFkb3c6IDNweCAzcHggM3B4IHJlZCxcclxuICAgICAgICAgICAgNnB4IDZweCAxMHB4IGdyYXk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTVweCwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgOTglLCA5OSUge1xyXG5cclxuICAgICAgICB0ZXh0LXNoYWRvdzogN3B4IDNweCAzcHggY3lhbixcclxuICAgICAgICAgICAgNnB4IDZweCAxMHB4IGdyYXk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNXB4LCAwKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgdGV4dC1zaGFkb3c6IDBweCAzcHggM3B4IHllbGxvdyxcclxuICAgICAgICAgICAgNnB4IDZweCAxMHB4IGdyYXk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTVweCwgMCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZUluVGV4dCB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtODBweCwgMCk7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuXHJcbiAgICB0byB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxufVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLypUQUJMRVQqL1xyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjAwcHgpIHtcclxuICAgIGhyIHtcclxuICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDEwLCAxMywgMjAsIDAuMjA1KSwgIzdlMDAwMCwgcmdiYSgxMCwgMTMsIDIwLCAwLjIwNSkpO1xyXG4gICAgICAgIGFuaW1hdGlvbjogbGluZUFuaW1hdGlvbiAwcyAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5sb2dvIHtcclxuICAgICAgICBmb250LWZhbWlseTogdGV1dG9uaWM7XHJcbiAgICBcclxuICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIFxyXG4gICAgICAgIHRleHQtc2hhZG93OiAzcHggM3B4IDNweCAjMDAwMDAwLFxyXG4gICAgICAgICAgICA2cHggNnB4IDEwcHggZ3JheTtcclxuICAgIFxyXG4gICAgICAgIGZvbnQtc2l6ZTogMTAwcHg7XHJcblxyXG4gICAgXHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDN2aDtcclxuICAgIFxyXG4gICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgLyogU2FmYXJpICovXHJcbiAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAvKiBGaXJlZm94ICovXHJcbiAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgIC8qIElFMTArL0VkZ2UgKi9cclxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAvKiBTdGFuZGFyZCAqL1xyXG4gICAgXHJcbiAgICAgICAgYW5pbWF0aW9uOiBzdGF0aWNBbmltYXRpb24gNnMgaW5maW5pdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMjBweCkge1xyXG4gICAgaHIge1xyXG4gICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMTAsIDEzLCAyMCwgMC4yMDUpLCAjN2UwMDAwLCByZ2JhKDEwLCAxMywgMjAsIDAuMjA1KSk7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBsaW5lQW5pbWF0aW9uIDBzIDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmxvZ28ge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiB0ZXV0b25pYztcclxuICAgIFxyXG4gICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgXHJcbiAgICAgICAgdGV4dC1zaGFkb3c6IDNweCAzcHggM3B4ICMwMDAwMDAsXHJcbiAgICAgICAgICAgIDZweCA2cHggMTBweCBncmF5O1xyXG4gICAgXHJcbiAgICAgICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgXHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDN2aDtcclxuICAgIFxyXG4gICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgLyogU2FmYXJpICovXHJcbiAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAvKiBGaXJlZm94ICovXHJcbiAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgIC8qIElFMTArL0VkZ2UgKi9cclxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAvKiBTdGFuZGFyZCAqL1xyXG4gICAgXHJcbiAgICAgICAgYW5pbWF0aW9uOiBzdGF0aWNBbmltYXRpb24gNnMgaW5maW5pdGU7XHJcbiAgICB9XHJcblxyXG4gICAgLm1lbnUge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDN2aDtcclxuICAgICAgICB3aWR0aDogMjB2dztcclxuICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAyMHB4IDcwcHggcmVkKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLm1lbnVJdGVtIHtcclxuICAgICAgICBmb250LWZhbWlseTogJ0ZyYW5jb2lzIE9uZScsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgXHJcbiAgICAgICAgdGV4dC1zaGFkb3c6IDNweCAzcHggM3B4ICMwMDAwMDAsXHJcbiAgICAgICAgICAgIDZweCA2cHggMTBweCBncmF5O1xyXG4gICAgfVxyXG59XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKk1PQklMRSovXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkyMHB4KSB7XHJcbiAgICBociB7XHJcbiAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgxMCwgMTMsIDIwLCAwLjIwNSksICM3ZTAwMDAsIHJnYmEoMTAsIDEzLCAyMCwgMC4yMDUpKTtcclxuICAgICAgICBhbmltYXRpb246IGxpbmVBbmltYXRpb24gMHMgMDtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5sb2dvIHtcclxuICAgICAgICBmb250LWZhbWlseTogdGV1dG9uaWM7XHJcbiAgICBcclxuICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIFxyXG4gICAgICAgIHRleHQtc2hhZG93OiAzcHggM3B4IDNweCAjMDAwMDAwLFxyXG4gICAgICAgICAgICA2cHggNnB4IDEwcHggZ3JheTtcclxuICAgIFxyXG4gICAgICAgIGZvbnQtc2l6ZTogNzBweDtcclxuICAgIFxyXG4gICAgICAgIG1hcmdpbi10b3A6IC0zdmg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC00NSU7XHJcbiAgICBcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNjBweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIFxyXG4gICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgLyogU2FmYXJpICovXHJcbiAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAvKiBGaXJlZm94ICovXHJcbiAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgIC8qIElFMTArL0VkZ2UgKi9cclxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAvKiBTdGFuZGFyZCAqL1xyXG4gICAgXHJcbiAgICAgICAgYW5pbWF0aW9uOiBzdGF0aWNBbmltYXRpb24gMHMgMDtcclxuXHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9iZy5qcGcnKTtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgIH1cclxuXHJcbiAgICAubWVudSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTQ1cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0zMHZ3O1xyXG4gICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAyMHB4IDcwcHggcmVkKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLm1lbnVJdGVtIHtcclxuICAgICAgICBmb250LWZhbWlseTogJ0ZyYW5jb2lzIE9uZScsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuXHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMnZ3O1xyXG4gICAgXHJcbiAgICAgICAgdGV4dC1zaGFkb3c6IDNweCAzcHggM3B4ICMwMDAwMDAsXHJcbiAgICAgICAgICAgIDZweCA2cHggMTBweCBncmF5O1xyXG4gICAgfVxyXG5cclxuICAgICNzaWRlYmFyIHtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgdG9wOiAzdmg7XHJcbiAgICAgICAgbGVmdDogMzB2dztcclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTUwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwdnc7XHJcbiAgICB9XHJcblxyXG4gICAgYnIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTkwcHgpIHtcclxuICAgIGhyIHtcclxuICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDEwLCAxMywgMjAsIDAuMjA1KSwgIzdlMDAwMCwgcmdiYSgxMCwgMTMsIDIwLCAwLjIwNSkpO1xyXG4gICAgICAgIGFuaW1hdGlvbjogbGluZUFuaW1hdGlvbiAwcyAwO1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLmxvZ28ge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiB0ZXV0b25pYztcclxuICAgIFxyXG4gICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgXHJcbiAgICAgICAgdGV4dC1zaGFkb3c6IDNweCAzcHggM3B4ICMwMDAwMDAsXHJcbiAgICAgICAgICAgIDZweCA2cHggMTBweCBncmF5O1xyXG4gICAgXHJcbiAgICAgICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgXHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTN2aDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTQ1JTtcclxuICAgIFxyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1NXB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgXHJcbiAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAvKiBTYWZhcmkgKi9cclxuICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgIC8qIEZpcmVmb3ggKi9cclxuICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgLyogSUUxMCsvRWRnZSAqL1xyXG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgIC8qIFN0YW5kYXJkICovXHJcbiAgICBcclxuICAgICAgICBhbmltYXRpb246IHN0YXRpY0FuaW1hdGlvbiAwcyAwO1xyXG5cclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2JnLmpwZycpO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcblxyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxuICAgIH1cclxuXHJcbiAgICAubWVudSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTUwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0zMHZ3O1xyXG4gICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAyMHB4IDcwcHggcmVkKTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjIsIDEwLCAxMCwgMCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5tZW51SXRlbSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdGcmFuY29pcyBPbmUnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcblxyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDR2dztcclxuXHJcbiAgICAgICAgdGV4dC1zaGFkb3c6IDNweCAzcHggM3B4ICMwMDAwMDAsXHJcbiAgICAgICAgICAgIDZweCA2cHggMTBweCBncmF5O1xyXG4gICAgfVxyXG5cclxuICAgICNzaWRlYmFyIHtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgdG9wOiAzdmg7XHJcbiAgICAgICAgbGVmdDogMzB2dztcclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTUwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwdnc7XHJcbiAgICB9XHJcblxyXG4gICAgYnIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
document.addEventListener('DOMContentLoaded', () => {
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
        .catch(err => console.error(err));
});


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map