"use strict";
(self["webpackChunkngx_log_monitor"] = self["webpackChunkngx_log_monitor"] || []).push([["main"],{

/***/ 8225:
/*!********************************************************************!*\
  !*** ./projects/log-monitor/src/lib/helpers/log-message.helper.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   normalizeLogMessage: () => (/* binding */ normalizeLogMessage)
/* harmony export */ });
const normalizeLogMessage = msg => ({
  ...msg,
  type: msg.type ? msg.type : 'LOG',
  timestamp: msg.timestamp ? msg.timestamp : new Date().toLocaleString()
});

/***/ }),

/***/ 4521:
/*!***************************************************************!*\
  !*** ./projects/log-monitor/src/lib/log-monitor.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogMonitorComponent: () => (/* binding */ LogMonitorComponent)
/* harmony export */ });
/* harmony import */ var _helpers_log_message_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/log-message.helper */ 8225);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 9494);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);




const _c0 = ["container"];
const _c1 = a0 => ({
  "animated": a0
});
function LogMonitorComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r0.theme + "-theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u232A ", ctx_r0.title, "");
  }
}
function LogMonitorComponent_span_3_span_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u2718");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
}
function LogMonitorComponent_span_3_span_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u2714");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
}
function LogMonitorComponent_span_3_span_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u2771");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
}
function LogMonitorComponent_span_3_span_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u203C");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
}
function LogMonitorComponent_span_3_span_1_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u2139");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
}
function LogMonitorComponent_span_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LogMonitorComponent_span_3_span_1_ng_container_1_Template, 2, 0, "ng-container", 8)(2, LogMonitorComponent_span_3_span_1_ng_container_2_Template, 2, 0, "ng-container", 8)(3, LogMonitorComponent_span_3_span_1_ng_container_3_Template, 2, 0, "ng-container", 8)(4, LogMonitorComponent_span_3_span_1_ng_container_4_Template, 2, 0, "ng-container", 8)(5, LogMonitorComponent_span_3_span_1_ng_container_5_Template, 2, 0, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const log_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", log_r2.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "ERR");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "SUCCESS");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "LOG");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "WARN");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "INFO");
  }
}
function LogMonitorComponent_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LogMonitorComponent_span_3_span_1_Template, 6, 6, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const log_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("msg-item ", "msg-" + log_r2.type.toLowerCase(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c1, ctx_r0.animated));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.icons);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" [", log_r2.timestamp, "]: ", log_r2.message, " ");
  }
}
class LogMonitorComponent {
  constructor(zone, cd) {
    this.zone = zone;
    this.cd = cd;
    this.delay = 500;
    this.history = [];
    this.theme = 'dark';
    this.icons = true;
    this.customClass = 'log-container';
    this.animated = true;
    this._history = [];
  }
  ngOnInit() {
    if (this.logStream) {
      this._subr = this.logStream.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.delay)(this.delay)).subscribe(a => {
        this._history = [...this._history, (0,_helpers_log_message_helper__WEBPACK_IMPORTED_MODULE_0__.normalizeLogMessage)(a)];
        this.cd.detectChanges();
        this.zone.run(() => {
          setTimeout(() => this.scrollToBottom());
        });
      });
    }
  }
  ngOnDestroy() {
    if (this._subr) {
      this._subr.unsubscribe();
    }
  }
  ngOnChanges(changes) {
    if (changes['history']) {
      this._history = changes['history'].currentValue.map(_helpers_log_message_helper__WEBPACK_IMPORTED_MODULE_0__.normalizeLogMessage);
    }
  }
  ngAfterViewInit() {
    this.scrollToBottom();
  }
  scrollToBottom() {
    this.container.nativeElement.scrollTop = this.container.nativeElement.scrollHeight;
  }
  static {
    this.ɵfac = function LogMonitorComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LogMonitorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: LogMonitorComponent,
      selectors: [["log-monitor"]],
      viewQuery: function LogMonitorComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.container = _t.first);
        }
      },
      inputs: {
        delay: "delay",
        title: "title",
        logStream: "logStream",
        history: "history",
        theme: "theme",
        icons: "icons",
        customClass: "customClass",
        animated: "animated"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
      decls: 4,
      vars: 3,
      consts: [["container", ""], ["class", "title-bar", 3, "ngClass", 4, "ngIf"], [1, "container", 3, "ngClass"], [3, "class", "ngClass", 4, "ngFor", "ngForOf"], [1, "title-bar", 3, "ngClass"], [3, "ngClass"], [3, "ngSwitch", 4, "ngIf"], [3, "ngSwitch"], [4, "ngSwitchCase"]],
      template: function LogMonitorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, LogMonitorComponent_div_0_Template, 2, 2, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, LogMonitorComponent_span_3_Template, 3, 9, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.title);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.theme + "-theme");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx._history);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgSwitchCase],
      styles: [".container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  overflow-y: auto;\n  font-family: \"Lucida Console\", Monaco, monospace, sans-serif;\n}\n\n.animated[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadein 260ms;\n}\n\n@keyframes _ngcontent-%COMP%_fadein {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n}\n.title-bar[_ngcontent-%COMP%] {\n  padding: 5px;\n  font-weight: 600;\n}\n\n.dark-theme.title-bar[_ngcontent-%COMP%] {\n  border-bottom: solid 1px #3c3c3c;\n  background: #1f1f1f;\n}\n\n.light-theme.title-bar[_ngcontent-%COMP%] {\n  border-bottom: solid 1px #a8acad;\n  background: #dbdfe0;\n}\n\n.msg-item[_ngcontent-%COMP%] {\n  display: block;\n  margin-left: 6px;\n  font-size: 0.85em;\n}\n\n.msg-list[_ngcontent-%COMP%] {\n  margin: 0;\n  height: 100%;\n}\n\n.light-theme[_ngcontent-%COMP%] {\n  color: #212121;\n  background: #ECF0F1;\n}\n.light-theme[_ngcontent-%COMP%]   .msg-info[_ngcontent-%COMP%] {\n  color: #2980B9;\n}\n.light-theme[_ngcontent-%COMP%]   .msg-err[_ngcontent-%COMP%] {\n  color: #C0392B;\n}\n.light-theme[_ngcontent-%COMP%]   .msg-success[_ngcontent-%COMP%] {\n  color: #27AE60;\n}\n.light-theme[_ngcontent-%COMP%]   .msg-warn[_ngcontent-%COMP%] {\n  color: #F39C12;\n}\n\n.dark-theme[_ngcontent-%COMP%] {\n  color: #ECF0F1;\n  background: #212121;\n}\n.dark-theme[_ngcontent-%COMP%]   .msg-info[_ngcontent-%COMP%] {\n  color: #3498DB;\n}\n.dark-theme[_ngcontent-%COMP%]   .msg-err[_ngcontent-%COMP%] {\n  color: #E74C3C;\n}\n.dark-theme[_ngcontent-%COMP%]   .msg-success[_ngcontent-%COMP%] {\n  color: #2ECC71;\n}\n.dark-theme[_ngcontent-%COMP%]   .msg-warn[_ngcontent-%COMP%] {\n  color: #F1C40F;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZy1tb25pdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVCQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0REFBQTtBQXRCRjs7QUF5QkE7RUFDRSx1QkFBQTtBQXRCRjs7QUF5QkE7RUFDRTtJQUNFLFVBQUE7SUFDQSw0QkFBQTtFQXRCRjtFQXdCQTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtFQXRCRjtBQUNGO0FBMEJBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FBeEJGOztBQTJCQTtFQUNFLGdDQUFBO0VBQ0EsbUJBdkNlO0FBZWpCOztBQTJCQTtFQUNFLGdDQUFBO0VBQ0EsbUJBN0NnQjtBQXFCbEI7O0FBNEJBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUF6QkY7O0FBNEJBO0VBQ0UsU0FBQTtFQUNBLFlBQUE7QUF6QkY7O0FBNEJBO0VBRUUsY0FqRUs7RUFrRUwsbUJBbkVNO0FBeUNSO0FBNkJFO0VBQ0UsY0ExRUc7QUErQ1A7QUE4QkU7RUFDRSxjQXZGRTtBQTJETjtBQStCRTtFQUNFLGNBckZJO0FBd0RSO0FBZ0NFO0VBQ0UsY0E1Rks7QUE4RFQ7O0FBa0NBO0VBRUUsY0F6Rk07RUEwRk4sbUJBekZLO0FBeURQO0FBa0NFO0VBQ0UsY0EvRlM7QUErRGI7QUFtQ0U7RUFDRSxjQTVHUTtBQTJFWjtBQW9DRTtFQUNFLGNBMUdVO0FBd0VkO0FBcUNFO0VBQ0UsY0FqSFc7QUE4RWYiLCJmaWxlIjoibG9nLW1vbml0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcmVkOiAjQzAzOTJCO1xuJHJlZC1saWdodDogI0U3NEMzQztcblxuJG9yYW5nZTogI0YzOUMxMjtcbiRvcmFuZ2UtbGlnaHQ6ICNGMUM0MEY7XG5cbiRncmVlbjogIzI3QUU2MDtcbiRncmVlbi1saWdodDogIzJFQ0M3MTtcblxuJGJsdWU6ICMyOTgwQjk7XG4kYmx1ZS1saWdodDogIzM0OThEQjtcblxuJGxpZ2h0OiAjRUNGMEYxO1xuJGRhcms6ICMyMTIxMjE7XG5cblxuJGxpZ2h0LXRpdGxlLWJhcjogI2RiZGZlMDtcbiRkYXJrLXRpdGxlLWJhcjogIzFmMWYxZjtcblxuJGRhcmstbGlnaHQ6ICMzYzNjM2M7XG4kbGlnaHQtZGFyazogI2E4YWNhZDtcblxuXG4uY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBmb250LWZhbWlseTogXCJMdWNpZGEgQ29uc29sZVwiLCBNb25hY28sICBtb25vc3BhY2UsIHNhbnMtc2VyaWY7XG59XG5cbi5hbmltYXRlZCB7XG4gIGFuaW1hdGlvbjogZmFkZWluIDI2MG1zO1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVpbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KVxuICB9XG4gIHRvICAge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweClcbiAgfVxufVxuXG5cbi50aXRsZS1iYXJ7XG4gIHBhZGRpbmc6IDVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmRhcmstdGhlbWUudGl0bGUtYmFye1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggJGRhcmstbGlnaHQ7XG4gIGJhY2tncm91bmQ6ICRkYXJrLXRpdGxlLWJhciA7XG59XG5cbi5saWdodC10aGVtZS50aXRsZS1iYXJ7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAkbGlnaHQtZGFyaztcbiAgYmFja2dyb3VuZDogJGxpZ2h0LXRpdGxlLWJhcjtcbn1cblxuXG4ubXNnLWl0ZW17XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogNnB4O1xuICBmb250LXNpemU6IDAuODVlbTtcbn1cblxuLm1zZy1saXN0e1xuICBtYXJnaW46IDA7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmxpZ2h0LXRoZW1lIHtcblxuICBjb2xvcjogJGRhcms7XG4gIGJhY2tncm91bmQ6ICRsaWdodDtcblxuXG4gIC5tc2ctaW5mbyB7XG4gICAgY29sb3I6ICRibHVlO1xuICB9XG5cbiAgLm1zZy1lcnIge1xuICAgIGNvbG9yOiAkcmVkO1xuICB9XG5cbiAgLm1zZy1zdWNjZXNzIHtcbiAgICBjb2xvcjogJGdyZWVuO1xuICB9XG5cbiAgLm1zZy13YXJuIHtcbiAgICBjb2xvcjogJG9yYW5nZTtcbiAgfVxufVxuXG4uZGFyay10aGVtZSB7XG5cbiAgY29sb3I6ICRsaWdodDtcbiAgYmFja2dyb3VuZDogJGRhcms7XG5cbiAgLm1zZy1pbmZvIHtcbiAgICBjb2xvcjogJGJsdWUtbGlnaHQ7XG4gIH1cblxuICAubXNnLWVyciB7XG4gICAgY29sb3I6ICRyZWQtbGlnaHQ7XG4gIH1cblxuICAubXNnLXN1Y2Nlc3Mge1xuICAgIGNvbG9yOiAkZ3JlZW4tbGlnaHQ7XG4gIH1cblxuICAubXNnLXdhcm4ge1xuICAgIGNvbG9yOiAkb3JhbmdlLWxpZ2h0O1xuICB9XG59XG5cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2xvZy1tb25pdG9yL3NyYy9saWIvbG9nLW1vbml0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLDREQUFBO0FBdEJGOztBQXlCQTtFQUNFLHVCQUFBO0FBdEJGOztBQXlCQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLDRCQUFBO0VBdEJGO0VBd0JBO0lBQ0UsVUFBQTtJQUNBLDBCQUFBO0VBdEJGO0FBQ0Y7QUEwQkE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUF4QkY7O0FBMkJBO0VBQ0UsZ0NBQUE7RUFDQSxtQkF2Q2U7QUFlakI7O0FBMkJBO0VBQ0UsZ0NBQUE7RUFDQSxtQkE3Q2dCO0FBcUJsQjs7QUE0QkE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQXpCRjs7QUE0QkE7RUFDRSxTQUFBO0VBQ0EsWUFBQTtBQXpCRjs7QUE0QkE7RUFFRSxjQWpFSztFQWtFTCxtQkFuRU07QUF5Q1I7QUE2QkU7RUFDRSxjQTFFRztBQStDUDtBQThCRTtFQUNFLGNBdkZFO0FBMkROO0FBK0JFO0VBQ0UsY0FyRkk7QUF3RFI7QUFnQ0U7RUFDRSxjQTVGSztBQThEVDs7QUFrQ0E7RUFFRSxjQXpGTTtFQTBGTixtQkF6Rks7QUF5RFA7QUFrQ0U7RUFDRSxjQS9GUztBQStEYjtBQW1DRTtFQUNFLGNBNUdRO0FBMkVaO0FBb0NFO0VBQ0UsY0ExR1U7QUF3RWQ7QUFxQ0U7RUFDRSxjQWpIVztBQThFZjtBQUNBLHdwR0FBd3BHIiwic291cmNlc0NvbnRlbnQiOlsiJHJlZDogI0MwMzkyQjtcbiRyZWQtbGlnaHQ6ICNFNzRDM0M7XG5cbiRvcmFuZ2U6ICNGMzlDMTI7XG4kb3JhbmdlLWxpZ2h0OiAjRjFDNDBGO1xuXG4kZ3JlZW46ICMyN0FFNjA7XG4kZ3JlZW4tbGlnaHQ6ICMyRUNDNzE7XG5cbiRibHVlOiAjMjk4MEI5O1xuJGJsdWUtbGlnaHQ6ICMzNDk4REI7XG5cbiRsaWdodDogI0VDRjBGMTtcbiRkYXJrOiAjMjEyMTIxO1xuXG5cbiRsaWdodC10aXRsZS1iYXI6ICNkYmRmZTA7XG4kZGFyay10aXRsZS1iYXI6ICMxZjFmMWY7XG5cbiRkYXJrLWxpZ2h0OiAjM2MzYzNjO1xuJGxpZ2h0LWRhcms6ICNhOGFjYWQ7XG5cblxuLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgZm9udC1mYW1pbHk6IFwiTHVjaWRhIENvbnNvbGVcIiwgTW9uYWNvLCAgbW9ub3NwYWNlLCBzYW5zLXNlcmlmO1xufVxuXG4uYW5pbWF0ZWQge1xuICBhbmltYXRpb246IGZhZGVpbiAyNjBtcztcbn1cblxuQGtleWZyYW1lcyBmYWRlaW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweClcbiAgfVxuICB0byAgIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpXG4gIH1cbn1cblxuXG4udGl0bGUtYmFye1xuICBwYWRkaW5nOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5kYXJrLXRoZW1lLnRpdGxlLWJhcntcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICRkYXJrLWxpZ2h0O1xuICBiYWNrZ3JvdW5kOiAkZGFyay10aXRsZS1iYXIgO1xufVxuXG4ubGlnaHQtdGhlbWUudGl0bGUtYmFye1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggJGxpZ2h0LWRhcms7XG4gIGJhY2tncm91bmQ6ICRsaWdodC10aXRsZS1iYXI7XG59XG5cblxuLm1zZy1pdGVte1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgZm9udC1zaXplOiAwLjg1ZW07XG59XG5cbi5tc2ctbGlzdHtcbiAgbWFyZ2luOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5saWdodC10aGVtZSB7XG5cbiAgY29sb3I6ICRkYXJrO1xuICBiYWNrZ3JvdW5kOiAkbGlnaHQ7XG5cblxuICAubXNnLWluZm8ge1xuICAgIGNvbG9yOiAkYmx1ZTtcbiAgfVxuXG4gIC5tc2ctZXJyIHtcbiAgICBjb2xvcjogJHJlZDtcbiAgfVxuXG4gIC5tc2ctc3VjY2VzcyB7XG4gICAgY29sb3I6ICRncmVlbjtcbiAgfVxuXG4gIC5tc2ctd2FybiB7XG4gICAgY29sb3I6ICRvcmFuZ2U7XG4gIH1cbn1cblxuLmRhcmstdGhlbWUge1xuXG4gIGNvbG9yOiAkbGlnaHQ7XG4gIGJhY2tncm91bmQ6ICRkYXJrO1xuXG4gIC5tc2ctaW5mbyB7XG4gICAgY29sb3I6ICRibHVlLWxpZ2h0O1xuICB9XG5cbiAgLm1zZy1lcnIge1xuICAgIGNvbG9yOiAkcmVkLWxpZ2h0O1xuICB9XG5cbiAgLm1zZy1zdWNjZXNzIHtcbiAgICBjb2xvcjogJGdyZWVuLWxpZ2h0O1xuICB9XG5cbiAgLm1zZy13YXJuIHtcbiAgICBjb2xvcjogJG9yYW5nZS1saWdodDtcbiAgfVxufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 6524:
/*!************************************************************!*\
  !*** ./projects/log-monitor/src/lib/log-monitor.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogMonitorModule: () => (/* binding */ LogMonitorModule)
