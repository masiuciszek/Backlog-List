webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/backlogList/Backlog.list.tsx":
/*!*************************************************!*\
  !*** ./components/backlogList/Backlog.list.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _BacklogItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BacklogItem */ \"./components/backlogList/BacklogItem.tsx\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/masiuciszek/web-dev/myWebProj/backlog_list/components/backlogList/Backlog.list.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"];\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\nvar BacklogList = function BacklogList() {\n  _s();\n\n  var selectBacklogs = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useSelector\"])(function (state) {\n    return state.backlogs.backlogs;\n  });\n  return __jsx(StyledBacklog, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 5\n    }\n  }, __jsx(ListStyles, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }\n  }, selectBacklogs.map(function (item) {\n    return __jsx(_BacklogItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      key: item.text,\n      item: item,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 11\n      }\n    });\n  })));\n};\n\n_s(BacklogList, \"pED95IVxQId0zxyZfozON1ePI5s=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useSelector\"]];\n});\n\n_c = BacklogList;\nvar StyledBacklog = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject());\n_c2 = StyledBacklog;\nvar ListStyles = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].ul(_templateObject2());\n_c3 = ListStyles;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BacklogList);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"BacklogList\");\n$RefreshReg$(_c2, \"StyledBacklog\");\n$RefreshReg$(_c3, \"ListStyles\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2JhY2tsb2dMaXN0L0JhY2tsb2cubGlzdC50c3g/ODBhMCJdLCJuYW1lcyI6WyJCYWNrbG9nTGlzdCIsInNlbGVjdEJhY2tsb2dzIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImJhY2tsb2dzIiwibWFwIiwiaXRlbSIsInRleHQiLCJTdHlsZWRCYWNrbG9nIiwic3R5bGVkIiwiZGl2IiwiTGlzdFN0eWxlcyIsInVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBOztBQUlBLElBQU1BLFdBQTRCLEdBQUcsU0FBL0JBLFdBQStCLEdBQU07QUFBQTs7QUFDekMsTUFBTUMsY0FBYyxHQUFHQywrREFBVyxDQUNoQyxVQUFDQyxLQUFEO0FBQUEsV0FBcUJBLEtBQUssQ0FBQ0MsUUFBTixDQUFlQSxRQUFwQztBQUFBLEdBRGdDLENBQWxDO0FBSUEsU0FDRSxNQUFDLGFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dILGNBQWMsQ0FBQ0ksR0FBZixDQUFtQixVQUFDQyxJQUFEO0FBQUEsV0FDbEIsTUFBQyxvREFBRDtBQUFhLFNBQUcsRUFBRUEsSUFBSSxDQUFDQyxJQUF2QjtBQUE2QixVQUFJLEVBQUVELElBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEa0I7QUFBQSxHQUFuQixDQURILENBREYsQ0FERjtBQVNELENBZEQ7O0dBQU1OLFc7VUFDbUJFLHVEOzs7S0FEbkJGLFc7QUFnQk4sSUFBTVEsYUFBYSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWLG1CQUFuQjtNQUFNRixhO0FBRU4sSUFBTUcsVUFBVSxHQUFHRix5REFBTSxDQUFDRyxFQUFWLG9CQUFoQjtNQUFNRCxVO0FBQ1NYLDBFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9iYWNrbG9nTGlzdC9CYWNrbG9nLmxpc3QudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tICcuLi8uLi9zdG9yZSc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBCYWNrbG9nSXRlbSBmcm9tICcuL0JhY2tsb2dJdGVtJztcblxuaW50ZXJmYWNlIFByb3BzIHt9XG5cbmNvbnN0IEJhY2tsb2dMaXN0OiBSZWFjdC5GQzxQcm9wcz4gPSAoKSA9PiB7XG4gIGNvbnN0IHNlbGVjdEJhY2tsb2dzID0gdXNlU2VsZWN0b3IoXG4gICAgKHN0YXRlOiBBcHBTdGF0ZSkgPT4gc3RhdGUuYmFja2xvZ3MuYmFja2xvZ3MsXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkQmFja2xvZz5cbiAgICAgIDxMaXN0U3R5bGVzPlxuICAgICAgICB7c2VsZWN0QmFja2xvZ3MubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgPEJhY2tsb2dJdGVtIGtleT17aXRlbS50ZXh0fSBpdGVtPXtpdGVtfSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvTGlzdFN0eWxlcz5cbiAgICA8L1N0eWxlZEJhY2tsb2c+XG4gICk7XG59O1xuXG5jb25zdCBTdHlsZWRCYWNrbG9nID0gc3R5bGVkLmRpdmBgO1xuXG5jb25zdCBMaXN0U3R5bGVzID0gc3R5bGVkLnVsYGA7XG5leHBvcnQgZGVmYXVsdCBCYWNrbG9nTGlzdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/backlogList/Backlog.list.tsx\n");

/***/ }),

/***/ "./components/backlogList/BacklogItem.tsx":
/*!************************************************!*\
  !*** ./components/backlogList/BacklogItem.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/masiuciszek/web-dev/myWebProj/backlog_list/components/backlogList/BacklogItem.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"];\n\n\nvar BacklogItem = function BacklogItem() {\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }, ' ', __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }\n  }, \" Legia CWSKS \"), ' ');\n};\n\n_c = BacklogItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BacklogItem);\n\nvar _c;\n\n$RefreshReg$(_c, \"BacklogItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2JhY2tsb2dMaXN0L0JhY2tsb2dJdGVtLnRzeD9iMDVmIl0sIm5hbWVzIjpbIkJhY2tsb2dJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBSUEsSUFBTUEsV0FBNEIsR0FBRyxTQUEvQkEsV0FBK0IsR0FBTTtBQUN6QyxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRyxHQURILEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRixFQUV5QixHQUZ6QixDQURGO0FBTUQsQ0FQRDs7S0FBTUEsVztBQVFTQSwwRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvYmFja2xvZ0xpc3QvQmFja2xvZ0l0ZW0udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbnRlcmZhY2UgUHJvcHMge31cblxuY29uc3QgQmFja2xvZ0l0ZW06IFJlYWN0LkZDPFByb3BzPiA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgeycgJ31cbiAgICAgIDxoMT4gTGVnaWEgQ1dTS1MgPC9oMT57JyAnfVxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IEJhY2tsb2dJdGVtO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/backlogList/BacklogItem.tsx\n");

/***/ })

})