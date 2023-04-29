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
___CSS_LOADER_EXPORT___.push([module.id, "html {\n  box-sizing: border-box;\n  font-family: Roboto, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\n\n.hello {\n    color: red;\n}\n\n\n.main {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n}\n\n.gameboard {\n  display: flex;\n  flex-direction: row;\n  height: fit-content;\n}\n\n.column {\n  display: flex;\n  flex-direction: column;\n}\n\n.header {\n  text-align: center;\n  font-size: 2rem;\n}\n\n.your-side,\n.enemy-side {\n  margin:2rem;\n  height: fit-content;\n}\n\n.cell {\n  width: 3rem;\n  height: 3rem;\n  --rgb: 250, 215, 170;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.cell.ship {\n  --rgb: 27, 133, 137;\n  /*background-color: rgb(var(--rgb));*/\n}\n\n.cell.ship.hit {\n  --rgb: 95, 110, 160;\n  /*background-color: rgb(var(--rgb));*/\n}\n\n.cell.hit {\n  --rgb: 229, 112, 112;\n  /*background-color: rgb(var(--rgb));*/\n  \n}\n\n.cell.ship.hit.sunk {\n  --rgb: 110, 94, 94;\n  /*background-color: rgb(var(--rgb));*/\n}\n\n.cell.hit::before {\n  content: '•';\n  font-size: 2em;\n}\n\n.cell.ship::before {\n  content: '';\n}\n\n.cell.ship.hit::before {\n  content: 'X';\n}\n\nbutton.cell {\n  box-shadow: 2px 2px 2px 1px rgba(128, 128, 128, 0.068);\n  color: black;\n  text-decoration: none;\n  --alpha: 0.8;\n  background-color: rgba(var(--rgb), var(--alpha));\n  cursor: crosshair;\n}\n\n.gameboard-self button {\n  cursor: auto;\n}\n\nbutton.cell:hover {\n  --alpha: 1;\n}\n\nbutton.cell.empty:not(.hit):hover {\n  --rgb: 216, 185, 145;\n}\n\nbutton.cell.empty.hit:hover {\n  --rgb: 199, 95, 95;\n}\n\n.ships-to-place {\n  margin: 1rem 0rem;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n\n.ships-to-place.horizontal {\n  display: flex;\n  flex-direction: column;\n}\n\n.ships-to-place.vertical {\n  display: flex;\n  flex-direction: row;\n}\n\n.ships-to-place.vertical .ship-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.ships-to-place.horizontal .ship-container {\n  display: flex;\n  flex-direction: row;\n}\n\n.ship-container {\n  box-sizing: border-box;\n  border: 0.3rem solid rgb(128, 0, 0);\n  width: fit-content;\n  height: fit-content;\n}\n\n.available.cell {\n  --rgb: 27, 133, 137;\n  background-color: rgb(var(--rgb));\n  border: 1px solid white;\n}\n\n.available.cell:hover {\n  cursor: pointer;\n}\n\n.selected .cell {\n  --rgb: 53, 58, 203;\n  background-color: rgb(var(--rgb));\n}\n\n.fleet {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.button-orientation {\n  width: 6rem;\n  padding: 1rem;\n}\n\n.gameboard-enemy .ship {\n  --rgb: 250, 215, 170;\n}\n\n.pop-Up-Screen {\n  background-color: rgb(154, 169, 184);\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n\n  min-height: 100vh;\n  text-align: center;\n}\n\n.pop-Up-Screen .main {\n  display: grid;\n  margin-left: min(20rem, 20vw);\n  margin-right: min(20rem, 20vw);\n  grid: 1fr / minmax(0, 1fr) minmax(0, 1fr);\n  gap: 15rem;\n  justify-content: center;\n}\n\n.pop-Up-Screen .main .gameboard {\n  display: flex;\n  justify-content: center;\n}\n\n.pop-Up-Screen .main .pop-Up-AvailableShips {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.pop-Up-Screen .title {\n  margin-bottom: 2rem;\n  font-size: 2rem;\n}\n\n.btns {\n  display: grid;\n  grid: 4rem/ 4rem 4rem 4rem;\n  gap: 10rem;\n  justify-content: center;\n  margin: 2rem;\n}\n\n.btns button {\n  width: 5rem;\n  height: 5rem;\n  text-align: center;\n}\n\n.grayed {\n  background-color: rgba(128, 128, 128, 0.514);\n  border: none;\n}\n\n.ready-message {\n  font-size: 2rem;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,8DAA8D;AAChE;AACA;;;EAGE,mBAAmB;AACrB;;AAEA;IACI,UAAU;AACd;;;AAGA;EACE,aAAa;EACb,mBAAmB;EACnB,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,eAAe;AACjB;;AAEA;;EAEE,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,oBAAoB;EACpB,kBAAkB;EAClB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,qCAAqC;AACvC;;AAEA;EACE,mBAAmB;EACnB,qCAAqC;AACvC;;AAEA;EACE,oBAAoB;EACpB,qCAAqC;;AAEvC;;AAEA;EACE,kBAAkB;EAClB,qCAAqC;AACvC;;AAEA;EACE,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,sDAAsD;EACtD,YAAY;EACZ,qBAAqB;EACrB,YAAY;EACZ,gDAAgD;EAChD,iBAAiB;AACnB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;EACtB,mCAAmC;EACnC,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,iCAAiC;EACjC,uBAAuB;AACzB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,iCAAiC;AACnC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,aAAa;AACf;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,oCAAoC;EACpC,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,QAAQ;;EAER,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,8BAA8B;EAC9B,yCAAyC;EACzC,UAAU;EACV,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,0BAA0B;EAC1B,UAAU;EACV,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,4CAA4C;EAC5C,YAAY;AACd;;AAEA;EACE,eAAe;AACjB","sourcesContent":["html {\n  box-sizing: border-box;\n  font-family: Roboto, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\n\n.hello {\n    color: red;\n}\n\n\n.main {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n}\n\n.gameboard {\n  display: flex;\n  flex-direction: row;\n  height: fit-content;\n}\n\n.column {\n  display: flex;\n  flex-direction: column;\n}\n\n.header {\n  text-align: center;\n  font-size: 2rem;\n}\n\n.your-side,\n.enemy-side {\n  margin:2rem;\n  height: fit-content;\n}\n\n.cell {\n  width: 3rem;\n  height: 3rem;\n  --rgb: 250, 215, 170;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.cell.ship {\n  --rgb: 27, 133, 137;\n  /*background-color: rgb(var(--rgb));*/\n}\n\n.cell.ship.hit {\n  --rgb: 95, 110, 160;\n  /*background-color: rgb(var(--rgb));*/\n}\n\n.cell.hit {\n  --rgb: 229, 112, 112;\n  /*background-color: rgb(var(--rgb));*/\n  \n}\n\n.cell.ship.hit.sunk {\n  --rgb: 110, 94, 94;\n  /*background-color: rgb(var(--rgb));*/\n}\n\n.cell.hit::before {\n  content: '•';\n  font-size: 2em;\n}\n\n.cell.ship::before {\n  content: '';\n}\n\n.cell.ship.hit::before {\n  content: 'X';\n}\n\nbutton.cell {\n  box-shadow: 2px 2px 2px 1px rgba(128, 128, 128, 0.068);\n  color: black;\n  text-decoration: none;\n  --alpha: 0.8;\n  background-color: rgba(var(--rgb), var(--alpha));\n  cursor: crosshair;\n}\n\n.gameboard-self button {\n  cursor: auto;\n}\n\nbutton.cell:hover {\n  --alpha: 1;\n}\n\nbutton.cell.empty:not(.hit):hover {\n  --rgb: 216, 185, 145;\n}\n\nbutton.cell.empty.hit:hover {\n  --rgb: 199, 95, 95;\n}\n\n.ships-to-place {\n  margin: 1rem 0rem;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n\n.ships-to-place.horizontal {\n  display: flex;\n  flex-direction: column;\n}\n\n.ships-to-place.vertical {\n  display: flex;\n  flex-direction: row;\n}\n\n.ships-to-place.vertical .ship-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.ships-to-place.horizontal .ship-container {\n  display: flex;\n  flex-direction: row;\n}\n\n.ship-container {\n  box-sizing: border-box;\n  border: 0.3rem solid rgb(128, 0, 0);\n  width: fit-content;\n  height: fit-content;\n}\n\n.available.cell {\n  --rgb: 27, 133, 137;\n  background-color: rgb(var(--rgb));\n  border: 1px solid white;\n}\n\n.available.cell:hover {\n  cursor: pointer;\n}\n\n.selected .cell {\n  --rgb: 53, 58, 203;\n  background-color: rgb(var(--rgb));\n}\n\n.fleet {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.button-orientation {\n  width: 6rem;\n  padding: 1rem;\n}\n\n.gameboard-enemy .ship {\n  --rgb: 250, 215, 170;\n}\n\n.pop-Up-Screen {\n  background-color: rgb(154, 169, 184);\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n\n  min-height: 100vh;\n  text-align: center;\n}\n\n.pop-Up-Screen .main {\n  display: grid;\n  margin-left: min(20rem, 20vw);\n  margin-right: min(20rem, 20vw);\n  grid: 1fr / minmax(0, 1fr) minmax(0, 1fr);\n  gap: 15rem;\n  justify-content: center;\n}\n\n.pop-Up-Screen .main .gameboard {\n  display: flex;\n  justify-content: center;\n}\n\n.pop-Up-Screen .main .pop-Up-AvailableShips {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.pop-Up-Screen .title {\n  margin-bottom: 2rem;\n  font-size: 2rem;\n}\n\n.btns {\n  display: grid;\n  grid: 4rem/ 4rem 4rem 4rem;\n  gap: 10rem;\n  justify-content: center;\n  margin: 2rem;\n}\n\n.btns button {\n  width: 5rem;\n  height: 5rem;\n  text-align: center;\n}\n\n.grayed {\n  background-color: rgba(128, 128, 128, 0.514);\n  border: none;\n}\n\n.ready-message {\n  font-size: 2rem;\n}"],"sourceRoot":""}]);
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

    const gameboard2 = (0,_gameboardFactory__WEBPACK_IMPORTED_MODULE_2__.gameboardFactory)(gameboardLength);
    target = document.querySelector('.gameboard-enemy');
    const player2 = (0,_playerFactory__WEBPACK_IMPORTED_MODULE_0__.playerFactory)('Computer', gameboard2, target, true);
    player2.gameboard.randomlyPlaceAllShips();

    // renderer.renderGameboard(player2);
    // renderer.listenForAttacks(player2, player1);

    _renderer__WEBPACK_IMPORTED_MODULE_3__.renderer.renderPlacementScreen(player1, player2);
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
    const selectedOrientation = 'horizontal';

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
        enemyPlayer,
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
        randomButton.addEventListener('click', () => {
            player.gameboard.randomlyPlaceAllShips();
            renderPlacementScreen(player, enemyPlayer, targetParent);
        });

        const finishButton = document.createElement('button');
        finishButton.classList.add('btn-finish');
        finishButton.classList.add('grayed');
        finishButton.textContent = 'Finish';
        finishButton.addEventListener('click', () => {
            if (player.gameboard.availableShips.length <= 0) {
                renderGameboard(player);

                renderGameboard(enemyPlayer);
                listenForAttacks(enemyPlayer, player);
            }

        });

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
                    // i - 1, j - 1 compensating for Coordinates(A,B,C) (1,2,3)
                    defendingPlayer.gameboard.receiveAttack(i - 1, j - 1);
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

        const createMessage = (text) => {
            const message = document.createElement('div');
            message.textContent = `${text}`;
            return message;
        };

        const createOrientationButton = () => {
            const orientationButton = document.createElement('button');
            orientationButton.classList.add('button-orientation');
            orientationButton.textContent = player.selectedOrientation;

            orientationButton.addEventListener('click', () => {
                if (player.selectedOrientation === 'horizontal') {
                    player.selectedOrientation = 'vertical';
                } else {
                    player.selectedOrientation = 'horizontal';
                }
                player.selectedElement = undefined;
                renderAvailableShips(player);
            });

            return orientationButton;
        };

        const renderUnusedShips = () => {
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

        const colorFinishButton = () => {
            const finishButton = document.querySelector('.btn-finish');
            if (finishButton !== undefined) {
                finishButton.classList.remove('grayed');
            }
        };

        const renderReadyMessage = () => {
            const rightSide = document.querySelector(
                '.main .pop-Up-AvailableShips'
            );
            rightSide.classList.add('ready-message');
            rightSide.textContent = 'Your fleet is ready for battle!';
        };
        // Message above orientation change button
        targetParent.appendChild(createMessage('Available ships'));

        // Change orientation button and its logic
        targetParent.appendChild(createOrientationButton());

        // Rendering ships under change orientation button
        renderUnusedShips();

        if (player.gameboard.availableShips.length <= 0) {
            colorFinishButton();
            renderReadyMessage();
        };

        
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTRCOzs7Ozs7Ozs7Ozs7Ozs7QUMvSTVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFeUI7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QjZCOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDLFlBQVk7QUFDeEQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixtRUFBZ0I7QUFDL0M7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qiw2QkFBNkI7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFD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TyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7O1VDMUI3RTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNvQjs7QUFFekM7O0FBRUEsc0RBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvZ2FtZUxvb3AuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL3BsYXllckZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL3JlbmRlcmVyLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9zaGlwRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxufVxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcblxcbi5oZWxsbyB7XFxuICAgIGNvbG9yOiByZWQ7XFxufVxcblxcblxcbi5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5nYW1lYm9hcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4uY29sdW1uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLnlvdXItc2lkZSxcXG4uZW5lbXktc2lkZSB7XFxuICBtYXJnaW46MnJlbTtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxufVxcblxcbi5jZWxsIHtcXG4gIHdpZHRoOiAzcmVtO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgLS1yZ2I6IDI1MCwgMjE1LCAxNzA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2VsbC5zaGlwIHtcXG4gIC0tcmdiOiAyNywgMTMzLCAxMzc7XFxuICAvKmJhY2tncm91bmQtY29sb3I6IHJnYih2YXIoLS1yZ2IpKTsqL1xcbn1cXG5cXG4uY2VsbC5zaGlwLmhpdCB7XFxuICAtLXJnYjogOTUsIDExMCwgMTYwO1xcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiByZ2IodmFyKC0tcmdiKSk7Ki9cXG59XFxuXFxuLmNlbGwuaGl0IHtcXG4gIC0tcmdiOiAyMjksIDExMiwgMTEyO1xcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiByZ2IodmFyKC0tcmdiKSk7Ki9cXG4gIFxcbn1cXG5cXG4uY2VsbC5zaGlwLmhpdC5zdW5rIHtcXG4gIC0tcmdiOiAxMTAsIDk0LCA5NDtcXG4gIC8qYmFja2dyb3VuZC1jb2xvcjogcmdiKHZhcigtLXJnYikpOyovXFxufVxcblxcbi5jZWxsLmhpdDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICfigKInO1xcbiAgZm9udC1zaXplOiAyZW07XFxufVxcblxcbi5jZWxsLnNoaXA6OmJlZm9yZSB7XFxuICBjb250ZW50OiAnJztcXG59XFxuXFxuLmNlbGwuc2hpcC5oaXQ6OmJlZm9yZSB7XFxuICBjb250ZW50OiAnWCc7XFxufVxcblxcbmJ1dHRvbi5jZWxsIHtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMnB4IDFweCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMDY4KTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIC0tYWxwaGE6IDAuODtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tcmdiKSwgdmFyKC0tYWxwaGEpKTtcXG4gIGN1cnNvcjogY3Jvc3NoYWlyO1xcbn1cXG5cXG4uZ2FtZWJvYXJkLXNlbGYgYnV0dG9uIHtcXG4gIGN1cnNvcjogYXV0bztcXG59XFxuXFxuYnV0dG9uLmNlbGw6aG92ZXIge1xcbiAgLS1hbHBoYTogMTtcXG59XFxuXFxuYnV0dG9uLmNlbGwuZW1wdHk6bm90KC5oaXQpOmhvdmVyIHtcXG4gIC0tcmdiOiAyMTYsIDE4NSwgMTQ1O1xcbn1cXG5cXG5idXR0b24uY2VsbC5lbXB0eS5oaXQ6aG92ZXIge1xcbiAgLS1yZ2I6IDE5OSwgOTUsIDk1O1xcbn1cXG5cXG4uc2hpcHMtdG8tcGxhY2Uge1xcbiAgbWFyZ2luOiAxcmVtIDByZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMnB4O1xcbn1cXG5cXG4uc2hpcHMtdG8tcGxhY2UuaG9yaXpvbnRhbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnNoaXBzLXRvLXBsYWNlLnZlcnRpY2FsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4uc2hpcHMtdG8tcGxhY2UudmVydGljYWwgLnNoaXAtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uc2hpcHMtdG8tcGxhY2UuaG9yaXpvbnRhbCAuc2hpcC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi5zaGlwLWNvbnRhaW5lciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyOiAwLjNyZW0gc29saWQgcmdiKDEyOCwgMCwgMCk7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4uYXZhaWxhYmxlLmNlbGwge1xcbiAgLS1yZ2I6IDI3LCAxMzMsIDEzNztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYih2YXIoLS1yZ2IpKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4uYXZhaWxhYmxlLmNlbGw6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2VsZWN0ZWQgLmNlbGwge1xcbiAgLS1yZ2I6IDUzLCA1OCwgMjAzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKHZhcigtLXJnYikpO1xcbn1cXG5cXG4uZmxlZXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5idXR0b24tb3JpZW50YXRpb24ge1xcbiAgd2lkdGg6IDZyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4uZ2FtZWJvYXJkLWVuZW15IC5zaGlwIHtcXG4gIC0tcmdiOiAyNTAsIDIxNSwgMTcwO1xcbn1cXG5cXG4ucG9wLVVwLVNjcmVlbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU0LCAxNjksIDE4NCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG5cXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucG9wLVVwLVNjcmVlbiAubWFpbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgbWFyZ2luLWxlZnQ6IG1pbigyMHJlbSwgMjB2dyk7XFxuICBtYXJnaW4tcmlnaHQ6IG1pbigyMHJlbSwgMjB2dyk7XFxuICBncmlkOiAxZnIgLyBtaW5tYXgoMCwgMWZyKSBtaW5tYXgoMCwgMWZyKTtcXG4gIGdhcDogMTVyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnBvcC1VcC1TY3JlZW4gLm1haW4gLmdhbWVib2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5wb3AtVXAtU2NyZWVuIC5tYWluIC5wb3AtVXAtQXZhaWxhYmxlU2hpcHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucG9wLVVwLVNjcmVlbiAudGl0bGUge1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmJ0bnMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQ6IDRyZW0vIDRyZW0gNHJlbSA0cmVtO1xcbiAgZ2FwOiAxMHJlbTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luOiAycmVtO1xcbn1cXG5cXG4uYnRucyBidXR0b24ge1xcbiAgd2lkdGg6IDVyZW07XFxuICBoZWlnaHQ6IDVyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5ncmF5ZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjUxNCk7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5yZWFkeS1tZXNzYWdlIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtFQUN0Qiw4REFBOEQ7QUFDaEU7QUFDQTs7O0VBR0UsbUJBQW1CO0FBQ3JCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOzs7QUFHQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLHFDQUFxQzs7QUFFdkM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzREFBc0Q7RUFDdEQsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osZ0RBQWdEO0VBQ2hELGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsbUNBQW1DO0VBQ25DLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsaUNBQWlDO0VBQ2pDLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7O0VBRVIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsOEJBQThCO0VBQzlCLHlDQUF5QztFQUN6QyxVQUFVO0VBQ1YsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLFVBQVU7RUFDVix1QkFBdUI7RUFDdkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSw0Q0FBNEM7RUFDNUMsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogUm9ib3RvLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG59XFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG59XFxuXFxuLmhlbGxvIHtcXG4gICAgY29sb3I6IHJlZDtcXG59XFxuXFxuXFxuLm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLmdhbWVib2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxufVxcblxcbi5jb2x1bW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5oZWFkZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4ueW91ci1zaWRlLFxcbi5lbmVteS1zaWRlIHtcXG4gIG1hcmdpbjoycmVtO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG59XFxuXFxuLmNlbGwge1xcbiAgd2lkdGg6IDNyZW07XFxuICBoZWlnaHQ6IDNyZW07XFxuICAtLXJnYjogMjUwLCAyMTUsIDE3MDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jZWxsLnNoaXAge1xcbiAgLS1yZ2I6IDI3LCAxMzMsIDEzNztcXG4gIC8qYmFja2dyb3VuZC1jb2xvcjogcmdiKHZhcigtLXJnYikpOyovXFxufVxcblxcbi5jZWxsLnNoaXAuaGl0IHtcXG4gIC0tcmdiOiA5NSwgMTEwLCAxNjA7XFxuICAvKmJhY2tncm91bmQtY29sb3I6IHJnYih2YXIoLS1yZ2IpKTsqL1xcbn1cXG5cXG4uY2VsbC5oaXQge1xcbiAgLS1yZ2I6IDIyOSwgMTEyLCAxMTI7XFxuICAvKmJhY2tncm91bmQtY29sb3I6IHJnYih2YXIoLS1yZ2IpKTsqL1xcbiAgXFxufVxcblxcbi5jZWxsLnNoaXAuaGl0LnN1bmsge1xcbiAgLS1yZ2I6IDExMCwgOTQsIDk0O1xcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiByZ2IodmFyKC0tcmdiKSk7Ki9cXG59XFxuXFxuLmNlbGwuaGl0OjpiZWZvcmUge1xcbiAgY29udGVudDogJ+KAoic7XFxuICBmb250LXNpemU6IDJlbTtcXG59XFxuXFxuLmNlbGwuc2hpcDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbn1cXG5cXG4uY2VsbC5zaGlwLmhpdDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICdYJztcXG59XFxuXFxuYnV0dG9uLmNlbGwge1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCAycHggMXB4IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4wNjgpO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgLS1hbHBoYTogMC44O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1yZ2IpLCB2YXIoLS1hbHBoYSkpO1xcbiAgY3Vyc29yOiBjcm9zc2hhaXI7XFxufVxcblxcbi5nYW1lYm9hcmQtc2VsZiBidXR0b24ge1xcbiAgY3Vyc29yOiBhdXRvO1xcbn1cXG5cXG5idXR0b24uY2VsbDpob3ZlciB7XFxuICAtLWFscGhhOiAxO1xcbn1cXG5cXG5idXR0b24uY2VsbC5lbXB0eTpub3QoLmhpdCk6aG92ZXIge1xcbiAgLS1yZ2I6IDIxNiwgMTg1LCAxNDU7XFxufVxcblxcbmJ1dHRvbi5jZWxsLmVtcHR5LmhpdDpob3ZlciB7XFxuICAtLXJnYjogMTk5LCA5NSwgOTU7XFxufVxcblxcbi5zaGlwcy10by1wbGFjZSB7XFxuICBtYXJnaW46IDFyZW0gMHJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAycHg7XFxufVxcblxcbi5zaGlwcy10by1wbGFjZS5ob3Jpem9udGFsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uc2hpcHMtdG8tcGxhY2UudmVydGljYWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi5zaGlwcy10by1wbGFjZS52ZXJ0aWNhbCAuc2hpcC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5zaGlwcy10by1wbGFjZS5ob3Jpem9udGFsIC5zaGlwLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuLnNoaXAtY29udGFpbmVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXI6IDAuM3JlbSBzb2xpZCByZ2IoMTI4LCAwLCAwKTtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxufVxcblxcbi5hdmFpbGFibGUuY2VsbCB7XFxuICAtLXJnYjogMjcsIDEzMywgMTM3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKHZhcigtLXJnYikpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxufVxcblxcbi5hdmFpbGFibGUuY2VsbDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zZWxlY3RlZCAuY2VsbCB7XFxuICAtLXJnYjogNTMsIDU4LCAyMDM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IodmFyKC0tcmdiKSk7XFxufVxcblxcbi5mbGVldCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJ1dHRvbi1vcmllbnRhdGlvbiB7XFxuICB3aWR0aDogNnJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5nYW1lYm9hcmQtZW5lbXkgLnNoaXAge1xcbiAgLS1yZ2I6IDI1MCwgMjE1LCAxNzA7XFxufVxcblxcbi5wb3AtVXAtU2NyZWVuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTQsIDE2OSwgMTg0KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcblxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5wb3AtVXAtU2NyZWVuIC5tYWluIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBtYXJnaW4tbGVmdDogbWluKDIwcmVtLCAyMHZ3KTtcXG4gIG1hcmdpbi1yaWdodDogbWluKDIwcmVtLCAyMHZ3KTtcXG4gIGdyaWQ6IDFmciAvIG1pbm1heCgwLCAxZnIpIG1pbm1heCgwLCAxZnIpO1xcbiAgZ2FwOiAxNXJlbTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ucG9wLVVwLVNjcmVlbiAubWFpbiAuZ2FtZWJvYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnBvcC1VcC1TY3JlZW4gLm1haW4gLnBvcC1VcC1BdmFpbGFibGVTaGlwcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wb3AtVXAtU2NyZWVuIC50aXRsZSB7XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4uYnRucyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZDogNHJlbS8gNHJlbSA0cmVtIDRyZW07XFxuICBnYXA6IDEwcmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW46IDJyZW07XFxufVxcblxcbi5idG5zIGJ1dHRvbiB7XFxuICB3aWR0aDogNXJlbTtcXG4gIGhlaWdodDogNXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmdyYXllZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNTE0KTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnJlYWR5LW1lc3NhZ2Uge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgcGxheWVyRmFjdG9yeSB9IGZyb20gJy4vcGxheWVyRmFjdG9yeSc7XG5pbXBvcnQgeyBzaGlwRmFjdG9yeSB9IGZyb20gJy4vc2hpcEZhY3RvcnknO1xuaW1wb3J0IHsgZ2FtZWJvYXJkRmFjdG9yeSB9IGZyb20gJy4vZ2FtZWJvYXJkRmFjdG9yeSc7XG5pbXBvcnQgeyByZW5kZXJlciB9IGZyb20gJy4vcmVuZGVyZXInO1xuXG5mdW5jdGlvbiBnYW1lbG9vcChnYW1lYm9hcmRMZW5ndGgpIHtcbiAgICAvLyBEdW1teSBkYXRhXG4gICAgY29uc3QgZ2FtZWJvYXJkMSA9IGdhbWVib2FyZEZhY3RvcnkoZ2FtZWJvYXJkTGVuZ3RoKTtcbiAgICBsZXQgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVib2FyZC1zZWxmJyk7XG4gICAgY29uc3QgcGxheWVyMSA9IHBsYXllckZhY3RvcnkoJ0hpa3luJywgZ2FtZWJvYXJkMSwgdGFyZ2V0KTtcblxuICAgIC8vIHJlbmRlcmVyLnJlbmRlckdhbWVib2FyZChwbGF5ZXIxKTtcbiAgICAvLyByZW5kZXJlci5yZW5kZXJBdmFpbGFibGVTaGlwcyhwbGF5ZXIxKTtcblxuICAgIGNvbnN0IGdhbWVib2FyZDIgPSBnYW1lYm9hcmRGYWN0b3J5KGdhbWVib2FyZExlbmd0aCk7XG4gICAgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVib2FyZC1lbmVteScpO1xuICAgIGNvbnN0IHBsYXllcjIgPSBwbGF5ZXJGYWN0b3J5KCdDb21wdXRlcicsIGdhbWVib2FyZDIsIHRhcmdldCwgdHJ1ZSk7XG4gICAgcGxheWVyMi5nYW1lYm9hcmQucmFuZG9tbHlQbGFjZUFsbFNoaXBzKCk7XG5cbiAgICAvLyByZW5kZXJlci5yZW5kZXJHYW1lYm9hcmQocGxheWVyMik7XG4gICAgLy8gcmVuZGVyZXIubGlzdGVuRm9yQXR0YWNrcyhwbGF5ZXIyLCBwbGF5ZXIxKTtcblxuICAgIHJlbmRlcmVyLnJlbmRlclBsYWNlbWVudFNjcmVlbihwbGF5ZXIxLCBwbGF5ZXIyKTtcbn1cblxuZXhwb3J0IHsgZ2FtZWxvb3AgfTtcbiIsImltcG9ydCB7IHNoaXBGYWN0b3J5IH0gZnJvbSAnLi9zaGlwRmFjdG9yeSc7XG5cbmNvbnN0IGdhbWVib2FyZEZhY3RvcnkgPSAobGVuZ3RoLCBhdmFpbGFibGVTaGlwcyA9IFs1LCA0LCAzLCAyXSkgPT4ge1xuICAgIGNvbnN0IGNlbGxzID0gbmV3IEFycmF5KGxlbmd0aCk7XG4gICAgY29uc3QgbWlzc2VkU2hvdHMgPSBbXTtcbiAgICBjb25zdCBhY2N1cmF0ZVNob3RzID0gW107XG4gICAgY29uc3QgaW5pdGlhbFNoaXBzID0gWy4uLmF2YWlsYWJsZVNoaXBzXTtcbiAgICBsZXQgdG90YWxTaGlwc0xlbmd0aCA9IDA7XG5cbiAgICAvLyBDcmVhdGUgZG91YmxlIGFycmF5XG4gICAgY29uc3QgaW5pdGlhbGl6ZUNlbGxzID0gKCkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBjZWxsc1tpXSA9IG5ldyBBcnJheShsZW5ndGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUG9wdWxhdGUgZG91YmxlIGFycmF5IHdpdGggMFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgICAgICAgICAgY2VsbHNbaV1bal0gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGluaXRpYWxpemVDZWxscygpO1xuXG4gICAgY29uc3QgcGxhY2VTaGlwID0gKHgsIHksIHNoaXBMZW5ndGgsIG9yaWVudGF0aW9uKSA9PiB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICB4ID0gTnVtYmVyKHgpO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgeSA9IE51bWJlcih5KTtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgIHNoaXBMZW5ndGggPSBOdW1iZXIoc2hpcExlbmd0aCk7XG4gICAgICAgIFxuICAgICAgICBpZiAoIWF2YWlsYWJsZVNoaXBzLmluY2x1ZGVzKHNoaXBMZW5ndGgpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZXJlIGFyZSBubyBhdmFpbGFibGUgc2hpcHMgd2l0aCB0aGF0IGxlbmd0aCcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNoaXAgPSBzaGlwRmFjdG9yeShzaGlwTGVuZ3RoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgICAgICAgIGlmIChjZWxsc1t4XVt5ICsgaV0gIT09IHVuZGVmaW5lZCAmJiBjZWxsc1t4XVt5ICsgaV0gIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTaGlwcyBhcmUgb3ZlcmxhcHBpbmcnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNlbGxzW3ggKyBpXSAhPT0gdW5kZWZpbmVkICYmIGNlbGxzW3ggKyBpXVt5XSAhPT0gMCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignU2hpcHMgYXJlIG92ZXJsYXBwaW5nJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICAgIGlmICgreSArIHNoaXBMZW5ndGggPiBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgJHt5ICsgc2hpcExlbmd0aH0gPiAke2xlbmd0aH1gKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ091dCBvZiBib3VuZHM6IHZlcnRpY2FsJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIGNlbGxzW3hdW3kgKyBpXSA9IHNoaXA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0b3RhbFNoaXBzTGVuZ3RoICs9IHNoaXBMZW5ndGg7XG4gICAgICAgIH0gZWxzZSBpZiAob3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgICAgaWYgKCt4ICsgc2hpcExlbmd0aCA+IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGAke3ggKyBzaGlwTGVuZ3RofSA+ICR7bGVuZ3RofWApO1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignT3V0IG9mIGJvdW5kczogaG9yaXpvbnRhbCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBjZWxsc1t4ICsgaV1beV0gPSBzaGlwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdG90YWxTaGlwc0xlbmd0aCArPSBzaGlwTGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKGBTaGlwIGNyZWF0ZWQgYXQ6ICR7eH18JHt5fWApO1xuICAgICAgICByZW1vdmVBdmFpbGFibGVTaGlwKGF2YWlsYWJsZVNoaXBzLmluZGV4T2Yoc2hpcExlbmd0aCkpO1xuICAgIH07XG5cbiAgICBjb25zdCBpc0NlbGxIaXQgPSAoeCwgeSkgPT4ge1xuICAgICAgICBjb25zdCBoaXQgPSBbeCwgeV07XG4gICAgICAgIGNvbnN0IG1pc3NlZFNob3RzSnNvbiA9IEpTT04uc3RyaW5naWZ5KG1pc3NlZFNob3RzKTtcbiAgICAgICAgY29uc3QgYWNjdXJhdGVTaG90c0pzb24gPSBKU09OLnN0cmluZ2lmeShhY2N1cmF0ZVNob3RzKTtcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICBtaXNzZWRTaG90c0pzb24uaW5jbHVkZXMoaGl0KSA9PT0gdHJ1ZSB8fFxuICAgICAgICAgICAgYWNjdXJhdGVTaG90c0pzb24uaW5jbHVkZXMoaGl0KSA9PT0gdHJ1ZVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVjZWl2ZUF0dGFjayA9ICh4LCB5KSA9PiB7XG4gICAgICAgIGlmIChpc0NlbGxIaXQoeCwgeSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2FudCBoaXQgc2FtZSBjZWxsIHR3aWNlJyk7XG4gICAgICAgIH0gZWxzZSBpZiAoY2VsbHNbeF1beV0gPT09IDApIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdNaXNzZWQgc2hvdCEnKTtcbiAgICAgICAgICAgIG1pc3NlZFNob3RzLnB1c2goW3gsIHldKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdBY2N1cmF0ZSBzaG90IScpO1xuICAgICAgICAgICAgY2VsbHNbeF1beV0uaGl0KCk7XG4gICAgICAgICAgICBhY2N1cmF0ZVNob3RzLnB1c2goW3gsIHldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXNBbGxTdW5rKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGlzQWxsU3VuayA9ICgpID0+IGFjY3VyYXRlU2hvdHMubGVuZ3RoID49IHRvdGFsU2hpcHNMZW5ndGg7XG5cbiAgICBjb25zdCByZW1vdmVBdmFpbGFibGVTaGlwID0gKGluZGV4KSA9PiB7XG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIGF2YWlsYWJsZVNoaXBzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhhdmFpbGFibGVTaGlwcyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgcmFuZG9tbHlQbGFjZUFsbFNoaXBzID0gKCkgPT4ge1xuICAgICAgICB3aGlsZSAoYXZhaWxhYmxlU2hpcHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3QgcmFuZG9tWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGxlbmd0aCk7XG4gICAgICAgICAgICBjb25zdCByYW5kb21ZID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbGVuZ3RoKTtcbiAgICAgICAgICAgIGNvbnN0IHJhbmRvbU9yaWVudGF0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XG4gICAgICAgICAgICBsZXQgb3JpZW50YXRpb247XG4gICAgICAgICAgICBpZiAocmFuZG9tT3JpZW50YXRpb24gPT09IDApIHtcbiAgICAgICAgICAgICAgICBvcmllbnRhdGlvbiA9ICdob3Jpem9udGFsJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmFuZG9tT3JpZW50YXRpb24gPT09IDEpIHtcbiAgICAgICAgICAgICAgICBvcmllbnRhdGlvbiA9ICd2ZXJ0aWNhbCc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcGxhY2VTaGlwKHJhbmRvbVgsIHJhbmRvbVksIGF2YWlsYWJsZVNoaXBzWzBdLCBvcmllbnRhdGlvbik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYXZhaWxhYmxlU2hpcHMpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICByYW5kb21seVBsYWNlQWxsU2hpcHMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjZWxscyxcbiAgICAgICAgcmVjZWl2ZUF0dGFjayxcbiAgICAgICAgaXNBbGxTdW5rLFxuICAgICAgICBwbGFjZVNoaXAsXG4gICAgICAgIGxlbmd0aCxcbiAgICAgICAgbWlzc2VkU2hvdHMsXG4gICAgICAgIGFjY3VyYXRlU2hvdHMsXG4gICAgICAgIGF2YWlsYWJsZVNoaXBzLFxuICAgICAgICBpc0NlbGxIaXQsXG4gICAgICAgIHJlbW92ZUF2YWlsYWJsZVNoaXAsXG4gICAgICAgIHJhbmRvbWx5UGxhY2VBbGxTaGlwc1xuICAgIH07XG59O1xuXG5leHBvcnQgeyBnYW1lYm9hcmRGYWN0b3J5IH07XG4iLCJjb25zdCBwbGF5ZXJGYWN0b3J5ID0gKG5hbWUsIGdhbWVib2FyZCwgZ2FtZWJvYXJkRWxlbWVudCwgaXNBaSA9IGZhbHNlKSA9PiB7XG4gICAgbGV0IHNlbGVjdGVkRWxlbWVudDtcbiAgICBjb25zdCBzZWxlY3RlZE9yaWVudGF0aW9uID0gJ2hvcml6b250YWwnO1xuXG4gICAgY29uc3QgbWFrZU1vdmUgPSAoZW5lbXlQbGF5ZXIpID0+IHtcbiAgICAgICAgY29uc3QgcmFuZG9tWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGdhbWVib2FyZC5sZW5ndGgpO1xuICAgICAgICBjb25zdCByYW5kb21ZID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZ2FtZWJvYXJkLmxlbmd0aCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBlbmVteVBsYXllci5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhyYW5kb21YLCByYW5kb21ZKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIG1ha2VNb3ZlKGVuZW15UGxheWVyKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBpc0FsbFNoaXBzUGxhY2VkID0gKCkgPT4gZ2FtZWJvYXJkLmF2YWlsYWJsZVNoaXBzLmxlbmd0aCA8PSAwO1xuXG4gICAgY29uc3QgaXNMb3N0ID0gKCkgPT4gZ2FtZWJvYXJkLmlzQWxsU3VuaygpO1xuICAgIHJldHVybiB7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIGdhbWVib2FyZCxcbiAgICAgICAgaXNBaSxcbiAgICAgICAgbWFrZU1vdmUsXG4gICAgICAgIGlzTG9zdCxcbiAgICAgICAgZ2FtZWJvYXJkRWxlbWVudCxcbiAgICAgICAgc2VsZWN0ZWRFbGVtZW50LFxuICAgICAgICBzZWxlY3RlZE9yaWVudGF0aW9uLFxuICAgICAgICBpc0FsbFNoaXBzUGxhY2VkXG4gICAgfTtcbn07XG5cbmV4cG9ydCB7IHBsYXllckZhY3RvcnkgfTtcbiIsImltcG9ydCB7IGdhbWVib2FyZEZhY3RvcnkgfSBmcm9tICcuL2dhbWVib2FyZEZhY3RvcnknO1xuXG5jb25zdCByZW5kZXJlciA9ICgoKSA9PiB7XG4gICAgY29uc3QgcmVuZGVyUGxhY2VtZW50U2NyZWVuID0gKFxuICAgICAgICBwbGF5ZXIsXG4gICAgICAgIGVuZW15UGxheWVyLFxuICAgICAgICB0YXJnZXRQYXJlbnQgPSBwbGF5ZXIuZ2FtZWJvYXJkRWxlbWVudFxuICAgICkgPT4ge1xuICAgICAgICB0YXJnZXRQYXJlbnQudGV4dENvbnRlbnQgPSAnJztcblxuICAgICAgICBjb25zdCBwb3BVcFNjcmVlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwb3BVcFNjcmVlbi5jbGFzc0xpc3QuYWRkKCdwb3AtVXAtU2NyZWVuJyk7XG5cbiAgICAgICAgY29uc3QgcG9wVXBUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwb3BVcFRpdGxlLnRleHRDb250ZW50ID0gYEFkbWlyYWwgJHtwbGF5ZXIubmFtZX0sIHBsYWNlIHlvdXIgc2hpcHMhYDtcbiAgICAgICAgcG9wVXBUaXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuXG4gICAgICAgIGNvbnN0IHBvcFVwTWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwb3BVcE1haW4uY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xuXG4gICAgICAgIGNvbnN0IHBvcFVwR2FtZWJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHBvcFVwR2FtZWJvYXJkLmNsYXNzTGlzdC5hZGQoJ2dhbWVib2FyZCcpO1xuXG4gICAgICAgIGNvbnN0IHBvcFVwQXZhaWxhYmxlU2hpcHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcG9wVXBBdmFpbGFibGVTaGlwcy5jbGFzc0xpc3QuYWRkKCdwb3AtVXAtQXZhaWxhYmxlU2hpcHMnKTtcblxuICAgICAgICBjb25zdCByYW5kb21CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgcmFuZG9tQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J0bi1yZXRyeScpO1xuICAgICAgICByYW5kb21CdXR0b24udGV4dENvbnRlbnQgPSAnUmFuZG9tJztcbiAgICAgICAgcmFuZG9tQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgcGxheWVyLmdhbWVib2FyZC5yYW5kb21seVBsYWNlQWxsU2hpcHMoKTtcbiAgICAgICAgICAgIHJlbmRlclBsYWNlbWVudFNjcmVlbihwbGF5ZXIsIGVuZW15UGxheWVyLCB0YXJnZXRQYXJlbnQpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBmaW5pc2hCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZmluaXNoQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J0bi1maW5pc2gnKTtcbiAgICAgICAgZmluaXNoQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2dyYXllZCcpO1xuICAgICAgICBmaW5pc2hCdXR0b24udGV4dENvbnRlbnQgPSAnRmluaXNoJztcbiAgICAgICAgZmluaXNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHBsYXllci5nYW1lYm9hcmQuYXZhaWxhYmxlU2hpcHMubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICAgICAgICByZW5kZXJHYW1lYm9hcmQocGxheWVyKTtcblxuICAgICAgICAgICAgICAgIHJlbmRlckdhbWVib2FyZChlbmVteVBsYXllcik7XG4gICAgICAgICAgICAgICAgbGlzdGVuRm9yQXR0YWNrcyhlbmVteVBsYXllciwgcGxheWVyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCByZXNldEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICByZXNldEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidG4tcmVzZXQnKTtcbiAgICAgICAgcmVzZXRCdXR0b24udGV4dENvbnRlbnQgPSAnUmVzZXQnO1xuICAgICAgICByZXNldEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHBsYXllci5nYW1lYm9hcmQgPSBnYW1lYm9hcmRGYWN0b3J5KHBsYXllci5nYW1lYm9hcmQubGVuZ3RoKTtcbiAgICAgICAgICAgIHJlbmRlclBsYWNlbWVudFNjcmVlbihwbGF5ZXIsIHRhcmdldFBhcmVudCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYnV0dG9ucy5jbGFzc0xpc3QuYWRkKCdidG5zJyk7XG5cbiAgICAgICAgYnV0dG9ucy5hcHBlbmRDaGlsZChyYW5kb21CdXR0b24pO1xuICAgICAgICBidXR0b25zLmFwcGVuZENoaWxkKGZpbmlzaEJ1dHRvbik7XG4gICAgICAgIGJ1dHRvbnMuYXBwZW5kQ2hpbGQocmVzZXRCdXR0b24pO1xuXG4gICAgICAgIHBvcFVwTWFpbi5hcHBlbmRDaGlsZChwb3BVcEdhbWVib2FyZCk7XG4gICAgICAgIHBvcFVwTWFpbi5hcHBlbmRDaGlsZChwb3BVcEF2YWlsYWJsZVNoaXBzKTtcblxuICAgICAgICBwb3BVcFNjcmVlbi5hcHBlbmRDaGlsZChwb3BVcFRpdGxlKTtcbiAgICAgICAgcG9wVXBTY3JlZW4uYXBwZW5kQ2hpbGQocG9wVXBNYWluKTtcbiAgICAgICAgcG9wVXBTY3JlZW4uYXBwZW5kQ2hpbGQoYnV0dG9ucyk7XG5cbiAgICAgICAgdGFyZ2V0UGFyZW50LmFwcGVuZENoaWxkKHBvcFVwU2NyZWVuKTtcblxuICAgICAgICByZW5kZXJHYW1lYm9hcmQocGxheWVyLCBwb3BVcEdhbWVib2FyZCk7XG4gICAgICAgIHJlbmRlckF2YWlsYWJsZVNoaXBzKFxuICAgICAgICAgICAgcGxheWVyLFxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcC1VcC1BdmFpbGFibGVTaGlwcycpXG4gICAgICAgICk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlbmRlckdhbWVib2FyZCA9IChcbiAgICAgICAgcGxheWVyLFxuICAgICAgICB0YXJnZXRQYXJlbnQgPSBwbGF5ZXIuZ2FtZWJvYXJkRWxlbWVudFxuICAgICkgPT4ge1xuICAgICAgICBjb25zdCBjcmVhdGVDb29yZGluYXRlQ29sdW1uID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3Q29sdW1uRWxlbWVudCA9IGNyZWF0ZUNvbHVtbigpO1xuICAgICAgICAgICAgbGV0IG5ld0NlbGxFbGVtZW50O1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IC0xOyBpIDwgcGxheWVyLmdhbWVib2FyZC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIGlmIChpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdDZWxsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBuZXdDZWxsRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdjZWxsJyk7XG4gICAgICAgICAgICAgICAgICAgIG5ld0NlbGxFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ251bGwnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBuZXdDZWxsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBuZXdDZWxsRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdjZWxsJyk7XG4gICAgICAgICAgICAgICAgICAgIG5ld0NlbGxFbGVtZW50LnRleHRDb250ZW50ID0gYCR7aSArIDF9YDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbmV3Q29sdW1uRWxlbWVudC5hcHBlbmRDaGlsZChuZXdDZWxsRWxlbWVudCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBuZXdDb2x1bW5FbGVtZW50O1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGNyZWF0ZUNvbHVtbiA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld0NvbHVtbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIG5ld0NvbHVtbkVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnY29sdW1uJyk7XG5cbiAgICAgICAgICAgIHJldHVybiBuZXdDb2x1bW5FbGVtZW50O1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGNyZWF0ZUFscGhhYmV0Q2VsbCA9IChsZXR0ZXIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNoYXJjb2RlID0gNjUgKyBOdW1iZXIobGV0dGVyKTtcbiAgICAgICAgICAgIGNvbnN0IGNoYXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNoYXJjb2RlKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld0NlbGxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBuZXdDZWxsRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdjZWxsJyk7XG4gICAgICAgICAgICBuZXdDZWxsRWxlbWVudC50ZXh0Q29udGVudCA9IGNoYXI7XG5cbiAgICAgICAgICAgIHJldHVybiBuZXdDZWxsRWxlbWVudDtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBjcmVhdGVHYW1lYm9hcmRDZWxsID0gKHgsIHkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBwbGF5ZXIuZ2FtZWJvYXJkLmNlbGxzW3hdW3ldO1xuXG4gICAgICAgICAgICBjb25zdCBuZXdDZWxsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgbmV3Q2VsbEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnY2VsbCcpO1xuXG4gICAgICAgICAgICBpZiAocGxheWVyLmdhbWVib2FyZC5pc0NlbGxIaXQoeCwgeSkpIHtcbiAgICAgICAgICAgICAgICBuZXdDZWxsRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdoaXQnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNlbGwgPT09IDApIHtcbiAgICAgICAgICAgICAgICAvLyBuZXdDZWxsRWxlbWVudC50ZXh0Q29udGVudCA9IDA7XG4gICAgICAgICAgICAgICAgbmV3Q2VsbEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnZW1wdHknKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV3Q2VsbEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnc2hpcCcpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNlbGwuaXNTdW5rKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3Q2VsbEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnc3VuaycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG5ld0NlbGxFbGVtZW50O1xuICAgICAgICB9O1xuICAgICAgICAvLyBSZW5kZXJzIGdhbWVib2FyZCBhbmQgYXBwZW5kcyB0byB0YXJnZXQgZWxlbWVudFxuICAgICAgICB0YXJnZXRQYXJlbnQudGV4dENvbnRlbnQgPSAnJztcblxuICAgICAgICBsZXQgY29sdW1uRWxlbWVudDtcbiAgICAgICAgbGV0IGNlbGxFbGVtZW50O1xuXG4gICAgICAgIGZvciAobGV0IHggPSAtMTsgeCA8IHBsYXllci5nYW1lYm9hcmQuY2VsbHMubGVuZ3RoOyB4ICs9IDEpIHtcbiAgICAgICAgICAgIC8vIElmIGl0IGlzIGEgZmlyc3QgY29sdW1uLCB3ZSBjcmVhdGUgY29vcmRpbmF0ZSBjb2x1bW5cbiAgICAgICAgICAgIGlmICh4ID09PSAtMSkge1xuICAgICAgICAgICAgICAgIGNvbHVtbkVsZW1lbnQgPSBjcmVhdGVDb29yZGluYXRlQ29sdW1uKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIEVsc2Ugd2UgY3JlYXRlIHVzdWFsIGNvbHVtbiBhbmQgcG9wdWxhdGUgaXRcbiAgICAgICAgICAgICAgICBjb2x1bW5FbGVtZW50ID0gY3JlYXRlQ29sdW1uKCk7XG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCB5ID0gLTE7IHkgPCBwbGF5ZXIuZ2FtZWJvYXJkLmNlbGxzLmxlbmd0aDsgeSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEZpcnN0IHJvdyB3aWxsIGdldCBhIGxldHRlclxuICAgICAgICAgICAgICAgICAgICBpZiAoeSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGxFbGVtZW50ID0gY3JlYXRlQWxwaGFiZXRDZWxsKHgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbEVsZW1lbnQgPSBjcmVhdGVHYW1lYm9hcmRDZWxsKHgsIHkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbkVsZW1lbnQuYXBwZW5kQ2hpbGQoY2VsbEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRhcmdldFBhcmVudC5hcHBlbmRDaGlsZChjb2x1bW5FbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICBsaXN0ZW5Gb3JTaGlwUGxhY2VtZW50KHBsYXllciwgdGFyZ2V0UGFyZW50KTtcbiAgICB9O1xuXG4gICAgY29uc3QgbGlzdGVuRm9yQXR0YWNrcyA9IChkZWZlbmRpbmdQbGF5ZXIsIGF0dGFja2luZ1BsYXllcikgPT4ge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBkZWZlbmRpbmdQbGF5ZXIuZ2FtZWJvYXJkRWxlbWVudDtcbiAgICAgICAgY29uc3QgY29sdW1ucyA9IHRhcmdldC5jaGlsZHJlbjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2x1bW5zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBjb25zdCBjb2x1bW4gPSBjb2x1bW5zW2ldO1xuICAgICAgICAgICAgY29uc3QgY2VsbHMgPSBjb2x1bW4uY2hpbGRyZW47XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNlbGxzLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgICAgICAgICAgY2VsbHNbal0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghYXR0YWNraW5nUGxheWVyLmlzQWxsU2hpcHNQbGFjZWQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYFBsYXllciAke2F0dGFja2luZ1BsYXllci5uYW1lfSBoYXMgbm90IGZpbmlzaGVkIHBsYWNpbmcgc2hpcHNgXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYFJlbWFpbmluZyBzaGlwczogJHthdHRhY2tpbmdQbGF5ZXIuZ2FtZWJvYXJkLmF2YWlsYWJsZVNoaXBzfWBcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gaSAtIDEsIGogLSAxIGNvbXBlbnNhdGluZyBmb3IgQ29vcmRpbmF0ZXMoQSxCLEMpICgxLDIsMylcbiAgICAgICAgICAgICAgICAgICAgZGVmZW5kaW5nUGxheWVyLmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKGkgLSAxLCBqIC0gMSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZWZlbmRpbmdQbGF5ZXIuaXNMb3N0KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBQbGF5ZXIgJHtkZWZlbmRpbmdQbGF5ZXIubmFtZX0gbG9zZXMhYCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyR2FtZWJvYXJkKGRlZmVuZGluZ1BsYXllcik7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbkZvckF0dGFja3MoZGVmZW5kaW5nUGxheWVyLCBhdHRhY2tpbmdQbGF5ZXIpO1xuICAgICAgICAgICAgICAgICAgICAvLyBBaSBtYWtlcyBhIG1vdmVcbiAgICAgICAgICAgICAgICAgICAgZGVmZW5kaW5nUGxheWVyLm1ha2VNb3ZlKGF0dGFja2luZ1BsYXllcik7XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlckdhbWVib2FyZChhdHRhY2tpbmdQbGF5ZXIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHJlbmRlckF2YWlsYWJsZVNoaXBzID0gKFxuICAgICAgICBwbGF5ZXIsXG4gICAgICAgIHRhcmdldFBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3AtVXAtQXZhaWxhYmxlU2hpcHMnKVxuICAgICkgPT4ge1xuICAgICAgICB0YXJnZXRQYXJlbnQudGV4dENvbnRlbnQgPSAnJztcblxuICAgICAgICBjb25zdCBjcmVhdGVNZXNzYWdlID0gKHRleHQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIG1lc3NhZ2UudGV4dENvbnRlbnQgPSBgJHt0ZXh0fWA7XG4gICAgICAgICAgICByZXR1cm4gbWVzc2FnZTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBjcmVhdGVPcmllbnRhdGlvbkJ1dHRvbiA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9yaWVudGF0aW9uQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBvcmllbnRhdGlvbkJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24tb3JpZW50YXRpb24nKTtcbiAgICAgICAgICAgIG9yaWVudGF0aW9uQnV0dG9uLnRleHRDb250ZW50ID0gcGxheWVyLnNlbGVjdGVkT3JpZW50YXRpb247XG5cbiAgICAgICAgICAgIG9yaWVudGF0aW9uQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIuc2VsZWN0ZWRPcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICAgICAgICAgIHBsYXllci5zZWxlY3RlZE9yaWVudGF0aW9uID0gJ3ZlcnRpY2FsJztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuc2VsZWN0ZWRPcmllbnRhdGlvbiA9ICdob3Jpem9udGFsJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGxheWVyLnNlbGVjdGVkRWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICByZW5kZXJBdmFpbGFibGVTaGlwcyhwbGF5ZXIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBvcmllbnRhdGlvbkJ1dHRvbjtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCByZW5kZXJVbnVzZWRTaGlwcyA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ3NoaXBzLXRvLXBsYWNlJyk7XG4gICAgICAgICAgICB0YXJnZXRQYXJlbnQuYXBwZW5kQ2hpbGQodGFyZ2V0KTtcblxuICAgICAgICAgICAgdGFyZ2V0LnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgndmVydGljYWwnKTtcbiAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdob3Jpem9udGFsJyk7XG4gICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZChgJHtwbGF5ZXIuc2VsZWN0ZWRPcmllbnRhdGlvbn1gKTtcblxuICAgICAgICAgICAgY29uc3QgeyBhdmFpbGFibGVTaGlwcyB9ID0gcGxheWVyLmdhbWVib2FyZDtcbiAgICAgICAgICAgIGF2YWlsYWJsZVNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB3aG9sZVNoaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICB3aG9sZVNoaXAuY2xhc3NMaXN0LnRvZ2dsZSgnc2hpcC1jb250YWluZXInKTtcbiAgICAgICAgICAgICAgICB3aG9sZVNoaXAuc2V0QXR0cmlidXRlKCdsZW5ndGgnLCBgJHtzaGlwfWApO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcnRPZlNoaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgcGFydE9mU2hpcC5jbGFzc0xpc3QudG9nZ2xlKCdhdmFpbGFibGUnKTtcbiAgICAgICAgICAgICAgICAgICAgcGFydE9mU2hpcC5jbGFzc0xpc3QudG9nZ2xlKCdjZWxsJyk7XG4gICAgICAgICAgICAgICAgICAgIHdob2xlU2hpcC5hcHBlbmRDaGlsZChwYXJ0T2ZTaGlwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGFyZ2V0LmFwcGVuZENoaWxkKHdob2xlU2hpcCk7XG5cbiAgICAgICAgICAgICAgICB3aG9sZVNoaXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIuc2VsZWN0ZWRFbGVtZW50ICE9PSB3aG9sZVNoaXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFyZ2V0LmNoaWxkcmVuLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LmNoaWxkcmVuW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuc2VsZWN0ZWRFbGVtZW50ID0gd2hvbGVTaGlwO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hvbGVTaGlwLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuc2VsZWN0ZWRFbGVtZW50ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hvbGVTaGlwLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGNvbG9yRmluaXNoQnV0dG9uID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZmluaXNoQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1maW5pc2gnKTtcbiAgICAgICAgICAgIGlmIChmaW5pc2hCdXR0b24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGZpbmlzaEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdncmF5ZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCByZW5kZXJSZWFkeU1lc3NhZ2UgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByaWdodFNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICcubWFpbiAucG9wLVVwLUF2YWlsYWJsZVNoaXBzJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJpZ2h0U2lkZS5jbGFzc0xpc3QuYWRkKCdyZWFkeS1tZXNzYWdlJyk7XG4gICAgICAgICAgICByaWdodFNpZGUudGV4dENvbnRlbnQgPSAnWW91ciBmbGVldCBpcyByZWFkeSBmb3IgYmF0dGxlISc7XG4gICAgICAgIH07XG4gICAgICAgIC8vIE1lc3NhZ2UgYWJvdmUgb3JpZW50YXRpb24gY2hhbmdlIGJ1dHRvblxuICAgICAgICB0YXJnZXRQYXJlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWVzc2FnZSgnQXZhaWxhYmxlIHNoaXBzJykpO1xuXG4gICAgICAgIC8vIENoYW5nZSBvcmllbnRhdGlvbiBidXR0b24gYW5kIGl0cyBsb2dpY1xuICAgICAgICB0YXJnZXRQYXJlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlT3JpZW50YXRpb25CdXR0b24oKSk7XG5cbiAgICAgICAgLy8gUmVuZGVyaW5nIHNoaXBzIHVuZGVyIGNoYW5nZSBvcmllbnRhdGlvbiBidXR0b25cbiAgICAgICAgcmVuZGVyVW51c2VkU2hpcHMoKTtcblxuICAgICAgICBpZiAocGxheWVyLmdhbWVib2FyZC5hdmFpbGFibGVTaGlwcy5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgY29sb3JGaW5pc2hCdXR0b24oKTtcbiAgICAgICAgICAgIHJlbmRlclJlYWR5TWVzc2FnZSgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIFxuICAgIH07XG5cbiAgICBjb25zdCBsaXN0ZW5Gb3JTaGlwUGxhY2VtZW50ID0gKFxuICAgICAgICBwbGF5ZXIsXG4gICAgICAgIHRhcmdldFBhcmVudCA9IHBsYXllci5nYW1lYm9hcmRFbGVtZW50XG4gICAgKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbHVtbnMgPSB0YXJnZXRQYXJlbnQuY2hpbGRyZW47XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sdW1ucy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgY29uc3QgY29sdW1uID0gY29sdW1uc1tpXTtcbiAgICAgICAgICAgIGNvbnN0IGNlbGxzID0gY29sdW1uLmNoaWxkcmVuO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjZWxscy5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICAgICAgICAgIGNlbGxzW2pdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocGxheWVyLnNlbGVjdGVkRWxlbWVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzaGlwTGVuZ3RoID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuc2VsZWN0ZWRFbGVtZW50LmdldEF0dHJpYnV0ZSgnbGVuZ3RoJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzaGlwTGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGksIGopO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaSAtIDEsIGogLSAxIGR1ZSB0byBoYXZpbmcgY29vcmRpbmF0ZSAoQSxCLEMuLi4pLCAoMSwgMiwgMy4uLilcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkgLSAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGogLSAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBMZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyLnNlbGVjdGVkT3JpZW50YXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZW1vdmVJbmRleCA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyLmdhbWVib2FyZC5hdmFpbGFibGVTaGlwcy5pbmRleE9mKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXIoc2hpcExlbmd0aClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyLmdhbWVib2FyZC5yZW1vdmVBdmFpbGFibGVTaGlwKHJlbW92ZUluZGV4KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyR2FtZWJvYXJkKHBsYXllciwgdGFyZ2V0UGFyZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckF2YWlsYWJsZVNoaXBzKHBsYXllcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVuZGVyUGxhY2VtZW50U2NyZWVuLFxuICAgICAgICByZW5kZXJHYW1lYm9hcmQsXG4gICAgICAgIGxpc3RlbkZvckF0dGFja3MsXG4gICAgICAgIHJlbmRlckF2YWlsYWJsZVNoaXBzLFxuICAgICAgICBsaXN0ZW5Gb3JTaGlwUGxhY2VtZW50XG4gICAgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IHJlbmRlcmVyIH07XG4iLCJjb25zdCBzaGlwRmFjdG9yeSA9IChsZW5ndGgpID0+IHtcbiAgICBsZXQgaGl0Q291bnQgPSAwO1xuICAgIGNvbnN0IGhpdCA9ICgpID0+IHtcbiAgICAgICAgaGl0Q291bnQgKz0gMTtcbiAgICB9O1xuICAgIGNvbnN0IGlzU3VuayA9ICgpID0+IGhpdENvdW50ID49IGxlbmd0aDtcbiAgICByZXR1cm4geyBoaXQsIGlzU3VuayB9O1xufTtcblxuZXhwb3J0IHsgc2hpcEZhY3RvcnkgfTtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgZ2FtZWxvb3AgfSBmcm9tICcuL2dhbWVMb29wLmpzJztcblxuY29uc29sZS5sb2coJ1NjcmlwdHMgYXJlIHdvcmtpbmcnKTtcblxuZ2FtZWxvb3AoNyk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=