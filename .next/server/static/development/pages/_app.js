module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/layout/GlobalStyles.tsx":
/*!********************************************!*\
  !*** ./components/layout/GlobalStyles.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n // font-family: 'Noto Sans HK', sans-serif;\n// font-family: 'Quattrocento Sans', sans-serif;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (styled_components__WEBPACK_IMPORTED_MODULE_0__[\"createGlobalStyle\"]`\n  *::before,*::after,*{\n      margin: 0;\n      padding: 0;\n      box-sizing: inherit;\n  }\n\n  html {\n      font-size: ${props => props.theme.appSize};\n      font-family: 'Noto Sans HK', sans-serif;\n    }\n    body {\n      box-sizing: border-box;\n      font-family: 'Noto Sans HK', sans-serif;\n      padding: 0;\n      margin: 0;\n      font-size: 1.5rem;\n      line-height: 2;\n    }\n    ul{\n      list-style:none;\n    }\n    a {\n      text-decoration: none;\n      color: ${props => props.theme.colors.white};\n      font-size: ${props => props.theme.size.a};\n      font-family: 'Quattrocento Sans', sans-serif;\n    }\n\n    h1{\n      font-size: ${props => props.theme.size.h1};\n      font-family: 'Quattrocento Sans', sans-serif;\n    }\n    h2{\n      font-size: ${props => props.theme.size.h2};\n\n    }\n    h3{\n      font-size: ${props => props.theme.size.h3};\n\n    }\n`);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9HbG9iYWxTdHlsZXMudHN4Pzg3OGMiXSwibmFtZXMiOlsiY3JlYXRlR2xvYmFsU3R5bGUiLCJwcm9wcyIsInRoZW1lIiwiYXBwU2l6ZSIsImNvbG9ycyIsIndoaXRlIiwic2l6ZSIsImEiLCJoMSIsImgyIiwiaDMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtDQUVBO0FBRUE7O0FBRWVBLGtJQUFrQjs7Ozs7Ozs7bUJBUWJDLEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE9BQVE7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFnQmxDRixLQUFELElBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZRSxNQUFaLENBQW1CQyxLQUFNO21CQUMvQkosS0FBRCxJQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUksSUFBWixDQUFpQkMsQ0FBRTs7Ozs7bUJBSzdCTixLQUFELElBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZSSxJQUFaLENBQWlCRSxFQUFHOzs7O21CQUk5QlAsS0FBRCxJQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUksSUFBWixDQUFpQkcsRUFBRzs7OzttQkFJOUJSLEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlJLElBQVosQ0FBaUJJLEVBQUc7OztDQXRDbEQiLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC9HbG9iYWxTdHlsZXMudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbi8vIGZvbnQtZmFtaWx5OiAnTm90byBTYW5zIEhLJywgc2Fucy1zZXJpZjtcblxuLy8gZm9udC1mYW1pbHk6ICdRdWF0dHJvY2VudG8gU2FucycsIHNhbnMtc2VyaWY7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUdsb2JhbFN0eWxlYFxuICAqOjpiZWZvcmUsKjo6YWZ0ZXIsKntcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xuICB9XG5cbiAgaHRtbCB7XG4gICAgICBmb250LXNpemU6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5hcHBTaXplfTtcbiAgICAgIGZvbnQtZmFtaWx5OiAnTm90byBTYW5zIEhLJywgc2Fucy1zZXJpZjtcbiAgICB9XG4gICAgYm9keSB7XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgZm9udC1mYW1pbHk6ICdOb3RvIFNhbnMgSEsnLCBzYW5zLXNlcmlmO1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDI7XG4gICAgfVxuICAgIHVse1xuICAgICAgbGlzdC1zdHlsZTpub25lO1xuICAgIH1cbiAgICBhIHtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLndoaXRlfTtcbiAgICAgIGZvbnQtc2l6ZTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLnNpemUuYX07XG4gICAgICBmb250LWZhbWlseTogJ1F1YXR0cm9jZW50byBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICB9XG5cbiAgICBoMXtcbiAgICAgIGZvbnQtc2l6ZTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLnNpemUuaDF9O1xuICAgICAgZm9udC1mYW1pbHk6ICdRdWF0dHJvY2VudG8gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgfVxuICAgIGgye1xuICAgICAgZm9udC1zaXplOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuc2l6ZS5oMn07XG5cbiAgICB9XG4gICAgaDN7XG4gICAgICBmb250LXNpemU6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5zaXplLmgzfTtcblxuICAgIH1cbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/layout/GlobalStyles.tsx\n");

/***/ }),

