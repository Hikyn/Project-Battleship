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
___CSS_LOADER_EXPORT___.push([module.id, "html {\n  box-sizing: border-box;\n  font-family: Roboto, 'Open Sans', 'Helvetica Neue', sans-serif;\n  background: linear-gradient(#e2eeff, #9198e5);\n  min-height: 100vh;\n}\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\n\n.hello {\n    color: red;\n}\n\n.main {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n}\n\n.gameboard {\n  display: flex;\n  flex-direction: row;\n  height: fit-content;\n}\n\n.column {\n  display: flex;\n  flex-direction: column;\n}\n\n.header {\n  text-align: center;\n  font-size: 2rem;\n}\n\n.your-side,\n.enemy-side {\n  margin:2rem;\n  height: fit-content;\n}\n\n.cell {\n  width: 3rem;\n  height: 3rem;\n  --rgb: 250, 215, 170;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.cell.ship {\n  --rgb: 27, 133, 137;\n  /*background-color: rgb(var(--rgb));*/\n}\n\n.cell.ship.hit {\n  --rgb: 95, 110, 160;\n  /*background-color: rgb(var(--rgb));*/\n}\n\n.cell.hit {\n  --rgb: 229, 112, 112;\n  /*background-color: rgb(var(--rgb));*/\n  \n}\n\n.cell.ship.hit.sunk {\n  --rgb: 110, 94, 94;\n  /*background-color: rgb(var(--rgb));*/\n}\n\n.cell.hit::before {\n  content: '•';\n  font-size: 2em;\n}\n\n.cell.ship::before {\n  content: '';\n}\n\n.cell.ship.hit::before {\n  content: 'X';\n}\n\nbutton.cell {\n  box-shadow: 2px 2px 2px 1px rgba(128, 128, 128, 0.068);\n  color: black;\n  text-decoration: none;\n  --alpha: 0.8;\n  background-color: rgba(var(--rgb), var(--alpha));\n  cursor: crosshair;\n}\n\n.gameboard-self button {\n  cursor: auto;\n}\n\nbutton.cell:hover {\n  --alpha: 1;\n}\n\nbutton.cell.empty:not(.hit):hover {\n  --rgb: 216, 185, 145;\n}\n\nbutton.cell.empty.hit:hover {\n  --rgb: 199, 95, 95;\n}\n\n.ships-to-place {\n  margin: 1rem 0rem;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n\n.ships-to-place.horizontal {\n  display: flex;\n  flex-direction: column;\n}\n\n.ships-to-place.vertical {\n  display: flex;\n  flex-direction: row;\n}\n\n.ships-to-place.vertical .ship-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.ships-to-place.horizontal .ship-container {\n  display: flex;\n  flex-direction: row;\n}\n\n.ship-container {\n  box-sizing: border-box;\n  border: 0.3rem solid rgb(128, 0, 0);\n  width: fit-content;\n  height: fit-content;\n}\n\n.available.cell {\n  --rgb: 27, 133, 137;\n  background-color: rgb(var(--rgb));\n  border: 1px solid white;\n}\n\n.available.cell:hover {\n  cursor: pointer;\n}\n\n.selected .cell {\n  --rgb: 53, 58, 203;\n  background-color: rgb(var(--rgb));\n}\n\n.fleet {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.button-orientation {\n  width: 6rem;\n  padding: 1rem;\n}\n\n.gameboard-enemy .ship {\n  --rgb: 250, 215, 170;\n}\n\n.pop-Up-Screen {\n  background: linear-gradient(#e2eeff, #9198e5);\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n\n  min-height: 100vh;\n  text-align: center;\n}\n\n.pop-Up-Screen .main {\n  display: grid;\n  margin-left: min(20rem, 20vw);\n  margin-right: min(20rem, 20vw);\n  grid: 1fr / minmax(0, 1fr) minmax(0, 1fr);\n  gap: 15rem;\n  justify-content: center;\n}\n\n@media only screen \nand (max-width: 700px)\n{\n  body .main {\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .main .your-side,\n  .main .enemy-side {\n    margin: 0px;\n  }\n\n  .main .your-side .cell,\n  .main .enemy-side .cell {\n    width: 2.5rem;\n    height: 2.5rem;\n  }\n\n  .pop-Up-Screen .main {\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n    justify-content: center;\n  }\n\n  .pop-Up-Screen .main .gameboard {\n    margin: 0rem 4rem;\n    flex-shrink: 1;\n  }\n\n  .pop-Up-Screen .column {\n    flex-shrink: 1;\n    width: 2.5rem;\n  }\n\n  .pop-Up-Screen .cell {\n    width: 2.5rem;\n    height: 2.5rem;\n  }\n\n  .pop-Up-Screen .btns {\n    margin: 1rem 0px;\n    grid: 1fr / 1fr 1fr 1fr;\n    padding: 0px 1rem;\n    justify-content: center;\n    gap: 0px;\n  }\n\n  .btns .btn-random,\n  .btns .btn-finish,\n  .btns .btn-reset {\n    width: auto;\n  }\n}\n\n.pop-Up-Screen .main .gameboard {\n  display: flex;\n  justify-content: center;\n}\n\n.pop-Up-Screen .main .pop-Up-AvailableShips {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.pop-Up-Screen .title {\n  margin-bottom: 2rem;\n  font-size: 2rem;\n}\n\n.btns {\n  display: grid;\n  grid: 4rem/ 4rem 4rem 4rem;\n  gap: 10rem;\n  justify-content: center;\n  margin: 2rem;\n}\n\n.btns button {\n  width: 5rem;\n  height: 5rem;\n  text-align: center;\n}\n\n.grayed {\n  background-color: rgba(128, 128, 128, 0.514);\n  border: none;\n}\n\n.ready-message {\n  font-size: 2rem;\n}\n\n.winner-message {\n  font-size: 3rem;\n  text-align: center;\n}\n\n.name {\n  font-size: 1.5rem;\n  text-align: center;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["html {\n  box-sizing: border-box;\n  font-family: Roboto, 'Open Sans', 'Helvetica Neue', sans-serif;\n  background: linear-gradient(#e2eeff, #9198e5);\n  min-height: 100vh;\n}\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\n\n.hello {\n    color: red;\n}\n\n.main {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n}\n\n.gameboard {\n  display: flex;\n  flex-direction: row;\n  height: fit-content;\n}\n\n.column {\n  display: flex;\n  flex-direction: column;\n}\n\n.header {\n  text-align: center;\n  font-size: 2rem;\n}\n\n.your-side,\n.enemy-side {\n  margin:2rem;\n  height: fit-content;\n}\n\n.cell {\n  width: 3rem;\n  height: 3rem;\n  --rgb: 250, 215, 170;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.cell.ship {\n  --rgb: 27, 133, 137;\n  /*background-color: rgb(var(--rgb));*/\n}\n\n.cell.ship.hit {\n  --rgb: 95, 110, 160;\n  /*background-color: rgb(var(--rgb));*/\n}\n\n.cell.hit {\n  --rgb: 229, 112, 112;\n  /*background-color: rgb(var(--rgb));*/\n  \n}\n\n.cell.ship.hit.sunk {\n  --rgb: 110, 94, 94;\n  /*background-color: rgb(var(--rgb));*/\n}\n\n.cell.hit::before {\n  content: '•';\n  font-size: 2em;\n}\n\n.cell.ship::before {\n  content: '';\n}\n\n.cell.ship.hit::before {\n  content: 'X';\n}\n\nbutton.cell {\n  box-shadow: 2px 2px 2px 1px rgba(128, 128, 128, 0.068);\n  color: black;\n  text-decoration: none;\n  --alpha: 0.8;\n  background-color: rgba(var(--rgb), var(--alpha));\n  cursor: crosshair;\n}\n\n.gameboard-self button {\n  cursor: auto;\n}\n\nbutton.cell:hover {\n  --alpha: 1;\n}\n\nbutton.cell.empty:not(.hit):hover {\n  --rgb: 216, 185, 145;\n}\n\nbutton.cell.empty.hit:hover {\n  --rgb: 199, 95, 95;\n}\n\n.ships-to-place {\n  margin: 1rem 0rem;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n\n.ships-to-place.horizontal {\n  display: flex;\n  flex-direction: column;\n}\n\n.ships-to-place.vertical {\n  display: flex;\n  flex-direction: row;\n}\n\n.ships-to-place.vertical .ship-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.ships-to-place.horizontal .ship-container {\n  display: flex;\n  flex-direction: row;\n}\n\n.ship-container {\n  box-sizing: border-box;\n  border: 0.3rem solid rgb(128, 0, 0);\n  width: fit-content;\n  height: fit-content;\n}\n\n.available.cell {\n  --rgb: 27, 133, 137;\n  background-color: rgb(var(--rgb));\n  border: 1px solid white;\n}\n\n.available.cell:hover {\n  cursor: pointer;\n}\n\n.selected .cell {\n  --rgb: 53, 58, 203;\n  background-color: rgb(var(--rgb));\n}\n\n.fleet {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.button-orientation {\n  width: 6rem;\n  padding: 1rem;\n}\n\n.gameboard-enemy .ship {\n  --rgb: 250, 215, 170;\n}\n\n.pop-Up-Screen {\n  background: linear-gradient(#e2eeff, #9198e5);\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n\n  min-height: 100vh;\n  text-align: center;\n}\n\n.pop-Up-Screen .main {\n  display: grid;\n  margin-left: min(20rem, 20vw);\n  margin-right: min(20rem, 20vw);\n  grid: 1fr / minmax(0, 1fr) minmax(0, 1fr);\n  gap: 15rem;\n  justify-content: center;\n}\n\n@media only screen \nand (max-width: 700px)\n{\n  body .main {\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .main .your-side,\n  .main .enemy-side {\n    margin: 0px;\n  }\n\n  .main .your-side .cell,\n  .main .enemy-side .cell {\n    width: 2.5rem;\n    height: 2.5rem;\n  }\n\n  .pop-Up-Screen .main {\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n    justify-content: center;\n  }\n\n  .pop-Up-Screen .main .gameboard {\n    margin: 0rem 4rem;\n    flex-shrink: 1;\n  }\n\n  .pop-Up-Screen .column {\n    flex-shrink: 1;\n    width: 2.5rem;\n  }\n\n  .pop-Up-Screen .cell {\n    width: 2.5rem;\n    height: 2.5rem;\n  }\n\n  .pop-Up-Screen .btns {\n    margin: 1rem 0px;\n    grid: 1fr / 1fr 1fr 1fr;\n    padding: 0px 1rem;\n    justify-content: center;\n    gap: 0px;\n  }\n\n  .btns .btn-random,\n  .btns .btn-finish,\n  .btns .btn-reset {\n    width: auto;\n  }\n}\n\n.pop-Up-Screen .main .gameboard {\n  display: flex;\n  justify-content: center;\n}\n\n.pop-Up-Screen .main .pop-Up-AvailableShips {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.pop-Up-Screen .title {\n  margin-bottom: 2rem;\n  font-size: 2rem;\n}\n\n.btns {\n  display: grid;\n  grid: 4rem/ 4rem 4rem 4rem;\n  gap: 10rem;\n  justify-content: center;\n  margin: 2rem;\n}\n\n.btns button {\n  width: 5rem;\n  height: 5rem;\n  text-align: center;\n}\n\n.grayed {\n  background-color: rgba(128, 128, 128, 0.514);\n  border: none;\n}\n\n.ready-message {\n  font-size: 2rem;\n}\n\n.winner-message {\n  font-size: 3rem;\n  text-align: center;\n}\n\n.name {\n  font-size: 1.5rem;\n  text-align: center;\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _gameboardFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboardFactory */ "./src/gameboardFactory.js");
/* harmony import */ var _rendererFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rendererFactory */ "./src/rendererFactory.js");




function gameloop(gameboardLength) {
    const gameboard1 = (0,_gameboardFactory__WEBPACK_IMPORTED_MODULE_1__.gameboardFactory)(gameboardLength);
    let target = document.querySelector('.gameboard-self');
    const player1 = (0,_playerFactory__WEBPACK_IMPORTED_MODULE_0__.playerFactory)('', gameboard1, target);

    const gameboard2 = (0,_gameboardFactory__WEBPACK_IMPORTED_MODULE_1__.gameboardFactory)(gameboardLength);
    target = document.querySelector('.gameboard-enemy');
    const player2 = (0,_playerFactory__WEBPACK_IMPORTED_MODULE_0__.playerFactory)('Computer', gameboard2, target, true);
    player2.gameboard.randomlyPlaceAllShips();

    const renderer = (0,_rendererFactory__WEBPACK_IMPORTED_MODULE_2__.rendererFactory)(player1, player2);
    // Start with rendering ship placement screen.
    renderer.placementScreen.show();
    renderer.placementScreen.appendGameboard(renderer);
    renderer.placementScreen.appendAvailableShips(renderer);

    renderer.placementScreen.onRandomButton(() => {
        if (player1.gameboard.availableShips.length <= 0) {
            player1.gameboard = (0,_gameboardFactory__WEBPACK_IMPORTED_MODULE_1__.gameboardFactory)(player1.gameboard.length);
        }
        player1.gameboard.randomlyPlaceAllShips();
        renderer.placementScreen.appendGameboard(renderer);
        renderer.placementScreen.appendAvailableShips(renderer);
    });

    renderer.placementScreen.onFinishButton(() => {
        // If player placed all ships, we proceed
        if (player1.gameboard.availableShips.length <= 0) {
            renderer.renderGameboard(player1);

            renderer.renderGameboard(player2);
            renderer.runAttackLoop(player2, player1);
        }
    });

    renderer.placementScreen.onResetButton(() => {
        // Initialize again gameboard for player1
        player1.gameboard = (0,_gameboardFactory__WEBPACK_IMPORTED_MODULE_1__.gameboardFactory)(player1.gameboard.length);
        renderer.placementScreen.appendGameboard(renderer);
        renderer.placementScreen.appendAvailableShips(renderer);
    });
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

/***/ "./src/placementScreenFactory.js":
/*!***************************************!*\
  !*** ./src/placementScreenFactory.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "placementScreenFactory": () => (/* binding */ placementScreenFactory)
/* harmony export */ });
const placementScreenFactory = (player) => {
    /**
     * Renders placement screen over anything
     */
    const show = () => {
        const targetParent = player.gameboardElement;

        targetParent.textContent = '';

        const popUpScreen = document.createElement('div');
        popUpScreen.classList.add('pop-Up-Screen');

        const popUpTitle = document.createElement('div');
        popUpTitle.textContent = `Admiral, place your ships!`;
        popUpTitle.classList.add('title');

        const popUpMain = document.createElement('div');
        popUpMain.classList.add('main');

        const popUpGameboard = document.createElement('div');
        popUpGameboard.classList.add('gameboard');

        const popUpAvailableShips = document.createElement('div');
        popUpAvailableShips.classList.add('pop-Up-AvailableShips');

        const randomButton = document.createElement('button');
        randomButton.classList.add('btn-random');
        randomButton.textContent = 'Random';

        const finishButton = document.createElement('button');
        finishButton.classList.add('btn-finish');
        finishButton.classList.add('grayed');
        finishButton.textContent = 'Finish';

        const resetButton = document.createElement('button');
        resetButton.classList.add('btn-reset');
        resetButton.textContent = 'Reset';

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
    };

    function onRandomButton(callback) {
        const randomButton = document.querySelector('.btn-random');
        randomButton.addEventListener('click', callback);
    }

    function onFinishButton(callback) {
        const finishButton = document.querySelector('.btn-finish');
        finishButton.addEventListener('click', callback);
    }

    function onResetButton(callback) {
        const resetButton = document.querySelector('.btn-reset');
        resetButton.addEventListener('click', callback);
    }

    const appendGameboard = (renderer) => {
        const popUpGameboard = document.querySelector(
            '.pop-Up-Screen .gameboard'
        );
        renderer.renderGameboard(player, popUpGameboard);
    };

    const appendAvailableShips = (renderer) => {
        const availableShips = document.querySelector('.pop-Up-AvailableShips');
        renderer.renderAvailableShips(player, availableShips)
    };

    return {
        show,
        onRandomButton,
        onFinishButton,
        onResetButton,
        appendGameboard,
        appendAvailableShips
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

/***/ "./src/rendererFactory.js":
/*!********************************!*\
  !*** ./src/rendererFactory.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rendererFactory": () => (/* binding */ rendererFactory)
/* harmony export */ });
/* harmony import */ var _placementScreenFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./placementScreenFactory */ "./src/placementScreenFactory.js");


