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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Table: () => (/* binding */ Table)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@15.0.3_react-dom@19.0.0-rc-66855b96-20241106_react@19.0.0-rc-66855b96-20241106__react@19.0.0-rc-66855b96-20241106/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n\nfunction Table(param) {\n    let { TableHeader, TableRows } = param;\n    const handleInputChange = (e, name)=>{\n        const updatedValue = e.target.value;\n        console.log(\"\".concat(name, \" updated to \").concat(updatedValue));\n    // Burada değer güncellenebilir (örneğin state ile)\n    };\n    const handleSaveClick = (name)=>{\n        console.log(\"\".concat(name, \" saved\"));\n    // Burada kaydetme işlemi yapılabilir\n    };\n    const handleEditClick = (name)=>{\n        console.log(\"\".concat(name, \" edit button clicked\"));\n    // Burada düzenleme moduna geçiş yapılabilir\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative overflow-x-auto shadow-md sm:rounded-lg\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n            className: \"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                    className: \"text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                        className: \"table-header\",\n                        children: TableHeader.map((tabhead, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                className: \"px-6 py-3\",\n                                children: tabhead\n                            }, index, false, {\n                                fileName: \"/home/furkan/Desktop/peershare/frontend/components/table.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 29\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/home/furkan/Desktop/peershare/frontend/components/table.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/furkan/Desktop/peershare/frontend/components/table.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                    children: TableRows.map((row, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            className: \"table-row bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    scope: \"row\",\n                                    className: \"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white\",\n                                    children: row.name\n                                }, void 0, false, {\n                                    fileName: \"/home/furkan/Desktop/peershare/frontend/components/table.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"px-6 py-4\",\n                                    children: row.value\n                                }, void 0, false, {\n                                    fileName: \"/home/furkan/Desktop/peershare/frontend/components/table.tsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"px-6 py-4\",\n                                    children: row.replaceable ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        placeholder: \"Change value\",\n                                        className: \"border border-gray-300 rounded px-2 py-1 w-full\",\n                                        onChange: (e)=>handleInputChange(e, row.name)\n                                    }, void 0, false, {\n                                        fileName: \"/home/furkan/Desktop/peershare/frontend/components/table.tsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 37\n                                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-zinc-300 text-xs\",\n                                        children: \"N/A\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/furkan/Desktop/peershare/frontend/components/table.tsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 37\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/furkan/Desktop/peershare/frontend/components/table.tsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"px-6 py-4 text-right\",\n                                    children: row.saveble ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"#\",\n                                        className: \"font-medium text-blue-600 dark:text-blue-500 hover:underline\",\n                                        onClick: ()=>handleSaveClick(row.name),\n                                        children: \"Change\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/furkan/Desktop/peershare/frontend/components/table.tsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 37\n                                    }, this) : 'N/A'\n                                }, void 0, false, {\n                                    fileName: \"/home/furkan/Desktop/peershare/frontend/components/table.tsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, index, true, {\n                            fileName: \"/home/furkan/Desktop/peershare/frontend/components/table.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 25\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/home/furkan/Desktop/peershare/frontend/components/table.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/furkan/Desktop/peershare/frontend/components/table.tsx\",\n            lineNumber: 35,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/furkan/Desktop/peershare/frontend/components/table.tsx\",\n        lineNumber: 34,\n        columnNumber: 9\n    }, this);\n}\n_c = Table;\nvar _c;\n$RefreshReg$(_c, \"Table\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvdGFibGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQWVPLFNBQVNBLE1BQU0sS0FBc0M7UUFBdEMsRUFBRUMsV0FBVyxFQUFFQyxTQUFTLEVBQWMsR0FBdEM7SUFDbEIsTUFBTUMsb0JBQW9CLENBQUNDLEdBQXdDQztRQUMvRCxNQUFNQyxlQUFlRixFQUFFRyxNQUFNLENBQUNDLEtBQUs7UUFDbkNDLFFBQVFDLEdBQUcsQ0FBQyxHQUFzQkosT0FBbkJELE1BQUssZ0JBQTJCLE9BQWJDO0lBQ2xDLG1EQUFtRDtJQUN2RDtJQUVBLE1BQU1LLGtCQUFrQixDQUFDTjtRQUNyQkksUUFBUUMsR0FBRyxDQUFDLEdBQVEsT0FBTEwsTUFBSztJQUNwQixxQ0FBcUM7SUFDekM7SUFFQSxNQUFNTyxrQkFBa0IsQ0FBQ1A7UUFDckJJLFFBQVFDLEdBQUcsQ0FBQyxHQUFRLE9BQUxMLE1BQUs7SUFDcEIsNENBQTRDO0lBQ2hEO0lBRUEscUJBQ0ksOERBQUNRO1FBQUlDLFdBQVU7a0JBQ1gsNEVBQUNDO1lBQU1ELFdBQVU7OzhCQUNiLDhEQUFDRTtvQkFBTUYsV0FBVTs4QkFDYiw0RUFBQ0c7d0JBQUdILFdBQVU7a0NBQ1RiLFlBQVlpQixHQUFHLENBQUMsQ0FBQ0MsU0FBU0Msc0JBQ3ZCLDhEQUFDQztnQ0FBZUMsT0FBTTtnQ0FBTVIsV0FBVTswQ0FDakNLOytCQURJQzs7Ozs7Ozs7Ozs7Ozs7OzhCQU1yQiw4REFBQ0c7OEJBQ0lyQixVQUFVZ0IsR0FBRyxDQUFDLENBQUNNLEtBQUtKLHNCQUNqQiw4REFBQ0g7NEJBQWVILFdBQVU7OzhDQUN0Qiw4REFBQ087b0NBQUdDLE9BQU07b0NBQU1SLFdBQVU7OENBQ3JCVSxJQUFJbkIsSUFBSTs7Ozs7OzhDQUdiLDhEQUFDb0I7b0NBQUdYLFdBQVU7OENBQ1RVLElBQUloQixLQUFLOzs7Ozs7OENBSWQsOERBQUNpQjtvQ0FBR1gsV0FBVTs4Q0FDVFUsSUFBSUUsV0FBVyxpQkFDWiw4REFBQ0M7d0NBQ0dDLE1BQUs7d0NBQ0xDLGFBQVk7d0NBQ1pmLFdBQVU7d0NBQ1ZnQixVQUFVLENBQUMxQixJQUFNRCxrQkFBa0JDLEdBQUdvQixJQUFJbkIsSUFBSTs7Ozs7NkRBRWxELDhEQUFDMEI7d0NBQUVqQixXQUFVO2tEQUF3Qjs7Ozs7Ozs7Ozs7OENBRzdDLDhEQUFDVztvQ0FBR1gsV0FBVTs4Q0FDVFUsSUFBSVEsT0FBTyxpQkFDUiw4REFBQ0M7d0NBQ0dDLE1BQUs7d0NBQ0xwQixXQUFVO3dDQUNWcUIsU0FBUyxJQUFNeEIsZ0JBQWdCYSxJQUFJbkIsSUFBSTtrREFDMUM7Ozs7OytDQUdEOzs7Ozs7OzJCQTlCSGU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNDakM7S0FyRWdCcEIiLCJzb3VyY2VzIjpbIi9ob21lL2Z1cmthbi9EZXNrdG9wL3BlZXJzaGFyZS9mcm9udGVuZC9jb21wb25lbnRzL3RhYmxlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgVGFibGVIZWFkZXJJbnRlcmZhY2Uge1xuICAgIFRhYmxlSGVhZGVyOiBzdHJpbmdbXTtcbn1cblxuaW50ZXJmYWNlIFRhYmxlUm93SW50ZXJmYWNlIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgdmFsdWU6IHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG4gICAgcmVwbGFjZWFibGU6IGJvb2xlYW47XG4gICAgc2F2ZWJsZTogYm9vbGVhbjtcbn1cblxuaW50ZXJmYWNlIFRhYmxlUHJvcHMgZXh0ZW5kcyBUYWJsZUhlYWRlckludGVyZmFjZSB7XG4gICAgVGFibGVSb3dzOiBUYWJsZVJvd0ludGVyZmFjZVtdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gVGFibGUoeyBUYWJsZUhlYWRlciwgVGFibGVSb3dzIH06IFRhYmxlUHJvcHMpIHtcbiAgICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PiwgbmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IHVwZGF0ZWRWYWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICBjb25zb2xlLmxvZyhgJHtuYW1lfSB1cGRhdGVkIHRvICR7dXBkYXRlZFZhbHVlfWApO1xuICAgICAgICAvLyBCdXJhZGEgZGXEn2VyIGfDvG5jZWxsZW5lYmlsaXIgKMO2cm5lxJ9pbiBzdGF0ZSBpbGUpXG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZVNhdmVDbGljayA9IChuYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYCR7bmFtZX0gc2F2ZWRgKTtcbiAgICAgICAgLy8gQnVyYWRhIGtheWRldG1lIGnFn2xlbWkgeWFwxLFsYWJpbGlyXG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUVkaXRDbGljayA9IChuYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYCR7bmFtZX0gZWRpdCBidXR0b24gY2xpY2tlZGApO1xuICAgICAgICAvLyBCdXJhZGEgZMO8emVubGVtZSBtb2R1bmEgZ2XDp2nFnyB5YXDEsWxhYmlsaXJcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBvdmVyZmxvdy14LWF1dG8gc2hhZG93LW1kIHNtOnJvdW5kZWQtbGdcIj5cbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1zbSB0ZXh0LWxlZnQgcnRsOnRleHQtcmlnaHQgdGV4dC1ncmF5LTUwMCBkYXJrOnRleHQtZ3JheS00MDBcIj5cbiAgICAgICAgICAgICAgICA8dGhlYWQgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNzAwIGJnLWdyYXktNTAgZGFyazpiZy1ncmF5LTcwMCBkYXJrOnRleHQtZ3JheS00MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cInRhYmxlLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge1RhYmxlSGVhZGVyLm1hcCgodGFiaGVhZCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGgga2V5PXtpbmRleH0gc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9XCJweC02IHB5LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhYmhlYWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICB7VGFibGVSb3dzLm1hcCgocm93LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17aW5kZXh9IGNsYXNzTmFtZT1cInRhYmxlLXJvdyBiZy13aGl0ZSBib3JkZXItYiBkYXJrOmJnLWdyYXktODAwIGRhcms6Ym9yZGVyLWdyYXktNzAwIGhvdmVyOmJnLWdyYXktNTAgZGFyazpob3ZlcjpiZy1ncmF5LTYwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cInJvd1wiIGNsYXNzTmFtZT1cInB4LTYgcHktNCBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwIHdoaXRlc3BhY2Utbm93cmFwIGRhcms6dGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cm93Lm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jvdy52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIEXEn2VyIHJlcGxhY2VhYmxlIHRydWUgaXNlIGlucHV0IGfDtnN0ZXIgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cm93LnJlcGxhY2VhYmxlID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ2hhbmdlIHZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQgcHgtMiBweS0xIHctZnVsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVJbnB1dENoYW5nZShlLCByb3cubmFtZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogPHAgY2xhc3NOYW1lPVwidGV4dC16aW5jLTMwMCB0ZXh0LXhzXCI+Ti9BPC9wPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyb3cuc2F2ZWJsZSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIHRleHQtYmx1ZS02MDAgZGFyazp0ZXh0LWJsdWUtNTAwIGhvdmVyOnVuZGVybGluZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlU2F2ZUNsaWNrKHJvdy5uYW1lKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDaGFuZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6ICdOL0EnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJUYWJsZSIsIlRhYmxlSGVhZGVyIiwiVGFibGVSb3dzIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJlIiwibmFtZSIsInVwZGF0ZWRWYWx1ZSIsInRhcmdldCIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsImhhbmRsZVNhdmVDbGljayIsImhhbmRsZUVkaXRDbGljayIsImRpdiIsImNsYXNzTmFtZSIsInRhYmxlIiwidGhlYWQiLCJ0ciIsIm1hcCIsInRhYmhlYWQiLCJpbmRleCIsInRoIiwic2NvcGUiLCJ0Ym9keSIsInJvdyIsInRkIiwicmVwbGFjZWFibGUiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwicCIsInNhdmVibGUiLCJhIiwiaHJlZiIsIm9uQ2xpY2siXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/table.tsx\n"));

/***/ })

});