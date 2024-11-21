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

/***/ "(app-pages-browser)/./app/(core)/server/page.tsx":
/*!************************************!*\
  !*** ./app/(core)/server/page.tsx ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ServerPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@15.0.3_react-dom@19.0.0-rc-66855b96-20241106_react@19.0.0-rc-66855b96-20241106__react@19.0.0-rc-66855b96-20241106/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@15.0.3_react-dom@19.0.0-rc-66855b96-20241106_react@19.0.0-rc-66855b96-20241106__react@19.0.0-rc-66855b96-20241106/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions */ \"(app-pages-browser)/./app/(core)/server/functions.tsx\");\n/* harmony import */ var _components_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/table */ \"(app-pages-browser)/./components/table.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction ServerPage() {\n    _s();\n    const [lanServerStat, setLanServerStat] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"ServerPage.useEffect\": ()=>{\n            const fetchServerStatus = {\n                \"ServerPage.useEffect.fetchServerStatus\": async ()=>{\n                    try {\n                        const response = await (0,_functions__WEBPACK_IMPORTED_MODULE_2__.lanServerStatus)();\n                        setLanServerStat(response);\n                    } catch (error) {\n                        console.error(\"Error fetching server status:\", error);\n                    }\n                }\n            }[\"ServerPage.useEffect.fetchServerStatus\"];\n            fetchServerStatus();\n        }\n    }[\"ServerPage.useEffect\"], []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-4/5 mx-auto grid sm:w-full sm:grid-cols-1 md:w-full md:grid-cols-1 lg:w-4/5 lg:grid-cols-2 xl:w-4/5 xl:grid-cols-2 2xl:w-4/5 2xl:grid-cols-2 gap-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col justify-items-center border p-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-3xl uppercase font-bold mx-auto\",\n                        children: \"LAN Server Status\"\n                    }, void 0, false, {\n                        fileName: \"/home/furkan/Desktop/peershare/frontend/app/(core)/server/page.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_table__WEBPACK_IMPORTED_MODULE_3__.Table, {\n                        TableHeader: [\n                            'Property Name',\n                            'Property Value'\n                        ],\n                        TableRows: [\n                            {\n                                name: 'IP',\n                                value: (lanServerStat === null || lanServerStat === void 0 ? void 0 : lanServerStat.service_info.ip) || 'Loading...'\n                            },\n                            {\n                                name: 'Port',\n                                value: (lanServerStat === null || lanServerStat === void 0 ? void 0 : lanServerStat.service_info.port) === 0 ? 'undefined' : (lanServerStat === null || lanServerStat === void 0 ? void 0 : lanServerStat.service_info.port) || 'Loading...'\n                            },\n                            {\n                                name: 'Server Status',\n                                value: (lanServerStat === null || lanServerStat === void 0 ? void 0 : lanServerStat.service_info.server_status) || 'Loading...'\n                            },\n                            {\n                                name: 'Server Binding',\n                                value: (lanServerStat === null || lanServerStat === void 0 ? void 0 : lanServerStat.server_binding) ? 'Yes' : 'No'\n                            },\n                            {\n                                name: 'Server Listening',\n                                value: (lanServerStat === null || lanServerStat === void 0 ? void 0 : lanServerStat.server_listening) ? 'Yes' : 'No'\n                            }\n                        ]\n                    }, void 0, false, {\n                        fileName: \"/home/furkan/Desktop/peershare/frontend/app/(core)/server/page.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                name: \"\",\n                                id: \"\"\n                            }, void 0, false, {\n                                fileName: \"/home/furkan/Desktop/peershare/frontend/app/(core)/server/page.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"border\",\n                                children: \"Start Server\"\n                            }, void 0, false, {\n                                fileName: \"/home/furkan/Desktop/peershare/frontend/app/(core)/server/page.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/furkan/Desktop/peershare/frontend/app/(core)/server/page.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/furkan/Desktop/peershare/frontend/app/(core)/server/page.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col justify-items-center border p-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-3xl uppercase font-bold mx-auto\",\n                    children: \"Server Status\"\n                }, void 0, false, {\n                    fileName: \"/home/furkan/Desktop/peershare/frontend/app/(core)/server/page.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/furkan/Desktop/peershare/frontend/app/(core)/server/page.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col justify-items-center border p-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-3xl uppercase font-bold mx-auto\",\n                    children: \"Server Status\"\n                }, void 0, false, {\n                    fileName: \"/home/furkan/Desktop/peershare/frontend/app/(core)/server/page.tsx\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/furkan/Desktop/peershare/frontend/app/(core)/server/page.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col justify-items-center border p-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-3xl uppercase font-bold mx-auto\",\n                    children: \"Server Status\"\n                }, void 0, false, {\n                    fileName: \"/home/furkan/Desktop/peershare/frontend/app/(core)/server/page.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/furkan/Desktop/peershare/frontend/app/(core)/server/page.tsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col justify-items-center border p-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-3xl uppercase font-bold mx-auto\",\n                    children: \"Server Status\"\n                }, void 0, false, {\n                    fileName: \"/home/furkan/Desktop/peershare/frontend/app/(core)/server/page.tsx\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/furkan/Desktop/peershare/frontend/app/(core)/server/page.tsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col justify-items-center border p-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-3xl uppercase font-bold mx-auto\",\n                    children: \"Server Status\"\n                }, void 0, false, {\n                    fileName: \"/home/furkan/Desktop/peershare/frontend/app/(core)/server/page.tsx\",\n                    lineNumber: 75,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/furkan/Desktop/peershare/frontend/app/(core)/server/page.tsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/furkan/Desktop/peershare/frontend/app/(core)/server/page.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n_s(ServerPage, \"MYPs0k/aqnTTyiIAxX6sE0zOzPc=\");\n_c = ServerPage;\nvar _c;\n$RefreshReg$(_c, \"ServerPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8oY29yZSkvc2VydmVyL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRW1EO0FBRVc7QUFFbkI7QUFFNUIsU0FBU0s7O0lBQ3RCLE1BQU0sQ0FBQ0MsZUFBZUMsaUJBQWlCLEdBQUdOLCtDQUFRQSxDQUFrQztJQUNwRkMsZ0RBQVNBO2dDQUFDO1lBQ1IsTUFBTU07MERBQW9CO29CQUN4QixJQUFJO3dCQUNGLE1BQU1DLFdBQVcsTUFBTU4sMkRBQWVBO3dCQUN0Q0ksaUJBQWlCRTtvQkFDbkIsRUFBRSxPQUFPQyxPQUFPO3dCQUNkQyxRQUFRRCxLQUFLLENBQUMsaUNBQWlDQTtvQkFDakQ7Z0JBQ0Y7O1lBQ0FGO1FBQ0Y7K0JBQUcsRUFBRTtJQUNMLHFCQUNFLDhEQUFDSTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDQzt3QkFBR0QsV0FBVTtrQ0FBdUM7Ozs7OztrQ0FDckQsOERBQUNULG9EQUFLQTt3QkFDSlcsYUFBYTs0QkFBQzs0QkFBaUI7eUJBQWlCO3dCQUNoREMsV0FBVzs0QkFDVDtnQ0FDRUMsTUFBTTtnQ0FDTkMsT0FBT1osQ0FBQUEsMEJBQUFBLG9DQUFBQSxjQUFlYSxZQUFZLENBQUNDLEVBQUUsS0FBSTs0QkFDM0M7NEJBQ0E7Z0NBQ0VILE1BQU07Z0NBQ05DLE9BQU8sQ0FBQ1osMEJBQUFBLG9DQUFBQSxjQUFlYSxZQUFZLENBQUNFLElBQUksTUFBSyxJQUFLLGNBQWNmLENBQUFBLDBCQUFBQSxvQ0FBQUEsY0FBZWEsWUFBWSxDQUFDRSxJQUFJLEtBQUk7NEJBQ3RHOzRCQUNBO2dDQUNFSixNQUFNO2dDQUNOQyxPQUFPWixDQUFBQSwwQkFBQUEsb0NBQUFBLGNBQWVhLFlBQVksQ0FBQ0csYUFBYSxLQUFJOzRCQUN0RDs0QkFDQTtnQ0FDRUwsTUFBTTtnQ0FDTkMsT0FBT1osQ0FBQUEsMEJBQUFBLG9DQUFBQSxjQUFlaUIsY0FBYyxJQUFHLFFBQVE7NEJBQ2pEOzRCQUNBO2dDQUNFTixNQUFNO2dDQUNOQyxPQUFPWixDQUFBQSwwQkFBQUEsb0NBQUFBLGNBQWVrQixnQkFBZ0IsSUFBRyxRQUFROzRCQUNuRDt5QkFDRDs7Ozs7O2tDQUVILDhEQUFDWjs7MENBQ0MsOERBQUNhO2dDQUFNQyxNQUFLO2dDQUFPVCxNQUFLO2dDQUFHVSxJQUFHOzs7Ozs7MENBQzlCLDhEQUFDQztnQ0FBT2YsV0FBVTswQ0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUsvQiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNDO29CQUFHRCxXQUFVOzhCQUF1Qzs7Ozs7Ozs7Ozs7MEJBR3ZELDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0M7b0JBQUdELFdBQVU7OEJBQXVDOzs7Ozs7Ozs7OzswQkFHdkQsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDQztvQkFBR0QsV0FBVTs4QkFBdUM7Ozs7Ozs7Ozs7OzBCQUd2RCw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNDO29CQUFHRCxXQUFVOzhCQUF1Qzs7Ozs7Ozs7Ozs7MEJBR3ZELDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0M7b0JBQUdELFdBQVU7OEJBQXVDOzs7Ozs7Ozs7Ozs7Ozs7OztBQUs3RDtHQXZFd0JSO0tBQUFBIiwic291cmNlcyI6WyIvaG9tZS9mdXJrYW4vRGVza3RvcC9wZWVyc2hhcmUvZnJvbnRlbmQvYXBwLyhjb3JlKS9zZXJ2ZXIvcGFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBsYW5TZXJ2ZXJTdGF0dXMsIHN0YXJ0TEFOU2VydmVyIH0gZnJvbSBcIi4vZnVuY3Rpb25zXCI7XG5pbXBvcnQgeyBMYW5TZXJ2ZXJTdGF0dXNJbnRlcmZhY2UgfSBmcm9tICcuL2Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBUYWJsZSB9IGZyb20gXCJAL2NvbXBvbmVudHMvdGFibGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VydmVyUGFnZSgpIHtcbiAgY29uc3QgW2xhblNlcnZlclN0YXQsIHNldExhblNlcnZlclN0YXRdID0gdXNlU3RhdGU8TGFuU2VydmVyU3RhdHVzSW50ZXJmYWNlIHwgbnVsbD4obnVsbCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hTZXJ2ZXJTdGF0dXMgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGxhblNlcnZlclN0YXR1cygpO1xuICAgICAgICBzZXRMYW5TZXJ2ZXJTdGF0KHJlc3BvbnNlKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBzZXJ2ZXIgc3RhdHVzOlwiLCBlcnJvcik7XG4gICAgICB9XG4gICAgfTtcbiAgICBmZXRjaFNlcnZlclN0YXR1cygpO1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LTQvNSBteC1hdXRvIGdyaWQgc206dy1mdWxsIHNtOmdyaWQtY29scy0xIG1kOnctZnVsbCBtZDpncmlkLWNvbHMtMSBsZzp3LTQvNSBsZzpncmlkLWNvbHMtMiB4bDp3LTQvNSB4bDpncmlkLWNvbHMtMiAyeGw6dy00LzUgMnhsOmdyaWQtY29scy0yIGdhcC0xMFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktaXRlbXMtY2VudGVyIGJvcmRlciBwLTVcIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIHVwcGVyY2FzZSBmb250LWJvbGQgbXgtYXV0b1wiPkxBTiBTZXJ2ZXIgU3RhdHVzPC9oMj5cbiAgICAgICAgPFRhYmxlXG4gICAgICAgICAgVGFibGVIZWFkZXI9e1snUHJvcGVydHkgTmFtZScsICdQcm9wZXJ0eSBWYWx1ZSddfVxuICAgICAgICAgIFRhYmxlUm93cz17W1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAnSVAnLFxuICAgICAgICAgICAgICB2YWx1ZTogbGFuU2VydmVyU3RhdD8uc2VydmljZV9pbmZvLmlwIHx8ICdMb2FkaW5nLi4uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogJ1BvcnQnLFxuICAgICAgICAgICAgICB2YWx1ZTogKGxhblNlcnZlclN0YXQ/LnNlcnZpY2VfaW5mby5wb3J0ID09PSAwKSA/ICd1bmRlZmluZWQnIDogbGFuU2VydmVyU3RhdD8uc2VydmljZV9pbmZvLnBvcnQgfHwgJ0xvYWRpbmcuLi4nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogJ1NlcnZlciBTdGF0dXMnLFxuICAgICAgICAgICAgICB2YWx1ZTogbGFuU2VydmVyU3RhdD8uc2VydmljZV9pbmZvLnNlcnZlcl9zdGF0dXMgfHwgJ0xvYWRpbmcuLi4nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAnU2VydmVyIEJpbmRpbmcnLFxuICAgICAgICAgICAgICB2YWx1ZTogbGFuU2VydmVyU3RhdD8uc2VydmVyX2JpbmRpbmcgPyAnWWVzJyA6ICdObycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAnU2VydmVyIExpc3RlbmluZycsXG4gICAgICAgICAgICAgIHZhbHVlOiBsYW5TZXJ2ZXJTdGF0Py5zZXJ2ZXJfbGlzdGVuaW5nID8gJ1llcycgOiAnTm8nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdfVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJcIiBpZD1cIlwiIC8+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2JvcmRlcic+U3RhcnQgU2VydmVyPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuXG5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktaXRlbXMtY2VudGVyIGJvcmRlciBwLTVcIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIHVwcGVyY2FzZSBmb250LWJvbGQgbXgtYXV0b1wiPlNlcnZlciBTdGF0dXM8L2gyPlxuICAgICAgICB7LyogPFRhYmxlIFRhYmxlSGVhZGVyPXtbJ1RyaWFsJ119IC8+ICovfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1pdGVtcy1jZW50ZXIgYm9yZGVyIHAtNVwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgdXBwZXJjYXNlIGZvbnQtYm9sZCBteC1hdXRvXCI+U2VydmVyIFN0YXR1czwvaDI+XG4gICAgICAgIHsvKiA8VGFibGUgVGFibGVIZWFkZXI9e1snVHJpYWwnXX0gLz4gKi99XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWl0ZW1zLWNlbnRlciBib3JkZXIgcC01XCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCB1cHBlcmNhc2UgZm9udC1ib2xkIG14LWF1dG9cIj5TZXJ2ZXIgU3RhdHVzPC9oMj5cbiAgICAgICAgey8qIDxUYWJsZSBUYWJsZUhlYWRlcj17WydUcmlhbCddfSAvPiAqL31cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktaXRlbXMtY2VudGVyIGJvcmRlciBwLTVcIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIHVwcGVyY2FzZSBmb250LWJvbGQgbXgtYXV0b1wiPlNlcnZlciBTdGF0dXM8L2gyPlxuICAgICAgICB7LyogPFRhYmxlIFRhYmxlSGVhZGVyPXtbJ1RyaWFsJ119IC8+ICovfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1pdGVtcy1jZW50ZXIgYm9yZGVyIHAtNVwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgdXBwZXJjYXNlIGZvbnQtYm9sZCBteC1hdXRvXCI+U2VydmVyIFN0YXR1czwvaDI+XG4gICAgICAgIHsvKiA8VGFibGUgVGFibGVIZWFkZXI9e1snVHJpYWwnXX0gLz4gKi99XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwibGFuU2VydmVyU3RhdHVzIiwiVGFibGUiLCJTZXJ2ZXJQYWdlIiwibGFuU2VydmVyU3RhdCIsInNldExhblNlcnZlclN0YXQiLCJmZXRjaFNlcnZlclN0YXR1cyIsInJlc3BvbnNlIiwiZXJyb3IiLCJjb25zb2xlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJUYWJsZUhlYWRlciIsIlRhYmxlUm93cyIsIm5hbWUiLCJ2YWx1ZSIsInNlcnZpY2VfaW5mbyIsImlwIiwicG9ydCIsInNlcnZlcl9zdGF0dXMiLCJzZXJ2ZXJfYmluZGluZyIsInNlcnZlcl9saXN0ZW5pbmciLCJpbnB1dCIsInR5cGUiLCJpZCIsImJ1dHRvbiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(core)/server/page.tsx\n"));

/***/ })

});