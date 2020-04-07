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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/colors.js":
/*!********************************!*\
  !*** ./resources/js/colors.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var BLACK = '#000000';
var NAVY = '#000080';
var DARKBLUE = '#00008B';
var MEDIUMBLUE = '#0000CD';
var BLUE = '#0000FF';
var DARKGREEN = '#006400';
var GREEN = '#008000';
var TEAL = '#008080';
var DARKCYAN = '#008B8B';
var DEEPSKYBLUE = '#00BFFF';
var DARKTURQUOISE = '#00CED1';
var MEDIUMSPRINGGREEN = '#00FA9A';
var LIME = '#00FF00';
var SPRINGGREEN = '# 00FF7F';
var AQUA = '#00FFFF';
var CYAN = '#00FFFF';
var MIDNIGHTBLUE = '#191970';
var DODGERBLUE = '#1E90FF';
var LIGHTSEAGREEN = '#20B2AA';
var FORESTGREEN = '#228B22';
var SEAGREEN = '#2E8B57';
var DARKSLATEGRAY = '#2F4F4F';
var LIMEGREEN = '#32CD32';
var MEDIUMSEAGREEN = '#3CB371';
var TURQUOISE = '#40E0D0';
var ROYALBLUE = '#4169E1';
var STEELBLUE = '#4682B4';
var DARKSLATEBLUE = '#483D8B';
var MEDIUMTURQUOISE = '#48D1CC';
var INDIGO = '#4B0082';
var DARKOLIVEGREEN = '#556B2F';
var CADETBLUE = '#5F9EA0';
var CORNFLOWERBLUE = '#6495ED';
var REBECCAPURPLE = '#663399';
var MEDIUMAQUAMARINE = '#66CDAA';
var DIMGRAY = '#696969';
var SLATEBLUE = '#6A5ACD';
var OLIVEDRAB = '#6B8E23';
var SLATEGRAY = '#708090';
var LIGHTSLATEGRAY = '#778899';
var MEDIUMSLATEBLUE = '#7B68EE';
var LAWNGREEN = '#7CFC00';
var CHARTREUSE = '#7FFF00';
var AQUAMARINE = '#7FFFD4';
var MAROON = '#800000';
var PURPLE = '#800080';
var OLIVE = '#808000';
var GRAY = '#808080';
var SKYBLUE = '#87CEEB';
var LIGHTSKYBLUE = '#87CEFA';
var BLUEVIOLET = '#8A2BE2';
var DARKRED = '#8B0000';
var DARKMAGENTA = '#8B008B';
var SADDLEBROWN = '#8B4513';
var DARKSEAGREEN = '#8FBC8F';
var LIGHTGREEN = '#90EE90';
var MEDIUMPURPLE = '#9370DB';
var DARKVIOLET = '#9400D3';
var PALEGREEN = '#98FB98';
var DARKORCHID = '#9932CC';
var YELLOWGREEN = '#9ACD32';
var SIENNA = '#A0522D';
var BROWN = '#A52A2A';
var DARKGRAY = '#A9A9A9';
var LIGHTBLUE = '#ADD8E6';
var GREENYELLOW = '#ADFF2F';
var PALETURQUOISE = '#AFEEEE';
var LIGHTSTEELBLUE = '#B0C4DE';
var POWDERBLUE = '#B0E0E6';
var FIREBRICK = '#B22222';
var DARKGOLDENROD = '#B8860B';
var MEDIUMORCHID = '#BA55D3';
var ROSYBROWN = '#BC8F8F';
var DARKKHAKI = '#BDB76B';
var SILVER = '#C0C0C0';
var MEDIUMVIOLETRED = '#C71585';
var INDIANRED = '#CD5C5C';
var PERU = '#CD853F';
var CHOCOLATE = '#D2691E';
var TAN = '#D2B48C';
var LIGHTGRAY = '#D3D3D3';
var THISTLE = '#D8BFD8';
var ORCHID = '#DA70D6';
var GOLDENROD = '#DAA520';
var PALEVIOLETRED = '#DB7093';
var CRIMSON = '#DC143C';
var GAINSBORO = '#DCDCDC';
var PLUM = '#DDA0DD';
var BURLYWOOD = '#DEB887';
var LIGHTCYAN = '#E0FFFF';
var LAVENDER = '#E6E6FA';
var DARKSALMON = '#E9967A';
var VIOLET = '#EE82EE';
var PALEGOLDENROD = '#EEE8AA';
var LIGHTCORAL = '#F08080';
var KHAKI = '#F0E68C';
var ALICEBLUE = '#F0F8FF';
var HONEYDEW = '#F0FFF0';
var AZURE = '#F0FFFF';
var SANDYBROWN = '#F4A460';
var WHEAT = '#F5DEB3';
var BEIGE = '#F5F5DC';
var WHITESMOKE = '#F5F5F5';
var MINTCREAM = '#F5FFFA';
var GHOSTWHITE = '#F8F8FF';
var SALMON = '#FA8072';
var ANTIQUEWHITE = '#FAEBD7';
var LINEN = '#FAF0E6';
var LIGHTGOLDENRODYELLOW = '#FAFAD2';
var OLDLACE = '#FDF5E6';
var RED = '#FF0000';
var FUCHSIA = '#FF00FF';
var MAGENTA = '#FF00FF';
var DEEPPINK = '#FF1493';
var ORANGERED = '#FF4500';
var TOMATO = '#FF6347';
var HOTPINK = '#FF69B4';
var CORAL = '#FF7F50';
var DARKORANGE = '#FF8C00';
var LIGHTSALMON = '#FFA07A';
var ORANGE = '#FFA500';
var LIGHTPINK = '#FFB6C1';
var PINK = '#FFC0CB';
var GOLD = '#FFD700';
var PEACHPUFF = '#FFDAB9';
var NAVAJOWHITE = '#FFDEAD';
var MOCCASIN = '#FFE4B5';
var BISQUE = '#FFE4C4';
var MISTYROSE = '#FFE4E1';
var BLANCHEDALMOND = '#FFEBCD';
var PAPAYAWHIP = '#FFEFD5';
var LAVENDERBLUSH = '#FFF0F5';
var SEASHELL = '#FFF5EE';
var CORNSILK = '#FFF8DC';
var LEMONCHIFFON = '#FFFACD';
var FLORALWHITE = '#FFFAF0';
var SNOW = '#FFFAFA';
var YELLOW = '#FFFF00';
var LIGHTYELLOW = '#FFFFE0';
var IVORY = '#FFFFF0';
var WHITE = '#FFFFFF';

/***/ }),

/***/ 2:
/*!**************************************!*\
  !*** multi ./resources/js/colors.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\f.pipping\WebstormProjects\gallery\resources\js\colors.js */"./resources/js/colors.js");


/***/ })

/******/ });