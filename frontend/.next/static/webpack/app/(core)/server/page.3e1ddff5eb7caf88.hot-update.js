"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(core)/server/page",{

/***/ "(app-pages-browser)/./components/table.tsx":
/*!******************************!*\
  !*** ./components/table.tsx ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Table: () => (/* binding */ Table)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@15.0.3_react-dom@19.0.0-rc-66855b96-20241106_react@19.0.0-rc-66855b96-20241106__react@19.0.0-rc-66855b96-20241106/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n\nfunction Table(param) {\n    let { TableHeader, TableRows } = param;\n    const handleInputChange = (e, name)=>{\n        const updatedValue = e.target.value;\n        console.log(\"\".concat(name, \" updated to \").concat(updatedValue));\n    };\n    const handleSaveClick = (name)=>{\n        console.log(\"\".concat(name, \" saved\"));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative overflow-x-auto shadow-md sm:rounded-lg\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n            className: \"w-full text-sm rtl:text-right text-gray-500 dark:text-gray-400\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                    className: \"text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                        className: \"table-header\",\n                        children: TableHeader.map((tabhead, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                className: \"px-6 py-3\",\n                                children: tabhead\n                            }, index, false, {\n                                fileName: \"/home/furkan/Desktop/peershare/frontend/components/table.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 29\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/home/furkan/Desktop/peershare/frontend/components/table.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/furkan/Desktop/peershare/frontend/components/table.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                    children: TableRows.map((row, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            className: \"table-row text-center bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    scope: \"row\",\n                                    className: \"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white\",\n                                    children: row.name\n                                }, void 0, false, {\n                                    fileName: \"/home/furkan/Desktop/peershare/frontend/components/table.tsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white\",\n                                    children: row.value\n                                }, void 0, false, {\n                                    fileName: \"/home/furkan/Desktop/peershare/frontend/components/table.tsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white\",\n                                    children: row.replaceable ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        placeholder: \"New value\",\n                                        className: \"border border-gray-300 rounded px-2 py-1 w-full\",\n                                        onChange: (e)=>handleInputChange(e, e.target.value)\n                                    }, void 0, false, {\n                                        fileName: \"/home/furkan/Desktop/peershare/frontend/components/table.tsx\",\n                                        lineNumber: 51,\n                                        columnNumber: 37\n                                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-zinc-400 text-xs\",\n                                        children: \"N/A\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/furkan/Desktop/peershare/frontend/components/table.tsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 37\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/furkan/Desktop/peershare/frontend/components/table.tsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"px-6 py-4\",\n                                    children: row.saveble ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"font-medium text-blue-600 dark:text-blue-500 hover:underline\",\n                                        onClick: ()=>handleSaveClick(row.name),\n                                        children: \"Change\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/furkan/Desktop/peershare/frontend/components/table.tsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 37\n                                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-zinc-400 text-xs\",\n                                        children: \"N/A\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/furkan/Desktop/peershare/frontend/components/table.tsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 37\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/furkan/Desktop/peershare/frontend/components/table.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, index, true, {\n                            fileName: \"/home/furkan/Desktop/peershare/frontend/components/table.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 25\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/home/furkan/Desktop/peershare/frontend/components/table.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/furkan/Desktop/peershare/frontend/components/table.tsx\",\n            lineNumber: 28,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/furkan/Desktop/peershare/frontend/components/table.tsx\",\n        lineNumber: 27,\n        columnNumber: 9\n    }, this);\n}\n_c = Table;\nvar _c;\n$RefreshReg$(_c, \"Table\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvdGFibGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQWdCTyxTQUFTQSxNQUFNLEtBQXNDO1FBQXRDLEVBQUVDLFdBQVcsRUFBRUMsU0FBUyxFQUFjLEdBQXRDO0lBQ2xCLE1BQU1DLG9CQUFvQixDQUFDQyxHQUF3Q0M7UUFDL0QsTUFBTUMsZUFBZUYsRUFBRUcsTUFBTSxDQUFDQyxLQUFLO1FBQ25DQyxRQUFRQyxHQUFHLENBQUMsR0FBc0JKLE9BQW5CRCxNQUFLLGdCQUEyQixPQUFiQztJQUN0QztJQUVBLE1BQU1LLGtCQUFrQixDQUFDTjtRQUNyQkksUUFBUUMsR0FBRyxDQUFDLEdBQVEsT0FBTEwsTUFBSztJQUN4QjtJQUNBLHFCQUNJLDhEQUFDTztRQUFJQyxXQUFVO2tCQUNYLDRFQUFDQztZQUFNRCxXQUFVOzs4QkFDYiw4REFBQ0U7b0JBQU1GLFdBQVU7OEJBQ2IsNEVBQUNHO3dCQUFHSCxXQUFVO2tDQUNUWixZQUFZZ0IsR0FBRyxDQUFDLENBQUNDLFNBQVNDLHNCQUN2Qiw4REFBQ0M7Z0NBQWVDLE9BQU07Z0NBQU1SLFdBQVU7MENBQ2pDSzsrQkFESUM7Ozs7Ozs7Ozs7Ozs7Ozs4QkFNckIsOERBQUNHOzhCQUNJcEIsVUFBVWUsR0FBRyxDQUFDLENBQUNNLEtBQUtKLHNCQUNqQiw4REFBQ0g7NEJBQWVILFdBQVU7OzhDQUN0Qiw4REFBQ1c7b0NBQUdILE9BQU07b0NBQU1SLFdBQVU7OENBQ3JCVSxJQUFJbEIsSUFBSTs7Ozs7OzhDQUdiLDhEQUFDbUI7b0NBQUdYLFdBQVU7OENBQ1RVLElBQUlmLEtBQUs7Ozs7Ozs4Q0FHZCw4REFBQ2dCO29DQUFHWCxXQUFVOzhDQUNUVSxJQUFJRSxXQUFXLGlCQUNaLDhEQUFDQzt3Q0FDR0MsTUFBSzt3Q0FDTEMsYUFBWTt3Q0FDWmYsV0FBVTt3Q0FDVmdCLFVBQVUsQ0FBQ3pCLElBQU1ELGtCQUFrQkMsR0FBR0EsRUFBRUcsTUFBTSxDQUFDQyxLQUFLOzs7Ozs2REFFeEQsOERBQUNzQjt3Q0FBRWpCLFdBQVU7a0RBQXdCOzs7Ozs7Ozs7Ozs4Q0FHN0MsOERBQUNXO29DQUFHWCxXQUFVOzhDQUNUVSxJQUFJUSxPQUFPLGlCQUNSLDhEQUFDQzt3Q0FDR25CLFdBQVU7d0NBQ1ZvQixTQUFTLElBQU10QixnQkFBZ0JZLElBQUlsQixJQUFJO2tEQUMxQzs7Ozs7NkRBR0QsOERBQUN5Qjt3Q0FBRWpCLFdBQVU7a0RBQXdCOzs7Ozs7Ozs7Ozs7MkJBNUJ4Q007Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9DakM7S0EzRGdCbkIiLCJzb3VyY2VzIjpbIi9ob21lL2Z1cmthbi9EZXNrdG9wL3BlZXJzaGFyZS9mcm9udGVuZC9jb21wb25lbnRzL3RhYmxlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgVGFibGVIZWFkZXJJbnRlcmZhY2Uge1xuICAgIFRhYmxlSGVhZGVyOiBzdHJpbmdbXTtcbn1cblxuaW50ZXJmYWNlIFRhYmxlUm93SW50ZXJmYWNlIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgdmFsdWU6IHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG4gICAgcmVwbGFjZWFibGU6IGJvb2xlYW47XG4gICAgc2F2ZWJsZTogYm9vbGVhbjtcbiAgICBmdW5jdGlvbj86IEZ1bmN0aW9uXG59XG5cbmludGVyZmFjZSBUYWJsZVByb3BzIGV4dGVuZHMgVGFibGVIZWFkZXJJbnRlcmZhY2Uge1xuICAgIFRhYmxlUm93czogVGFibGVSb3dJbnRlcmZhY2VbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFRhYmxlKHsgVGFibGVIZWFkZXIsIFRhYmxlUm93cyB9OiBUYWJsZVByb3BzKSB7XG4gICAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4sIG5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCB1cGRhdGVkVmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgY29uc29sZS5sb2coYCR7bmFtZX0gdXBkYXRlZCB0byAke3VwZGF0ZWRWYWx1ZX1gKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlU2F2ZUNsaWNrID0gKG5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhgJHtuYW1lfSBzYXZlZGApO1xuICAgIH07XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBvdmVyZmxvdy14LWF1dG8gc2hhZG93LW1kIHNtOnJvdW5kZWQtbGdcIj5cbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1zbSBydGw6dGV4dC1yaWdodCB0ZXh0LWdyYXktNTAwIGRhcms6dGV4dC1ncmF5LTQwMFwiPlxuICAgICAgICAgICAgICAgIDx0aGVhZCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS03MDAgYmctZ3JheS01MCBkYXJrOmJnLWdyYXktNzAwIGRhcms6dGV4dC1ncmF5LTQwMFwiPlxuICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwidGFibGUtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7VGFibGVIZWFkZXIubWFwKCh0YWJoZWFkLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBrZXk9e2luZGV4fSBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInB4LTYgcHktM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFiaGVhZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIHtUYWJsZVJvd3MubWFwKChyb3csIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwidGFibGUtcm93IHRleHQtY2VudGVyIGJnLXdoaXRlIGJvcmRlci1iIGRhcms6YmctZ3JheS04MDAgZGFyazpib3JkZXItZ3JheS03MDAgaG92ZXI6YmctZ3JheS01MCBkYXJrOmhvdmVyOmJnLWdyYXktNjAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHNjb3BlPVwicm93XCIgY2xhc3NOYW1lPVwicHgtNiBweS00IGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAgd2hpdGVzcGFjZS1ub3dyYXAgZGFyazp0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyb3cubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwIHdoaXRlc3BhY2Utbm93cmFwIGRhcms6dGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cm93LnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00IGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAgd2hpdGVzcGFjZS1ub3dyYXAgZGFyazp0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyb3cucmVwbGFjZWFibGUgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOZXcgdmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZCBweC0yIHB5LTEgdy1mdWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUlucHV0Q2hhbmdlKGUsIGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiA8cCBjbGFzc05hbWU9XCJ0ZXh0LXppbmMtNDAwIHRleHQteHNcIj5OL0E8L3A+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyb3cuc2F2ZWJsZSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LW1lZGl1bSB0ZXh0LWJsdWUtNjAwIGRhcms6dGV4dC1ibHVlLTUwMCBob3Zlcjp1bmRlcmxpbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNhdmVDbGljayhyb3cubmFtZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2hhbmdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IDxwIGNsYXNzTmFtZT1cInRleHQtemluYy00MDAgdGV4dC14c1wiPk4vQTwvcD59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIl0sIm5hbWVzIjpbIlRhYmxlIiwiVGFibGVIZWFkZXIiLCJUYWJsZVJvd3MiLCJoYW5kbGVJbnB1dENoYW5nZSIsImUiLCJuYW1lIiwidXBkYXRlZFZhbHVlIiwidGFyZ2V0IiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlU2F2ZUNsaWNrIiwiZGl2IiwiY2xhc3NOYW1lIiwidGFibGUiLCJ0aGVhZCIsInRyIiwibWFwIiwidGFiaGVhZCIsImluZGV4IiwidGgiLCJzY29wZSIsInRib2R5Iiwicm93IiwidGQiLCJyZXBsYWNlYWJsZSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJwIiwic2F2ZWJsZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/table.tsx\n"));

/***/ })

});