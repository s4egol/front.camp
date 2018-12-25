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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./scripts/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./scripts/index.js":
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar apiKey = \"ff4e5fedad734d3ca5503f69725ea2ca\";\n\nvar DataLoader =\n/*#__PURE__*/\nfunction () {\n  function DataLoader(url) {\n    _classCallCheck(this, DataLoader);\n\n    this.url = url;\n  }\n\n  _createClass(DataLoader, [{\n    key: \"fetchAsync\",\n    value: function () {\n      var _fetchAsync = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee() {\n        var response;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return fetch(this.url);\n\n              case 2:\n                response = _context.sent;\n                this.checkStatus(response);\n                _context.next = 6;\n                return response.json();\n\n              case 6:\n                return _context.abrupt(\"return\", _context.sent);\n\n              case 7:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      return function fetchAsync() {\n        return _fetchAsync.apply(this, arguments);\n      };\n    }()\n  }, {\n    key: \"checkStatus\",\n    value: function checkStatus(response) {\n      if (response.ok) {\n        return response;\n      } else {\n        var error = new Error(response.statusText);\n        error.response = response;\n        throw error;\n      }\n    }\n  }]);\n\n  return DataLoader;\n}();\n\nvar ContentManagment =\n/*#__PURE__*/\nfunction () {\n  function ContentManagment() {\n    _classCallCheck(this, ContentManagment);\n  }\n\n  _createClass(ContentManagment, [{\n    key: \"getSources\",\n    value: function () {\n      var _getSources = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee2() {\n        var _this = this;\n\n        var data, sources, soursesMarkup;\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.next = 2;\n                return new DataLoader(\"https://newsapi.org/v1/sources\").fetchAsync();\n\n              case 2:\n                data = _context2.sent;\n                sources = [];\n                data.sources.forEach(function (source) {\n                  sources.push({\n                    id: source.id,\n                    name: source.name,\n                    url: source.url\n                  });\n                });\n                soursesMarkup = sources.reduce(function (markup, current) {\n                  return markup.concat(\"<div id=\\\"\".concat(current.id, \"\\\" class=\\\"news-container\\\"><img class=\\\"preview\\\" src=\\\"https://besticon-demo.herokuapp.com/icon?url=\").concat(current.url, \"&amp;size=70..120..200\\\">\\n                <div class=\\\"title\\\"><a class=\\\"cursor\\\" id=\\\"\\u0441ontentSource\\\"><strong>\\\"\").concat(current.name, \"\\\"</strong></a></div></div>\"));\n                }, '');\n                document.getElementById(\"source-container\").innerHTML = soursesMarkup;\n                sources.forEach(function (source) {\n                  document.getElementById(source.id).addEventListener('click', function () {\n                    return _this.getContentSource(source.id);\n                  });\n                });\n\n              case 8:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2, this);\n      }));\n\n      return function getSources() {\n        return _getSources.apply(this, arguments);\n      };\n    }()\n  }, {\n    key: \"getArticle\",\n    value: function () {\n      var _getArticle = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee3(articleId) {\n        var urlRequest, data, articles, articlesHTML;\n        return regeneratorRuntime.wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                history.pushState({\n                  articleId: articleId\n                }, \"Selected: \".concat(articleId), \"#selected=\".concat(articleId));\n                urlRequest = \"https://newsapi.org/v1/articles?source=\".concat(articleId, \"&apiKey=\").concat(apiKey);\n                _context3.next = 4;\n                return new DataLoader(urlRequest).fetchAsync();\n\n              case 4:\n                data = _context3.sent;\n                articles = data.articles.map(function (article) {\n                  return {\n                    image: article.urlToImage,\n                    title: article.title,\n                    description: article.description,\n                    url: article.url\n                  };\n                });\n                articlesHTML = this.getContentSourceHTML(articles);\n                document.getElementById(\"source-container\").innerHTML = articlesHTML;\n\n              case 8:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3, this);\n      }));\n\n      return function getArticle(_x) {\n        return _getArticle.apply(this, arguments);\n      };\n    }()\n  }, {\n    key: \"getContentSourceHTML\",\n    value: function getContentSourceHTML(articles) {\n      if (articles != null) {\n        return articles.reduce(function (markup, current) {\n          return markup.concat(\"<div class=\\\"article\\\"><div class=\\\"article-image-div\\\"><img src=\\\"\".concat(current.image, \"\\\" class=\\\"article-image\\\"></div><div class=\\\"article-content\\\"><div class=\\\"article-title\\\">\\n                    <h2 class=\\\"title-style\\\">\").concat(current.title, \"</h2></div><div class=\\\"article-description description-style\\\">\").concat(current.description, \"</div>\\n                    <div class=\\\"article-reference\\\"><a href=\\\"\").concat(current.url, \"\\\" class=\\\"reference-style\\\">Redirect to article >></a></div></div></div>\"));\n        }, '');\n      } else {\n        return \"<div>Articles didn't found</div>\";\n      }\n    }\n  }, {\n    key: \"\\u0441ontentSource_onclick\",\n    value: function ontentSource_onclick(contentId) {\n      document.getElementById(\"сontentSource\").addEventListener(\"click\", function () {\n        this.getContentSource(contentId);\n      }, false);\n    }\n  }, {\n    key: \"getContentSource\",\n    value: function () {\n      var _getContentSource = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee4(articleId) {\n        return regeneratorRuntime.wrap(function _callee4$(_context4) {\n          while (1) {\n            switch (_context4.prev = _context4.next) {\n              case 0:\n                if (articleId) {\n                  _context4.next = 5;\n                  break;\n                }\n\n                _context4.next = 3;\n                return this.getSources();\n\n              case 3:\n                _context4.next = 7;\n                break;\n\n              case 5:\n                _context4.next = 7;\n                return this.getArticle(articleId);\n\n              case 7:\n              case \"end\":\n                return _context4.stop();\n            }\n          }\n        }, _callee4, this);\n      }));\n\n      return function getContentSource(_x2) {\n        return _getContentSource.apply(this, arguments);\n      };\n    }()\n  }]);\n\n  return ContentManagment;\n}();\n\nwindow.addEventListener('popstate', function (e) {\n  new ContentManagment().getContentSource(e.state.articleId);\n});\nwindow.onload = new ContentManagment().getContentSource(null);\nhistory.replaceState({\n  articleId: null\n}, 'Default state', '');\n\n//# sourceURL=webpack:///./scripts/index.js?");

/***/ })

/******/ });