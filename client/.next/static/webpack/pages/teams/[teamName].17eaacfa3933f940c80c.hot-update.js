/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/teams/[teamName]",{

/***/ "./pages/teams/[teamName].tsx":
/*!************************************!*\
  !*** ./pages/teams/[teamName].tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MatchView; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_MatchCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/MatchCard */ \"./components/MatchCard.tsx\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Navbar */ \"./components/Navbar.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/ashanth/Documents/League-of-Champions/client/pages/teams/[teamName].tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction MatchView() {\n  _s();\n\n  var _this = this;\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  var _router$query = router.query,\n      teamName = _router$query.teamName,\n      season = _router$query.season;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),\n      match = _useState[0],\n      setMatches = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),\n      currentSeason = _useState2[0],\n      setCurrentSeason = _useState2[1]; // useEffect(() => {\n  //     fetch('http://localhost:8080/teams/${teamName}/matches/${currentSeason}')\n  //     .then((response) => response.json())\n  //     .then((responseJSON) => {\n  //         setMatches(responseJSON);\n  //     });\n  // }, []);\n\n\n  function convertValueToSeason(value) {\n    switch (value) {\n      case 0:\n        return \"2000-01\";\n\n      case 1:\n        return \"2001-02\";\n\n      case 2:\n        return \"2002-03\";\n\n      case 3:\n        return \"2003-04\";\n\n      case 4:\n        return \"2004-05\";\n\n      case 5:\n        return \"2005-06\";\n\n      case 6:\n        return \"2006-07\";\n\n      case 7:\n        return \"2007-08\";\n\n      case 8:\n        return \"2008-09\";\n\n      case 9:\n        return \"2009-10\";\n\n      case 10:\n        return \"2010-11\";\n\n      case 11:\n        return \"2011-12\";\n\n      case 12:\n        return \"2012-13\";\n\n      case 13:\n        return \"2013-14\";\n\n      case 14:\n        return \"2014-15\";\n\n      case 15:\n        return \"2015-16\";\n\n      case 16:\n        return \"2016-17\";\n\n      case 17:\n        return \"2017-18\";\n\n      case 18:\n        return \"2018-19\";\n\n      case 19:\n        return \"2019-20\";\n\n      case 20:\n        return \"2020-21\";\n    }\n  }\n\n  var match1 = {\n    id: 1,\n    season: \"2019-20\",\n    date: \"2019-05-02\",\n    homeTeam: \"Arsenal\",\n    awayTeam: \"Chelsea\",\n    homeGoals: 2,\n    awayGoals: 1,\n    winningTeam: \"H\"\n  };\n  var match2 = {\n    id: 2,\n    season: \"2019-20\",\n    date: \"2019-05-03\",\n    homeTeam: \"Arsenal\",\n    awayTeam: \"Chelsea\",\n    homeGoals: 2,\n    awayGoals: 2,\n    winningTeam: \"D\"\n  };\n  var match3 = {\n    id: 2,\n    season: \"2019-20\",\n    date: \"2019-05-03\",\n    homeTeam: \"Man City\",\n    awayTeam: \"Man United\",\n    homeGoals: 1,\n    awayGoals: 4,\n    winningTeam: \"A\"\n  };\n  var matches = [match1, match2, match3];\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_4__.default, {\n      name: \"Premier League\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Container, {\n      maxW: \"container.xl\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Badge, {\n        mt: 4,\n        fontSize: \"2em\",\n        colorScheme: \"pink\",\n        children: [\"Season: \", season]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 100,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Slider, {\n        defaultValue: 180,\n        min: 0,\n        max: 200,\n        step: 20,\n        colorScheme: \"pink\",\n        onChange: function onChange(value) {\n          return setCurrentSeason(convertValueToSeason(value));\n        },\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.SliderTrack, {\n          bg: \"purple.200\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n            position: \"relative\",\n            right: 10\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 112,\n            columnNumber: 25\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.SliderFilledTrack, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 113,\n            columnNumber: 25\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 111,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.SliderThumb, {\n          boxSize: 6\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 115,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 103,\n        columnNumber: 17\n      }, this), matches.map(function (match) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MatchCard__WEBPACK_IMPORTED_MODULE_3__.default, {\n          teamOne: match.homeTeam,\n          teamTwo: match.awayTeam,\n          teamOneScore: match.homeGoals,\n          teamTwoScore: match.awayGoals,\n          date: match.date,\n          color: match.winningTeam == \"H\" ? \"blue.500\" : match.winningTeam == \"D\" ? \"purple.500\" : \"pink.500\"\n        }, match.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 119,\n          columnNumber: 32\n        }, _this);\n      })]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 97,\n    columnNumber: 9\n  }, this);\n}\n\n_s(MatchView, \"gldzsafV0wTRdfGTIy0JTz51+kw=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];\n});\n\n_c = MatchView;\n\nvar _c;\n\n$RefreshReg$(_c, \"MatchView\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVhbXMvW3RlYW1OYW1lXS50c3g/NGM5OCJdLCJuYW1lcyI6WyJNYXRjaFZpZXciLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJxdWVyeSIsInRlYW1OYW1lIiwic2Vhc29uIiwidXNlU3RhdGUiLCJtYXRjaCIsInNldE1hdGNoZXMiLCJjdXJyZW50U2Vhc29uIiwic2V0Q3VycmVudFNlYXNvbiIsImNvbnZlcnRWYWx1ZVRvU2Vhc29uIiwidmFsdWUiLCJtYXRjaDEiLCJpZCIsImRhdGUiLCJob21lVGVhbSIsImF3YXlUZWFtIiwiaG9tZUdvYWxzIiwiYXdheUdvYWxzIiwid2lubmluZ1RlYW0iLCJtYXRjaDIiLCJtYXRjaDMiLCJtYXRjaGVzIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFNBQVQsR0FBcUI7QUFBQTs7QUFBQTs7QUFDaEMsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQURnQyxzQkFFSEQsTUFBTSxDQUFDRSxLQUZKO0FBQUEsTUFFeEJDLFFBRndCLGlCQUV4QkEsUUFGd0I7QUFBQSxNQUVkQyxNQUZjLGlCQUVkQSxNQUZjOztBQUFBLGtCQUdKQywrQ0FBUSxDQUFDLEVBQUQsQ0FISjtBQUFBLE1BR3pCQyxLQUh5QjtBQUFBLE1BR2xCQyxVQUhrQjs7QUFBQSxtQkFJVUYsK0NBQVEsQ0FBQyxJQUFELENBSmxCO0FBQUEsTUFJekJHLGFBSnlCO0FBQUEsTUFJVkMsZ0JBSlUsa0JBS2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxXQUFTQyxvQkFBVCxDQUE4QkMsS0FBOUIsRUFBcUM7QUFDakMsWUFBUUEsS0FBUjtBQUNJLFdBQUssQ0FBTDtBQUNJLGVBQU8sU0FBUDs7QUFDSixXQUFLLENBQUw7QUFDSSxlQUFPLFNBQVA7O0FBQ0osV0FBSyxDQUFMO0FBQ0ksZUFBTyxTQUFQOztB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QUFBQTtBQUFBLGtCQURKLGVBRUksOERBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUkosZUFZSSw4REFBQyx5REFBRDtBQUFhLGlCQUFPLEVBQUU7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFaSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKSixFQW1CUVcsT0FBTyxDQUFDQyxHQUFSLENBQVksVUFBQ2pCLEtBQUQsRUFBVztBQUNuQiw0QkFBTyw4REFBQywwREFBRDtBQUVILGlCQUFPLEVBQUVBLEtBQUssQ0FBQ1MsUUFGWjtBQUdILGlCQUFPLEVBQUVULEtBQUssQ0FBQ1UsUUFIWjtBQUlILHNCQUFZLEVBQUVWLEtBQUssQ0FBQ1csU0FKakI7QUFLSCxzQkFBWSxFQUFFWCxLQUFLLENBQUNZLFNBTGpCO0FBTUgsY0FBSSxFQUFFWixLQUFLLENBQUNRLElBTlQ7QUFPSCxlQUFLLEVBQUVSLEtBQUssQ0FBQ2EsV0FBTixJQUFxQixHQUFyQixHQUEyQixVQUEzQixHQUF5Q2IsS0FBSyxDQUFDYSxXQUFOLElBQXFCLEdBQXJCLEdBQTJCLFlBQTNCLEdBQTBDO0FBUHZGLFdBQ0ViLEtBQUssQ0FBQ08sRUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFQO0FBU0gsT0FWRCxDQW5CUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXFDSDs7R0E5SHVCZCxTO1VBQ0xFLGtEOzs7S0FES0YsUyIsImZpbGUiOiIuL3BhZ2VzL3RlYW1zL1t0ZWFtTmFtZV0udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFkZ2UsIEJveCwgQ29udGFpbmVyLCBTbGlkZXIsIFNsaWRlckZpbGxlZFRyYWNrLCBTbGlkZXJUaHVtYiwgU2xpZGVyVHJhY2sgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1hdGNoQ2FyZCBmcm9tICcuLi8uLi9jb21wb25lbnRzL01hdGNoQ2FyZCc7XG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTmF2YmFyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWF0Y2hWaWV3KCkge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgY29uc3QgeyB0ZWFtTmFtZSwgc2Vhc29uIH0gPSByb3V0ZXIucXVlcnlcbiAgICBjb25zdCBbbWF0Y2gsIHNldE1hdGNoZXNdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtjdXJyZW50U2Vhc29uLCBzZXRDdXJyZW50U2Vhc29uXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwODAvdGVhbXMvJHt0ZWFtTmFtZX0vbWF0Y2hlcy8ke2N1cnJlbnRTZWFzb259JylcbiAgICAvLyAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLy8gICAgIC50aGVuKChyZXNwb25zZUpTT04pID0+IHtcbiAgICAvLyAgICAgICAgIHNldE1hdGNoZXMocmVzcG9uc2VKU09OKTtcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gfSwgW10pO1xuICAgIGZ1bmN0aW9uIGNvbnZlcnRWYWx1ZVRvU2Vhc29uKHZhbHVlKSB7XG4gICAgICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCIyMDAwLTAxXCJcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCIyMDAxLTAyXCJcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCIyMDAyLTAzXCJcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCIyMDAzLTA0XCJcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCIyMDA0LTA1XCJcbiAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCIyMDA1LTA2XCJcbiAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCIyMDA2LTA3XCJcbiAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCIyMDA3LTA4XCJcbiAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCIyMDA4LTA5XCJcbiAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCIyMDA5LTEwXCJcbiAgICAgICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiMjAxMC0xMVwiXG4gICAgICAgICAgICBjYXNlIDExOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIjIwMTEtMTJcIlxuICAgICAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCIyMDEyLTEzXCJcbiAgICAgICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiMjAxMy0xNFwiXG4gICAgICAgICAgICBjYXNlIDE0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIjIwMTQtMTVcIlxuICAgICAgICAgICAgY2FzZSAxNTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCIyMDE1LTE2XCJcbiAgICAgICAgICAgIGNhc2UgMTY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiMjAxNi0xN1wiXG4gICAgICAgICAgICBjYXNlIDE3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIjIwMTctMThcIlxuICAgICAgICAgICAgY2FzZSAxODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCIyMDE4LTE5XCJcbiAgICAgICAgICAgIGNhc2UgMTk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiMjAxOS0yMFwiXG4gICAgICAgICAgICBjYXNlIDIwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIjIwMjAtMjFcIlxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IG1hdGNoMSA9IHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIHNlYXNvbjogXCIyMDE5LTIwXCIsXG4gICAgICAgIGRhdGU6IFwiMjAxOS0wNS0wMlwiLFxuICAgICAgICBob21lVGVhbTogXCJBcnNlbmFsXCIsXG4gICAgICAgIGF3YXlUZWFtOiBcIkNoZWxzZWFcIixcbiAgICAgICAgaG9tZUdvYWxzOiAyLFxuICAgICAgICBhd2F5R29hbHM6IDEsXG4gICAgICAgIHdpbm5pbmdUZWFtOiBcIkhcIlxuICAgIH1cbiAgICBjb25zdCBtYXRjaDIgPSB7XG4gICAgICAgIGlkOiAyLFxuICAgICAgICBzZWFzb246IFwiMjAxOS0yMFwiLFxuICAgICAgICBkYXRlOiBcIjIwMTktMDUtMDNcIixcbiAgICAgICAgaG9tZVRlYW06IFwiQXJzZW5hbFwiLFxuICAgICAgICBhd2F5VGVhbTogXCJDaGVsc2VhXCIsXG4gICAgICAgIGhvbWVHb2FsczogMixcbiAgICAgICAgYXdheUdvYWxzOiAyLFxuICAgICAgICB3aW5uaW5nVGVhbTogXCJEXCJcbiAgICB9XG4gICAgY29uc3QgbWF0Y2gzID0ge1xuICAgICAgICBpZDogMixcbiAgICAgICAgc2Vhc29uOiBcIjIwMTktMjBcIixcbiAgICAgICAgZGF0ZTogXCIyMDE5LTA1LTAzXCIsXG4gICAgICAgIGhvbWVUZWFtOiBcIk1hbiBDaXR5XCIsXG4gICAgICAgIGF3YXlUZWFtOiBcIk1hbiBVbml0ZWRcIixcbiAgICAgICAgaG9tZUdvYWxzOiAxLFxuICAgICAgICBhd2F5R29hbHM6IDQsXG4gICAgICAgIHdpbm5pbmdUZWFtOiBcIkFcIlxuICAgIH1cbiAgICBsZXQgbWF0Y2hlcyA9IFttYXRjaDEsIG1hdGNoMiwgbWF0Y2gzXTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPE5hdmJhciBuYW1lPVwiUHJlbWllciBMZWFndWVcIiAvPlxuICAgICAgICAgICAgPENvbnRhaW5lciBtYXhXPVwiY29udGFpbmVyLnhsXCI+XG4gICAgICAgICAgICAgICAgPEJhZGdlIG10PXs0fSBmb250U2l6ZT1cIjJlbVwiIGNvbG9yU2NoZW1lPVwicGlua1wiPlxuICAgICAgICAgICAgICAgICAgICBTZWFzb246IHtzZWFzb259XG4gICAgICAgICAgICAgICAgPC9CYWRnZT5cbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17MTgwfVxuICAgICAgICAgICAgICAgICAgICBtaW49ezB9XG4gICAgICAgICAgICAgICAgICAgIG1heD17MjAwfVxuICAgICAgICAgICAgICAgICAgICBzdGVwPXsyMH1cbiAgICAgICAgICAgICAgICAgICAgY29sb3JTY2hlbWU9XCJwaW5rXCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gc2V0Q3VycmVudFNlYXNvbihjb252ZXJ0VmFsdWVUb1NlYXNvbih2YWx1ZSkpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPFNsaWRlclRyYWNrIGJnPVwicHVycGxlLjIwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBwb3NpdGlvbj1cInJlbGF0aXZlXCIgcmlnaHQ9ezEwfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNsaWRlckZpbGxlZFRyYWNrIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvU2xpZGVyVHJhY2s+XG4gICAgICAgICAgICAgICAgICAgIDxTbGlkZXJUaHVtYiBib3hTaXplPXs2fSAvPlxuICAgICAgICAgICAgICAgIDwvU2xpZGVyPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2hlcy5tYXAoKG1hdGNoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPE1hdGNoQ2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17bWF0Y2guaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbU9uZT17bWF0Y2guaG9tZVRlYW19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVR3bz17bWF0Y2guYXdheVRlYW19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbU9uZVNjb3JlPXttYXRjaC5ob21lR29hbHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVR3b1Njb3JlPXttYXRjaC5hd2F5R29hbHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZT17bWF0Y2guZGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17bWF0Y2gud2lubmluZ1RlYW0gPT0gXCJIXCIgPyBcImJsdWUuNTAwXCIgOiAobWF0Y2gud2lubmluZ1RlYW0gPT0gXCJEXCIgPyBcInB1cnBsZS41MDBcIiA6IFwicGluay41MDBcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/teams/[teamName].tsx\n");

/***/ })

});