/* harmony export */ });
/* harmony import */ var _log_monitor_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log-monitor.component */ 4521);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);



class LogMonitorModule {
  static {
    this.ɵfac = function LogMonitorModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LogMonitorModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: LogMonitorModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LogMonitorModule, {
    declarations: [_log_monitor_component__WEBPACK_IMPORTED_MODULE_0__.LogMonitorComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
    exports: [_log_monitor_component__WEBPACK_IMPORTED_MODULE_0__.LogMonitorComponent]
  });
})();

/***/ }),

/***/ 1423:
/*!******************************************************************!*\
  !*** ./projects/log-monitor/src/lib/models/log-message.model.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 7837:
/*!************************************************!*\
  !*** ./projects/log-monitor/src/public-api.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogMonitorComponent: () => (/* reexport safe */ _lib_log_monitor_component__WEBPACK_IMPORTED_MODULE_0__.LogMonitorComponent),
/* harmony export */   LogMonitorModule: () => (/* reexport safe */ _lib_log_monitor_module__WEBPACK_IMPORTED_MODULE_1__.LogMonitorModule)
/* harmony export */ });
/* harmony import */ var _lib_log_monitor_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/log-monitor.component */ 4521);
/* harmony import */ var _lib_log_monitor_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/log-monitor.module */ 6524);
/* harmony import */ var _lib_models_log_message_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/models/log-message.model */ 1423);
/*
 * Public API Surface of ngx-log-monitor
 */




