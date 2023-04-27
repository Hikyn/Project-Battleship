/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {\n  box-sizing: border-box;\n  font-family: Roboto, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\n\n.hello {\n    color: red;\n}\n\nbody {\n  height: 100vh;\n}\n\n.main {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n}\n\n.gameboard {\n  display: flex;\n  flex-direction: row;\n  height: fit-content;\n}\n\n.column {\n  display: flex;\n  flex-direction: column;\n}\n\n.header {\n  text-align: center;\n  font-size: 2rem;\n}\n\n.your-side,\n.enemy-side {\n  margin:2rem;\n  height: fit-content;\n}\n\n.cell {\n  width: 3rem;\n  height: 3rem;\n  --rgb: 250, 215, 170;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.cell.ship {\n  --rgb: 27, 133, 137;\n  /*background-color: rgb(var(--rgb));*/\n}\n\n.cell.ship.hit {\n  --rgb: 95, 110, 160;\n  /*background-color: rgb(var(--rgb));*/\n}\n\n.cell.hit {\n  --rgb: 229, 112, 112;\n  /*background-color: rgb(var(--rgb));*/\n  \n}\n\n.cell.ship.hit.sunk {\n  --rgb: 110, 94, 94;\n  /*background-color: rgb(var(--rgb));*/\n}\n\n.cell.hit::before {\n  content: '•';\n  font-size: 2em;\n}\n\n.cell.ship::before {\n  content: '';\n}\n\n.cell.ship.hit::before {\n  content: 'X';\n}\n\nbutton.cell {\n  box-shadow: 2px 2px 2px 1px rgba(128, 128, 128, 0.068);\n  color: black;\n  text-decoration: none;\n  --alpha: 0.8;\n  background-color: rgba(var(--rgb), var(--alpha));\n  cursor: crosshair;\n}\n\n.gameboard-self button {\n  cursor: auto;\n}\n\nbutton.cell:hover {\n  --alpha: 1;\n}\n\nbutton.cell.empty:not(.hit):hover {\n  --rgb: 216, 185, 145;\n}\n\nbutton.cell.empty.hit:hover {\n  --rgb: 199, 95, 95;\n}\n\n.ships-to-place {\n  margin: 1rem 0rem;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n\n.ships-to-place.horizontal {\n  display: flex;\n  flex-direction: column;\n}\n\n.ships-to-place.vertical {\n  display: flex;\n  flex-direction: row;\n}\n\n.ships-to-place.vertical .ship-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.ships-to-place.horizontal .ship-container {\n  display: flex;\n  flex-direction: row;\n}\n\n.ship-container {\n  box-sizing: border-box;\n  border: 0.3rem solid rgb(128, 0, 0);\n  width: fit-content;\n  height: fit-content;\n}\n\n.available.cell {\n  --rgb: 27, 133, 137;\n  background-color: rgb(var(--rgb));\n  border: 1px solid white;\n}\n\n.available.cell:hover {\n  cursor: pointer;\n}\n\n.selected .cell {\n  --rgb: 53, 58, 203;\n  background-color: rgb(var(--rgb));\n}\n\n.fleet {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.button-orientation {\n  width: 6rem;\n  padding: 1rem;\n}\n\n.gameboard-enemy .ship {\n  --rgb: 250, 215, 170;\n}\n\n.pop-Up-Screen {\n  background-color: rgb(154, 169, 184);\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  text-align: center;\n  padding: 2rem;\n}\n\n.pop-Up-Screen .main {\n  display: grid;\n  margin-left: 20rem;\n  margin-right: 20rem;\n  grid: 1fr / 1fr 1fr;\n  justify-content: center;\n}\n\n.pop-Up-Screen .main .gameboard {\n  display: flex;\n  justify-content: center;\n}\n\n.pop-Up-Screen .main .pop-Up-AvailableShips {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.pop-Up-Screen .title {\n  margin-bottom: 2rem;\n  font-size: 2rem;\n}\n\n.btns {\n  display: grid;\n  grid: 4rem/ 4rem 4rem 4rem;\n  gap: 10rem;\n  justify-content: center;\n  margin: 2rem;\n}\n\n.btns button {\n  width: 5rem;\n  height: 5rem;\n  text-align: center;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,8DAA8D;AAChE;AACA;;;EAGE,mBAAmB;AACrB;;AAEA;IACI,UAAU;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,eAAe;AACjB;;AAEA;;EAEE,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,oBAAoB;EACpB,kBAAkB;EAClB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,qCAAqC;AACvC;;AAEA;EACE,mBAAmB;EACnB,qCAAqC;AACvC;;AAEA;EACE,oBAAoB;EACpB,qCAAqC;;AAEvC;;AAEA;EACE,kBAAkB;EAClB,qCAAqC;AACvC;;AAEA;EACE,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,sDAAsD;EACtD,YAAY;EACZ,qBAAqB;EACrB,YAAY;EACZ,gDAAgD;EAChD,iBAAiB;AACnB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;EACtB,mCAAmC;EACnC,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,iCAAiC;EACjC,uBAAuB;AACzB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,iCAAiC;AACnC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,aAAa;AACf;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,oCAAoC;EACpC,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,mBAAmB;EACnB,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,0BAA0B;EAC1B,UAAU;EACV,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;AACpB","sourcesContent":["html {\n  box-sizing: border-box;\n  font-family: Roboto, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\n\n.hello {\n    color: red;\n}\n\nbody {\n  height: 100vh;\n}\n\n.main {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n}\n\n.gameboard {\n  display: flex;\n  flex-direction: row;\n  height: fit-content;\n}\n\n.column {\n  display: flex;\n  flex-direction: column;\n}\n\n.header {\n  text-align: center;\n  font-size: 2rem;\n}\n\n.your-side,\n.enemy-side {\n  margin:2rem;\n  height: fit-content;\n}\n\n.cell {\n  width: 3rem;\n  height: 3rem;\n  --rgb: 250, 215, 170;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.cell.ship {\n  --rgb: 27, 133, 137;\n  /*background-color: rgb(var(--rgb));*/\n}\n\n.cell.ship.hit {\n  --rgb: 95, 110, 160;\n  /*background-color: rgb(var(--rgb));*/\n}\n\n.cell.hit {\n  --rgb: 229, 112, 112;\n  /*background-color: rgb(var(--rgb));*/\n  \n}\n\n.cell.ship.hit.sunk {\n  --rgb: 110, 94, 94;\n  /*background-color: rgb(var(--rgb));*/\n}\n\n.cell.hit::before {\n  content: '•';\n  font-size: 2em;\n}\n\n.cell.ship::before {\n  content: '';\n}\n\n.cell.ship.hit::before {\n  content: 'X';\n}\n\nbutton.cell {\n  box-shadow: 2px 2px 2px 1px rgba(128, 128, 128, 0.068);\n  color: black;\n  text-decoration: none;\n  --alpha: 0.8;\n  background-color: rgba(var(--rgb), var(--alpha));\n  cursor: crosshair;\n}\n\n.gameboard-self button {\n  cursor: auto;\n}\n\nbutton.cell:hover {\n  --alpha: 1;\n}\n\nbutton.cell.empty:not(.hit):hover {\n  --rgb: 216, 185, 145;\n}\n\nbutton.cell.empty.hit:hover {\n  --rgb: 199, 95, 95;\n}\n\n.ships-to-place {\n  margin: 1rem 0rem;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n\n.ships-to-place.horizontal {\n  display: flex;\n  flex-direction: column;\n}\n\n.ships-to-place.vertical {\n  display: flex;\n  flex-direction: row;\n}\n\n.ships-to-place.vertical .ship-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.ships-to-place.horizontal .ship-container {\n  display: flex;\n  flex-direction: row;\n}\n\n.ship-container {\n  box-sizing: border-box;\n  border: 0.3rem solid rgb(128, 0, 0);\n  width: fit-content;\n  height: fit-content;\n}\n\n.available.cell {\n  --rgb: 27, 133, 137;\n  background-color: rgb(var(--rgb));\n  border: 1px solid white;\n}\n\n.available.cell:hover {\n  cursor: pointer;\n}\n\n.selected .cell {\n  --rgb: 53, 58, 203;\n  background-color: rgb(var(--rgb));\n}\n\n.fleet {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.button-orientation {\n  width: 6rem;\n  padding: 1rem;\n}\n\n.gameboard-enemy .ship {\n  --rgb: 250, 215, 170;\n}\n\n.pop-Up-Screen {\n  background-color: rgb(154, 169, 184);\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  text-align: center;\n  padding: 2rem;\n}\n\n.pop-Up-Screen .main {\n  display: grid;\n  margin-left: 20rem;\n  margin-right: 20rem;\n  grid: 1fr / 1fr 1fr;\n  justify-content: center;\n}\n\n.pop-Up-Screen .main .gameboard {\n  display: flex;\n  justify-content: center;\n}\n\n.pop-Up-Screen .main .pop-Up-AvailableShips {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.pop-Up-Screen .title {\n  margin-bottom: 2rem;\n  font-size: 2rem;\n}\n\n.btns {\n  display: grid;\n  grid: 4rem/ 4rem 4rem 4rem;\n  gap: 10rem;\n  justify-content: center;\n  margin: 2rem;\n}\n\n.btns button {\n  width: 5rem;\n  height: 5rem;\n  text-align: center;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/gameLoop.js":
/*!*************************!*\
  !*** ./src/gameLoop.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameloop": () => (/* binding */ gameloop)
/* harmony export */ });
/* harmony import */ var _playerFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./playerFactory */ "./src/playerFactory.js");
/* harmony import */ var _shipFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shipFactory */ "./src/shipFactory.js");
/* harmony import */ var _gameboardFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameboardFactory */ "./src/gameboardFactory.js");
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderer */ "./src/renderer.js");





function gameloop(gameboardLength) {
    // Dummy data
    const gameboard1 = (0,_gameboardFactory__WEBPACK_IMPORTED_MODULE_2__.gameboardFactory)(gameboardLength);
    let target = document.querySelector('.gameboard-self');
    const player1 = (0,_playerFactory__WEBPACK_IMPORTED_MODULE_0__.playerFactory)('Hikyn', gameboard1, target);

    // renderer.renderGameboard(player1);
    // renderer.renderAvailableShips(player1);

    _renderer__WEBPACK_IMPORTED_MODULE_3__.renderer.renderPlacementScreen(player1);

    const gameboard2 = (0,_gameboardFactory__WEBPACK_IMPORTED_MODULE_2__.gameboardFactory)(gameboardLength);
    target = document.querySelector('.gameboard-enemy');
    const player2 = (0,_playerFactory__WEBPACK_IMPORTED_MODULE_0__.playerFactory)('Computer', gameboard2, target, true);
    player2.gameboard.randomlyPlaceAllShips();

    // renderer.renderGameboard(player2);
    // renderer.listenForAttacks(player2, player1);
}




/***/ }),

/***/ "./src/gameboardFactory.js":
/*!*********************************!*\
  !*** ./src/gameboardFactory.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameboardFactory": () => (/* binding */ gameboardFactory)
/* harmony export */ });
/* harmony import */ var _shipFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipFactory */ "./src/shipFactory.js");