/***/ "./components/layout/index.tsx":
/*!*************************************!*\
  !*** ./components/layout/index.tsx ***!
  \*************************************/
/*! exports provided: Page, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Page\", function() { return Page; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _GlobalStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GlobalStyles */ \"./components/layout/GlobalStyles.tsx\");\n/* harmony import */ var _styled_utils_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styled/utils/flex */ \"./components/styled/utils/flex.tsx\");\nvar _jsxFileName = \"/Users/masiuciszek/web-dev/myWebProj/backlog_list/components/layout/index.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"];\n\n\n\n\nconst theme = {\n  appSize: '10px',\n  shadow: {\n    elevations: ['box-shadow: inset 0 7px 9px -7px rgba(0,0,0, 0.7)', 'box-shadow: 0 1px 3px rgba(0,0,0, 0.12), 0 1px 2px rgba(0,0,0, 0.24)', 'box-shadow: 0 3px 6px rgba(0,0,0, 0.16), 0 3px 6px rgba(0,0,0, 0.23)', 'box-shadow: 3px 2px rgba(42, 43, 49,.3)']\n  },\n  colors: {\n    primary: '#031326',\n    primaryShadow: 'rgba(3, 19, 38,.6)',\n    secondary: '#031326',\n    secondaryShadow: 'rgba(47, 68, 92,.6)',\n    black: '#030506',\n    white: '#fff',\n    offWhite: '#F1EFEE'\n  },\n  brakePoints: {\n    small: 400,\n    medium: 960,\n    large: 1140\n  },\n  size: {\n    h1: '50px',\n    h2: '40px',\n    h3: '30px',\n    h4: '27px',\n    h5: '22px',\n    p: '18px',\n    a: '16px',\n    maxWidth: '1100px'\n  },\n  transition: {\n    mainTransition: 'all .3s linear',\n    secondaryTransition: 'all 0.3s ease-in-out',\n    quickTransition: 'all 200ms ease-in-out'\n  }\n};\nconst Page = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section`\n  max-width: ${({\n  theme\n}) => theme.size.maxWidth};\n  height: 100%;\n  margin: 0 auto;\n  ${Object(_styled_utils_flex__WEBPACK_IMPORTED_MODULE_3__[\"handleFlex\"])('column', 'center', 'center')};\n`;\nconst Main = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.main`\n  flex-grow: 1 auto;\n`;\n\nconst Layout = ({\n  children\n}) => {\n  return __jsx(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"ThemeProvider\"], {\n    theme: theme,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 5\n    }\n  }, __jsx(_GlobalStyles__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }\n  }), __jsx(Main, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 7\n    }\n  }, children));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9pbmRleC50c3g/OTUwNCJdLCJuYW1lcyI6WyJ0aGVtZSIsImFwcFNpemUiLCJzaGFkb3ciLCJlbGV2YXRpb25zIiwiY29sb3JzIiwicHJpbWFyeSIsInByaW1hcnlTaGFkb3ciLCJzZWNvbmRhcnkiLCJzZWNvbmRhcnlTaGFkb3ciLCJibGFjayIsIndoaXRlIiwib2ZmV2hpdGUiLCJicmFrZVBvaW50cyIsInNtYWxsIiwibWVkaXVtIiwibGFyZ2UiLCJzaXplIiwiaDEiLCJoMiIsImgzIiwiaDQiLCJoNSIsInAiLCJhIiwibWF4V2lkdGgiLCJ0cmFuc2l0aW9uIiwibWFpblRyYW5zaXRpb24iLCJzZWNvbmRhcnlUcmFuc2l0aW9uIiwicXVpY2tUcmFuc2l0aW9uIiwiUGFnZSIsInN0eWxlZCIsInNlY3Rpb24iLCJoYW5kbGVGbGV4IiwiTWFpbiIsIm1haW4iLCJMYXlvdXQiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBTUEsTUFBTUEsS0FBbUIsR0FBRztBQUMxQkMsU0FBTyxFQUFFLE1BRGlCO0FBRTFCQyxRQUFNLEVBQUU7QUFDTkMsY0FBVSxFQUFFLENBQ1YsbURBRFUsRUFFVixzRUFGVSxFQUdWLHNFQUhVLEVBSVYseUNBSlU7QUFETixHQUZrQjtBQVUxQkMsUUFBTSxFQUFFO0FBQ05DLFdBQU8sRUFBRSxTQURIO0FBRU5DLGlCQUFhLEVBQUUsb0JBRlQ7QUFHTkMsYUFBUyxFQUFFLFNBSEw7QUFJTkMsbUJBQWUsRUFBRSxxQkFKWDtBQUtOQyxTQUFLLEVBQUUsU0FMRDtBQU1OQyxTQUFLLEVBQUUsTUFORDtBQU9OQyxZQUFRLEVBQUU7QUFQSixHQVZrQjtBQW1CMUJDLGFBQVcsRUFBRTtBQUNYQyxTQUFLLEVBQUUsR0FESTtBQUVYQyxVQUFNLEVBQUUsR0FGRztBQUdYQyxTQUFLLEVBQUU7QUFISSxHQW5CYTtBQXdCMUJDLE1BQUksRUFBRTtBQUNKQyxNQUFFLEVBQUUsTUFEQTtBQUVKQyxNQUFFLEVBQUUsTUFGQTtBQUdKQyxNQUFFLEVBQUUsTUFIQTtBQUlKQyxNQUFFLEVBQUUsTUFKQTtBQUtKQyxNQUFFLEVBQUUsTUFMQTtBQU1KQyxLQUFDLEVBQUUsTUFOQztBQU9KQyxLQUFDLEVBQUUsTUFQQztBQVFKQyxZQUFRLEVBQUU7QUFSTixHQXhCb0I7QUFrQzFCQyxZQUFVLEVBQUU7QUFDVkMsa0JBQWMsRUFBRSxnQkFETjtBQUVWQyx1QkFBbUIsRUFBRSxzQkFGWDtBQUdWQyxtQkFBZSxFQUFFO0FBSFA7QUFsQ2MsQ0FBNUI7QUF5Q08sTUFBTUMsSUFBSSxHQUFHQyx3REFBTSxDQUFDQyxPQUFRO2VBQ3BCLENBQUM7QUFBRS9CO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNnQixJQUFOLENBQVdRLFFBQVM7OztJQUc5Q1EscUVBQVUsQ0FBQyxRQUFELEVBQVcsUUFBWCxFQUFxQixRQUFyQixDQUErQjtDQUp0QztBQU9QLE1BQU1DLElBQUksR0FBR0gsd0RBQU0sQ0FBQ0ksSUFBSzs7Q0FBekI7O0FBSUEsTUFBTUMsTUFBdUIsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFrQjtBQUNoRCxTQUNFLE1BQUMsK0RBQUQ7QUFBZSxTQUFLLEVBQUVwQyxLQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLElBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPb0MsUUFBUCxDQUZGLENBREY7QUFNRCxDQVBEOztBQVNlRCxxRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvbGF5b3V0L2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQsIHsgVGhlbWVQcm92aWRlciwgRGVmYXVsdFRoZW1lIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IEdsb2JhbFN0eWxlcyBmcm9tICcuL0dsb2JhbFN0eWxlcyc7XG5pbXBvcnQgeyBoYW5kbGVGbGV4IH0gZnJvbSAnLi4vc3R5bGVkL3V0aWxzL2ZsZXgnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xufVxuXG5jb25zdCB0aGVtZTogRGVmYXVsdFRoZW1lID0ge1xuICBhcHBTaXplOiAnMTBweCcsXG4gIHNoYWRvdzoge1xuICAgIGVsZXZhdGlvbnM6IFtcbiAgICAgICdib3gtc2hhZG93OiBpbnNldCAwIDdweCA5cHggLTdweCByZ2JhKDAsMCwwLCAwLjcpJyxcbiAgICAgICdib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLDAsMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsMCwwLCAwLjI0KScsXG4gICAgICAnYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwwLDAsIDAuMTYpLCAwIDNweCA2cHggcmdiYSgwLDAsMCwgMC4yMyknLFxuICAgICAgJ2JveC1zaGFkb3c6IDNweCAycHggcmdiYSg0MiwgNDMsIDQ5LC4zKScsXG4gICAgXSxcbiAgfSxcbiAgY29sb3JzOiB7XG4gICAgcHJpbWFyeTogJyMwMzEzMjYnLFxuICAgIHByaW1hcnlTaGFkb3c6ICdyZ2JhKDMsIDE5LCAzOCwuNiknLFxuICAgIHNlY29uZGFyeTogJyMwMzEzMjYnLFxuICAgIHNlY29uZGFyeVNoYWRvdzogJ3JnYmEoNDcsIDY4LCA5MiwuNiknLFxuICAgIGJsYWNrOiAnIzAzMDUwNicsXG4gICAgd2hpdGU6ICcjZmZmJyxcbiAgICBvZmZXaGl0ZTogJyNGMUVGRUUnLFxuICB9LFxuICBicmFrZVBvaW50czoge1xuICAgIHNtYWxsOiA0MDAsXG4gICAgbWVkaXVtOiA5NjAsXG4gICAgbGFyZ2U6IDExNDAsXG4gIH0sXG4gIHNpemU6IHtcbiAgICBoMTogJzUwcHgnLFxuICAgIGgyOiAnNDBweCcsXG4gICAgaDM6ICczMHB4JyxcbiAgICBoNDogJzI3cHgnLFxuICAgIGg1OiAnMjJweCcsXG4gICAgcDogJzE4cHgnLFxuICAgIGE6ICcxNnB4JyxcbiAgICBtYXhXaWR0aDogJzExMDBweCcsXG4gIH0sXG4gIHRyYW5zaXRpb246IHtcbiAgICBtYWluVHJhbnNpdGlvbjogJ2FsbCAuM3MgbGluZWFyJyxcbiAgICBzZWNvbmRhcnlUcmFuc2l0aW9uOiAnYWxsIDAuM3MgZWFzZS1pbi1vdXQnLFxuICAgIHF1aWNrVHJhbnNpdGlvbjogJ2FsbCAyMDBtcyBlYXNlLWluLW91dCcsXG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgUGFnZSA9IHN0eWxlZC5zZWN0aW9uYFxuICBtYXgtd2lkdGg6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuc2l6ZS5tYXhXaWR0aH07XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gICR7aGFuZGxlRmxleCgnY29sdW1uJywgJ2NlbnRlcicsICdjZW50ZXInKX07XG5gO1xuXG5jb25zdCBNYWluID0gc3R5bGVkLm1haW5gXG4gIGZsZXgtZ3JvdzogMSBhdXRvO1xuYDtcblxuY29uc3QgTGF5b3V0OiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgIDxHbG9iYWxTdHlsZXMgLz5cbiAgICAgIDxNYWluPntjaGlsZHJlbn08L01haW4+XG4gICAgPC9UaGVtZVByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/layout/index.tsx\n");

/***/ }),