const rendererFactory = (player, enemyPlayer) => {
    const placementScreen = (0,_placementScreenFactory__WEBPACK_IMPORTED_MODULE_0__.placementScreenFactory)(player);

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

    const runAttackLoop = (defendingPlayer, attackingPlayer) => {
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
                    renderGameboard(defendingPlayer);

                    if (defendingPlayer.isLost()) {
                        console.log(`Player ${defendingPlayer.name} loses!`);
                        const body = document.querySelector('body');
                        const main = document.querySelector('body .main');

                        const winner = document.createElement('div');
                        winner.classList.add('winner-message');
                        winner.textContent = `We won this battle!`;

                        body.insertBefore(winner, main);
                    } else {
                        runAttackLoop(defendingPlayer, attackingPlayer);
                    }
                    // Ai makes a move
                    defendingPlayer.makeMove(attackingPlayer);
                    renderGameboard(attackingPlayer);
                    if (attackingPlayer.isLost()) {
                        console.log(`Player ${attackingPlayer.name} loses!`);
                        const body = document.querySelector('body');
                        const main = document.querySelector('body .main');

                        const winner = document.createElement('div');
                        winner.classList.add('winner-message');
                        winner.textContent = `Player ${defendingPlayer.name} won this battle!`;

                        body.insertBefore(winner, main);
                    }
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
        }
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
        renderGameboard,
        runAttackLoop,
        renderAvailableShips,
        listenForShipPlacement,
        placementScreen
    };
};




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGNBQWMsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxPQUFPLFVBQVUsS0FBSyxNQUFN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QUNBLDRCQUE0QixnQkFBZ0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsRUFBRSxHQUFHLEVBQUU7QUFDL0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUU0Qjs7Ozs7Ozs7Ozs7Ozs7O0FDL0k1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWtDOzs7Ozs7Ozs7Ozs7Ozs7QUM1RmxDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFB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Ozs7Ozs7Ozs7QUNuUzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUnZCLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7O1VDMUI3RTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNvQjs7QUFFekM7O0FBRUEsc0RBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvZ2FtZUxvb3AuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL3BsYWNlbWVudFNjcmVlbkZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL3BsYXllckZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL3JlbmRlcmVyRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvc2hpcEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNlMmVlZmYsICM5MTk4ZTUpO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcblxcbi5oZWxsbyB7XFxuICAgIGNvbG9yOiByZWQ7XFxufVxcblxcbi5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5nYW1lYm9hcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4uY29sdW1uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLnlvdXItc2lkZSxcXG4uZW5lbXktc2lkZSB7XFxuICBtYXJnaW46MnJlbTtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxufVxcblxcbi5jZWxsIHtcXG4gIHdpZHRoOiAzcmVtO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgLS1yZ2I6IDI1MCwgMjE1LCAxNzA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2VsbC5zaGlwIHtcXG4gIC0tcmdiOiAyNywgMTMzLCAxMzc7XFxuICAvKmJhY2tncm91bmQtY29sb3I6IHJnYih2YXIoLS1yZ2IpKTsqL1xcbn1cXG5cXG4uY2VsbC5zaGlwLmhpdCB7XFxuICAtLXJnYjogOTUsIDExMCwgMTYwO1xcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiByZ2IodmFyKC0tcmdiKSk7Ki9cXG59XFxuXFxuLmNlbGwuaGl0IHtcXG4gIC0tcmdiOiAyMjksIDExMiwgMTEyO1xcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiByZ2IodmFyKC0tcmdiKSk7Ki9cXG4gIFxcbn1cXG5cXG4uY2VsbC5zaGlwLmhpdC5zdW5rIHtcXG4gIC0tcmdiOiAxMTAsIDk0LCA5NDtcXG4gIC8qYmFja2dyb3VuZC1jb2xvcjogcmdiKHZhcigtLXJnYikpOyovXFxufVxcblxcbi5jZWxsLmhpdDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICfigKInO1xcbiAgZm9udC1zaXplOiAyZW07XFxufVxcblxcbi5jZWxsLnNoaXA6OmJlZm9yZSB7XFxuICBjb250ZW50OiAnJztcXG59XFxuXFxuLmNlbGwuc2hpcC5oaXQ6OmJlZm9yZSB7XFxuICBjb250ZW50OiAnWCc7XFxufVxcblxcbmJ1dHRvbi5jZWxsIHtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMnB4IDFweCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMDY4KTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIC0tYWxwaGE6IDAuODtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tcmdiKSwgdmFyKC0tYWxwaGEpKTtcXG4gIGN1cnNvcjogY3Jvc3NoYWlyO1xcbn1cXG5cXG4uZ2FtZWJvYXJkLXNlbGYgYnV0dG9uIHtcXG4gIGN1cnNvcjogYXV0bztcXG59XFxuXFxuYnV0dG9uLmNlbGw6aG92ZXIge1xcbiAgLS1hbHBoYTogMTtcXG59XFxuXFxuYnV0dG9uLmNlbGwuZW1wdHk6bm90KC5oaXQpOmhvdmVyIHtcXG4gIC0tcmdiOiAyMTYsIDE4NSwgMTQ1O1xcbn1cXG5cXG5idXR0b24uY2VsbC5lbXB0eS5oaXQ6aG92ZXIge1xcbiAgLS1yZ2I6IDE5OSwgOTUsIDk1O1xcbn1cXG5cXG4uc2hpcHMtdG8tcGxhY2Uge1xcbiAgbWFyZ2luOiAxcmVtIDByZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMnB4O1xcbn1cXG5cXG4uc2hpcHMtdG8tcGxhY2UuaG9yaXpvbnRhbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnNoaXBzLXRvLXBsYWNlLnZlcnRpY2FsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4uc2hpcHMtdG8tcGxhY2UudmVydGljYWwgLnNoaXAtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uc2hpcHMtdG8tcGxhY2UuaG9yaXpvbnRhbCAuc2hpcC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi5zaGlwLWNvbnRhaW5lciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyOiAwLjNyZW0gc29saWQgcmdiKDEyOCwgMCwgMCk7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4uYXZhaWxhYmxlLmNlbGwge1xcbiAgLS1yZ2I6IDI3LCAxMzMsIDEzNztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYih2YXIoLS1yZ2IpKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4uYXZhaWxhYmxlLmNlbGw6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2VsZWN0ZWQgLmNlbGwge1xcbiAgLS1yZ2I6IDUzLCA1OCwgMjAzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKHZhcigtLXJnYikpO1xcbn1cXG5cXG4uZmxlZXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5idXR0b24tb3JpZW50YXRpb24ge1xcbiAgd2lkdGg6IDZyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4uZ2FtZWJvYXJkLWVuZW15IC5zaGlwIHtcXG4gIC0tcmdiOiAyNTAsIDIxNSwgMTcwO1xcbn1cXG5cXG4ucG9wLVVwLVNjcmVlbiB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2UyZWVmZiwgIzkxOThlNSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG5cXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucG9wLVVwLVNjcmVlbiAubWFpbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgbWFyZ2luLWxlZnQ6IG1pbigyMHJlbSwgMjB2dyk7XFxuICBtYXJnaW4tcmlnaHQ6IG1pbigyMHJlbSwgMjB2dyk7XFxuICBncmlkOiAxZnIgLyBtaW5tYXgoMCwgMWZyKSBtaW5tYXgoMCwgMWZyKTtcXG4gIGdhcDogMTVyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIFxcbmFuZCAobWF4LXdpZHRoOiA3MDBweClcXG57XFxuICBib2R5IC5tYWluIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAubWFpbiAueW91ci1zaWRlLFxcbiAgLm1haW4gLmVuZW15LXNpZGUge1xcbiAgICBtYXJnaW46IDBweDtcXG4gIH1cXG5cXG4gIC5tYWluIC55b3VyLXNpZGUgLmNlbGwsXFxuICAubWFpbiAuZW5lbXktc2lkZSAuY2VsbCB7XFxuICAgIHdpZHRoOiAyLjVyZW07XFxuICAgIGhlaWdodDogMi41cmVtO1xcbiAgfVxcblxcbiAgLnBvcC1VcC1TY3JlZW4gLm1haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDJyZW07XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcblxcbiAgLnBvcC1VcC1TY3JlZW4gLm1haW4gLmdhbWVib2FyZCB7XFxuICAgIG1hcmdpbjogMHJlbSA0cmVtO1xcbiAgICBmbGV4LXNocmluazogMTtcXG4gIH1cXG5cXG4gIC5wb3AtVXAtU2NyZWVuIC5jb2x1bW4ge1xcbiAgICBmbGV4LXNocmluazogMTtcXG4gICAgd2lkdGg6IDIuNXJlbTtcXG4gIH1cXG5cXG4gIC5wb3AtVXAtU2NyZWVuIC5jZWxsIHtcXG4gICAgd2lkdGg6IDIuNXJlbTtcXG4gICAgaGVpZ2h0OiAyLjVyZW07XFxuICB9XFxuXFxuICAucG9wLVVwLVNjcmVlbiAuYnRucyB7XFxuICAgIG1hcmdpbjogMXJlbSAwcHg7XFxuICAgIGdyaWQ6IDFmciAvIDFmciAxZnIgMWZyO1xcbiAgICBwYWRkaW5nOiAwcHggMXJlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMHB4O1xcbiAgfVxcblxcbiAgLmJ0bnMgLmJ0bi1yYW5kb20sXFxuICAuYnRucyAuYnRuLWZpbmlzaCxcXG4gIC5idG5zIC5idG4tcmVzZXQge1xcbiAgICB3aWR0aDogYXV0bztcXG4gIH1cXG59XFxuXFxuLnBvcC1VcC1TY3JlZW4gLm1haW4gLmdhbWVib2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5wb3AtVXAtU2NyZWVuIC5tYWluIC5wb3AtVXAtQXZhaWxhYmxlU2hpcHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucG9wLVVwLVNjcmVlbiAudGl0bGUge1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmJ0bnMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQ6IDRyZW0vIDRyZW0gNHJlbSA0cmVtO1xcbiAgZ2FwOiAxMHJlbTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luOiAycmVtO1xcbn1cXG5cXG4uYnRucyBidXR0b24ge1xcbiAgd2lkdGg6IDVyZW07XFxuICBoZWlnaHQ6IDVyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5ncmF5ZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjUxNCk7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5yZWFkeS1tZXNzYWdlIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLndpbm5lci1tZXNzYWdlIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm5hbWUge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsOERBQThEO0VBQzlELDZDQUE2QztFQUM3QyxpQkFBaUI7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QWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixVQUFVO0VBQ1YsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsNENBQTRDO0VBQzVDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogUm9ib3RvLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZTJlZWZmLCAjOTE5OGU1KTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn1cXG5cXG4uaGVsbG8ge1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG5cXG4ubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4uZ2FtZWJvYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG59XFxuXFxuLmNvbHVtbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi55b3VyLXNpZGUsXFxuLmVuZW15LXNpZGUge1xcbiAgbWFyZ2luOjJyZW07XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4uY2VsbCB7XFxuICB3aWR0aDogM3JlbTtcXG4gIGhlaWdodDogM3JlbTtcXG4gIC0tcmdiOiAyNTAsIDIxNSwgMTcwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNlbGwuc2hpcCB7XFxuICAtLXJnYjogMjcsIDEzMywgMTM3O1xcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiByZ2IodmFyKC0tcmdiKSk7Ki9cXG59XFxuXFxuLmNlbGwuc2hpcC5oaXQge1xcbiAgLS1yZ2I6IDk1LCAxMTAsIDE2MDtcXG4gIC8qYmFja2dyb3VuZC1jb2xvcjogcmdiKHZhcigtLXJnYikpOyovXFxufVxcblxcbi5jZWxsLmhpdCB7XFxuICAtLXJnYjogMjI5LCAxMTIsIDExMjtcXG4gIC8qYmFja2dyb3VuZC1jb2xvcjogcmdiKHZhcigtLXJnYikpOyovXFxuICBcXG59XFxuXFxuLmNlbGwuc2hpcC5oaXQuc3VuayB7XFxuICAtLXJnYjogMTEwLCA5NCwgOTQ7XFxuICAvKmJhY2tncm91bmQtY29sb3I6IHJnYih2YXIoLS1yZ2IpKTsqL1xcbn1cXG5cXG4uY2VsbC5oaXQ6OmJlZm9yZSB7XFxuICBjb250ZW50OiAn4oCiJztcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbn1cXG5cXG4uY2VsbC5zaGlwOjpiZWZvcmUge1xcbiAgY29udGVudDogJyc7XFxufVxcblxcbi5jZWxsLnNoaXAuaGl0OjpiZWZvcmUge1xcbiAgY29udGVudDogJ1gnO1xcbn1cXG5cXG5idXR0b24uY2VsbCB7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDJweCAxcHggcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjA2OCk7XFxuICBjb2xvcjogYmxhY2s7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAtLWFscGhhOiAwLjg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXJnYiksIHZhcigtLWFscGhhKSk7XFxuICBjdXJzb3I6IGNyb3NzaGFpcjtcXG59XFxuXFxuLmdhbWVib2FyZC1zZWxmIGJ1dHRvbiB7XFxuICBjdXJzb3I6IGF1dG87XFxufVxcblxcbmJ1dHRvbi5jZWxsOmhvdmVyIHtcXG4gIC0tYWxwaGE6IDE7XFxufVxcblxcbmJ1dHRvbi5jZWxsLmVtcHR5Om5vdCguaGl0KTpob3ZlciB7XFxuICAtLXJnYjogMjE2LCAxODUsIDE0NTtcXG59XFxuXFxuYnV0dG9uLmNlbGwuZW1wdHkuaGl0OmhvdmVyIHtcXG4gIC0tcmdiOiAxOTksIDk1LCA5NTtcXG59XFxuXFxuLnNoaXBzLXRvLXBsYWNlIHtcXG4gIG1hcmdpbjogMXJlbSAwcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDJweDtcXG59XFxuXFxuLnNoaXBzLXRvLXBsYWNlLmhvcml6b250YWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5zaGlwcy10by1wbGFjZS52ZXJ0aWNhbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuLnNoaXBzLXRvLXBsYWNlLnZlcnRpY2FsIC5zaGlwLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnNoaXBzLXRvLXBsYWNlLmhvcml6b250YWwgLnNoaXAtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4uc2hpcC1jb250YWluZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlcjogMC4zcmVtIHNvbGlkIHJnYigxMjgsIDAsIDApO1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG59XFxuXFxuLmF2YWlsYWJsZS5jZWxsIHtcXG4gIC0tcmdiOiAyNywgMTMzLCAxMzc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IodmFyKC0tcmdiKSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLmF2YWlsYWJsZS5jZWxsOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNlbGVjdGVkIC5jZWxsIHtcXG4gIC0tcmdiOiA1MywgNTgsIDIwMztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYih2YXIoLS1yZ2IpKTtcXG59XFxuXFxuLmZsZWV0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYnV0dG9uLW9yaWVudGF0aW9uIHtcXG4gIHdpZHRoOiA2cmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmdhbWVib2FyZC1lbmVteSAuc2hpcCB7XFxuICAtLXJnYjogMjUwLCAyMTUsIDE3MDtcXG59XFxuXFxuLnBvcC1VcC1TY3JlZW4ge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNlMmVlZmYsICM5MTk4ZTUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnBvcC1VcC1TY3JlZW4gLm1haW4ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIG1hcmdpbi1sZWZ0OiBtaW4oMjByZW0sIDIwdncpO1xcbiAgbWFyZ2luLXJpZ2h0OiBtaW4oMjByZW0sIDIwdncpO1xcbiAgZ3JpZDogMWZyIC8gbWlubWF4KDAsIDFmcikgbWlubWF4KDAsIDFmcik7XFxuICBnYXA6IDE1cmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBcXG5hbmQgKG1heC13aWR0aDogNzAwcHgpXFxue1xcbiAgYm9keSAubWFpbiB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLm1haW4gLnlvdXItc2lkZSxcXG4gIC5tYWluIC5lbmVteS1zaWRlIHtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICB9XFxuXFxuICAubWFpbiAueW91ci1zaWRlIC5jZWxsLFxcbiAgLm1haW4gLmVuZW15LXNpZGUgLmNlbGwge1xcbiAgICB3aWR0aDogMi41cmVtO1xcbiAgICBoZWlnaHQ6IDIuNXJlbTtcXG4gIH1cXG5cXG4gIC5wb3AtVXAtU2NyZWVuIC5tYWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAycmVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5wb3AtVXAtU2NyZWVuIC5tYWluIC5nYW1lYm9hcmQge1xcbiAgICBtYXJnaW46IDByZW0gNHJlbTtcXG4gICAgZmxleC1zaHJpbms6IDE7XFxuICB9XFxuXFxuICAucG9wLVVwLVNjcmVlbiAuY29sdW1uIHtcXG4gICAgZmxleC1zaHJpbms6IDE7XFxuICAgIHdpZHRoOiAyLjVyZW07XFxuICB9XFxuXFxuICAucG9wLVVwLVNjcmVlbiAuY2VsbCB7XFxuICAgIHdpZHRoOiAyLjVyZW07XFxuICAgIGhlaWdodDogMi41cmVtO1xcbiAgfVxcblxcbiAgLnBvcC1VcC1TY3JlZW4gLmJ0bnMge1xcbiAgICBtYXJnaW46IDFyZW0gMHB4O1xcbiAgICBncmlkOiAxZnIgLyAxZnIgMWZyIDFmcjtcXG4gICAgcGFkZGluZzogMHB4IDFyZW07XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDBweDtcXG4gIH1cXG5cXG4gIC5idG5zIC5idG4tcmFuZG9tLFxcbiAgLmJ0bnMgLmJ0bi1maW5pc2gsXFxuICAuYnRucyAuYnRuLXJlc2V0IHtcXG4gICAgd2lkdGg6IGF1dG87XFxuICB9XFxufVxcblxcbi5wb3AtVXAtU2NyZWVuIC5tYWluIC5nYW1lYm9hcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ucG9wLVVwLVNjcmVlbiAubWFpbiAucG9wLVVwLUF2YWlsYWJsZVNoaXBzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnBvcC1VcC1TY3JlZW4gLnRpdGxlIHtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5idG5zIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkOiA0cmVtLyA0cmVtIDRyZW0gNHJlbTtcXG4gIGdhcDogMTByZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbjogMnJlbTtcXG59XFxuXFxuLmJ0bnMgYnV0dG9uIHtcXG4gIHdpZHRoOiA1cmVtO1xcbiAgaGVpZ2h0OiA1cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZ3JheWVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC41MTQpO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4ucmVhZHktbWVzc2FnZSB7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi53aW5uZXItbWVzc2FnZSB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5uYW1lIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgcGxheWVyRmFjdG9yeSB9IGZyb20gJy4vcGxheWVyRmFjdG9yeSc7XG5pbXBvcnQgeyBnYW1lYm9hcmRGYWN0b3J5IH0gZnJvbSAnLi9nYW1lYm9hcmRGYWN0b3J5JztcbmltcG9ydCB7IHJlbmRlcmVyRmFjdG9yeSB9IGZyb20gJy4vcmVuZGVyZXJGYWN0b3J5JztcblxuZnVuY3Rpb24gZ2FtZWxvb3AoZ2FtZWJvYXJkTGVuZ3RoKSB7XG4gICAgY29uc3QgZ2FtZWJvYXJkMSA9IGdhbWVib2FyZEZhY3RvcnkoZ2FtZWJvYXJkTGVuZ3RoKTtcbiAgICBsZXQgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVib2FyZC1zZWxmJyk7XG4gICAgY29uc3QgcGxheWVyMSA9IHBsYXllckZhY3RvcnkoJycsIGdhbWVib2FyZDEsIHRhcmdldCk7XG5cbiAgICBjb25zdCBnYW1lYm9hcmQyID0gZ2FtZWJvYXJkRmFjdG9yeShnYW1lYm9hcmRMZW5ndGgpO1xuICAgIHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lYm9hcmQtZW5lbXknKTtcbiAgICBjb25zdCBwbGF5ZXIyID0gcGxheWVyRmFjdG9yeSgnQ29tcHV0ZXInLCBnYW1lYm9hcmQyLCB0YXJnZXQsIHRydWUpO1xuICAgIHBsYXllcjIuZ2FtZWJvYXJkLnJhbmRvbWx5UGxhY2VBbGxTaGlwcygpO1xuXG4gICAgY29uc3QgcmVuZGVyZXIgPSByZW5kZXJlckZhY3RvcnkocGxheWVyMSwgcGxheWVyMik7XG4gICAgLy8gU3RhcnQgd2l0aCByZW5kZXJpbmcgc2hpcCBwbGFjZW1lbnQgc2NyZWVuLlxuICAgIHJlbmRlcmVyLnBsYWNlbWVudFNjcmVlbi5zaG93KCk7XG4gICAgcmVuZGVyZXIucGxhY2VtZW50U2NyZWVuLmFwcGVuZEdhbWVib2FyZChyZW5kZXJlcik7XG4gICAgcmVuZGVyZXIucGxhY2VtZW50U2NyZWVuLmFwcGVuZEF2YWlsYWJsZVNoaXBzKHJlbmRlcmVyKTtcblxuICAgIHJlbmRlcmVyLnBsYWNlbWVudFNjcmVlbi5vblJhbmRvbUJ1dHRvbigoKSA9PiB7XG4gICAgICAgIGlmIChwbGF5ZXIxLmdhbWVib2FyZC5hdmFpbGFibGVTaGlwcy5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgcGxheWVyMS5nYW1lYm9hcmQgPSBnYW1lYm9hcmRGYWN0b3J5KHBsYXllcjEuZ2FtZWJvYXJkLmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgcGxheWVyMS5nYW1lYm9hcmQucmFuZG9tbHlQbGFjZUFsbFNoaXBzKCk7XG4gICAgICAgIHJlbmRlcmVyLnBsYWNlbWVudFNjcmVlbi5hcHBlbmRHYW1lYm9hcmQocmVuZGVyZXIpO1xuICAgICAgICByZW5kZXJlci5wbGFjZW1lbnRTY3JlZW4uYXBwZW5kQXZhaWxhYmxlU2hpcHMocmVuZGVyZXIpO1xuICAgIH0pO1xuXG4gICAgcmVuZGVyZXIucGxhY2VtZW50U2NyZWVuLm9uRmluaXNoQnV0dG9uKCgpID0+IHtcbiAgICAgICAgLy8gSWYgcGxheWVyIHBsYWNlZCBhbGwgc2hpcHMsIHdlIHByb2NlZWRcbiAgICAgICAgaWYgKHBsYXllcjEuZ2FtZWJvYXJkLmF2YWlsYWJsZVNoaXBzLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgICByZW5kZXJlci5yZW5kZXJHYW1lYm9hcmQocGxheWVyMSk7XG5cbiAgICAgICAgICAgIHJlbmRlcmVyLnJlbmRlckdhbWVib2FyZChwbGF5ZXIyKTtcbiAgICAgICAgICAgIHJlbmRlcmVyLnJ1bkF0dGFja0xvb3AocGxheWVyMiwgcGxheWVyMSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJlbmRlcmVyLnBsYWNlbWVudFNjcmVlbi5vblJlc2V0QnV0dG9uKCgpID0+IHtcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBhZ2FpbiBnYW1lYm9hcmQgZm9yIHBsYXllcjFcbiAgICAgICAgcGxheWVyMS5nYW1lYm9hcmQgPSBnYW1lYm9hcmRGYWN0b3J5KHBsYXllcjEuZ2FtZWJvYXJkLmxlbmd0aCk7XG4gICAgICAgIHJlbmRlcmVyLnBsYWNlbWVudFNjcmVlbi5hcHBlbmRHYW1lYm9hcmQocmVuZGVyZXIpO1xuICAgICAgICByZW5kZXJlci5wbGFjZW1lbnRTY3JlZW4uYXBwZW5kQXZhaWxhYmxlU2hpcHMocmVuZGVyZXIpO1xuICAgIH0pO1xufVxuXG5leHBvcnQgeyBnYW1lbG9vcCB9O1xuIiwiaW1wb3J0IHsgc2hpcEZhY3RvcnkgfSBmcm9tICcuL3NoaXBGYWN0b3J5JztcblxuY29uc3QgZ2FtZWJvYXJkRmFjdG9yeSA9IChsZW5ndGgsIGF2YWlsYWJsZVNoaXBzID0gWzUsIDQsIDMsIDJdKSA9PiB7XG4gICAgY29uc3QgY2VsbHMgPSBuZXcgQXJyYXkobGVuZ3RoKTtcbiAgICBjb25zdCBtaXNzZWRTaG90cyA9IFtdO1xuICAgIGNvbnN0IGFjY3VyYXRlU2hvdHMgPSBbXTtcbiAgICBjb25zdCBpbml0aWFsU2hpcHMgPSBbLi4uYXZhaWxhYmxlU2hpcHNdO1xuICAgIGxldCB0b3RhbFNoaXBzTGVuZ3RoID0gMDtcblxuICAgIC8vIENyZWF0ZSBkb3VibGUgYXJyYXlcbiAgICBjb25zdCBpbml0aWFsaXplQ2VsbHMgPSAoKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGNlbGxzW2ldID0gbmV3IEFycmF5KGxlbmd0aCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQb3B1bGF0ZSBkb3VibGUgYXJyYXkgd2l0aCAwXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgICAgICAgICBjZWxsc1tpXVtqXSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgaW5pdGlhbGl6ZUNlbGxzKCk7XG5cbiAgICBjb25zdCBwbGFjZVNoaXAgPSAoeCwgeSwgc2hpcExlbmd0aCwgb3JpZW50YXRpb24pID0+IHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgIHggPSBOdW1iZXIoeCk7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICB5ID0gTnVtYmVyKHkpO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgc2hpcExlbmd0aCA9IE51bWJlcihzaGlwTGVuZ3RoKTtcbiAgICAgICAgXG4gICAgICAgIGlmICghYXZhaWxhYmxlU2hpcHMuaW5jbHVkZXMoc2hpcExlbmd0aCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlcmUgYXJlIG5vIGF2YWlsYWJsZSBzaGlwcyB3aXRoIHRoYXQgbGVuZ3RoJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2hpcCA9IHNoaXBGYWN0b3J5KHNoaXBMZW5ndGgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgaWYgKG9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNlbGxzW3hdW3kgKyBpXSAhPT0gdW5kZWZpbmVkICYmIGNlbGxzW3hdW3kgKyBpXSAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NoaXBzIGFyZSBvdmVybGFwcGluZycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2VsbHNbeCArIGldICE9PSB1bmRlZmluZWQgJiYgY2VsbHNbeCArIGldW3ldICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTaGlwcyBhcmUgb3ZlcmxhcHBpbmcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgICAgaWYgKCt5ICsgc2hpcExlbmd0aCA+IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGAke3kgKyBzaGlwTGVuZ3RofSA+ICR7bGVuZ3RofWApO1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignT3V0IG9mIGJvdW5kczogdmVydGljYWwnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgY2VsbHNbeF1beSArIGldID0gc2hpcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRvdGFsU2hpcHNMZW5ndGggKz0gc2hpcExlbmd0aDtcbiAgICAgICAgfSBlbHNlIGlmIChvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICBpZiAoK3ggKyBzaGlwTGVuZ3RoID4gbGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYCR7eCArIHNoaXBMZW5ndGh9ID4gJHtsZW5ndGh9YCk7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdPdXQgb2YgYm91bmRzOiBob3Jpem9udGFsJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIGNlbGxzW3ggKyBpXVt5XSA9IHNoaXA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0b3RhbFNoaXBzTGVuZ3RoICs9IHNoaXBMZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coYFNoaXAgY3JlYXRlZCBhdDogJHt4fXwke3l9YCk7XG4gICAgICAgIHJlbW92ZUF2YWlsYWJsZVNoaXAoYXZhaWxhYmxlU2hpcHMuaW5kZXhPZihzaGlwTGVuZ3RoKSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGlzQ2VsbEhpdCA9ICh4LCB5KSA9PiB7XG4gICAgICAgIGNvbnN0IGhpdCA9IFt4LCB5XTtcbiAgICAgICAgY29uc3QgbWlzc2VkU2hvdHNKc29uID0gSlNPTi5zdHJpbmdpZnkobWlzc2VkU2hvdHMpO1xuICAgICAgICBjb25zdCBhY2N1cmF0ZVNob3RzSnNvbiA9IEpTT04uc3RyaW5naWZ5KGFjY3VyYXRlU2hvdHMpO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIG1pc3NlZFNob3RzSnNvbi5pbmNsdWRlcyhoaXQpID09PSB0cnVlIHx8XG4gICAgICAgICAgICBhY2N1cmF0ZVNob3RzSnNvbi5pbmNsdWRlcyhoaXQpID09PSB0cnVlXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cbiAgICBjb25zdCByZWNlaXZlQXR0YWNrID0gKHgsIHkpID0+IHtcbiAgICAgICAgaWYgKGlzQ2VsbEhpdCh4LCB5KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW50IGhpdCBzYW1lIGNlbGwgdHdpY2UnKTtcbiAgICAgICAgfSBlbHNlIGlmIChjZWxsc1t4XVt5XSA9PT0gMCkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ01pc3NlZCBzaG90IScpO1xuICAgICAgICAgICAgbWlzc2VkU2hvdHMucHVzaChbeCwgeV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ0FjY3VyYXRlIHNob3QhJyk7XG4gICAgICAgICAgICBjZWxsc1t4XVt5XS5oaXQoKTtcbiAgICAgICAgICAgIGFjY3VyYXRlU2hvdHMucHVzaChbeCwgeV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpc0FsbFN1bmsoKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaXNBbGxTdW5rID0gKCkgPT4gYWNjdXJhdGVTaG90cy5sZW5ndGggPj0gdG90YWxTaGlwc0xlbmd0aDtcblxuICAgIGNvbnN0IHJlbW92ZUF2YWlsYWJsZVNoaXAgPSAoaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgYXZhaWxhYmxlU2hpcHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGF2YWlsYWJsZVNoaXBzKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCByYW5kb21seVBsYWNlQWxsU2hpcHMgPSAoKSA9PiB7XG4gICAgICAgIHdoaWxlIChhdmFpbGFibGVTaGlwcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCByYW5kb21YID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbGVuZ3RoKTtcbiAgICAgICAgICAgIGNvbnN0IHJhbmRvbVkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBsZW5ndGgpO1xuICAgICAgICAgICAgY29uc3QgcmFuZG9tT3JpZW50YXRpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcbiAgICAgICAgICAgIGxldCBvcmllbnRhdGlvbjtcbiAgICAgICAgICAgIGlmIChyYW5kb21PcmllbnRhdGlvbiA9PT0gMCkge1xuICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uID0gJ2hvcml6b250YWwnO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyYW5kb21PcmllbnRhdGlvbiA9PT0gMSkge1xuICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uID0gJ3ZlcnRpY2FsJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBwbGFjZVNoaXAocmFuZG9tWCwgcmFuZG9tWSwgYXZhaWxhYmxlU2hpcHNbMF0sIG9yaWVudGF0aW9uKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhdmFpbGFibGVTaGlwcyk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHJhbmRvbWx5UGxhY2VBbGxTaGlwcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGNlbGxzLFxuICAgICAgICByZWNlaXZlQXR0YWNrLFxuICAgICAgICBpc0FsbFN1bmssXG4gICAgICAgIHBsYWNlU2hpcCxcbiAgICAgICAgbGVuZ3RoLFxuICAgICAgICBtaXNzZWRTaG90cyxcbiAgICAgICAgYWNjdXJhdGVTaG90cyxcbiAgICAgICAgYXZhaWxhYmxlU2hpcHMsXG4gICAgICAgIGlzQ2VsbEhpdCxcbiAgICAgICAgcmVtb3ZlQXZhaWxhYmxlU2hpcCxcbiAgICAgICAgcmFuZG9tbHlQbGFjZUFsbFNoaXBzXG4gICAgfTtcbn07XG5cbmV4cG9ydCB7IGdhbWVib2FyZEZhY3RvcnkgfTtcbiIsImNvbnN0IHBsYWNlbWVudFNjcmVlbkZhY3RvcnkgPSAocGxheWVyKSA9PiB7XG4gICAgLyoqXG4gICAgICogUmVuZGVycyBwbGFjZW1lbnQgc2NyZWVuIG92ZXIgYW55dGhpbmdcbiAgICAgKi9cbiAgICBjb25zdCBzaG93ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB0YXJnZXRQYXJlbnQgPSBwbGF5ZXIuZ2FtZWJvYXJkRWxlbWVudDtcblxuICAgICAgICB0YXJnZXRQYXJlbnQudGV4dENvbnRlbnQgPSAnJztcblxuICAgICAgICBjb25zdCBwb3BVcFNjcmVlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwb3BVcFNjcmVlbi5jbGFzc0xpc3QuYWRkKCdwb3AtVXAtU2NyZWVuJyk7XG5cbiAgICAgICAgY29uc3QgcG9wVXBUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwb3BVcFRpdGxlLnRleHRDb250ZW50ID0gYEFkbWlyYWwsIHBsYWNlIHlvdXIgc2hpcHMhYDtcbiAgICAgICAgcG9wVXBUaXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuXG4gICAgICAgIGNvbnN0IHBvcFVwTWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwb3BVcE1haW4uY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xuXG4gICAgICAgIGNvbnN0IHBvcFVwR2FtZWJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHBvcFVwR2FtZWJvYXJkLmNsYXNzTGlzdC5hZGQoJ2dhbWVib2FyZCcpO1xuXG4gICAgICAgIGNvbnN0IHBvcFVwQXZhaWxhYmxlU2hpcHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcG9wVXBBdmFpbGFibGVTaGlwcy5jbGFzc0xpc3QuYWRkKCdwb3AtVXAtQXZhaWxhYmxlU2hpcHMnKTtcblxuICAgICAgICBjb25zdCByYW5kb21CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgcmFuZG9tQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J0bi1yYW5kb20nKTtcbiAgICAgICAgcmFuZG9tQnV0dG9uLnRleHRDb250ZW50ID0gJ1JhbmRvbSc7XG5cbiAgICAgICAgY29uc3QgZmluaXNoQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGZpbmlzaEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidG4tZmluaXNoJyk7XG4gICAgICAgIGZpbmlzaEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdncmF5ZWQnKTtcbiAgICAgICAgZmluaXNoQnV0dG9uLnRleHRDb250ZW50ID0gJ0ZpbmlzaCc7XG5cbiAgICAgICAgY29uc3QgcmVzZXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgcmVzZXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnRuLXJlc2V0Jyk7XG4gICAgICAgIHJlc2V0QnV0dG9uLnRleHRDb250ZW50ID0gJ1Jlc2V0JztcblxuICAgICAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJ1dHRvbnMuY2xhc3NMaXN0LmFkZCgnYnRucycpO1xuXG4gICAgICAgIGJ1dHRvbnMuYXBwZW5kQ2hpbGQocmFuZG9tQnV0dG9uKTtcbiAgICAgICAgYnV0dG9ucy5hcHBlbmRDaGlsZChmaW5pc2hCdXR0b24pO1xuICAgICAgICBidXR0b25zLmFwcGVuZENoaWxkKHJlc2V0QnV0dG9uKTtcblxuICAgICAgICBwb3BVcE1haW4uYXBwZW5kQ2hpbGQocG9wVXBHYW1lYm9hcmQpO1xuICAgICAgICBwb3BVcE1haW4uYXBwZW5kQ2hpbGQocG9wVXBBdmFpbGFibGVTaGlwcyk7XG5cbiAgICAgICAgcG9wVXBTY3JlZW4uYXBwZW5kQ2hpbGQocG9wVXBUaXRsZSk7XG4gICAgICAgIHBvcFVwU2NyZWVuLmFwcGVuZENoaWxkKHBvcFVwTWFpbik7XG4gICAgICAgIHBvcFVwU2NyZWVuLmFwcGVuZENoaWxkKGJ1dHRvbnMpO1xuXG4gICAgICAgIHRhcmdldFBhcmVudC5hcHBlbmRDaGlsZChwb3BVcFNjcmVlbik7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIG9uUmFuZG9tQnV0dG9uKGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IHJhbmRvbUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tcmFuZG9tJyk7XG4gICAgICAgIHJhbmRvbUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkZpbmlzaEJ1dHRvbihjYWxsYmFjaykge1xuICAgICAgICBjb25zdCBmaW5pc2hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLWZpbmlzaCcpO1xuICAgICAgICBmaW5pc2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25SZXNldEJ1dHRvbihjYWxsYmFjaykge1xuICAgICAgICBjb25zdCByZXNldEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tcmVzZXQnKTtcbiAgICAgICAgcmVzZXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgY29uc3QgYXBwZW5kR2FtZWJvYXJkID0gKHJlbmRlcmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IHBvcFVwR2FtZWJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICcucG9wLVVwLVNjcmVlbiAuZ2FtZWJvYXJkJ1xuICAgICAgICApO1xuICAgICAgICByZW5kZXJlci5yZW5kZXJHYW1lYm9hcmQocGxheWVyLCBwb3BVcEdhbWVib2FyZCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGFwcGVuZEF2YWlsYWJsZVNoaXBzID0gKHJlbmRlcmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IGF2YWlsYWJsZVNoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcC1VcC1BdmFpbGFibGVTaGlwcycpO1xuICAgICAgICByZW5kZXJlci5yZW5kZXJBdmFpbGFibGVTaGlwcyhwbGF5ZXIsIGF2YWlsYWJsZVNoaXBzKVxuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzaG93LFxuICAgICAgICBvblJhbmRvbUJ1dHRvbixcbiAgICAgICAgb25GaW5pc2hCdXR0b24sXG4gICAgICAgIG9uUmVzZXRCdXR0b24sXG4gICAgICAgIGFwcGVuZEdhbWVib2FyZCxcbiAgICAgICAgYXBwZW5kQXZhaWxhYmxlU2hpcHNcbiAgICB9O1xufTtcblxuZXhwb3J0IHsgcGxhY2VtZW50U2NyZWVuRmFjdG9yeSB9O1xuIiwiY29uc3QgcGxheWVyRmFjdG9yeSA9IChuYW1lLCBnYW1lYm9hcmQsIGdhbWVib2FyZEVsZW1lbnQsIGlzQWkgPSBmYWxzZSkgPT4ge1xuICAgIGxldCBzZWxlY3RlZEVsZW1lbnQ7XG4gICAgY29uc3Qgc2VsZWN0ZWRPcmllbnRhdGlvbiA9ICdob3Jpem9udGFsJztcblxuICAgIGNvbnN0IG1ha2VNb3ZlID0gKGVuZW15UGxheWVyKSA9PiB7XG4gICAgICAgIGNvbnN0IHJhbmRvbVggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBnYW1lYm9hcmQubGVuZ3RoKTtcbiAgICAgICAgY29uc3QgcmFuZG9tWSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGdhbWVib2FyZC5sZW5ndGgpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZW5lbXlQbGF5ZXIuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2socmFuZG9tWCwgcmFuZG9tWSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBtYWtlTW92ZShlbmVteVBsYXllcik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgaXNBbGxTaGlwc1BsYWNlZCA9ICgpID0+IGdhbWVib2FyZC5hdmFpbGFibGVTaGlwcy5sZW5ndGggPD0gMDtcblxuICAgIGNvbnN0IGlzTG9zdCA9ICgpID0+IGdhbWVib2FyZC5pc0FsbFN1bmsoKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBuYW1lLFxuICAgICAgICBnYW1lYm9hcmQsXG4gICAgICAgIGlzQWksXG4gICAgICAgIG1ha2VNb3ZlLFxuICAgICAgICBpc0xvc3QsXG4gICAgICAgIGdhbWVib2FyZEVsZW1lbnQsXG4gICAgICAgIHNlbGVjdGVkRWxlbWVudCxcbiAgICAgICAgc2VsZWN0ZWRPcmllbnRhdGlvbixcbiAgICAgICAgaXNBbGxTaGlwc1BsYWNlZFxuICAgIH07XG59O1xuXG5leHBvcnQgeyBwbGF5ZXJGYWN0b3J5IH07XG4iLCJpbXBvcnQgeyBwbGFjZW1lbnRTY3JlZW5GYWN0b3J5IH0gZnJvbSAnLi9wbGFjZW1lbnRTY3JlZW5GYWN0b3J5JztcblxuY29uc3QgcmVuZGVyZXJGYWN0b3J5ID0gKHBsYXllciwgZW5lbXlQbGF5ZXIpID0+IHtcbiAgICBjb25zdCBwbGFjZW1lbnRTY3JlZW4gPSBwbGFjZW1lbnRTY3JlZW5GYWN0b3J5KHBsYXllcik7XG5cbiAgICBjb25zdCByZW5kZXJHYW1lYm9hcmQgPSAoXG4gICAgICAgIHBsYXllcixcbiAgICAgICAgdGFyZ2V0UGFyZW50ID0gcGxheWVyLmdhbWVib2FyZEVsZW1lbnRcbiAgICApID0+IHtcbiAgICAgICAgY29uc3QgY3JlYXRlQ29vcmRpbmF0ZUNvbHVtbiA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld0NvbHVtbkVsZW1lbnQgPSBjcmVhdGVDb2x1bW4oKTtcbiAgICAgICAgICAgIGxldCBuZXdDZWxsRWxlbWVudDtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAtMTsgaSA8IHBsYXllci5nYW1lYm9hcmQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBpZiAoaSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3Q2VsbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgbmV3Q2VsbEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnY2VsbCcpO1xuICAgICAgICAgICAgICAgICAgICBuZXdDZWxsRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdudWxsJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3Q2VsbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgbmV3Q2VsbEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnY2VsbCcpO1xuICAgICAgICAgICAgICAgICAgICBuZXdDZWxsRWxlbWVudC50ZXh0Q29udGVudCA9IGAke2kgKyAxfWA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5ld0NvbHVtbkVsZW1lbnQuYXBwZW5kQ2hpbGQobmV3Q2VsbEVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbmV3Q29sdW1uRWxlbWVudDtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBjcmVhdGVDb2x1bW4gPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdDb2x1bW5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBuZXdDb2x1bW5FbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ2NvbHVtbicpO1xuXG4gICAgICAgICAgICByZXR1cm4gbmV3Q29sdW1uRWxlbWVudDtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBjcmVhdGVBbHBoYWJldENlbGwgPSAobGV0dGVyKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjaGFyY29kZSA9IDY1ICsgTnVtYmVyKGxldHRlcik7XG4gICAgICAgICAgICBjb25zdCBjaGFyID0gU3RyaW5nLmZyb21DaGFyQ29kZShjaGFyY29kZSk7XG4gICAgICAgICAgICBjb25zdCBuZXdDZWxsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbmV3Q2VsbEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnY2VsbCcpO1xuICAgICAgICAgICAgbmV3Q2VsbEVsZW1lbnQudGV4dENvbnRlbnQgPSBjaGFyO1xuXG4gICAgICAgICAgICByZXR1cm4gbmV3Q2VsbEVsZW1lbnQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgY3JlYXRlR2FtZWJvYXJkQ2VsbCA9ICh4LCB5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjZWxsID0gcGxheWVyLmdhbWVib2FyZC5jZWxsc1t4XVt5XTtcblxuICAgICAgICAgICAgY29uc3QgbmV3Q2VsbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIG5ld0NlbGxFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ2NlbGwnKTtcblxuICAgICAgICAgICAgaWYgKHBsYXllci5nYW1lYm9hcmQuaXNDZWxsSGl0KHgsIHkpKSB7XG4gICAgICAgICAgICAgICAgbmV3Q2VsbEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnaGl0Jyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjZWxsID09PSAwKSB7XG4gICAgICAgICAgICAgICAgLy8gbmV3Q2VsbEVsZW1lbnQudGV4dENvbnRlbnQgPSAwO1xuICAgICAgICAgICAgICAgIG5ld0NlbGxFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ2VtcHR5Jyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5ld0NlbGxFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ3NoaXAnKTtcblxuICAgICAgICAgICAgICAgIGlmIChjZWxsLmlzU3VuaygpKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld0NlbGxFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ3N1bmsnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBuZXdDZWxsRWxlbWVudDtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gUmVuZGVycyBnYW1lYm9hcmQgYW5kIGFwcGVuZHMgdG8gdGFyZ2V0IGVsZW1lbnRcbiAgICAgICAgdGFyZ2V0UGFyZW50LnRleHRDb250ZW50ID0gJyc7XG5cbiAgICAgICAgbGV0IGNvbHVtbkVsZW1lbnQ7XG4gICAgICAgIGxldCBjZWxsRWxlbWVudDtcblxuICAgICAgICBmb3IgKGxldCB4ID0gLTE7IHggPCBwbGF5ZXIuZ2FtZWJvYXJkLmNlbGxzLmxlbmd0aDsgeCArPSAxKSB7XG4gICAgICAgICAgICAvLyBJZiBpdCBpcyBhIGZpcnN0IGNvbHVtbiwgd2UgY3JlYXRlIGNvb3JkaW5hdGUgY29sdW1uXG4gICAgICAgICAgICBpZiAoeCA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBjb2x1bW5FbGVtZW50ID0gY3JlYXRlQ29vcmRpbmF0ZUNvbHVtbigpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBFbHNlIHdlIGNyZWF0ZSB1c3VhbCBjb2x1bW4gYW5kIHBvcHVsYXRlIGl0XG4gICAgICAgICAgICAgICAgY29sdW1uRWxlbWVudCA9IGNyZWF0ZUNvbHVtbigpO1xuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgeSA9IC0xOyB5IDwgcGxheWVyLmdhbWVib2FyZC5jZWxscy5sZW5ndGg7IHkgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBGaXJzdCByb3cgd2lsbCBnZXQgYSBsZXR0ZXJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsRWxlbWVudCA9IGNyZWF0ZUFscGhhYmV0Q2VsbCh4KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGxFbGVtZW50ID0gY3JlYXRlR2FtZWJvYXJkQ2VsbCh4LCB5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5FbGVtZW50LmFwcGVuZENoaWxkKGNlbGxFbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0YXJnZXRQYXJlbnQuYXBwZW5kQ2hpbGQoY29sdW1uRWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgbGlzdGVuRm9yU2hpcFBsYWNlbWVudChwbGF5ZXIsIHRhcmdldFBhcmVudCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJ1bkF0dGFja0xvb3AgPSAoZGVmZW5kaW5nUGxheWVyLCBhdHRhY2tpbmdQbGF5ZXIpID0+IHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZGVmZW5kaW5nUGxheWVyLmdhbWVib2FyZEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGNvbHVtbnMgPSB0YXJnZXQuY2hpbGRyZW47XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sdW1ucy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgY29uc3QgY29sdW1uID0gY29sdW1uc1tpXTtcbiAgICAgICAgICAgIGNvbnN0IGNlbGxzID0gY29sdW1uLmNoaWxkcmVuO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjZWxscy5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICAgICAgICAgIGNlbGxzW2pdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWF0dGFja2luZ1BsYXllci5pc0FsbFNoaXBzUGxhY2VkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBQbGF5ZXIgJHthdHRhY2tpbmdQbGF5ZXIubmFtZX0gaGFzIG5vdCBmaW5pc2hlZCBwbGFjaW5nIHNoaXBzYFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBSZW1haW5pbmcgc2hpcHM6ICR7YXR0YWNraW5nUGxheWVyLmdhbWVib2FyZC5hdmFpbGFibGVTaGlwc31gXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIGkgLSAxLCBqIC0gMSBjb21wZW5zYXRpbmcgZm9yIENvb3JkaW5hdGVzKEEsQixDKSAoMSwyLDMpXG4gICAgICAgICAgICAgICAgICAgIGRlZmVuZGluZ1BsYXllci5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhpIC0gMSwgaiAtIDEpO1xuICAgICAgICAgICAgICAgICAgICByZW5kZXJHYW1lYm9hcmQoZGVmZW5kaW5nUGxheWVyKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZGVmZW5kaW5nUGxheWVyLmlzTG9zdCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgUGxheWVyICR7ZGVmZW5kaW5nUGxheWVyLm5hbWV9IGxvc2VzIWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5IC5tYWluJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHdpbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lubmVyLmNsYXNzTGlzdC5hZGQoJ3dpbm5lci1tZXNzYWdlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5uZXIudGV4dENvbnRlbnQgPSBgV2Ugd29uIHRoaXMgYmF0dGxlIWA7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHkuaW5zZXJ0QmVmb3JlKHdpbm5lciwgbWFpbik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBydW5BdHRhY2tMb29wKGRlZmVuZGluZ1BsYXllciwgYXR0YWNraW5nUGxheWVyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBBaSBtYWtlcyBhIG1vdmVcbiAgICAgICAgICAgICAgICAgICAgZGVmZW5kaW5nUGxheWVyLm1ha2VNb3ZlKGF0dGFja2luZ1BsYXllcik7XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlckdhbWVib2FyZChhdHRhY2tpbmdQbGF5ZXIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYXR0YWNraW5nUGxheWVyLmlzTG9zdCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgUGxheWVyICR7YXR0YWNraW5nUGxheWVyLm5hbWV9IGxvc2VzIWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5IC5tYWluJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHdpbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lubmVyLmNsYXNzTGlzdC5hZGQoJ3dpbm5lci1tZXNzYWdlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5uZXIudGV4dENvbnRlbnQgPSBgUGxheWVyICR7ZGVmZW5kaW5nUGxheWVyLm5hbWV9IHdvbiB0aGlzIGJhdHRsZSFgO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5Lmluc2VydEJlZm9yZSh3aW5uZXIsIG1haW4pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgcmVuZGVyQXZhaWxhYmxlU2hpcHMgPSAoXG4gICAgICAgIHBsYXllcixcbiAgICAgICAgdGFyZ2V0UGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcC1VcC1BdmFpbGFibGVTaGlwcycpXG4gICAgKSA9PiB7XG4gICAgICAgIHRhcmdldFBhcmVudC50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgICAgIGNvbnN0IGNyZWF0ZU1lc3NhZ2UgPSAodGV4dCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbWVzc2FnZS50ZXh0Q29udGVudCA9IGAke3RleHR9YDtcbiAgICAgICAgICAgIHJldHVybiBtZXNzYWdlO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGNyZWF0ZU9yaWVudGF0aW9uQnV0dG9uID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3JpZW50YXRpb25CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIG9yaWVudGF0aW9uQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi1vcmllbnRhdGlvbicpO1xuICAgICAgICAgICAgb3JpZW50YXRpb25CdXR0b24udGV4dENvbnRlbnQgPSBwbGF5ZXIuc2VsZWN0ZWRPcmllbnRhdGlvbjtcblxuICAgICAgICAgICAgb3JpZW50YXRpb25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHBsYXllci5zZWxlY3RlZE9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyLnNlbGVjdGVkT3JpZW50YXRpb24gPSAndmVydGljYWwnO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBsYXllci5zZWxlY3RlZE9yaWVudGF0aW9uID0gJ2hvcml6b250YWwnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwbGF5ZXIuc2VsZWN0ZWRFbGVtZW50ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIHJlbmRlckF2YWlsYWJsZVNoaXBzKHBsYXllcik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIG9yaWVudGF0aW9uQnV0dG9uO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHJlbmRlclVudXNlZFNoaXBzID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnc2hpcHMtdG8tcGxhY2UnKTtcbiAgICAgICAgICAgIHRhcmdldFBhcmVudC5hcHBlbmRDaGlsZCh0YXJnZXQpO1xuXG4gICAgICAgICAgICB0YXJnZXQudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCd2ZXJ0aWNhbCcpO1xuICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2hvcml6b250YWwnKTtcbiAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKGAke3BsYXllci5zZWxlY3RlZE9yaWVudGF0aW9ufWApO1xuXG4gICAgICAgICAgICBjb25zdCB7IGF2YWlsYWJsZVNoaXBzIH0gPSBwbGF5ZXIuZ2FtZWJvYXJkO1xuICAgICAgICAgICAgYXZhaWxhYmxlU2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHdob2xlU2hpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHdob2xlU2hpcC5jbGFzc0xpc3QudG9nZ2xlKCdzaGlwLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgICAgIHdob2xlU2hpcC5zZXRBdHRyaWJ1dGUoJ2xlbmd0aCcsIGAke3NoaXB9YCk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFydE9mU2hpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBwYXJ0T2ZTaGlwLmNsYXNzTGlzdC50b2dnbGUoJ2F2YWlsYWJsZScpO1xuICAgICAgICAgICAgICAgICAgICBwYXJ0T2ZTaGlwLmNsYXNzTGlzdC50b2dnbGUoJ2NlbGwnKTtcbiAgICAgICAgICAgICAgICAgICAgd2hvbGVTaGlwLmFwcGVuZENoaWxkKHBhcnRPZlNoaXApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0YXJnZXQuYXBwZW5kQ2hpbGQod2hvbGVTaGlwKTtcblxuICAgICAgICAgICAgICAgIHdob2xlU2hpcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBsYXllci5zZWxlY3RlZEVsZW1lbnQgIT09IHdob2xlU2hpcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXJnZXQuY2hpbGRyZW4ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQuY2hpbGRyZW5baV0uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5zZWxlY3RlZEVsZW1lbnQgPSB3aG9sZVNoaXA7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aG9sZVNoaXAuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5zZWxlY3RlZEVsZW1lbnQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aG9sZVNoaXAuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgY29sb3JGaW5pc2hCdXR0b24gPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmaW5pc2hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLWZpbmlzaCcpO1xuICAgICAgICAgICAgaWYgKGZpbmlzaEJ1dHRvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgZmluaXNoQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2dyYXllZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHJlbmRlclJlYWR5TWVzc2FnZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJpZ2h0U2lkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgJy5tYWluIC5wb3AtVXAtQXZhaWxhYmxlU2hpcHMnXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmlnaHRTaWRlLmNsYXNzTGlzdC5hZGQoJ3JlYWR5LW1lc3NhZ2UnKTtcbiAgICAgICAgICAgIHJpZ2h0U2lkZS50ZXh0Q29udGVudCA9ICdZb3VyIGZsZWV0IGlzIHJlYWR5IGZvciBiYXR0bGUhJztcbiAgICAgICAgfTtcbiAgICAgICAgLy8gTWVzc2FnZSBhYm92ZSBvcmllbnRhdGlvbiBjaGFuZ2UgYnV0dG9uXG4gICAgICAgIHRhcmdldFBhcmVudC5hcHBlbmRDaGlsZChjcmVhdGVNZXNzYWdlKCdBdmFpbGFibGUgc2hpcHMnKSk7XG5cbiAgICAgICAgLy8gQ2hhbmdlIG9yaWVudGF0aW9uIGJ1dHRvbiBhbmQgaXRzIGxvZ2ljXG4gICAgICAgIHRhcmdldFBhcmVudC5hcHBlbmRDaGlsZChjcmVhdGVPcmllbnRhdGlvbkJ1dHRvbigpKTtcblxuICAgICAgICAvLyBSZW5kZXJpbmcgc2hpcHMgdW5kZXIgY2hhbmdlIG9yaWVudGF0aW9uIGJ1dHRvblxuICAgICAgICByZW5kZXJVbnVzZWRTaGlwcygpO1xuXG4gICAgICAgIGlmIChwbGF5ZXIuZ2FtZWJvYXJkLmF2YWlsYWJsZVNoaXBzLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgICBjb2xvckZpbmlzaEJ1dHRvbigpO1xuICAgICAgICAgICAgcmVuZGVyUmVhZHlNZXNzYWdlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgbGlzdGVuRm9yU2hpcFBsYWNlbWVudCA9IChcbiAgICAgICAgcGxheWVyLFxuICAgICAgICB0YXJnZXRQYXJlbnQgPSBwbGF5ZXIuZ2FtZWJvYXJkRWxlbWVudFxuICAgICkgPT4ge1xuICAgICAgICBjb25zdCBjb2x1bW5zID0gdGFyZ2V0UGFyZW50LmNoaWxkcmVuO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbHVtbnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbHVtbiA9IGNvbHVtbnNbaV07XG4gICAgICAgICAgICBjb25zdCBjZWxscyA9IGNvbHVtbi5jaGlsZHJlbjtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY2VsbHMubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgICAgICAgICBjZWxsc1tqXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBsYXllci5zZWxlY3RlZEVsZW1lbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2hpcExlbmd0aCA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyLnNlbGVjdGVkRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2xlbmd0aCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc2hpcExlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhpLCBqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGkgLSAxLCBqIC0gMSBkdWUgdG8gaGF2aW5nIGNvb3JkaW5hdGUgKEEsQixDLi4uKSwgKDEsIDIsIDMuLi4pXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpIC0gMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqIC0gMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwTGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5zZWxlY3RlZE9yaWVudGF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVtb3ZlSW5kZXggPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5nYW1lYm9hcmQuYXZhaWxhYmxlU2hpcHMuaW5kZXhPZihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVyKHNoaXBMZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5nYW1lYm9hcmQucmVtb3ZlQXZhaWxhYmxlU2hpcChyZW1vdmVJbmRleCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckdhbWVib2FyZChwbGF5ZXIsIHRhcmdldFBhcmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJBdmFpbGFibGVTaGlwcyhwbGF5ZXIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiB7XG4gICAgICAgIHJlbmRlckdhbWVib2FyZCxcbiAgICAgICAgcnVuQXR0YWNrTG9vcCxcbiAgICAgICAgcmVuZGVyQXZhaWxhYmxlU2hpcHMsXG4gICAgICAgIGxpc3RlbkZvclNoaXBQbGFjZW1lbnQsXG4gICAgICAgIHBsYWNlbWVudFNjcmVlblxuICAgIH07XG59O1xuXG5leHBvcnQgeyByZW5kZXJlckZhY3RvcnkgfTtcbiIsImNvbnN0IHNoaXBGYWN0b3J5ID0gKGxlbmd0aCkgPT4ge1xuICAgIGxldCBoaXRDb3VudCA9IDA7XG4gICAgY29uc3QgaGl0ID0gKCkgPT4ge1xuICAgICAgICBoaXRDb3VudCArPSAxO1xuICAgIH07XG4gICAgY29uc3QgaXNTdW5rID0gKCkgPT4gaGl0Q291bnQgPj0gbGVuZ3RoO1xuICAgIHJldHVybiB7IGhpdCwgaXNTdW5rIH07XG59O1xuXG5leHBvcnQgeyBzaGlwRmFjdG9yeSB9O1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBnYW1lbG9vcCB9IGZyb20gJy4vZ2FtZUxvb3AuanMnO1xuXG5jb25zb2xlLmxvZygnU2NyaXB0cyBhcmUgd29ya2luZycpO1xuXG5nYW1lbG9vcCg3KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==