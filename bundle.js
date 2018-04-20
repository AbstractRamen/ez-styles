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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _styleRules = __webpack_require__(1);

document.addEventListener('DOMContentLoaded', function () {

  var selectedCombo = {
    hatColor: 'none',
    outerColor: 'none',
    shirtColor: 'none',
    beltColor: 'none',
    pantsColor: 'none',
    shoesColor: 'none',
    watchColor: 'none'

    // window.selectedCombo = selectedCombo

  };var hat = document.getElementsByClassName('colors hatColor')[0];
  var outer = document.getElementsByClassName('colors outerColor')[0];
  var shirt = document.getElementsByClassName('colors shirtColor')[0];
  var belt = document.getElementsByClassName('colors beltColor')[0];
  var pants = document.getElementsByClassName('colors pantsColor')[0];
  var shoes = document.getElementsByClassName('colors shoesColor')[0];
  var watch = document.getElementsByClassName('colors watchColor')[0];
  // Watch + Outer to be implemented

  var selectionArr = [hat, outer, shirt, belt, pants, shoes, watch];

  var changeProp = function changeProp(apparel) {
    // Dynamically change value of class' this.color to select prop value
    // Also change asset color on page
    apparel.addEventListener('change', function (event) {
      var selectedColor = event.target.value;
      selectedCombo[event.target.classList[1]] = selectedColor;
      var visualAsset = document.getElementById(event.target.classList[1]);
      visualAsset.classList = selectedColor;
    });
  };

  selectionArr.map(function (apparel) {
    changeProp(apparel);
  });

  var getApparelCombo = function getApparelCombo(combo) {
    // Grab all values and delete all "selected: null"
    Object.keys(selectedCombo).map(function (apparel) {
      if (selectedCombo[apparel] === 'none') {
        delete selectedCombo[apparel];
      }
    });
    return selectedCombo;
  };

  // window.getApparelCombo = getApparelCombo;

  // window.ensembleBreak = ensembleBreak

  // window.colorsArr = colorsArr

  // window.tooManyNonMono = tooManyNonMono

  // window.onesies = onesies

  var throwResponse = function throwResponse(apparelCombo) {
    var errors = [];
    var answerNode = document.getElementById('answer-list');

    if ((0, _styleRules.noNudity)(apparelCombo) || Object.values(apparelCombo).length === 0) {
      errors.push('Unfortunately, al naturale is not in style. Please put on clothes (both pants and shirt)!');
    } else {
      if ((0, _styleRules.ensembleBreak)(apparelCombo)) {
        errors.push('Ensemble Pieces(hat, belt, shoes, watch) must be the same color');
      }
      if ((0, _styleRules.tooManyNonMono)(apparelCombo)) {
        errors.push('Too many chromatic colors. Try replacing one of them with a monochromatic one.');
      }
      if ((0, _styleRules.onesies)(apparelCombo)) {
        errors.push('Must have at least one different color(no onesies!)');
      }
      if (!Object.keys(apparelCombo).includes('shoesColor')) {
        errors.push('No shoes, no socks, no service!');
      }
    }

    if (errors.length === 0) {
      answerNode.innerHTML = "";
      var soleAnswer = document.createElement("li");
      var displayAnswer = document.createTextNode('Congrats! You\'re a natural dresser. Looking snazzy!');
      soleAnswer.appendChild(displayAnswer);
      answerNode.appendChild(soleAnswer);
    } else {
      answerNode.innerHTML = "";
      errors.map(function (errorMsg) {
        var errorLi = document.createElement('li');
        var emptyBr = document.createElement('br');
        var displayError = document.createTextNode(errorMsg);
        errorLi.appendChild(displayError);
        answerNode.appendChild(errorLi);
        answerNode.appendChild(emptyBr);
      });
    }
  };

  // window.throwResponse = throwResponse

  // Modal for style guide
  var infoModal = document.getElementById('style-modal');
  var infoBtn = document.getElementById("style-button");
  var infoSpan = document.getElementsByClassName("close")[0];

  infoBtn.onclick = function () {
    infoModal.style.display = "block";
  };

  infoSpan.onclick = function () {
    infoModal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == infoModal) {
      infoModal.style.display = "none";
    }
    if (event.target == checkModal) {
      checkModal.style.display = "none";
    }
  };

  // Modal for answer/style check
  var checkModal = document.getElementById('answer-modal');
  var checkBtn = document.getElementById("check-submit");
  var checkSpan = document.getElementById("close-answers");

  checkBtn.onclick = function () {
    checkModal.style.display = "block";
    var finalSelected = getApparelCombo(selectedCombo);
    throwResponse(finalSelected);
  };

  checkSpan.onclick = function () {
    checkModal.style.display = "none";
  };
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var monochrome = exports.monochrome = ['black', 'white', 'grey'];
var chromatic = exports.chromatic = ['red', 'orange', 'yellow', 'green', 'blue', 'violet', 'brown'];

var ensembleBreak = exports.ensembleBreak = function ensembleBreak(apparelCombo) {
  // Check for belt, watch, shoes. If any selected, make sure same color all
  // True means rule is broken

  var ensembleColors = [];
  var comboArr = Object.keys(apparelCombo);

  comboArr.map(function (item) {
    if (item === 'beltColor' || item === 'hatColor' || item === 'shoesColor' || item === 'watchColor') {
      if (apparelCombo[item] !== 'none' && !ensembleColors.includes(apparelCombo[item])) {
        ensembleColors.push(apparelCombo[item]);
      }
    }
  });

  if (ensembleColors.length > 1) {
    return true;
  }
  return false;
};

var tooManyNonMono = exports.tooManyNonMono = function tooManyNonMono(apparelCombo) {
  // Ensure max non-monochrome <= 2
  // True means rule is broken
  var colorVals = Object.values(apparelCombo);
  var count = 0;
  var dummyArr = [];

  colorVals.map(function (color) {
    if (chromatic.includes(color)) {
      count++;
    }
  });

  if (count > 2) {
    return true;
  }

  return false;
};

var onesies = exports.onesies = function onesies(apparelCombo) {
  // Ensure no onesies
  // True means rule is broken
  var uniqColors = colorsArr(apparelCombo);

  if (uniqColors.length === 1) {
    return true;
  }

  return false;
};

var colorsArr = exports.colorsArr = function colorsArr(apparelCombo) {
  // Get unique colors
  var colorVals = Object.values(apparelCombo);
  var uniqColors = [];

  colorVals.map(function (color) {
    if (uniqColors.includes(color)) {} else {
      uniqColors.push(color);
    }
  });

  return uniqColors;
};

var noNudity = exports.noNudity = function noNudity(apparelCombo) {

  var wornObjects = Object.keys(apparelCombo);
  if (!wornObjects.includes('shirtColor') || !wornObjects.includes('pantsColor')) {
    return true;
  }
  return false;
};

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map