/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6320);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 3602);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 5443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _projects_log_monitor_src_lib_log_monitor_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../projects/log-monitor/src/lib/log-monitor.component */ 4521);




class AppComponent {
  constructor() {
    this.logs = [{
      message: 'A simple log message'
    }, {
      message: 'A success message',
      type: 'SUCCESS'
    }, {
      message: 'A warning message',
      type: 'WARN'
    }, {
      message: 'An error message',
      type: 'ERR'
    }, {
      message: 'An info message',
      type: 'INFO'
    }];
    this.logStream$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.timer)(0, 1000).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(this.logs.length), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(i => this.logs[i]));
  }
  static {
    this.ɵfac = function AppComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 30,
      vars: 9,
      consts: [[1, "container"], [1, "title"], ["theme", "dark", 2, "margin", "5px", 3, "logStream"], ["theme", "light", 2, "margin", "5px", 3, "logStream"], ["title", "Admin logs", 2, "margin", "5px", 3, "logStream"], [2, "margin", "5px", 3, "logStream", "icons"], [2, "margin", "5px", 3, "logStream", "history"], [2, "margin", "5px", 3, "logStream", "animated"], [1, "footer"], ["target", "_blank", "href", "https://twitter.com/avatsaev"], [1, "fab", "fa-twitter"], ["target", "_blank", "href", "https://github.com/avatsaev/ngx-log-monitor"], [1, "fab", "fa-github"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "NGX Log Monitor");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Dark theme:");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "log-monitor", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "span", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Light theme:");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "log-monitor", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "span", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "With title dark:");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "log-monitor", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "span", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "No icons:");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "log-monitor", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "span", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Hydrated log history:");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "log-monitor", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "span", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "No animation:");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "log-monitor", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, " Created by ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "@avatsaev ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, " Source code on ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "a", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, " GitHub ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("logStream", ctx.logStream$);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("logStream", ctx.logStream$);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("logStream", ctx.logStream$);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("logStream", ctx.logStream$)("icons", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("logStream", ctx.logStream$)("history", ctx.logs);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("logStream", ctx.logStream$)("animated", false);
        }
      },
      dependencies: [_projects_log_monitor_src_lib_log_monitor_component__WEBPACK_IMPORTED_MODULE_0__.LogMonitorComponent],
      styles: [".container[_ngcontent-%COMP%] {\n  height: 60px;\n  padding-top: 30px;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  display: block;\n  margin-left: 10px;\n}\n\nh1[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n.footer[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  width: 100%;\n  font-size: 14px;\n  color: #232323;\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUdBO0VBQ0UsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUFBRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgaGVpZ2h0OiA2MHB4O1xuICBwYWRkaW5nLXRvcDogMzBweDtcbn1cblxuLnRpdGxle1xuICBmb250LXNpemU6IDE4cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuXG5oMXtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5mb290ZXJ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMjMyMzIzO1xuICBtYXJnaW46IDEwcHg7XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBR0E7RUFDRSxpQkFBQTtBQUFGOztBQUdBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQUFGO0FBQ0EsNHpCQUE0ekIiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgaGVpZ2h0OiA2MHB4O1xuICBwYWRkaW5nLXRvcDogMzBweDtcbn1cblxuLnRpdGxle1xuICBmb250LXNpemU6IDE4cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuXG5oMXtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5mb290ZXJ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMjMyMzIzO1xuICBtYXJnaW46IDEwcHg7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var ngx_log_monitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-log-monitor */ 7837);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);




class AppModule {
  static {
    this.ɵfac = function AppModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule, ngx_log_monitor__WEBPACK_IMPORTED_MODULE_1__.LogMonitorModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule, ngx_log_monitor__WEBPACK_IMPORTED_MODULE_1__.LogMonitorModule]
  });
})();

/***/ }),

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 5312);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.log(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map