/***/ "./components/styled/utils/flex.tsx":
/*!******************************************!*\
  !*** ./components/styled/utils/flex.tsx ***!
  \******************************************/
/*! exports provided: handleFlex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleFlex\", function() { return handleFlex; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst handleFlex = (flexDirection, justifyContent, alignItems) => {\n  return styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"]`\n    display: flex;\n    flex-direction: ${flexDirection};\n    justify-content: ${justifyContent};\n    align-items: ${alignItems};\n  `;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N0eWxlZC91dGlscy9mbGV4LnRzeD9kMzA2Il0sIm5hbWVzIjpbImhhbmRsZUZsZXgiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiY3NzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBYU8sTUFBTUEsVUFBVSxHQUFHLENBQ3hCQyxhQUR3QixFQUV4QkMsY0FGd0IsRUFHeEJDLFVBSHdCLEtBSXJCO0FBQ0gsU0FBT0MscURBQUk7O3NCQUVTSCxhQUFjO3VCQUNiQyxjQUFlO21CQUNuQkMsVUFBVztHQUo1QjtBQU1ELENBWE0iLCJmaWxlIjoiLi9jb21wb25lbnRzL3N0eWxlZC91dGlscy9mbGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxudHlwZSBGbGV4RGlyZWN0aW9uID0gJ3JvdycgfCAnY29sdW1uJztcbnR5cGUgSnVzdGlmeUNvbnRlbnQgPVxuICB8ICdjZW50ZXInXG4gIHwgJ2ZsZXgtc3RhcnQnXG4gIHwgJ2ZsZXgtZW5kJ1xuICB8ICdzcGFjZS1iZXR3ZWVuJ1xuICB8ICdzcGFjZS1hcm91bmQnXG4gIHwgJ3NwYWNlLWV2ZW5seSc7XG5cbnR5cGUgQWxpZ25JdGVtcyA9ICdmbGV4LXN0YXJ0JyB8ICdmbGV4LWVuZCcgfCAnY2VudGVyJyB8ICdiYXNlbGluZScgfCAnc3RyZXRjaCc7XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVGbGV4ID0gKFxuICBmbGV4RGlyZWN0aW9uOiBGbGV4RGlyZWN0aW9uLFxuICBqdXN0aWZ5Q29udGVudDogSnVzdGlmeUNvbnRlbnQsXG4gIGFsaWduSXRlbXM6IEFsaWduSXRlbXMsXG4pID0+IHtcbiAgcmV0dXJuIGNzc2BcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiAke2ZsZXhEaXJlY3Rpb259O1xuICAgIGp1c3RpZnktY29udGVudDogJHtqdXN0aWZ5Q29udGVudH07XG4gICAgYWxpZ24taXRlbXM6ICR7YWxpZ25JdGVtc307XG4gIGA7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/styled/utils/flex.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store */ \"./store/index.ts\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout */ \"./components/layout/index.tsx\");\nvar _jsxFileName = \"/Users/masiuciszek/web-dev/myWebProj/backlog_list/pages/_app.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\nconst store = Object(_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"Provider\"], {\n    store: store,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 5\n    }\n  }, __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }\n  }, __jsx(Component, _extends({}, pageProps, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }\n  }))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLnRzeD83MjE2Il0sIm5hbWVzIjpbInN0b3JlIiwiY29uZmlndXJlU3RvcmUiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLEtBQUssR0FBR0Msc0RBQWMsRUFBNUI7O0FBRUEsU0FBU0MsS0FBVCxDQUFlO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFmLEVBQW1EO0FBQ2pELFNBQ0UsTUFBQyxvREFBRDtBQUFVLFNBQUssRUFBRUosS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsU0FBRCxlQUFlSSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERixDQURGLENBREY7QUFPRDs7QUFFY0Ysb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xuaW1wb3J0IGNvbmZpZ3VyZVN0b3JlIGZyb20gJy4uL3N0b3JlJztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCc7XG5cbmNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoKTtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgPExheW91dD5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC9Qcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./store/backlog_list/backlog.reducer.ts":
/*!***********************************************!*\
  !*** ./store/backlog_list/backlog.reducer.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _types_backlog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types.backlog */ \"./store/backlog_list/types.backlog.ts\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nconst initialState = {\n  backlogs: [{\n    text: 'Learn Rust',\n    completed: false,\n    important: false\n  }, {\n    text: 'Learn to test applications',\n    completed: false,\n    important: true\n  }, {\n    text: 'Learn C',\n    completed: false,\n    important: true\n  }]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ((state = initialState, action) => {\n  switch (action.type) {\n    case _types_backlog__WEBPACK_IMPORTED_MODULE_0__[\"ActionTypes\"].GET_BACKLOGS:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        backlogs: action.payload\n      });\n\n    case _types_backlog__WEBPACK_IMPORTED_MODULE_0__[\"ActionTypes\"].ADD_BACKLOG:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        backlogs: [...state.backlogs, action.payload]\n      });\n\n    default:\n      return state;\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS9iYWNrbG9nX2xpc3QvYmFja2xvZy5yZWR1Y2VyLnRzPzQ5ZjMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiYmFja2xvZ3MiLCJ0ZXh0IiwiY29tcGxldGVkIiwiaW1wb3J0YW50Iiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiQWN0aW9uVHlwZXMiLCJHRVRfQkFDS0xPR1MiLCJwYXlsb2FkIiwiQUREX0JBQ0tMT0ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFFQSxNQUFNQSxZQUFtQixHQUFHO0FBQzFCQyxVQUFRLEVBQUUsQ0FDUjtBQUNFQyxRQUFJLEVBQUUsWUFEUjtBQUVFQyxhQUFTLEVBQUUsS0FGYjtBQUdFQyxhQUFTLEVBQUU7QUFIYixHQURRLEVBTVI7QUFDRUYsUUFBSSxFQUFFLDRCQURSO0FBRUVDLGFBQVMsRUFBRSxLQUZiO0FBR0VDLGFBQVMsRUFBRTtBQUhiLEdBTlEsRUFXUjtBQUNFRixRQUFJLEVBQUUsU0FEUjtBQUVFQyxhQUFTLEVBQUUsS0FGYjtBQUdFQyxhQUFTLEVBQUU7QUFIYixHQVhRO0FBRGdCLENBQTVCO0FBbUJlLGdFQUFDQyxLQUFZLEdBQUdMLFlBQWhCLEVBQThCTSxNQUE5QixLQUE2RDtBQUMxRSxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLQywwREFBVyxDQUFDQyxZQUFqQjtBQUNFLDZDQUNLSixLQURMO0FBRUVKLGdCQUFRLEVBQUVLLE1BQU0sQ0FBQ0k7QUFGbkI7O0FBSUYsU0FBS0YsMERBQVcsQ0FBQ0csV0FBakI7QUFDRSw2Q0FDS04sS0FETDtBQUVFSixnQkFBUSxFQUFFLENBQUMsR0FBR0ksS0FBSyxDQUFDSixRQUFWLEVBQW9CSyxNQUFNLENBQUNJLE9BQTNCO0FBRlo7O0FBS0Y7QUFDRSxhQUFPTCxLQUFQO0FBYko7QUFlRCxDQWhCRCIsImZpbGUiOiIuL3N0b3JlL2JhY2tsb2dfbGlzdC9iYWNrbG9nLnJlZHVjZXIudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdGF0ZSwgQWN0aW9uVHlwZXMsIEFjdGlvblR5cGVzUmVkdWNlciB9IGZyb20gJy4vdHlwZXMuYmFja2xvZyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogU3RhdGUgPSB7XG4gIGJhY2tsb2dzOiBbXG4gICAge1xuICAgICAgdGV4dDogJ0xlYXJuIFJ1c3QnLFxuICAgICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICAgIGltcG9ydGFudDogZmFsc2UsXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnTGVhcm4gdG8gdGVzdCBhcHBsaWNhdGlvbnMnLFxuICAgICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICAgIGltcG9ydGFudDogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdMZWFybiBDJyxcbiAgICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gICAgICBpbXBvcnRhbnQ6IHRydWUsXG4gICAgfSxcbiAgXSxcbn07XG5leHBvcnQgZGVmYXVsdCAoc3RhdGU6IFN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IEFjdGlvblR5cGVzUmVkdWNlcikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBBY3Rpb25UeXBlcy5HRVRfQkFDS0xPR1M6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgYmFja2xvZ3M6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgfTtcbiAgICBjYXNlIEFjdGlvblR5cGVzLkFERF9CQUNLTE9HOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGJhY2tsb2dzOiBbLi4uc3RhdGUuYmFja2xvZ3MsIGFjdGlvbi5wYXlsb2FkXSxcbiAgICAgIH07XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/backlog_list/backlog.reducer.ts\n");

