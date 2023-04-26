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
___CSS_LOADER_EXPORT___.push([module.id, "html {\n  box-sizing: border-box;\n  font-family: Roboto, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\n\n.hello {\n    color: red;\n}\n\nbody {\n  background-image: linear-gradient();\n}\n\n.main {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n}\n\n.gameboard {\n  display: flex;\n  flex-direction: row;\n}\n\n.column {\n  display: flex;\n  flex-direction: column;\n}\n\n.gameboard-enemy {\n  display: grid;\n  grid: 1fr 1fr 1fr 1fr 1fr 1fr/1fr 1fr 1fr 1fr 1fr 1fr;\n}\n\n.header {\n  text-align: center;\n  font-size: 2rem;\n}\n\n.your-side,\n.enemy-side {\n  margin:2rem;\n}\n\n.cell {\n  width: 3rem;\n  height: 3rem;\n  --rgb: 250, 215, 170;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.cell.ship {\n  --rgb: 27, 133, 137;\n  /*background-color: rgb(var(--rgb));*/\n}\n\n.cell.ship.hit {\n  --rgb: 95, 110, 160;\n  /*background-color: rgb(var(--rgb));*/\n}\n\n.cell.hit {\n  --rgb: 229, 112, 112;\n  /*background-color: rgb(var(--rgb));*/\n  \n}\n\n.cell.ship.hit.sunk {\n  --rgb: 110, 94, 94;\n  /*background-color: rgb(var(--rgb));*/\n}\n\n.cell.hit::before {\n  content: '•';\n  font-size: 2em;\n}\n\n.cell.ship::before {\n  content: '';\n}\n\n.cell.ship.hit::before {\n  content: 'X';\n}\n\nbutton.cell {\n  box-shadow: 2px 2px 2px 1px rgba(128, 128, 128, 0.068);\n  color: black;\n  text-decoration: none;\n  --alpha: 0.8;\n  background-color: rgba(var(--rgb), var(--alpha));\n  cursor: crosshair;\n}\n\n.gameboard-self button {\n  cursor: auto;\n}\n\nbutton.cell:hover {\n  --alpha: 1;\n}\n\nbutton.cell.empty:not(.hit):hover {\n  --rgb: 216, 185, 145;\n}\n\nbutton.cell.empty.hit:hover {\n  --rgb: 199, 95, 95;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,8DAA8D;AAChE;AACA;;;EAGE,mBAAmB;AACrB;;AAEA;IACI,UAAU;AACd;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,qDAAqD;AACvD;;AAEA;EACE,kBAAkB;EAClB,eAAe;AACjB;;AAEA;;EAEE,WAAW;AACb;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,oBAAoB;EACpB,kBAAkB;EAClB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,qCAAqC;AACvC;;AAEA;EACE,mBAAmB;EACnB,qCAAqC;AACvC;;AAEA;EACE,oBAAoB;EACpB,qCAAqC;;AAEvC;;AAEA;EACE,kBAAkB;EAClB,qCAAqC;AACvC;;AAEA;EACE,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,sDAAsD;EACtD,YAAY;EACZ,qBAAqB;EACrB,YAAY;EACZ,gDAAgD;EAChD,iBAAiB;AACnB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,kBAAkB;AACpB","sourcesContent":["html {\n  box-sizing: border-box;\n  font-family: Roboto, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\n\n.hello {\n    color: red;\n}\n\nbody {\n  background-image: linear-gradient();\n}\n\n.main {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n}\n\n.gameboard {\n  display: flex;\n  flex-direction: row;\n}\n\n.column {\n  display: flex;\n  flex-direction: column;\n}\n\n.gameboard-enemy {\n  display: grid;\n  grid: 1fr 1fr 1fr 1fr 1fr 1fr/1fr 1fr 1fr 1fr 1fr 1fr;\n}\n\n.header {\n  text-align: center;\n  font-size: 2rem;\n}\n\n.your-side,\n.enemy-side {\n  margin:2rem;\n}\n\n.cell {\n  width: 3rem;\n  height: 3rem;\n  --rgb: 250, 215, 170;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.cell.ship {\n  --rgb: 27, 133, 137;\n  /*background-color: rgb(var(--rgb));*/\n}\n\n.cell.ship.hit {\n  --rgb: 95, 110, 160;\n  /*background-color: rgb(var(--rgb));*/\n}\n\n.cell.hit {\n  --rgb: 229, 112, 112;\n  /*background-color: rgb(var(--rgb));*/\n  \n}\n\n.cell.ship.hit.sunk {\n  --rgb: 110, 94, 94;\n  /*background-color: rgb(var(--rgb));*/\n}\n\n.cell.hit::before {\n  content: '•';\n  font-size: 2em;\n}\n\n.cell.ship::before {\n  content: '';\n}\n\n.cell.ship.hit::before {\n  content: 'X';\n}\n\nbutton.cell {\n  box-shadow: 2px 2px 2px 1px rgba(128, 128, 128, 0.068);\n  color: black;\n  text-decoration: none;\n  --alpha: 0.8;\n  background-color: rgba(var(--rgb), var(--alpha));\n  cursor: crosshair;\n}\n\n.gameboard-self button {\n  cursor: auto;\n}\n\nbutton.cell:hover {\n  --alpha: 1;\n}\n\nbutton.cell.empty:not(.hit):hover {\n  --rgb: 216, 185, 145;\n}\n\nbutton.cell.empty.hit:hover {\n  --rgb: 199, 95, 95;\n}"],"sourceRoot":""}]);
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
    const player1 = (0,_playerFactory__WEBPACK_IMPORTED_MODULE_0__.playerFactory)('Me', gameboard1, target);
    player1.gameboard.placeShip(0, 0, 2, 'horizontal');
    player1.gameboard.placeShip(2, 2, 3, 'horizontal');
    player1.gameboard.placeShip(1, 3, 2, 'vertical');
    player1.gameboard.receiveAttack(2, 0);
    player1.gameboard.receiveAttack(2, 2);

    _renderer__WEBPACK_IMPORTED_MODULE_3__.renderer.renderGameboard(player1);

    const gameboard2 = (0,_gameboardFactory__WEBPACK_IMPORTED_MODULE_2__.gameboardFactory)(gameboardLength);
    target = document.querySelector('.gameboard-enemy');
    const player2 = (0,_playerFactory__WEBPACK_IMPORTED_MODULE_0__.playerFactory)('Computer', gameboard2, target, true);
    player2.gameboard.placeShip(1, 0, 2, 'horizontal');
    player2.gameboard.placeShip(1, 2, 3, 'vertical');
    player2.gameboard.placeShip(3, 4, 2, 'horizontal');
    player2.gameboard.receiveAttack(2, 0);
    player2.gameboard.receiveAttack(1, 0);
    player2.gameboard.receiveAttack(2, 2);

    _renderer__WEBPACK_IMPORTED_MODULE_3__.renderer.renderGameboard(player2);
    _renderer__WEBPACK_IMPORTED_MODULE_3__.renderer.addEventListenersToCells(player2, player1);
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


