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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/javascript-lint.js":
/*!*****************************************!*\
  !*** ./resources/js/javascript-lint.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  "use strict"; // declare global: JSHINT

  var bogus = ["Dangerous comment"];
  var warnings = [["Expected '{'", "Statement body should be inside '{ }' braces."]];
  var errors = ["Missing semicolon", "Extra comma", "Missing property name", "Unmatched ", " and instead saw", " is not defined", "Unclosed string", "Stopping, unable to continue"];

  function validator(text, options) {
    JSHINT(text, options);
    var errors = JSHINT.data().errors,
        result = [];
    if (errors) parseErrors(errors, result);
    return result;
  }

  CodeMirror.registerHelper("lint", "javascript", validator);
  CodeMirror.javascriptValidator = CodeMirror.lint.javascript; // deprecated

  function cleanup(error) {
    // All problems are warnings by default
    fixWith(error, warnings, "warning", true);
    fixWith(error, errors, "error");
    return isBogus(error) ? null : error;
  }

  function fixWith(error, fixes, severity, force) {
    var description, fix, find, replace, found;
    description = error.description;

    for (var i = 0; i < fixes.length; i++) {
      fix = fixes[i];
      find = typeof fix === "string" ? fix : fix[0];
      replace = typeof fix === "string" ? null : fix[1];
      found = description.indexOf(find) !== -1;

      if (force || found) {
        error.severity = severity;
      }

      if (found && replace) {
        error.description = replace;
      }
    }
  }

  function isBogus(error) {
    var description = error.description;

    for (var i = 0; i < bogus.length; i++) {
      if (description.indexOf(bogus[i]) !== -1) {
        return true;
      }
    }

    return false;
  }

  function parseErrors(errors, output) {
    for (var i = 0; i < errors.length; i++) {
      var error = errors[i];

      if (error) {
        var linetabpositions, index;
        linetabpositions = []; // This next block is to fix a problem in jshint. Jshint
        // replaces
        // all tabs with spaces then performs some checks. The error
        // positions (character/space) are then reported incorrectly,
        // not taking the replacement step into account. Here we look
        // at the evidence line and try to adjust the character position
        // to the correct value.

        if (error.evidence) {
          // Tab positions are computed once per line and cached
          var tabpositions = linetabpositions[error.line];

          if (!tabpositions) {
            var evidence = error.evidence;
            tabpositions = []; // ugggh phantomjs does not like this
            // forEachChar(evidence, function(item, index) {

            Array.prototype.forEach.call(evidence, function (item, index) {
              if (item === '\t') {
                // First col is 1 (not 0) to match error
                // positions
                tabpositions.push(index + 1);
              }
            });
            linetabpositions[error.line] = tabpositions;
          }

          if (tabpositions.length > 0) {
            var pos = error.character;
            tabpositions.forEach(function (tabposition) {
              if (pos > tabposition) pos -= 1;
            });
            error.character = pos;
          }
        }

        var start = error.character - 1,
            end = start + 1;

        if (error.evidence) {
          index = error.evidence.substring(start).search(/.\b/);

          if (index > -1) {
            end += index;
          }
        } // Convert to format expected by validation service


        error.description = error.reason; // + "(jshint)";

        error.start = error.character;
        error.end = end;
        error = cleanup(error);
        if (error) output.push({
          message: error.description,
          severity: error.severity,
          from: CodeMirror.Pos(error.line - 1, start),
          to: CodeMirror.Pos(error.line - 1, end)
        });
      }
    }
  }
})();

/***/ }),

/***/ 9:
/*!***********************************************!*\
  !*** multi ./resources/js/javascript-lint.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Hochschule\Master\2.Semester\BAWAWE\FinalesProjekt\resources\js\javascript-lint.js */"./resources/js/javascript-lint.js");


/***/ })

/******/ });