const gameboardFactory = (length, availableShips = [5, 4, 3, 2]) => {
    const cells = new Array(length);
    const missedShots = [];
    const accurateShots = [];
    const initialShips = [...availableShips];
    let totalShipsLength = 0;

    // Create double array
    const initializeCells = () => {
        for (let i = 0; i < length; i += 1) {
            cells[i] = new Array(length);
        }

        // Populate double array with 0
        for (let i = 0; i < length; i += 1) {
            for (let j = 0; j < length; j += 1) {
                cells[i][j] = 0;
            }
        }
    };

    initializeCells();

    const placeShip = (x, y, shipLength, orientation) => {
        // eslint-disable-next-line no-param-reassign
        x = Number(x);
        // eslint-disable-next-line no-param-reassign
        y = Number(y);
        // eslint-disable-next-line no-param-reassign
        shipLength = Number(shipLength);
        
        if (!availableShips.includes(shipLength)) {
            throw new Error('There are no available ships with that length');
        }
        const ship = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_0__.shipFactory)(shipLength);
        for (let i = 0; i < shipLength; i += 1) {
            if (orientation === 'vertical') {
                if (cells[x][y + i] !== undefined && cells[x][y + i] !== 0) {
                    throw new Error('Ships are overlapping');
                }
            } else if (cells[x + i] !== undefined && cells[x + i][y] !== 0) {
                throw new Error('Ships are overlapping');
            }
        }

        if (orientation === 'vertical') {
            if (+y + shipLength > length) {
                // console.log(`${y + shipLength} > ${length}`);
                throw new Error('Out of bounds: vertical');
            }
            for (let i = 0; i < shipLength; i += 1) {
                cells[x][y + i] = ship;
            }
            totalShipsLength += shipLength;
        } else if (orientation === 'horizontal') {
            if (+x + shipLength > length) {
                // console.log(`${x + shipLength} > ${length}`);
                throw new Error('Out of bounds: horizontal');
            }
            for (let i = 0; i < shipLength; i += 1) {
                cells[x + i][y] = ship;
            }
            totalShipsLength += shipLength;
        }
        console.log(`Ship created at: ${x}|${y}`);
        removeAvailableShip(availableShips.indexOf(shipLength));
    };

    const isCellHit = (x, y) => {
        const hit = [x, y];
        const missedShotsJson = JSON.stringify(missedShots);
        const accurateShotsJson = JSON.stringify(accurateShots);

        if (
            missedShotsJson.includes(hit) === true ||
            accurateShotsJson.includes(hit) === true
        ) {
            return true;
        }
        return false;
    };

    const receiveAttack = (x, y) => {
        if (isCellHit(x, y)) {
            throw new Error('Cant hit same cell twice');
        } else if (cells[x][y] === 0) {
            // console.log('Missed shot!');
            missedShots.push([x, y]);
        } else {
            // console.log('Accurate shot!');
            cells[x][y].hit();
            accurateShots.push([x, y]);
        }
        return isAllSunk();
    };

    const isAllSunk = () => accurateShots.length >= totalShipsLength;

    const removeAvailableShip = (index) => {
        if (index !== -1) {
            availableShips.splice(index, 1);
            // console.log(availableShips);
        }
    };

    const randomlyPlaceAllShips = () => {
        while (availableShips.length > 0) {
            const randomX = Math.floor(Math.random() * length);
            const randomY = Math.floor(Math.random() * length);
            const randomOrientation = Math.floor(Math.random() * 2);
            let orientation;
            if (randomOrientation === 0) {
                orientation = 'horizontal';
            } else if (randomOrientation === 1) {
                orientation = 'vertical';
            }

            try {
                placeShip(randomX, randomY, availableShips[0], orientation);
                console.log(availableShips);
            } catch (error) {
                randomlyPlaceAllShips();
            }
        }
    };

    return {
        cells,
        receiveAttack,
        isAllSunk,
        placeShip,
        length,
        missedShots,
        accurateShots,
        availableShips,
        isCellHit,
        removeAvailableShip,
        randomlyPlaceAllShips
    };
};




/***/ }),

/***/ "./src/playerFactory.js":
/*!******************************!*\
  !*** ./src/playerFactory.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "playerFactory": () => (/* binding */ playerFactory)
/* harmony export */ });
const playerFactory = (name, gameboard, gameboardElement, isAi = false) => {
    let selectedElement;
    let selectedOrientation = 'horizontal';

    const makeMove = (enemyPlayer) => {
        const randomX = Math.floor(Math.random() * gameboard.length);
        const randomY = Math.floor(Math.random() * gameboard.length);
        try {
            enemyPlayer.gameboard.receiveAttack(randomX, randomY);
        } catch (error) {
            makeMove(enemyPlayer);
        }
    };

    const isAllShipsPlaced = () => gameboard.availableShips.length <= 0;

    const isLost = () => gameboard.isAllSunk();
    return {
        name,
        gameboard,
        isAi,
        makeMove,
        isLost,
        gameboardElement,
        selectedElement,
        selectedOrientation,
        isAllShipsPlaced
    };
};




/***/ }),

/***/ "./src/renderer.js":
/*!*************************!*\
  !*** ./src/renderer.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderer": () => (/* binding */ renderer)
/* harmony export */ });
/* harmony import */ var _gameboardFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboardFactory */ "./src/gameboardFactory.js");