const gameboardFactory = (length) => {
    const cells = new Array(length);
    const missedShots = [];
    const accurateShots = [];
    let totalShipsLength = 0;

    // Create double array
    for (let i = 0; i < length; i += 1) {
        cells[i] = new Array(length);
    }

    // Populate double array with 0
    for (let i = 0; i < length; i += 1) {
        for (let j = 0; j < length; j += 1) {
            cells[i][j] = 0;
        }
    }

    const placeShip = (x, y, shipLength, orientation) => {
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
            if (y + shipLength > length) {
                throw new Error('Out of bounds: vertical');
            }
            for (let i = 0; i < shipLength; i += 1) {
                cells[x][y + i] = ship;
            }
            totalShipsLength += shipLength;
        } else if (orientation === 'horizontal') {
            if (x + shipLength > length) {
                throw new Error('Out of bounds: horizontal');
            }
            for (let i = 0; i < shipLength; i += 1) {
                cells[x + i][y] = ship;
            }
            totalShipsLength += shipLength;
        }
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
            console.log('Missed shot!');
            missedShots.push([x, y]);
        } else {
            console.log('Accurate shot!');
            cells[x][y].hit();
            accurateShots.push([x, y]);
        }
        return isAllSunk();
    };

    const isAllSunk = () => accurateShots.length >= totalShipsLength;

    return {
        cells,
        receiveAttack,
        isAllSunk,
        placeShip,
        length,
        missedShots,
        accurateShots,
        isCellHit
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
    const makeMove = (enemyPlayer) => {
        const randomX = Math.floor(Math.random() * gameboard.length);
        const randomY = Math.floor(Math.random() * gameboard.length);
        try {
            enemyPlayer.gameboard.receiveAttack(randomX, randomY);
        } catch (error) {
            makeMove(enemyPlayer);
        }
    };

    const isLost = () => gameboard.isAllSunk();
    return { name, gameboard, isAi, makeMove, isLost, gameboardElement };
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
/* harmony import */ var _shipFactory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipFactory.js */ "./src/shipFactory.js");
/* harmony import */ var _gameboardFactory_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboardFactory.js */ "./src/gameboardFactory.js");



