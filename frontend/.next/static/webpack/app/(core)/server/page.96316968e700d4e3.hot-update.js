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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ServerPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@15.0.3_react-dom@19.0.0-rc-66855b96-20241106_react@19.0.0-rc-66855b96-20241106__react@19.0.0-rc-66855b96-20241106/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@15.0.3_react-dom@19.0.0-rc-66855b96-20241106_react@19.0.0-rc-66855b96-20241106__react@19.0.0-rc-66855b96-20241106/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions */ \"(app-pages-browser)/./app/(core)/server/functions.tsx\");\n/* harmony import */ var _components_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/table */ \"(app-pages-browser)/./components/table.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction ServerPage() {\n    _s();\n    const [lanServerStat, setLanServerStat] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"ServerPage.useEffect\": ()=>{\n            const fetchServerStatus = {\n                \"ServerPage.useEffect.fetchServerStatus\": async ()=>{\n                    try {\n                        const response = await (0,_functions__WEBPACK_IMPORTED_MODULE_2__.lanServerStatus)();\n                        setLanServerStat(response);\n                    } catch (error) {\n                        console.error(\"Error fetching server status:\", error);\n                    }\n                }\n            }[\"ServerPage.useEffect.fetchServerStatus\"];\n            fetchServerStatus();\n        }\n    }[\"ServerPage.useEffect\"], []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-4/5 mx-auto grid sm:w-full sm:grid-cols-1 md:w-full md:grid-cols-1 lg:w-4/5 lg:grid-cols-2 xl:w-4/5 xl:grid-cols-2 2xl:w-4/5 2xl:grid-cols-2 gap-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col justify-items-center border p-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-3xl uppercase font-bold mx-auto\",\n                        children: \"LAN Server Status\"\n                    }, void 0, false, {\n                        fileName: \"/home/furkan/Desktop/peershare/frontend/app/(core)/server/page.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_table__WEBPACK_IMPORTED_MODULE_3__.Table, {\n                        TableHeader: [\n                            'Property Name',\n                            'Property Value'\n                        ],\n                        TableRows: [\n                            {\n                                name: 'IP',\n                                value: (lanServerStat === null || lanServerStat === void 0 ? void 0 : lanServerStat.service_info.ip) || 'Loading...'\n                            },\n                            {\n                                name: 'Port',\n                                value: (lanServerStat === null || lanServerStat === void 0 ? void 0 : lanServerStat.service_info.port) === 0 ? 'undefined' : (lanServerStat === null || lanServerStat === void 0 ? void 0 : lanServerStat.service_info.port) || 'Loading...'\n                            },\n                            {\n                                name: 'Server Status',\n                                value: (lanServerStat === null || lanServerStat === void 0 ? void 0 : lanServerStat.service_info.server_status) || 'Loading...'\n                            },\n                            {\n                                name: 'Server Binding',\n                                value: (lanServerStat === null || lanServerStat === void 0 ? void 0 : lanServerStat.server_binding) ? 'Yes' : 'No'\n                            },\n                            {\n                                name: 'Server Listening',\n                                value: (lanServerStat === null || lanServerStat === void 0 ? void 0 : lanServerStat.server_listening) ? 'Yes' : 'No'\n                            }\n                        ]\n                    }, void 0, false, {\n                        fileName: \"/home/furkan/Desktop/peershare/frontend/app/(core)/server/page.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \"Start Server\"\n                    }, void 0, false, {\n                        fileName: \"/home/furkan/Desktop/peershare/frontend/app/(core)/server/page.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/furkan/Desktop/peershare/frontend/app/(core)/server/page.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col justify-items-center border p-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-3xl uppercase font-bold mx-auto\",\n                    children: \"Server Status\"\n                }, void 0, false, {\n                    fileName: \"/home/furkan/Desktop/peershare/frontend/app/(core)/server/page.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/furkan/Desktop/peershare/frontend/app/(core)/server/page.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col justify-items-center border p-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-3xl uppercase font-bold mx-auto\",\n                    children: \"Server Status\"\n                }, void 0, false, {\n                    fileName: \"/home/furkan/Desktop/peershare/frontend/app/(core)/server/page.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/furkan/Desktop/peershare/frontend/app/(core)/server/page.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col justify-items-center border p-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-3xl uppercase font-bold mx-auto\",\n                    children: \"Server Status\"\n                }, void 0, false, {\n                    fileName: \"/home/furkan/Desktop/peershare/frontend/app/(core)/server/page.tsx\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/furkan/Desktop/peershare/frontend/app/(core)/server/page.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col justify-items-center border p-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-3xl uppercase font-bold mx-auto\",\n                    children: \"Server Status\"\n                }, void 0, false, {\n                    fileName: \"/home/furkan/Desktop/peershare/frontend/app/(core)/server/page.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/furkan/Desktop/peershare/frontend/app/(core)/server/page.tsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col justify-items-center border p-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-3xl uppercase font-bold mx-auto\",\n                    children: \"Server Status\"\n                }, void 0, false, {\n                    fileName: \"/home/furkan/Desktop/peershare/frontend/app/(core)/server/page.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/furkan/Desktop/peershare/frontend/app/(core)/server/page.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/furkan/Desktop/peershare/frontend/app/(core)/server/page.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n_s(ServerPage, \"MYPs0k/aqnTTyiIAxX6sE0zOzPc=\");\n_c = ServerPage;\nvar _c;\n$RefreshReg$(_c, \"ServerPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8oY29yZSkvc2VydmVyL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRW1EO0FBRVc7QUFFbkI7QUFFNUIsU0FBU0s7O0lBQ3RCLE1BQU0sQ0FBQ0MsZUFBZUMsaUJBQWlCLEdBQUdOLCtDQUFRQSxDQUFrQztJQUNwRkMsZ0RBQVNBO2dDQUFDO1lBQ1IsTUFBTU07MERBQW9CO29CQUN4QixJQUFJO3dCQUNGLE1BQU1DLFdBQVcsTUFBTU4sMkRBQWVBO3dCQUN0Q0ksaUJBQWlCRTtvQkFDbkIsRUFBRSxPQUFPQyxPQUFPO3dCQUNkQyxRQUFRRCxLQUFLLENBQUMsaUNBQWlDQTtvQkFDakQ7Z0JBQ0Y7O1lBQ0FGO1FBQ0Y7K0JBQUcsRUFBRTtJQUNMLHFCQUNFLDhEQUFDSTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDQzt3QkFBR0QsV0FBVTtrQ0FBdUM7Ozs7OztrQ0FDckQsOERBQUNULG9EQUFLQTt3QkFDSlcsYUFBYTs0QkFBQzs0QkFBaUI7eUJBQWlCO3dCQUNoREMsV0FBVzs0QkFDVDtnQ0FDRUMsTUFBTTtnQ0FDTkMsT0FBT1osQ0FBQUEsMEJBQUFBLG9DQUFBQSxjQUFlYSxZQUFZLENBQUNDLEVBQUUsS0FBSTs0QkFDM0M7NEJBQ0E7Z0NBQ0VILE1BQU07Z0NBQ05DLE9BQU8sQ0FBQ1osMEJBQUFBLG9DQUFBQSxjQUFlYSxZQUFZLENBQUNFLElBQUksTUFBSyxJQUFLLGNBQWNmLENBQUFBLDBCQUFBQSxvQ0FBQUEsY0FBZWEsWUFBWSxDQUFDRSxJQUFJLEtBQUk7NEJBQ3RHOzRCQUNBO2dDQUNFSixNQUFNO2dDQUNOQyxPQUFPWixDQUFBQSwwQkFBQUEsb0NBQUFBLGNBQWVhLFlBQVksQ0FBQ0csYUFBYSxLQUFJOzRCQUN0RDs0QkFDQTtnQ0FDRUwsTUFBTTtnQ0FDTkMsT0FBT1osQ0FBQUEsMEJBQUFBLG9DQUFBQSxjQUFlaUIsY0FBYyxJQUFHLFFBQVE7NEJBQ2pEOzRCQUNBO2dDQUNFTixNQUFNO2dDQUNOQyxPQUFPWixDQUFBQSwwQkFBQUEsb0NBQUFBLGNBQWVrQixnQkFBZ0IsSUFBRyxRQUFROzRCQUNuRDt5QkFDRDs7Ozs7O2tDQUVILDhEQUFDQztrQ0FBTzs7Ozs7Ozs7Ozs7OzBCQUlWLDhEQUFDYjtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0M7b0JBQUdELFdBQVU7OEJBQXVDOzs7Ozs7Ozs7OzswQkFHdkQsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDQztvQkFBR0QsV0FBVTs4QkFBdUM7Ozs7Ozs7Ozs7OzBCQUd2RCw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNDO29CQUFHRCxXQUFVOzhCQUF1Qzs7Ozs7Ozs7Ozs7MEJBR3ZELDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0M7b0JBQUdELFdBQVU7OEJBQXVDOzs7Ozs7Ozs7OzswQkFHdkQsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDQztvQkFBR0QsV0FBVTs4QkFBdUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzdEO0dBcEV3QlI7S0FBQUEiLCJzb3VyY2VzIjpbIi9ob21lL2Z1cmthbi9EZXNrdG9wL3BlZXJzaGFyZS9mcm9udGVuZC9hcHAvKGNvcmUpL3NlcnZlci9wYWdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IGxhblNlcnZlclN0YXR1cywgc3RhcnRMQU5TZXJ2ZXIgfSBmcm9tIFwiLi9mdW5jdGlvbnNcIjtcbmltcG9ydCB7IExhblNlcnZlclN0YXR1c0ludGVyZmFjZSB9IGZyb20gJy4vZnVuY3Rpb25zJztcbmltcG9ydCB7IFRhYmxlIH0gZnJvbSBcIkAvY29tcG9uZW50cy90YWJsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZXJ2ZXJQYWdlKCkge1xuICBjb25zdCBbbGFuU2VydmVyU3RhdCwgc2V0TGFuU2VydmVyU3RhdF0gPSB1c2VTdGF0ZTxMYW5TZXJ2ZXJTdGF0dXNJbnRlcmZhY2UgfCBudWxsPihudWxsKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaFNlcnZlclN0YXR1cyA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgbGFuU2VydmVyU3RhdHVzKCk7XG4gICAgICAgIHNldExhblNlcnZlclN0YXQocmVzcG9uc2UpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHNlcnZlciBzdGF0dXM6XCIsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGZldGNoU2VydmVyU3RhdHVzKCk7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctNC81IG14LWF1dG8gZ3JpZCBzbTp3LWZ1bGwgc206Z3JpZC1jb2xzLTEgbWQ6dy1mdWxsIG1kOmdyaWQtY29scy0xIGxnOnctNC81IGxnOmdyaWQtY29scy0yIHhsOnctNC81IHhsOmdyaWQtY29scy0yIDJ4bDp3LTQvNSAyeGw6Z3JpZC1jb2xzLTIgZ2FwLTEwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1pdGVtcy1jZW50ZXIgYm9yZGVyIHAtNVwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgdXBwZXJjYXNlIGZvbnQtYm9sZCBteC1hdXRvXCI+TEFOIFNlcnZlciBTdGF0dXM8L2gyPlxuICAgICAgICA8VGFibGVcbiAgICAgICAgICBUYWJsZUhlYWRlcj17WydQcm9wZXJ0eSBOYW1lJywgJ1Byb3BlcnR5IFZhbHVlJ119XG4gICAgICAgICAgVGFibGVSb3dzPXtbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICdJUCcsXG4gICAgICAgICAgICAgIHZhbHVlOiBsYW5TZXJ2ZXJTdGF0Py5zZXJ2aWNlX2luZm8uaXAgfHwgJ0xvYWRpbmcuLi4nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAnUG9ydCcsXG4gICAgICAgICAgICAgIHZhbHVlOiAobGFuU2VydmVyU3RhdD8uc2VydmljZV9pbmZvLnBvcnQgPT09IDApID8gJ3VuZGVmaW5lZCcgOiBsYW5TZXJ2ZXJTdGF0Py5zZXJ2aWNlX2luZm8ucG9ydCB8fCAnTG9hZGluZy4uLicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAnU2VydmVyIFN0YXR1cycsXG4gICAgICAgICAgICAgIHZhbHVlOiBsYW5TZXJ2ZXJTdGF0Py5zZXJ2aWNlX2luZm8uc2VydmVyX3N0YXR1cyB8fCAnTG9hZGluZy4uLidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICdTZXJ2ZXIgQmluZGluZycsXG4gICAgICAgICAgICAgIHZhbHVlOiBsYW5TZXJ2ZXJTdGF0Py5zZXJ2ZXJfYmluZGluZyA/ICdZZXMnIDogJ05vJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICdTZXJ2ZXIgTGlzdGVuaW5nJyxcbiAgICAgICAgICAgICAgdmFsdWU6IGxhblNlcnZlclN0YXQ/LnNlcnZlcl9saXN0ZW5pbmcgPyAnWWVzJyA6ICdObycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF19XG4gICAgICAgIC8+XG4gICAgICAgIDxidXR0b24+U3RhcnQgU2VydmVyPC9idXR0b24+XG5cblxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1pdGVtcy1jZW50ZXIgYm9yZGVyIHAtNVwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgdXBwZXJjYXNlIGZvbnQtYm9sZCBteC1hdXRvXCI+U2VydmVyIFN0YXR1czwvaDI+XG4gICAgICAgIHsvKiA8VGFibGUgVGFibGVIZWFkZXI9e1snVHJpYWwnXX0gLz4gKi99XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWl0ZW1zLWNlbnRlciBib3JkZXIgcC01XCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCB1cHBlcmNhc2UgZm9udC1ib2xkIG14LWF1dG9cIj5TZXJ2ZXIgU3RhdHVzPC9oMj5cbiAgICAgICAgey8qIDxUYWJsZSBUYWJsZUhlYWRlcj17WydUcmlhbCddfSAvPiAqL31cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktaXRlbXMtY2VudGVyIGJvcmRlciBwLTVcIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIHVwcGVyY2FzZSBmb250LWJvbGQgbXgtYXV0b1wiPlNlcnZlciBTdGF0dXM8L2gyPlxuICAgICAgICB7LyogPFRhYmxlIFRhYmxlSGVhZGVyPXtbJ1RyaWFsJ119IC8+ICovfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1pdGVtcy1jZW50ZXIgYm9yZGVyIHAtNVwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgdXBwZXJjYXNlIGZvbnQtYm9sZCBteC1hdXRvXCI+U2VydmVyIFN0YXR1czwvaDI+XG4gICAgICAgIHsvKiA8VGFibGUgVGFibGVIZWFkZXI9e1snVHJpYWwnXX0gLz4gKi99XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWl0ZW1zLWNlbnRlciBib3JkZXIgcC01XCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCB1cHBlcmNhc2UgZm9udC1ib2xkIG14LWF1dG9cIj5TZXJ2ZXIgU3RhdHVzPC9oMj5cbiAgICAgICAgey8qIDxUYWJsZSBUYWJsZUhlYWRlcj17WydUcmlhbCddfSAvPiAqL31cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJsYW5TZXJ2ZXJTdGF0dXMiLCJUYWJsZSIsIlNlcnZlclBhZ2UiLCJsYW5TZXJ2ZXJTdGF0Iiwic2V0TGFuU2VydmVyU3RhdCIsImZldGNoU2VydmVyU3RhdHVzIiwicmVzcG9uc2UiLCJlcnJvciIsImNvbnNvbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsIlRhYmxlSGVhZGVyIiwiVGFibGVSb3dzIiwibmFtZSIsInZhbHVlIiwic2VydmljZV9pbmZvIiwiaXAiLCJwb3J0Iiwic2VydmVyX3N0YXR1cyIsInNlcnZlcl9iaW5kaW5nIiwic2VydmVyX2xpc3RlbmluZyIsImJ1dHRvbiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(core)/server/page.tsx\n"));

/***/ })

});