const renderer = (() => {
    const renderPlacementScreen = (
        player,
        targetParent = player.gameboardElement
    ) => {
        targetParent.textContent = '';

        const popUpScreen = document.createElement('div');
        popUpScreen.classList.add('pop-Up-Screen');

        const popUpTitle = document.createElement('div');
        popUpTitle.textContent = `Admiral ${player.name}, place your ships!`;
        popUpTitle.classList.add('title');

        const popUpMain = document.createElement('div');
        popUpMain.classList.add('main');

        const popUpGameboard = document.createElement('div');
        popUpGameboard.classList.add('gameboard');

        const popUpAvailableShips = document.createElement('div');
        popUpAvailableShips.classList.add('pop-Up-AvailableShips');

        const randomButton = document.createElement('button');
        randomButton.classList.add('btn-retry');
        randomButton.textContent = 'Random';

        const finishButton = document.createElement('button');
        finishButton.classList.add('btn-finish');
        finishButton.textContent = 'Finish';

        const resetButton = document.createElement('button');
        resetButton.classList.add('btn-reset');
        resetButton.textContent = 'Reset';
        resetButton.addEventListener('click', () => {
            player.gameboard = (0,_gameboardFactory__WEBPACK_IMPORTED_MODULE_0__.gameboardFactory)(player.gameboard.length);
            renderPlacementScreen(player, targetParent);
        });

        const buttons = document.createElement('div');
        buttons.classList.add('btns');

        buttons.appendChild(randomButton);
        buttons.appendChild(finishButton);
        buttons.appendChild(resetButton);

        popUpMain.appendChild(popUpGameboard);
        popUpMain.appendChild(popUpAvailableShips);

        popUpScreen.appendChild(popUpTitle);
        popUpScreen.appendChild(popUpMain);
        popUpScreen.appendChild(buttons);

        targetParent.appendChild(popUpScreen);

        renderGameboard(player, popUpGameboard);
        renderAvailableShips(
            player,
            document.querySelector('.pop-Up-AvailableShips')
        );
    };

    const renderGameboard = (
        player,
        targetParent = player.gameboardElement
    ) => {
        const createCoordinateColumn = () => {
            const newColumnElement = createColumn();
            let newCellElement;
            for (let i = -1; i < player.gameboard.length; i += 1) {
                if (i === -1) {
                    newCellElement = document.createElement('div');
                    newCellElement.classList.toggle('cell');
                    newCellElement.classList.toggle('null');
                } else {
                    newCellElement = document.createElement('div');
                    newCellElement.classList.toggle('cell');
                    newCellElement.textContent = `${i + 1}`;
                }
                newColumnElement.appendChild(newCellElement);
            }

            return newColumnElement;
        };

        const createColumn = () => {
            const newColumnElement = document.createElement('div');
            newColumnElement.classList.toggle('column');

            return newColumnElement;
        };

        const createAlphabetCell = (letter) => {
            const charcode = 65 + Number(letter);
            const char = String.fromCharCode(charcode);
            const newCellElement = document.createElement('div');
            newCellElement.classList.toggle('cell');
            newCellElement.textContent = char;

            return newCellElement;
        };

        const createGameboardCell = (x, y) => {
            const cell = player.gameboard.cells[x][y];

            const newCellElement = document.createElement('button');
            newCellElement.classList.toggle('cell');

            if (player.gameboard.isCellHit(x, y)) {
                newCellElement.classList.toggle('hit');
            }

            if (cell === 0) {
                // newCellElement.textContent = 0;
                newCellElement.classList.toggle('empty');
            } else {
                newCellElement.classList.toggle('ship');

                if (cell.isSunk()) {
                    newCellElement.classList.toggle('sunk');
                }
            }

            return newCellElement;
        };
        // Renders gameboard and appends to target element
        targetParent.textContent = '';

        let columnElement;
        let cellElement;

        for (let x = -1; x < player.gameboard.cells.length; x += 1) {
            // If it is a first column, we create coordinate column
            if (x === -1) {
                columnElement = createCoordinateColumn();
            } else {
                // Else we create usual column and populate it
                columnElement = createColumn();

                for (let y = -1; y < player.gameboard.cells.length; y += 1) {
                    // First row will get a letter
                    if (y === -1) {
                        cellElement = createAlphabetCell(x);
                    } else {
                        cellElement = createGameboardCell(x, y);
                    }
                    columnElement.appendChild(cellElement);
                }
            }
            targetParent.appendChild(columnElement);
        }
        listenForShipPlacement(player, targetParent);
    };

    const listenForAttacks = (defendingPlayer, attackingPlayer) => {
        const target = defendingPlayer.gameboardElement;
        const columns = target.children;
        for (let i = 0; i < columns.length; i += 1) {
            const column = columns[i];
            const cells = column.children;
            for (let j = 0; j < cells.length; j += 1) {
                cells[j].addEventListener('click', () => {
                    if (!attackingPlayer.isAllShipsPlaced()) {
                        console.log(
                            `Player ${attackingPlayer.name} has not finished placing ships`
                        );
                        console.log(
                            `Remaining ships: ${attackingPlayer.gameboard.availableShips}`
                        );
                        return;
                    }
                    defendingPlayer.gameboard.receiveAttack(i, j);
                    if (defendingPlayer.isLost()) {
                        console.log(`Player ${defendingPlayer.name} loses!`);
                    }
                    renderGameboard(defendingPlayer);
                    listenForAttacks(defendingPlayer, attackingPlayer);
                    // Ai makes a move
                    defendingPlayer.makeMove(attackingPlayer);
                    renderGameboard(attackingPlayer);
                });
            }
        }
    };

    const renderAvailableShips = (
        player,
        targetParent = document.querySelector('.pop-Up-AvailableShips')
    ) => {
        targetParent.textContent = '';

        const message = document.createElement('div');
        message.textContent = 'Available ships';
        targetParent.appendChild(message);

        const changeOrientation = document.createElement('button');
        changeOrientation.classList.add('button-orientation');
        changeOrientation.textContent = player.selectedOrientation;
        targetParent.appendChild(changeOrientation);
        changeOrientation.addEventListener('click', () => {
            if (player.selectedOrientation === 'horizontal') {
                player.selectedOrientation = 'vertical';
            } else {
                player.selectedOrientation = 'horizontal';
            }
            player.selectedElement = undefined;
            renderAvailableShips(player);
        });

        const target = document.createElement('div');
        target.classList.toggle('ships-to-place');
        targetParent.appendChild(target);

        target.textContent = '';
        target.classList.remove('vertical');
        target.classList.remove('horizontal');
        target.classList.add(`${player.selectedOrientation}`);

        const { availableShips } = player.gameboard;
        availableShips.forEach((ship) => {
            const wholeShip = document.createElement('div');
            wholeShip.classList.toggle('ship-container');
            wholeShip.setAttribute('length', `${ship}`);
            for (let i = 0; i < ship; i += 1) {
                const partOfShip = document.createElement('div');
                partOfShip.classList.toggle('available');
                partOfShip.classList.toggle('cell');
                wholeShip.appendChild(partOfShip);
            }
            target.appendChild(wholeShip);

            wholeShip.addEventListener('click', () => {
                if (player.selectedElement !== wholeShip) {
                    for (let i = 0; i < target.children.length; i += 1) {
                        target.children[i].classList.remove('selected');
                    }
                    player.selectedElement = wholeShip;
                    wholeShip.classList.add('selected');
                } else {
                    player.selectedElement = undefined;
                    wholeShip.classList.remove('selected');
                }
            });
        });
    };

    const listenForShipPlacement = (
        player,
        targetParent = player.gameboardElement
    ) => {
        const columns = targetParent.children;
        for (let i = 0; i < columns.length; i += 1) {
            const column = columns[i];
            const cells = column.children;
            for (let j = 0; j < cells.length; j += 1) {
                cells[j].addEventListener('click', () => {
                    if (player.selectedElement !== undefined) {
                        const shipLength =
                            player.selectedElement.getAttribute('length');
                        // console.log(shipLength);
                        // console.log(i, j);
                        // i - 1, j - 1 due to having coordinate (A,B,C...), (1, 2, 3...)
                        player.gameboard.placeShip(
                            i - 1,
                            j - 1,
                            shipLength,
                            player.selectedOrientation
                        );
                        const removeIndex =
                            player.gameboard.availableShips.indexOf(
                                Number(shipLength)
                            );
                        player.gameboard.removeAvailableShip(removeIndex);

                        renderGameboard(player, targetParent);
                        renderAvailableShips(player);
                    }
                });
            }
        }
    };
    return {
        renderPlacementScreen,
        renderGameboard,
        listenForAttacks,
        renderAvailableShips,
        listenForShipPlacement
    };
})();




/***/ }),

/***/ "./src/shipFactory.js":
/*!****************************!*\
  !*** ./src/shipFactory.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shipFactory": () => (/* binding */ shipFactory)
/* harmony export */ });
const shipFactory = (length) => {
    let hitCount = 0;
    const hit = () => {
        hitCount += 1;
    };
    const isSunk = () => hitCount >= length;
    return { hit, isSunk };
};




/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _gameLoop_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameLoop.js */ "./src/gameLoop.js");



console.log('Scripts are working');