const renderer = (() => {
    const renderGameboard = (player) => {
        // Renders gameboard and appends to target element
        const targetParent = player.gameboardElement;
        targetParent.textContent = '';
        let x = 0;
        player.gameboard.cells.forEach((column) => {
            let y = 0;
            const columnElement = document.createElement('div');
            columnElement.classList.toggle('column');
            column.forEach((cell) => {
                const cellElement = document.createElement('button');
                cellElement.classList.toggle('cell');
                // If cell was hit before, we will style it appropriately
                if (player.gameboard.isCellHit(x, y)) {
                    cellElement.classList.toggle('hit');
                }

                if (cell === 0) {
                    // cellElement.textContent = 0;
                    cellElement.classList.toggle('empty');
                } else {
                    cellElement.classList.toggle('ship');
                    if (player.gameboard.cells[x][y].isSunk()) {
                        cellElement.classList.toggle('sunk');
                    }
                }
                columnElement.appendChild(cellElement);
                y += 1;
            });
            x += 1;
            targetParent.appendChild(columnElement);
        });
    };

    const addEventListenersToCells = (player, enemyPlayer) => {
        const target = player.gameboardElement;
        const targetChildren = target.children;
        for (let i = 0; i < targetChildren.length; i += 1) {
            const column = targetChildren[i];
            const columnChildren = column.children;
            for (let j = 0; j < columnChildren.length; j += 1) {
                columnChildren[j].addEventListener('click', () => {
                    player.gameboard.receiveAttack(i,j);
                    if (player.isLost()) {
                        console.log(`Player ${player.name} loses!`);
                    }
                    renderGameboard(player);
                    addEventListenersToCells(player, enemyPlayer);
                    // Ai makes a move
                    player.makeMove(enemyPlayer);
                    renderGameboard(enemyPlayer);
                });
            }
        }
    };
    return {
        renderGameboard,
        addEventListenersToCells
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
/* harmony import */ var _shipFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shipFactory */ "./src/shipFactory.js");
/* harmony import */ var _gameboardFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameboardFactory */ "./src/gameboardFactory.js");
/* harmony import */ var _playerFactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./playerFactory */ "./src/playerFactory.js");
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./renderer */ "./src/renderer.js");
/* harmony import */ var _gameLoop_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gameLoop.js */ "./src/gameLoop.js");







console.log('Scripts are working');