/***/ }),

/***/ "./store/backlog_list/types.backlog.ts":
/*!*********************************************!*\
  !*** ./store/backlog_list/types.backlog.ts ***!
  \*********************************************/
/*! exports provided: ActionTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ActionTypes\", function() { return ActionTypes; });\nlet ActionTypes;\n\n(function (ActionTypes) {\n  ActionTypes[\"GET_BACKLOGS\"] = \"GET_BACKLOGS\";\n  ActionTypes[\"ADD_BACKLOG\"] = \"ADD_BACKLOG\";\n  ActionTypes[\"DELETE_BACKLOG\"] = \"DELETE_BACKLOG\";\n  ActionTypes[\"EDIT_BACKLOG\"] = \"EDIT_BACKLOG\";\n  ActionTypes[\"SET_CURRENT\"] = \"SET_CURRENT\";\n  ActionTypes[\"CLEAR_CURRENT\"] = \"CLEAR_CURRENT\";\n})(ActionTypes || (ActionTypes = {}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS9iYWNrbG9nX2xpc3QvdHlwZXMuYmFja2xvZy50cz82ZGI1Il0sIm5hbWVzIjpbIkFjdGlvblR5cGVzIl0sIm1hcHBpbmdzIjoiQUFVQTtBQUFBO0FBQU8sSUFBS0EsV0FBWjs7V0FBWUEsVztBQUFBQSxhO0FBQUFBLGE7QUFBQUEsYTtBQUFBQSxhO0FBQUFBLGE7QUFBQUEsYTtHQUFBQSxXLEtBQUFBLFciLCJmaWxlIjoiLi9zdG9yZS9iYWNrbG9nX2xpc3QvdHlwZXMuYmFja2xvZy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgQmFja2xvZyB7XG4gIHRleHQ6IHN0cmluZztcbiAgY29tcGxldGVkOiBib29sZWFuO1xuICBpbXBvcnRhbnQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xuICBiYWNrbG9nczogQmFja2xvZ1tdO1xufVxuXG5leHBvcnQgZW51bSBBY3Rpb25UeXBlcyB7XG4gIEdFVF9CQUNLTE9HUyA9ICdHRVRfQkFDS0xPR1MnLFxuICBBRERfQkFDS0xPRyA9ICdBRERfQkFDS0xPRycsXG4gIERFTEVURV9CQUNLTE9HID0gJ0RFTEVURV9CQUNLTE9HJyxcbiAgRURJVF9CQUNLTE9HID0gJ0VESVRfQkFDS0xPRycsXG4gIFNFVF9DVVJSRU5UID0gJ1NFVF9DVVJSRU5UJyxcbiAgQ0xFQVJfQ1VSUkVOVCA9ICdDTEVBUl9DVVJSRU5UJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBZGRBY3Rpb24ge1xuICB0eXBlOiBBY3Rpb25UeXBlcy5BRERfQkFDS0xPRztcbiAgcGF5bG9hZDogQmFja2xvZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgR2V0QmFja2xvZ0FjdGlvbiB7XG4gIHR5cGU6IEFjdGlvblR5cGVzLkdFVF9CQUNLTE9HUztcbiAgcGF5bG9hZDogQmFja2xvZ1tdO1xufVxuXG5leHBvcnQgdHlwZSBBY3Rpb25UeXBlc1JlZHVjZXIgPSBBZGRBY3Rpb24gfCBHZXRCYWNrbG9nQWN0aW9uO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/backlog_list/types.backlog.ts\n");

/***/ }),

