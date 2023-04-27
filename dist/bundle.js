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
        }
        // Message above orientation change button
        targetParent.appendChild(createMessage('Available ships'));

        // Change orientation button and its logic
        targetParent.appendChild(createOrientationButton());

        // Rendering ships under change orientation button
        renderUnusedShips();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSxnREFBZ0QsMkJBQTJCLG1FQUFtRSxHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRyxZQUFZLGlCQUFpQixHQUFHLFVBQVUsa0JBQWtCLEdBQUcsV0FBVyxrQkFBa0Isd0JBQXdCLGtDQUFrQyxHQUFHLGdCQUFnQixrQkFBa0Isd0JBQXdCLHdCQUF3QixHQUFHLGFBQWEsa0JBQWtCLDJCQUEyQixHQUFHLGFBQWEsdUJBQXVCLG9CQUFvQixHQUFHLDhCQUE4QixnQkFBZ0Isd0JBQXdCLEdBQUcsV0FBVyxnQkFBZ0IsaUJBQWlCLHlCQUF5Qix1QkFBdUIsa0JBQWtCLDRCQUE0Qix3QkFBd0IsR0FBRyxnQkFBZ0Isd0JBQXdCLHdDQUF3QyxLQUFLLG9CQUFvQix3QkFBd0Isd0NBQXdDLEtBQUssZUFBZSx5QkFBeUIsd0NBQXdDLFNBQVMseUJBQXlCLHVCQUF1Qix3Q0FBd0MsS0FBSyx1QkFBdUIsaUJBQWlCLG1CQUFtQixHQUFHLHdCQUF3QixnQkFBZ0IsR0FBRyw0QkFBNEIsaUJBQWlCLEdBQUcsaUJBQWlCLDJEQUEyRCxpQkFBaUIsMEJBQTBCLGlCQUFpQixxREFBcUQsc0JBQXNCLEdBQUcsNEJBQTRCLGlCQUFpQixHQUFHLHVCQUF1QixlQUFlLEdBQUcsdUNBQXVDLHlCQUF5QixHQUFHLGlDQUFpQyx1QkFBdUIsR0FBRyxxQkFBcUIsc0JBQXNCLGtCQUFrQiwyQkFBMkIsYUFBYSxHQUFHLGdDQUFnQyxrQkFBa0IsMkJBQTJCLEdBQUcsOEJBQThCLGtCQUFrQix3QkFBd0IsR0FBRyw4Q0FBOEMsa0JBQWtCLDJCQUEyQixHQUFHLGdEQUFnRCxrQkFBa0Isd0JBQXdCLEdBQUcscUJBQXFCLDJCQUEyQix3Q0FBd0MsdUJBQXVCLHdCQUF3QixHQUFHLHFCQUFxQix3QkFBd0Isc0NBQXNDLDRCQUE0QixHQUFHLDJCQUEyQixvQkFBb0IsR0FBRyxxQkFBcUIsdUJBQXVCLHNDQUFzQyxHQUFHLFlBQVksa0JBQWtCLDJCQUEyQiw0QkFBNEIsd0JBQXdCLEdBQUcseUJBQXlCLGdCQUFnQixrQkFBa0IsR0FBRyw0QkFBNEIseUJBQXlCLEdBQUcsb0JBQW9CLHlDQUF5QyxrQkFBa0IsMkJBQTJCLHVCQUF1QixXQUFXLFlBQVksYUFBYSxjQUFjLHVCQUF1QixrQkFBa0IsR0FBRywwQkFBMEIsa0JBQWtCLHVCQUF1Qix3QkFBd0Isd0JBQXdCLDRCQUE0QixHQUFHLHFDQUFxQyxrQkFBa0IsNEJBQTRCLEdBQUcsaURBQWlELGtCQUFrQiwyQkFBMkIsd0JBQXdCLEdBQUcsMkJBQTJCLHdCQUF3QixvQkFBb0IsR0FBRyxXQUFXLGtCQUFrQiwrQkFBK0IsZUFBZSw0QkFBNEIsaUJBQWlCLEdBQUcsa0JBQWtCLGdCQUFnQixpQkFBaUIsdUJBQXVCLEdBQUcsU0FBUyxnRkFBZ0YsWUFBWSxhQUFhLE1BQU0sT0FBTyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGNBQWMsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGdDQUFnQywyQkFBMkIsbUVBQW1FLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLFlBQVksaUJBQWlCLEdBQUcsVUFBVSxrQkFBa0IsR0FBRyxXQUFXLGtCQUFrQix3QkFBd0Isa0NBQWtDLEdBQUcsZ0JBQWdCLGtCQUFrQix3QkFBd0Isd0JBQXdCLEdBQUcsYUFBYSxrQkFBa0IsMkJBQTJCLEdBQUcsYUFBYSx1QkFBdUIsb0JBQW9CLEdBQUcsOEJBQThCLGdCQUFnQix3QkFBd0IsR0FBRyxXQUFXLGdCQUFnQixpQkFBaUIseUJBQXlCLHVCQUF1QixrQkFBa0IsNEJBQTRCLHdCQUF3QixHQUFHLGdCQUFnQix3QkFBd0Isd0NBQXdDLEtBQUssb0JBQW9CLHdCQUF3Qix3Q0FBd0MsS0FBSyxlQUFlLHlCQUF5Qix3Q0FBd0MsU0FBUyx5QkFBeUIsdUJBQXVCLHdDQUF3QyxLQUFLLHVCQUF1QixpQkFBaUIsbUJBQW1CLEdBQUcsd0JBQXdCLGdCQUFnQixHQUFHLDRCQUE0QixpQkFBaUIsR0FBRyxpQkFBaUIsMkRBQTJELGlCQUFpQiwwQkFBMEIsaUJBQWlCLHFEQUFxRCxzQkFBc0IsR0FBRyw0QkFBNEIsaUJBQWlCLEdBQUcsdUJBQXVCLGVBQWUsR0FBRyx1Q0FBdUMseUJBQXlCLEdBQUcsaUNBQWlDLHVCQUF1QixHQUFHLHFCQUFxQixzQkFBc0Isa0JBQWtCLDJCQUEyQixhQUFhLEdBQUcsZ0NBQWdDLGtCQUFrQiwyQkFBMkIsR0FBRyw4QkFBOEIsa0JBQWtCLHdCQUF3QixHQUFHLDhDQUE4QyxrQkFBa0IsMkJBQTJCLEdBQUcsZ0RBQWdELGtCQUFrQix3QkFBd0IsR0FBRyxxQkFBcUIsMkJBQTJCLHdDQUF3Qyx1QkFBdUIsd0JBQXdCLEdBQUcscUJBQXFCLHdCQUF3QixzQ0FBc0MsNEJBQTRCLEdBQUcsMkJBQTJCLG9CQUFvQixHQUFHLHFCQUFxQix1QkFBdUIsc0NBQXNDLEdBQUcsWUFBWSxrQkFBa0IsMkJBQTJCLDRCQUE0Qix3QkFBd0IsR0FBRyx5QkFBeUIsZ0JBQWdCLGtCQUFrQixHQUFHLDRCQUE0Qix5QkFBeUIsR0FBRyxvQkFBb0IseUNBQXlDLGtCQUFrQiwyQkFBMkIsdUJBQXVCLFdBQVcsWUFBWSxhQUFhLGNBQWMsdUJBQXVCLGtCQUFrQixHQUFHLDBCQUEwQixrQkFBa0IsdUJBQXVCLHdCQUF3Qix3QkFBd0IsNEJBQTRCLEdBQUcscUNBQXFDLGtCQUFrQiw0QkFBNEIsR0FBRyxpREFBaUQsa0JBQWtCLDJCQUEyQix3QkFBd0IsR0FBRywyQkFBMkIsd0JBQXdCLG9CQUFvQixHQUFHLFdBQVcsa0JBQWtCLCtCQUErQixlQUFlLDRCQUE0QixpQkFBaUIsR0FBRyxrQkFBa0IsZ0JBQWdCLGlCQUFpQix1QkFBdUIsR0FBRyxxQkFBcUI7QUFDOTJSO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNmYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JnRDtBQUNKO0FBQ1U7QUFDaEI7O0FBRXRDO0FBQ0E7QUFDQSx1QkFBdUIsbUVBQWdCO0FBQ3ZDO0FBQ0Esb0JBQW9CLDZEQUFhOztBQUVqQztBQUNBOztBQUVBLElBQUkscUVBQThCOztBQUVsQyx1QkFBdUIsbUVBQWdCO0FBQ3ZDO0FBQ0Esb0JBQW9CLDZEQUFhO0FBQ2pDOztBQUVBO0FBQ0E7QUFDQTs7QUFFb0I7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QndCOztBQUU1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QixZQUFZO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0IsWUFBWTtBQUNwQyw0QkFBNEIsWUFBWTtBQUN4QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHlEQUFXO0FBQ2hDLHdCQUF3QixnQkFBZ0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQ0FBa0MsZ0JBQWdCLElBQUksT0FBTztBQUM3RDtBQUNBO0FBQ0EsNEJBQTRCLGdCQUFnQjtBQUM1QztBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxrQ0FBa0MsZ0JBQWdCLElBQUksT0FBTztBQUM3RDtBQUNBO0FBQ0EsNEJBQTRCLGdCQUFnQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxFQUFFLEdBQUcsRUFBRTtBQUMvQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTRCOzs7Ozs7Ozs7Ozs7Ozs7QUMvSTVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFeUI7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QjZCOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDRDQUE0QyxZQUFZO0FBQ3hEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsbUVBQWdCO0FBQy9DO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsNkJBQTZCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxvREFBb0QsTUFBTTtBQUMxRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHlCQUF5QixtQ0FBbUM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUEsaUNBQWlDLG1DQUFtQztBQUNwRTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixvQkFBb0I7QUFDNUM7QUFDQTtBQUNBLDRCQUE0QixrQkFBa0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLHNCQUFzQjtBQUM1RDtBQUNBO0FBQ0EsZ0RBQWdELHlDQUF5QztBQUN6RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLHNCQUFzQjtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFDQUFxQyxLQUFLO0FBQzFDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQywyQkFBMkI7O0FBRS9ELG9CQUFvQixpQkFBaUI7QUFDckM7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELEtBQUs7QUFDekQsZ0NBQWdDLFVBQVU7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsNEJBQTRCO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isb0JBQW9CO0FBQzVDO0FBQ0E7QUFDQSw0QkFBNEIsa0JBQWtCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVtQjs7Ozs7Ozs7Ozs7Ozs7O0FDcFRwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRXVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1J2QixNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7OztVQzFCN0U7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDb0I7O0FBRXpDOztBQUVBLHNEQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL2dhbWVMb29wLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmRGYWN0b3J5LmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXJGYWN0b3J5LmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9yZW5kZXJlci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvc2hpcEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbn1cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn1cXG5cXG4uaGVsbG8ge1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5nYW1lYm9hcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4uY29sdW1uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLnlvdXItc2lkZSxcXG4uZW5lbXktc2lkZSB7XFxuICBtYXJnaW46MnJlbTtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxufVxcblxcbi5jZWxsIHtcXG4gIHdpZHRoOiAzcmVtO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgLS1yZ2I6IDI1MCwgMjE1LCAxNzA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2VsbC5zaGlwIHtcXG4gIC0tcmdiOiAyNywgMTMzLCAxMzc7XFxuICAvKmJhY2tncm91bmQtY29sb3I6IHJnYih2YXIoLS1yZ2IpKTsqL1xcbn1cXG5cXG4uY2VsbC5zaGlwLmhpdCB7XFxuICAtLXJnYjogOTUsIDExMCwgMTYwO1xcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiByZ2IodmFyKC0tcmdiKSk7Ki9cXG59XFxuXFxuLmNlbGwuaGl0IHtcXG4gIC0tcmdiOiAyMjksIDExMiwgMTEyO1xcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiByZ2IodmFyKC0tcmdiKSk7Ki9cXG4gIFxcbn1cXG5cXG4uY2VsbC5zaGlwLmhpdC5zdW5rIHtcXG4gIC0tcmdiOiAxMTAsIDk0LCA5NDtcXG4gIC8qYmFja2dyb3VuZC1jb2xvcjogcmdiKHZhcigtLXJnYikpOyovXFxufVxcblxcbi5jZWxsLmhpdDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICfigKInO1xcbiAgZm9udC1zaXplOiAyZW07XFxufVxcblxcbi5jZWxsLnNoaXA6OmJlZm9yZSB7XFxuICBjb250ZW50OiAnJztcXG59XFxuXFxuLmNlbGwuc2hpcC5oaXQ6OmJlZm9yZSB7XFxuICBjb250ZW50OiAnWCc7XFxufVxcblxcbmJ1dHRvbi5jZWxsIHtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMnB4IDFweCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMDY4KTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIC0tYWxwaGE6IDAuODtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tcmdiKSwgdmFyKC0tYWxwaGEpKTtcXG4gIGN1cnNvcjogY3Jvc3NoYWlyO1xcbn1cXG5cXG4uZ2FtZWJvYXJkLXNlbGYgYnV0dG9uIHtcXG4gIGN1cnNvcjogYXV0bztcXG59XFxuXFxuYnV0dG9uLmNlbGw6aG92ZXIge1xcbiAgLS1hbHBoYTogMTtcXG59XFxuXFxuYnV0dG9uLmNlbGwuZW1wdHk6bm90KC5oaXQpOmhvdmVyIHtcXG4gIC0tcmdiOiAyMTYsIDE4NSwgMTQ1O1xcbn1cXG5cXG5idXR0b24uY2VsbC5lbXB0eS5oaXQ6aG92ZXIge1xcbiAgLS1yZ2I6IDE5OSwgOTUsIDk1O1xcbn1cXG5cXG4uc2hpcHMtdG8tcGxhY2Uge1xcbiAgbWFyZ2luOiAxcmVtIDByZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMnB4O1xcbn1cXG5cXG4uc2hpcHMtdG8tcGxhY2UuaG9yaXpvbnRhbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnNoaXBzLXRvLXBsYWNlLnZlcnRpY2FsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4uc2hpcHMtdG8tcGxhY2UudmVydGljYWwgLnNoaXAtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uc2hpcHMtdG8tcGxhY2UuaG9yaXpvbnRhbCAuc2hpcC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi5zaGlwLWNvbnRhaW5lciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyOiAwLjNyZW0gc29saWQgcmdiKDEyOCwgMCwgMCk7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4uYXZhaWxhYmxlLmNlbGwge1xcbiAgLS1yZ2I6IDI3LCAxMzMsIDEzNztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYih2YXIoLS1yZ2IpKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4uYXZhaWxhYmxlLmNlbGw6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2VsZWN0ZWQgLmNlbGwge1xcbiAgLS1yZ2I6IDUzLCA1OCwgMjAzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKHZhcigtLXJnYikpO1xcbn1cXG5cXG4uZmxlZXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5idXR0b24tb3JpZW50YXRpb24ge1xcbiAgd2lkdGg6IDZyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4uZ2FtZWJvYXJkLWVuZW15IC5zaGlwIHtcXG4gIC0tcmdiOiAyNTAsIDIxNSwgMTcwO1xcbn1cXG5cXG4ucG9wLVVwLVNjcmVlbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU0LCAxNjksIDE4NCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDJyZW07XFxufVxcblxcbi5wb3AtVXAtU2NyZWVuIC5tYWluIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBtYXJnaW4tbGVmdDogMjByZW07XFxuICBtYXJnaW4tcmlnaHQ6IDIwcmVtO1xcbiAgZ3JpZDogMWZyIC8gMWZyIDFmcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ucG9wLVVwLVNjcmVlbiAubWFpbiAuZ2FtZWJvYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnBvcC1VcC1TY3JlZW4gLm1haW4gLnBvcC1VcC1BdmFpbGFibGVTaGlwcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wb3AtVXAtU2NyZWVuIC50aXRsZSB7XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4uYnRucyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZDogNHJlbS8gNHJlbSA0cmVtIDRyZW07XFxuICBnYXA6IDEwcmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW46IDJyZW07XFxufVxcblxcbi5idG5zIGJ1dHRvbiB7XFxuICB3aWR0aDogNXJlbTtcXG4gIGhlaWdodDogNXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtFQUN0Qiw4REFBOEQ7QUFDaEU7QUFDQTs7O0VBR0UsbUJBQW1CO0FBQ3JCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIscUNBQXFDOztBQUV2Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHNEQUFzRDtFQUN0RCxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixnREFBZ0Q7RUFDaEQsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixtQ0FBbUM7RUFDbkMsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixpQ0FBaUM7RUFDakMsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixVQUFVO0VBQ1YsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbn1cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn1cXG5cXG4uaGVsbG8ge1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5nYW1lYm9hcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4uY29sdW1uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLnlvdXItc2lkZSxcXG4uZW5lbXktc2lkZSB7XFxuICBtYXJnaW46MnJlbTtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxufVxcblxcbi5jZWxsIHtcXG4gIHdpZHRoOiAzcmVtO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgLS1yZ2I6IDI1MCwgMjE1LCAxNzA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2VsbC5zaGlwIHtcXG4gIC0tcmdiOiAyNywgMTMzLCAxMzc7XFxuICAvKmJhY2tncm91bmQtY29sb3I6IHJnYih2YXIoLS1yZ2IpKTsqL1xcbn1cXG5cXG4uY2VsbC5zaGlwLmhpdCB7XFxuICAtLXJnYjogOTUsIDExMCwgMTYwO1xcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiByZ2IodmFyKC0tcmdiKSk7Ki9cXG59XFxuXFxuLmNlbGwuaGl0IHtcXG4gIC0tcmdiOiAyMjksIDExMiwgMTEyO1xcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiByZ2IodmFyKC0tcmdiKSk7Ki9cXG4gIFxcbn1cXG5cXG4uY2VsbC5zaGlwLmhpdC5zdW5rIHtcXG4gIC0tcmdiOiAxMTAsIDk0LCA5NDtcXG4gIC8qYmFja2dyb3VuZC1jb2xvcjogcmdiKHZhcigtLXJnYikpOyovXFxufVxcblxcbi5jZWxsLmhpdDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICfigKInO1xcbiAgZm9udC1zaXplOiAyZW07XFxufVxcblxcbi5jZWxsLnNoaXA6OmJlZm9yZSB7XFxuICBjb250ZW50OiAnJztcXG59XFxuXFxuLmNlbGwuc2hpcC5oaXQ6OmJlZm9yZSB7XFxuICBjb250ZW50OiAnWCc7XFxufVxcblxcbmJ1dHRvbi5jZWxsIHtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMnB4IDFweCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMDY4KTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIC0tYWxwaGE6IDAuODtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tcmdiKSwgdmFyKC0tYWxwaGEpKTtcXG4gIGN1cnNvcjogY3Jvc3NoYWlyO1xcbn1cXG5cXG4uZ2FtZWJvYXJkLXNlbGYgYnV0dG9uIHtcXG4gIGN1cnNvcjogYXV0bztcXG59XFxuXFxuYnV0dG9uLmNlbGw6aG92ZXIge1xcbiAgLS1hbHBoYTogMTtcXG59XFxuXFxuYnV0dG9uLmNlbGwuZW1wdHk6bm90KC5oaXQpOmhvdmVyIHtcXG4gIC0tcmdiOiAyMTYsIDE4NSwgMTQ1O1xcbn1cXG5cXG5idXR0b24uY2VsbC5lbXB0eS5oaXQ6aG92ZXIge1xcbiAgLS1yZ2I6IDE5OSwgOTUsIDk1O1xcbn1cXG5cXG4uc2hpcHMtdG8tcGxhY2Uge1xcbiAgbWFyZ2luOiAxcmVtIDByZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMnB4O1xcbn1cXG5cXG4uc2hpcHMtdG8tcGxhY2UuaG9yaXpvbnRhbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnNoaXBzLXRvLXBsYWNlLnZlcnRpY2FsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4uc2hpcHMtdG8tcGxhY2UudmVydGljYWwgLnNoaXAtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uc2hpcHMtdG8tcGxhY2UuaG9yaXpvbnRhbCAuc2hpcC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi5zaGlwLWNvbnRhaW5lciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyOiAwLjNyZW0gc29saWQgcmdiKDEyOCwgMCwgMCk7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4uYXZhaWxhYmxlLmNlbGwge1xcbiAgLS1yZ2I6IDI3LCAxMzMsIDEzNztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYih2YXIoLS1yZ2IpKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4uYXZhaWxhYmxlLmNlbGw6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2VsZWN0ZWQgLmNlbGwge1xcbiAgLS1yZ2I6IDUzLCA1OCwgMjAzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKHZhcigtLXJnYikpO1xcbn1cXG5cXG4uZmxlZXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5idXR0b24tb3JpZW50YXRpb24ge1xcbiAgd2lkdGg6IDZyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4uZ2FtZWJvYXJkLWVuZW15IC5zaGlwIHtcXG4gIC0tcmdiOiAyNTAsIDIxNSwgMTcwO1xcbn1cXG5cXG4ucG9wLVVwLVNjcmVlbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU0LCAxNjksIDE4NCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDJyZW07XFxufVxcblxcbi5wb3AtVXAtU2NyZWVuIC5tYWluIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBtYXJnaW4tbGVmdDogMjByZW07XFxuICBtYXJnaW4tcmlnaHQ6IDIwcmVtO1xcbiAgZ3JpZDogMWZyIC8gMWZyIDFmcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ucG9wLVVwLVNjcmVlbiAubWFpbiAuZ2FtZWJvYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnBvcC1VcC1TY3JlZW4gLm1haW4gLnBvcC1VcC1BdmFpbGFibGVTaGlwcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wb3AtVXAtU2NyZWVuIC50aXRsZSB7XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4uYnRucyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZDogNHJlbS8gNHJlbSA0cmVtIDRyZW07XFxuICBnYXA6IDEwcmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW46IDJyZW07XFxufVxcblxcbi5idG5zIGJ1dHRvbiB7XFxuICB3aWR0aDogNXJlbTtcXG4gIGhlaWdodDogNXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHBsYXllckZhY3RvcnkgfSBmcm9tICcuL3BsYXllckZhY3RvcnknO1xuaW1wb3J0IHsgc2hpcEZhY3RvcnkgfSBmcm9tICcuL3NoaXBGYWN0b3J5JztcbmltcG9ydCB7IGdhbWVib2FyZEZhY3RvcnkgfSBmcm9tICcuL2dhbWVib2FyZEZhY3RvcnknO1xuaW1wb3J0IHsgcmVuZGVyZXIgfSBmcm9tICcuL3JlbmRlcmVyJztcblxuZnVuY3Rpb24gZ2FtZWxvb3AoZ2FtZWJvYXJkTGVuZ3RoKSB7XG4gICAgLy8gRHVtbXkgZGF0YVxuICAgIGNvbnN0IGdhbWVib2FyZDEgPSBnYW1lYm9hcmRGYWN0b3J5KGdhbWVib2FyZExlbmd0aCk7XG4gICAgbGV0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lYm9hcmQtc2VsZicpO1xuICAgIGNvbnN0IHBsYXllcjEgPSBwbGF5ZXJGYWN0b3J5KCdIaWt5bicsIGdhbWVib2FyZDEsIHRhcmdldCk7XG5cbiAgICAvLyByZW5kZXJlci5yZW5kZXJHYW1lYm9hcmQocGxheWVyMSk7XG4gICAgLy8gcmVuZGVyZXIucmVuZGVyQXZhaWxhYmxlU2hpcHMocGxheWVyMSk7XG5cbiAgICByZW5kZXJlci5yZW5kZXJQbGFjZW1lbnRTY3JlZW4ocGxheWVyMSk7XG5cbiAgICBjb25zdCBnYW1lYm9hcmQyID0gZ2FtZWJvYXJkRmFjdG9yeShnYW1lYm9hcmRMZW5ndGgpO1xuICAgIHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lYm9hcmQtZW5lbXknKTtcbiAgICBjb25zdCBwbGF5ZXIyID0gcGxheWVyRmFjdG9yeSgnQ29tcHV0ZXInLCBnYW1lYm9hcmQyLCB0YXJnZXQsIHRydWUpO1xuICAgIHBsYXllcjIuZ2FtZWJvYXJkLnJhbmRvbWx5UGxhY2VBbGxTaGlwcygpO1xuXG4gICAgLy8gcmVuZGVyZXIucmVuZGVyR2FtZWJvYXJkKHBsYXllcjIpO1xuICAgIC8vIHJlbmRlcmVyLmxpc3RlbkZvckF0dGFja3MocGxheWVyMiwgcGxheWVyMSk7XG59XG5cbmV4cG9ydCB7IGdhbWVsb29wIH07XG4iLCJpbXBvcnQgeyBzaGlwRmFjdG9yeSB9IGZyb20gJy4vc2hpcEZhY3RvcnknO1xuXG5jb25zdCBnYW1lYm9hcmRGYWN0b3J5ID0gKGxlbmd0aCwgYXZhaWxhYmxlU2hpcHMgPSBbNSwgNCwgMywgMl0pID0+IHtcbiAgICBjb25zdCBjZWxscyA9IG5ldyBBcnJheShsZW5ndGgpO1xuICAgIGNvbnN0IG1pc3NlZFNob3RzID0gW107XG4gICAgY29uc3QgYWNjdXJhdGVTaG90cyA9IFtdO1xuICAgIGNvbnN0IGluaXRpYWxTaGlwcyA9IFsuLi5hdmFpbGFibGVTaGlwc107XG4gICAgbGV0IHRvdGFsU2hpcHNMZW5ndGggPSAwO1xuXG4gICAgLy8gQ3JlYXRlIGRvdWJsZSBhcnJheVxuICAgIGNvbnN0IGluaXRpYWxpemVDZWxscyA9ICgpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgY2VsbHNbaV0gPSBuZXcgQXJyYXkobGVuZ3RoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFBvcHVsYXRlIGRvdWJsZSBhcnJheSB3aXRoIDBcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBsZW5ndGg7IGogKz0gMSkge1xuICAgICAgICAgICAgICAgIGNlbGxzW2ldW2pdID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBpbml0aWFsaXplQ2VsbHMoKTtcblxuICAgIGNvbnN0IHBsYWNlU2hpcCA9ICh4LCB5LCBzaGlwTGVuZ3RoLCBvcmllbnRhdGlvbikgPT4ge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgeCA9IE51bWJlcih4KTtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgIHkgPSBOdW1iZXIoeSk7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICBzaGlwTGVuZ3RoID0gTnVtYmVyKHNoaXBMZW5ndGgpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCFhdmFpbGFibGVTaGlwcy5pbmNsdWRlcyhzaGlwTGVuZ3RoKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGVyZSBhcmUgbm8gYXZhaWxhYmxlIHNoaXBzIHdpdGggdGhhdCBsZW5ndGgnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzaGlwID0gc2hpcEZhY3Rvcnkoc2hpcExlbmd0aCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2VsbHNbeF1beSArIGldICE9PSB1bmRlZmluZWQgJiYgY2VsbHNbeF1beSArIGldICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignU2hpcHMgYXJlIG92ZXJsYXBwaW5nJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChjZWxsc1t4ICsgaV0gIT09IHVuZGVmaW5lZCAmJiBjZWxsc1t4ICsgaV1beV0gIT09IDApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NoaXBzIGFyZSBvdmVybGFwcGluZycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgICBpZiAoK3kgKyBzaGlwTGVuZ3RoID4gbGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYCR7eSArIHNoaXBMZW5ndGh9ID4gJHtsZW5ndGh9YCk7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdPdXQgb2YgYm91bmRzOiB2ZXJ0aWNhbCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBjZWxsc1t4XVt5ICsgaV0gPSBzaGlwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdG90YWxTaGlwc0xlbmd0aCArPSBzaGlwTGVuZ3RoO1xuICAgICAgICB9IGVsc2UgaWYgKG9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgIGlmICgreCArIHNoaXBMZW5ndGggPiBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgJHt4ICsgc2hpcExlbmd0aH0gPiAke2xlbmd0aH1gKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ091dCBvZiBib3VuZHM6IGhvcml6b250YWwnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgY2VsbHNbeCArIGldW3ldID0gc2hpcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRvdGFsU2hpcHNMZW5ndGggKz0gc2hpcExlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhgU2hpcCBjcmVhdGVkIGF0OiAke3h9fCR7eX1gKTtcbiAgICAgICAgcmVtb3ZlQXZhaWxhYmxlU2hpcChhdmFpbGFibGVTaGlwcy5pbmRleE9mKHNoaXBMZW5ndGgpKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaXNDZWxsSGl0ID0gKHgsIHkpID0+IHtcbiAgICAgICAgY29uc3QgaGl0ID0gW3gsIHldO1xuICAgICAgICBjb25zdCBtaXNzZWRTaG90c0pzb24gPSBKU09OLnN0cmluZ2lmeShtaXNzZWRTaG90cyk7XG4gICAgICAgIGNvbnN0IGFjY3VyYXRlU2hvdHNKc29uID0gSlNPTi5zdHJpbmdpZnkoYWNjdXJhdGVTaG90cyk7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgbWlzc2VkU2hvdHNKc29uLmluY2x1ZGVzKGhpdCkgPT09IHRydWUgfHxcbiAgICAgICAgICAgIGFjY3VyYXRlU2hvdHNKc29uLmluY2x1ZGVzKGhpdCkgPT09IHRydWVcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoeCwgeSkgPT4ge1xuICAgICAgICBpZiAoaXNDZWxsSGl0KHgsIHkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhbnQgaGl0IHNhbWUgY2VsbCB0d2ljZScpO1xuICAgICAgICB9IGVsc2UgaWYgKGNlbGxzW3hdW3ldID09PSAwKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnTWlzc2VkIHNob3QhJyk7XG4gICAgICAgICAgICBtaXNzZWRTaG90cy5wdXNoKFt4LCB5XSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnQWNjdXJhdGUgc2hvdCEnKTtcbiAgICAgICAgICAgIGNlbGxzW3hdW3ldLmhpdCgpO1xuICAgICAgICAgICAgYWNjdXJhdGVTaG90cy5wdXNoKFt4LCB5XSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlzQWxsU3VuaygpO1xuICAgIH07XG5cbiAgICBjb25zdCBpc0FsbFN1bmsgPSAoKSA9PiBhY2N1cmF0ZVNob3RzLmxlbmd0aCA+PSB0b3RhbFNoaXBzTGVuZ3RoO1xuXG4gICAgY29uc3QgcmVtb3ZlQXZhaWxhYmxlU2hpcCA9IChpbmRleCkgPT4ge1xuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICBhdmFpbGFibGVTaGlwcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYXZhaWxhYmxlU2hpcHMpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHJhbmRvbWx5UGxhY2VBbGxTaGlwcyA9ICgpID0+IHtcbiAgICAgICAgd2hpbGUgKGF2YWlsYWJsZVNoaXBzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHJhbmRvbVggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBsZW5ndGgpO1xuICAgICAgICAgICAgY29uc3QgcmFuZG9tWSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGxlbmd0aCk7XG4gICAgICAgICAgICBjb25zdCByYW5kb21PcmllbnRhdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xuICAgICAgICAgICAgbGV0IG9yaWVudGF0aW9uO1xuICAgICAgICAgICAgaWYgKHJhbmRvbU9yaWVudGF0aW9uID09PSAwKSB7XG4gICAgICAgICAgICAgICAgb3JpZW50YXRpb24gPSAnaG9yaXpvbnRhbCc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJhbmRvbU9yaWVudGF0aW9uID09PSAxKSB7XG4gICAgICAgICAgICAgICAgb3JpZW50YXRpb24gPSAndmVydGljYWwnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHBsYWNlU2hpcChyYW5kb21YLCByYW5kb21ZLCBhdmFpbGFibGVTaGlwc1swXSwgb3JpZW50YXRpb24pO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGF2YWlsYWJsZVNoaXBzKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgcmFuZG9tbHlQbGFjZUFsbFNoaXBzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY2VsbHMsXG4gICAgICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgICAgIGlzQWxsU3VuayxcbiAgICAgICAgcGxhY2VTaGlwLFxuICAgICAgICBsZW5ndGgsXG4gICAgICAgIG1pc3NlZFNob3RzLFxuICAgICAgICBhY2N1cmF0ZVNob3RzLFxuICAgICAgICBhdmFpbGFibGVTaGlwcyxcbiAgICAgICAgaXNDZWxsSGl0LFxuICAgICAgICByZW1vdmVBdmFpbGFibGVTaGlwLFxuICAgICAgICByYW5kb21seVBsYWNlQWxsU2hpcHNcbiAgICB9O1xufTtcblxuZXhwb3J0IHsgZ2FtZWJvYXJkRmFjdG9yeSB9O1xuIiwiY29uc3QgcGxheWVyRmFjdG9yeSA9IChuYW1lLCBnYW1lYm9hcmQsIGdhbWVib2FyZEVsZW1lbnQsIGlzQWkgPSBmYWxzZSkgPT4ge1xuICAgIGxldCBzZWxlY3RlZEVsZW1lbnQ7XG4gICAgbGV0IHNlbGVjdGVkT3JpZW50YXRpb24gPSAnaG9yaXpvbnRhbCc7XG5cbiAgICBjb25zdCBtYWtlTW92ZSA9IChlbmVteVBsYXllcikgPT4ge1xuICAgICAgICBjb25zdCByYW5kb21YID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZ2FtZWJvYXJkLmxlbmd0aCk7XG4gICAgICAgIGNvbnN0IHJhbmRvbVkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBnYW1lYm9hcmQubGVuZ3RoKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGVuZW15UGxheWVyLmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHJhbmRvbVgsIHJhbmRvbVkpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgbWFrZU1vdmUoZW5lbXlQbGF5ZXIpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGlzQWxsU2hpcHNQbGFjZWQgPSAoKSA9PiBnYW1lYm9hcmQuYXZhaWxhYmxlU2hpcHMubGVuZ3RoIDw9IDA7XG5cbiAgICBjb25zdCBpc0xvc3QgPSAoKSA9PiBnYW1lYm9hcmQuaXNBbGxTdW5rKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgZ2FtZWJvYXJkLFxuICAgICAgICBpc0FpLFxuICAgICAgICBtYWtlTW92ZSxcbiAgICAgICAgaXNMb3N0LFxuICAgICAgICBnYW1lYm9hcmRFbGVtZW50LFxuICAgICAgICBzZWxlY3RlZEVsZW1lbnQsXG4gICAgICAgIHNlbGVjdGVkT3JpZW50YXRpb24sXG4gICAgICAgIGlzQWxsU2hpcHNQbGFjZWRcbiAgICB9O1xufTtcblxuZXhwb3J0IHsgcGxheWVyRmFjdG9yeSB9O1xuIiwiaW1wb3J0IHsgZ2FtZWJvYXJkRmFjdG9yeSB9IGZyb20gJy4vZ2FtZWJvYXJkRmFjdG9yeSc7XG5cbmNvbnN0IHJlbmRlcmVyID0gKCgpID0+IHtcbiAgICBjb25zdCByZW5kZXJQbGFjZW1lbnRTY3JlZW4gPSAoXG4gICAgICAgIHBsYXllcixcbiAgICAgICAgdGFyZ2V0UGFyZW50ID0gcGxheWVyLmdhbWVib2FyZEVsZW1lbnRcbiAgICApID0+IHtcbiAgICAgICAgdGFyZ2V0UGFyZW50LnRleHRDb250ZW50ID0gJyc7XG5cbiAgICAgICAgY29uc3QgcG9wVXBTY3JlZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcG9wVXBTY3JlZW4uY2xhc3NMaXN0LmFkZCgncG9wLVVwLVNjcmVlbicpO1xuXG4gICAgICAgIGNvbnN0IHBvcFVwVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcG9wVXBUaXRsZS50ZXh0Q29udGVudCA9IGBBZG1pcmFsICR7cGxheWVyLm5hbWV9LCBwbGFjZSB5b3VyIHNoaXBzIWA7XG4gICAgICAgIHBvcFVwVGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcblxuICAgICAgICBjb25zdCBwb3BVcE1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcG9wVXBNYWluLmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcblxuICAgICAgICBjb25zdCBwb3BVcEdhbWVib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwb3BVcEdhbWVib2FyZC5jbGFzc0xpc3QuYWRkKCdnYW1lYm9hcmQnKTtcblxuICAgICAgICBjb25zdCBwb3BVcEF2YWlsYWJsZVNoaXBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHBvcFVwQXZhaWxhYmxlU2hpcHMuY2xhc3NMaXN0LmFkZCgncG9wLVVwLUF2YWlsYWJsZVNoaXBzJyk7XG5cbiAgICAgICAgY29uc3QgcmFuZG9tQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHJhbmRvbUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidG4tcmV0cnknKTtcbiAgICAgICAgcmFuZG9tQnV0dG9uLnRleHRDb250ZW50ID0gJ1JhbmRvbSc7XG5cbiAgICAgICAgY29uc3QgZmluaXNoQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGZpbmlzaEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidG4tZmluaXNoJyk7XG4gICAgICAgIGZpbmlzaEJ1dHRvbi50ZXh0Q29udGVudCA9ICdGaW5pc2gnO1xuXG4gICAgICAgIGNvbnN0IHJlc2V0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHJlc2V0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J0bi1yZXNldCcpO1xuICAgICAgICByZXNldEJ1dHRvbi50ZXh0Q29udGVudCA9ICdSZXNldCc7XG4gICAgICAgIHJlc2V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgcGxheWVyLmdhbWVib2FyZCA9IGdhbWVib2FyZEZhY3RvcnkocGxheWVyLmdhbWVib2FyZC5sZW5ndGgpO1xuICAgICAgICAgICAgcmVuZGVyUGxhY2VtZW50U2NyZWVuKHBsYXllciwgdGFyZ2V0UGFyZW50KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBidXR0b25zLmNsYXNzTGlzdC5hZGQoJ2J0bnMnKTtcblxuICAgICAgICBidXR0b25zLmFwcGVuZENoaWxkKHJhbmRvbUJ1dHRvbik7XG4gICAgICAgIGJ1dHRvbnMuYXBwZW5kQ2hpbGQoZmluaXNoQnV0dG9uKTtcbiAgICAgICAgYnV0dG9ucy5hcHBlbmRDaGlsZChyZXNldEJ1dHRvbik7XG5cbiAgICAgICAgcG9wVXBNYWluLmFwcGVuZENoaWxkKHBvcFVwR2FtZWJvYXJkKTtcbiAgICAgICAgcG9wVXBNYWluLmFwcGVuZENoaWxkKHBvcFVwQXZhaWxhYmxlU2hpcHMpO1xuXG4gICAgICAgIHBvcFVwU2NyZWVuLmFwcGVuZENoaWxkKHBvcFVwVGl0bGUpO1xuICAgICAgICBwb3BVcFNjcmVlbi5hcHBlbmRDaGlsZChwb3BVcE1haW4pO1xuICAgICAgICBwb3BVcFNjcmVlbi5hcHBlbmRDaGlsZChidXR0b25zKTtcblxuICAgICAgICB0YXJnZXRQYXJlbnQuYXBwZW5kQ2hpbGQocG9wVXBTY3JlZW4pO1xuXG4gICAgICAgIHJlbmRlckdhbWVib2FyZChwbGF5ZXIsIHBvcFVwR2FtZWJvYXJkKTtcbiAgICAgICAgcmVuZGVyQXZhaWxhYmxlU2hpcHMoXG4gICAgICAgICAgICBwbGF5ZXIsXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wLVVwLUF2YWlsYWJsZVNoaXBzJylcbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVuZGVyR2FtZWJvYXJkID0gKFxuICAgICAgICBwbGF5ZXIsXG4gICAgICAgIHRhcmdldFBhcmVudCA9IHBsYXllci5nYW1lYm9hcmRFbGVtZW50XG4gICAgKSA9PiB7XG4gICAgICAgIGNvbnN0IGNyZWF0ZUNvb3JkaW5hdGVDb2x1bW4gPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdDb2x1bW5FbGVtZW50ID0gY3JlYXRlQ29sdW1uKCk7XG4gICAgICAgICAgICBsZXQgbmV3Q2VsbEVsZW1lbnQ7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gLTE7IGkgPCBwbGF5ZXIuZ2FtZWJvYXJkLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKGkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld0NlbGxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIG5ld0NlbGxFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ2NlbGwnKTtcbiAgICAgICAgICAgICAgICAgICAgbmV3Q2VsbEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnbnVsbCcpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld0NlbGxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIG5ld0NlbGxFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ2NlbGwnKTtcbiAgICAgICAgICAgICAgICAgICAgbmV3Q2VsbEVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHtpICsgMX1gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBuZXdDb2x1bW5FbGVtZW50LmFwcGVuZENoaWxkKG5ld0NlbGxFbGVtZW50KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG5ld0NvbHVtbkVsZW1lbnQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgY3JlYXRlQ29sdW1uID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3Q29sdW1uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbmV3Q29sdW1uRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdjb2x1bW4nKTtcblxuICAgICAgICAgICAgcmV0dXJuIG5ld0NvbHVtbkVsZW1lbnQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgY3JlYXRlQWxwaGFiZXRDZWxsID0gKGxldHRlcikgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2hhcmNvZGUgPSA2NSArIE51bWJlcihsZXR0ZXIpO1xuICAgICAgICAgICAgY29uc3QgY2hhciA9IFN0cmluZy5mcm9tQ2hhckNvZGUoY2hhcmNvZGUpO1xuICAgICAgICAgICAgY29uc3QgbmV3Q2VsbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIG5ld0NlbGxFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ2NlbGwnKTtcbiAgICAgICAgICAgIG5ld0NlbGxFbGVtZW50LnRleHRDb250ZW50ID0gY2hhcjtcblxuICAgICAgICAgICAgcmV0dXJuIG5ld0NlbGxFbGVtZW50O1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGNyZWF0ZUdhbWVib2FyZENlbGwgPSAoeCwgeSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2VsbCA9IHBsYXllci5nYW1lYm9hcmQuY2VsbHNbeF1beV07XG5cbiAgICAgICAgICAgIGNvbnN0IG5ld0NlbGxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBuZXdDZWxsRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdjZWxsJyk7XG5cbiAgICAgICAgICAgIGlmIChwbGF5ZXIuZ2FtZWJvYXJkLmlzQ2VsbEhpdCh4LCB5KSkge1xuICAgICAgICAgICAgICAgIG5ld0NlbGxFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ2hpdCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY2VsbCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIC8vIG5ld0NlbGxFbGVtZW50LnRleHRDb250ZW50ID0gMDtcbiAgICAgICAgICAgICAgICBuZXdDZWxsRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdlbXB0eScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBuZXdDZWxsRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdzaGlwJyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoY2VsbC5pc1N1bmsoKSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdDZWxsRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdzdW5rJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbmV3Q2VsbEVsZW1lbnQ7XG4gICAgICAgIH07XG4gICAgICAgIC8vIFJlbmRlcnMgZ2FtZWJvYXJkIGFuZCBhcHBlbmRzIHRvIHRhcmdldCBlbGVtZW50XG4gICAgICAgIHRhcmdldFBhcmVudC50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgICAgIGxldCBjb2x1bW5FbGVtZW50O1xuICAgICAgICBsZXQgY2VsbEVsZW1lbnQ7XG5cbiAgICAgICAgZm9yIChsZXQgeCA9IC0xOyB4IDwgcGxheWVyLmdhbWVib2FyZC5jZWxscy5sZW5ndGg7IHggKz0gMSkge1xuICAgICAgICAgICAgLy8gSWYgaXQgaXMgYSBmaXJzdCBjb2x1bW4sIHdlIGNyZWF0ZSBjb29yZGluYXRlIGNvbHVtblxuICAgICAgICAgICAgaWYgKHggPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgY29sdW1uRWxlbWVudCA9IGNyZWF0ZUNvb3JkaW5hdGVDb2x1bW4oKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gRWxzZSB3ZSBjcmVhdGUgdXN1YWwgY29sdW1uIGFuZCBwb3B1bGF0ZSBpdFxuICAgICAgICAgICAgICAgIGNvbHVtbkVsZW1lbnQgPSBjcmVhdGVDb2x1bW4oKTtcblxuICAgICAgICAgICAgICAgIGZvciAobGV0IHkgPSAtMTsgeSA8IHBsYXllci5nYW1lYm9hcmQuY2VsbHMubGVuZ3RoOyB5ICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gRmlyc3Qgcm93IHdpbGwgZ2V0IGEgbGV0dGVyXG4gICAgICAgICAgICAgICAgICAgIGlmICh5ID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbEVsZW1lbnQgPSBjcmVhdGVBbHBoYWJldENlbGwoeCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsRWxlbWVudCA9IGNyZWF0ZUdhbWVib2FyZENlbGwoeCwgeSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29sdW1uRWxlbWVudC5hcHBlbmRDaGlsZChjZWxsRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGFyZ2V0UGFyZW50LmFwcGVuZENoaWxkKGNvbHVtbkVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGxpc3RlbkZvclNoaXBQbGFjZW1lbnQocGxheWVyLCB0YXJnZXRQYXJlbnQpO1xuICAgIH07XG5cbiAgICBjb25zdCBsaXN0ZW5Gb3JBdHRhY2tzID0gKGRlZmVuZGluZ1BsYXllciwgYXR0YWNraW5nUGxheWVyKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGRlZmVuZGluZ1BsYXllci5nYW1lYm9hcmRFbGVtZW50O1xuICAgICAgICBjb25zdCBjb2x1bW5zID0gdGFyZ2V0LmNoaWxkcmVuO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbHVtbnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbHVtbiA9IGNvbHVtbnNbaV07XG4gICAgICAgICAgICBjb25zdCBjZWxscyA9IGNvbHVtbi5jaGlsZHJlbjtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY2VsbHMubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgICAgICAgICBjZWxsc1tqXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFhdHRhY2tpbmdQbGF5ZXIuaXNBbGxTaGlwc1BsYWNlZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgUGxheWVyICR7YXR0YWNraW5nUGxheWVyLm5hbWV9IGhhcyBub3QgZmluaXNoZWQgcGxhY2luZyBzaGlwc2BcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgUmVtYWluaW5nIHNoaXBzOiAke2F0dGFja2luZ1BsYXllci5nYW1lYm9hcmQuYXZhaWxhYmxlU2hpcHN9YFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBkZWZlbmRpbmdQbGF5ZXIuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soaSwgaik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZWZlbmRpbmdQbGF5ZXIuaXNMb3N0KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBQbGF5ZXIgJHtkZWZlbmRpbmdQbGF5ZXIubmFtZX0gbG9zZXMhYCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyR2FtZWJvYXJkKGRlZmVuZGluZ1BsYXllcik7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbkZvckF0dGFja3MoZGVmZW5kaW5nUGxheWVyLCBhdHRhY2tpbmdQbGF5ZXIpO1xuICAgICAgICAgICAgICAgICAgICAvLyBBaSBtYWtlcyBhIG1vdmVcbiAgICAgICAgICAgICAgICAgICAgZGVmZW5kaW5nUGxheWVyLm1ha2VNb3ZlKGF0dGFja2luZ1BsYXllcik7XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlckdhbWVib2FyZChhdHRhY2tpbmdQbGF5ZXIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHJlbmRlckF2YWlsYWJsZVNoaXBzID0gKFxuICAgICAgICBwbGF5ZXIsXG4gICAgICAgIHRhcmdldFBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3AtVXAtQXZhaWxhYmxlU2hpcHMnKVxuICAgICkgPT4ge1xuICAgICAgICB0YXJnZXRQYXJlbnQudGV4dENvbnRlbnQgPSAnJztcblxuICAgICAgICBjb25zdCBjcmVhdGVNZXNzYWdlID0gKHRleHQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIG1lc3NhZ2UudGV4dENvbnRlbnQgPSBgJHt0ZXh0fWA7XG4gICAgICAgICAgICByZXR1cm4gbWVzc2FnZTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBjcmVhdGVPcmllbnRhdGlvbkJ1dHRvbiA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9yaWVudGF0aW9uQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBvcmllbnRhdGlvbkJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24tb3JpZW50YXRpb24nKTtcbiAgICAgICAgICAgIG9yaWVudGF0aW9uQnV0dG9uLnRleHRDb250ZW50ID0gcGxheWVyLnNlbGVjdGVkT3JpZW50YXRpb247XG5cbiAgICAgICAgICAgIG9yaWVudGF0aW9uQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIuc2VsZWN0ZWRPcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICAgICAgICAgIHBsYXllci5zZWxlY3RlZE9yaWVudGF0aW9uID0gJ3ZlcnRpY2FsJztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuc2VsZWN0ZWRPcmllbnRhdGlvbiA9ICdob3Jpem9udGFsJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGxheWVyLnNlbGVjdGVkRWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICByZW5kZXJBdmFpbGFibGVTaGlwcyhwbGF5ZXIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBvcmllbnRhdGlvbkJ1dHRvbjtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCByZW5kZXJVbnVzZWRTaGlwcyA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ3NoaXBzLXRvLXBsYWNlJyk7XG4gICAgICAgICAgICB0YXJnZXRQYXJlbnQuYXBwZW5kQ2hpbGQodGFyZ2V0KTtcblxuICAgICAgICAgICAgdGFyZ2V0LnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgndmVydGljYWwnKTtcbiAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdob3Jpem9udGFsJyk7XG4gICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZChgJHtwbGF5ZXIuc2VsZWN0ZWRPcmllbnRhdGlvbn1gKTtcblxuICAgICAgICAgICAgY29uc3QgeyBhdmFpbGFibGVTaGlwcyB9ID0gcGxheWVyLmdhbWVib2FyZDtcbiAgICAgICAgICAgIGF2YWlsYWJsZVNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB3aG9sZVNoaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICB3aG9sZVNoaXAuY2xhc3NMaXN0LnRvZ2dsZSgnc2hpcC1jb250YWluZXInKTtcbiAgICAgICAgICAgICAgICB3aG9sZVNoaXAuc2V0QXR0cmlidXRlKCdsZW5ndGgnLCBgJHtzaGlwfWApO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcnRPZlNoaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgcGFydE9mU2hpcC5jbGFzc0xpc3QudG9nZ2xlKCdhdmFpbGFibGUnKTtcbiAgICAgICAgICAgICAgICAgICAgcGFydE9mU2hpcC5jbGFzc0xpc3QudG9nZ2xlKCdjZWxsJyk7XG4gICAgICAgICAgICAgICAgICAgIHdob2xlU2hpcC5hcHBlbmRDaGlsZChwYXJ0T2ZTaGlwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGFyZ2V0LmFwcGVuZENoaWxkKHdob2xlU2hpcCk7XG5cbiAgICAgICAgICAgICAgICB3aG9sZVNoaXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIuc2VsZWN0ZWRFbGVtZW50ICE9PSB3aG9sZVNoaXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFyZ2V0LmNoaWxkcmVuLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LmNoaWxkcmVuW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuc2VsZWN0ZWRFbGVtZW50ID0gd2hvbGVTaGlwO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hvbGVTaGlwLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuc2VsZWN0ZWRFbGVtZW50ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hvbGVTaGlwLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIE1lc3NhZ2UgYWJvdmUgb3JpZW50YXRpb24gY2hhbmdlIGJ1dHRvblxuICAgICAgICB0YXJnZXRQYXJlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWVzc2FnZSgnQXZhaWxhYmxlIHNoaXBzJykpO1xuXG4gICAgICAgIC8vIENoYW5nZSBvcmllbnRhdGlvbiBidXR0b24gYW5kIGl0cyBsb2dpY1xuICAgICAgICB0YXJnZXRQYXJlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlT3JpZW50YXRpb25CdXR0b24oKSk7XG5cbiAgICAgICAgLy8gUmVuZGVyaW5nIHNoaXBzIHVuZGVyIGNoYW5nZSBvcmllbnRhdGlvbiBidXR0b25cbiAgICAgICAgcmVuZGVyVW51c2VkU2hpcHMoKTtcbiAgICB9O1xuXG4gICAgY29uc3QgbGlzdGVuRm9yU2hpcFBsYWNlbWVudCA9IChcbiAgICAgICAgcGxheWVyLFxuICAgICAgICB0YXJnZXRQYXJlbnQgPSBwbGF5ZXIuZ2FtZWJvYXJkRWxlbWVudFxuICAgICkgPT4ge1xuICAgICAgICBjb25zdCBjb2x1bW5zID0gdGFyZ2V0UGFyZW50LmNoaWxkcmVuO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbHVtbnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbHVtbiA9IGNvbHVtbnNbaV07XG4gICAgICAgICAgICBjb25zdCBjZWxscyA9IGNvbHVtbi5jaGlsZHJlbjtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY2VsbHMubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgICAgICAgICBjZWxsc1tqXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBsYXllci5zZWxlY3RlZEVsZW1lbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2hpcExlbmd0aCA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyLnNlbGVjdGVkRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2xlbmd0aCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc2hpcExlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhpLCBqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGkgLSAxLCBqIC0gMSBkdWUgdG8gaGF2aW5nIGNvb3JkaW5hdGUgKEEsQixDLi4uKSwgKDEsIDIsIDMuLi4pXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpIC0gMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqIC0gMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwTGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5zZWxlY3RlZE9yaWVudGF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVtb3ZlSW5kZXggPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5nYW1lYm9hcmQuYXZhaWxhYmxlU2hpcHMuaW5kZXhPZihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVyKHNoaXBMZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5nYW1lYm9hcmQucmVtb3ZlQXZhaWxhYmxlU2hpcChyZW1vdmVJbmRleCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckdhbWVib2FyZChwbGF5ZXIsIHRhcmdldFBhcmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJBdmFpbGFibGVTaGlwcyhwbGF5ZXIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiB7XG4gICAgICAgIHJlbmRlclBsYWNlbWVudFNjcmVlbixcbiAgICAgICAgcmVuZGVyR2FtZWJvYXJkLFxuICAgICAgICBsaXN0ZW5Gb3JBdHRhY2tzLFxuICAgICAgICByZW5kZXJBdmFpbGFibGVTaGlwcyxcbiAgICAgICAgbGlzdGVuRm9yU2hpcFBsYWNlbWVudFxuICAgIH07XG59KSgpO1xuXG5leHBvcnQgeyByZW5kZXJlciB9O1xuIiwiY29uc3Qgc2hpcEZhY3RvcnkgPSAobGVuZ3RoKSA9PiB7XG4gICAgbGV0IGhpdENvdW50ID0gMDtcbiAgICBjb25zdCBoaXQgPSAoKSA9PiB7XG4gICAgICAgIGhpdENvdW50ICs9IDE7XG4gICAgfTtcbiAgICBjb25zdCBpc1N1bmsgPSAoKSA9PiBoaXRDb3VudCA+PSBsZW5ndGg7XG4gICAgcmV0dXJuIHsgaGl0LCBpc1N1bmsgfTtcbn07XG5cbmV4cG9ydCB7IHNoaXBGYWN0b3J5IH07XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGdhbWVsb29wIH0gZnJvbSAnLi9nYW1lTG9vcC5qcyc7XG5cbmNvbnNvbGUubG9nKCdTY3JpcHRzIGFyZSB3b3JraW5nJyk7XG5cbmdhbWVsb29wKDcpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9