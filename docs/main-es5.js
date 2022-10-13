(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! D:\Duelist Downfall\Duelist Website\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "09+m":
    /*!**************************************************!*\
      !*** ./src/app/biography/biography.component.ts ***!
      \**************************************************/

    /*! exports provided: BiographyComponent */

    /***/
    function m(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BiographyComponent", function () {
        return BiographyComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function BiographyComponent_img_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 12);
        }
      }

      function BiographyComponent_img_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 13);
        }
      }

      function BiographyComponent_img_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 14);
        }
      }

      function BiographyComponent_img_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 15);
        }
      }

      function BiographyComponent_img_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 16);
        }
      }

      var BiographyComponent = /*#__PURE__*/function () {
        function BiographyComponent() {
          _classCallCheck(this, BiographyComponent);

          this.currentMember = "band";
        }

        _createClass(BiographyComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "switchImage",
          value: function switchImage(name) {
            this.currentMember = name;
            this.removeClasses();
            document.getElementById(name).classList.add("selectedMember");
          }
        }, {
          key: "removeClasses",
          value: function removeClasses() {
            document.getElementById("band").classList.remove("selectedMember");
            document.getElementById("matija").classList.remove("selectedMember");
            document.getElementById("kristijan").classList.remove("selectedMember");
            document.getElementById("luka").classList.remove("selectedMember");
            document.getElementById("tin").classList.remove("selectedMember");
          }
        }]);

        return BiographyComponent;
      }();

      BiographyComponent.ɵfac = function BiographyComponent_Factory(t) {
        return new (t || BiographyComponent)();
      };

      BiographyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BiographyComponent,
        selectors: [["app-biography"]],
        decls: 37,
        vars: 5,
        consts: [[1, "content", "center"], [1, "title"], ["id", "band", 1, "memberList", "selectedMember", 3, "click"], ["id", "matija", 1, "memberList", 2, "margin-left", "3vw", 3, "click"], ["id", "kristijan", 1, "memberList", 2, "margin-left", "3vw", 3, "click"], ["id", "luka", 1, "memberList", 2, "margin-left", "3vw", 3, "click"], ["id", "tin", 1, "memberList", 2, "margin-left", "3vw", 3, "click"], ["class", "gallery", "src", "https://raw.githubusercontent.com/TinFiolic/Duelist/main/bandphoto.JPG", 4, "ngIf"], ["class", "gallery2", "src", "https://raw.githubusercontent.com/TinFiolic/Duelist/main/matija.JPG", 4, "ngIf"], ["class", "gallery2", "src", "https://raw.githubusercontent.com/TinFiolic/Duelist/main/toth.JPG", 4, "ngIf"], ["class", "gallery2", "src", "https://raw.githubusercontent.com/TinFiolic/Duelist/main/kiki.JPG", 4, "ngIf"], ["class", "gallery2", "src", "https://raw.githubusercontent.com/TinFiolic/Duelist/main/ja.JPG", 4, "ngIf"], ["src", "https://raw.githubusercontent.com/TinFiolic/Duelist/main/bandphoto.JPG", 1, "gallery"], ["src", "https://raw.githubusercontent.com/TinFiolic/Duelist/main/matija.JPG", 1, "gallery2"], ["src", "https://raw.githubusercontent.com/TinFiolic/Duelist/main/toth.JPG", 1, "gallery2"], ["src", "https://raw.githubusercontent.com/TinFiolic/Duelist/main/kiki.JPG", 1, "gallery2"], ["src", "https://raw.githubusercontent.com/TinFiolic/Duelist/main/ja.JPG", 1, "gallery2"]],
        template: function BiographyComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Biography");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "We formed some time shortly before the infamous coronavirus pandemic hit the world by surprise, in 2019. With Luka Toth on guitar and vocals, Matija Vedri\u0161 on drums and Tin Fioli\u0107 on guitar and vocals, we set out to make a record that's a mix of a bunch of genres us three combined listented to and loved through the years, all while growing as musicians and friends in the process. What we came up with is a sound remeniscent of old rock/metal, with a fresh modern twist, but with melodical instrumental and vocal lines that are slowly dissapearing in modern music as time passes...");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "In 2021, Luka, Matija and Tin met with Kiki Marcello, a musician/producer/photographer, to record ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Downfall");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, ", however as the recording process went, Kiki had become interested in joining the band. As time progressed, he finally decided to take up bass guitar and join Duelist in 2022.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Gallery");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BiographyComponent_Template_span_click_20_listener() {
              return ctx.switchImage("band");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "The Band");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BiographyComponent_Template_span_click_22_listener() {
              return ctx.switchImage("matija");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Matija");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BiographyComponent_Template_span_click_24_listener() {
              return ctx.switchImage("kristijan");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Kiki");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BiographyComponent_Template_span_click_26_listener() {
              return ctx.switchImage("luka");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Luka");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BiographyComponent_Template_span_click_28_listener() {
              return ctx.switchImage("tin");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Tin");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, BiographyComponent_img_32_Template, 1, 0, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, BiographyComponent_img_33_Template, 1, 0, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, BiographyComponent_img_34_Template, 1, 0, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, BiographyComponent_img_35_Template, 1, 0, "img", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, BiographyComponent_img_36_Template, 1, 0, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentMember == "band");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentMember == "matija");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentMember == "luka");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentMember == "kristijan");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentMember == "tin");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
        styles: [".title[_ngcontent-%COMP%] {\r\n    color: #FE5D26;\r\n\r\n    font-family: 'Open Sans Condensed';\r\n    font-size: 70px;\r\n}\r\n\r\n.title2[_ngcontent-%COMP%] {\r\n    color: #FE5D26;\r\n\r\n    font-family: 'Open Sans Condensed';\r\n    font-size: 50px;\r\n}\r\n\r\n.center[_ngcontent-%COMP%] {\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-align: center;\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n   margin-right: 10vw;\r\n   margin-top: 6vh;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n    font-family: 'Barlow', sans-serif;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n\r\n    line-height: 1.5;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n    color: red;\r\n    text-decoration: none;\r\n  }\r\n\r\na[_ngcontent-%COMP%]:link {\r\n    color: red;\r\n    text-decoration: none;\r\n  }\r\n\r\na[_ngcontent-%COMP%]:visited {\r\n    color: rgb(255, 0, 0);\r\n    text-decoration: none;\r\n  }\r\n\r\na[_ngcontent-%COMP%]:hover {\r\n    color: rgb(207, 0, 0);\r\n    text-decoration: none;\r\n    cursor: url('cursorLink.png'), auto;\r\n  }\r\n\r\na[_ngcontent-%COMP%]:active {\r\n    color: rgb(255, 0, 0);\r\n    text-decoration: none;\r\n  }\r\n\r\n.gallery[_ngcontent-%COMP%] {\r\n    width: 55vw;\r\n    height: 33vw;\r\n\r\n    border: 2px solid white;\r\n\r\n    -o-object-fit: cover;\r\n\r\n       object-fit: cover;\r\n  }\r\n\r\n.gallery2[_ngcontent-%COMP%] {\r\n    width: 37vw;\r\n    height: 55vw;\r\n\r\n    border: 2px solid white;\r\n\r\n    -o-object-fit: cover;\r\n\r\n       object-fit: cover;\r\n  }\r\n\r\n.memberList[_ngcontent-%COMP%] {\r\n    font-family: 'Barlow', sans-serif;\r\n    font-size: 25px;\r\n    font-weight: bold;\r\n\r\n    color: red;\r\n  }\r\n\r\n.selectedMember[_ngcontent-%COMP%] {\r\n    color: #FFFFFF;\r\n\r\n    border-bottom: 1px solid #FE5D26;\r\n    padding-bottom: 5px;\r\n  }\r\n\r\n@media only screen and (max-width: 700px) { \r\n    p[_ngcontent-%COMP%] {\r\n        font-family: 'Barlow', sans-serif;\r\n        font-size: 17px;\r\n        font-weight: bold;\r\n    }\r\n\r\n    .title[_ngcontent-%COMP%] {\r\n        color: #FE5D26;\r\n    \r\n        font-family: 'Open Sans Condensed';\r\n        font-size: 50px;\r\n    }\r\n\r\n    .title2[_ngcontent-%COMP%] {\r\n        color: #FE5D26;\r\n    \r\n        font-family: 'Open Sans Condensed';\r\n        font-size: 40px;\r\n    }\r\n\r\n    .memberList[_ngcontent-%COMP%] {\r\n        font-family: 'Barlow', sans-serif;\r\n        font-size: 15px;\r\n        font-weight: bold;\r\n\r\n        color: red;\r\n    }\r\n\r\n    .selectedMember[_ngcontent-%COMP%] {\r\n      color: #FFFFFF;\r\n  \r\n      border-bottom: 1px solid #FE5D26;\r\n      padding-bottom: 5px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpb2dyYXBoeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYzs7SUFFZCxrQ0FBa0M7SUFDbEMsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7O0lBRWQsa0NBQWtDO0lBQ2xDLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtHQUNHLGtCQUFrQjtHQUNsQixlQUFlO0FBQ2xCOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLGVBQWU7SUFDZixpQkFBaUI7O0lBRWpCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixxQkFBcUI7RUFDdkI7O0FBRUE7SUFDRSxVQUFVO0lBQ1YscUJBQXFCO0VBQ3ZCOztBQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLHFCQUFxQjtFQUN2Qjs7QUFFQTtJQUNFLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsbUNBQXlDO0VBQzNDOztBQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLHFCQUFxQjtFQUN2Qjs7QUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZOztJQUVaLHVCQUF1Qjs7SUFFdkIsb0JBQWlCOztPQUFqQixpQkFBaUI7RUFDbkI7O0FBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTs7SUFFWix1QkFBdUI7O0lBRXZCLG9CQUFpQjs7T0FBakIsaUJBQWlCO0VBQ25COztBQUVBO0lBQ0UsaUNBQWlDO0lBQ2pDLGVBQWU7SUFDZixpQkFBaUI7O0lBRWpCLFVBQVU7RUFDWjs7QUFFQTtJQUNFLGNBQWM7O0lBRWQsZ0NBQWdDO0lBQ2hDLG1CQUFtQjtFQUNyQjs7QUFFRjtJQUNJO1FBQ0ksaUNBQWlDO1FBQ2pDLGVBQWU7UUFDZixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxjQUFjOztRQUVkLGtDQUFrQztRQUNsQyxlQUFlO0lBQ25COztJQUVBO1FBQ0ksY0FBYzs7UUFFZCxrQ0FBa0M7UUFDbEMsZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGlDQUFpQztRQUNqQyxlQUFlO1FBQ2YsaUJBQWlCOztRQUVqQixVQUFVO0lBQ2Q7O0lBRUE7TUFDRSxjQUFjOztNQUVkLGdDQUFnQztNQUNoQyxtQkFBbUI7SUFDckI7QUFDSiIsImZpbGUiOiJiaW9ncmFwaHkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZSB7XHJcbiAgICBjb2xvcjogI0ZFNUQyNjtcclxuXHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucyBDb25kZW5zZWQnO1xyXG4gICAgZm9udC1zaXplOiA3MHB4O1xyXG59XHJcblxyXG4udGl0bGUyIHtcclxuICAgIGNvbG9yOiAjRkU1RDI2O1xyXG5cclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIENvbmRlbnNlZCc7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbn1cclxuXHJcbi5jZW50ZXIge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgIG1hcmdpbi1yaWdodDogMTB2dztcclxuICAgbWFyZ2luLXRvcDogNnZoO1xyXG59XHJcblxyXG5wIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQmFybG93Jywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgYTpsaW5rIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIGE6dmlzaXRlZCB7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMCwgMCk7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIGE6aG92ZXIge1xyXG4gICAgY29sb3I6IHJnYigyMDcsIDAsIDApO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY3Vyc29yOiB1cmwoJy4uLy4uL2N1cnNvckxpbmsucG5nJyksIGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIGE6YWN0aXZlIHtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcblxyXG4gIC5nYWxsZXJ5IHtcclxuICAgIHdpZHRoOiA1NXZ3O1xyXG4gICAgaGVpZ2h0OiAzM3Z3O1xyXG5cclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG5cclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIH1cclxuXHJcbiAgLmdhbGxlcnkyIHtcclxuICAgIHdpZHRoOiAzN3Z3O1xyXG4gICAgaGVpZ2h0OiA1NXZ3O1xyXG5cclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG5cclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIH1cclxuXHJcbiAgLm1lbWJlckxpc3Qge1xyXG4gICAgZm9udC1mYW1pbHk6ICdCYXJsb3cnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblxyXG4gICAgY29sb3I6IHJlZDtcclxuICB9XHJcblxyXG4gIC5zZWxlY3RlZE1lbWJlciB7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuXHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0ZFNUQyNjtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgfVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkgeyBcclxuICAgIHAge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnQmFybG93Jywgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnRpdGxlIHtcclxuICAgICAgICBjb2xvcjogI0ZFNUQyNjtcclxuICAgIFxyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIENvbmRlbnNlZCc7XHJcbiAgICAgICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC50aXRsZTIge1xyXG4gICAgICAgIGNvbG9yOiAjRkU1RDI2O1xyXG4gICAgXHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgQ29uZGVuc2VkJztcclxuICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm1lbWJlckxpc3Qge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnQmFybG93Jywgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblxyXG4gICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnNlbGVjdGVkTWVtYmVyIHtcclxuICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgXHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRkU1RDI2O1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgfVxyXG59Il19 */"]
      });
      /***/
    },

    /***/
    "0M9o":
    /*!********************************************!*\
      !*** ./src/app/player/player.component.ts ***!
      \********************************************/

    /*! exports provided: PlayerComponent */

    /***/
    function M9o(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlayerComponent", function () {
        return PlayerComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function PlayerComponent_span_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerComponent_span_8_Template_i_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.muteVolume();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PlayerComponent_span_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerComponent_span_9_Template_i_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.muteVolume();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PlayerComponent_span_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerComponent_span_13_Template_i_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.playPause();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PlayerComponent_span_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerComponent_span_14_Template_i_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.playPause();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var PlayerComponent = /*#__PURE__*/function () {
        function PlayerComponent() {
          _classCallCheck(this, PlayerComponent);

          /*
          DOCS
          https://webplatform.github.io/docs/dom/HTMLAudioElement/
          */
          this.name = '';
          this.link = '';
          this.muted = false;
          this.paused = true;
          this.currentTime = 0;
          this.duration = 0;
          this.currentLyric = "";
        }

        _createClass(PlayerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.element = document.getElementById("song");
            this.slider = document.getElementById("range");
            this.volume = document.getElementById("volume");
            this.duration = 0;
            this.element.volume = 1.0;
            this.element.pause();
            this.updateSlider();
          }
        }, {
          key: "updateSlider",
          value: function updateSlider() {
            var _this = this;

            if (!this.paused) {
              this.currentTime = this.element.currentTime;
              this.duration = this.element.duration;
              this.lyrics(this.currentTime);

              if (this.element.ended) {
                this.paused = true;
                this.currentTime = 0;
                this.currentLyric = "";
                return;
              }

              setTimeout(function () {
                _this.updateSlider();
              }, 1000 * 1);
            }
          }
        }, {
          key: "muteVolume",
          value: function muteVolume() {
            if (this.element.muted) {
              this.muted = false;
              this.element.muted = false;
            } else {
              this.muted = true;
              this.element.muted = true;
            }
          }
        }, {
          key: "playPause",
          value: function playPause() {
            if (this.element.paused) {
              this.paused = false;
              this.element.play();
              this.updateSlider();
              document.title = "Duelist - " + this.name;
            } else {
              this.paused = true;
              this.element.pause();
              document.title = "Duelist";
            }
          }
        }, {
          key: "moveSlider",
          value: function moveSlider() {
            this.element.currentTime = this.slider.value;
            this.currentTime = this.slider.value;
          }
        }, {
          key: "moveVolume",
          value: function moveVolume() {
            this.element.volume = this.volume.value / 100;
          }
        }, {
          key: "round",
          value: function round(number) {
            if (isNaN(Math.round(number))) return "--";else return Math.round(number) < 10 ? '0' + Math.round(number) : Math.round(number);
          }
        }, {
          key: "floor",
          value: function floor(number) {
            if (isNaN(Math.floor(number))) return "--";else return Math.floor(number) < 10 ? '0' + Math.floor(number) : Math.floor(number);
          }
        }, {
          key: "lyrics",
          value: function lyrics(time) {
            if (this.name == "Lost Comfort") {
              return this.currentLyric = lostComfortLyrics(time);
            }
          }
        }]);

        return PlayerComponent;
      }();

      PlayerComponent.ɵfac = function PlayerComponent_Factory(t) {
        return new (t || PlayerComponent)();
      };

      PlayerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PlayerComponent,
        selectors: [["app-player"]],
        inputs: {
          name: "name",
          link: "link"
        },
        decls: 17,
        vars: 11,
        consts: [["id", "song", 3, "src"], [1, "time"], ["type", "range", "min", "0", "id", "range", 1, "slider", 3, "max", "value", "input"], [4, "ngIf"], ["type", "range", "min", "0", "max", "100", "value", "100", "id", "volume", 1, "slider", 3, "input"], [1, "fa-solid", "fa-volume-xmark", "volumeIcon", 3, "click"], [1, "fa-solid", "fa-volume-high", "volumeIcon", 3, "click"], [1, "fa-solid", "fa-play", "playIcon", 3, "click"], [1, "fa-solid", "fa-pause", "playIcon", 3, "click"]],
        template: function PlayerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "audio", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function PlayerComponent_Template_input_input_4_listener() {
              return ctx.moveSlider();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PlayerComponent_span_8_Template, 2, 0, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PlayerComponent_span_9_Template, 2, 0, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function PlayerComponent_Template_input_input_10_listener() {
              return ctx.moveVolume();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PlayerComponent_span_13_Template, 2, 0, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PlayerComponent_span_14_Template, 2, 0, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.floor(ctx.currentTime / 60), ":", ctx.floor(ctx.currentTime % 60), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("max", ctx.element.duration);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.currentTime);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.floor(ctx.duration / 60), ":", ctx.floor(ctx.duration % 60), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.muted);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.muted);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.element.paused);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.element.paused);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
        styles: [".title[_ngcontent-%COMP%] {\r\n    color: #FE5D26;\r\n\r\n    font-family: 'Open Sans Condensed';\r\n    font-size: 70px;\r\n}\r\n\r\n.title2[_ngcontent-%COMP%] {\r\n    color: #FE5D26;\r\n\r\n    font-family: 'Open Sans Condensed';\r\n    font-size: 50px;\r\n}\r\n\r\n.center[_ngcontent-%COMP%] {\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-align: center;\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n   margin-right: 10vw;\r\n   margin-top: 6vh;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n    font-family: 'Barlow', sans-serif;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n\r\n    line-height: 1.5;\r\n}\r\n\r\n.time[_ngcontent-%COMP%] {\r\n  font-family: 'Barlow', sans-serif;\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n  \r\n  padding-left: 1vw;\r\n  padding-right: 1vw;\r\n}\r\n\r\n.playIcon[_ngcontent-%COMP%] {\r\n  font-size: 40px;\r\n}\r\n\r\n.volumeIcon[_ngcontent-%COMP%] {\r\n  font-size: 26px;\r\n  \r\n  transform: translateY(5px);\r\n\r\n  padding-right: 10px;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n    color: red;\r\n    text-decoration: none;\r\n  }\r\n\r\na[_ngcontent-%COMP%]:link {\r\n    color: red;\r\n    text-decoration: none;\r\n  }\r\n\r\na[_ngcontent-%COMP%]:visited {\r\n    color: rgb(255, 0, 0);\r\n    text-decoration: none;\r\n  }\r\n\r\na[_ngcontent-%COMP%]:hover {\r\n    color: rgb(207, 0, 0);\r\n    text-decoration: none;\r\n    cursor: url('cursorLink.png'), auto;\r\n  }\r\n\r\na[_ngcontent-%COMP%]:active {\r\n    color: rgb(255, 0, 0);\r\n    text-decoration: none;\r\n  }\r\n\r\n#volume[_ngcontent-%COMP%] {\r\n    height: 10px;\r\n    width: 20vw;\r\n  }\r\n\r\ninput[type=\"range\"][_ngcontent-%COMP%] { \r\n    margin: auto;\r\n    -webkit-appearance: none;\r\n    position: relative;\r\n    overflow: hidden;\r\n    height: 15px;\r\n    width: 40vw;\r\n    border-radius: 0; \r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-slider-runnable-track {\r\n    background: #ddd;\r\n}\r\n\r\n\r\n\r\n[_ngcontent-%COMP%]::-webkit-slider-thumb {\r\n    -webkit-appearance: none;\r\n    width: 20px; \r\n    height: 40px;\r\n    background: #fff;\r\n    box-shadow: -100vw 0 0 100vw #FE5D26;\r\n    border: 2px solid #999; \r\n}\r\n\r\n[_ngcontent-%COMP%]::-moz-range-track {\r\n    height: 40px;\r\n    background: #ddd;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-moz-range-thumb {\r\n    background: #fff;\r\n    height: 40px;\r\n    width: 20px;\r\n    border: 3px solid #999;\r\n    border-radius: 0 !important;\r\n    box-shadow: -100vw 0 0 100vw #FE5D26;\r\n    box-sizing: border-box;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-ms-fill-lower { \r\n    background: #FE5D26;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-ms-thumb { \r\n    background: #fff;\r\n    border: 2px solid #999;\r\n    height: 40px;\r\n    width: 20px;\r\n    box-sizing: border-box;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-ms-ticks-after { \r\n    display: none; \r\n}\r\n\r\n[_ngcontent-%COMP%]::-ms-ticks-before { \r\n    display: none; \r\n}\r\n\r\n[_ngcontent-%COMP%]::-ms-track { \r\n    background: #ddd;\r\n    color: transparent;\r\n    height: 40px;\r\n    border: none;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-ms-tooltip { \r\n    display: none;\r\n}\r\n\r\n@media only screen and (max-width: 700px) { \r\n    p[_ngcontent-%COMP%] {\r\n        font-family: 'Barlow', sans-serif;\r\n        font-size: 17px;\r\n        font-weight: bold;\r\n    }\r\n\r\n    .title[_ngcontent-%COMP%] {\r\n        color: #FE5D26;\r\n    \r\n        font-family: 'Open Sans Condensed';\r\n        font-size: 50px;\r\n    }\r\n\r\n    .title2[_ngcontent-%COMP%] {\r\n        color: #FE5D26;\r\n    \r\n        font-family: 'Open Sans Condensed';\r\n        font-size: 40px;\r\n    }\r\n\r\n    .playIcon[_ngcontent-%COMP%] {\r\n      font-size: 30px;\r\n    }\r\n    \r\n    .volumeIcon[_ngcontent-%COMP%] {\r\n      font-size: 20px;\r\n      \r\n      transform: translateY(3px);\r\n    \r\n      padding-right: 10px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXllci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYzs7SUFFZCxrQ0FBa0M7SUFDbEMsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7O0lBRWQsa0NBQWtDO0lBQ2xDLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtHQUNHLGtCQUFrQjtHQUNsQixlQUFlO0FBQ2xCOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLGVBQWU7SUFDZixpQkFBaUI7O0lBRWpCLGdCQUFnQjtBQUNwQjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxlQUFlO0VBQ2YsaUJBQWlCOztFQUVqQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7O0VBRWYsMEJBQTBCOztFQUUxQixtQkFBbUI7QUFDckI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YscUJBQXFCO0VBQ3ZCOztBQUVBO0lBQ0UsVUFBVTtJQUNWLHFCQUFxQjtFQUN2Qjs7QUFFQTtJQUNFLHFCQUFxQjtJQUNyQixxQkFBcUI7RUFDdkI7O0FBRUE7SUFDRSxxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLG1DQUF5QztFQUMzQzs7QUFFQTtJQUNFLHFCQUFxQjtJQUNyQixxQkFBcUI7RUFDdkI7O0FBRUE7SUFDRSxZQUFZO0lBQ1osV0FBVztFQUNiOztBQUVBO0lBQ0UsWUFBWTtJQUNaLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixXQUFXO0lBQ1gsZ0JBQWdCLEVBQUUsUUFBUTtBQUM5Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTs7RUFFRTs7QUFDRjtJQUNJLHdCQUF3QjtJQUN4QixXQUFXLEVBQUUsTUFBTTtJQUNuQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG9DQUFvQztJQUNwQyxzQkFBc0IsRUFBRSxNQUFNO0FBQ2xDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osV0FBVztJQUNYLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0Isb0NBQW9DO0lBQ3BDLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0k7UUFDSSxpQ0FBaUM7UUFDakMsZUFBZTtRQUNmLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGNBQWM7O1FBRWQsa0NBQWtDO1FBQ2xDLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxjQUFjOztRQUVkLGtDQUFrQztRQUNsQyxlQUFlO0lBQ25COztJQUVBO01BQ0UsZUFBZTtJQUNqQjs7SUFFQTtNQUNFLGVBQWU7O01BRWYsMEJBQTBCOztNQUUxQixtQkFBbUI7SUFDckI7QUFDSiIsImZpbGUiOiJwbGF5ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZSB7XHJcbiAgICBjb2xvcjogI0ZFNUQyNjtcclxuXHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucyBDb25kZW5zZWQnO1xyXG4gICAgZm9udC1zaXplOiA3MHB4O1xyXG59XHJcblxyXG4udGl0bGUyIHtcclxuICAgIGNvbG9yOiAjRkU1RDI2O1xyXG5cclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIENvbmRlbnNlZCc7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbn1cclxuXHJcbi5jZW50ZXIge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgIG1hcmdpbi1yaWdodDogMTB2dztcclxuICAgbWFyZ2luLXRvcDogNnZoO1xyXG59XHJcblxyXG5wIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQmFybG93Jywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbn1cclxuXHJcbi50aW1lIHtcclxuICBmb250LWZhbWlseTogJ0JhcmxvdycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIFxyXG4gIHBhZGRpbmctbGVmdDogMXZ3O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDF2dztcclxufVxyXG5cclxuLnBsYXlJY29uIHtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbn1cclxuXHJcbi52b2x1bWVJY29uIHtcclxuICBmb250LXNpemU6IDI2cHg7XHJcbiAgXHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDVweCk7XHJcblxyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgYTpsaW5rIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIGE6dmlzaXRlZCB7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMCwgMCk7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIGE6aG92ZXIge1xyXG4gICAgY29sb3I6IHJnYigyMDcsIDAsIDApO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY3Vyc29yOiB1cmwoJy4uLy4uL2N1cnNvckxpbmsucG5nJyksIGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIGE6YWN0aXZlIHtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcblxyXG4gICN2b2x1bWUge1xyXG4gICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgd2lkdGg6IDIwdnc7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9XCJyYW5nZVwiXSB7IFxyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGhlaWdodDogMTVweDtcclxuICAgIHdpZHRoOiA0MHZ3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDsgLyogaU9TICovXHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zbGlkZXItcnVubmFibGUtdHJhY2sge1xyXG4gICAgYmFja2dyb3VuZDogI2RkZDtcclxufVxyXG5cclxuLypcclxuICogMS4gU2V0IHRvIDAgd2lkdGggYW5kIHJlbW92ZSBib3JkZXIgZm9yIGEgc2xpZGVyIHdpdGhvdXQgYSB0aHVtYlxyXG4gKi9cclxuOjotd2Via2l0LXNsaWRlci10aHVtYiB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICB3aWR0aDogMjBweDsgLyogMSAqL1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJveC1zaGFkb3c6IC0xMDB2dyAwIDAgMTAwdncgI0ZFNUQyNjtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM5OTk7IC8qIDEgKi9cclxufVxyXG5cclxuOjotbW96LXJhbmdlLXRyYWNrIHtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJhY2tncm91bmQ6ICNkZGQ7XHJcbn1cclxuXHJcbjo6LW1vei1yYW5nZS10aHVtYiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjOTk5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogLTEwMHZ3IDAgMCAxMDB2dyAjRkU1RDI2O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuOjotbXMtZmlsbC1sb3dlciB7IFxyXG4gICAgYmFja2dyb3VuZDogI0ZFNUQyNjtcclxufVxyXG5cclxuOjotbXMtdGh1bWIgeyBcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjOTk5O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG46Oi1tcy10aWNrcy1hZnRlciB7IFxyXG4gICAgZGlzcGxheTogbm9uZTsgXHJcbn1cclxuXHJcbjo6LW1zLXRpY2tzLWJlZm9yZSB7IFxyXG4gICAgZGlzcGxheTogbm9uZTsgXHJcbn1cclxuXHJcbjo6LW1zLXRyYWNrIHsgXHJcbiAgICBiYWNrZ3JvdW5kOiAjZGRkO1xyXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG46Oi1tcy10b29sdGlwIHsgXHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7IFxyXG4gICAgcCB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdCYXJsb3cnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuXHJcbiAgICAudGl0bGUge1xyXG4gICAgICAgIGNvbG9yOiAjRkU1RDI2O1xyXG4gICAgXHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgQ29uZGVuc2VkJztcclxuICAgICAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnRpdGxlMiB7XHJcbiAgICAgICAgY29sb3I6ICNGRTVEMjY7XHJcbiAgICBcclxuICAgICAgICBmb250LWZhbWlseTogJ09wZW4gU2FucyBDb25kZW5zZWQnO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIH1cclxuXHJcbiAgICAucGxheUljb24ge1xyXG4gICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC52b2x1bWVJY29uIHtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICBcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDNweCk7XHJcbiAgICBcclxuICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIH1cclxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
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

      /***/
    },

    /***/
    "DQmF":
    /*!**************************************************!*\
      !*** ./src/app/streaming/streaming.component.ts ***!
      \**************************************************/

    /*! exports provided: StreamingComponent */

    /***/
    function DQmF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StreamingComponent", function () {
        return StreamingComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var StreamingComponent = /*#__PURE__*/function () {
        function StreamingComponent() {
          _classCallCheck(this, StreamingComponent);
        }

        _createClass(StreamingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return StreamingComponent;
      }();

      StreamingComponent.ɵfac = function StreamingComponent_Factory(t) {
        return new (t || StreamingComponent)();
      };

      StreamingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: StreamingComponent,
        selectors: [["app-streaming"]],
        decls: 28,
        vars: 0,
        consts: [[1, "content", "center"], [1, "title"], ["href", "https://support.distrokid.com/hc/en-us/articles/360013649093-What-Platforms-Will-My-Music-Appear-In-"], [2, "font-size", "3em"], ["target", "_blank", "href", "https://open.spotify.com/artist/7dVA2NK5n7rHRgUB4IyU2L"], [1, "fa-brands", "fa-spotify", 2, "color", "#1DCB5D"], ["target", "_blank", "href", ""], [1, "fa-brands", "fa-apple", 2, "padding-left", "1em", "color", "#ffffff"], ["target", "_blank", "href", "https://music.amazon.com/artists/B08FCM23QC/duelist"], [1, "fa-brands", "fa-amazon", 2, "padding-left", "1em", "color", "#FF9800"], ["target", "_blank", "href", "https://music.youtube.com/channel/UCOSXekC4RBnjEOn9vuJiiNg"], [1, "fa-brands", "fa-youtube", 2, "padding-left", "1em", "color", "red"]],
        template: function StreamingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Streaming Platforms");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Our music is available on all streaming platforms supported by ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "DistroKid");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Here are some major ones:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "... with many more to come soon!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".title[_ngcontent-%COMP%] {\r\n    color: #FE5D26;\r\n\r\n    font-family: 'Open Sans Condensed';\r\n    font-size: 70px;\r\n}\r\n\r\n.title2[_ngcontent-%COMP%] {\r\n    color: #FE5D26;\r\n\r\n    font-family: 'Open Sans Condensed';\r\n    font-size: 50px;\r\n}\r\n\r\n.center[_ngcontent-%COMP%] {\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-align: center;\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n   margin-right: 10vw;\r\n   margin-top: 6vh;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n    font-family: 'Barlow', sans-serif;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n\r\n    line-height: 1.5;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n    color: red;\r\n    text-decoration: none;\r\n  }\r\n\r\na[_ngcontent-%COMP%]:link {\r\n    color: red;\r\n    text-decoration: none;\r\n  }\r\n\r\na[_ngcontent-%COMP%]:visited {\r\n    color: rgb(255, 0, 0);\r\n    text-decoration: none;\r\n  }\r\n\r\na[_ngcontent-%COMP%]:hover {\r\n    color: rgb(207, 0, 0);\r\n    text-decoration: none;\r\n    cursor: url('cursorLink.png'), auto;\r\n  }\r\n\r\na[_ngcontent-%COMP%]:active {\r\n    color: rgb(255, 0, 0);\r\n    text-decoration: none;\r\n  }\r\n\r\n@media only screen and (max-width: 700px) { \r\n    p[_ngcontent-%COMP%] {\r\n        font-family: 'Barlow', sans-serif;\r\n        font-size: 17px;\r\n        font-weight: bold;\r\n    }\r\n\r\n    .title[_ngcontent-%COMP%] {\r\n        color: #FE5D26;\r\n    \r\n        font-family: 'Open Sans Condensed';\r\n        font-size: 50px;\r\n    }\r\n\r\n    .title2[_ngcontent-%COMP%] {\r\n        color: #FE5D26;\r\n    \r\n        font-family: 'Open Sans Condensed';\r\n        font-size: 40px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmVhbWluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYzs7SUFFZCxrQ0FBa0M7SUFDbEMsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7O0lBRWQsa0NBQWtDO0lBQ2xDLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtHQUNHLGtCQUFrQjtHQUNsQixlQUFlO0FBQ2xCOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLGVBQWU7SUFDZixpQkFBaUI7O0lBRWpCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixxQkFBcUI7RUFDdkI7O0FBRUE7SUFDRSxVQUFVO0lBQ1YscUJBQXFCO0VBQ3ZCOztBQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLHFCQUFxQjtFQUN2Qjs7QUFFQTtJQUNFLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsbUNBQXlDO0VBQzNDOztBQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLHFCQUFxQjtFQUN2Qjs7QUFFRjtJQUNJO1FBQ0ksaUNBQWlDO1FBQ2pDLGVBQWU7UUFDZixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxjQUFjOztRQUVkLGtDQUFrQztRQUNsQyxlQUFlO0lBQ25COztJQUVBO1FBQ0ksY0FBYzs7UUFFZCxrQ0FBa0M7UUFDbEMsZUFBZTtJQUNuQjtBQUNKIiwiZmlsZSI6InN0cmVhbWluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlIHtcclxuICAgIGNvbG9yOiAjRkU1RDI2O1xyXG5cclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIENvbmRlbnNlZCc7XHJcbiAgICBmb250LXNpemU6IDcwcHg7XHJcbn1cclxuXHJcbi50aXRsZTIge1xyXG4gICAgY29sb3I6ICNGRTVEMjY7XHJcblxyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgQ29uZGVuc2VkJztcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxufVxyXG5cclxuLmNlbnRlciB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICAgbWFyZ2luLXJpZ2h0OiAxMHZ3O1xyXG4gICBtYXJnaW4tdG9wOiA2dmg7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgZm9udC1mYW1pbHk6ICdCYXJsb3cnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblxyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxufVxyXG5cclxuYSB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICBcclxuICBhOmxpbmsge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgYTp2aXNpdGVkIHtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogcmdiKDIwNywgMCwgMCk7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjdXJzb3I6IHVybCgnLi4vLi4vY3Vyc29yTGluay5wbmcnKSwgYXV0bztcclxuICB9XHJcbiAgXHJcbiAgYTphY3RpdmUge1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDAsIDApO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH0gXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7IFxyXG4gICAgcCB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdCYXJsb3cnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuXHJcbiAgICAudGl0bGUge1xyXG4gICAgICAgIGNvbG9yOiAjRkU1RDI2O1xyXG4gICAgXHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgQ29uZGVuc2VkJztcclxuICAgICAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnRpdGxlMiB7XHJcbiAgICAgICAgY29sb3I6ICNGRTVEMjY7XHJcbiAgICBcclxuICAgICAgICBmb250LWZhbWlseTogJ09wZW4gU2FucyBDb25kZW5zZWQnO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIH1cclxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    "FUuC":
    /*!************************************************!*\
      !*** ./src/app/download/download.component.ts ***!
      \************************************************/

    /*! exports provided: DownloadComponent */

    /***/
    function FUuC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DownloadComponent", function () {
        return DownloadComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DownloadComponent = /*#__PURE__*/function () {
        function DownloadComponent() {
          _classCallCheck(this, DownloadComponent);
        }

        _createClass(DownloadComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DownloadComponent;
      }();

      DownloadComponent.ɵfac = function DownloadComponent_Factory(t) {
        return new (t || DownloadComponent)();
      };

      DownloadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DownloadComponent,
        selectors: [["app-download"]],
        decls: 89,
        vars: 0,
        consts: [[1, "content", "center"], [1, "title"], ["target", "_blank", "href", "https://raw.githubusercontent.com/TinFiolic/Duelist/main/Soul%20Hole.mp3"], ["target", "_blank", "href", "https://raw.githubusercontent.com/TinFiolic/Duelist/main/Fallen.mp3"], ["target", "_blank", "href", "https://raw.githubusercontent.com/TinFiolic/Duelist/main/Lost%20Comfort%20intro.mp3"], ["target", "_blank", "href", "https://raw.githubusercontent.com/TinFiolic/Duelist/main/Lost%20Comfort.mp3"], ["target", "_blank", "href", "https://raw.githubusercontent.com/TinFiolic/Duelist/main/ID.mp3"]],
        template: function DownloadComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Download Songs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Once you open one of the links below, if you're on a desktop, right click ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " and select \xBB");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Save Audio As...");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\xAB to download the song. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " On touchscreen enabled devices, download should commence automatically.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Song Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Extension");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Size");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Length");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Link");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Soul Hole");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, ".mp3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "11.5 MB");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "5:01");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Download");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Fallen");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, ".mp3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "8.91 MB");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "3:53");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Download");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Lost Comfort, Pt.1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, ".mp3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "3.05 MB");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "1:20");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Download");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Lost Comfort, Pt.2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, ".mp3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "11.1 MB");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "4:51");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Download");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Ignorance is Decadence");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, ".mp3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "11.2 MB");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "4:55");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Download");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".title[_ngcontent-%COMP%] {\r\n    color: #FE5D26;\r\n\r\n    font-family: 'Open Sans Condensed';\r\n    font-size: 70px;\r\n}\r\n\r\n.title2[_ngcontent-%COMP%] {\r\n    color: #FE5D26;\r\n\r\n    font-family: 'Open Sans Condensed';\r\n    font-size: 50px;\r\n}\r\n\r\n.center[_ngcontent-%COMP%] {\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-align: center;\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n   margin-right: 10vw;\r\n   margin-top: 6vh;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n    font-family: 'Barlow', sans-serif;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n\r\n    line-height: 1.5;\r\n}\r\n\r\ntable[_ngcontent-%COMP%] {\r\n  font-family: 'Barlow', sans-serif;\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n\r\n  line-height: 1.5;\r\n}\r\n\r\ntable[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n  border: 1px solid rgb(255, 255, 255);\r\n  border-collapse: collapse;\r\n}\r\n\r\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n  padding: 0.7vw;\r\n}\r\n\r\nth[_ngcontent-%COMP%] {\r\n  color: #FE5D26;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n    color: red;\r\n    text-decoration: none;\r\n  }\r\n\r\na[_ngcontent-%COMP%]:link {\r\n    color: red;\r\n    text-decoration: none;\r\n  }\r\n\r\na[_ngcontent-%COMP%]:visited {\r\n    color: rgb(255, 0, 0);\r\n    text-decoration: none;\r\n  }\r\n\r\na[_ngcontent-%COMP%]:hover {\r\n    color: rgb(207, 0, 0);\r\n    text-decoration: none;\r\n    cursor: url('cursorLink.png'), auto;\r\n  }\r\n\r\na[_ngcontent-%COMP%]:active {\r\n    color: rgb(255, 0, 0);\r\n    text-decoration: none;\r\n  }\r\n\r\n@media only screen and (max-width: 700px) { \r\n    p[_ngcontent-%COMP%] {\r\n        font-family: 'Barlow', sans-serif;\r\n        font-size: 17px;\r\n        font-weight: bold;\r\n    }\r\n\r\n    .title[_ngcontent-%COMP%] {\r\n        color: #FE5D26;\r\n    \r\n        font-family: 'Open Sans Condensed';\r\n        font-size: 50px;\r\n    }\r\n\r\n    .title2[_ngcontent-%COMP%] {\r\n        color: #FE5D26;\r\n    \r\n        font-family: 'Open Sans Condensed';\r\n        font-size: 40px;\r\n    }\r\n\r\n    th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n      padding: 0.3vw;\r\n    }\r\n\r\n    table[_ngcontent-%COMP%] {\r\n      font-family: 'Barlow', sans-serif;\r\n      font-size: 15px;\r\n      font-weight: bold;\r\n    \r\n      line-height: 1.5;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 350px) { \r\n  p[_ngcontent-%COMP%] {\r\n      font-family: 'Barlow', sans-serif;\r\n      font-size: 17px;\r\n      font-weight: bold;\r\n  }\r\n\r\n  .title[_ngcontent-%COMP%] {\r\n      color: #FE5D26;\r\n  \r\n      font-family: 'Open Sans Condensed';\r\n      font-size: 50px;\r\n  }\r\n\r\n  .title2[_ngcontent-%COMP%] {\r\n      color: #FE5D26;\r\n  \r\n      font-family: 'Open Sans Condensed';\r\n      font-size: 40px;\r\n  }\r\n\r\n  th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n    padding: 0.2vw;\r\n  }\r\n\r\n  table[_ngcontent-%COMP%] {\r\n    font-family: 'Barlow', sans-serif;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n  \r\n    line-height: 1.5;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvd25sb2FkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjOztJQUVkLGtDQUFrQztJQUNsQyxlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYzs7SUFFZCxrQ0FBa0M7SUFDbEMsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0dBQ0csa0JBQWtCO0dBQ2xCLGVBQWU7QUFDbEI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsZUFBZTtJQUNmLGlCQUFpQjs7SUFFakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLGVBQWU7RUFDZixpQkFBaUI7O0VBRWpCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixxQkFBcUI7RUFDdkI7O0FBRUE7SUFDRSxVQUFVO0lBQ1YscUJBQXFCO0VBQ3ZCOztBQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLHFCQUFxQjtFQUN2Qjs7QUFFQTtJQUNFLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsbUNBQXlDO0VBQzNDOztBQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLHFCQUFxQjtFQUN2Qjs7QUFFRjtJQUNJO1FBQ0ksaUNBQWlDO1FBQ2pDLGVBQWU7UUFDZixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxjQUFjOztRQUVkLGtDQUFrQztRQUNsQyxlQUFlO0lBQ25COztJQUVBO1FBQ0ksY0FBYzs7UUFFZCxrQ0FBa0M7UUFDbEMsZUFBZTtJQUNuQjs7SUFFQTtNQUNFLGNBQWM7SUFDaEI7O0lBRUE7TUFDRSxpQ0FBaUM7TUFDakMsZUFBZTtNQUNmLGlCQUFpQjs7TUFFakIsZ0JBQWdCO0lBQ2xCO0FBQ0o7O0FBRUE7RUFDRTtNQUNJLGlDQUFpQztNQUNqQyxlQUFlO01BQ2YsaUJBQWlCO0VBQ3JCOztFQUVBO01BQ0ksY0FBYzs7TUFFZCxrQ0FBa0M7TUFDbEMsZUFBZTtFQUNuQjs7RUFFQTtNQUNJLGNBQWM7O01BRWQsa0NBQWtDO01BQ2xDLGVBQWU7RUFDbkI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsaUNBQWlDO0lBQ2pDLGVBQWU7SUFDZixpQkFBaUI7O0lBRWpCLGdCQUFnQjtFQUNsQjtBQUNGIiwiZmlsZSI6ImRvd25sb2FkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xyXG4gICAgY29sb3I6ICNGRTVEMjY7XHJcblxyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgQ29uZGVuc2VkJztcclxuICAgIGZvbnQtc2l6ZTogNzBweDtcclxufVxyXG5cclxuLnRpdGxlMiB7XHJcbiAgICBjb2xvcjogI0ZFNUQyNjtcclxuXHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucyBDb25kZW5zZWQnO1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG59XHJcblxyXG4uY2VudGVyIHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gICBtYXJnaW4tcmlnaHQ6IDEwdnc7XHJcbiAgIG1hcmdpbi10b3A6IDZ2aDtcclxufVxyXG5cclxucCB7XHJcbiAgICBmb250LWZhbWlseTogJ0JhcmxvdycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuXHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdCYXJsb3cnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuXHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxufVxyXG5cclxudGFibGUsIHRoLCB0ZCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbn1cclxuXHJcbnRoLCB0ZCB7XHJcbiAgcGFkZGluZzogMC43dnc7XHJcbn1cclxuXHJcbnRoIHtcclxuICBjb2xvcjogI0ZFNUQyNjtcclxufVxyXG5cclxuYSB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICBcclxuICBhOmxpbmsge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgYTp2aXNpdGVkIHtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogcmdiKDIwNywgMCwgMCk7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjdXJzb3I6IHVybCgnLi4vLi4vY3Vyc29yTGluay5wbmcnKSwgYXV0bztcclxuICB9XHJcbiAgXHJcbiAgYTphY3RpdmUge1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDAsIDApO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH0gXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7IFxyXG4gICAgcCB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdCYXJsb3cnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuXHJcbiAgICAudGl0bGUge1xyXG4gICAgICAgIGNvbG9yOiAjRkU1RDI2O1xyXG4gICAgXHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgQ29uZGVuc2VkJztcclxuICAgICAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnRpdGxlMiB7XHJcbiAgICAgICAgY29sb3I6ICNGRTVEMjY7XHJcbiAgICBcclxuICAgICAgICBmb250LWZhbWlseTogJ09wZW4gU2FucyBDb25kZW5zZWQnO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIH1cclxuXHJcbiAgICB0aCwgdGQge1xyXG4gICAgICBwYWRkaW5nOiAwLjN2dztcclxuICAgIH1cclxuXHJcbiAgICB0YWJsZSB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnQmFybG93Jywgc2Fucy1zZXJpZjtcclxuICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIFxyXG4gICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM1MHB4KSB7IFxyXG4gIHAge1xyXG4gICAgICBmb250LWZhbWlseTogJ0JhcmxvdycsIHNhbnMtc2VyaWY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG5cclxuICAudGl0bGUge1xyXG4gICAgICBjb2xvcjogI0ZFNUQyNjtcclxuICBcclxuICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgQ29uZGVuc2VkJztcclxuICAgICAgZm9udC1zaXplOiA1MHB4O1xyXG4gIH1cclxuXHJcbiAgLnRpdGxlMiB7XHJcbiAgICAgIGNvbG9yOiAjRkU1RDI2O1xyXG4gIFxyXG4gICAgICBmb250LWZhbWlseTogJ09wZW4gU2FucyBDb25kZW5zZWQnO1xyXG4gICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgfVxyXG5cclxuICB0aCwgdGQge1xyXG4gICAgcGFkZGluZzogMC4ydnc7XHJcbiAgfVxyXG5cclxuICB0YWJsZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0JhcmxvdycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICBcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgfVxyXG59Il19 */"]
      });
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var ang_music_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ang-music-player */
      "GnHf");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _album_album_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./album/album.component */
      "gq2R");
      /* harmony import */


      var _streaming_streaming_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./streaming/streaming.component */
      "DQmF");
      /* harmony import */


      var _player_player_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./player/player.component */
      "0M9o");
      /* harmony import */


      var _download_download_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./download/download.component */
      "FUuC");
      /* harmony import */


      var _main_main_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./main/main.component */
      "wlho");
      /* harmony import */


      var _intro_intro_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./intro/intro.component */
      "drGS");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./footer/footer.component */
      "fp1T");
      /* harmony import */


      var _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./contact/contact.component */
      "bzTf");
      /* harmony import */


      var _biography_biography_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./biography/biography.component */
      "09+m");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppModule = /*#__PURE__*/_createClass(function AppModule() {
        _classCallCheck(this, AppModule);
      });

      AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || AppModule)();
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_main_main_component__WEBPACK_IMPORTED_MODULE_8__["MainComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({
          appId: 'serverApp'
        }), _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], ang_music_player__WEBPACK_IMPORTED_MODULE_1__["AngMusicPlayerModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_album_album_component__WEBPACK_IMPORTED_MODULE_4__["AlbumComponent"], _main_main_component__WEBPACK_IMPORTED_MODULE_8__["MainComponent"], _intro_intro_component__WEBPACK_IMPORTED_MODULE_9__["IntroComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"], _streaming_streaming_component__WEBPACK_IMPORTED_MODULE_5__["StreamingComponent"], _download_download_component__WEBPACK_IMPORTED_MODULE_7__["DownloadComponent"], _player_player_component__WEBPACK_IMPORTED_MODULE_6__["PlayerComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__["ContactComponent"], _biography_biography_component__WEBPACK_IMPORTED_MODULE_12__["BiographyComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], ang_music_player__WEBPACK_IMPORTED_MODULE_1__["AngMusicPlayerModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]
        });
      })();
      /***/

    },

    /***/
    "bzTf":
    /*!**********************************************!*\
      !*** ./src/app/contact/contact.component.ts ***!
      \**********************************************/

    /*! exports provided: ContactComponent */

    /***/
    function bzTf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
        return ContactComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ContactComponent = /*#__PURE__*/function () {
        function ContactComponent() {
          _classCallCheck(this, ContactComponent);
        }

        _createClass(ContactComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ContactComponent;
      }();

      ContactComponent.ɵfac = function ContactComponent_Factory(t) {
        return new (t || ContactComponent)();
      };

      ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ContactComponent,
        selectors: [["app-contact"]],
        decls: 24,
        vars: 0,
        consts: [[1, "content", "center"], [1, "title"], ["target", "_blank", "href", "mailto:duelist.band@gmail.com"], [2, "font-size", "3em"], ["target", "_blank", "href", "https://www.facebook.com/duelistband/"], [1, "fa-brands", "fa-facebook", 2, "color", "#2741b4"], ["target", "_blank", "href", "https://www.instagram.com/duelist.band/"], [1, "fa-brands", "fa-instagram", 2, "padding-left", "1em", "color", "#ffffff"], ["target", "_blank", "href", "https://duelistband.bandcamp.com/"], [1, "fa-brands", "fa-bandcamp", 2, "padding-left", "1em", "color", "#2da7cc"], ["target", "_blank", "href", "https://www.youtube.com/channel/UC3wrj55NAZIV26JMnBqmG7A"], [1, "fa-brands", "fa-youtube", 2, "padding-left", "1em"]],
        template: function ContactComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Contact Us");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "While we're most likely to respond to your email sent to ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "duelist.band@gmail.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, ", ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " we're also checking out your messages and comments on the following pages: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".title[_ngcontent-%COMP%] {\r\n    color: #FE5D26;\r\n\r\n    font-family: 'Open Sans Condensed';\r\n    font-size: 70px;\r\n}\r\n\r\n.title2[_ngcontent-%COMP%] {\r\n    color: #FE5D26;\r\n\r\n    font-family: 'Open Sans Condensed';\r\n    font-size: 50px;\r\n}\r\n\r\n.center[_ngcontent-%COMP%] {\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-align: center;\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n   margin-right: 10vw;\r\n   margin-top: 6vh;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n    font-family: 'Barlow', sans-serif;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n\r\n    line-height: 1.5;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n    color: red;\r\n    text-decoration: none;\r\n  }\r\n\r\na[_ngcontent-%COMP%]:link {\r\n    color: red;\r\n    text-decoration: none;\r\n  }\r\n\r\na[_ngcontent-%COMP%]:visited {\r\n    color: rgb(255, 0, 0);\r\n    text-decoration: none;\r\n  }\r\n\r\na[_ngcontent-%COMP%]:hover {\r\n    color: rgb(207, 0, 0);\r\n    text-decoration: none;\r\n    cursor: url('cursorLink.png'), auto;\r\n  }\r\n\r\na[_ngcontent-%COMP%]:active {\r\n    color: rgb(255, 0, 0);\r\n    text-decoration: none;\r\n  }\r\n\r\n@media only screen and (max-width: 700px) { \r\n    p[_ngcontent-%COMP%] {\r\n        font-family: 'Barlow', sans-serif;\r\n        font-size: 17px;\r\n        font-weight: bold;\r\n    }\r\n\r\n    .title[_ngcontent-%COMP%] {\r\n        color: #FE5D26;\r\n    \r\n        font-family: 'Open Sans Condensed';\r\n        font-size: 50px;\r\n    }\r\n\r\n    .title2[_ngcontent-%COMP%] {\r\n        color: #FE5D26;\r\n    \r\n        font-family: 'Open Sans Condensed';\r\n        font-size: 40px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7O0lBRWQsa0NBQWtDO0lBQ2xDLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjOztJQUVkLGtDQUFrQztJQUNsQyxlQUFlO0FBQ25COztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7R0FDRyxrQkFBa0I7R0FDbEIsZUFBZTtBQUNsQjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxlQUFlO0lBQ2YsaUJBQWlCOztJQUVqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YscUJBQXFCO0VBQ3ZCOztBQUVBO0lBQ0UsVUFBVTtJQUNWLHFCQUFxQjtFQUN2Qjs7QUFFQTtJQUNFLHFCQUFxQjtJQUNyQixxQkFBcUI7RUFDdkI7O0FBRUE7SUFDRSxxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLG1DQUF5QztFQUMzQzs7QUFFQTtJQUNFLHFCQUFxQjtJQUNyQixxQkFBcUI7RUFDdkI7O0FBRUY7SUFDSTtRQUNJLGlDQUFpQztRQUNqQyxlQUFlO1FBQ2YsaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksY0FBYzs7UUFFZCxrQ0FBa0M7UUFDbEMsZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGNBQWM7O1FBRWQsa0NBQWtDO1FBQ2xDLGVBQWU7SUFDbkI7QUFDSiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xyXG4gICAgY29sb3I6ICNGRTVEMjY7XHJcblxyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgQ29uZGVuc2VkJztcclxuICAgIGZvbnQtc2l6ZTogNzBweDtcclxufVxyXG5cclxuLnRpdGxlMiB7XHJcbiAgICBjb2xvcjogI0ZFNUQyNjtcclxuXHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucyBDb25kZW5zZWQnO1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG59XHJcblxyXG4uY2VudGVyIHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gICBtYXJnaW4tcmlnaHQ6IDEwdnc7XHJcbiAgIG1hcmdpbi10b3A6IDZ2aDtcclxufVxyXG5cclxucCB7XHJcbiAgICBmb250LWZhbWlseTogJ0JhcmxvdycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuXHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG59XHJcblxyXG5hIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIGE6bGluayB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICBcclxuICBhOnZpc2l0ZWQge1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDAsIDApO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICBcclxuICBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiByZ2IoMjA3LCAwLCAwKTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGN1cnNvcjogdXJsKCcuLi8uLi9jdXJzb3JMaW5rLnBuZycpLCBhdXRvO1xyXG4gIH1cclxuICBcclxuICBhOmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMCwgMCk7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfSBcclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHsgXHJcbiAgICBwIHtcclxuICAgICAgICBmb250LWZhbWlseTogJ0JhcmxvdycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG5cclxuICAgIC50aXRsZSB7XHJcbiAgICAgICAgY29sb3I6ICNGRTVEMjY7XHJcbiAgICBcclxuICAgICAgICBmb250LWZhbWlseTogJ09wZW4gU2FucyBDb25kZW5zZWQnO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIH1cclxuXHJcbiAgICAudGl0bGUyIHtcclxuICAgICAgICBjb2xvcjogI0ZFNUQyNjtcclxuICAgIFxyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIENvbmRlbnNlZCc7XHJcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgfVxyXG59Il19 */"]
      });
      /***/
    },

    /***/
    "drGS":
    /*!******************************************!*\
      !*** ./src/app/intro/intro.component.ts ***!
      \******************************************/

    /*! exports provided: IntroComponent */

    /***/
    function drGS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IntroComponent", function () {
        return IntroComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var IntroComponent = /*#__PURE__*/function () {
        function IntroComponent() {
          _classCallCheck(this, IntroComponent);
        }

        _createClass(IntroComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.startUpAnimation();
          }
        }, {
          key: "startUpAnimation",
          value: function startUpAnimation() {
            var logo = document.getElementById("logo");
            logo.classList.add("redGlow");
            setTimeout(function () {
              logo.classList.remove("redGlow");
              logo.classList.remove("initialLogo");
              logo.style.display = "none";
            }, 2100);
          }
        }]);

        return IntroComponent;
      }();

      IntroComponent.ɵfac = function IntroComponent_Factory(t) {
        return new (t || IntroComponent)();
      };

      IntroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: IntroComponent,
        selectors: [["app-intro"]],
        decls: 2,
        vars: 0,
        consts: [["id", "logo", 1, "logo", "initialLogo"]],
        template: function IntroComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Duelist");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["@font-face {\r\n\tfont-family: teutonic;\r\n\tsrc: url('teutonic1.ttf');\r\n}\r\n\r\n.logo[_ngcontent-%COMP%] {\r\n\tfont-family: teutonic;\r\n\t\r\n\tcolor: #FFFFFF;\r\n\t\r\n\ttext-shadow: 3px 3px 3px #000000,\r\n\t\t\t\t 6px 6px 10px gray;\r\n\t\t\t\t \r\n\t-webkit-user-select: none;         \r\n\t-moz-user-select: none; \r\n\t-ms-user-select: none; \r\n\tuser-select: none; \r\n\t\r\n\t-webkit-animation: staticAnimation 6s infinite, fadeIn 3s 1;\r\n\t\r\n\t        animation: staticAnimation 6s infinite, fadeIn 3s 1;\t\r\n}\r\n\r\n.redGlow[_ngcontent-%COMP%] {\r\n    -webkit-animation: staticAnimation 2s infinite, redGlowAnimation 2s 1, fadeIn 3s 1;\r\n            animation: staticAnimation 2s infinite, redGlowAnimation 2s 1, fadeIn 3s 1;\t\r\n}\r\n\r\n.initialLogo[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    margin-top: 30vh;\r\n\r\n    font-size: 13vh;\r\n}\r\n\r\n@-webkit-keyframes fadeIn {\r\n    from {\r\n        opacity: 0;\r\n    }\r\n    to {\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n@keyframes fadeIn {\r\n    from {\r\n        opacity: 0;\r\n    }\r\n    to {\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n@-webkit-keyframes staticAnimation {\r\n\t0%, 90%   {\r\n\t\t\ttext-shadow: 3px 3px 3px #000000,\r\n\t\t\t\t6px 6px 10px gray;\r\n\t\t\ttransform: translate(0, 0);\r\n\t\t }\r\n\t96%, 97%   {\r\n\t\t\ttext-shadow: 3px 3px 3px red,\r\n\t\t\t\t 6px 6px 10px gray;\r\n\t\t\ttransform: translate(-5px, 0);\r\n\t\t }\r\n\t98%, 99%   {\r\n\t\t\r\n\t\t\ttext-shadow: 7px 3px 3px cyan,\r\n\t\t\t\t 6px 6px 10px gray;\r\n\t\t\ttransform: translate(5px, 0);\r\n\t\t\t\r\n\t\t }\r\n\t100%   {\r\n\t\t\ttext-shadow: 0px 3px 3px yellow,\r\n\t\t\t\t 6px 6px 10px gray;\r\n\t\t\ttransform: translate(-5px, 0);\r\n\t\t }\r\n}\r\n\r\n@keyframes staticAnimation {\r\n\t0%, 90%   {\r\n\t\t\ttext-shadow: 3px 3px 3px #000000,\r\n\t\t\t\t6px 6px 10px gray;\r\n\t\t\ttransform: translate(0, 0);\r\n\t\t }\r\n\t96%, 97%   {\r\n\t\t\ttext-shadow: 3px 3px 3px red,\r\n\t\t\t\t 6px 6px 10px gray;\r\n\t\t\ttransform: translate(-5px, 0);\r\n\t\t }\r\n\t98%, 99%   {\r\n\t\t\r\n\t\t\ttext-shadow: 7px 3px 3px cyan,\r\n\t\t\t\t 6px 6px 10px gray;\r\n\t\t\ttransform: translate(5px, 0);\r\n\t\t\t\r\n\t\t }\r\n\t100%   {\r\n\t\t\ttext-shadow: 0px 3px 3px yellow,\r\n\t\t\t\t 6px 6px 10px gray;\r\n\t\t\ttransform: translate(-5px, 0);\r\n\t\t }\r\n}\r\n\r\n@-webkit-keyframes redGlowAnimation {\r\n\t0%, 90%   {\r\n\t\t\tfilter: drop-shadow(0px 0px 100px red);\r\n            opacity: 1;\r\n\t\t }\r\n\t96%, 97%   {\r\n\t\t\tfilter: drop-shadow(-50px 0px 100px red);\r\n            opacity: 0.7;\r\n\t\t }\r\n\t98%, 99%   {\r\n\t\t\tfilter: drop-shadow(50px 0px 100px red);\r\n            opacity: 0.4;\r\n\t\t }\r\n\t100%   {\r\n\t\t\tfilter: drop-shadow(-50px 0px 100px red);\r\n            opacity: 0;\r\n\t\t }\r\n}\r\n\r\n@keyframes redGlowAnimation {\r\n\t0%, 90%   {\r\n\t\t\tfilter: drop-shadow(0px 0px 100px red);\r\n            opacity: 1;\r\n\t\t }\r\n\t96%, 97%   {\r\n\t\t\tfilter: drop-shadow(-50px 0px 100px red);\r\n            opacity: 0.7;\r\n\t\t }\r\n\t98%, 99%   {\r\n\t\t\tfilter: drop-shadow(50px 0px 100px red);\r\n            opacity: 0.4;\r\n\t\t }\r\n\t100%   {\r\n\t\t\tfilter: drop-shadow(-50px 0px 100px red);\r\n            opacity: 0;\r\n\t\t }\r\n}\r\n\r\n@-webkit-keyframes fadeInText {\r\n\tfrom {\r\n\t\ttransform: translate(-80px, 0);\r\n\t\topacity: 0;\r\n\t}\r\n\t\r\n\tto {\r\n\t\ttransform: translate(0, 0);\r\n\t\topacity: 1;\r\n\t}\r\n}\r\n\r\n@keyframes fadeInText {\r\n\tfrom {\r\n\t\ttransform: translate(-80px, 0);\r\n\t\topacity: 0;\r\n\t}\r\n\t\r\n\tto {\r\n\t\ttransform: translate(0, 0);\r\n\t\topacity: 1;\r\n\t}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludHJvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxxQkFBcUI7Q0FDckIseUJBQXdDO0FBQ3pDOztBQUVBO0NBQ0MscUJBQXFCOztDQUVyQixjQUFjOztDQUVkO3NCQUNxQjs7Q0FFckIseUJBQXlCLEVBQUUsV0FBVztDQUN0QyxzQkFBc0IsRUFBRSxZQUFZO0NBQ3BDLHFCQUFxQixFQUFFLGVBQWU7Q0FDdEMsaUJBQWlCLEVBQUUsYUFBYTs7Q0FFaEMsMkRBQW1EOztTQUFuRCxtREFBbUQ7QUFDcEQ7O0FBRUE7SUFDSSxrRkFBMEU7WUFBMUUsMEVBQTBFO0FBQzlFOztBQUVBO0NBQ0MsYUFBYTtJQUNWLHVCQUF1QjtJQUN2QixtQkFBbUI7O0lBRW5CLGdCQUFnQjs7SUFFaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7QUFDSjs7QUFQQTtJQUNJO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7QUFDSjs7QUFFQTtDQUNDO0dBQ0U7cUJBQ2tCO0dBQ2xCLDBCQUEwQjtHQUMxQjtDQUNGO0dBQ0U7c0JBQ21CO0dBQ25CLDZCQUE2QjtHQUM3QjtDQUNGOztHQUVFO3NCQUNtQjtHQUNuQiw0QkFBNEI7O0dBRTVCO0NBQ0Y7R0FDRTtzQkFDbUI7R0FDbkIsNkJBQTZCO0dBQzdCO0FBQ0g7O0FBdkJBO0NBQ0M7R0FDRTtxQkFDa0I7R0FDbEIsMEJBQTBCO0dBQzFCO0NBQ0Y7R0FDRTtzQkFDbUI7R0FDbkIsNkJBQTZCO0dBQzdCO0NBQ0Y7O0dBRUU7c0JBQ21CO0dBQ25CLDRCQUE0Qjs7R0FFNUI7Q0FDRjtHQUNFO3NCQUNtQjtHQUNuQiw2QkFBNkI7R0FDN0I7QUFDSDs7QUFFQTtDQUNDO0dBQ0Usc0NBQXNDO1lBQzdCLFVBQVU7R0FDbkI7Q0FDRjtHQUNFLHdDQUF3QztZQUMvQixZQUFZO0dBQ3JCO0NBQ0Y7R0FDRSx1Q0FBdUM7WUFDOUIsWUFBWTtHQUNyQjtDQUNGO0dBQ0Usd0NBQXdDO1lBQy9CLFVBQVU7R0FDbkI7QUFDSDs7QUFqQkE7Q0FDQztHQUNFLHNDQUFzQztZQUM3QixVQUFVO0dBQ25CO0NBQ0Y7R0FDRSx3Q0FBd0M7WUFDL0IsWUFBWTtHQUNyQjtDQUNGO0dBQ0UsdUNBQXVDO1lBQzlCLFlBQVk7R0FDckI7Q0FDRjtHQUNFLHdDQUF3QztZQUMvQixVQUFVO0dBQ25CO0FBQ0g7O0FBRUE7Q0FDQztFQUNDLDhCQUE4QjtFQUM5QixVQUFVO0NBQ1g7O0NBRUE7RUFDQywwQkFBMEI7RUFDMUIsVUFBVTtDQUNYO0FBQ0Q7O0FBVkE7Q0FDQztFQUNDLDhCQUE4QjtFQUM5QixVQUFVO0NBQ1g7O0NBRUE7RUFDQywwQkFBMEI7RUFDMUIsVUFBVTtDQUNYO0FBQ0QiLCJmaWxlIjoiaW50cm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xyXG5cdGZvbnQtZmFtaWx5OiB0ZXV0b25pYztcclxuXHRzcmM6IHVybCgnLi4vLi4vdGV1dG9uaWMvdGV1dG9uaWMxLnR0ZicpO1xyXG59XHJcblxyXG4ubG9nbyB7XHJcblx0Zm9udC1mYW1pbHk6IHRldXRvbmljO1xyXG5cdFxyXG5cdGNvbG9yOiAjRkZGRkZGO1xyXG5cdFxyXG5cdHRleHQtc2hhZG93OiAzcHggM3B4IDNweCAjMDAwMDAwLFxyXG5cdFx0XHRcdCA2cHggNnB4IDEwcHggZ3JheTtcclxuXHRcdFx0XHQgXHJcblx0LXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogU2FmYXJpICovICAgICAgICBcclxuXHQtbW96LXVzZXItc2VsZWN0OiBub25lOyAvKiBGaXJlZm94ICovXHJcblx0LW1zLXVzZXItc2VsZWN0OiBub25lOyAvKiBJRTEwKy9FZGdlICovXHJcblx0dXNlci1zZWxlY3Q6IG5vbmU7IC8qIFN0YW5kYXJkICovXHJcblx0XHJcblx0YW5pbWF0aW9uOiBzdGF0aWNBbmltYXRpb24gNnMgaW5maW5pdGUsIGZhZGVJbiAzcyAxO1x0XHJcbn1cclxuXHJcbi5yZWRHbG93IHtcclxuICAgIGFuaW1hdGlvbjogc3RhdGljQW5pbWF0aW9uIDJzIGluZmluaXRlLCByZWRHbG93QW5pbWF0aW9uIDJzIDEsIGZhZGVJbiAzcyAxO1x0XHJcbn1cclxuXHJcbi5pbml0aWFsTG9nbyB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBtYXJnaW4tdG9wOiAzMHZoO1xyXG5cclxuICAgIGZvbnQtc2l6ZTogMTN2aDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlSW4ge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHN0YXRpY0FuaW1hdGlvbiB7XHJcblx0MCUsIDkwJSAgIHtcclxuXHRcdFx0dGV4dC1zaGFkb3c6IDNweCAzcHggM3B4ICMwMDAwMDAsXHJcblx0XHRcdFx0NnB4IDZweCAxMHB4IGdyYXk7XHJcblx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xyXG5cdFx0IH1cclxuXHQ5NiUsIDk3JSAgIHtcclxuXHRcdFx0dGV4dC1zaGFkb3c6IDNweCAzcHggM3B4IHJlZCxcclxuXHRcdFx0XHQgNnB4IDZweCAxMHB4IGdyYXk7XHJcblx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01cHgsIDApO1xyXG5cdFx0IH1cclxuXHQ5OCUsIDk5JSAgIHtcclxuXHRcdFxyXG5cdFx0XHR0ZXh0LXNoYWRvdzogN3B4IDNweCAzcHggY3lhbixcclxuXHRcdFx0XHQgNnB4IDZweCAxMHB4IGdyYXk7XHJcblx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlKDVweCwgMCk7XHJcblx0XHRcdFxyXG5cdFx0IH1cclxuXHQxMDAlICAge1xyXG5cdFx0XHR0ZXh0LXNoYWRvdzogMHB4IDNweCAzcHggeWVsbG93LFxyXG5cdFx0XHRcdCA2cHggNnB4IDEwcHggZ3JheTtcclxuXHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTVweCwgMCk7XHJcblx0XHQgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHJlZEdsb3dBbmltYXRpb24ge1xyXG5cdDAlLCA5MCUgICB7XHJcblx0XHRcdGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDBweCAxMDBweCByZWQpO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG5cdFx0IH1cclxuXHQ5NiUsIDk3JSAgIHtcclxuXHRcdFx0ZmlsdGVyOiBkcm9wLXNoYWRvdygtNTBweCAwcHggMTAwcHggcmVkKTtcclxuICAgICAgICAgICAgb3BhY2l0eTogMC43O1xyXG5cdFx0IH1cclxuXHQ5OCUsIDk5JSAgIHtcclxuXHRcdFx0ZmlsdGVyOiBkcm9wLXNoYWRvdyg1MHB4IDBweCAxMDBweCByZWQpO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjQ7XHJcblx0XHQgfVxyXG5cdDEwMCUgICB7XHJcblx0XHRcdGZpbHRlcjogZHJvcC1zaGFkb3coLTUwcHggMHB4IDEwMHB4IHJlZCk7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcblx0XHQgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVJblRleHQge1xyXG5cdGZyb20ge1xyXG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTgwcHgsIDApO1xyXG5cdFx0b3BhY2l0eTogMDtcclxuXHR9XHJcblx0XHJcblx0dG8ge1xyXG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XHJcblx0XHRvcGFjaXR5OiAxO1xyXG5cdH1cclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    "fp1T":
    /*!********************************************!*\
      !*** ./src/app/footer/footer.component.ts ***!
      \********************************************/

    /*! exports provided: FooterComponent */

    /***/
    function fp1T(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FooterComponent = /*#__PURE__*/function () {
        function FooterComponent() {
          _classCallCheck(this, FooterComponent);
        }

        _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FooterComponent;
      }();

      FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || FooterComponent)();
      };

      FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FooterComponent,
        selectors: [["app-footer"]],
        decls: 8,
        vars: 0,
        consts: [[1, "footer", "center"], ["href", "https://www.linkedin.com/in/tin-fioli%C4%87-78748520a/", "target", "_blank"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Created by ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Tin Fioli\u0107");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Duelist \xA9 2022 - All rights reserved (Huge thanks to Paul Lloyd, creator of Teutonic font)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".footer[_ngcontent-%COMP%] {\r\n    margin-top: 20vh;\r\n    \r\n    color: #FE5D26;\r\n\r\n    font-size: 20px;\r\n    font-family: 'Open Sans Condensed';\r\n\r\n    margin-right: 10vw;\r\n}\r\n\r\n.center[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\nhr[_ngcontent-%COMP%] {\r\n    border: 0;\r\n    height: 1px;\r\n    background-image: linear-gradient(to right, rgba(10, 13, 20, 0.205), #7e0000, rgba(10, 13, 20, 0.205));\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n  color: red;\r\n  text-decoration: none;\r\n}\r\n\r\na[_ngcontent-%COMP%]:link {\r\n  color: red;\r\n  text-decoration: none;\r\n}\r\n\r\na[_ngcontent-%COMP%]:visited {\r\n  color: rgb(255, 0, 0);\r\n  text-decoration: none;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover {\r\n  color: rgb(207, 0, 0);\r\n  text-decoration: none;\r\n  cursor: url('cursorLink.png'), auto;\r\n}\r\n\r\na[_ngcontent-%COMP%]:active {\r\n  color: rgb(255, 0, 0);\r\n  text-decoration: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCOztJQUVoQixjQUFjOztJQUVkLGVBQWU7SUFDZixrQ0FBa0M7O0lBRWxDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxXQUFXO0lBQ1gsc0dBQXNHO0FBQzFHOztBQUVBO0VBQ0UsVUFBVTtFQUNWLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixtQ0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHZoO1xyXG4gICAgXHJcbiAgICBjb2xvcjogI0ZFNUQyNjtcclxuXHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucyBDb25kZW5zZWQnO1xyXG5cclxuICAgIG1hcmdpbi1yaWdodDogMTB2dztcclxufVxyXG5cclxuLmNlbnRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmhyIHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDEwLCAxMywgMjAsIDAuMjA1KSwgIzdlMDAwMCwgcmdiYSgxMCwgMTMsIDIwLCAwLjIwNSkpO1xyXG59XHJcblxyXG5hIHtcclxuICBjb2xvcjogcmVkO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuYTpsaW5rIHtcclxuICBjb2xvcjogcmVkO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuYTp2aXNpdGVkIHtcclxuICBjb2xvcjogcmdiKDI1NSwgMCwgMCk7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5hOmhvdmVyIHtcclxuICBjb2xvcjogcmdiKDIwNywgMCwgMCk7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGN1cnNvcjogdXJsKCcuLi8uLi9jdXJzb3JMaW5rLnBuZycpLCBhdXRvO1xyXG59XHJcblxyXG5hOmFjdGl2ZSB7XHJcbiAgY29sb3I6IHJnYigyNTUsIDAsIDApO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufSAiXX0= */"]
      });
      /***/
    },

    /***/
    "gq2R":
    /*!******************************************!*\
      !*** ./src/app/album/album.component.ts ***!
      \******************************************/

    /*! exports provided: AlbumComponent */

    /***/
    function gq2R(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlbumComponent", function () {
        return AlbumComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _player_player_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../player/player.component */
      "0M9o");

      function AlbumComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlbumComponent_div_3_Template_img_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.album = 1;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Downfall");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Downfall is a debut EP comprised of songs written from 2019 all the way to 2021. It was recorded throughout early 2022 and released in September of the same year.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "You can listen to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Downfall");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " on every major streaming platrform and on our website!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlbumComponent_div_3_Template_p_click_23_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.album = 1;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Listen to Downfall");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u15D2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlbumComponent_div_3_Template_p_click_29_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.live = 1;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Watch live clips");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\u15D2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AlbumComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "September 5, 2022 - Bedekov\u010Dina");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "iframe", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "iframe", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "iframe", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "iframe", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlbumComponent_div_4_Template_p_click_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.live = 0;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u15D5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "back to discography");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AlbumComponent_div_5_div_11_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlbumComponent_div_5_div_11_span_1_Template_p_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var song_r10 = ctx_r15.$implicit;
            var i_r11 = ctx_r15.index;

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r14.switchSong(song_r10, i_r11);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var song_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](song_r10);
        }
      }

      function AlbumComponent_div_5_div_11_span_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlbumComponent_div_5_div_11_span_2_Template_p_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var song_r10 = ctx_r19.$implicit;
            var i_r11 = ctx_r19.index;

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r18.switchSong(song_r10, i_r11);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var song_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](song_r10);
        }
      }

      function AlbumComponent_div_5_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AlbumComponent_div_5_div_11_span_1_Template, 3, 1, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AlbumComponent_div_5_div_11_span_2_Template, 3, 1, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var song_r10 = ctx.$implicit;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.selectedSong == song_r10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.selectedSong !== song_r10);
        }
      }

      function AlbumComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Downfall EP");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-player", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AlbumComponent_div_5_div_11_Template, 3, 2, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "The songs were written by band members and have been mixed/mastered by ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Kiki Marcello");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlbumComponent_div_5_Template_p_click_21_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r22.album = 0;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u15D5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "back to discography");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.selectedSong);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx_r2.songs[ctx_r2.selectedSongIndex])("link", ctx_r2.songLinks[ctx_r2.selectedSongIndex]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.songs);
        }
      }

      var AlbumComponent = /*#__PURE__*/function () {
        function AlbumComponent() {
          _classCallCheck(this, AlbumComponent);

          this.songs = ["Soul Hole", "Fallen", "Lost Comfort, Pt.1", "Lost Comfort, Pt.2", "Ignorance is Decadence"];
          this.songLinks = ["https://raw.githubusercontent.com/TinFiolic/Duelist/main/Soul%20Hole.mp3", "https://raw.githubusercontent.com/TinFiolic/Duelist/main/Fallen.mp3", "https://raw.githubusercontent.com/TinFiolic/Duelist/main/Lost%20Comfort%20intro.mp3", "https://raw.githubusercontent.com/TinFiolic/Duelist/main/Lost%20Comfort.mp3", "https://raw.githubusercontent.com/TinFiolic/Duelist/main/ID.mp3"];
          this.selectedSong = "Soul Hole";
          this.selectedSongIndex = 0;
          this.album = 0;
          this.live = 0;
          this.lostComfort1 = [{
            url: "https://raw.githubusercontent.com/TinFiolic/Duelist/main/Lost%20Comfort%20intro.mp3",
            title: "Lost Comfort, Pt.1",
            cover: ""
          }];
          this.lostComfort2 = [{
            url: "https://raw.githubusercontent.com/TinFiolic/Duelist/main/Lost%20Comfort.mp3",
            title: "Lost Comfort, Pt.2",
            cover: ""
          }];
          this.soulHole = [{
            url: "https://raw.githubusercontent.com/TinFiolic/Duelist/main/Soul%20Hole.mp3",
            title: "Soul Hole",
            cover: ""
          }];
          this.fallen = [{
            url: "https://raw.githubusercontent.com/TinFiolic/Duelist/main/Fallen.mp3",
            title: "Fallen",
            cover: ""
          }];
          this.falliden = [{
            url: "https://raw.githubusercontent.com/TinFiolic/Duelist/main/ID.mp3",
            title: "Ignorance is Decadence",
            cover: ""
          }];
        }

        _createClass(AlbumComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "switchSong",
          value: function switchSong(song, index) {
            this.selectedSong = song;
            this.selectedSongIndex = index;
          }
        }]);

        return AlbumComponent;
      }();

      AlbumComponent.ɵfac = function AlbumComponent_Factory(t) {
        return new (t || AlbumComponent)();
      };

      AlbumComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AlbumComponent,
        selectors: [["app-album"]],
        decls: 6,
        vars: 3,
        consts: [[1, "content", "center"], [4, "ngIf"], [1, "coverArt"], ["src", "https://raw.githubusercontent.com/TinFiolic/Duelist/main/cover.png", "width", "70%", "height", "70%", 2, "border-radius", "2%", "box-shadow", "10px 10px #000000", 3, "click"], [2, "font-family", "Open Sans Condensed"], [1, "title2"], [3, "click"], [2, "padding-right", "0.5em", "color", "#FE5D26"], [2, "color", "red"], [1, "title"], ["width", "560", "height", "315", "src", "https://www.youtube.com/embed/pqb2nFMjCvE", "title", "Duelist Live", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", ""], ["width", "560", "height", "315", "src", "https://www.youtube.com/embed/p60CNaWULaM", "title", "Duelist Live", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", ""], ["width", "560", "height", "315", "src", "https://www.youtube.com/embed/DrungfeNTbE", "title", "Duelist Live", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", ""], ["width", "560", "height", "315", "src", "https://www.youtube.com/embed/4bwABlTuOuU", "title", "Duelist Live", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", ""], [2, "float", "left", 3, "click"], [2, "padding-left", "0.5em", "color", "#FE5D26"], [3, "name", "link"], [1, "chooseSong"], ["class", "songList", 4, "ngFor", "ngForOf"], ["target", "_blank", "href", "https://kristijantackovic.wixsite.com/kikimarcello"], [1, "songList"], [1, "selectedSong", 3, "click"]],
        template: function AlbumComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AlbumComponent_div_3_Template, 34, 0, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AlbumComponent_div_4_Template, 17, 0, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AlbumComponent_div_5_Template, 26, 4, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.album == 0 && ctx.live == 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.live == 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.album == 1);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _player_player_component__WEBPACK_IMPORTED_MODULE_2__["PlayerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
        styles: [".title[_ngcontent-%COMP%] {\r\n    color: #FE5D26;\r\n\r\n    font-family: 'Open Sans Condensed';\r\n    font-size: 70px;\r\n}\r\n\r\n.title2[_ngcontent-%COMP%] {\r\n    color: #FE5D26;\r\n\r\n    font-family: 'Open Sans Condensed';\r\n    font-size: 50px;\r\n}\r\n\r\n.center[_ngcontent-%COMP%] {\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-align: center;\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n   margin-right: 10vw;\r\n   margin-top: 6vh;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n    font-family: 'Barlow', sans-serif;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n\r\n    line-height: 1.5;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n    color: red;\r\n    text-decoration: none;\r\n  }\r\n\r\na[_ngcontent-%COMP%]:link {\r\n    color: red;\r\n    text-decoration: none;\r\n  }\r\n\r\na[_ngcontent-%COMP%]:visited {\r\n    color: rgb(255, 0, 0);\r\n    text-decoration: none;\r\n  }\r\n\r\na[_ngcontent-%COMP%]:hover {\r\n    color: rgb(207, 0, 0);\r\n    text-decoration: none;\r\n  }\r\n\r\na[_ngcontent-%COMP%]:active {\r\n    color: rgb(255, 0, 0);\r\n    text-decoration: none;\r\n  }\r\n\r\n.chooseSong[_ngcontent-%COMP%] {\r\n  width: 40vw;\r\n  height: 10em;\r\n\r\n  background-color: rgba(0, 0, 0, 0.322);\r\n\r\n  border-radius: 10px;\r\n}\r\n\r\n.songList[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 20%;\r\n\r\n  float: left;\r\n}\r\n\r\n.selectedSong[_ngcontent-%COMP%] {\r\n  color: #000; \r\n  background-color: #FE5D26;\r\n}\r\n\r\niframe[_ngcontent-%COMP%] {\r\n  width: 560px;\r\n  height: 315px;\r\n}\r\n\r\n@media only screen and (max-width: 700px) { \r\n    p[_ngcontent-%COMP%] {\r\n        font-family: 'Barlow', sans-serif;\r\n        font-size: 17px;\r\n        font-weight: bold;\r\n    }\r\n\r\n    .title[_ngcontent-%COMP%] {\r\n        color: #FE5D26;\r\n    \r\n        font-family: 'Open Sans Condensed';\r\n        font-size: 50px;\r\n    }\r\n\r\n    .title2[_ngcontent-%COMP%] {\r\n        color: #FE5D26;\r\n    \r\n        font-family: 'Open Sans Condensed';\r\n        font-size: 40px;\r\n    }\r\n\r\n    .chooseSong[_ngcontent-%COMP%] {\r\n      width: 65vw;\r\n      height: 10em;\r\n    \r\n      background-color: rgba(0, 0, 0, 0.322);\r\n    \r\n      border-radius: 10px;\r\n    }\r\n\r\n    .coverArt[_ngcontent-%COMP%] {\r\n      display: none;\r\n    }\r\n\r\n    iframe[_ngcontent-%COMP%] {\r\n      width: 250px;\r\n      height: 120px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsYnVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjOztJQUVkLGtDQUFrQztJQUNsQyxlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYzs7SUFFZCxrQ0FBa0M7SUFDbEMsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0dBQ0csa0JBQWtCO0dBQ2xCLGVBQWU7QUFDbEI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsZUFBZTtJQUNmLGlCQUFpQjs7SUFFakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLHFCQUFxQjtFQUN2Qjs7QUFFQTtJQUNFLFVBQVU7SUFDVixxQkFBcUI7RUFDdkI7O0FBRUE7SUFDRSxxQkFBcUI7SUFDckIscUJBQXFCO0VBQ3ZCOztBQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLHFCQUFxQjtFQUN2Qjs7QUFFQTtJQUNFLHFCQUFxQjtJQUNyQixxQkFBcUI7RUFDdkI7O0FBRUY7RUFDRSxXQUFXO0VBQ1gsWUFBWTs7RUFFWixzQ0FBc0M7O0VBRXRDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXOztFQUVYLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0lBQ0k7UUFDSSxpQ0FBaUM7UUFDakMsZUFBZTtRQUNmLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGNBQWM7O1FBRWQsa0NBQWtDO1FBQ2xDLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxjQUFjOztRQUVkLGtDQUFrQztRQUNsQyxlQUFlO0lBQ25COztJQUVBO01BQ0UsV0FBVztNQUNYLFlBQVk7O01BRVosc0NBQXNDOztNQUV0QyxtQkFBbUI7SUFDckI7O0lBRUE7TUFDRSxhQUFhO0lBQ2Y7O0lBRUE7TUFDRSxZQUFZO01BQ1osYUFBYTtJQUNmO0FBQ0oiLCJmaWxlIjoiYWxidW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZSB7XHJcbiAgICBjb2xvcjogI0ZFNUQyNjtcclxuXHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucyBDb25kZW5zZWQnO1xyXG4gICAgZm9udC1zaXplOiA3MHB4O1xyXG59XHJcblxyXG4udGl0bGUyIHtcclxuICAgIGNvbG9yOiAjRkU1RDI2O1xyXG5cclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIENvbmRlbnNlZCc7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbn1cclxuXHJcbi5jZW50ZXIge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgIG1hcmdpbi1yaWdodDogMTB2dztcclxuICAgbWFyZ2luLXRvcDogNnZoO1xyXG59XHJcblxyXG5wIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQmFybG93Jywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgYTpsaW5rIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIGE6dmlzaXRlZCB7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMCwgMCk7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIGE6aG92ZXIge1xyXG4gICAgY29sb3I6IHJnYigyMDcsIDAsIDApO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICBcclxuICBhOmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMCwgMCk7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfSBcclxuXHJcbi5jaG9vc2VTb25nIHtcclxuICB3aWR0aDogNDB2dztcclxuICBoZWlnaHQ6IDEwZW07XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zMjIpO1xyXG5cclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uc29uZ0xpc3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMjAlO1xyXG5cclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLnNlbGVjdGVkU29uZyB7XHJcbiAgY29sb3I6ICMwMDA7IFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRTVEMjY7XHJcbn1cclxuXHJcbmlmcmFtZSB7XHJcbiAgd2lkdGg6IDU2MHB4O1xyXG4gIGhlaWdodDogMzE1cHg7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHsgXHJcbiAgICBwIHtcclxuICAgICAgICBmb250LWZhbWlseTogJ0JhcmxvdycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG5cclxuICAgIC50aXRsZSB7XHJcbiAgICAgICAgY29sb3I6ICNGRTVEMjY7XHJcbiAgICBcclxuICAgICAgICBmb250LWZhbWlseTogJ09wZW4gU2FucyBDb25kZW5zZWQnO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIH1cclxuXHJcbiAgICAudGl0bGUyIHtcclxuICAgICAgICBjb2xvcjogI0ZFNUQyNjtcclxuICAgIFxyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIENvbmRlbnNlZCc7XHJcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jaG9vc2VTb25nIHtcclxuICAgICAgd2lkdGg6IDY1dnc7XHJcbiAgICAgIGhlaWdodDogMTBlbTtcclxuICAgIFxyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzIyKTtcclxuICAgIFxyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb3ZlckFydCB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgaWZyYW1lIHtcclxuICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgfVxyXG59Il19 */"]
      });
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [];

      var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      });

      AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "wlho":
    /*!****************************************!*\
      !*** ./src/app/main/main.component.ts ***!
      \****************************************/

    /*! exports provided: MainComponent */

    /***/
    function wlho(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MainComponent", function () {
        return MainComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _intro_intro_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../intro/intro.component */
      "drGS");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../footer/footer.component */
      "fp1T");
      /* harmony import */


      var _album_album_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../album/album.component */
      "gq2R");
      /* harmony import */


      var _streaming_streaming_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../streaming/streaming.component */
      "DQmF");
      /* harmony import */


      var _download_download_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../download/download.component */
      "FUuC");
      /* harmony import */


      var _biography_biography_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../biography/biography.component */
      "09+m");
      /* harmony import */


      var _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../contact/contact.component */
      "bzTf");

      function MainComponent_app_album_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-album");
        }
      }

      function MainComponent_app_streaming_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-streaming");
        }
      }

      function MainComponent_app_download_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-download");
        }
      }

      function MainComponent_app_biography_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-biography");
        }
      }

      function MainComponent_app_contact_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-contact");
        }
      }

      var MainComponent = /*#__PURE__*/function () {
        function MainComponent() {
          _classCallCheck(this, MainComponent);

          this.currentPage = "discography";
          this.pageList = ["discography", "streaming", "download", "biography", "contact"];
        }

        _createClass(MainComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.startUpAnimation();
          }
        }, {
          key: "startUpAnimation",
          value: function startUpAnimation() {
            var logo = document.getElementById("introLogo");
            var body = document.getElementById("mainBody");
            var menuItem = document.getElementById("discography"); //TODO DELETE
            //logo.style.display = "none";

            body.style.display = "none";
            menuItem.classList.add("selected");
            setTimeout(function () {
              logo.style.display = "none";
              body.style.display = "block";
            }, 2500);
          }
        }, {
          key: "changePage",
          value: function changePage(id) {
            var _iterator = _createForOfIteratorHelper(this.pageList),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var page = _step.value;
                document.getElementById(page).classList.remove("selected");
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            document.getElementById(id).classList.add("selected");
            this.currentPage = id;
          }
        }]);

        return MainComponent;
      }();

      MainComponent.ɵfac = function MainComponent_Factory(t) {
        return new (t || MainComponent)();
      };

      MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MainComponent,
        selectors: [["app-main"]],
        decls: 38,
        vars: 5,
        consts: [["id", "introLogo"], ["id", "mainBody"], ["id", "sidebar", 2, "min-width", "35vw"], [1, "logo", "center"], [1, "center", "menu"], ["id", "discography", 1, "menuItem", 3, "click"], [1, "divider"], ["id", "streaming", 1, "menuItem", 3, "click"], ["id", "download", 1, "menuItem", 3, "click"], ["id", "biography", 1, "menuItem", 3, "click"], ["id", "contact", 1, "menuItem", 3, "click"], [1, "content", 2, "min-width", "60vw"], [4, "ngIf"]],
        template: function MainComponent_Template(rf, ctx) {
          if (rf & 1) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainComponent_Template_p_click_8_listener() {
              return ctx.changePage("discography");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Discography");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u2022");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainComponent_Template_p_click_13_listener() {
              return ctx.changePage("streaming");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Streaming");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u2022");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainComponent_Template_p_click_18_listener() {
              return ctx.changePage("download");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Download");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u2022");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainComponent_Template_p_click_23_listener() {
              return ctx.changePage("biography");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Biography");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u2022");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainComponent_Template_p_click_28_listener() {
              return ctx.changePage("contact");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Contact");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, MainComponent_app_album_32_Template, 1, 0, "app-album", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, MainComponent_app_streaming_33_Template, 1, 0, "app-streaming", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, MainComponent_app_download_34_Template, 1, 0, "app-download", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, MainComponent_app_biography_35_Template, 1, 0, "app-biography", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, MainComponent_app_contact_36_Template, 1, 0, "app-contact", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "app-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentPage == "discography");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentPage == "streaming");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentPage == "download");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentPage == "biography");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentPage == "contact");
          }
        },
        directives: [_intro_intro_component__WEBPACK_IMPORTED_MODULE_1__["IntroComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], _album_album_component__WEBPACK_IMPORTED_MODULE_4__["AlbumComponent"], _streaming_streaming_component__WEBPACK_IMPORTED_MODULE_5__["StreamingComponent"], _download_download_component__WEBPACK_IMPORTED_MODULE_6__["DownloadComponent"], _biography_biography_component__WEBPACK_IMPORTED_MODULE_7__["BiographyComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"]],
        styles: ["@font-face {\r\n    font-family: teutonic;\r\n    src: url('teutonic1.ttf');\r\n}\r\n\r\n*[_ngcontent-%COMP%] {\r\n    cursor: url('cursor.png'), auto;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%] {\r\n    font-family: teutonic;\r\n\r\n    color: #FFFFFF;\r\n\r\n    text-shadow: 3px 3px 3px #000000,\r\n        6px 6px 10px gray;\r\n\r\n    font-size: 100px;\r\n\r\n    padding-bottom: 3vh;\r\n\r\n    -webkit-user-select: none;\r\n    \r\n    -moz-user-select: none;\r\n    \r\n    -ms-user-select: none;\r\n    \r\n    user-select: none;\r\n    \r\n\r\n    -webkit-animation: staticAnimation 6s infinite;\r\n\r\n            animation: staticAnimation 6s infinite;\r\n}\r\n\r\nhr[_ngcontent-%COMP%] {\r\n    border: 0;\r\n    height: 3px;\r\n    background-image: linear-gradient(to right, rgba(10, 13, 20, 0.205), #7e0000, rgba(10, 13, 20, 0.205));\r\n    -webkit-animation: lineAnimation 6s infinite;\r\n            animation: lineAnimation 6s infinite;\r\n}\r\n\r\n#sidebar[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 15vh;\r\n}\r\n\r\n#mainBody[_ngcontent-%COMP%] {\r\n    -webkit-animation: fadeIn 2s 1;\r\n            animation: fadeIn 2s 1;\r\n}\r\n\r\n.center[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\n.menu[_ngcontent-%COMP%] {\r\n    margin-top: 3vh;\r\n    width: 20vw;\r\n    filter: drop-shadow(0px 20px 70px red);\r\n\r\n    -webkit-user-select: none;\r\n\r\n       -moz-user-select: none;\r\n\r\n        -ms-user-select: none;\r\n\r\n            user-select: none;\r\n}\r\n\r\n.menuItem[_ngcontent-%COMP%] {\r\n    font-family: 'Francois One', sans-serif;\r\n    font-size: 30px;\r\n\r\n    text-shadow: 3px 3px 3px #000000,\r\n        6px 6px 10px gray;\r\n}\r\n\r\n.menuItem[_ngcontent-%COMP%]:hover {\r\n    text-shadow: 3px 3px 3px #7e0000,\r\n        6px 6px 10px gray;\r\n\r\n    transform: translate(1px, 1px);\r\n\r\n    color: #F19A3E;\r\n}\r\n\r\n.selected[_ngcontent-%COMP%] {\r\n    color: #FE5D26;\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n    margin-left: 35vw;\r\n}\r\n\r\n.divider[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n@-webkit-keyframes lineAnimation {\r\n    0% {\r\n        width: 25vw;\r\n    }\r\n\r\n    50% {\r\n        width: 15vw;\r\n    }\r\n\r\n    100% {\r\n        width: 25vw;\r\n    }\r\n}\r\n\r\n@keyframes lineAnimation {\r\n    0% {\r\n        width: 25vw;\r\n    }\r\n\r\n    50% {\r\n        width: 15vw;\r\n    }\r\n\r\n    100% {\r\n        width: 25vw;\r\n    }\r\n}\r\n\r\n@-webkit-keyframes staticAnimation {\r\n    0%, 60% {\r\n        text-shadow: 3px 3px 3px #000000,\r\n            6px 6px 10px gray;\r\n        transform: translate(0, 0);\r\n    }\r\n\r\n    96%, 97% {\r\n        text-shadow: 3px 3px 3px red,\r\n            6px 6px 10px gray;\r\n        transform: translate(-5px, 0);\r\n    }\r\n\r\n    98%, 99% {\r\n\r\n        text-shadow: 7px 3px 3px cyan,\r\n            6px 6px 10px gray;\r\n        transform: translate(5px, 0);\r\n\r\n    }\r\n\r\n    100% {\r\n        text-shadow: 0px 3px 3px yellow,\r\n            6px 6px 10px gray;\r\n        transform: translate(-5px, 0);\r\n    }\r\n}\r\n\r\n@keyframes staticAnimation {\r\n    0%, 60% {\r\n        text-shadow: 3px 3px 3px #000000,\r\n            6px 6px 10px gray;\r\n        transform: translate(0, 0);\r\n    }\r\n\r\n    96%, 97% {\r\n        text-shadow: 3px 3px 3px red,\r\n            6px 6px 10px gray;\r\n        transform: translate(-5px, 0);\r\n    }\r\n\r\n    98%, 99% {\r\n\r\n        text-shadow: 7px 3px 3px cyan,\r\n            6px 6px 10px gray;\r\n        transform: translate(5px, 0);\r\n\r\n    }\r\n\r\n    100% {\r\n        text-shadow: 0px 3px 3px yellow,\r\n            6px 6px 10px gray;\r\n        transform: translate(-5px, 0);\r\n    }\r\n}\r\n\r\n@-webkit-keyframes fadeInText {\r\n    from {\r\n        transform: translate(-80px, 0);\r\n        opacity: 0;\r\n    }\r\n\r\n    to {\r\n        transform: translate(0, 0);\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n@keyframes fadeInText {\r\n    from {\r\n        transform: translate(-80px, 0);\r\n        opacity: 0;\r\n    }\r\n\r\n    to {\r\n        transform: translate(0, 0);\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n\r\n\r\n@media only screen and (max-width: 1600px) {\r\n    hr[_ngcontent-%COMP%] {\r\n        border: 0;\r\n        height: 2px;\r\n        background-image: linear-gradient(to right, rgba(10, 13, 20, 0.205), #7e0000, rgba(10, 13, 20, 0.205));\r\n        -webkit-animation: lineAnimation 0s 0;\r\n                animation: lineAnimation 0s 0;\r\n    }\r\n\r\n    .logo[_ngcontent-%COMP%] {\r\n        font-family: teutonic;\r\n    \r\n        color: #FFFFFF;\r\n    \r\n        text-shadow: 3px 3px 3px #000000,\r\n            6px 6px 10px gray;\r\n    \r\n        font-size: 100px;\r\n\r\n    \r\n        padding-bottom: 3vh;\r\n    \r\n        -webkit-user-select: none;\r\n        \r\n        -moz-user-select: none;\r\n        \r\n        -ms-user-select: none;\r\n        \r\n        user-select: none;\r\n        \r\n    \r\n        -webkit-animation: staticAnimation 6s infinite;\r\n    \r\n                animation: staticAnimation 6s infinite;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 1220px) {\r\n    hr[_ngcontent-%COMP%] {\r\n        border: 0;\r\n        height: 2px;\r\n        background-image: linear-gradient(to right, rgba(10, 13, 20, 0.205), #7e0000, rgba(10, 13, 20, 0.205));\r\n        -webkit-animation: lineAnimation 0s 0;\r\n                animation: lineAnimation 0s 0;\r\n    }\r\n\r\n    .logo[_ngcontent-%COMP%] {\r\n        font-family: teutonic;\r\n    \r\n        color: #FFFFFF;\r\n    \r\n        text-shadow: 3px 3px 3px #000000,\r\n            6px 6px 10px gray;\r\n    \r\n        font-size: 60px;\r\n    \r\n        padding-bottom: 3vh;\r\n    \r\n        -webkit-user-select: none;\r\n        \r\n        -moz-user-select: none;\r\n        \r\n        -ms-user-select: none;\r\n        \r\n        user-select: none;\r\n        \r\n    \r\n        -webkit-animation: staticAnimation 6s infinite;\r\n    \r\n                animation: staticAnimation 6s infinite;\r\n    }\r\n\r\n    .menu[_ngcontent-%COMP%] {\r\n        margin-top: 3vh;\r\n        width: 20vw;\r\n        filter: drop-shadow(0px 20px 70px red);\r\n    }\r\n    \r\n    .menuItem[_ngcontent-%COMP%] {\r\n        font-family: 'Francois One', sans-serif;\r\n        font-size: 23px;\r\n    \r\n        text-shadow: 3px 3px 3px #000000,\r\n            6px 6px 10px gray;\r\n    }\r\n}\r\n\r\n\r\n\r\n@media only screen and (max-width: 920px) {\r\n    hr[_ngcontent-%COMP%] {\r\n        border: 0;\r\n        height: 2px;\r\n        background-image: linear-gradient(to right, rgba(10, 13, 20, 0.205), #7e0000, rgba(10, 13, 20, 0.205));\r\n        -webkit-animation: lineAnimation 0s 0;\r\n                animation: lineAnimation 0s 0;\r\n        display: none;\r\n    }\r\n\r\n    .logo[_ngcontent-%COMP%] {\r\n        font-family: teutonic;\r\n    \r\n        color: #FFFFFF;\r\n    \r\n        text-shadow: 3px 3px 3px #000000,\r\n            6px 6px 10px gray;\r\n    \r\n        font-size: 70px;\r\n    \r\n        margin-top: -3vh;\r\n        margin-left: -45%;\r\n    \r\n        padding-bottom: 60px;\r\n        padding-top: 10px;\r\n    \r\n        -webkit-user-select: none;\r\n        \r\n        -moz-user-select: none;\r\n        \r\n        -ms-user-select: none;\r\n        \r\n        user-select: none;\r\n        \r\n    \r\n        -webkit-animation: staticAnimation 0s 0;\r\n    \r\n                animation: staticAnimation 0s 0;\r\n\r\n        background-image: url('bg.jpg');\r\n        border-bottom: 1px solid black;\r\n        z-index: 1;\r\n    }\r\n\r\n    .menu[_ngcontent-%COMP%] {\r\n        margin-top: -45px;\r\n        margin-left: -30vw;\r\n        \r\n        width: 100vw;\r\n        \r\n        filter: drop-shadow(0px 20px 70px red);\r\n    }\r\n\r\n    .divider[_ngcontent-%COMP%] {\r\n        padding-left: 0.5vw;\r\n        padding-right: 3.5vw;\r\n\r\n        display: inline;\r\n    }\r\n    \r\n    .menuItem[_ngcontent-%COMP%] {\r\n        font-family: 'Francois One', sans-serif;\r\n        font-size: 18px;\r\n        display: inline;\r\n\r\n        padding-right: 2vw;\r\n    \r\n        text-shadow: 3px 3px 3px #000000,\r\n            6px 6px 10px gray;\r\n    }\r\n\r\n    #sidebar[_ngcontent-%COMP%] {\r\n        position: fixed;\r\n        top: 3vh;\r\n        left: 30vw;\r\n        z-index: 100;\r\n    }\r\n\r\n    .content[_ngcontent-%COMP%] {\r\n        margin-top: 150px;\r\n        margin-left: 10vw;\r\n    }\r\n\r\n    br[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 700px) {\r\n    hr[_ngcontent-%COMP%] {\r\n        border: 0;\r\n        height: 2px;\r\n        background-image: linear-gradient(to right, rgba(10, 13, 20, 0.205), #7e0000, rgba(10, 13, 20, 0.205));\r\n        -webkit-animation: lineAnimation 0s 0;\r\n                animation: lineAnimation 0s 0;\r\n        display: none;\r\n    }\r\n\r\n    .logo[_ngcontent-%COMP%] {\r\n        font-family: teutonic;\r\n    \r\n        color: #FFFFFF;\r\n    \r\n        text-shadow: 3px 3px 3px #000000,\r\n            6px 6px 10px gray;\r\n    \r\n        font-size: 60px;\r\n    \r\n        margin-top: -3vh;\r\n        margin-left: -45%;\r\n    \r\n        padding-bottom: 55px;\r\n        padding-top: 20px;\r\n    \r\n        -webkit-user-select: none;\r\n        \r\n        -moz-user-select: none;\r\n        \r\n        -ms-user-select: none;\r\n        \r\n        user-select: none;\r\n        \r\n    \r\n        -webkit-animation: staticAnimation 0s 0;\r\n    \r\n                animation: staticAnimation 0s 0;\r\n\r\n        background-image: url('bg.jpg');\r\n        z-index: 1;\r\n\r\n        border-bottom: 1px solid black;\r\n    }\r\n\r\n    .menu[_ngcontent-%COMP%] {\r\n        margin-top: -30px;\r\n        margin-left: -30vw;\r\n        width: 100vw;\r\n        filter: drop-shadow(0px 20px 70px red);\r\n        background: rgb(22, 10, 10, 0);\r\n    }\r\n    \r\n    .divider[_ngcontent-%COMP%] {\r\n        display: inline;\r\n    }\r\n\r\n    .menuItem[_ngcontent-%COMP%] {\r\n        font-family: 'Francois One', sans-serif;\r\n        font-size: 12px;\r\n        display: inline;\r\n\r\n        padding-right: 4vw;\r\n\r\n        text-shadow: 3px 3px 3px #000000,\r\n            6px 6px 10px gray;\r\n    }\r\n\r\n    #sidebar[_ngcontent-%COMP%] {\r\n        position: fixed;\r\n        top: 3vh;\r\n        left: 30vw;\r\n        z-index: 100;\r\n    }\r\n\r\n    .content[_ngcontent-%COMP%] {\r\n        margin-top: 150px;\r\n        margin-left: 10vw;\r\n    }\r\n\r\n    br[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 410px) {\r\n    hr[_ngcontent-%COMP%] {\r\n        border: 0;\r\n        height: 2px;\r\n        background-image: linear-gradient(to right, rgba(10, 13, 20, 0.205), #7e0000, rgba(10, 13, 20, 0.205));\r\n        -webkit-animation: lineAnimation 0s 0;\r\n                animation: lineAnimation 0s 0;\r\n        display: none;\r\n    }\r\n\r\n    .logo[_ngcontent-%COMP%] {\r\n        font-family: teutonic;\r\n    \r\n        color: #FFFFFF;\r\n    \r\n        text-shadow: 3px 3px 3px #000000,\r\n            6px 6px 10px gray;\r\n    \r\n        font-size: 60px;\r\n    \r\n        margin-top: -3vh;\r\n        margin-left: -45%;\r\n    \r\n        padding-bottom: 55px;\r\n        padding-top: 20px;\r\n    \r\n        -webkit-user-select: none;\r\n        \r\n        -moz-user-select: none;\r\n        \r\n        -ms-user-select: none;\r\n        \r\n        user-select: none;\r\n        \r\n    \r\n        -webkit-animation: staticAnimation 0s 0;\r\n    \r\n                animation: staticAnimation 0s 0;\r\n\r\n        background-image: url('bg.jpg');\r\n        z-index: 1;\r\n\r\n        border-bottom: 1px solid black;\r\n    }\r\n\r\n    .menu[_ngcontent-%COMP%] {\r\n        margin-top: -30px;\r\n        margin-left: -30vw;\r\n        width: 100vw;\r\n        filter: drop-shadow(0px 20px 70px red);\r\n        background: rgb(22, 10, 10, 0);\r\n    }\r\n    \r\n    .divider[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n\r\n    .menuItem[_ngcontent-%COMP%] {\r\n        font-family: 'Francois One', sans-serif;\r\n        font-size: 12px;\r\n        display: inline;\r\n\r\n        padding-right: 4vw;\r\n\r\n        text-shadow: 3px 3px 3px #000000,\r\n            6px 6px 10px gray;\r\n    }\r\n\r\n    #sidebar[_ngcontent-%COMP%] {\r\n        position: fixed;\r\n        top: 3vh;\r\n        left: 30vw;\r\n        z-index: 100;\r\n    }\r\n\r\n    .content[_ngcontent-%COMP%] {\r\n        margin-top: 150px;\r\n        margin-left: 10vw;\r\n    }\r\n\r\n    br[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQix5QkFBd0M7QUFDNUM7O0FBRUE7SUFDSSwrQkFBcUM7QUFDekM7O0FBRUE7SUFDSSxxQkFBcUI7O0lBRXJCLGNBQWM7O0lBRWQ7eUJBQ3FCOztJQUVyQixnQkFBZ0I7O0lBRWhCLG1CQUFtQjs7SUFFbkIseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGFBQWE7O0lBRWIsOENBQXNDOztZQUF0QyxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsV0FBVztJQUNYLHNHQUFzRztJQUN0Ryw0Q0FBb0M7WUFBcEMsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFNBQVM7QUFDYjs7QUFFQTtJQUNJLDhCQUFzQjtZQUF0QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLHNDQUFzQzs7SUFFdEMseUJBQWlCOztPQUFqQixzQkFBaUI7O1FBQWpCLHFCQUFpQjs7WUFBakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksdUNBQXVDO0lBQ3ZDLGVBQWU7O0lBRWY7eUJBQ3FCO0FBQ3pCOztBQUVBO0lBQ0k7eUJBQ3FCOztJQUVyQiw4QkFBOEI7O0lBRTlCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJO1FBQ0ksV0FBVztJQUNmOztJQUVBO1FBQ0ksV0FBVztJQUNmOztJQUVBO1FBQ0ksV0FBVztJQUNmO0FBQ0o7O0FBWkE7SUFDSTtRQUNJLFdBQVc7SUFDZjs7SUFFQTtRQUNJLFdBQVc7SUFDZjs7SUFFQTtRQUNJLFdBQVc7SUFDZjtBQUNKOztBQUVBO0lBQ0k7UUFDSTs2QkFDcUI7UUFDckIsMEJBQTBCO0lBQzlCOztJQUVBO1FBQ0k7NkJBQ3FCO1FBQ3JCLDZCQUE2QjtJQUNqQzs7SUFFQTs7UUFFSTs2QkFDcUI7UUFDckIsNEJBQTRCOztJQUVoQzs7SUFFQTtRQUNJOzZCQUNxQjtRQUNyQiw2QkFBNkI7SUFDakM7QUFDSjs7QUExQkE7SUFDSTtRQUNJOzZCQUNxQjtRQUNyQiwwQkFBMEI7SUFDOUI7O0lBRUE7UUFDSTs2QkFDcUI7UUFDckIsNkJBQTZCO0lBQ2pDOztJQUVBOztRQUVJOzZCQUNxQjtRQUNyQiw0QkFBNEI7O0lBRWhDOztJQUVBO1FBQ0k7NkJBQ3FCO1FBQ3JCLDZCQUE2QjtJQUNqQztBQUNKOztBQUVBO0lBQ0k7UUFDSSw4QkFBOEI7UUFDOUIsVUFBVTtJQUNkOztJQUVBO1FBQ0ksMEJBQTBCO1FBQzFCLFVBQVU7SUFDZDtBQUNKOztBQVZBO0lBQ0k7UUFDSSw4QkFBOEI7UUFDOUIsVUFBVTtJQUNkOztJQUVBO1FBQ0ksMEJBQTBCO1FBQzFCLFVBQVU7SUFDZDtBQUNKOztBQUU0RCxTQUFTOztBQUVyRTtJQUNJO1FBQ0ksU0FBUztRQUNULFdBQVc7UUFDWCxzR0FBc0c7UUFDdEcscUNBQTZCO2dCQUE3Qiw2QkFBNkI7SUFDakM7O0lBRUE7UUFDSSxxQkFBcUI7O1FBRXJCLGNBQWM7O1FBRWQ7NkJBQ3FCOztRQUVyQixnQkFBZ0I7OztRQUdoQixtQkFBbUI7O1FBRW5CLHlCQUF5QjtRQUN6QixXQUFXO1FBQ1gsc0JBQXNCO1FBQ3RCLFlBQVk7UUFDWixxQkFBcUI7UUFDckIsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixhQUFhOztRQUViLDhDQUFzQzs7Z0JBQXRDLHNDQUFzQztJQUMxQztBQUNKOztBQUdBO0lBQ0k7UUFDSSxTQUFTO1FBQ1QsV0FBVztRQUNYLHNHQUFzRztRQUN0RyxxQ0FBNkI7Z0JBQTdCLDZCQUE2QjtJQUNqQzs7SUFFQTtRQUNJLHFCQUFxQjs7UUFFckIsY0FBYzs7UUFFZDs2QkFDcUI7O1FBRXJCLGVBQWU7O1FBRWYsbUJBQW1COztRQUVuQix5QkFBeUI7UUFDekIsV0FBVztRQUNYLHNCQUFzQjtRQUN0QixZQUFZO1FBQ1oscUJBQXFCO1FBQ3JCLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsYUFBYTs7UUFFYiw4Q0FBc0M7O2dCQUF0QyxzQ0FBc0M7SUFDMUM7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsV0FBVztRQUNYLHNDQUFzQztJQUMxQzs7SUFFQTtRQUNJLHVDQUF1QztRQUN2QyxlQUFlOztRQUVmOzZCQUNxQjtJQUN6QjtBQUNKOztBQUU0RCxTQUFTOztBQUVyRTtJQUNJO1FBQ0ksU0FBUztRQUNULFdBQVc7UUFDWCxzR0FBc0c7UUFDdEcscUNBQTZCO2dCQUE3Qiw2QkFBNkI7UUFDN0IsYUFBYTtJQUNqQjs7SUFFQTtRQUNJLHFCQUFxQjs7UUFFckIsY0FBYzs7UUFFZDs2QkFDcUI7O1FBRXJCLGVBQWU7O1FBRWYsZ0JBQWdCO1FBQ2hCLGlCQUFpQjs7UUFFakIsb0JBQW9CO1FBQ3BCLGlCQUFpQjs7UUFFakIseUJBQXlCO1FBQ3pCLFdBQVc7UUFDWCxzQkFBc0I7UUFDdEIsWUFBWTtRQUNaLHFCQUFxQjtRQUNyQixlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLGFBQWE7O1FBRWIsdUNBQStCOztnQkFBL0IsK0JBQStCOztRQUUvQiwrQkFBcUM7UUFDckMsOEJBQThCO1FBQzlCLFVBQVU7SUFDZDs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQixrQkFBa0I7O1FBRWxCLFlBQVk7O1FBRVosc0NBQXNDO0lBQzFDOztJQUVBO1FBQ0ksbUJBQW1CO1FBQ25CLG9CQUFvQjs7UUFFcEIsZUFBZTtJQUNuQjs7SUFFQTtRQUNJLHVDQUF1QztRQUN2QyxlQUFlO1FBQ2YsZUFBZTs7UUFFZixrQkFBa0I7O1FBRWxCOzZCQUNxQjtJQUN6Qjs7SUFFQTtRQUNJLGVBQWU7UUFDZixRQUFRO1FBQ1IsVUFBVTtRQUNWLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxTQUFTO1FBQ1QsV0FBVztRQUNYLHNHQUFzRztRQUN0RyxxQ0FBNkI7Z0JBQTdCLDZCQUE2QjtRQUM3QixhQUFhO0lBQ2pCOztJQUVBO1FBQ0kscUJBQXFCOztRQUVyQixjQUFjOztRQUVkOzZCQUNxQjs7UUFFckIsZUFBZTs7UUFFZixnQkFBZ0I7UUFDaEIsaUJBQWlCOztRQUVqQixvQkFBb0I7UUFDcEIsaUJBQWlCOztRQUVqQix5QkFBeUI7UUFDekIsV0FBVztRQUNYLHNCQUFzQjtRQUN0QixZQUFZO1FBQ1oscUJBQXFCO1FBQ3JCLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsYUFBYTs7UUFFYix1Q0FBK0I7O2dCQUEvQiwrQkFBK0I7O1FBRS9CLCtCQUFxQztRQUNyQyxVQUFVOztRQUVWLDhCQUE4QjtJQUNsQzs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLHNDQUFzQztRQUN0Qyw4QkFBOEI7SUFDbEM7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksdUNBQXVDO1FBQ3ZDLGVBQWU7UUFDZixlQUFlOztRQUVmLGtCQUFrQjs7UUFFbEI7NkJBQ3FCO0lBQ3pCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLFFBQVE7UUFDUixVQUFVO1FBQ1YsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFNBQVM7UUFDVCxXQUFXO1FBQ1gsc0dBQXNHO1FBQ3RHLHFDQUE2QjtnQkFBN0IsNkJBQTZCO1FBQzdCLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxxQkFBcUI7O1FBRXJCLGNBQWM7O1FBRWQ7NkJBQ3FCOztRQUVyQixlQUFlOztRQUVmLGdCQUFnQjtRQUNoQixpQkFBaUI7O1FBRWpCLG9CQUFvQjtRQUNwQixpQkFBaUI7O1FBRWpCLHlCQUF5QjtRQUN6QixXQUFXO1FBQ1gsc0JBQXNCO1FBQ3RCLFlBQVk7UUFDWixxQkFBcUI7UUFDckIsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixhQUFhOztRQUViLHVDQUErQjs7Z0JBQS9CLCtCQUErQjs7UUFFL0IsK0JBQXFDO1FBQ3JDLFVBQVU7O1FBRVYsOEJBQThCO0lBQ2xDOztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osc0NBQXNDO1FBQ3RDLDhCQUE4QjtJQUNsQzs7SUFFQTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSx1Q0FBdUM7UUFDdkMsZUFBZTtRQUNmLGVBQWU7O1FBRWYsa0JBQWtCOztRQUVsQjs2QkFDcUI7SUFDekI7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsUUFBUTtRQUNSLFVBQVU7UUFDVixZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7QUFDSiIsImZpbGUiOiJtYWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiB0ZXV0b25pYztcclxuICAgIHNyYzogdXJsKCcuLi8uLi90ZXV0b25pYy90ZXV0b25pYzEudHRmJyk7XHJcbn1cclxuXHJcbioge1xyXG4gICAgY3Vyc29yOiB1cmwoJy4uLy4uL2N1cnNvci5wbmcnKSwgYXV0bztcclxufVxyXG5cclxuLmxvZ28ge1xyXG4gICAgZm9udC1mYW1pbHk6IHRldXRvbmljO1xyXG5cclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG5cclxuICAgIHRleHQtc2hhZG93OiAzcHggM3B4IDNweCAjMDAwMDAwLFxyXG4gICAgICAgIDZweCA2cHggMTBweCBncmF5O1xyXG5cclxuICAgIGZvbnQtc2l6ZTogMTAwcHg7XHJcblxyXG4gICAgcGFkZGluZy1ib3R0b206IDN2aDtcclxuXHJcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLyogU2FmYXJpICovXHJcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLyogRmlyZWZveCAqL1xyXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLyogSUUxMCsvRWRnZSAqL1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAvKiBTdGFuZGFyZCAqL1xyXG5cclxuICAgIGFuaW1hdGlvbjogc3RhdGljQW5pbWF0aW9uIDZzIGluZmluaXRlO1xyXG59XHJcblxyXG5ociB7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBoZWlnaHQ6IDNweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgxMCwgMTMsIDIwLCAwLjIwNSksICM3ZTAwMDAsIHJnYmEoMTAsIDEzLCAyMCwgMC4yMDUpKTtcclxuICAgIGFuaW1hdGlvbjogbGluZUFuaW1hdGlvbiA2cyBpbmZpbml0ZTtcclxufVxyXG5cclxuI3NpZGViYXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAxNXZoO1xyXG59XHJcblxyXG4jbWFpbkJvZHkge1xyXG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gMnMgMTtcclxufVxyXG5cclxuLmNlbnRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tZW51IHtcclxuICAgIG1hcmdpbi10b3A6IDN2aDtcclxuICAgIHdpZHRoOiAyMHZ3O1xyXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMjBweCA3MHB4IHJlZCk7XHJcblxyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbi5tZW51SXRlbSB7XHJcbiAgICBmb250LWZhbWlseTogJ0ZyYW5jb2lzIE9uZScsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcblxyXG4gICAgdGV4dC1zaGFkb3c6IDNweCAzcHggM3B4ICMwMDAwMDAsXHJcbiAgICAgICAgNnB4IDZweCAxMHB4IGdyYXk7XHJcbn1cclxuXHJcbi5tZW51SXRlbTpob3ZlciB7XHJcbiAgICB0ZXh0LXNoYWRvdzogM3B4IDNweCAzcHggIzdlMDAwMCxcclxuICAgICAgICA2cHggNnB4IDEwcHggZ3JheTtcclxuXHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxcHgsIDFweCk7XHJcblxyXG4gICAgY29sb3I6ICNGMTlBM0U7XHJcbn1cclxuXHJcbi5zZWxlY3RlZCB7XHJcbiAgICBjb2xvcjogI0ZFNUQyNjtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDM1dnc7XHJcbn1cclxuXHJcbi5kaXZpZGVyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbGluZUFuaW1hdGlvbiB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgd2lkdGg6IDI1dnc7XHJcbiAgICB9XHJcblxyXG4gICAgNTAlIHtcclxuICAgICAgICB3aWR0aDogMTV2dztcclxuICAgIH1cclxuXHJcbiAgICAxMDAlIHtcclxuICAgICAgICB3aWR0aDogMjV2dztcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzdGF0aWNBbmltYXRpb24ge1xyXG4gICAgMCUsIDYwJSB7XHJcbiAgICAgICAgdGV4dC1zaGFkb3c6IDNweCAzcHggM3B4ICMwMDAwMDAsXHJcbiAgICAgICAgICAgIDZweCA2cHggMTBweCBncmF5O1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xyXG4gICAgfVxyXG5cclxuICAgIDk2JSwgOTclIHtcclxuICAgICAgICB0ZXh0LXNoYWRvdzogM3B4IDNweCAzcHggcmVkLFxyXG4gICAgICAgICAgICA2cHggNnB4IDEwcHggZ3JheTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNXB4LCAwKTtcclxuICAgIH1cclxuXHJcbiAgICA5OCUsIDk5JSB7XHJcblxyXG4gICAgICAgIHRleHQtc2hhZG93OiA3cHggM3B4IDNweCBjeWFuLFxyXG4gICAgICAgICAgICA2cHggNnB4IDEwcHggZ3JheTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1cHgsIDApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAxMDAlIHtcclxuICAgICAgICB0ZXh0LXNoYWRvdzogMHB4IDNweCAzcHggeWVsbG93LFxyXG4gICAgICAgICAgICA2cHggNnB4IDEwcHggZ3JheTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNXB4LCAwKTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlSW5UZXh0IHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC04MHB4LCAwKTtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHRvIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG59XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKlRBQkxFVCovXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2MDBweCkge1xyXG4gICAgaHIge1xyXG4gICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMTAsIDEzLCAyMCwgMC4yMDUpLCAjN2UwMDAwLCByZ2JhKDEwLCAxMywgMjAsIDAuMjA1KSk7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBsaW5lQW5pbWF0aW9uIDBzIDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmxvZ28ge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiB0ZXV0b25pYztcclxuICAgIFxyXG4gICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgXHJcbiAgICAgICAgdGV4dC1zaGFkb3c6IDNweCAzcHggM3B4ICMwMDAwMDAsXHJcbiAgICAgICAgICAgIDZweCA2cHggMTBweCBncmF5O1xyXG4gICAgXHJcbiAgICAgICAgZm9udC1zaXplOiAxMDBweDtcclxuXHJcbiAgICBcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogM3ZoO1xyXG4gICAgXHJcbiAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAvKiBTYWZhcmkgKi9cclxuICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgIC8qIEZpcmVmb3ggKi9cclxuICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgLyogSUUxMCsvRWRnZSAqL1xyXG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgIC8qIFN0YW5kYXJkICovXHJcbiAgICBcclxuICAgICAgICBhbmltYXRpb246IHN0YXRpY0FuaW1hdGlvbiA2cyBpbmZpbml0ZTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIyMHB4KSB7XHJcbiAgICBociB7XHJcbiAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgxMCwgMTMsIDIwLCAwLjIwNSksICM3ZTAwMDAsIHJnYmEoMTAsIDEzLCAyMCwgMC4yMDUpKTtcclxuICAgICAgICBhbmltYXRpb246IGxpbmVBbmltYXRpb24gMHMgMDtcclxuICAgIH1cclxuXHJcbiAgICAubG9nbyB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHRldXRvbmljO1xyXG4gICAgXHJcbiAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBcclxuICAgICAgICB0ZXh0LXNoYWRvdzogM3B4IDNweCAzcHggIzAwMDAwMCxcclxuICAgICAgICAgICAgNnB4IDZweCAxMHB4IGdyYXk7XHJcbiAgICBcclxuICAgICAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICBcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogM3ZoO1xyXG4gICAgXHJcbiAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAvKiBTYWZhcmkgKi9cclxuICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgIC8qIEZpcmVmb3ggKi9cclxuICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgLyogSUUxMCsvRWRnZSAqL1xyXG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgIC8qIFN0YW5kYXJkICovXHJcbiAgICBcclxuICAgICAgICBhbmltYXRpb246IHN0YXRpY0FuaW1hdGlvbiA2cyBpbmZpbml0ZTtcclxuICAgIH1cclxuXHJcbiAgICAubWVudSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogM3ZoO1xyXG4gICAgICAgIHdpZHRoOiAyMHZ3O1xyXG4gICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDIwcHggNzBweCByZWQpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubWVudUl0ZW0ge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnRnJhbmNvaXMgT25lJywgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICBcclxuICAgICAgICB0ZXh0LXNoYWRvdzogM3B4IDNweCAzcHggIzAwMDAwMCxcclxuICAgICAgICAgICAgNnB4IDZweCAxMHB4IGdyYXk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qTU9CSUxFKi9cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTIwcHgpIHtcclxuICAgIGhyIHtcclxuICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDEwLCAxMywgMjAsIDAuMjA1KSwgIzdlMDAwMCwgcmdiYSgxMCwgMTMsIDIwLCAwLjIwNSkpO1xyXG4gICAgICAgIGFuaW1hdGlvbjogbGluZUFuaW1hdGlvbiAwcyAwO1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLmxvZ28ge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiB0ZXV0b25pYztcclxuICAgIFxyXG4gICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgXHJcbiAgICAgICAgdGV4dC1zaGFkb3c6IDNweCAzcHggM3B4ICMwMDAwMDAsXHJcbiAgICAgICAgICAgIDZweCA2cHggMTBweCBncmF5O1xyXG4gICAgXHJcbiAgICAgICAgZm9udC1zaXplOiA3MHB4O1xyXG4gICAgXHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTN2aDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTQ1JTtcclxuICAgIFxyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA2MHB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgXHJcbiAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAvKiBTYWZhcmkgKi9cclxuICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgIC8qIEZpcmVmb3ggKi9cclxuICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgLyogSUUxMCsvRWRnZSAqL1xyXG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgIC8qIFN0YW5kYXJkICovXHJcbiAgICBcclxuICAgICAgICBhbmltYXRpb246IHN0YXRpY0FuaW1hdGlvbiAwcyAwO1xyXG5cclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2JnLmpwZycpO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgfVxyXG5cclxuICAgIC5tZW51IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtNDVweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTMwdnc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDIwcHggNzBweCByZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIC5kaXZpZGVyIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDAuNXZ3O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDMuNXZ3O1xyXG5cclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5tZW51SXRlbSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdGcmFuY29pcyBPbmUnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcblxyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDJ2dztcclxuICAgIFxyXG4gICAgICAgIHRleHQtc2hhZG93OiAzcHggM3B4IDNweCAjMDAwMDAwLFxyXG4gICAgICAgICAgICA2cHggNnB4IDEwcHggZ3JheTtcclxuICAgIH1cclxuXHJcbiAgICAjc2lkZWJhciB7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHRvcDogM3ZoO1xyXG4gICAgICAgIGxlZnQ6IDMwdnc7XHJcbiAgICAgICAgei1pbmRleDogMTAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250ZW50IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNTBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTB2dztcclxuICAgIH1cclxuXHJcbiAgICBiciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gICAgaHIge1xyXG4gICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMTAsIDEzLCAyMCwgMC4yMDUpLCAjN2UwMDAwLCByZ2JhKDEwLCAxMywgMjAsIDAuMjA1KSk7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBsaW5lQW5pbWF0aW9uIDBzIDA7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAubG9nbyB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHRldXRvbmljO1xyXG4gICAgXHJcbiAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBcclxuICAgICAgICB0ZXh0LXNoYWRvdzogM3B4IDNweCAzcHggIzAwMDAwMCxcclxuICAgICAgICAgICAgNnB4IDZweCAxMHB4IGdyYXk7XHJcbiAgICBcclxuICAgICAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICBcclxuICAgICAgICBtYXJnaW4tdG9wOiAtM3ZoO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtNDUlO1xyXG4gICAgXHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDU1cHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBcclxuICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgIC8qIFNhZmFyaSAqL1xyXG4gICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgLyogRmlyZWZveCAqL1xyXG4gICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAvKiBJRTEwKy9FZGdlICovXHJcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgLyogU3RhbmRhcmQgKi9cclxuICAgIFxyXG4gICAgICAgIGFuaW1hdGlvbjogc3RhdGljQW5pbWF0aW9uIDBzIDA7XHJcblxyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYmcuanBnJyk7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuXHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIC5tZW51IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMzBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTMwdnc7XHJcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDIwcHggNzBweCByZWQpO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYigyMiwgMTAsIDEwLCAwKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmRpdmlkZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIH1cclxuXHJcbiAgICAubWVudUl0ZW0ge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnRnJhbmNvaXMgT25lJywgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG5cclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0dnc7XHJcblxyXG4gICAgICAgIHRleHQtc2hhZG93OiAzcHggM3B4IDNweCAjMDAwMDAwLFxyXG4gICAgICAgICAgICA2cHggNnB4IDEwcHggZ3JheTtcclxuICAgIH1cclxuXHJcbiAgICAjc2lkZWJhciB7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHRvcDogM3ZoO1xyXG4gICAgICAgIGxlZnQ6IDMwdnc7XHJcbiAgICAgICAgei1pbmRleDogMTAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250ZW50IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNTBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTB2dztcclxuICAgIH1cclxuXHJcbiAgICBiciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MTBweCkge1xyXG4gICAgaHIge1xyXG4gICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMTAsIDEzLCAyMCwgMC4yMDUpLCAjN2UwMDAwLCByZ2JhKDEwLCAxMywgMjAsIDAuMjA1KSk7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBsaW5lQW5pbWF0aW9uIDBzIDA7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAubG9nbyB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHRldXRvbmljO1xyXG4gICAgXHJcbiAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBcclxuICAgICAgICB0ZXh0LXNoYWRvdzogM3B4IDNweCAzcHggIzAwMDAwMCxcclxuICAgICAgICAgICAgNnB4IDZweCAxMHB4IGdyYXk7XHJcbiAgICBcclxuICAgICAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICBcclxuICAgICAgICBtYXJnaW4tdG9wOiAtM3ZoO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtNDUlO1xyXG4gICAgXHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDU1cHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBcclxuICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgIC8qIFNhZmFyaSAqL1xyXG4gICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgLyogRmlyZWZveCAqL1xyXG4gICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAvKiBJRTEwKy9FZGdlICovXHJcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgLyogU3RhbmRhcmQgKi9cclxuICAgIFxyXG4gICAgICAgIGFuaW1hdGlvbjogc3RhdGljQW5pbWF0aW9uIDBzIDA7XHJcblxyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYmcuanBnJyk7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuXHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIC5tZW51IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMzBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTMwdnc7XHJcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDIwcHggNzBweCByZWQpO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYigyMiwgMTAsIDEwLCAwKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmRpdmlkZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLm1lbnVJdGVtIHtcclxuICAgICAgICBmb250LWZhbWlseTogJ0ZyYW5jb2lzIE9uZScsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuXHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogNHZ3O1xyXG5cclxuICAgICAgICB0ZXh0LXNoYWRvdzogM3B4IDNweCAzcHggIzAwMDAwMCxcclxuICAgICAgICAgICAgNnB4IDZweCAxMHB4IGdyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgI3NpZGViYXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB0b3A6IDN2aDtcclxuICAgICAgICBsZWZ0OiAzMHZ3O1xyXG4gICAgICAgIHotaW5kZXg6IDEwMDtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTUwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwdnc7XHJcbiAgICB9XHJcblxyXG4gICAgYnIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      document.addEventListener('DOMContentLoaded', function () {
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
          return console.error(err);
        });
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map