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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./resources/js/live.js":
/*!******************************!*\
  !*** ./resources/js/live.js ***!
  \******************************/
/*! exports provided: numbering, board, runCode, download, saveCode, clearCanvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numbering", function() { return numbering; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "board", function() { return board; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runCode", function() { return runCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "download", function() { return download; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveCode", function() { return saveCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearCanvas", function() { return clearCanvas; });
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
var xmin = 0;
var xmax = 1;
var ymin = 0;
var ymax = 1;
var width = 500;
var height = 500;
var canvasLeft;
var canvasTop;
var ctx;
var border = 5;
var columns = 8;
var rows = 8;
var barWidth = 0.4;
var symbols = [];
var numberingFlag = false;
var logView;
global.textColor = '#000000';
global.xmax = xmax;
global.ymax = ymax;
global.xmin = xmin;
global.ymin = ymin;
global.width = width;
global.height = height;
global.canvasLeft = canvasLeft;
global.canvasTop = canvasTop;
global.ctx = ctx;
global.border = border;
global.columns = columns;
global.rows = rows;
global.barWidth = barWidth;
global.symbols = symbols;
global.numberingFlag = numberingFlag;
global.logView = logView;

function punkt(x, y) {
  this.x = x;
  this.y = y;

  this.trans = function () {
    var yfactor = (global.height - 2 * global.border) / (global.ymax - global.ymin);
    var xfactor = global.width / (global.xmax - global.xmin);
    var yg = global.height - global.border - (y - global.ymin) * yfactor;
    var xg = (x - global.xmin) * xfactor; //console.log( y + " -> " + yg )

    return new punkt(xg, yg);
  };
}

function _Symbol(x, y) {
  this.x = x;
  this.y = y;
  this.size = 0.45;
  this.color = '#c0c0c0';
  this.textColor = global.textColor;
  this.type = "c";
  this.text = "";

  this.getDataSet = function () {
    var plotter = new dataSet("d-" + this.x + this.y);

    switch (this.type) {
      case "c":
        for (var t = 0; t < 2 * Math.PI; t += 0.03) {
          var xx = this.x + this.size * Math.cos(t);
          var yy = this.y + this.size * Math.sin(t);
          plotter.add(xx, yy);
        }

        break;

      case "d":
        plotter.add(this.x - this.size, this.y);
        plotter.addD(this.size, -this.size);
        plotter.addD(this.size, +this.size);
        plotter.addD(-this.size, this.size);
        plotter.addD(-this.size, -this.size);
        break;

      case "s":
        plotter.add(this.x - this.size, this.y - this.size);
        plotter.addD(2 * this.size, 0);
        plotter.addD(0, 2 * this.size);
        plotter.addD(-2 * this.size, 0);
        plotter.addD(0, -2 * this.size);
        break;

      case "*":
        var spitzen = 8;
        var phi = 2 * Math.PI / spitzen;
        var radius1 = 0.4 * this.size;

        for (var t = -phi / 4; t < 2 * Math.PI; t += phi) {
          var xx = this.x + radius1 * Math.cos(t);
          var yy = this.y + radius1 * Math.sin(t);
          plotter.add(xx, yy);
          xx = this.x + this.size * Math.cos(t + phi / 2.);
          yy = this.y + this.size * Math.sin(t + phi / 2.);
          plotter.add(xx, yy);
        }

        var xx = radius1 + this.x;
        var yy = this.y;
        plotter.add(xx, yy);
        break;

      case "b":
        plotter.add(this.x - global.barWidth, this.y - 0.5);
        plotter.addD(0, 2 * this.size);
        plotter.addD(2 * global.barWidth, 0);
        plotter.addD(0, -2 * this.size);
        plotter.addD(-2 * global.barWidth, 0);
        break;

      case "none":
        break;

      default:
        console.log("Symboltyp " + this.type + " (noch) nicht implementiert");
    }

    return plotter;
  };

  this.update = function () {
    this.dataSet = this.getDataSet();
    this.dataSet.malen(this.color);
    var text = this.text;

    if (global.numberingFlag & text == "") {
      text = x + "," + y;
    }

    if (text != "") {
      var c1 = new punkt(this.x, this.y);
      var c1t = c1.trans();
      global.ctx.font = "14px Arial";
      global.ctx.textAlign = "center";
      global.ctx.fillStyle = this.textColor;
      global.ctx.fillText(text, c1t.x, c1t.y);
    }
  };

  this.clear = function () {
    var c1 = new punkt(this.x - 0.5, this.y - 0.5);
    var c2 = new punkt(this.x + 0.5, this.y + 0.5);
    var c1t = c1.trans();
    var c2t = c2.trans(); //console.log( "clear " +  c1t.x + " " +  c1t.y + " " +  (c2t.x-c1t.x) + " " + ( c1t.y-c2t.y) )

    global.ctx.clearRect(c1t.x, c2t.y, c2t.x - c1t.x, c1t.y - c2t.y);
    return this;
  };

  this.update();
}

function infotext() {
  return " x: [" + global.xmin.toPrecision(3) + "," + global.xmax.toPrecision(3) + "]" + " y: [" + global.ymin.toPrecision(3) + "," + global.ymax.toPrecision(3) + "]";
}

function dataSet(name) {
  this.name = name;
  this.punkte = new Array();

  this.text = function () {
    return this.name + " x: [" + global.xmin.toPrecision(3) + "," + global.xmax.toPrecision(3) + "]" + " y: [" + global.ymin.toPrecision(3) + "," + global.ymax.toPrecision(3) + "]";
  };

  this.add = function (x, y) {
    this.punkte.push(new punkt(x, y));
    global.xmax = Math.max(global.xmax, x);
    global.xmin = Math.min(global.xmin, x);
    global.ymax = Math.max(global.ymax, y);
    global.ymin = Math.min(global.ymin, y);
  };

  this.addD = function (x, y) {
    var last = this.punkte.slice(-1)[0];
    this.add(last.x + x, last.y + y);
  };

  this.malen = function (color) {
    if (this.punkte.length == 0) {
      return;
    }

    global.ctx.lineWidth = 2;
    global.ctx.fillStyle = color; //console.log( "color: " + ctx.fillStyle )

    global.ctx.beginPath();
    var drawPoint = this.punkte[0].trans();
    global.ctx.moveTo(drawPoint.x, drawPoint.y);

    for (var i = 1; i < this.punkte.length; i++) {
      var drawPoint = this.punkte[i].trans();
      global.ctx.lineTo(drawPoint.x, drawPoint.y);
    }

    global.ctx.stroke();
    global.ctx.closePath();
    global.ctx.fill();
  };
}

function clearSymbol(x, y) {
  var c1 = new punkt(x - 0.5, y - 0.5);
  var c2 = new punkt(x + 0.5, y + 0.5);
  var c1t = c1.trans();
  var c2t = c2.trans(); //console.log( "clear " +  c1t.x + " " +  c1t.y + " " +  (c2t.x-c1t.x) + " " + ( c1t.y-c2t.y) )

  global.ctx.clearRect(Math.round(c1t.x), Math.round(c2t.y), Math.round(c2t.x - c1t.x), Math.round(c1t.y - c2t.y));
}

function numbering() {
  global.numberingFlag = !global.numberingFlag;
  global.symbols.forEach(function (s) {
    s.clear().update();
  });
}

function statusText(text) {
  document.getElementById("titel").innerHTML = text;
}

function text2(x, y, text) {
  var ind = index(x, y);
  global.symbols[ind].text = text;
  global.symbols[ind].update();
}

function farben(c) {
  for (var x = 0; x < global.columns; x++) {
    for (var y = 0; y < global.rows; y++) {
      farbe2(x, y, c);
    }
  }
}

function farbe2(x, y, c) {
  var ind = index(x, y);
  global.symbols[ind].color = c; //symbols[ind].clear()

  global.symbols[ind].update();
}

function textFarbe2(x, y, c) {
  var ind = index(x, y);
  global.symbols[ind].textColor = c; //symbols[ind].clear()

  global.symbols[ind].update();
}

function form2(x, y, c) {
  var ind = index(x, y);
  console.log(ind);
  console.log("rs");
  global.symbols[ind].type = c;
  global.symbols[ind].clear().update();
}

function symbolGroesse2(x, y, s) {
  var ind = index(x, y);
  global.symbols[ind].size = s;
  global.symbols[ind].clear().update();
}

function formen(type) {
  for (var x = 0; x < global.columns; x++) {
    for (var y = 0; y < global.rows; y++) {
      form2(x, y, type);
    }
  }
}

function index(x, y) {
  var ind = x + y * global.columns;

  if (x >= global.columns | y >= global.rows | x < 0 | y < 0) {
    var e = new Error();
    var m = e.stack.match(/ymous>:[0-9]+/);
    var parts = m[0].split(":");
    console.log(">>" + parts[1]);
    throw new RangeError("Out of range: (" + x + "," + y + ") line " + parts[1]);
  }

  return ind;
}

function groesse(c, r) {
  global.columns = c;
  global.rows = r;
  clearAll();
  board();
}

function clearAll() {
  while (global.symbols.length > 0) {
    global.symbols.pop();
  }

  clearCanvas();
}

function board() {
  global.xmin = -1;
  global.ymin = -1;
  global.xmax = global.columns;
  global.ymax = global.rows; //console.log( "in board() ")

  for (var x = 0; x < global.columns; x++) {
    for (var y = 0; y < global.rows; y++) {
      var ind = index(x, y);
      global.symbols[ind] = new _Symbol(x, y); //form2( x, y, "c");
      //console.log( ind + " " + symbols[ind].dataSet.name)
    }
  }

  console.log(infotext());
  document.getElementById("titel").innerHTML = infotext();
}
function runCode(editor) {
  console.log("run code ");
  global.logView.innerHTML = ""; //var code = document.getElementById("codeView").value

  eval(editor.getValue());
}

function runJava() {
  console.log("run java code ");
  logView.innerHTML = "";
  var code = document.getElementById("codeView").value;
  var fcts = [];
  $.post("api.php", {
    action: "compile",
    code: code
  }, function (data) {
    alert("Data: " + data);
    var lines = JSON.parse(data);

    for (var i in lines) {
      if (lines[i].indexOf(">>") == 0) {
        eval(lines[i].slice(3));
      } else {
        logView.innerHTML += lines[i] + "<br>";
      }
    }
  });
}

function download(text, name, type) {
  var a = document.createElement("a");
  var file = new Blob([text], {
    type: type
  });
  a.href = URL.createObjectURL(file);
  a.download = name;
  a.click();
}
function saveCode(fileName, editor) {
  console.log("save code ");
  global.logView = document.getElementById("consoleLog");

  if (fileName === "") {
    global.logView.innerHTML = 'Bitte Dateiname  angeben';
    return;
  }

  download(editor.getValue(), fileName, 'text/plain');
  global.logView.innerHTML = "";
}
function clearCanvas() {
  console.log("clear canvas");
  global.ctx.beginPath();
  global.ctx.clearRect(0, 0, global.width, global.height);
}

function flaeche(c) {
  console.log("fill canvas");
  var canvas = document.getElementById("myCanvas");
  canvas.style.background = c; //ctx.FillRect( 0, 0, width, height)
}

function sleep(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ 3:
/*!************************************!*\
  !*** multi ./resources/js/live.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Hochschule\Master\2.Semester\BAWAWE\FinalesProjekt\resources\js\live.js */"./resources/js/live.js");


/***/ })

/******/ });