/***/ "./store/index.ts":
/*!************************!*\
  !*** ./store/index.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _rootReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rootReducer */ \"./store/rootReducer.ts\");\n\n\n\n\nfunction configureStore() {\n  const middleWare = [];\n  const middleWareEnhancer = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(...middleWare);\n  const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_rootReducer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__[\"composeWithDevTools\"])(middleWareEnhancer));\n  return store;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (configureStore);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS9pbmRleC50cz81OThhIl0sIm5hbWVzIjpbImNvbmZpZ3VyZVN0b3JlIiwibWlkZGxlV2FyZSIsIm1pZGRsZVdhcmVFbmhhbmNlciIsImFwcGx5TWlkZGxld2FyZSIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJyb290UmVkdWNlciIsImNvbXBvc2VXaXRoRGV2VG9vbHMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFJQSxTQUFTQSxjQUFULEdBQTBCO0FBQ3hCLFFBQU1DLFVBQTZCLEdBQUcsRUFBdEM7QUFFQSxRQUFNQyxrQkFBa0IsR0FBR0MsNkRBQWUsQ0FBQyxHQUFHRixVQUFKLENBQTFDO0FBRUEsUUFBTUcsS0FBSyxHQUFHQyx5REFBVyxDQUN2QkMsb0RBRHVCLEVBRXZCQyxvRkFBbUIsQ0FBQ0wsa0JBQUQsQ0FGSSxDQUF6QjtBQUlBLFNBQU9FLEtBQVA7QUFDRDs7QUFFY0osNkVBQWYiLCJmaWxlIjoiLi9zdG9yZS9pbmRleC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsIE1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJztcbmltcG9ydCByb290UmVkdWNlciBmcm9tICcuL3Jvb3RSZWR1Y2VyJztcblxuZXhwb3J0IHR5cGUgQXBwU3RhdGUgPSBSZXR1cm5UeXBlPHR5cGVvZiByb290UmVkdWNlcj47XG5cbmZ1bmN0aW9uIGNvbmZpZ3VyZVN0b3JlKCkge1xuICBjb25zdCBtaWRkbGVXYXJlOiBBcnJheTxNaWRkbGV3YXJlPiA9IFtdO1xuXG4gIGNvbnN0IG1pZGRsZVdhcmVFbmhhbmNlciA9IGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGVXYXJlKTtcblxuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxuICAgIHJvb3RSZWR1Y2VyLFxuICAgIGNvbXBvc2VXaXRoRGV2VG9vbHMobWlkZGxlV2FyZUVuaGFuY2VyKSxcbiAgKTtcbiAgcmV0dXJuIHN0b3JlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb25maWd1cmVTdG9yZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/index.ts\n");

