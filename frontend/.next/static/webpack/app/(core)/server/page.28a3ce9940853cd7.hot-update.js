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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Table: () => (/* binding */ Table)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@15.0.3_react-dom@19.0.0-rc-66855b96-20241106_react@19.0.0-rc-66855b96-20241106__react@19.0.0-rc-66855b96-20241106/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n\nfunction Table(param) {\n    let { TableHeader, TableRows } = param;\n    const handleInputChange = (e, name)=>{\n        const updatedValue = e.target.value;\n        console.log(\"\".concat(name, \" updated to \").concat(updatedValue));\n    // Burada değer güncellenebilir (örneğin state ile)\n    };\n    const handleSaveClick = (name)=>{\n        console.log(\"\".concat(name, \" saved\"));\n    // Burada kaydetme işlemi yapılabilir\n    };\n    const handleEditClick = (name)=>{\n        console.log(\"\".concat(name, \" edit button clicked\"));\n    // Burada düzenleme moduna geçiş yapılabilir\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative overflow-x-auto shadow-md sm:rounded-lg\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n            className: \"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                    className: \"text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                        className: \"flex\",\n                        children: TableHeader.map((tabhead, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                className: \"flex-1 px-6 py-3\",\n                                children: tabhead\n                            }, index, false, {\n                                fileName: \"/home/furkan/Desktop/peershare/frontend/components/table.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 29\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/home/furkan/Desktop/peershare/frontend/components/table.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/furkan/Desktop/peershare/frontend/components/table.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                    children: TableRows.map((row, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            className: \"flex bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    scope: \"row\",\n                                    className: \"flex-1 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white\",\n                                    children: row.name\n                                }, void 0, false, {\n                                    fileName: \"/home/furkan/Desktop/peershare/frontend/components/table.tsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"flex-1 px-6 py-4\",\n                                    children: row.value\n                                }, void 0, false, {\n                                    fileName: \"/home/furkan/Desktop/peershare/frontend/components/table.tsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 29\n                                }, this),\n                                row.replaceable ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"flex-1 px-6 py-4\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        placeholder: \"Change value\",\n                                        className: \"border border-gray-300 rounded px-2 py-1 w-full\",\n                                        onChange: (e)=>handleInputChange(e, row.name)\n                                    }, void 0, false, {\n                                        fileName: \"/home/furkan/Desktop/peershare/frontend/components/table.tsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 37\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/furkan/Desktop/peershare/frontend/components/table.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 33\n                                }, this) : null,\n                                row.saveble ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"flex-1 px-6 py-4 text-right\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"#\",\n                                        className: \"font-medium text-blue-600 dark:text-blue-500 hover:underline\",\n                                        onClick: ()=>handleSaveClick(row.name),\n                                        children: \"Save\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/furkan/Desktop/peershare/frontend/components/table.tsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 37\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/furkan/Desktop/peershare/frontend/components/table.tsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 33\n                                }, this) : null\n                            ]\n                        }, index, true, {\n                            fileName: \"/home/furkan/Desktop/peershare/frontend/components/table.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 25\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/home/furkan/Desktop/peershare/frontend/components/table.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/furkan/Desktop/peershare/frontend/components/table.tsx\",\n            lineNumber: 35,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/furkan/Desktop/peershare/frontend/components/table.tsx\",\n        lineNumber: 34,\n        columnNumber: 9\n    }, this);\n}\n_c = Table;\nvar _c;\n$RefreshReg$(_c, \"Table\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvdGFibGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQWVPLFNBQVNBLE1BQU0sS0FBc0M7UUFBdEMsRUFBRUMsV0FBVyxFQUFFQyxTQUFTLEVBQWMsR0FBdEM7SUFDbEIsTUFBTUMsb0JBQW9CLENBQUNDLEdBQXdDQztRQUMvRCxNQUFNQyxlQUFlRixFQUFFRyxNQUFNLENBQUNDLEtBQUs7UUFDbkNDLFFBQVFDLEdBQUcsQ0FBQyxHQUFzQkosT0FBbkJELE1BQUssZ0JBQTJCLE9BQWJDO0lBQ2xDLG1EQUFtRDtJQUN2RDtJQUVBLE1BQU1LLGtCQUFrQixDQUFDTjtRQUNyQkksUUFBUUMsR0FBRyxDQUFDLEdBQVEsT0FBTEwsTUFBSztJQUNwQixxQ0FBcUM7SUFDekM7SUFFQSxNQUFNTyxrQkFBa0IsQ0FBQ1A7UUFDckJJLFFBQVFDLEdBQUcsQ0FBQyxHQUFRLE9BQUxMLE1BQUs7SUFDcEIsNENBQTRDO0lBQ2hEO0lBRUEscUJBQ0ksOERBQUNRO1FBQUlDLFdBQVU7a0JBQ1gsNEVBQUNDO1lBQU1ELFdBQVU7OzhCQUNiLDhEQUFDRTtvQkFBTUYsV0FBVTs4QkFDYiw0RUFBQ0c7d0JBQUdILFdBQVU7a0NBQ1RiLFlBQVlpQixHQUFHLENBQUMsQ0FBQ0MsU0FBU0Msc0JBQ3ZCLDhEQUFDQztnQ0FBZUMsT0FBTTtnQ0FBTVIsV0FBVTswQ0FDakNLOytCQURJQzs7Ozs7Ozs7Ozs7Ozs7OzhCQU1yQiw4REFBQ0c7OEJBQ0lyQixVQUFVZ0IsR0FBRyxDQUFDLENBQUNNLEtBQUtKLHNCQUNqQiw4REFBQ0g7NEJBQWVILFdBQVU7OzhDQUV0Qiw4REFBQ087b0NBQUdDLE9BQU07b0NBQU1SLFdBQVU7OENBQ3JCVSxJQUFJbkIsSUFBSTs7Ozs7OzhDQUliLDhEQUFDb0I7b0NBQUdYLFdBQVU7OENBQ1RVLElBQUloQixLQUFLOzs7Ozs7Z0NBSWJnQixJQUFJRSxXQUFXLGlCQUNaLDhEQUFDRDtvQ0FBR1gsV0FBVTs4Q0FDViw0RUFBQ2E7d0NBQ0dDLE1BQUs7d0NBQ0xDLGFBQVk7d0NBQ1pmLFdBQVU7d0NBQ1ZnQixVQUFVLENBQUMxQixJQUFNRCxrQkFBa0JDLEdBQUdvQixJQUFJbkIsSUFBSTs7Ozs7Ozs7OzsyQ0FHdEQ7Z0NBRUhtQixJQUFJTyxPQUFPLGlCQUNSLDhEQUFDTjtvQ0FBR1gsV0FBVTs4Q0FDViw0RUFBQ2tCO3dDQUNHQyxNQUFLO3dDQUNMbkIsV0FBVTt3Q0FDVm9CLFNBQVMsSUFBTXZCLGdCQUFnQmEsSUFBSW5CLElBQUk7a0RBQzFDOzs7Ozs7Ozs7OzJDQUlMOzsyQkFqQ0NlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3Q2pDO0tBdkVnQnBCIiwic291cmNlcyI6WyIvaG9tZS9mdXJrYW4vRGVza3RvcC9wZWVyc2hhcmUvZnJvbnRlbmQvY29tcG9uZW50cy90YWJsZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIFRhYmxlSGVhZGVySW50ZXJmYWNlIHtcbiAgICBUYWJsZUhlYWRlcjogc3RyaW5nW107XG59XG5cbmludGVyZmFjZSBUYWJsZVJvd0ludGVyZmFjZSB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHZhbHVlOiBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuIHwgdW5kZWZpbmVkO1xuICAgIHJlcGxhY2VhYmxlOiBib29sZWFuO1xuICAgIHNhdmVibGU6IGJvb2xlYW47XG59XG5cbmludGVyZmFjZSBUYWJsZVByb3BzIGV4dGVuZHMgVGFibGVIZWFkZXJJbnRlcmZhY2Uge1xuICAgIFRhYmxlUm93czogVGFibGVSb3dJbnRlcmZhY2VbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFRhYmxlKHsgVGFibGVIZWFkZXIsIFRhYmxlUm93cyB9OiBUYWJsZVByb3BzKSB7XG4gICAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4sIG5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCB1cGRhdGVkVmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgY29uc29sZS5sb2coYCR7bmFtZX0gdXBkYXRlZCB0byAke3VwZGF0ZWRWYWx1ZX1gKTtcbiAgICAgICAgLy8gQnVyYWRhIGRlxJ9lciBnw7xuY2VsbGVuZWJpbGlyICjDtnJuZcSfaW4gc3RhdGUgaWxlKVxuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVTYXZlQ2xpY2sgPSAobmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGAke25hbWV9IHNhdmVkYCk7XG4gICAgICAgIC8vIEJ1cmFkYSBrYXlkZXRtZSBpxZ9sZW1pIHlhcMSxbGFiaWxpclxuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVFZGl0Q2xpY2sgPSAobmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGAke25hbWV9IGVkaXQgYnV0dG9uIGNsaWNrZWRgKTtcbiAgICAgICAgLy8gQnVyYWRhIGTDvHplbmxlbWUgbW9kdW5hIGdlw6dpxZ8geWFwxLFsYWJpbGlyXG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgb3ZlcmZsb3cteC1hdXRvIHNoYWRvdy1tZCBzbTpyb3VuZGVkLWxnXCI+XG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtc20gdGV4dC1sZWZ0IHJ0bDp0ZXh0LXJpZ2h0IHRleHQtZ3JheS01MDAgZGFyazp0ZXh0LWdyYXktNDAwXCI+XG4gICAgICAgICAgICAgICAgPHRoZWFkIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTcwMCBiZy1ncmF5LTUwIGRhcms6YmctZ3JheS03MDAgZGFyazp0ZXh0LWdyYXktNDAwXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7VGFibGVIZWFkZXIubWFwKCh0YWJoZWFkLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBrZXk9e2luZGV4fSBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cImZsZXgtMSBweC02IHB5LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhYmhlYWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICB7VGFibGVSb3dzLm1hcCgocm93LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImZsZXggYmctd2hpdGUgYm9yZGVyLWIgZGFyazpiZy1ncmF5LTgwMCBkYXJrOmJvcmRlci1ncmF5LTcwMCBob3ZlcjpiZy1ncmF5LTUwIGRhcms6aG92ZXI6YmctZ3JheS02MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogUHJvcGVydHkgTmFtZSAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJyb3dcIiBjbGFzc05hbWU9XCJmbGV4LTEgcHgtNiBweS00IGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAgd2hpdGVzcGFjZS1ub3dyYXAgZGFyazp0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyb3cubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFByb3BlcnR5IFN0YXR1cyAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZmxleC0xIHB4LTYgcHktNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cm93LnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogUmVwbGFjZWFibGUgKGVkaXRhYmxlKSBmaWVsZCAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cm93LnJlcGxhY2VhYmxlID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZmxleC0xIHB4LTYgcHktNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ2hhbmdlIHZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQgcHgtMiBweS0xIHctZnVsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVJbnB1dENoYW5nZShlLCByb3cubmFtZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jvdy5zYXZlYmxlID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZmxleC0xIHB4LTYgcHktNCB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LW1lZGl1bSB0ZXh0LWJsdWUtNjAwIGRhcms6dGV4dC1ibHVlLTUwMCBob3Zlcjp1bmRlcmxpbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNhdmVDbGljayhyb3cubmFtZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2F2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsiVGFibGUiLCJUYWJsZUhlYWRlciIsIlRhYmxlUm93cyIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZSIsIm5hbWUiLCJ1cGRhdGVkVmFsdWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVTYXZlQ2xpY2siLCJoYW5kbGVFZGl0Q2xpY2siLCJkaXYiLCJjbGFzc05hbWUiLCJ0YWJsZSIsInRoZWFkIiwidHIiLCJtYXAiLCJ0YWJoZWFkIiwiaW5kZXgiLCJ0aCIsInNjb3BlIiwidGJvZHkiLCJyb3ciLCJ0ZCIsInJlcGxhY2VhYmxlIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsInNhdmVibGUiLCJhIiwiaHJlZiIsIm9uQ2xpY2siXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/table.tsx\n"));

/***/ })

});