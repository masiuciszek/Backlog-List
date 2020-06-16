webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./store/backlog_list/backlog.reducer.ts":
/*!***********************************************!*\
  !*** ./store/backlog_list/backlog.reducer.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _types_backlog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types.backlog */ \"./store/backlog_list/types.backlog.ts\");\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\nvar initialState = {\n  backlogs: [{\n    text: 'Learn Rust',\n    completed: false,\n    important: false\n  }, {\n    text: 'Learn to test applications',\n    completed: false,\n    important: true\n  }, {\n    text: 'Learn C',\n    completed: false,\n    important: true\n  }]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _types_backlog__WEBPACK_IMPORTED_MODULE_2__[\"ActionTypes\"].ADD_BACKLOG:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        backlogs: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.backlogs), [action.payload])\n      });\n\n    default:\n      return state;\n  }\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS9iYWNrbG9nX2xpc3QvYmFja2xvZy5yZWR1Y2VyLnRzPzQ5ZjMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiYmFja2xvZ3MiLCJ0ZXh0IiwiY29tcGxldGVkIiwiaW1wb3J0YW50Iiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiQWN0aW9uVHlwZXMiLCJBRERfQkFDS0xPRyIsInBheWxvYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxJQUFNQSxZQUFtQixHQUFHO0FBQzFCQyxVQUFRLEVBQUUsQ0FDUjtBQUNFQyxRQUFJLEVBQUUsWUFEUjtBQUVFQyxhQUFTLEVBQUUsS0FGYjtBQUdFQyxhQUFTLEVBQUU7QUFIYixHQURRLEVBTVI7QUFDRUYsUUFBSSxFQUFFLDRCQURSO0FBRUVDLGFBQVMsRUFBRSxLQUZiO0FBR0VDLGFBQVMsRUFBRTtBQUhiLEdBTlEsRUFXUjtBQUNFRixRQUFJLEVBQUUsU0FEUjtBQUVFQyxhQUFTLEVBQUUsS0FGYjtBQUdFQyxhQUFTLEVBQUU7QUFIYixHQVhRO0FBRGdCLENBQTVCO0FBbUJlLDJFQUE2RDtBQUFBLE1BQTVEQyxLQUE0RCx1RUFBN0NMLFlBQTZDO0FBQUEsTUFBL0JNLE1BQStCOztBQUMxRSxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLQywwREFBVyxDQUFDQyxXQUFqQjtBQUNFLDZDQUNLSixLQURMO0FBRUVKLGdCQUFRLHlHQUFNSSxLQUFLLENBQUNKLFFBQVosSUFBc0JLLE1BQU0sQ0FBQ0ksT0FBN0I7QUFGVjs7QUFLRjtBQUNFLGFBQU9MLEtBQVA7QUFSSjtBQVVELENBWEQiLCJmaWxlIjoiLi9zdG9yZS9iYWNrbG9nX2xpc3QvYmFja2xvZy5yZWR1Y2VyLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RhdGUsIEFjdGlvblR5cGVzLCBBY3Rpb25UeXBlc1JlZHVjZXIgfSBmcm9tICcuL3R5cGVzLmJhY2tsb2cnO1xuXG5jb25zdCBpbml0aWFsU3RhdGU6IFN0YXRlID0ge1xuICBiYWNrbG9nczogW1xuICAgIHtcbiAgICAgIHRleHQ6ICdMZWFybiBSdXN0JyxcbiAgICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gICAgICBpbXBvcnRhbnQ6IGZhbHNlLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ0xlYXJuIHRvIHRlc3QgYXBwbGljYXRpb25zJyxcbiAgICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gICAgICBpbXBvcnRhbnQ6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnTGVhcm4gQycsXG4gICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgICAgaW1wb3J0YW50OiB0cnVlLFxuICAgIH0sXG4gIF0sXG59O1xuZXhwb3J0IGRlZmF1bHQgKHN0YXRlOiBTdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBBY3Rpb25UeXBlc1JlZHVjZXIpID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQWN0aW9uVHlwZXMuQUREX0JBQ0tMT0c6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgYmFja2xvZ3M6IFsuLi5zdGF0ZS5iYWNrbG9ncywgYWN0aW9uLnBheWxvYWRdLFxuICAgICAgfTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/backlog_list/backlog.reducer.ts\n");

/***/ })

})