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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Table: () => (/* binding */ Table)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@15.0.3_react-dom@19.0.0-rc-66855b96-20241106_react@19.0.0-rc-66855b96-20241106__react@19.0.0-rc-66855b96-20241106/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n\nfunction Table(param) {\n    let { TableHeader, TableRows } = param;\n    const handleInputChange = (e, name)=>{\n        const updatedValue = e.target.value;\n        console.log(\"\".concat(name, \" updated to \").concat(updatedValue));\n    // Burada değer güncellenebilir (örneğin state ile)\n    };\n    const handleSaveClick = (name)=>{\n        console.log(\"\".concat(name, \" saved\"));\n    // Burada kaydetme işlemi yapılabilir\n    };\n    const handleEditClick = (name)=>{\n        console.log(\"\".concat(name, \" edit button clicked\"));\n    // Burada düzenleme moduna geçiş yapılabilir\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative overflow-x-auto shadow-md sm:rounded-lg\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n            className: \"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                    className: \"text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                        className: \"table-header\",\n                        children: TableHeader.map((tabhead, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                className: \"px-6 py-3\",\n                                children: tabhead\n                            }, index, false, {\n                                fileName: \"/home/furkan/Desktop/peershare/frontend/components/table.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 29\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/home/furkan/Desktop/peershare/frontend/components/table.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/furkan/Desktop/peershare/frontend/components/table.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                    className: \"flex flex-cols justify-items-center\",\n                    children: TableRows.map((row, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            className: \"table-row bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    scope: \"row\",\n                                    className: \"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white\",\n                                    children: row.name\n                                }, void 0, false, {\n                                    fileName: \"/home/furkan/Desktop/peershare/frontend/components/table.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"px-6 py-4\",\n                                    children: row.value\n                                }, void 0, false, {\n                                    fileName: \"/home/furkan/Desktop/peershare/frontend/components/table.tsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"px-6 py-4\",\n                                    children: row.replaceable ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        placeholder: \"New value\",\n                                        className: \"border border-gray-300 rounded px-2 py-1 w-full\",\n                                        onChange: (e)=>handleInputChange(e, row.name)\n                                    }, void 0, false, {\n                                        fileName: \"/home/furkan/Desktop/peershare/frontend/components/table.tsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 37\n                                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-zinc-400 text-xs\",\n                                        children: \"N/A\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/furkan/Desktop/peershare/frontend/components/table.tsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 37\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/furkan/Desktop/peershare/frontend/components/table.tsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"px-6 py-4 text-right\",\n                                    children: row.saveble ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"#\",\n                                        className: \"font-medium text-blue-600 dark:text-blue-500 hover:underline\",\n                                        onClick: ()=>handleSaveClick(row.name),\n                                        children: \"Change\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/furkan/Desktop/peershare/frontend/components/table.tsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 37\n                                    }, this) : 'N/A'\n                                }, void 0, false, {\n                                    fileName: \"/home/furkan/Desktop/peershare/frontend/components/table.tsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, index, true, {\n                            fileName: \"/home/furkan/Desktop/peershare/frontend/components/table.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 25\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/home/furkan/Desktop/peershare/frontend/components/table.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/furkan/Desktop/peershare/frontend/components/table.tsx\",\n            lineNumber: 35,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/furkan/Desktop/peershare/frontend/components/table.tsx\",\n        lineNumber: 34,\n        columnNumber: 9\n    }, this);\n}\n_c = Table;\nvar _c;\n$RefreshReg$(_c, \"Table\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvdGFibGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQWVPLFNBQVNBLE1BQU0sS0FBc0M7UUFBdEMsRUFBRUMsV0FBVyxFQUFFQyxTQUFTLEVBQWMsR0FBdEM7SUFDbEIsTUFBTUMsb0JBQW9CLENBQUNDLEdBQXdDQztRQUMvRCxNQUFNQyxlQUFlRixFQUFFRyxNQUFNLENBQUNDLEtBQUs7UUFDbkNDLFFBQVFDLEdBQUcsQ0FBQyxHQUFzQkosT0FBbkJELE1BQUssZ0JBQTJCLE9BQWJDO0lBQ2xDLG1EQUFtRDtJQUN2RDtJQUVBLE1BQU1LLGtCQUFrQixDQUFDTjtRQUNyQkksUUFBUUMsR0FBRyxDQUFDLEdBQVEsT0FBTEwsTUFBSztJQUNwQixxQ0FBcUM7SUFDekM7SUFFQSxNQUFNTyxrQkFBa0IsQ0FBQ1A7UUFDckJJLFFBQVFDLEdBQUcsQ0FBQyxHQUFRLE9BQUxMLE1BQUs7SUFDcEIsNENBQTRDO0lBQ2hEO0lBRUEscUJBQ0ksOERBQUNRO1FBQUlDLFdBQVU7a0JBQ1gsNEVBQUNDO1lBQU1ELFdBQVU7OzhCQUNiLDhEQUFDRTtvQkFBTUYsV0FBVTs4QkFDYiw0RUFBQ0c7d0JBQUdILFdBQVU7a0NBQ1RiLFlBQVlpQixHQUFHLENBQUMsQ0FBQ0MsU0FBU0Msc0JBQ3ZCLDhEQUFDQztnQ0FBZUMsT0FBTTtnQ0FBTVIsV0FBVTswQ0FDakNLOytCQURJQzs7Ozs7Ozs7Ozs7Ozs7OzhCQU1yQiw4REFBQ0c7b0JBQU1ULFdBQVU7OEJBQ1paLFVBQVVnQixHQUFHLENBQUMsQ0FBQ00sS0FBS0osc0JBQ2pCLDhEQUFDSDs0QkFBZUgsV0FBVTs7OENBQ3RCLDhEQUFDVztvQ0FBR0gsT0FBTTtvQ0FBTVIsV0FBVTs4Q0FDckJVLElBQUluQixJQUFJOzs7Ozs7OENBR2IsOERBQUNvQjtvQ0FBR1gsV0FBVTs4Q0FDVFUsSUFBSWhCLEtBQUs7Ozs7Ozs4Q0FJZCw4REFBQ2lCO29DQUFHWCxXQUFVOzhDQUNUVSxJQUFJRSxXQUFXLGlCQUNaLDhEQUFDQzt3Q0FDR0MsTUFBSzt3Q0FDTEMsYUFBWTt3Q0FDWmYsV0FBVTt3Q0FDVmdCLFVBQVUsQ0FBQzFCLElBQU1ELGtCQUFrQkMsR0FBR29CLElBQUluQixJQUFJOzs7Ozs2REFFbEQsOERBQUMwQjt3Q0FBRWpCLFdBQVU7a0RBQXdCOzs7Ozs7Ozs7Ozs4Q0FHN0MsOERBQUNXO29DQUFHWCxXQUFVOzhDQUNUVSxJQUFJUSxPQUFPLGlCQUNSLDhEQUFDQzt3Q0FDR0MsTUFBSzt3Q0FDTHBCLFdBQVU7d0NBQ1ZxQixTQUFTLElBQU14QixnQkFBZ0JhLElBQUluQixJQUFJO2tEQUMxQzs7Ozs7K0NBR0Q7Ozs7Ozs7MkJBOUJIZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0NqQztLQXJFZ0JwQiIsInNvdXJjZXMiOlsiL2hvbWUvZnVya2FuL0Rlc2t0b3AvcGVlcnNoYXJlL2Zyb250ZW5kL2NvbXBvbmVudHMvdGFibGUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBUYWJsZUhlYWRlckludGVyZmFjZSB7XG4gICAgVGFibGVIZWFkZXI6IHN0cmluZ1tdO1xufVxuXG5pbnRlcmZhY2UgVGFibGVSb3dJbnRlcmZhY2Uge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbiB8IHVuZGVmaW5lZDtcbiAgICByZXBsYWNlYWJsZTogYm9vbGVhbjtcbiAgICBzYXZlYmxlOiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgVGFibGVQcm9wcyBleHRlbmRzIFRhYmxlSGVhZGVySW50ZXJmYWNlIHtcbiAgICBUYWJsZVJvd3M6IFRhYmxlUm93SW50ZXJmYWNlW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBUYWJsZSh7IFRhYmxlSGVhZGVyLCBUYWJsZVJvd3MgfTogVGFibGVQcm9wcykge1xuICAgIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+LCBuYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc3QgdXBkYXRlZFZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgIGNvbnNvbGUubG9nKGAke25hbWV9IHVwZGF0ZWQgdG8gJHt1cGRhdGVkVmFsdWV9YCk7XG4gICAgICAgIC8vIEJ1cmFkYSBkZcSfZXIgZ8O8bmNlbGxlbmViaWxpciAow7ZybmXEn2luIHN0YXRlIGlsZSlcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlU2F2ZUNsaWNrID0gKG5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhgJHtuYW1lfSBzYXZlZGApO1xuICAgICAgICAvLyBCdXJhZGEga2F5ZGV0bWUgacWfbGVtaSB5YXDEsWxhYmlsaXJcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlRWRpdENsaWNrID0gKG5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhgJHtuYW1lfSBlZGl0IGJ1dHRvbiBjbGlja2VkYCk7XG4gICAgICAgIC8vIEJ1cmFkYSBkw7x6ZW5sZW1lIG1vZHVuYSBnZcOnacWfIHlhcMSxbGFiaWxpclxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG92ZXJmbG93LXgtYXV0byBzaGFkb3ctbWQgc206cm91bmRlZC1sZ1wiPlxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LXNtIHRleHQtbGVmdCBydGw6dGV4dC1yaWdodCB0ZXh0LWdyYXktNTAwIGRhcms6dGV4dC1ncmF5LTQwMFwiPlxuICAgICAgICAgICAgICAgIDx0aGVhZCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS03MDAgYmctZ3JheS01MCBkYXJrOmJnLWdyYXktNzAwIGRhcms6dGV4dC1ncmF5LTQwMFwiPlxuICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwidGFibGUtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7VGFibGVIZWFkZXIubWFwKCh0YWJoZWFkLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBrZXk9e2luZGV4fSBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInB4LTYgcHktM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFiaGVhZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICA8dGJvZHkgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbHMganVzdGlmeS1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAge1RhYmxlUm93cy5tYXAoKHJvdywgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJ0YWJsZS1yb3cgYmctd2hpdGUgYm9yZGVyLWIgZGFyazpiZy1ncmF5LTgwMCBkYXJrOmJvcmRlci1ncmF5LTcwMCBob3ZlcjpiZy1ncmF5LTUwIGRhcms6aG92ZXI6YmctZ3JheS02MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc2NvcGU9XCJyb3dcIiBjbGFzc05hbWU9XCJweC02IHB5LTQgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCB3aGl0ZXNwYWNlLW5vd3JhcCBkYXJrOnRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jvdy5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyb3cudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBFxJ9lciByZXBsYWNlYWJsZSB0cnVlIGlzZSBpbnB1dCBnw7ZzdGVyICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jvdy5yZXBsYWNlYWJsZSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5ldyB2YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkIHB4LTIgcHktMSB3LWZ1bGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlSW5wdXRDaGFuZ2UoZSwgcm93Lm5hbWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IDxwIGNsYXNzTmFtZT1cInRleHQtemluYy00MDAgdGV4dC14c1wiPk4vQTwvcD59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cm93LnNhdmVibGUgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LW1lZGl1bSB0ZXh0LWJsdWUtNjAwIGRhcms6dGV4dC1ibHVlLTUwMCBob3Zlcjp1bmRlcmxpbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNhdmVDbGljayhyb3cubmFtZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2hhbmdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAnTi9BJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsiVGFibGUiLCJUYWJsZUhlYWRlciIsIlRhYmxlUm93cyIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZSIsIm5hbWUiLCJ1cGRhdGVkVmFsdWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVTYXZlQ2xpY2siLCJoYW5kbGVFZGl0Q2xpY2siLCJkaXYiLCJjbGFzc05hbWUiLCJ0YWJsZSIsInRoZWFkIiwidHIiLCJtYXAiLCJ0YWJoZWFkIiwiaW5kZXgiLCJ0aCIsInNjb3BlIiwidGJvZHkiLCJyb3ciLCJ0ZCIsInJlcGxhY2VhYmxlIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsInAiLCJzYXZlYmxlIiwiYSIsImhyZWYiLCJvbkNsaWNrIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/table.tsx\n"));

/***/ })

});