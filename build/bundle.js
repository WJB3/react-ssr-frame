/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./src/pages/Test.scss":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-1!./node_modules/sass-loader/dist/cjs.js!./src/pages/Test.scss ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"._2580s-CQ1wN90ECsAyRiX_ {\\n  color: red; }\\n\", \"\"]);\n// Exports\nexports.locals = {\n\t\"color\": \"_2580s-CQ1wN90ECsAyRiX_\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/pages/Test.scss?./node_modules/css-loader/dist/cjs.js??ref--7-1!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/isomorphic-style-loader/insertCss.js":
/*!***********************************************************!*\
  !*** ./node_modules/isomorphic-style-loader/insertCss.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*! Isomorphic Style Loader | MIT License | https://github.com/kriasoft/isomorphic-style-loader */\n\n\n\nvar inserted = {};\n\nfunction b64EncodeUnicode(str) {\n  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {\n    return String.fromCharCode(\"0x\" + p1);\n  }));\n}\n\nfunction removeCss(ids) {\n  ids.forEach(function (id) {\n    if (--inserted[id] <= 0) {\n      var elem = document.getElementById(id);\n\n      if (elem) {\n        elem.parentNode.removeChild(elem);\n      }\n    }\n  });\n}\n\nfunction insertCss(styles, _temp) {\n  var _ref = _temp === void 0 ? {} : _temp,\n      _ref$replace = _ref.replace,\n      replace = _ref$replace === void 0 ? false : _ref$replace,\n      _ref$prepend = _ref.prepend,\n      prepend = _ref$prepend === void 0 ? false : _ref$prepend,\n      _ref$prefix = _ref.prefix,\n      prefix = _ref$prefix === void 0 ? 's' : _ref$prefix;\n\n  var ids = [];\n\n  for (var i = 0; i < styles.length; i++) {\n    var _styles$i = styles[i],\n        moduleId = _styles$i[0],\n        css = _styles$i[1],\n        media = _styles$i[2],\n        sourceMap = _styles$i[3];\n    var id = \"\" + prefix + moduleId + \"-\" + i;\n    ids.push(id);\n\n    if (inserted[id]) {\n      if (!replace) {\n        inserted[id]++;\n        continue;\n      }\n    }\n\n    inserted[id] = 1;\n    var elem = document.getElementById(id);\n    var create = false;\n\n    if (!elem) {\n      create = true;\n      elem = document.createElement('style');\n      elem.setAttribute('type', 'text/css');\n      elem.id = id;\n\n      if (media) {\n        elem.setAttribute('media', media);\n      }\n    }\n\n    var cssText = css;\n\n    if (sourceMap && typeof btoa === 'function') {\n      cssText += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + b64EncodeUnicode(JSON.stringify(sourceMap)) + \"*/\";\n      cssText += \"\\n/*# sourceURL=\" + sourceMap.file + \"?\" + id + \"*/\";\n    }\n\n    if ('textContent' in elem) {\n      elem.textContent = cssText;\n    } else {\n      elem.styleSheet.cssText = cssText;\n    }\n\n    if (create) {\n      if (prepend) {\n        document.head.insertBefore(elem, document.head.childNodes[0]);\n      } else {\n        document.head.appendChild(elem);\n      }\n    }\n  }\n\n  return removeCss.bind(null, ids);\n}\n\nmodule.exports = insertCss;\n//# sourceMappingURL=insertCss.js.map\n\n\n//# sourceURL=webpack:///./node_modules/isomorphic-style-loader/insertCss.js?");

/***/ }),

