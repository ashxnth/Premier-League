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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MatchView; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_MatchCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/MatchCard */ \"./components/MatchCard.tsx\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Navbar */ \"./components/Navbar.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/ashanth/Documents/League-of-Champions/client/pages/teams/[teamName].tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction MatchView() {\n  _s();\n\n  var _this = this;\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  var _router$query = router.query,\n      teamName = _router$query.teamName,\n      season = _router$query.season;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),\n      match = _useState[0],\n      setMatches = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),\n      currentSeason = _useState2[0],\n      setCurrentSeason = _useState2[1]; // useEffect(() => {\n  //     fetch('http://localhost:8080/teams/${teamName}/matches/${currentSeason}')\n  //     .then((response) => response.json())\n  //     .then((responseJSON) => {\n  //         setMatches(responseJSON);\n  //     });\n  // }, []);\n\n\n  var match1 = {\n    id: 1,\n    season: \"2019-20\",\n    date: \"2019-05-02\",\n    homeTeam: \"Arsenal\",\n    awayTeam: \"Chelsea\",\n    homeGoals: 2,\n    awayGoals: 1,\n    winningTeam: \"H\"\n  };\n  var match2 = {\n    id: 2,\n    season: \"2019-20\",\n    date: \"2019-05-03\",\n    homeTeam: \"Arsenal\",\n    awayTeam: \"Chelsea\",\n    homeGoals: 2,\n    awayGoals: 2,\n    winningTeam: \"D\"\n  };\n  var match3 = {\n    id: 2,\n    season: \"2019-20\",\n    date: \"2019-05-03\",\n    homeTeam: \"Man City\",\n    awayTeam: \"Man United\",\n    homeGoals: 1,\n    awayGoals: 4,\n    winningTeam: \"A\"\n  };\n  var matches = [match1, match2, match3];\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_4__.default, {\n      name: \"Premier League\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Container, {\n      maxW: \"container.xl\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Badge, {\n        mt: 4,\n        fontSize: \"2em\",\n        colorScheme: \"pink\",\n        children: [\"Season: \", season]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Slider, {\n        defaultValue: 180,\n        min: 0,\n        max: 200,\n        step: 20,\n        colorScheme: \"pink\" // onChangeEnd={(val) => setSeason(convertValToSeason(val))}\n        ,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.SliderTrack, {\n          bg: \"purple.200\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n            position: \"relative\",\n            right: 10\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 66,\n            columnNumber: 25\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.SliderFilledTrack, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 67,\n            columnNumber: 25\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.SliderThumb, {\n          boxSize: 6\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 17\n      }, this), matches.map(function (match) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MatchCard__WEBPACK_IMPORTED_MODULE_3__.default, {\n          teamOne: match.homeTeam,\n          teamTwo: match.awayTeam,\n          teamOneScore: match.homeGoals,\n          teamTwoScore: match.awayGoals,\n          date: match.date,\n          color: match.winningTeam == \"H\" ? \"blue.500\" : match.winningTeam == \"D\" ? \"purple.500\" : \"pink.500\"\n        }, match.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 32\n        }, _this);\n      })]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 51,\n    columnNumber: 9\n  }, this);\n}\n\n_s(MatchView, \"gldzsafV0wTRdfGTIy0JTz51+kw=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];\n});\n\n_c = MatchView;\n\nvar _c;\n\n$RefreshReg$(_c, \"MatchView\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVhbXMvW3RlYW1OYW1lXS50c3g/NGM5OCJdLCJuYW1lcyI6WyJNYXRjaFZpZXciLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJxdWVyeSIsInRlYW1OYW1lIiwic2Vhc29uIiwidXNlU3RhdGUiLCJtYXRjaCIsInNldE1hdGNoZXMiLCJjdXJyZW50U2Vhc29uIiwic2V0Q3VycmVudFNlYXNvbiIsIm1hdGNoMSIsImlkIiwiZGF0ZSIsImhvbWVUZWFtIiwiYXdheVRlYW0iLCJob21lR29hbHMiLCJhd2F5R29hbHMiLCJ3aW5uaW5nVGVhbSIsIm1hdGNoMiIsIm1hdGNoMyIsIm1hdGNoZXMiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsU0FBVCxHQUFxQjtBQUFBOztBQUFBOztBQUNoQyxNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBRGdDLHNCQUVIRCxNQUFNLENBQUNFLEtBRko7QUFBQSxNQUV4QkMsUUFGd0IsaUJBRXhCQSxRQUZ3QjtBQUFBLE1BRWRDLE1BRmMsaUJBRWRBLE1BRmM7O0FBQUEsa0JBR0pDLCtDQUFRLENBQUMsRUFBRCxDQUhKO0FBQUEsTUFHekJDLEtBSHlCO0FBQUEsTUFHbEJDLFVBSGtCOztBQUFBLG1CQUlVRiwrQ0FBUSxDQUFDLElBQUQsQ0FKbEI7QUFBQSxNQUl6QkcsYUFKeUI7QUFBQSxNQUlWQyxnQkFKVSxrQkFLaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLE1BQU1DLE1BQU0sR0FBRztBQUNYQyxNQUFFLEVBQUUsQ0FETztBQUVYUCxVQUFNLEVBQUUsU0FGRztBQUdYUSxRQUFJLEVBQUUsWUFISztBQUlYQyxZQUFRLEVBQUUsU0FKQztBQUtYQyxZQUFRLEVBQUUsU0FMQztBQU1YQyxhQUFTLEVBQUUsQ0FOQTtBQU9YQyxhQUFTLEVBQUUsQ0FQQTtBQVFYQyxlQUFXLEVBQUU7QUFSRixHQUFmO0FBVUEsTUFBTUMsTUFBTSxHQUFHO0FBQ1hQLE1BQUUsRUFBRSxDQURPO0FBRVhQLFVBQU0sRUFBRSxTQUZHO0FBR1hRLFFBQUksRUFBRSxZQUhLO0FBSVhDLFlBQVEsRUFBRSxTQUpDO0FBS1hDLFlBQVEsRUFBRSxTQUxDO0FBTVhDLGFBQVMsRUFBRSxDQU5BO0FBT1hDLGFBQVMsRUFBRSxDQVBBO0FBUVhDLGVBQVcsRUFBRTtBQVJGLEdBQWY7QUFVQSxNQUFNRSxNQUFNLEdBQUc7QUFDWFIsTUFBRSxFQUFFLENBRE87QUFFWFAsVUFBTSxFQUFFLFNBRkc7QUFHWFEsUUFBSSxFQUFFLFlBSEs7QUFJWEMsWUFBUSxFQUFFLFVBSkM7QUFLWEMsWUFBUSxFQUFFLFlBTEM7QUFNWEMsYUFBUyxFQUFFLENBTkE7QUFPWEMsYUFBUyxFQUFFLENBUEE7QUFRWEMsZUFBVyxFQUFFO0FBUkYsR0FBZjtBQVVBLE1BQUlHLE9BQU8sR0FBRyxDQUFDVixNQUFELEVBQVNRLE1BQVQsRUFBaUJDLE1BQWpCLENBQWQ7QUFDQSxzQkFDSTtBQUFBLDRCQUNJLDhEQUFDLHVEQUFEO0FBQVEsVUFBSSxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUksOERBQUMsdURBQUQ7QUFBVyxVQUFJLEVBQUMsY0FBaEI7QUFBQSw4QkFDSSw4REFBQyxtREFBRDtBQUFPLFVBQUUsRUFBRSxDQUFYO0FBQWMsZ0JBQVEsRUFBQyxLQUF2QjtBQUE2QixtQkFBVyxFQUFDLE1BQXpDO0FBQUEsK0JBQ2FmLE1BRGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFJSSw4REFBQyxvREFBRDtBQUNJLG9CQUFZLEVBQUUsR0FEbEI7QUFFSSxXQUFHLEVBQUUsQ0FGVDtBQUdJLFdBQUcsRUFBRSxHQUhUO0FBSUksWUFBSSxFQUFFLEVBSlY7QUFLSSxtQkFBVyxFQUFDLE1BTGhCLENBTUk7QUFOSjtBQUFBLGdDQVFJLDhEQUFDLHlEQUFEO0FBQWEsWUFBRSxFQUFDLFlBQWhCO0FBQUEsa0NBQ0ksOERBQUMsaURBQUQ7QUFBSyxvQkFBUSxFQUFDLFVBQWQ7QUFBeUIsaUJBQUssRUFBRTtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBRUksOERBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUkosZUFZSSw4REFBQyx5REFBRDtBQUFhLGlCQUFPLEVBQUU7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFaSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKSixFQW1CUWdCLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQUNmLEtBQUQsRUFBVztBQUNuQiw0QkFBTyw4REFBQywwREFBRDtBQUVILGlCQUFPLEVBQUVBLEtBQUssQ0FBQ08sUUFGWjtBQUdILGlCQUFPLEVBQUVQLEtBQUssQ0FBQ1EsUUFIWjtBQUlILHNCQUFZLEVBQUVSLEtBQUssQ0FBQ1MsU0FKakI7QUFLSCxzQkFBWSxFQUFFVCxLQUFLLENBQUNVLFNBTGpCO0FBTUgsY0FBSSxFQUFFVixLQUFLLENBQUNNLElBTlQ7QUFPSCxlQUFLLEVBQUVOLEtBQUssQ0FBQ1csV0FBTixJQUFxQixHQUFyQixHQUEyQixVQUEzQixHQUF5Q1gsS0FBSyxDQUFDVyxXQUFOLElBQXFCLEdBQXJCLEdBQTJCLFlBQTNCLEdBQTBDO0FBUHZGLFdBQ0VYLEtBQUssQ0FBQ0ssRUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFQO0FBU0gsT0FWRCxDQW5CUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXFDSDs7R0FoRnVCWixTO1VBQ0xFLGtEOzs7S0FES0YsUyIsImZpbGUiOiIuL3BhZ2VzL3RlYW1zL1t0ZWFtTmFtZV0udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFkZ2UsIEJveCwgQ29udGFpbmVyLCBTbGlkZXIsIFNsaWRlckZpbGxlZFRyYWNrLCBTbGlkZXJUaHVtYiwgU2xpZGVyVHJhY2sgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1hdGNoQ2FyZCBmcm9tICcuLi8uLi9jb21wb25lbnRzL01hdGNoQ2FyZCc7XG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTmF2YmFyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWF0Y2hWaWV3KCkge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgY29uc3QgeyB0ZWFtTmFtZSwgc2Vhc29uIH0gPSByb3V0ZXIucXVlcnlcbiAgICBjb25zdCBbbWF0Y2gsIHNldE1hdGNoZXNdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtjdXJyZW50U2Vhc29uLCBzZXRDdXJyZW50U2Vhc29uXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwODAvdGVhbXMvJHt0ZWFtTmFtZX0vbWF0Y2hlcy8ke2N1cnJlbnRTZWFzb259JylcbiAgICAvLyAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLy8gICAgIC50aGVuKChyZXNwb25zZUpTT04pID0+IHtcbiAgICAvLyAgICAgICAgIHNldE1hdGNoZXMocmVzcG9uc2VKU09OKTtcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gfSwgW10pO1xuICAgIGNvbnN0IG1hdGNoMSA9IHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIHNlYXNvbjogXCIyMDE5LTIwXCIsXG4gICAgICAgIGRhdGU6IFwiMjAxOS0wNS0wMlwiLFxuICAgICAgICBob21lVGVhbTogXCJBcnNlbmFsXCIsXG4gICAgICAgIGF3YXlUZWFtOiBcIkNoZWxzZWFcIixcbiAgICAgICAgaG9tZUdvYWxzOiAyLFxuICAgICAgICBhd2F5R29hbHM6IDEsXG4gICAgICAgIHdpbm5pbmdUZWFtOiBcIkhcIlxuICAgIH1cbiAgICBjb25zdCBtYXRjaDIgPSB7XG4gICAgICAgIGlkOiAyLFxuICAgICAgICBzZWFzb246IFwiMjAxOS0yMFwiLFxuICAgICAgICBkYXRlOiBcIjIwMTktMDUtMDNcIixcbiAgICAgICAgaG9tZVRlYW06IFwiQXJzZW5hbFwiLFxuICAgICAgICBhd2F5VGVhbTogXCJDaGVsc2VhXCIsXG4gICAgICAgIGhvbWVHb2FsczogMixcbiAgICAgICAgYXdheUdvYWxzOiAyLFxuICAgICAgICB3aW5uaW5nVGVhbTogXCJEXCJcbiAgICB9XG4gICAgY29uc3QgbWF0Y2gzID0ge1xuICAgICAgICBpZDogMixcbiAgICAgICAgc2Vhc29uOiBcIjIwMTktMjBcIixcbiAgICAgICAgZGF0ZTogXCIyMDE5LTA1LTAzXCIsXG4gICAgICAgIGhvbWVUZWFtOiBcIk1hbiBDaXR5XCIsXG4gICAgICAgIGF3YXlUZWFtOiBcIk1hbiBVbml0ZWRcIixcbiAgICAgICAgaG9tZUdvYWxzOiAxLFxuICAgICAgICBhd2F5R29hbHM6IDQsXG4gICAgICAgIHdpbm5pbmdUZWFtOiBcIkFcIlxuICAgIH1cbiAgICBsZXQgbWF0Y2hlcyA9IFttYXRjaDEsIG1hdGNoMiwgbWF0Y2gzXTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPE5hdmJhciBuYW1lPVwiUHJlbWllciBMZWFndWVcIiAvPlxuICAgICAgICAgICAgPENvbnRhaW5lciBtYXhXPVwiY29udGFpbmVyLnhsXCI+XG4gICAgICAgICAgICAgICAgPEJhZGdlIG10PXs0fSBmb250U2l6ZT1cIjJlbVwiIGNvbG9yU2NoZW1lPVwicGlua1wiPlxuICAgICAgICAgICAgICAgICAgICBTZWFzb246IHtzZWFzb259XG4gICAgICAgICAgICAgICAgPC9CYWRnZT5cbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17MTgwfVxuICAgICAgICAgICAgICAgICAgICBtaW49ezB9XG4gICAgICAgICAgICAgICAgICAgIG1heD17MjAwfVxuICAgICAgICAgICAgICAgICAgICBzdGVwPXsyMH1cbiAgICAgICAgICAgICAgICAgICAgY29sb3JTY2hlbWU9XCJwaW5rXCJcbiAgICAgICAgICAgICAgICAgICAgLy8gb25DaGFuZ2VFbmQ9eyh2YWwpID0+IHNldFNlYXNvbihjb252ZXJ0VmFsVG9TZWFzb24odmFsKSl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8U2xpZGVyVHJhY2sgYmc9XCJwdXJwbGUuMjAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHBvc2l0aW9uPVwicmVsYXRpdmVcIiByaWdodD17MTB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2xpZGVyRmlsbGVkVHJhY2sgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9TbGlkZXJUcmFjaz5cbiAgICAgICAgICAgICAgICAgICAgPFNsaWRlclRodW1iIGJveFNpemU9ezZ9IC8+XG4gICAgICAgICAgICAgICAgPC9TbGlkZXI+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBtYXRjaGVzLm1hcCgobWF0Y2gpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8TWF0Y2hDYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXttYXRjaC5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtT25lPXttYXRjaC5ob21lVGVhbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtVHdvPXttYXRjaC5hd2F5VGVhbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtT25lU2NvcmU9e21hdGNoLmhvbWVHb2Fsc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtVHdvU2NvcmU9e21hdGNoLmF3YXlHb2Fsc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlPXttYXRjaC5kYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXttYXRjaC53aW5uaW5nVGVhbSA9PSBcIkhcIiA/IFwiYmx1ZS41MDBcIiA6IChtYXRjaC53aW5uaW5nVGVhbSA9PSBcIkRcIiA/IFwicHVycGxlLjUwMFwiIDogXCJwaW5rLjUwMFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/teams/[teamName].tsx\n");

/***/ })

});