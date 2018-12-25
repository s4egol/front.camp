(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./styles/article.css":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src!./styles/article.css ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./styles/core.css":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src!./styles/core.css ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./scripts/constants.js":
/*!******************************!*\
  !*** ./scripts/constants.js ***!
  \******************************/
/*! exports provided: API_KEY, API_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_KEY", function() { return API_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
var API_KEY = 'ff4e5fedad734d3ca5503f69725ea2ca';
var API_URL = 'https://newsapi.org/v1';

/***/ }),

/***/ "./scripts/dataLoader.js":
/*!*******************************!*\
  !*** ./scripts/dataLoader.js ***!
  \*******************************/
/*! exports provided: DataLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataLoader", function() { return DataLoader; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DataLoader =
/*#__PURE__*/
function () {
  function DataLoader(url) {
    _classCallCheck(this, DataLoader);

    this.url = url;
  }

  _createClass(DataLoader, [{
    key: "fetchAsync",
    value: function () {
      var _fetchAsync = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var response;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch(this.url);

              case 2:
                response = _context.sent;
                this.checkStatus(response);
                _context.next = 6;
                return response.json();

              case 6:
                return _context.abrupt("return", _context.sent);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function fetchAsync() {
        return _fetchAsync.apply(this, arguments);
      };
    }()
  }, {
    key: "checkStatus",
    value: function checkStatus(response) {
      if (response.ok) {
        return response;
      } else {
        var error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
    }
  }]);

  return DataLoader;
}();

/***/ }),

/***/ "./scripts/index.js":
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_core_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/core.css */ "./styles/core.css");
/* harmony import */ var _styles_core_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_core_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_article_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/article.css */ "./styles/article.css");
/* harmony import */ var _styles_article_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_article_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-polyfill */ "./node_modules/babel-polyfill/lib/index.js");
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_polyfill__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! whatwg-fetch */ "./node_modules/whatwg-fetch/fetch.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./scripts/constants.js");
/* harmony import */ var _dataLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dataLoader */ "./scripts/dataLoader.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }








var ContentManagment =
/*#__PURE__*/
function () {
  function ContentManagment() {
    _classCallCheck(this, ContentManagment);
  }

  _createClass(ContentManagment, [{
    key: "getSources",
    value: function () {
      var _getSources = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var _this = this;

        var data, sources, soursesMarkup;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return new _dataLoader__WEBPACK_IMPORTED_MODULE_5__["DataLoader"]("".concat(_constants__WEBPACK_IMPORTED_MODULE_4__["API_URL"], "/sources")).fetchAsync();

              case 2:
                data = _context.sent;
                sources = [];
                data.sources.forEach(function (source) {
                  sources.push({
                    id: source.id,
                    name: source.name,
                    url: source.url
                  });
                });
                soursesMarkup = sources.reduce(function (markup, current) {
                  return markup.concat("<div id=\"".concat(current.id, "\" class=\"news-container\"><img class=\"preview\" src=\"https://besticon-demo.herokuapp.com/icon?url=").concat(current.url, "&amp;size=70..120..200\">\n                <div class=\"title\"><a class=\"cursor\" id=\"\u0441ontentSource\"><strong>\"").concat(current.name, "\"</strong></a></div></div>"));
                }, '');
                document.getElementById("source-container").innerHTML = soursesMarkup;
                sources.forEach(function (source) {
                  document.getElementById(source.id).addEventListener('click', function () {
                    return _this.getContentSource(source.id);
                  });
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getSources() {
        return _getSources.apply(this, arguments);
      };
    }()
  }, {
    key: "getArticle",
    value: function () {
      var _getArticle = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(articleId) {
        var urlRequest, data, articles, articlesHTML;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                history.pushState({
                  articleId: articleId
                }, "Selected: ".concat(articleId), "#selected=".concat(articleId));
                urlRequest = "".concat(_constants__WEBPACK_IMPORTED_MODULE_4__["API_URL"], "/articles?source=").concat(articleId, "&apiKey=").concat(_constants__WEBPACK_IMPORTED_MODULE_4__["API_KEY"]);
                _context2.next = 4;
                return new _dataLoader__WEBPACK_IMPORTED_MODULE_5__["DataLoader"](urlRequest).fetchAsync();

              case 4:
                data = _context2.sent;
                articles = data.articles.map(function (article) {
                  return {
                    image: article.urlToImage,
                    title: article.title,
                    description: article.description,
                    url: article.url
                  };
                });
                articlesHTML = this.getContentSourceHTML(articles);
                document.getElementById("source-container").innerHTML = articlesHTML;

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function getArticle(_x) {
        return _getArticle.apply(this, arguments);
      };
    }()
  }, {
    key: "getContentSourceHTML",
    value: function getContentSourceHTML(articles) {
      if (articles != null) {
        return articles.reduce(function (markup, current) {
          return markup.concat("<div class=\"article\"><div class=\"article-image-div\"><img src=\"".concat(current.image, "\" class=\"article-image\"></div><div class=\"article-content\"><div class=\"article-title\">\n                    <h2 class=\"title-style\">").concat(current.title, "</h2></div><div class=\"article-description description-style\">").concat(current.description, "</div>\n                    <div class=\"article-reference\"><a href=\"").concat(current.url, "\" class=\"reference-style\">Redirect to article >></a></div></div></div>"));
        }, '');
      } else {
        return "<div>Articles didn't found</div>";
      }
    }
  }, {
    key: "\u0441ontentSource_onclick",
    value: function ontentSource_onclick(contentId) {
      document.getElementById("сontentSource").addEventListener("click", function () {
        this.getContentSource(contentId);
      }, false);
    }
  }, {
    key: "getContentSource",
    value: function () {
      var _getContentSource = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(articleId) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (articleId) {
                  _context3.next = 5;
                  break;
                }

                _context3.next = 3;
                return this.getSources();

              case 3:
                _context3.next = 7;
                break;

              case 5:
                _context3.next = 7;
                return this.getArticle(articleId);

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function getContentSource(_x2) {
        return _getContentSource.apply(this, arguments);
      };
    }()
  }]);

  return ContentManagment;
}();

window.addEventListener('popstate', function (e) {
  new ContentManagment().getContentSource(e.state.articleId);
});
window.onload = new ContentManagment().getContentSource(null);
history.replaceState({
  articleId: null
}, 'Default state', '');

/***/ }),

/***/ "./styles/article.css":
/*!****************************!*\
  !*** ./styles/article.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/src!./article.css */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./styles/article.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./styles/core.css":
/*!*************************!*\
  !*** ./styles/core.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/src!./core.css */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./styles/core.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

}]);
//# sourceMappingURL=1.index.js.map