(0,_gameLoop_js__WEBPACK_IMPORTED_MODULE_1__.gameloop)(7);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ29COztBQUV6Qzs7QUFFQSxzREFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9nYW1lTG9vcC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvcGxheWVyRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvcmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL3NoaXBGYWN0b3J5LmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogUm9ib3RvLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG59XFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG59XFxuXFxuLmhlbGxvIHtcXG4gICAgY29sb3I6IHJlZDtcXG59XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4ubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4uZ2FtZWJvYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG59XFxuXFxuLmNvbHVtbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi55b3VyLXNpZGUsXFxuLmVuZW15LXNpZGUge1xcbiAgbWFyZ2luOjJyZW07XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4uY2VsbCB7XFxuICB3aWR0aDogM3JlbTtcXG4gIGhlaWdodDogM3JlbTtcXG4gIC0tcmdiOiAyNTAsIDIxNSwgMTcwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNlbGwuc2hpcCB7XFxuICAtLXJnYjogMjcsIDEzMywgMTM3O1xcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiByZ2IodmFyKC0tcmdiKSk7Ki9cXG59XFxuXFxuLmNlbGwuc2hpcC5oaXQge1xcbiAgLS1yZ2I6IDk1LCAxMTAsIDE2MDtcXG4gIC8qYmFja2dyb3VuZC1jb2xvcjogcmdiKHZhcigtLXJnYikpOyovXFxufVxcblxcbi5jZWxsLmhpdCB7XFxuICAtLXJnYjogMjI5LCAxMTIsIDExMjtcXG4gIC8qYmFja2dyb3VuZC1jb2xvcjogcmdiKHZhcigtLXJnYikpOyovXFxuICBcXG59XFxuXFxuLmNlbGwuc2hpcC5oaXQuc3VuayB7XFxuICAtLXJnYjogMTEwLCA5NCwgOTQ7XFxuICAvKmJhY2tncm91bmQtY29sb3I6IHJnYih2YXIoLS1yZ2IpKTsqL1xcbn1cXG5cXG4uY2VsbC5oaXQ6OmJlZm9yZSB7XFxuICBjb250ZW50OiAn4oCiJztcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbn1cXG5cXG4uY2VsbC5zaGlwOjpiZWZvcmUge1xcbiAgY29udGVudDogJyc7XFxufVxcblxcbi5jZWxsLnNoaXAuaGl0OjpiZWZvcmUge1xcbiAgY29udGVudDogJ1gnO1xcbn1cXG5cXG5idXR0b24uY2VsbCB7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDJweCAxcHggcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjA2OCk7XFxuICBjb2xvcjogYmxhY2s7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAtLWFscGhhOiAwLjg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXJnYiksIHZhcigtLWFscGhhKSk7XFxuICBjdXJzb3I6IGNyb3NzaGFpcjtcXG59XFxuXFxuLmdhbWVib2FyZC1zZWxmIGJ1dHRvbiB7XFxuICBjdXJzb3I6IGF1dG87XFxufVxcblxcbmJ1dHRvbi5jZWxsOmhvdmVyIHtcXG4gIC0tYWxwaGE6IDE7XFxufVxcblxcbmJ1dHRvbi5jZWxsLmVtcHR5Om5vdCguaGl0KTpob3ZlciB7XFxuICAtLXJnYjogMjE2LCAxODUsIDE0NTtcXG59XFxuXFxuYnV0dG9uLmNlbGwuZW1wdHkuaGl0OmhvdmVyIHtcXG4gIC0tcmdiOiAxOTksIDk1LCA5NTtcXG59XFxuXFxuLnNoaXBzLXRvLXBsYWNlIHtcXG4gIG1hcmdpbjogMXJlbSAwcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDJweDtcXG59XFxuXFxuLnNoaXBzLXRvLXBsYWNlLmhvcml6b250YWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5zaGlwcy10by1wbGFjZS52ZXJ0aWNhbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuLnNoaXBzLXRvLXBsYWNlLnZlcnRpY2FsIC5zaGlwLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnNoaXBzLXRvLXBsYWNlLmhvcml6b250YWwgLnNoaXAtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4uc2hpcC1jb250YWluZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlcjogMC4zcmVtIHNvbGlkIHJnYigxMjgsIDAsIDApO1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG59XFxuXFxuLmF2YWlsYWJsZS5jZWxsIHtcXG4gIC0tcmdiOiAyNywgMTMzLCAxMzc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IodmFyKC0tcmdiKSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLmF2YWlsYWJsZS5jZWxsOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNlbGVjdGVkIC5jZWxsIHtcXG4gIC0tcmdiOiA1MywgNTgsIDIwMztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYih2YXIoLS1yZ2IpKTtcXG59XFxuXFxuLmZsZWV0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYnV0dG9uLW9yaWVudGF0aW9uIHtcXG4gIHdpZHRoOiA2cmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmdhbWVib2FyZC1lbmVteSAuc2hpcCB7XFxuICAtLXJnYjogMjUwLCAyMTUsIDE3MDtcXG59XFxuXFxuLnBvcC1VcC1TY3JlZW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1NCwgMTY5LCAxODQpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAycmVtO1xcbn1cXG5cXG4ucG9wLVVwLVNjcmVlbiAubWFpbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgbWFyZ2luLWxlZnQ6IDIwcmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAyMHJlbTtcXG4gIGdyaWQ6IDFmciAvIDFmciAxZnI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnBvcC1VcC1TY3JlZW4gLm1haW4gLmdhbWVib2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5wb3AtVXAtU2NyZWVuIC5tYWluIC5wb3AtVXAtQXZhaWxhYmxlU2hpcHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucG9wLVVwLVNjcmVlbiAudGl0bGUge1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmJ0bnMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQ6IDRyZW0vIDRyZW0gNHJlbSA0cmVtO1xcbiAgZ2FwOiAxMHJlbTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luOiAycmVtO1xcbn1cXG5cXG4uYnRucyBidXR0b24ge1xcbiAgd2lkdGg6IDVyZW07XFxuICBoZWlnaHQ6IDVyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsOERBQThEO0FBQ2hFO0FBQ0E7OztFQUdFLG1CQUFtQjtBQUNyQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLHFDQUFxQzs7QUFFdkM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzREFBc0Q7RUFDdEQsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osZ0RBQWdEO0VBQ2hELGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsbUNBQW1DO0VBQ25DLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsaUNBQWlDO0VBQ2pDLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwwQkFBMEI7RUFDMUIsVUFBVTtFQUNWLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogUm9ib3RvLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG59XFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG59XFxuXFxuLmhlbGxvIHtcXG4gICAgY29sb3I6IHJlZDtcXG59XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4ubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4uZ2FtZWJvYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG59XFxuXFxuLmNvbHVtbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi55b3VyLXNpZGUsXFxuLmVuZW15LXNpZGUge1xcbiAgbWFyZ2luOjJyZW07XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4uY2VsbCB7XFxuICB3aWR0aDogM3JlbTtcXG4gIGhlaWdodDogM3JlbTtcXG4gIC0tcmdiOiAyNTAsIDIxNSwgMTcwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNlbGwuc2hpcCB7XFxuICAtLXJnYjogMjcsIDEzMywgMTM3O1xcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiByZ2IodmFyKC0tcmdiKSk7Ki9cXG59XFxuXFxuLmNlbGwuc2hpcC5oaXQge1xcbiAgLS1yZ2I6IDk1LCAxMTAsIDE2MDtcXG4gIC8qYmFja2dyb3VuZC1jb2xvcjogcmdiKHZhcigtLXJnYikpOyovXFxufVxcblxcbi5jZWxsLmhpdCB7XFxuICAtLXJnYjogMjI5LCAxMTIsIDExMjtcXG4gIC8qYmFja2dyb3VuZC1jb2xvcjogcmdiKHZhcigtLXJnYikpOyovXFxuICBcXG59XFxuXFxuLmNlbGwuc2hpcC5oaXQuc3VuayB7XFxuICAtLXJnYjogMTEwLCA5NCwgOTQ7XFxuICAvKmJhY2tncm91bmQtY29sb3I6IHJnYih2YXIoLS1yZ2IpKTsqL1xcbn1cXG5cXG4uY2VsbC5oaXQ6OmJlZm9yZSB7XFxuICBjb250ZW50OiAn4oCiJztcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbn1cXG5cXG4uY2VsbC5zaGlwOjpiZWZvcmUge1xcbiAgY29udGVudDogJyc7XFxufVxcblxcbi5jZWxsLnNoaXAuaGl0OjpiZWZvcmUge1xcbiAgY29udGVudDogJ1gnO1xcbn1cXG5cXG5idXR0b24uY2VsbCB7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDJweCAxcHggcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjA2OCk7XFxuICBjb2xvcjogYmxhY2s7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAtLWFscGhhOiAwLjg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXJnYiksIHZhcigtLWFscGhhKSk7XFxuICBjdXJzb3I6IGNyb3NzaGFpcjtcXG59XFxuXFxuLmdhbWVib2FyZC1zZWxmIGJ1dHRvbiB7XFxuICBjdXJzb3I6IGF1dG87XFxufVxcblxcbmJ1dHRvbi5jZWxsOmhvdmVyIHtcXG4gIC0tYWxwaGE6IDE7XFxufVxcblxcbmJ1dHRvbi5jZWxsLmVtcHR5Om5vdCguaGl0KTpob3ZlciB7XFxuICAtLXJnYjogMjE2LCAxODUsIDE0NTtcXG59XFxuXFxuYnV0dG9uLmNlbGwuZW1wdHkuaGl0OmhvdmVyIHtcXG4gIC0tcmdiOiAxOTksIDk1LCA5NTtcXG59XFxuXFxuLnNoaXBzLXRvLXBsYWNlIHtcXG4gIG1hcmdpbjogMXJlbSAwcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDJweDtcXG59XFxuXFxuLnNoaXBzLXRvLXBsYWNlLmhvcml6b250YWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5zaGlwcy10by1wbGFjZS52ZXJ0aWNhbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuLnNoaXBzLXRvLXBsYWNlLnZlcnRpY2FsIC5zaGlwLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnNoaXBzLXRvLXBsYWNlLmhvcml6b250YWwgLnNoaXAtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4uc2hpcC1jb250YWluZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlcjogMC4zcmVtIHNvbGlkIHJnYigxMjgsIDAsIDApO1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG59XFxuXFxuLmF2YWlsYWJsZS5jZWxsIHtcXG4gIC0tcmdiOiAyNywgMTMzLCAxMzc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IodmFyKC0tcmdiKSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLmF2YWlsYWJsZS5jZWxsOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNlbGVjdGVkIC5jZWxsIHtcXG4gIC0tcmdiOiA1MywgNTgsIDIwMztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYih2YXIoLS1yZ2IpKTtcXG59XFxuXFxuLmZsZWV0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYnV0dG9uLW9yaWVudGF0aW9uIHtcXG4gIHdpZHRoOiA2cmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmdhbWVib2FyZC1lbmVteSAuc2hpcCB7XFxuICAtLXJnYjogMjUwLCAyMTUsIDE3MDtcXG59XFxuXFxuLnBvcC1VcC1TY3JlZW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1NCwgMTY5LCAxODQpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAycmVtO1xcbn1cXG5cXG4ucG9wLVVwLVNjcmVlbiAubWFpbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgbWFyZ2luLWxlZnQ6IDIwcmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAyMHJlbTtcXG4gIGdyaWQ6IDFmciAvIDFmciAxZnI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnBvcC1VcC1TY3JlZW4gLm1haW4gLmdhbWVib2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5wb3AtVXAtU2NyZWVuIC5tYWluIC5wb3AtVXAtQXZhaWxhYmxlU2hpcHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucG9wLVVwLVNjcmVlbiAudGl0bGUge1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmJ0bnMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQ6IDRyZW0vIDRyZW0gNHJlbSA0cmVtO1xcbiAgZ2FwOiAxMHJlbTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luOiAycmVtO1xcbn1cXG5cXG4uYnRucyBidXR0b24ge1xcbiAgd2lkdGg6IDVyZW07XFxuICBoZWlnaHQ6IDVyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBwbGF5ZXJGYWN0b3J5IH0gZnJvbSAnLi9wbGF5ZXJGYWN0b3J5JztcbmltcG9ydCB7IHNoaXBGYWN0b3J5IH0gZnJvbSAnLi9zaGlwRmFjdG9yeSc7XG5pbXBvcnQgeyBnYW1lYm9hcmRGYWN0b3J5IH0gZnJvbSAnLi9nYW1lYm9hcmRGYWN0b3J5JztcbmltcG9ydCB7IHJlbmRlcmVyIH0gZnJvbSAnLi9yZW5kZXJlcic7XG5cbmZ1bmN0aW9uIGdhbWVsb29wKGdhbWVib2FyZExlbmd0aCkge1xuICAgIC8vIER1bW15IGRhdGFcbiAgICBjb25zdCBnYW1lYm9hcmQxID0gZ2FtZWJvYXJkRmFjdG9yeShnYW1lYm9hcmRMZW5ndGgpO1xuICAgIGxldCB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZWJvYXJkLXNlbGYnKTtcbiAgICBjb25zdCBwbGF5ZXIxID0gcGxheWVyRmFjdG9yeSgnSGlreW4nLCBnYW1lYm9hcmQxLCB0YXJnZXQpO1xuXG4gICAgLy8gcmVuZGVyZXIucmVuZGVyR2FtZWJvYXJkKHBsYXllcjEpO1xuICAgIC8vIHJlbmRlcmVyLnJlbmRlckF2YWlsYWJsZVNoaXBzKHBsYXllcjEpO1xuXG4gICAgcmVuZGVyZXIucmVuZGVyUGxhY2VtZW50U2NyZWVuKHBsYXllcjEpO1xuXG4gICAgY29uc3QgZ2FtZWJvYXJkMiA9IGdhbWVib2FyZEZhY3RvcnkoZ2FtZWJvYXJkTGVuZ3RoKTtcbiAgICB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZWJvYXJkLWVuZW15Jyk7XG4gICAgY29uc3QgcGxheWVyMiA9IHBsYXllckZhY3RvcnkoJ0NvbXB1dGVyJywgZ2FtZWJvYXJkMiwgdGFyZ2V0LCB0cnVlKTtcbiAgICBwbGF5ZXIyLmdhbWVib2FyZC5yYW5kb21seVBsYWNlQWxsU2hpcHMoKTtcblxuICAgIC8vIHJlbmRlcmVyLnJlbmRlckdhbWVib2FyZChwbGF5ZXIyKTtcbiAgICAvLyByZW5kZXJlci5saXN0ZW5Gb3JBdHRhY2tzKHBsYXllcjIsIHBsYXllcjEpO1xufVxuXG5leHBvcnQgeyBnYW1lbG9vcCB9O1xuIiwiaW1wb3J0IHsgc2hpcEZhY3RvcnkgfSBmcm9tICcuL3NoaXBGYWN0b3J5JztcblxuY29uc3QgZ2FtZWJvYXJkRmFjdG9yeSA9IChsZW5ndGgsIGF2YWlsYWJsZVNoaXBzID0gWzUsIDQsIDMsIDJdKSA9PiB7XG4gICAgY29uc3QgY2VsbHMgPSBuZXcgQXJyYXkobGVuZ3RoKTtcbiAgICBjb25zdCBtaXNzZWRTaG90cyA9IFtdO1xuICAgIGNvbnN0IGFjY3VyYXRlU2hvdHMgPSBbXTtcbiAgICBjb25zdCBpbml0aWFsU2hpcHMgPSBbLi4uYXZhaWxhYmxlU2hpcHNdO1xuICAgIGxldCB0b3RhbFNoaXBzTGVuZ3RoID0gMDtcblxuICAgIC8vIENyZWF0ZSBkb3VibGUgYXJyYXlcbiAgICBjb25zdCBpbml0aWFsaXplQ2VsbHMgPSAoKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGNlbGxzW2ldID0gbmV3IEFycmF5KGxlbmd0aCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQb3B1bGF0ZSBkb3VibGUgYXJyYXkgd2l0aCAwXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgICAgICAgICBjZWxsc1tpXVtqXSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgaW5pdGlhbGl6ZUNlbGxzKCk7XG5cbiAgICBjb25zdCBwbGFjZVNoaXAgPSAoeCwgeSwgc2hpcExlbmd0aCwgb3JpZW50YXRpb24pID0+IHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgIHggPSBOdW1iZXIoeCk7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICB5ID0gTnVtYmVyKHkpO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgc2hpcExlbmd0aCA9IE51bWJlcihzaGlwTGVuZ3RoKTtcbiAgICAgICAgXG4gICAgICAgIGlmICghYXZhaWxhYmxlU2hpcHMuaW5jbHVkZXMoc2hpcExlbmd0aCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlcmUgYXJlIG5vIGF2YWlsYWJsZSBzaGlwcyB3aXRoIHRoYXQgbGVuZ3RoJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2hpcCA9IHNoaXBGYWN0b3J5KHNoaXBMZW5ndGgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgaWYgKG9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNlbGxzW3hdW3kgKyBpXSAhPT0gdW5kZWZpbmVkICYmIGNlbGxzW3hdW3kgKyBpXSAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NoaXBzIGFyZSBvdmVybGFwcGluZycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2VsbHNbeCArIGldICE9PSB1bmRlZmluZWQgJiYgY2VsbHNbeCArIGldW3ldICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTaGlwcyBhcmUgb3ZlcmxhcHBpbmcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgICAgaWYgKCt5ICsgc2hpcExlbmd0aCA+IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGAke3kgKyBzaGlwTGVuZ3RofSA+ICR7bGVuZ3RofWApO1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignT3V0IG9mIGJvdW5kczogdmVydGljYWwnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgY2VsbHNbeF1beSArIGldID0gc2hpcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRvdGFsU2hpcHNMZW5ndGggKz0gc2hpcExlbmd0aDtcbiAgICAgICAgfSBlbHNlIGlmIChvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICBpZiAoK3ggKyBzaGlwTGVuZ3RoID4gbGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYCR7eCArIHNoaXBMZW5ndGh9ID4gJHtsZW5ndGh9YCk7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdPdXQgb2YgYm91bmRzOiBob3Jpem9udGFsJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIGNlbGxzW3ggKyBpXVt5XSA9IHNoaXA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0b3RhbFNoaXBzTGVuZ3RoICs9IHNoaXBMZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coYFNoaXAgY3JlYXRlZCBhdDogJHt4fXwke3l9YCk7XG4gICAgICAgIHJlbW92ZUF2YWlsYWJsZVNoaXAoYXZhaWxhYmxlU2hpcHMuaW5kZXhPZihzaGlwTGVuZ3RoKSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGlzQ2VsbEhpdCA9ICh4LCB5KSA9PiB7XG4gICAgICAgIGNvbnN0IGhpdCA9IFt4LCB5XTtcbiAgICAgICAgY29uc3QgbWlzc2VkU2hvdHNKc29uID0gSlNPTi5zdHJpbmdpZnkobWlzc2VkU2hvdHMpO1xuICAgICAgICBjb25zdCBhY2N1cmF0ZVNob3RzSnNvbiA9IEpTT04uc3RyaW5naWZ5KGFjY3VyYXRlU2hvdHMpO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIG1pc3NlZFNob3RzSnNvbi5pbmNsdWRlcyhoaXQpID09PSB0cnVlIHx8XG4gICAgICAgICAgICBhY2N1cmF0ZVNob3RzSnNvbi5pbmNsdWRlcyhoaXQpID09PSB0cnVlXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cbiAgICBjb25zdCByZWNlaXZlQXR0YWNrID0gKHgsIHkpID0+IHtcbiAgICAgICAgaWYgKGlzQ2VsbEhpdCh4LCB5KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW50IGhpdCBzYW1lIGNlbGwgdHdpY2UnKTtcbiAgICAgICAgfSBlbHNlIGlmIChjZWxsc1t4XVt5XSA9PT0gMCkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ01pc3NlZCBzaG90IScpO1xuICAgICAgICAgICAgbWlzc2VkU2hvdHMucHVzaChbeCwgeV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ0FjY3VyYXRlIHNob3QhJyk7XG4gICAgICAgICAgICBjZWxsc1t4XVt5XS5oaXQoKTtcbiAgICAgICAgICAgIGFjY3VyYXRlU2hvdHMucHVzaChbeCwgeV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpc0FsbFN1bmsoKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaXNBbGxTdW5rID0gKCkgPT4gYWNjdXJhdGVTaG90cy5sZW5ndGggPj0gdG90YWxTaGlwc0xlbmd0aDtcblxuICAgIGNvbnN0IHJlbW92ZUF2YWlsYWJsZVNoaXAgPSAoaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgYXZhaWxhYmxlU2hpcHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGF2YWlsYWJsZVNoaXBzKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCByYW5kb21seVBsYWNlQWxsU2hpcHMgPSAoKSA9PiB7XG4gICAgICAgIHdoaWxlIChhdmFpbGFibGVTaGlwcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCByYW5kb21YID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbGVuZ3RoKTtcbiAgICAgICAgICAgIGNvbnN0IHJhbmRvbVkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBsZW5ndGgpO1xuICAgICAgICAgICAgY29uc3QgcmFuZG9tT3JpZW50YXRpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcbiAgICAgICAgICAgIGxldCBvcmllbnRhdGlvbjtcbiAgICAgICAgICAgIGlmIChyYW5kb21PcmllbnRhdGlvbiA9PT0gMCkge1xuICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uID0gJ2hvcml6b250YWwnO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyYW5kb21PcmllbnRhdGlvbiA9PT0gMSkge1xuICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uID0gJ3ZlcnRpY2FsJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBwbGFjZVNoaXAocmFuZG9tWCwgcmFuZG9tWSwgYXZhaWxhYmxlU2hpcHNbMF0sIG9yaWVudGF0aW9uKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhdmFpbGFibGVTaGlwcyk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHJhbmRvbWx5UGxhY2VBbGxTaGlwcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGNlbGxzLFxuICAgICAgICByZWNlaXZlQXR0YWNrLFxuICAgICAgICBpc0FsbFN1bmssXG4gICAgICAgIHBsYWNlU2hpcCxcbiAgICAgICAgbGVuZ3RoLFxuICAgICAgICBtaXNzZWRTaG90cyxcbiAgICAgICAgYWNjdXJhdGVTaG90cyxcbiAgICAgICAgYXZhaWxhYmxlU2hpcHMsXG4gICAgICAgIGlzQ2VsbEhpdCxcbiAgICAgICAgcmVtb3ZlQXZhaWxhYmxlU2hpcCxcbiAgICAgICAgcmFuZG9tbHlQbGFjZUFsbFNoaXBzXG4gICAgfTtcbn07XG5cbmV4cG9ydCB7IGdhbWVib2FyZEZhY3RvcnkgfTtcbiIsImNvbnN0IHBsYXllckZhY3RvcnkgPSAobmFtZSwgZ2FtZWJvYXJkLCBnYW1lYm9hcmRFbGVtZW50LCBpc0FpID0gZmFsc2UpID0+IHtcbiAgICBsZXQgc2VsZWN0ZWRFbGVtZW50O1xuICAgIGxldCBzZWxlY3RlZE9yaWVudGF0aW9uID0gJ2hvcml6b250YWwnO1xuXG4gICAgY29uc3QgbWFrZU1vdmUgPSAoZW5lbXlQbGF5ZXIpID0+IHtcbiAgICAgICAgY29uc3QgcmFuZG9tWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGdhbWVib2FyZC5sZW5ndGgpO1xuICAgICAgICBjb25zdCByYW5kb21ZID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZ2FtZWJvYXJkLmxlbmd0aCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBlbmVteVBsYXllci5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhyYW5kb21YLCByYW5kb21ZKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIG1ha2VNb3ZlKGVuZW15UGxheWVyKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBpc0FsbFNoaXBzUGxhY2VkID0gKCkgPT4gZ2FtZWJvYXJkLmF2YWlsYWJsZVNoaXBzLmxlbmd0aCA8PSAwO1xuXG4gICAgY29uc3QgaXNMb3N0ID0gKCkgPT4gZ2FtZWJvYXJkLmlzQWxsU3VuaygpO1xuICAgIHJldHVybiB7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIGdhbWVib2FyZCxcbiAgICAgICAgaXNBaSxcbiAgICAgICAgbWFrZU1vdmUsXG4gICAgICAgIGlzTG9zdCxcbiAgICAgICAgZ2FtZWJvYXJkRWxlbWVudCxcbiAgICAgICAgc2VsZWN0ZWRFbGVtZW50LFxuICAgICAgICBzZWxlY3RlZE9yaWVudGF0aW9uLFxuICAgICAgICBpc0FsbFNoaXBzUGxhY2VkXG4gICAgfTtcbn07XG5cbmV4cG9ydCB7IHBsYXllckZhY3RvcnkgfTtcbiIsImltcG9ydCB7IGdhbWVib2FyZEZhY3RvcnkgfSBmcm9tICcuL2dhbWVib2FyZEZhY3RvcnknO1xuXG5jb25zdCByZW5kZXJlciA9ICgoKSA9PiB7XG4gICAgY29uc3QgcmVuZGVyUGxhY2VtZW50U2NyZWVuID0gKFxuICAgICAgICBwbGF5ZXIsXG4gICAgICAgIHRhcmdldFBhcmVudCA9IHBsYXllci5nYW1lYm9hcmRFbGVtZW50XG4gICAgKSA9PiB7XG4gICAgICAgIHRhcmdldFBhcmVudC50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgICAgIGNvbnN0IHBvcFVwU2NyZWVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHBvcFVwU2NyZWVuLmNsYXNzTGlzdC5hZGQoJ3BvcC1VcC1TY3JlZW4nKTtcblxuICAgICAgICBjb25zdCBwb3BVcFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHBvcFVwVGl0bGUudGV4dENvbnRlbnQgPSBgQWRtaXJhbCAke3BsYXllci5uYW1lfSwgcGxhY2UgeW91ciBzaGlwcyFgO1xuICAgICAgICBwb3BVcFRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG5cbiAgICAgICAgY29uc3QgcG9wVXBNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHBvcFVwTWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XG5cbiAgICAgICAgY29uc3QgcG9wVXBHYW1lYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcG9wVXBHYW1lYm9hcmQuY2xhc3NMaXN0LmFkZCgnZ2FtZWJvYXJkJyk7XG5cbiAgICAgICAgY29uc3QgcG9wVXBBdmFpbGFibGVTaGlwcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwb3BVcEF2YWlsYWJsZVNoaXBzLmNsYXNzTGlzdC5hZGQoJ3BvcC1VcC1BdmFpbGFibGVTaGlwcycpO1xuXG4gICAgICAgIGNvbnN0IHJhbmRvbUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICByYW5kb21CdXR0b24uY2xhc3NMaXN0LmFkZCgnYnRuLXJldHJ5Jyk7XG4gICAgICAgIHJhbmRvbUJ1dHRvbi50ZXh0Q29udGVudCA9ICdSYW5kb20nO1xuXG4gICAgICAgIGNvbnN0IGZpbmlzaEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBmaW5pc2hCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnRuLWZpbmlzaCcpO1xuICAgICAgICBmaW5pc2hCdXR0b24udGV4dENvbnRlbnQgPSAnRmluaXNoJztcblxuICAgICAgICBjb25zdCByZXNldEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICByZXNldEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidG4tcmVzZXQnKTtcbiAgICAgICAgcmVzZXRCdXR0b24udGV4dENvbnRlbnQgPSAnUmVzZXQnO1xuICAgICAgICByZXNldEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHBsYXllci5nYW1lYm9hcmQgPSBnYW1lYm9hcmRGYWN0b3J5KHBsYXllci5nYW1lYm9hcmQubGVuZ3RoKTtcbiAgICAgICAgICAgIHJlbmRlclBsYWNlbWVudFNjcmVlbihwbGF5ZXIsIHRhcmdldFBhcmVudCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYnV0dG9ucy5jbGFzc0xpc3QuYWRkKCdidG5zJyk7XG5cbiAgICAgICAgYnV0dG9ucy5hcHBlbmRDaGlsZChyYW5kb21CdXR0b24pO1xuICAgICAgICBidXR0b25zLmFwcGVuZENoaWxkKGZpbmlzaEJ1dHRvbik7XG4gICAgICAgIGJ1dHRvbnMuYXBwZW5kQ2hpbGQocmVzZXRCdXR0b24pO1xuXG4gICAgICAgIHBvcFVwTWFpbi5hcHBlbmRDaGlsZChwb3BVcEdhbWVib2FyZCk7XG4gICAgICAgIHBvcFVwTWFpbi5hcHBlbmRDaGlsZChwb3BVcEF2YWlsYWJsZVNoaXBzKTtcblxuICAgICAgICBwb3BVcFNjcmVlbi5hcHBlbmRDaGlsZChwb3BVcFRpdGxlKTtcbiAgICAgICAgcG9wVXBTY3JlZW4uYXBwZW5kQ2hpbGQocG9wVXBNYWluKTtcbiAgICAgICAgcG9wVXBTY3JlZW4uYXBwZW5kQ2hpbGQoYnV0dG9ucyk7XG5cbiAgICAgICAgdGFyZ2V0UGFyZW50LmFwcGVuZENoaWxkKHBvcFVwU2NyZWVuKTtcblxuICAgICAgICByZW5kZXJHYW1lYm9hcmQocGxheWVyLCBwb3BVcEdhbWVib2FyZCk7XG4gICAgICAgIHJlbmRlckF2YWlsYWJsZVNoaXBzKFxuICAgICAgICAgICAgcGxheWVyLFxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcC1VcC1BdmFpbGFibGVTaGlwcycpXG4gICAgICAgICk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlbmRlckdhbWVib2FyZCA9IChcbiAgICAgICAgcGxheWVyLFxuICAgICAgICB0YXJnZXRQYXJlbnQgPSBwbGF5ZXIuZ2FtZWJvYXJkRWxlbWVudFxuICAgICkgPT4ge1xuICAgICAgICBjb25zdCBjcmVhdGVDb29yZGluYXRlQ29sdW1uID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3Q29sdW1uRWxlbWVudCA9IGNyZWF0ZUNvbHVtbigpO1xuICAgICAgICAgICAgbGV0IG5ld0NlbGxFbGVtZW50O1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IC0xOyBpIDwgcGxheWVyLmdhbWVib2FyZC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIGlmIChpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdDZWxsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBuZXdDZWxsRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdjZWxsJyk7XG4gICAgICAgICAgICAgICAgICAgIG5ld0NlbGxFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ251bGwnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBuZXdDZWxsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBuZXdDZWxsRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdjZWxsJyk7XG4gICAgICAgICAgICAgICAgICAgIG5ld0NlbGxFbGVtZW50LnRleHRDb250ZW50ID0gYCR7aSArIDF9YDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbmV3Q29sdW1uRWxlbWVudC5hcHBlbmRDaGlsZChuZXdDZWxsRWxlbWVudCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBuZXdDb2x1bW5FbGVtZW50O1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGNyZWF0ZUNvbHVtbiA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld0NvbHVtbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIG5ld0NvbHVtbkVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnY29sdW1uJyk7XG5cbiAgICAgICAgICAgIHJldHVybiBuZXdDb2x1bW5FbGVtZW50O1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGNyZWF0ZUFscGhhYmV0Q2VsbCA9IChsZXR0ZXIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNoYXJjb2RlID0gNjUgKyBOdW1iZXIobGV0dGVyKTtcbiAgICAgICAgICAgIGNvbnN0IGNoYXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNoYXJjb2RlKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld0NlbGxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBuZXdDZWxsRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdjZWxsJyk7XG4gICAgICAgICAgICBuZXdDZWxsRWxlbWVudC50ZXh0Q29udGVudCA9IGNoYXI7XG5cbiAgICAgICAgICAgIHJldHVybiBuZXdDZWxsRWxlbWVudDtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBjcmVhdGVHYW1lYm9hcmRDZWxsID0gKHgsIHkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBwbGF5ZXIuZ2FtZWJvYXJkLmNlbGxzW3hdW3ldO1xuXG4gICAgICAgICAgICBjb25zdCBuZXdDZWxsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgbmV3Q2VsbEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnY2VsbCcpO1xuXG4gICAgICAgICAgICBpZiAocGxheWVyLmdhbWVib2FyZC5pc0NlbGxIaXQoeCwgeSkpIHtcbiAgICAgICAgICAgICAgICBuZXdDZWxsRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdoaXQnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNlbGwgPT09IDApIHtcbiAgICAgICAgICAgICAgICAvLyBuZXdDZWxsRWxlbWVudC50ZXh0Q29udGVudCA9IDA7XG4gICAgICAgICAgICAgICAgbmV3Q2VsbEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnZW1wdHknKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV3Q2VsbEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnc2hpcCcpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNlbGwuaXNTdW5rKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3Q2VsbEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnc3VuaycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG5ld0NlbGxFbGVtZW50O1xuICAgICAgICB9O1xuICAgICAgICAvLyBSZW5kZXJzIGdhbWVib2FyZCBhbmQgYXBwZW5kcyB0byB0YXJnZXQgZWxlbWVudFxuICAgICAgICB0YXJnZXRQYXJlbnQudGV4dENvbnRlbnQgPSAnJztcblxuICAgICAgICBsZXQgY29sdW1uRWxlbWVudDtcbiAgICAgICAgbGV0IGNlbGxFbGVtZW50O1xuXG4gICAgICAgIGZvciAobGV0IHggPSAtMTsgeCA8IHBsYXllci5nYW1lYm9hcmQuY2VsbHMubGVuZ3RoOyB4ICs9IDEpIHtcbiAgICAgICAgICAgIC8vIElmIGl0IGlzIGEgZmlyc3QgY29sdW1uLCB3ZSBjcmVhdGUgY29vcmRpbmF0ZSBjb2x1bW5cbiAgICAgICAgICAgIGlmICh4ID09PSAtMSkge1xuICAgICAgICAgICAgICAgIGNvbHVtbkVsZW1lbnQgPSBjcmVhdGVDb29yZGluYXRlQ29sdW1uKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIEVsc2Ugd2UgY3JlYXRlIHVzdWFsIGNvbHVtbiBhbmQgcG9wdWxhdGUgaXRcbiAgICAgICAgICAgICAgICBjb2x1bW5FbGVtZW50ID0gY3JlYXRlQ29sdW1uKCk7XG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCB5ID0gLTE7IHkgPCBwbGF5ZXIuZ2FtZWJvYXJkLmNlbGxzLmxlbmd0aDsgeSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEZpcnN0IHJvdyB3aWxsIGdldCBhIGxldHRlclxuICAgICAgICAgICAgICAgICAgICBpZiAoeSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGxFbGVtZW50ID0gY3JlYXRlQWxwaGFiZXRDZWxsKHgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbEVsZW1lbnQgPSBjcmVhdGVHYW1lYm9hcmRDZWxsKHgsIHkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbkVsZW1lbnQuYXBwZW5kQ2hpbGQoY2VsbEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRhcmdldFBhcmVudC5hcHBlbmRDaGlsZChjb2x1bW5FbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICBsaXN0ZW5Gb3JTaGlwUGxhY2VtZW50KHBsYXllciwgdGFyZ2V0UGFyZW50KTtcbiAgICB9O1xuXG4gICAgY29uc3QgbGlzdGVuRm9yQXR0YWNrcyA9IChkZWZlbmRpbmdQbGF5ZXIsIGF0dGFja2luZ1BsYXllcikgPT4ge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBkZWZlbmRpbmdQbGF5ZXIuZ2FtZWJvYXJkRWxlbWVudDtcbiAgICAgICAgY29uc3QgY29sdW1ucyA9IHRhcmdldC5jaGlsZHJlbjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2x1bW5zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBjb25zdCBjb2x1bW4gPSBjb2x1bW5zW2ldO1xuICAgICAgICAgICAgY29uc3QgY2VsbHMgPSBjb2x1bW4uY2hpbGRyZW47XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNlbGxzLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgICAgICAgICAgY2VsbHNbal0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghYXR0YWNraW5nUGxheWVyLmlzQWxsU2hpcHNQbGFjZWQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYFBsYXllciAke2F0dGFja2luZ1BsYXllci5uYW1lfSBoYXMgbm90IGZpbmlzaGVkIHBsYWNpbmcgc2hpcHNgXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYFJlbWFpbmluZyBzaGlwczogJHthdHRhY2tpbmdQbGF5ZXIuZ2FtZWJvYXJkLmF2YWlsYWJsZVNoaXBzfWBcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZGVmZW5kaW5nUGxheWVyLmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKGksIGopO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGVmZW5kaW5nUGxheWVyLmlzTG9zdCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgUGxheWVyICR7ZGVmZW5kaW5nUGxheWVyLm5hbWV9IGxvc2VzIWApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlckdhbWVib2FyZChkZWZlbmRpbmdQbGF5ZXIpO1xuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5Gb3JBdHRhY2tzKGRlZmVuZGluZ1BsYXllciwgYXR0YWNraW5nUGxheWVyKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gQWkgbWFrZXMgYSBtb3ZlXG4gICAgICAgICAgICAgICAgICAgIGRlZmVuZGluZ1BsYXllci5tYWtlTW92ZShhdHRhY2tpbmdQbGF5ZXIpO1xuICAgICAgICAgICAgICAgICAgICByZW5kZXJHYW1lYm9hcmQoYXR0YWNraW5nUGxheWVyKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCByZW5kZXJBdmFpbGFibGVTaGlwcyA9IChcbiAgICAgICAgcGxheWVyLFxuICAgICAgICB0YXJnZXRQYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wLVVwLUF2YWlsYWJsZVNoaXBzJylcbiAgICApID0+IHtcbiAgICAgICAgdGFyZ2V0UGFyZW50LnRleHRDb250ZW50ID0gJyc7XG5cbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtZXNzYWdlLnRleHRDb250ZW50ID0gJ0F2YWlsYWJsZSBzaGlwcyc7XG4gICAgICAgIHRhcmdldFBhcmVudC5hcHBlbmRDaGlsZChtZXNzYWdlKTtcblxuICAgICAgICBjb25zdCBjaGFuZ2VPcmllbnRhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjaGFuZ2VPcmllbnRhdGlvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24tb3JpZW50YXRpb24nKTtcbiAgICAgICAgY2hhbmdlT3JpZW50YXRpb24udGV4dENvbnRlbnQgPSBwbGF5ZXIuc2VsZWN0ZWRPcmllbnRhdGlvbjtcbiAgICAgICAgdGFyZ2V0UGFyZW50LmFwcGVuZENoaWxkKGNoYW5nZU9yaWVudGF0aW9uKTtcbiAgICAgICAgY2hhbmdlT3JpZW50YXRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAocGxheWVyLnNlbGVjdGVkT3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgICAgICAgIHBsYXllci5zZWxlY3RlZE9yaWVudGF0aW9uID0gJ3ZlcnRpY2FsJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGxheWVyLnNlbGVjdGVkT3JpZW50YXRpb24gPSAnaG9yaXpvbnRhbCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwbGF5ZXIuc2VsZWN0ZWRFbGVtZW50ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgcmVuZGVyQXZhaWxhYmxlU2hpcHMocGxheWVyKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdzaGlwcy10by1wbGFjZScpO1xuICAgICAgICB0YXJnZXRQYXJlbnQuYXBwZW5kQ2hpbGQodGFyZ2V0KTtcblxuICAgICAgICB0YXJnZXQudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ3ZlcnRpY2FsJyk7XG4gICAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdob3Jpem9udGFsJyk7XG4gICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKGAke3BsYXllci5zZWxlY3RlZE9yaWVudGF0aW9ufWApO1xuXG4gICAgICAgIGNvbnN0IHsgYXZhaWxhYmxlU2hpcHMgfSA9IHBsYXllci5nYW1lYm9hcmQ7XG4gICAgICAgIGF2YWlsYWJsZVNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHdob2xlU2hpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgd2hvbGVTaGlwLmNsYXNzTGlzdC50b2dnbGUoJ3NoaXAtY29udGFpbmVyJyk7XG4gICAgICAgICAgICB3aG9sZVNoaXAuc2V0QXR0cmlidXRlKCdsZW5ndGgnLCBgJHtzaGlwfWApO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJ0T2ZTaGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgcGFydE9mU2hpcC5jbGFzc0xpc3QudG9nZ2xlKCdhdmFpbGFibGUnKTtcbiAgICAgICAgICAgICAgICBwYXJ0T2ZTaGlwLmNsYXNzTGlzdC50b2dnbGUoJ2NlbGwnKTtcbiAgICAgICAgICAgICAgICB3aG9sZVNoaXAuYXBwZW5kQ2hpbGQocGFydE9mU2hpcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0YXJnZXQuYXBwZW5kQ2hpbGQod2hvbGVTaGlwKTtcblxuICAgICAgICAgICAgd2hvbGVTaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIuc2VsZWN0ZWRFbGVtZW50ICE9PSB3aG9sZVNoaXApIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXJnZXQuY2hpbGRyZW4ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5jaGlsZHJlbltpXS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBsYXllci5zZWxlY3RlZEVsZW1lbnQgPSB3aG9sZVNoaXA7XG4gICAgICAgICAgICAgICAgICAgIHdob2xlU2hpcC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBsYXllci5zZWxlY3RlZEVsZW1lbnQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgIHdob2xlU2hpcC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgbGlzdGVuRm9yU2hpcFBsYWNlbWVudCA9IChcbiAgICAgICAgcGxheWVyLFxuICAgICAgICB0YXJnZXRQYXJlbnQgPSBwbGF5ZXIuZ2FtZWJvYXJkRWxlbWVudFxuICAgICkgPT4ge1xuICAgICAgICBjb25zdCBjb2x1bW5zID0gdGFyZ2V0UGFyZW50LmNoaWxkcmVuO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbHVtbnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbHVtbiA9IGNvbHVtbnNbaV07XG4gICAgICAgICAgICBjb25zdCBjZWxscyA9IGNvbHVtbi5jaGlsZHJlbjtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY2VsbHMubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgICAgICAgICBjZWxsc1tqXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBsYXllci5zZWxlY3RlZEVsZW1lbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2hpcExlbmd0aCA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyLnNlbGVjdGVkRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2xlbmd0aCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc2hpcExlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhpLCBqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGkgLSAxLCBqIC0gMSBkdWUgdG8gaGF2aW5nIGNvb3JkaW5hdGUgKEEsQixDLi4uKSwgKDEsIDIsIDMuLi4pXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpIC0gMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqIC0gMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwTGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5zZWxlY3RlZE9yaWVudGF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVtb3ZlSW5kZXggPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5nYW1lYm9hcmQuYXZhaWxhYmxlU2hpcHMuaW5kZXhPZihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVyKHNoaXBMZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5nYW1lYm9hcmQucmVtb3ZlQXZhaWxhYmxlU2hpcChyZW1vdmVJbmRleCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckdhbWVib2FyZChwbGF5ZXIsIHRhcmdldFBhcmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJBdmFpbGFibGVTaGlwcyhwbGF5ZXIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiB7XG4gICAgICAgIHJlbmRlclBsYWNlbWVudFNjcmVlbixcbiAgICAgICAgcmVuZGVyR2FtZWJvYXJkLFxuICAgICAgICBsaXN0ZW5Gb3JBdHRhY2tzLFxuICAgICAgICByZW5kZXJBdmFpbGFibGVTaGlwcyxcbiAgICAgICAgbGlzdGVuRm9yU2hpcFBsYWNlbWVudFxuICAgIH07XG59KSgpO1xuXG5leHBvcnQgeyByZW5kZXJlciB9O1xuIiwiY29uc3Qgc2hpcEZhY3RvcnkgPSAobGVuZ3RoKSA9PiB7XG4gICAgbGV0IGhpdENvdW50ID0gMDtcbiAgICBjb25zdCBoaXQgPSAoKSA9PiB7XG4gICAgICAgIGhpdENvdW50ICs9IDE7XG4gICAgfTtcbiAgICBjb25zdCBpc1N1bmsgPSAoKSA9PiBoaXRDb3VudCA+PSBsZW5ndGg7XG4gICAgcmV0dXJuIHsgaGl0LCBpc1N1bmsgfTtcbn07XG5cbmV4cG9ydCB7IHNoaXBGYWN0b3J5IH07XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGdhbWVsb29wIH0gZnJvbSAnLi9nYW1lTG9vcC5qcyc7XG5cbmNvbnNvbGUubG9nKCdTY3JpcHRzIGFyZSB3b3JraW5nJyk7XG5cbmdhbWVsb29wKDcpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9