/***/ "./src/component/ConnectStyle.js":
/*!***************************************!*\
  !*** ./src/component/ConnectStyle.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ \"core-js/modules/es7.symbol.async-iterator\");\n/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.symbol */ \"core-js/modules/es6.symbol\");\n/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.regexp.to-string */ \"core-js/modules/es6.regexp.to-string\");\n/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.object.to-string */ \"core-js/modules/es6.object.to-string\");\n/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es6_reflect_construct__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.reflect.construct */ \"core-js/modules/es6.reflect.construct\");\n/* harmony import */ var core_js_modules_es6_reflect_construct__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_reflect_construct__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of */ \"core-js/modules/es6.object.set-prototype-of\");\n/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (styles) {\n  return function (WrappedComponent) {\n    var NewComponent = /*#__PURE__*/function (_Component) {\n      _inherits(NewComponent, _Component);\n\n      var _super = _createSuper(NewComponent);\n\n      function NewComponent(props) {\n        var _this;\n\n        _classCallCheck(this, NewComponent);\n\n        _this = _super.call(this, props);\n        var staticContext = _this.props.staticContext;\n\n        if (styles._getContent) {\n          staticContext.css.push(styles._getCss());\n        }\n\n        return _this;\n      }\n\n      _createClass(NewComponent, [{\n        key: \"render\",\n        value: function render() {\n          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(WrappedComponent, this.props);\n        }\n      }]);\n\n      return NewComponent;\n    }(react__WEBPACK_IMPORTED_MODULE_6__[\"Component\"]);\n\n    ;\n    return NewComponent;\n  };\n});\n\n//# sourceURL=webpack:///./src/component/ConnectStyle.js?");

/***/ }),

/***/ "./src/pages/Hello.js":
/*!****************************!*\
  !*** ./src/pages/Hello.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ \"core-js/modules/es7.symbol.async-iterator\");\n/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.symbol */ \"core-js/modules/es6.symbol\");\n/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.regexp.to-string */ \"core-js/modules/es6.regexp.to-string\");\n/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.object.to-string */ \"core-js/modules/es6.object.to-string\");\n/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es6_reflect_construct__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.reflect.construct */ \"core-js/modules/es6.reflect.construct\");\n/* harmony import */ var core_js_modules_es6_reflect_construct__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_reflect_construct__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of */ \"core-js/modules/es6.object.set-prototype-of\");\n/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _Test_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Test.scss */ \"./src/pages/Test.scss\");\n/* harmony import */ var _Test_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Test_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _component_ConnectStyle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../component/ConnectStyle */ \"./src/component/ConnectStyle.js\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\n\n\nvar _dec, _class;\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\nvar Hello = (_dec = Object(_component_ConnectStyle__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(_Test_scss__WEBPACK_IMPORTED_MODULE_8___default.a), _dec(_class = /*#__PURE__*/function (_React$Component) {\n  _inherits(Hello, _React$Component);\n\n  var _super = _createSuper(Hello);\n\n  function Hello() {\n    _classCallCheck(this, Hello);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(Hello, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\"div\", {\n        className: _Test_scss__WEBPACK_IMPORTED_MODULE_8___default.a.color\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_10__[\"Helmet\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\"title\", null, \"ReactHelmet\\u4F7F\\u7528\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\"meta\", {\n        name: \"\\u63CF\\u8FF0\",\n        content: \"\\u8FD9\\u662Fhello\"\n      })), \"hello world changes \\u554A\\u554A\\u554A\\u554A\\u6211\\u4F1A\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\"button\", {\n        onClick: function onClick() {\n          return alert(\"2\");\n        }\n      }, \"\\u70B9\\u51FB\\u6211\\uFF01\\uFF01\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__[\"Link\"], {\n        to: \"/link\"\n      }, \"Link\"));\n    }\n  }]);\n\n  return Hello;\n}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component)) || _class);\n\nHello.loadData = function () {};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hello);\n\n//# sourceURL=webpack:///./src/pages/Hello.js?");

/***/ }),

