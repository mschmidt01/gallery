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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/lint.js":
/*!******************************!*\
  !*** ./resources/js/lint.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  "use strict";

  var GUTTER_ID = "CodeMirror-lint-markers";
  var SEVERITIES = /^(?:error|warning)$/;

  function showTooltip(e, content) {
    var tt = document.createElement("div");
    tt.className = "CodeMirror-lint-tooltip";
    tt.appendChild(content.cloneNode(true));
    document.body.appendChild(tt);

    function position(e) {
      if (!tt.parentNode) return CodeMirror.off(document, "mousemove", position);
      tt.style.top = Math.max(0, e.clientY - tt.offsetHeight - 5) + "px";
      tt.style.left = e.clientX + 5 + "px";
    }

    CodeMirror.on(document, "mousemove", position);
    position(e);
    if (tt.style.opacity != null) tt.style.opacity = 1;
    return tt;
  }

  function rm(elt) {
    if (elt.parentNode) elt.parentNode.removeChild(elt);
  }

  function hideTooltip(tt) {
    if (!tt.parentNode) return;
    if (tt.style.opacity == null) rm(tt);
    tt.style.opacity = 0;
    setTimeout(function () {
      rm(tt);
    }, 600);
  }

  function showTooltipFor(e, content, node) {
    var tooltip = showTooltip(e, content);

    function hide() {
      CodeMirror.off(node, "mouseout", hide);

      if (tooltip) {
        hideTooltip(tooltip);
        tooltip = null;
      }
    }

    var poll = setInterval(function () {
      if (tooltip) for (var n = node;; n = n.parentNode) {
        if (n == document.body) return;

        if (!n) {
          hide();
          break;
        }
      }
      if (!tooltip) return clearInterval(poll);
    }, 400);
    CodeMirror.on(node, "mouseout", hide);
  }

  function LintState(cm, options, hasGutter) {
    this.marked = [];
    this.options = options;
    this.timeout = null;
    this.hasGutter = hasGutter;

    this.onMouseOver = function (e) {
      onMouseOver(cm, e);
    };
  }

  function parseOptions(cm, options) {
    if (options instanceof Function) return {
      getAnnotations: options
    };
    if (!options || options === true) options = {};
    if (!options.getAnnotations) options.getAnnotations = cm.getHelper(CodeMirror.Pos(0, 0), "lint");
    if (!options.getAnnotations) throw new Error("Required option 'getAnnotations' missing (lint addon)");
    return options;
  }

  function clearMarks(cm) {
    var state = cm.state.lint;
    if (state.hasGutter) cm.clearGutter(GUTTER_ID);

    for (var i = 0; i < state.marked.length; ++i) {
      state.marked[i].clear();
    }

    state.marked.length = 0;
  }

  function makeMarker(labels, severity, multiple, tooltips) {
    var marker = document.createElement("div"),
        inner = marker;
    marker.className = "CodeMirror-lint-marker-" + severity;

    if (multiple) {
      inner = marker.appendChild(document.createElement("div"));
      inner.className = "CodeMirror-lint-marker-multiple";
    }

    if (tooltips != false) CodeMirror.on(inner, "mouseover", function (e) {
      showTooltipFor(e, labels, inner);
    });
    return marker;
  }

  function getMaxSeverity(a, b) {
    if (a == "error") return a;else return b;
  }

  function groupByLine(annotations) {
    var lines = [];

    for (var i = 0; i < annotations.length; ++i) {
      var ann = annotations[i],
          line = ann.from.line;
      (lines[line] || (lines[line] = [])).push(ann);
    }

    return lines;
  }

  function annotationTooltip(ann) {
    var severity = ann.severity;
    if (!SEVERITIES.test(severity)) severity = "error";
    var tip = document.createElement("div");
    tip.className = "CodeMirror-lint-message-" + severity;
    tip.appendChild(document.createTextNode(ann.message));
    return tip;
  }

  function startLinting(cm) {
    var state = cm.state.lint,
        options = state.options;
    if (options.async) options.getAnnotations(cm, updateLinting, options);else updateLinting(cm, options.getAnnotations(cm.getValue(), options));
  }

  function updateLinting(cm, annotationsNotSorted) {
    clearMarks(cm);
    var state = cm.state.lint,
        options = state.options;
    var annotations = groupByLine(annotationsNotSorted);

    for (var line = 0; line < annotations.length; ++line) {
      var anns = annotations[line];
      if (!anns) continue;
      var maxSeverity = null;
      var tipLabel = state.hasGutter && document.createDocumentFragment();

      for (var i = 0; i < anns.length; ++i) {
        var ann = anns[i];
        var severity = ann.severity;
        if (!SEVERITIES.test(severity)) severity = "error";
        maxSeverity = getMaxSeverity(maxSeverity, severity);
        if (options.formatAnnotation) ann = options.formatAnnotation(ann);
        if (state.hasGutter) tipLabel.appendChild(annotationTooltip(ann));
        if (ann.to) state.marked.push(cm.markText(ann.from, ann.to, {
          className: "CodeMirror-lint-mark-" + severity,
          __annotation: ann
        }));
      }

      if (state.hasGutter) cm.setGutterMarker(line, GUTTER_ID, makeMarker(tipLabel, maxSeverity, anns.length > 1, state.options.tooltips));
    }

    if (options.onUpdateLinting) options.onUpdateLinting(annotationsNotSorted, annotations, cm);
  }

  function onChange(cm) {
    var state = cm.state.lint;
    clearTimeout(state.timeout);
    state.timeout = setTimeout(function () {
      startLinting(cm);
    }, state.options.delay || 500);
  }

  function popupSpanTooltip(ann, e) {
    var target = e.target || e.srcElement;
    showTooltipFor(e, annotationTooltip(ann), target);
  } // When the mouseover fires, the cursor might not actually be over
  // the character itself yet. These pairs of x,y offsets are used to
  // probe a few nearby points when no suitable marked range is found.


  var nearby = [0, 0, 0, 5, 0, -5, 5, 0, -5, 0];

  function onMouseOver(cm, e) {
    if (!/\bCodeMirror-lint-mark-/.test((e.target || e.srcElement).className)) return;

    for (var i = 0; i < nearby.length; i += 2) {
      var spans = cm.findMarksAt(cm.coordsChar({
        left: e.clientX + nearby[i],
        top: e.clientY + nearby[i + 1]
      }));

      for (var j = 0; j < spans.length; ++j) {
        var span = spans[j],
            ann = span.__annotation;
        if (ann) return popupSpanTooltip(ann, e);
      }
    }
  }

  function optionHandler(cm, val, old) {
    if (old && old != CodeMirror.Init) {
      clearMarks(cm);
      cm.off("change", onChange);
      CodeMirror.off(cm.getWrapperElement(), "mouseover", cm.state.lint.onMouseOver);
      delete cm.state.lint;
    }

    if (val) {
      var gutters = cm.getOption("gutters"),
          hasLintGutter = false;

      for (var i = 0; i < gutters.length; ++i) {
        if (gutters[i] == GUTTER_ID) hasLintGutter = true;
      }

      var state = cm.state.lint = new LintState(cm, parseOptions(cm, val), hasLintGutter);
      cm.on("change", onChange);
      if (state.options.tooltips != false) CodeMirror.on(cm.getWrapperElement(), "mouseover", state.onMouseOver);
      startLinting(cm);
    }
  }

  CodeMirror.defineOption("lintWith", false, optionHandler); // deprecated

  CodeMirror.defineOption("lint", false, optionHandler); // deprecated
})();

/***/ }),

/***/ 8:
/*!************************************!*\
  !*** multi ./resources/js/lint.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Hochschule\Master\2.Semester\BAWAWE\FinalesProjekt\resources\js\lint.js */"./resources/js/lint.js");


/***/ })

/******/ });