(0,_gameLoop_js__WEBPACK_IMPORTED_MODULE_5__.gameloop)(6);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7VUMxQjdFO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUN1QjtBQUNVO0FBQ047QUFDVjtBQUNHOztBQUV6Qzs7QUFFQSxzREFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9nYW1lTG9vcC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvcGxheWVyRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvcmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL3NoaXBGYWN0b3J5LmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogUm9ib3RvLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG59XFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG59XFxuXFxuLmhlbGxvIHtcXG4gICAgY29sb3I6IHJlZDtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoKTtcXG59XFxuXFxuLm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLmdhbWVib2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuLmNvbHVtbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmdhbWVib2FyZC1lbmVteSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZDogMWZyIDFmciAxZnIgMWZyIDFmciAxZnIvMWZyIDFmciAxZnIgMWZyIDFmciAxZnI7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4ueW91ci1zaWRlLFxcbi5lbmVteS1zaWRlIHtcXG4gIG1hcmdpbjoycmVtO1xcbn1cXG5cXG4uY2VsbCB7XFxuICB3aWR0aDogM3JlbTtcXG4gIGhlaWdodDogM3JlbTtcXG4gIC0tcmdiOiAyNTAsIDIxNSwgMTcwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNlbGwuc2hpcCB7XFxuICAtLXJnYjogMjcsIDEzMywgMTM3O1xcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiByZ2IodmFyKC0tcmdiKSk7Ki9cXG59XFxuXFxuLmNlbGwuc2hpcC5oaXQge1xcbiAgLS1yZ2I6IDk1LCAxMTAsIDE2MDtcXG4gIC8qYmFja2dyb3VuZC1jb2xvcjogcmdiKHZhcigtLXJnYikpOyovXFxufVxcblxcbi5jZWxsLmhpdCB7XFxuICAtLXJnYjogMjI5LCAxMTIsIDExMjtcXG4gIC8qYmFja2dyb3VuZC1jb2xvcjogcmdiKHZhcigtLXJnYikpOyovXFxuICBcXG59XFxuXFxuLmNlbGwuc2hpcC5oaXQuc3VuayB7XFxuICAtLXJnYjogMTEwLCA5NCwgOTQ7XFxuICAvKmJhY2tncm91bmQtY29sb3I6IHJnYih2YXIoLS1yZ2IpKTsqL1xcbn1cXG5cXG4uY2VsbC5oaXQ6OmJlZm9yZSB7XFxuICBjb250ZW50OiAn4oCiJztcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbn1cXG5cXG4uY2VsbC5zaGlwOjpiZWZvcmUge1xcbiAgY29udGVudDogJyc7XFxufVxcblxcbi5jZWxsLnNoaXAuaGl0OjpiZWZvcmUge1xcbiAgY29udGVudDogJ1gnO1xcbn1cXG5cXG5idXR0b24uY2VsbCB7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDJweCAxcHggcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjA2OCk7XFxuICBjb2xvcjogYmxhY2s7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAtLWFscGhhOiAwLjg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXJnYiksIHZhcigtLWFscGhhKSk7XFxuICBjdXJzb3I6IGNyb3NzaGFpcjtcXG59XFxuXFxuLmdhbWVib2FyZC1zZWxmIGJ1dHRvbiB7XFxuICBjdXJzb3I6IGF1dG87XFxufVxcblxcbmJ1dHRvbi5jZWxsOmhvdmVyIHtcXG4gIC0tYWxwaGE6IDE7XFxufVxcblxcbmJ1dHRvbi5jZWxsLmVtcHR5Om5vdCguaGl0KTpob3ZlciB7XFxuICAtLXJnYjogMjE2LCAxODUsIDE0NTtcXG59XFxuXFxuYnV0dG9uLmNlbGwuZW1wdHkuaGl0OmhvdmVyIHtcXG4gIC0tcmdiOiAxOTksIDk1LCA5NTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtFQUN0Qiw4REFBOEQ7QUFDaEU7QUFDQTs7O0VBR0UsbUJBQW1CO0FBQ3JCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0VBQ0UsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixxREFBcUQ7QUFDdkQ7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTs7RUFFRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixxQ0FBcUM7O0FBRXZDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usc0RBQXNEO0VBQ3RELFlBQVk7RUFDWixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGdEQUFnRDtFQUNoRCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxufVxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcblxcbi5oZWxsbyB7XFxuICAgIGNvbG9yOiByZWQ7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCk7XFxufVxcblxcbi5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5nYW1lYm9hcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi5jb2x1bW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5nYW1lYm9hcmQtZW5lbXkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQ6IDFmciAxZnIgMWZyIDFmciAxZnIgMWZyLzFmciAxZnIgMWZyIDFmciAxZnIgMWZyO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLnlvdXItc2lkZSxcXG4uZW5lbXktc2lkZSB7XFxuICBtYXJnaW46MnJlbTtcXG59XFxuXFxuLmNlbGwge1xcbiAgd2lkdGg6IDNyZW07XFxuICBoZWlnaHQ6IDNyZW07XFxuICAtLXJnYjogMjUwLCAyMTUsIDE3MDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jZWxsLnNoaXAge1xcbiAgLS1yZ2I6IDI3LCAxMzMsIDEzNztcXG4gIC8qYmFja2dyb3VuZC1jb2xvcjogcmdiKHZhcigtLXJnYikpOyovXFxufVxcblxcbi5jZWxsLnNoaXAuaGl0IHtcXG4gIC0tcmdiOiA5NSwgMTEwLCAxNjA7XFxuICAvKmJhY2tncm91bmQtY29sb3I6IHJnYih2YXIoLS1yZ2IpKTsqL1xcbn1cXG5cXG4uY2VsbC5oaXQge1xcbiAgLS1yZ2I6IDIyOSwgMTEyLCAxMTI7XFxuICAvKmJhY2tncm91bmQtY29sb3I6IHJnYih2YXIoLS1yZ2IpKTsqL1xcbiAgXFxufVxcblxcbi5jZWxsLnNoaXAuaGl0LnN1bmsge1xcbiAgLS1yZ2I6IDExMCwgOTQsIDk0O1xcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiByZ2IodmFyKC0tcmdiKSk7Ki9cXG59XFxuXFxuLmNlbGwuaGl0OjpiZWZvcmUge1xcbiAgY29udGVudDogJ+KAoic7XFxuICBmb250LXNpemU6IDJlbTtcXG59XFxuXFxuLmNlbGwuc2hpcDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbn1cXG5cXG4uY2VsbC5zaGlwLmhpdDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICdYJztcXG59XFxuXFxuYnV0dG9uLmNlbGwge1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCAycHggMXB4IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4wNjgpO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgLS1hbHBoYTogMC44O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1yZ2IpLCB2YXIoLS1hbHBoYSkpO1xcbiAgY3Vyc29yOiBjcm9zc2hhaXI7XFxufVxcblxcbi5nYW1lYm9hcmQtc2VsZiBidXR0b24ge1xcbiAgY3Vyc29yOiBhdXRvO1xcbn1cXG5cXG5idXR0b24uY2VsbDpob3ZlciB7XFxuICAtLWFscGhhOiAxO1xcbn1cXG5cXG5idXR0b24uY2VsbC5lbXB0eTpub3QoLmhpdCk6aG92ZXIge1xcbiAgLS1yZ2I6IDIxNiwgMTg1LCAxNDU7XFxufVxcblxcbmJ1dHRvbi5jZWxsLmVtcHR5LmhpdDpob3ZlciB7XFxuICAtLXJnYjogMTk5LCA5NSwgOTU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBwbGF5ZXJGYWN0b3J5IH0gZnJvbSAnLi9wbGF5ZXJGYWN0b3J5JztcbmltcG9ydCB7IHNoaXBGYWN0b3J5IH0gZnJvbSAnLi9zaGlwRmFjdG9yeSc7XG5pbXBvcnQgeyBnYW1lYm9hcmRGYWN0b3J5IH0gZnJvbSAnLi9nYW1lYm9hcmRGYWN0b3J5JztcbmltcG9ydCB7IHJlbmRlcmVyIH0gZnJvbSAnLi9yZW5kZXJlcic7XG5cbmZ1bmN0aW9uIGdhbWVsb29wKGdhbWVib2FyZExlbmd0aCkge1xuICAgIC8vIER1bW15IGRhdGFcbiAgICBjb25zdCBnYW1lYm9hcmQxID0gZ2FtZWJvYXJkRmFjdG9yeShnYW1lYm9hcmRMZW5ndGgpO1xuICAgIGxldCB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZWJvYXJkLXNlbGYnKTtcbiAgICBjb25zdCBwbGF5ZXIxID0gcGxheWVyRmFjdG9yeSgnTWUnLCBnYW1lYm9hcmQxLCB0YXJnZXQpO1xuICAgIHBsYXllcjEuZ2FtZWJvYXJkLnBsYWNlU2hpcCgwLCAwLCAyLCAnaG9yaXpvbnRhbCcpO1xuICAgIHBsYXllcjEuZ2FtZWJvYXJkLnBsYWNlU2hpcCgyLCAyLCAzLCAnaG9yaXpvbnRhbCcpO1xuICAgIHBsYXllcjEuZ2FtZWJvYXJkLnBsYWNlU2hpcCgxLCAzLCAyLCAndmVydGljYWwnKTtcbiAgICBwbGF5ZXIxLmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKDIsIDApO1xuICAgIHBsYXllcjEuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soMiwgMik7XG5cbiAgICByZW5kZXJlci5yZW5kZXJHYW1lYm9hcmQocGxheWVyMSk7XG5cbiAgICBjb25zdCBnYW1lYm9hcmQyID0gZ2FtZWJvYXJkRmFjdG9yeShnYW1lYm9hcmRMZW5ndGgpO1xuICAgIHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lYm9hcmQtZW5lbXknKTtcbiAgICBjb25zdCBwbGF5ZXIyID0gcGxheWVyRmFjdG9yeSgnQ29tcHV0ZXInLCBnYW1lYm9hcmQyLCB0YXJnZXQsIHRydWUpO1xuICAgIHBsYXllcjIuZ2FtZWJvYXJkLnBsYWNlU2hpcCgxLCAwLCAyLCAnaG9yaXpvbnRhbCcpO1xuICAgIHBsYXllcjIuZ2FtZWJvYXJkLnBsYWNlU2hpcCgxLCAyLCAzLCAndmVydGljYWwnKTtcbiAgICBwbGF5ZXIyLmdhbWVib2FyZC5wbGFjZVNoaXAoMywgNCwgMiwgJ2hvcml6b250YWwnKTtcbiAgICBwbGF5ZXIyLmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKDIsIDApO1xuICAgIHBsYXllcjIuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soMSwgMCk7XG4gICAgcGxheWVyMi5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjaygyLCAyKTtcblxuICAgIHJlbmRlcmVyLnJlbmRlckdhbWVib2FyZChwbGF5ZXIyKTtcbiAgICByZW5kZXJlci5hZGRFdmVudExpc3RlbmVyc1RvQ2VsbHMocGxheWVyMiwgcGxheWVyMSk7XG59XG5cbmV4cG9ydCB7IGdhbWVsb29wIH07XG4iLCJpbXBvcnQgeyBzaGlwRmFjdG9yeSB9IGZyb20gJy4vc2hpcEZhY3RvcnknO1xuXG5jb25zdCBnYW1lYm9hcmRGYWN0b3J5ID0gKGxlbmd0aCkgPT4ge1xuICAgIGNvbnN0IGNlbGxzID0gbmV3IEFycmF5KGxlbmd0aCk7XG4gICAgY29uc3QgbWlzc2VkU2hvdHMgPSBbXTtcbiAgICBjb25zdCBhY2N1cmF0ZVNob3RzID0gW107XG4gICAgbGV0IHRvdGFsU2hpcHNMZW5ndGggPSAwO1xuXG4gICAgLy8gQ3JlYXRlIGRvdWJsZSBhcnJheVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgY2VsbHNbaV0gPSBuZXcgQXJyYXkobGVuZ3RoKTtcbiAgICB9XG5cbiAgICAvLyBQb3B1bGF0ZSBkb3VibGUgYXJyYXkgd2l0aCAwXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgICAgICBjZWxsc1tpXVtqXSA9IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwbGFjZVNoaXAgPSAoeCwgeSwgc2hpcExlbmd0aCwgb3JpZW50YXRpb24pID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcCA9IHNoaXBGYWN0b3J5KHNoaXBMZW5ndGgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgaWYgKG9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNlbGxzW3hdW3kgKyBpXSAhPT0gdW5kZWZpbmVkICYmIGNlbGxzW3hdW3kgKyBpXSAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NoaXBzIGFyZSBvdmVybGFwcGluZycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2VsbHNbeCArIGldICE9PSB1bmRlZmluZWQgJiYgY2VsbHNbeCArIGldW3ldICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTaGlwcyBhcmUgb3ZlcmxhcHBpbmcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgICAgaWYgKHkgKyBzaGlwTGVuZ3RoID4gbGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdPdXQgb2YgYm91bmRzOiB2ZXJ0aWNhbCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBjZWxsc1t4XVt5ICsgaV0gPSBzaGlwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdG90YWxTaGlwc0xlbmd0aCArPSBzaGlwTGVuZ3RoO1xuICAgICAgICB9IGVsc2UgaWYgKG9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgIGlmICh4ICsgc2hpcExlbmd0aCA+IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignT3V0IG9mIGJvdW5kczogaG9yaXpvbnRhbCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBjZWxsc1t4ICsgaV1beV0gPSBzaGlwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdG90YWxTaGlwc0xlbmd0aCArPSBzaGlwTGVuZ3RoO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGlzQ2VsbEhpdCA9ICh4LCB5KSA9PiB7XG4gICAgICAgIGNvbnN0IGhpdCA9IFt4LCB5XTtcbiAgICAgICAgY29uc3QgbWlzc2VkU2hvdHNKc29uID0gSlNPTi5zdHJpbmdpZnkobWlzc2VkU2hvdHMpO1xuICAgICAgICBjb25zdCBhY2N1cmF0ZVNob3RzSnNvbiA9IEpTT04uc3RyaW5naWZ5KGFjY3VyYXRlU2hvdHMpO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIG1pc3NlZFNob3RzSnNvbi5pbmNsdWRlcyhoaXQpID09PSB0cnVlIHx8XG4gICAgICAgICAgICBhY2N1cmF0ZVNob3RzSnNvbi5pbmNsdWRlcyhoaXQpID09PSB0cnVlXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cbiAgICBjb25zdCByZWNlaXZlQXR0YWNrID0gKHgsIHkpID0+IHtcbiAgICAgICAgaWYgKGlzQ2VsbEhpdCh4LCB5KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW50IGhpdCBzYW1lIGNlbGwgdHdpY2UnKTtcbiAgICAgICAgfSBlbHNlIGlmIChjZWxsc1t4XVt5XSA9PT0gMCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ01pc3NlZCBzaG90IScpO1xuICAgICAgICAgICAgbWlzc2VkU2hvdHMucHVzaChbeCwgeV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0FjY3VyYXRlIHNob3QhJyk7XG4gICAgICAgICAgICBjZWxsc1t4XVt5XS5oaXQoKTtcbiAgICAgICAgICAgIGFjY3VyYXRlU2hvdHMucHVzaChbeCwgeV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpc0FsbFN1bmsoKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaXNBbGxTdW5rID0gKCkgPT4gYWNjdXJhdGVTaG90cy5sZW5ndGggPj0gdG90YWxTaGlwc0xlbmd0aDtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGNlbGxzLFxuICAgICAgICByZWNlaXZlQXR0YWNrLFxuICAgICAgICBpc0FsbFN1bmssXG4gICAgICAgIHBsYWNlU2hpcCxcbiAgICAgICAgbGVuZ3RoLFxuICAgICAgICBtaXNzZWRTaG90cyxcbiAgICAgICAgYWNjdXJhdGVTaG90cyxcbiAgICAgICAgaXNDZWxsSGl0XG4gICAgfTtcbn07XG5cbmV4cG9ydCB7IGdhbWVib2FyZEZhY3RvcnkgfTtcbiIsImNvbnN0IHBsYXllckZhY3RvcnkgPSAobmFtZSwgZ2FtZWJvYXJkLCBnYW1lYm9hcmRFbGVtZW50LCBpc0FpID0gZmFsc2UpID0+IHtcbiAgICBjb25zdCBtYWtlTW92ZSA9IChlbmVteVBsYXllcikgPT4ge1xuICAgICAgICBjb25zdCByYW5kb21YID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZ2FtZWJvYXJkLmxlbmd0aCk7XG4gICAgICAgIGNvbnN0IHJhbmRvbVkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBnYW1lYm9hcmQubGVuZ3RoKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGVuZW15UGxheWVyLmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHJhbmRvbVgsIHJhbmRvbVkpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgbWFrZU1vdmUoZW5lbXlQbGF5ZXIpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGlzTG9zdCA9ICgpID0+IGdhbWVib2FyZC5pc0FsbFN1bmsoKTtcbiAgICByZXR1cm4geyBuYW1lLCBnYW1lYm9hcmQsIGlzQWksIG1ha2VNb3ZlLCBpc0xvc3QsIGdhbWVib2FyZEVsZW1lbnQgfTtcbn07XG5cbmV4cG9ydCB7IHBsYXllckZhY3RvcnkgfTtcbiIsImltcG9ydCB7IHNoaXBGYWN0b3J5IH0gZnJvbSAnLi9zaGlwRmFjdG9yeS5qcyc7XG5pbXBvcnQgeyBnYW1lYm9hcmRGYWN0b3J5IH0gZnJvbSAnLi9nYW1lYm9hcmRGYWN0b3J5LmpzJztcblxuY29uc3QgcmVuZGVyZXIgPSAoKCkgPT4ge1xuICAgIGNvbnN0IHJlbmRlckdhbWVib2FyZCA9IChwbGF5ZXIpID0+IHtcbiAgICAgICAgLy8gUmVuZGVycyBnYW1lYm9hcmQgYW5kIGFwcGVuZHMgdG8gdGFyZ2V0IGVsZW1lbnRcbiAgICAgICAgY29uc3QgdGFyZ2V0UGFyZW50ID0gcGxheWVyLmdhbWVib2FyZEVsZW1lbnQ7XG4gICAgICAgIHRhcmdldFBhcmVudC50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICBsZXQgeCA9IDA7XG4gICAgICAgIHBsYXllci5nYW1lYm9hcmQuY2VsbHMuZm9yRWFjaCgoY29sdW1uKSA9PiB7XG4gICAgICAgICAgICBsZXQgeSA9IDA7XG4gICAgICAgICAgICBjb25zdCBjb2x1bW5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb2x1bW5FbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ2NvbHVtbicpO1xuICAgICAgICAgICAgY29sdW1uLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjZWxsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIGNlbGxFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ2NlbGwnKTtcbiAgICAgICAgICAgICAgICAvLyBJZiBjZWxsIHdhcyBoaXQgYmVmb3JlLCB3ZSB3aWxsIHN0eWxlIGl0IGFwcHJvcHJpYXRlbHlcbiAgICAgICAgICAgICAgICBpZiAocGxheWVyLmdhbWVib2FyZC5pc0NlbGxIaXQoeCwgeSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnaGl0Jyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGNlbGwgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2VsbEVsZW1lbnQudGV4dENvbnRlbnQgPSAwO1xuICAgICAgICAgICAgICAgICAgICBjZWxsRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdlbXB0eScpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGxFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ3NoaXAnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBsYXllci5nYW1lYm9hcmQuY2VsbHNbeF1beV0uaXNTdW5rKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGxFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ3N1bmsnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb2x1bW5FbGVtZW50LmFwcGVuZENoaWxkKGNlbGxFbGVtZW50KTtcbiAgICAgICAgICAgICAgICB5ICs9IDE7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHggKz0gMTtcbiAgICAgICAgICAgIHRhcmdldFBhcmVudC5hcHBlbmRDaGlsZChjb2x1bW5FbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGFkZEV2ZW50TGlzdGVuZXJzVG9DZWxscyA9IChwbGF5ZXIsIGVuZW15UGxheWVyKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IHBsYXllci5nYW1lYm9hcmRFbGVtZW50O1xuICAgICAgICBjb25zdCB0YXJnZXRDaGlsZHJlbiA9IHRhcmdldC5jaGlsZHJlbjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXJnZXRDaGlsZHJlbi5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgY29uc3QgY29sdW1uID0gdGFyZ2V0Q2hpbGRyZW5baV07XG4gICAgICAgICAgICBjb25zdCBjb2x1bW5DaGlsZHJlbiA9IGNvbHVtbi5jaGlsZHJlbjtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY29sdW1uQ2hpbGRyZW4ubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgICAgICAgICBjb2x1bW5DaGlsZHJlbltqXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyLmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKGksaik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIuaXNMb3N0KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBQbGF5ZXIgJHtwbGF5ZXIubmFtZX0gbG9zZXMhYCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyR2FtZWJvYXJkKHBsYXllcik7XG4gICAgICAgICAgICAgICAgICAgIGFkZEV2ZW50TGlzdGVuZXJzVG9DZWxscyhwbGF5ZXIsIGVuZW15UGxheWVyKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gQWkgbWFrZXMgYSBtb3ZlXG4gICAgICAgICAgICAgICAgICAgIHBsYXllci5tYWtlTW92ZShlbmVteVBsYXllcik7XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlckdhbWVib2FyZChlbmVteVBsYXllcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiB7XG4gICAgICAgIHJlbmRlckdhbWVib2FyZCxcbiAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcnNUb0NlbGxzXG4gICAgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IHJlbmRlcmVyIH07XG4iLCJjb25zdCBzaGlwRmFjdG9yeSA9IChsZW5ndGgpID0+IHtcbiAgICBsZXQgaGl0Q291bnQgPSAwO1xuICAgIGNvbnN0IGhpdCA9ICgpID0+IHtcbiAgICAgICAgaGl0Q291bnQgKz0gMTtcbiAgICB9O1xuICAgIGNvbnN0IGlzU3VuayA9ICgpID0+IGhpdENvdW50ID49IGxlbmd0aDtcbiAgICByZXR1cm4geyBoaXQsIGlzU3VuayB9O1xufTtcblxuZXhwb3J0IHsgc2hpcEZhY3RvcnkgfTtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgc2hpcEZhY3RvcnkgfSBmcm9tICcuL3NoaXBGYWN0b3J5JztcbmltcG9ydCB7IGdhbWVib2FyZEZhY3RvcnkgfSBmcm9tICcuL2dhbWVib2FyZEZhY3RvcnknO1xuaW1wb3J0IHsgcGxheWVyRmFjdG9yeSB9IGZyb20gJy4vcGxheWVyRmFjdG9yeSc7XG5pbXBvcnQgeyByZW5kZXJlciB9IGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IHsgZ2FtZWxvb3AgfSBmcm9tICcuL2dhbWVMb29wLmpzJztcblxuY29uc29sZS5sb2coJ1NjcmlwdHMgYXJlIHdvcmtpbmcnKTtcblxuZ2FtZWxvb3AoNik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=