/***/ "./src/pages/Link.js":
/*!***************************!*\
  !*** ./src/pages/Link.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return LinkDemo; });\n/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ \"core-js/modules/es7.symbol.async-iterator\");\n/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.symbol */ \"core-js/modules/es6.symbol\");\n/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.regexp.to-string */ \"core-js/modules/es6.regexp.to-string\");\n/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.object.to-string */ \"core-js/modules/es6.object.to-string\");\n/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es6_reflect_construct__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.reflect.construct */ \"core-js/modules/es6.reflect.construct\");\n/* harmony import */ var core_js_modules_es6_reflect_construct__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_reflect_construct__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of */ \"core-js/modules/es6.object.set-prototype-of\");\n/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar LinkDemo = /*#__PURE__*/function (_React$Component) {\n  _inherits(LinkDemo, _React$Component);\n\n  var _super = _createSuper(LinkDemo);\n\n  function LinkDemo() {\n    _classCallCheck(this, LinkDemo);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(LinkDemo, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\"div\", null, \"LINK\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__[\"Link\"], {\n        to: \"hello\"\n      }, \"hello\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__[\"Redirect\"], {\n        to: \"/login\"\n      }));\n    }\n  }]);\n\n  return LinkDemo;\n}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);\n\n\n\n//# sourceURL=webpack:///./src/pages/Link.js?");

/***/ }),

/***/ "./src/pages/Login.js":
/*!****************************!*\
  !*** ./src/pages/Login.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ \"core-js/modules/es7.symbol.async-iterator\");\n/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.symbol */ \"core-js/modules/es6.symbol\");\n/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.regexp.to-string */ \"core-js/modules/es6.regexp.to-string\");\n/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.object.to-string */ \"core-js/modules/es6.object.to-string\");\n/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es6_reflect_construct__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.reflect.construct */ \"core-js/modules/es6.reflect.construct\");\n/* harmony import */ var core_js_modules_es6_reflect_construct__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_reflect_construct__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of */ \"core-js/modules/es6.object.set-prototype-of\");\n/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _Test_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Test.scss */ \"./src/pages/Test.scss\");\n/* harmony import */ var _Test_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Test_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _component_ConnectStyle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../component/ConnectStyle */ \"./src/component/ConnectStyle.js\");\n\n\n\n\n\n\n\nvar _dec, _class;\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\nvar Hello = (_dec = Object(_component_ConnectStyle__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(_Test_scss__WEBPACK_IMPORTED_MODULE_8___default.a), _dec(_class = /*#__PURE__*/function (_React$Component) {\n  _inherits(Hello, _React$Component);\n\n  var _super = _createSuper(Hello);\n\n  function Hello() {\n    _classCallCheck(this, Hello);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(Hello, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\"div\", {\n        className: _Test_scss__WEBPACK_IMPORTED_MODULE_8___default.a.color\n      }, \"\\u767B\\u5F55\\u754C\\u9762\");\n    }\n  }]);\n\n  return Hello;\n}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component)) || _class);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hello);\n\n//# sourceURL=webpack:///./src/pages/Login.js?");

/***/ }),

/***/ "./src/pages/NotFound.js":
/*!*******************************!*\
  !*** ./src/pages/NotFound.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ \"core-js/modules/es7.symbol.async-iterator\");\n/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.symbol */ \"core-js/modules/es6.symbol\");\n/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.regexp.to-string */ \"core-js/modules/es6.regexp.to-string\");\n/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.object.to-string */ \"core-js/modules/es6.object.to-string\");\n/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es6_reflect_construct__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.reflect.construct */ \"core-js/modules/es6.reflect.construct\");\n/* harmony import */ var core_js_modules_es6_reflect_construct__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_reflect_construct__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of */ \"core-js/modules/es6.object.set-prototype-of\");\n/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _Test_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Test.scss */ \"./src/pages/Test.scss\");\n/* harmony import */ var _Test_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Test_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _component_ConnectStyle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../component/ConnectStyle */ \"./src/component/ConnectStyle.js\");\n\n\n\n\n\n\n\nvar _dec, _class;\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\nvar NotFound = (_dec = Object(_component_ConnectStyle__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(_Test_scss__WEBPACK_IMPORTED_MODULE_8___default.a), _dec(_class = /*#__PURE__*/function (_React$Component) {\n  _inherits(NotFound, _React$Component);\n\n  var _super = _createSuper(NotFound);\n\n  function NotFound(props) {\n    var _this;\n\n    _classCallCheck(this, NotFound);\n\n    _this = _super.call(this, props);\n    var staticContext = _this.props.staticContext;\n    staticContext && (staticContext.NotFound = true);\n    return _this;\n  }\n\n  _createClass(NotFound, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\"div\", {\n        className: _Test_scss__WEBPACK_IMPORTED_MODULE_8___default.a.color\n      }, \"NotFound\");\n    }\n  }]);\n\n  return NotFound;\n}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component)) || _class);\n/* harmony default export */ __webpack_exports__[\"default\"] = (NotFound);\n\n//# sourceURL=webpack:///./src/pages/NotFound.js?");