/***/ }),

/***/ "./store/rootReducer.ts":
/*!******************************!*\
  !*** ./store/rootReducer.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _backlog_list_backlog_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./backlog_list/backlog.reducer */ \"./store/backlog_list/backlog.reducer.ts\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"]({\n  backlogs: _backlog_list_backlog_reducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS9yb290UmVkdWNlci50cz8yMDljIl0sIm5hbWVzIjpbIlJlZHV4IiwiYmFja2xvZ3MiLCJiYWNrbG9nUmVkdWNlciJdLCJtYXBwaW5ncyI6IkFBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRWVBLG9IQUFBLENBQXNCO0FBQ25DQyxVQUFRLEVBQUVDLHFFQUFjQTtBQURXLENBQXRCLENBQWYiLCJmaWxlIjoiLi9zdG9yZS9yb290UmVkdWNlci50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcblxuaW1wb3J0ICogYXMgUmVkdXggZnJvbSAncmVkdXgnO1xuaW1wb3J0IGJhY2tsb2dSZWR1Y2VyIGZyb20gJy4vYmFja2xvZ19saXN0L2JhY2tsb2cucmVkdWNlcic7XG5cbmV4cG9ydCBkZWZhdWx0IFJlZHV4LmNvbWJpbmVSZWR1Y2Vycyh7XG4gIGJhY2tsb2dzOiBiYWNrbG9nUmVkdWNlcixcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/rootReducer.ts\n");

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiPzc4Y2QiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtcmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-redux\n");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiP2QzMjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux\n");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-devtools-extension\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIj81YWE5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlZHV4LWRldnRvb2xzLWV4dGVuc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-devtools-extension\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ })

/******/ });