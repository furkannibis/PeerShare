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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Table: () => (/* binding */ Table)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@15.0.3_react-dom@19.0.0-rc-66855b96-20241106_react@19.0.0-rc-66855b96-20241106__react@19.0.0-rc-66855b96-20241106/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n\nfunction Table(param) {\n    let { TableHeader, TableRows } = param;\n    const handleInputChange = (e, name)=>{\n        const updatedValue = e.target.value;\n        console.log(\"\".concat(name, \" updated to \").concat(updatedValue));\n    // Burada değer güncellenebilir (örneğin state ile)\n    };\n    const handleSaveClick = (name)=>{\n        console.log(\"\".concat(name, \" saved\"));\n    // Burada kaydetme işlemi yapılabilir\n    };\n    const handleEditClick = (name)=>{\n        console.log(\"\".concat(name, \" edit button clicked\"));\n    // Burada düzenleme moduna geçiş yapılabilir\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative overflow-x-auto shadow-md sm:rounded-lg\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n            className: \"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                    className: \"text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                        children: TableHeader.map((tabhead, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                className: \"px-6 py-3\",\n                                children: tabhead\n                            }, index, false, {\n                                fileName: \"/home/furkan/Desktop/peershare/frontend/components/table.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 29\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/home/furkan/Desktop/peershare/frontend/components/table.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/furkan/Desktop/peershare/frontend/components/table.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                    children: TableRows.map((row, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            className: \"bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    scope: \"row\",\n                                    className: \"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white\",\n                                    children: row.name\n                                }, void 0, false, {\n                                    fileName: \"/home/furkan/Desktop/peershare/frontend/components/table.tsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"px-6 py-4\",\n                                    children: row.value\n                                }, void 0, false, {\n                                    fileName: \"/home/furkan/Desktop/peershare/frontend/components/table.tsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 29\n                                }, this),\n                                row.replaceable && row.saveble ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            className: \"px-6 py-4\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"text\",\n                                                placeholder: \"Change value\",\n                                                className: \"border border-gray-300 rounded px-2 py-1 w-4/5\",\n                                                onChange: (e)=>handleInputChange(e, row.name)\n                                            }, void 0, false, {\n                                                fileName: \"/home/furkan/Desktop/peershare/frontend/components/table.tsx\",\n                                                lineNumber: 63,\n                                                columnNumber: 41\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/home/furkan/Desktop/peershare/frontend/components/table.tsx\",\n                                            lineNumber: 62,\n                                            columnNumber: 37\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            className: \"px-6 py-4 text-right\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                href: \"#\",\n                                                className: \"font-medium text-blue-600 dark:text-blue-500 hover:underline\",\n                                                onClick: ()=>handleSaveClick(row.name),\n                                                children: \"Save\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/furkan/Desktop/peershare/frontend/components/table.tsx\",\n                                                lineNumber: 73,\n                                                columnNumber: 41\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/home/furkan/Desktop/peershare/frontend/components/table.tsx\",\n                                            lineNumber: 72,\n                                            columnNumber: 37\n                                        }, this)\n                                    ]\n                                }, void 0, true) : row.replaceable ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"px-6 py-4\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"text\",\n                                            placeholder: \"Change value\",\n                                            className: \"border border-gray-300 rounded px-2 py-1 w-4/5\",\n                                            onChange: (e)=>handleInputChange(e, row.name)\n                                        }, void 0, false, {\n                                            fileName: \"/home/furkan/Desktop/peershare/frontend/components/table.tsx\",\n                                            lineNumber: 86,\n                                            columnNumber: 41\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/furkan/Desktop/peershare/frontend/components/table.tsx\",\n                                        lineNumber: 85,\n                                        columnNumber: 37\n                                    }, this)\n                                }, void 0, false) : row.saveble ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"px-6 py-4 text-right\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"#\",\n                                            className: \"font-medium text-blue-600 dark:text-blue-500 hover:underline\",\n                                            onClick: ()=>handleSaveClick(row.name),\n                                            children: \"Save\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/furkan/Desktop/peershare/frontend/components/table.tsx\",\n                                            lineNumber: 98,\n                                            columnNumber: 41\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/furkan/Desktop/peershare/frontend/components/table.tsx\",\n                                        lineNumber: 97,\n                                        columnNumber: 37\n                                    }, this)\n                                }, void 0, false) : // Diğer durumlar için herhangi bir şey gösterme\n                                ''\n                            ]\n                        }, index, true, {\n                            fileName: \"/home/furkan/Desktop/peershare/frontend/components/table.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 25\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/home/furkan/Desktop/peershare/frontend/components/table.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/furkan/Desktop/peershare/frontend/components/table.tsx\",\n            lineNumber: 35,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/furkan/Desktop/peershare/frontend/components/table.tsx\",\n        lineNumber: 34,\n        columnNumber: 9\n    }, this);\n}\n_c = Table;\nvar _c;\n$RefreshReg$(_c, \"Table\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvdGFibGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQWVPLFNBQVNBLE1BQU0sS0FBc0M7UUFBdEMsRUFBRUMsV0FBVyxFQUFFQyxTQUFTLEVBQWMsR0FBdEM7SUFDbEIsTUFBTUMsb0JBQW9CLENBQUNDLEdBQXdDQztRQUMvRCxNQUFNQyxlQUFlRixFQUFFRyxNQUFNLENBQUNDLEtBQUs7UUFDbkNDLFFBQVFDLEdBQUcsQ0FBQyxHQUFzQkosT0FBbkJELE1BQUssZ0JBQTJCLE9BQWJDO0lBQ2xDLG1EQUFtRDtJQUN2RDtJQUVBLE1BQU1LLGtCQUFrQixDQUFDTjtRQUNyQkksUUFBUUMsR0FBRyxDQUFDLEdBQVEsT0FBTEwsTUFBSztJQUNwQixxQ0FBcUM7SUFDekM7SUFFQSxNQUFNTyxrQkFBa0IsQ0FBQ1A7UUFDckJJLFFBQVFDLEdBQUcsQ0FBQyxHQUFRLE9BQUxMLE1BQUs7SUFDcEIsNENBQTRDO0lBQ2hEO0lBRUEscUJBQ0ksOERBQUNRO1FBQUlDLFdBQVU7a0JBQ1gsNEVBQUNDO1lBQU1ELFdBQVU7OzhCQUNiLDhEQUFDRTtvQkFBTUYsV0FBVTs4QkFDYiw0RUFBQ0c7a0NBQ0loQixZQUFZaUIsR0FBRyxDQUFDLENBQUNDLFNBQVNDLHNCQUN2Qiw4REFBQ0M7Z0NBQWVDLE9BQU07Z0NBQU1SLFdBQVU7MENBQ2pDSzsrQkFESUM7Ozs7Ozs7Ozs7Ozs7Ozs4QkFNckIsOERBQUNHOzhCQUNJckIsVUFBVWdCLEdBQUcsQ0FBQyxDQUFDTSxLQUFLSixzQkFDakIsOERBQUNIOzRCQUFlSCxXQUFVOzs4Q0FFdEIsOERBQUNPO29DQUFHQyxPQUFNO29DQUFNUixXQUFVOzhDQUNyQlUsSUFBSW5CLElBQUk7Ozs7Ozs4Q0FJYiw4REFBQ29CO29DQUFHWCxXQUFVOzhDQUNUVSxJQUFJaEIsS0FBSzs7Ozs7O2dDQUliZ0IsSUFBSUUsV0FBVyxJQUFJRixJQUFJRyxPQUFPLGlCQUMzQjs7c0RBRUksOERBQUNGOzRDQUFHWCxXQUFVO3NEQUNWLDRFQUFDYztnREFDR0MsTUFBSztnREFDTEMsYUFBWTtnREFDWmhCLFdBQVU7Z0RBQ1ZpQixVQUFVLENBQUMzQixJQUFNRCxrQkFBa0JDLEdBQUdvQixJQUFJbkIsSUFBSTs7Ozs7Ozs7Ozs7c0RBS3RELDhEQUFDb0I7NENBQUdYLFdBQVU7c0RBQ1YsNEVBQUNrQjtnREFDR0MsTUFBSztnREFDTG5CLFdBQVU7Z0RBQ1ZvQixTQUFTLElBQU12QixnQkFBZ0JhLElBQUluQixJQUFJOzBEQUMxQzs7Ozs7Ozs7Ozs7O21EQUtUbUIsSUFBSUUsV0FBVyxpQkFDZjs4Q0FFSSw0RUFBQ0Q7d0NBQUdYLFdBQVU7a0RBQ1YsNEVBQUNjOzRDQUNHQyxNQUFLOzRDQUNMQyxhQUFZOzRDQUNaaEIsV0FBVTs0Q0FDVmlCLFVBQVUsQ0FBQzNCLElBQU1ELGtCQUFrQkMsR0FBR29CLElBQUluQixJQUFJOzs7Ozs7Ozs7OztvREFJMURtQixJQUFJRyxPQUFPLGlCQUNYOzhDQUVJLDRFQUFDRjt3Q0FBR1gsV0FBVTtrREFDViw0RUFBQ2tCOzRDQUNHQyxNQUFLOzRDQUNMbkIsV0FBVTs0Q0FDVm9CLFNBQVMsSUFBTXZCLGdCQUFnQmEsSUFBSW5CLElBQUk7c0RBQzFDOzs7Ozs7Ozs7OztvREFNVCxnREFBZ0Q7Z0NBQ2hEOzsyQkE5RENlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzRWpDO0tBckdnQnBCIiwic291cmNlcyI6WyIvaG9tZS9mdXJrYW4vRGVza3RvcC9wZWVyc2hhcmUvZnJvbnRlbmQvY29tcG9uZW50cy90YWJsZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIFRhYmxlSGVhZGVySW50ZXJmYWNlIHtcbiAgICBUYWJsZUhlYWRlcjogc3RyaW5nW107XG59XG5cbmludGVyZmFjZSBUYWJsZVJvd0ludGVyZmFjZSB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHZhbHVlOiBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuIHwgdW5kZWZpbmVkO1xuICAgIHJlcGxhY2VhYmxlOiBib29sZWFuO1xuICAgIHNhdmVibGU6IGJvb2xlYW47XG59XG5cbmludGVyZmFjZSBUYWJsZVByb3BzIGV4dGVuZHMgVGFibGVIZWFkZXJJbnRlcmZhY2Uge1xuICAgIFRhYmxlUm93czogVGFibGVSb3dJbnRlcmZhY2VbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFRhYmxlKHsgVGFibGVIZWFkZXIsIFRhYmxlUm93cyB9OiBUYWJsZVByb3BzKSB7XG4gICAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4sIG5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCB1cGRhdGVkVmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgY29uc29sZS5sb2coYCR7bmFtZX0gdXBkYXRlZCB0byAke3VwZGF0ZWRWYWx1ZX1gKTtcbiAgICAgICAgLy8gQnVyYWRhIGRlxJ9lciBnw7xuY2VsbGVuZWJpbGlyICjDtnJuZcSfaW4gc3RhdGUgaWxlKVxuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVTYXZlQ2xpY2sgPSAobmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGAke25hbWV9IHNhdmVkYCk7XG4gICAgICAgIC8vIEJ1cmFkYSBrYXlkZXRtZSBpxZ9sZW1pIHlhcMSxbGFiaWxpclxuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVFZGl0Q2xpY2sgPSAobmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGAke25hbWV9IGVkaXQgYnV0dG9uIGNsaWNrZWRgKTtcbiAgICAgICAgLy8gQnVyYWRhIGTDvHplbmxlbWUgbW9kdW5hIGdlw6dpxZ8geWFwxLFsYWJpbGlyXG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgb3ZlcmZsb3cteC1hdXRvIHNoYWRvdy1tZCBzbTpyb3VuZGVkLWxnXCI+XG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtc20gdGV4dC1sZWZ0IHJ0bDp0ZXh0LXJpZ2h0IHRleHQtZ3JheS01MDAgZGFyazp0ZXh0LWdyYXktNDAwXCI+XG4gICAgICAgICAgICAgICAgPHRoZWFkIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTcwMCBiZy1ncmF5LTUwIGRhcms6YmctZ3JheS03MDAgZGFyazp0ZXh0LWdyYXktNDAwXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtUYWJsZUhlYWRlci5tYXAoKHRhYmhlYWQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGtleT17aW5kZXh9IHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwicHgtNiBweS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWJoZWFkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAge1RhYmxlUm93cy5tYXAoKHJvdywgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJiZy13aGl0ZSBib3JkZXItYiBkYXJrOmJnLWdyYXktODAwIGRhcms6Ym9yZGVyLWdyYXktNzAwIGhvdmVyOmJnLWdyYXktNTAgZGFyazpob3ZlcjpiZy1ncmF5LTYwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBQcm9wZXJ0eSBOYW1lICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cInJvd1wiIGNsYXNzTmFtZT1cInB4LTYgcHktNCBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwIHdoaXRlc3BhY2Utbm93cmFwIGRhcms6dGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cm93Lm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBQcm9wZXJ0eSBTdGF0dXMgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cm93LnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogRGXEn2VyIGRlxJ9pxZ90aXJpbGViaWxpciB2ZSBrYXlkZWRpbGViaWxpciBpc2UgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jvdy5yZXBsYWNlYWJsZSAmJiByb3cuc2F2ZWJsZSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBFZGl0YWJsZSB2YWx1ZSAtIGlmIHJlcGxhY2VhYmxlLCBzaG93IGlucHV0ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdDaGFuZ2UgdmFsdWUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZCBweC0yIHB5LTEgdy00LzVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUlucHV0Q2hhbmdlKGUsIHJvdy5uYW1lKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFNhdmUgYnV0dG9uICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LW1lZGl1bSB0ZXh0LWJsdWUtNjAwIGRhcms6dGV4dC1ibHVlLTUwMCBob3Zlcjp1bmRlcmxpbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTYXZlQ2xpY2socm93Lm5hbWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2F2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiByb3cucmVwbGFjZWFibGUgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogRWRpdGFibGUgdmFsdWUgLSBpZiByZXBsYWNlYWJsZSBidXQgbm90IHNhdmVibGUsIHNob3cgaW5wdXQgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0NoYW5nZSB2YWx1ZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkIHB4LTIgcHktMSB3LTQvNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlSW5wdXRDaGFuZ2UoZSwgcm93Lm5hbWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogcm93LnNhdmVibGUgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogU2F2ZSBidXR0b24gLSBpZiBub3QgcmVwbGFjZWFibGUgYnV0IHNhdmVibGUsIHNob3cgU2F2ZSAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gdGV4dC1ibHVlLTYwMCBkYXJrOnRleHQtYmx1ZS01MDAgaG92ZXI6dW5kZXJsaW5lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlU2F2ZUNsaWNrKHJvdy5uYW1lKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNhdmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBEacSfZXIgZHVydW1sYXIgacOnaW4gaGVyaGFuZ2kgYmlyIMWfZXkgZ8O2c3Rlcm1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIl0sIm5hbWVzIjpbIlRhYmxlIiwiVGFibGVIZWFkZXIiLCJUYWJsZVJvd3MiLCJoYW5kbGVJbnB1dENoYW5nZSIsImUiLCJuYW1lIiwidXBkYXRlZFZhbHVlIiwidGFyZ2V0IiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlU2F2ZUNsaWNrIiwiaGFuZGxlRWRpdENsaWNrIiwiZGl2IiwiY2xhc3NOYW1lIiwidGFibGUiLCJ0aGVhZCIsInRyIiwibWFwIiwidGFiaGVhZCIsImluZGV4IiwidGgiLCJzY29wZSIsInRib2R5Iiwicm93IiwidGQiLCJyZXBsYWNlYWJsZSIsInNhdmVibGUiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiYSIsImhyZWYiLCJvbkNsaWNrIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/table.tsx\n"));

/***/ })

});