/***/ }),

/***/ "./src/pages/Test.scss":
/*!*****************************!*\
  !*** ./src/pages/Test.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--7-1!../../node_modules/sass-loader/dist/cjs.js!./Test.scss */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./src/pages/Test.scss\");\n    var insertCss = __webpack_require__(/*! ../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/pages/Test.scss?");

/***/ }),

/***/ "./src/router/index.js":
/*!*****************************!*\
  !*** ./src/router/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_Hello__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../pages/Hello */ \"./src/pages/Hello.js\");\n/* harmony import */ var _pages_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../pages/Link */ \"./src/pages/Link.js\");\n/* harmony import */ var _pages_NotFound__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../pages/NotFound */ \"./src/pages/NotFound.js\");\n/* harmony import */ var _pages_Login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../pages/Login */ \"./src/pages/Login.js\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([{\n  path: \"/hello\",\n  exact: true,\n  component: _pages_Hello__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  key: \"hello\",\n  loadData: _pages_Hello__WEBPACK_IMPORTED_MODULE_0__[\"default\"].loadData\n}, {\n  path: \"/link\",\n  exact: true,\n  component: _pages_Link__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  key: \"link\"\n}, {\n  path: \"/login\",\n  exact: true,\n  component: _pages_Login__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  key: \"login\"\n}, {\n  path: \"*\",\n  component: _pages_NotFound__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  key: \"notfound\"\n}]);\n\n//# sourceURL=webpack:///./src/router/index.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.to-string */ \"core-js/modules/es6.regexp.to-string\");\n/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.object.to-string */ \"core-js/modules/es6.object.to-string\");\n/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.regexp.split */ \"core-js/modules/es6.regexp.split\");\n/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _router_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../router/index */ \"./src/router/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\nvar http = __webpack_require__(/*! http */ \"http\");\n\nvar fs = __webpack_require__(/*! fs */ \"fs\");\n\nvar Path = __webpack_require__(/*! path */ \"path\");\n\n\n\n\n\n\nvar server = http.createServer(function (req, res) {\n  var context = {\n    css: []\n  };\n  var matchRoutes = []; //定义匹配的路由\n\n  _router_index__WEBPACK_IMPORTED_MODULE_3__[\"default\"].some(function (route) {\n    //遍历匹配相应的路由\n    var match = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_7__[\"matchPath\"])(req.url, route); //如果匹配到了，就将匹配到的路由推进matchRoutes\n\n    if (match) {\n      matchRoutes.push(route);\n    }\n  });\n  matchRoutes.forEach(function (item) {\n    item && item.loadData && item.loadData();\n  });\n  var content = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_6__[\"renderToString\"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__[\"StaticRouter\"], {\n    location: req.url,\n    context: context\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__[\"Switch\"], null, _router_index__WEBPACK_IMPORTED_MODULE_3__[\"default\"].map(function (props) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__[\"Route\"], props);\n  }))));\n  var cssStr = context.css.length ? context.css.join('\\n') : '';\n  var helmet = react_helmet__WEBPACK_IMPORTED_MODULE_5__[\"Helmet\"].renderStatic();\n  var path = req.url;\n\n  if (path.split(\".\").length === 1) {\n    if (context.NotFound) {\n      //404\n      res.writeHead(404, {\n        'Content-Type': \"text/html; charset=utf-8\"\n      });\n      res.end(\"\\n                <!DOCTYPE html>\\n                <html>\\n                    <head>\\n                        \".concat(helmet.title.toString(), \"\\n                        \").concat(helmet.meta.toString(), \"\\n                        <style>\").concat(cssStr, \"</style>\\n                    </head>\\n                    <body>\\n                        <div id=\\\"root\\\">\").concat(content, \"</div>\\n                        <script src=\\\"/index.js\\\"></script>\\n                    </body>\\n                </html>\\n            \"));\n      return;\n    }\n\n    if (context.action === \"REPLACE\") {\n      //404\n      res.writeHead(302, {\n        'Location': context.url\n      });\n      res.end();\n      return;\n    }\n\n    res.writeHead(200, {\n      'Content-Type': \"text/html; charset=utf-8\"\n    });\n    res.end(\"\\n            <!DOCTYPE html>\\n            <html>\\n                <head>\\n                    \".concat(helmet.title.toString(), \"\\n                    \").concat(helmet.meta.toString(), \"\\n                    <style>\").concat(cssStr, \"</style>\\n                </head>\\n                <body>\\n                    <div id=\\\"root\\\">\").concat(content, \"</div>\\n                    <script src=\\\"/index.js\\\"></script>\\n                </body>\\n            </html>\\n        \"));\n  } else if (path.split(\".\").length === 2 && path.split(\".\")[1] === \"js\") {\n    var filePath = Path.join(\"public\", req.url);\n    fs.readFile(filePath, function (err, data) {\n      if (err) {\n        throw err;\n      } // 设置请求头，访问文件类型为js文件\n\n\n      res.setHeader(\"Content-Type\", \"text/js\");\n      res.end(data);\n    });\n  } else if (path.split(\".\").length === 2 && path.split(\".\")[1] === \"ico\") {\n    var _filePath = Path.join(\"public\", req.url);\n\n    fs.readFile(_filePath, function (err, data) {\n      if (err) {\n        throw err;\n      } // 设置请求头，访问文件类型为icon文件\n\n\n      res.setHeader(\"Content-Type\", \"image/x-icon\");\n      res.end(data);\n    });\n  }\n});\nserver.listen(3000, '127.0.0.1', function () {\n  console.log(\"node is listening...\");\n});\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "core-js/modules/es6.object.set-prototype-of":
/*!**************************************************************!*\
  !*** external "core-js/modules/es6.object.set-prototype-of" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es6.object.set-prototype-of\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es6.object.set-prototype-of%22?");

/***/ }),

/***/ "core-js/modules/es6.object.to-string":
/*!*******************************************************!*\
  !*** external "core-js/modules/es6.object.to-string" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es6.object.to-string\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es6.object.to-string%22?");

/***/ }),

/***/ "core-js/modules/es6.reflect.construct":
/*!********************************************************!*\
  !*** external "core-js/modules/es6.reflect.construct" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es6.reflect.construct\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es6.reflect.construct%22?");

/***/ }),

/***/ "core-js/modules/es6.regexp.split":
/*!***************************************************!*\
  !*** external "core-js/modules/es6.regexp.split" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es6.regexp.split\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es6.regexp.split%22?");

/***/ }),

/***/ "core-js/modules/es6.regexp.to-string":
/*!*******************************************************!*\
  !*** external "core-js/modules/es6.regexp.to-string" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es6.regexp.to-string\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es6.regexp.to-string%22?");

/***/ }),

/***/ "core-js/modules/es6.symbol":
/*!*********************************************!*\
  !*** external "core-js/modules/es6.symbol" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es6.symbol\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es6.symbol%22?");

/***/ }),

/***/ "core-js/modules/es7.symbol.async-iterator":
/*!************************************************************!*\
  !*** external "core-js/modules/es7.symbol.async-iterator" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es7.symbol.async-iterator\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es7.symbol.async-iterator%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");\n\n//# sourceURL=webpack:///external_%22http%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-helmet\");\n\n//# sourceURL=webpack:///external_%22react-helmet%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ })

/******/ });