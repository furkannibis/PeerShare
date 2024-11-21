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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ServerPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@15.0.3_react-dom@19.0.0-rc-66855b96-20241106_react@19.0.0-rc-66855b96-20241106__react@19.0.0-rc-66855b96-20241106/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@15.0.3_react-dom@19.0.0-rc-66855b96-20241106_react@19.0.0-rc-66855b96-20241106__react@19.0.0-rc-66855b96-20241106/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions */ \"(app-pages-browser)/./app/(core)/server/functions.tsx\");\n/* harmony import */ var _components_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/table */ \"(app-pages-browser)/./components/table.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction ServerPage() {\n    _s();\n    const [lanServerStat, setLanServerStat] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [popupMessage, setPopupMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [port, setPort] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"ServerPage.useEffect\": ()=>{\n            const fetchServerStatus = {\n                \"ServerPage.useEffect.fetchServerStatus\": async ()=>{\n                    try {\n                        const response = await (0,_functions__WEBPACK_IMPORTED_MODULE_2__.lanServerStatus)();\n                        setLanServerStat(response);\n                    } catch (error) {\n                        console.error(\"Error fetching server status:\", error);\n                    }\n                }\n            }[\"ServerPage.useEffect.fetchServerStatus\"];\n            fetchServerStatus();\n        }\n    }[\"ServerPage.useEffect\"], []);\n    const handleStartServer = async (port)=>{\n        try {\n            const response = await (0,_functions__WEBPACK_IMPORTED_MODULE_2__.startLANServer)(port);\n            if (response.status === \"success\") {\n                setLanServerStat((prevState)=>({\n                        ...prevState,\n                        service_info: {\n                            ...prevState === null || prevState === void 0 ? void 0 : prevState.service_info,\n                            port: port,\n                            server_status: response.service_info.server_status\n                        },\n                        server_binding: response.server_binding,\n                        server_listening: response.server_listening\n                    }));\n                setPopupMessage(\"Server started successfully!\");\n            } else if (response.status === \"failed\") {\n                setPopupMessage(\"Failed to start server: \".concat(response.err_info.error_desc));\n            }\n        } catch (error) {\n            console.error(\"Error starting the server:\", error);\n            setPopupMessage(\"An error occurred while starting the server.\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-4/5 mx-auto grid sm:w-full sm:grid-cols-1 md:w-full md:grid-cols-1 lg:w-4/5 lg:grid-cols-2 xl:w-4/5 xl:grid-cols-2 2xl:w-4/5 2xl:grid-cols-2 gap-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col align-center justify-items-center border p-5 gap-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-3xl uppercase font-bold mx-auto\",\n                        children: \"LAN Server Status\"\n                    }, void 0, false, {\n                        fileName: \"/home/furkan/Desktop/peershare/frontend/app/(core)/server/page.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_table__WEBPACK_IMPORTED_MODULE_3__.Table, {\n                        TableHeader: [\n                            'Property Name',\n                            'Property Value'\n                        ],\n                        TableRows: [\n                            {\n                                name: 'IP',\n                                value: (lanServerStat === null || lanServerStat === void 0 ? void 0 : lanServerStat.service_info.ip) || 'Loading...'\n                            },\n                            {\n                                name: 'Port',\n                                value: (lanServerStat === null || lanServerStat === void 0 ? void 0 : lanServerStat.service_info.port) === 0 ? 'undefined' : (lanServerStat === null || lanServerStat === void 0 ? void 0 : lanServerStat.service_info.port) || 'Loading...'\n                            },\n                            {\n                                name: 'Server Status',\n                                value: (lanServerStat === null || lanServerStat === void 0 ? void 0 : lanServerStat.service_info.server_status) || 'Loading...'\n                            },\n                            {\n                                name: 'Server Binding',\n                                value: (lanServerStat === null || lanServerStat === void 0 ? void 0 : lanServerStat.server_binding) ? 'Yes' : 'No'\n                            },\n                            {\n                                name: 'Server Listening',\n                                value: (lanServerStat === null || lanServerStat === void 0 ? void 0 : lanServerStat.server_listening) ? 'Yes' : 'No'\n                            }\n                        ]\n                    }, void 0, false, {\n                        fileName: \"/home/furkan/Desktop/peershare/frontend/app/(core)/server/page.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full mx-auto flex flex-col items-center space-y-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                id: \"portInput\",\n                                className: \"border p-2 rounded-md w-1/2\",\n                                placeholder: \"Enter Port\",\n                                value: port,\n                                onChange: (e)=>setPort(Number(e.target.value))\n                            }, void 0, false, {\n                                fileName: \"/home/furkan/Desktop/peershare/frontend/app/(core)/server/page.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-row items-center justify-items-center gap-5\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"border p-2 rounded-md bg-blue-500 text-white\",\n                                        onClick: ()=>handleStartServer(port),\n                                        children: \"Start Server\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/furkan/Desktop/peershare/frontend/app/(core)/server/page.tsx\",\n                                        lineNumber: 89,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"border p-2 rounded-md bg-blue-500 text-white\",\n                                        children: \"Stop Server\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/furkan/Desktop/peershare/frontend/app/(core)/server/page.tsx\",\n                                        lineNumber: 95,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/furkan/Desktop/peershare/frontend/app/(core)/server/page.tsx\",\n                                lineNumber: 88,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/furkan/Desktop/peershare/frontend/app/(core)/server/page.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/furkan/Desktop/peershare/frontend/app/(core)/server/page.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            popupMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"popup\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: popupMessage\n                    }, void 0, false, {\n                        fileName: \"/home/furkan/Desktop/peershare/frontend/app/(core)/server/page.tsx\",\n                        lineNumber: 105,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>setPopupMessage(null),\n                        children: \"Close\"\n                    }, void 0, false, {\n                        fileName: \"/home/furkan/Desktop/peershare/frontend/app/(core)/server/page.tsx\",\n                        lineNumber: 106,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/furkan/Desktop/peershare/frontend/app/(core)/server/page.tsx\",\n                lineNumber: 104,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/furkan/Desktop/peershare/frontend/app/(core)/server/page.tsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, this);\n}\n_s(ServerPage, \"SfyIVzJi3QLgsjbmRlYoZERnjwY=\");\n_c = ServerPage;\nvar _c;\n$RefreshReg$(_c, \"ServerPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8oY29yZSkvc2VydmVyL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRW1EO0FBQ1c7QUFFbkI7QUFFNUIsU0FBU007O0lBQ3RCLE1BQU0sQ0FBQ0MsZUFBZUMsaUJBQWlCLEdBQUdQLCtDQUFRQSxDQUFrQztJQUNwRixNQUFNLENBQUNRLGNBQWNDLGdCQUFnQixHQUFHVCwrQ0FBUUEsQ0FBZ0I7SUFDaEUsTUFBTSxDQUFDVSxNQUFNQyxRQUFRLEdBQUdYLCtDQUFRQSxDQUFTO0lBRXpDQyxnREFBU0E7Z0NBQUM7WUFDUixNQUFNVzswREFBb0I7b0JBQ3hCLElBQUk7d0JBQ0YsTUFBTUMsV0FBVyxNQUFNWCwyREFBZUE7d0JBQ3RDSyxpQkFBaUJNO29CQUNuQixFQUFFLE9BQU9DLE9BQU87d0JBQ2RDLFFBQVFELEtBQUssQ0FBQyxpQ0FBaUNBO29CQUNqRDtnQkFDRjs7WUFDQUY7UUFDRjsrQkFBRyxFQUFFO0lBRUwsTUFBTUksb0JBQW9CLE9BQU9OO1FBQy9CLElBQUk7WUFDRixNQUFNRyxXQUFXLE1BQU1WLDBEQUFjQSxDQUFDTztZQUV0QyxJQUFJRyxTQUFTSSxNQUFNLEtBQUssV0FBVztnQkFDakNWLGlCQUFpQlcsQ0FBQUEsWUFBYzt3QkFDN0IsR0FBR0EsU0FBUzt3QkFDWkMsY0FBYzsrQkFDVEQsc0JBQUFBLGdDQUFBQSxVQUFXQyxZQUFZOzRCQUMxQlQsTUFBTUE7NEJBQ05VLGVBQWVQLFNBQVNNLFlBQVksQ0FBQ0MsYUFBYTt3QkFDcEQ7d0JBQ0FDLGdCQUFnQlIsU0FBU1EsY0FBYzt3QkFDdkNDLGtCQUFrQlQsU0FBU1MsZ0JBQWdCO29CQUM3QztnQkFDQWIsZ0JBQWdCO1lBQ2xCLE9BQU8sSUFBSUksU0FBU0ksTUFBTSxLQUFLLFVBQVU7Z0JBQ3ZDUixnQkFBZ0IsMkJBQXdELE9BQTdCSSxTQUFTVSxRQUFRLENBQUNDLFVBQVU7WUFDekU7UUFDRixFQUFFLE9BQU9WLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDLDhCQUE4QkE7WUFDNUNMLGdCQUFnQjtRQUNsQjtJQUNGO0lBRUEscUJBQ0UsOERBQUNnQjtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDQzt3QkFBR0QsV0FBVTtrQ0FBdUM7Ozs7OztrQ0FDckQsOERBQUN0QixvREFBS0E7d0JBQ0p3QixhQUFhOzRCQUFDOzRCQUFpQjt5QkFBaUI7d0JBQ2hEQyxXQUFXOzRCQUNUO2dDQUNFQyxNQUFNO2dDQUNOQyxPQUFPekIsQ0FBQUEsMEJBQUFBLG9DQUFBQSxjQUFlYSxZQUFZLENBQUNhLEVBQUUsS0FBSTs0QkFDM0M7NEJBQ0E7Z0NBQ0VGLE1BQU07Z0NBQ05DLE9BQU8sQ0FBQ3pCLDBCQUFBQSxvQ0FBQUEsY0FBZWEsWUFBWSxDQUFDVCxJQUFJLE1BQUssSUFBSyxjQUFjSixDQUFBQSwwQkFBQUEsb0NBQUFBLGNBQWVhLFlBQVksQ0FBQ1QsSUFBSSxLQUFJOzRCQUN0Rzs0QkFDQTtnQ0FDRW9CLE1BQU07Z0NBQ05DLE9BQU96QixDQUFBQSwwQkFBQUEsb0NBQUFBLGNBQWVhLFlBQVksQ0FBQ0MsYUFBYSxLQUFJOzRCQUN0RDs0QkFDQTtnQ0FDRVUsTUFBTTtnQ0FDTkMsT0FBT3pCLENBQUFBLDBCQUFBQSxvQ0FBQUEsY0FBZWUsY0FBYyxJQUFHLFFBQVE7NEJBQ2pEOzRCQUNBO2dDQUNFUyxNQUFNO2dDQUNOQyxPQUFPekIsQ0FBQUEsMEJBQUFBLG9DQUFBQSxjQUFlZ0IsZ0JBQWdCLElBQUcsUUFBUTs0QkFDbkQ7eUJBQ0Q7Ozs7OztrQ0FFSCw4REFBQ0c7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDTztnQ0FDQ0MsTUFBSztnQ0FDTEMsSUFBRztnQ0FDSFQsV0FBVTtnQ0FDVlUsYUFBWTtnQ0FDWkwsT0FBT3JCO2dDQUNQMkIsVUFBVSxDQUFDQyxJQUFNM0IsUUFBUTRCLE9BQU9ELEVBQUVFLE1BQU0sQ0FBQ1QsS0FBSzs7Ozs7OzBDQUVoRCw4REFBQ047Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDZTt3Q0FDQ2YsV0FBVTt3Q0FDVmdCLFNBQVMsSUFBTTFCLGtCQUFrQk47a0RBQ2xDOzs7Ozs7a0RBR0QsOERBQUMrQjt3Q0FBT2YsV0FBVTtrREFBK0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVF0RWxCLDhCQUNDLDhEQUFDaUI7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDaUI7a0NBQUduQzs7Ozs7O2tDQUNKLDhEQUFDaUM7d0JBQU9DLFNBQVMsSUFBTWpDLGdCQUFnQjtrQ0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3hEO0dBdkd3Qko7S0FBQUEiLCJzb3VyY2VzIjpbIi9ob21lL2Z1cmthbi9EZXNrdG9wL3BlZXJzaGFyZS9mcm9udGVuZC9hcHAvKGNvcmUpL3NlcnZlci9wYWdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBsYW5TZXJ2ZXJTdGF0dXMsIHN0YXJ0TEFOU2VydmVyIH0gZnJvbSAnLi9mdW5jdGlvbnMnO1xuaW1wb3J0IHsgTGFuU2VydmVyU3RhdHVzSW50ZXJmYWNlLCBTdGFydExBTlNlcnZlckludGVyZmFjZSwgU3RhcnRMQU5TZXJ2ZXJFeGNlcHRpb25JbnRlcmZhY2UgfSBmcm9tICcuL2Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBUYWJsZSB9IGZyb20gXCJAL2NvbXBvbmVudHMvdGFibGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VydmVyUGFnZSgpIHtcbiAgY29uc3QgW2xhblNlcnZlclN0YXQsIHNldExhblNlcnZlclN0YXRdID0gdXNlU3RhdGU8TGFuU2VydmVyU3RhdHVzSW50ZXJmYWNlIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtwb3B1cE1lc3NhZ2UsIHNldFBvcHVwTWVzc2FnZV0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW3BvcnQsIHNldFBvcnRdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoU2VydmVyU3RhdHVzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBsYW5TZXJ2ZXJTdGF0dXMoKTtcbiAgICAgICAgc2V0TGFuU2VydmVyU3RhdChyZXNwb25zZSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgc2VydmVyIHN0YXR1czpcIiwgZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG4gICAgZmV0Y2hTZXJ2ZXJTdGF0dXMoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZVN0YXJ0U2VydmVyID0gYXN5bmMgKHBvcnQ6IG51bWJlcikgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHN0YXJ0TEFOU2VydmVyKHBvcnQpO1xuXG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSBcInN1Y2Nlc3NcIikge1xuICAgICAgICBzZXRMYW5TZXJ2ZXJTdGF0KHByZXZTdGF0ZSA9PiAoe1xuICAgICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgICBzZXJ2aWNlX2luZm86IHtcbiAgICAgICAgICAgIC4uLnByZXZTdGF0ZT8uc2VydmljZV9pbmZvLFxuICAgICAgICAgICAgcG9ydDogcG9ydCxcbiAgICAgICAgICAgIHNlcnZlcl9zdGF0dXM6IHJlc3BvbnNlLnNlcnZpY2VfaW5mby5zZXJ2ZXJfc3RhdHVzLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc2VydmVyX2JpbmRpbmc6IHJlc3BvbnNlLnNlcnZlcl9iaW5kaW5nLFxuICAgICAgICAgIHNlcnZlcl9saXN0ZW5pbmc6IHJlc3BvbnNlLnNlcnZlcl9saXN0ZW5pbmcsXG4gICAgICAgIH0pKTtcbiAgICAgICAgc2V0UG9wdXBNZXNzYWdlKFwiU2VydmVyIHN0YXJ0ZWQgc3VjY2Vzc2Z1bGx5IVwiKTtcbiAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSBcImZhaWxlZFwiKSB7XG4gICAgICAgIHNldFBvcHVwTWVzc2FnZShgRmFpbGVkIHRvIHN0YXJ0IHNlcnZlcjogJHtyZXNwb25zZS5lcnJfaW5mby5lcnJvcl9kZXNjfWApO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3Igc3RhcnRpbmcgdGhlIHNlcnZlcjpcIiwgZXJyb3IpO1xuICAgICAgc2V0UG9wdXBNZXNzYWdlKFwiQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgc3RhcnRpbmcgdGhlIHNlcnZlci5cIik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LTQvNSBteC1hdXRvIGdyaWQgc206dy1mdWxsIHNtOmdyaWQtY29scy0xIG1kOnctZnVsbCBtZDpncmlkLWNvbHMtMSBsZzp3LTQvNSBsZzpncmlkLWNvbHMtMiB4bDp3LTQvNSB4bDpncmlkLWNvbHMtMiAyeGw6dy00LzUgMnhsOmdyaWQtY29scy0yIGdhcC0xMFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGFsaWduLWNlbnRlciBqdXN0aWZ5LWl0ZW1zLWNlbnRlciBib3JkZXIgcC01IGdhcC01XCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCB1cHBlcmNhc2UgZm9udC1ib2xkIG14LWF1dG9cIj5MQU4gU2VydmVyIFN0YXR1czwvaDI+XG4gICAgICAgIDxUYWJsZVxuICAgICAgICAgIFRhYmxlSGVhZGVyPXtbJ1Byb3BlcnR5IE5hbWUnLCAnUHJvcGVydHkgVmFsdWUnXX1cbiAgICAgICAgICBUYWJsZVJvd3M9e1tcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogJ0lQJyxcbiAgICAgICAgICAgICAgdmFsdWU6IGxhblNlcnZlclN0YXQ/LnNlcnZpY2VfaW5mby5pcCB8fCAnTG9hZGluZy4uLicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAnUG9ydCcsXG4gICAgICAgICAgICAgIHZhbHVlOiAobGFuU2VydmVyU3RhdD8uc2VydmljZV9pbmZvLnBvcnQgPT09IDApID8gJ3VuZGVmaW5lZCcgOiBsYW5TZXJ2ZXJTdGF0Py5zZXJ2aWNlX2luZm8ucG9ydCB8fCAnTG9hZGluZy4uLicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAnU2VydmVyIFN0YXR1cycsXG4gICAgICAgICAgICAgIHZhbHVlOiBsYW5TZXJ2ZXJTdGF0Py5zZXJ2aWNlX2luZm8uc2VydmVyX3N0YXR1cyB8fCAnTG9hZGluZy4uLicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAnU2VydmVyIEJpbmRpbmcnLFxuICAgICAgICAgICAgICB2YWx1ZTogbGFuU2VydmVyU3RhdD8uc2VydmVyX2JpbmRpbmcgPyAnWWVzJyA6ICdObycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAnU2VydmVyIExpc3RlbmluZycsXG4gICAgICAgICAgICAgIHZhbHVlOiBsYW5TZXJ2ZXJTdGF0Py5zZXJ2ZXJfbGlzdGVuaW5nID8gJ1llcycgOiAnTm8nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdfVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBteC1hdXRvIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHNwYWNlLXktNFwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICBpZD1cInBvcnRJbnB1dFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgcC0yIHJvdW5kZWQtbWQgdy0xLzJcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBQb3J0XCJcbiAgICAgICAgICAgIHZhbHVlPXtwb3J0fVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQb3J0KE51bWJlcihlLnRhcmdldC52YWx1ZSkpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWl0ZW1zLWNlbnRlciBnYXAtNVwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgcC0yIHJvdW5kZWQtbWQgYmctYmx1ZS01MDAgdGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVN0YXJ0U2VydmVyKHBvcnQpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBTdGFydCBTZXJ2ZXJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJib3JkZXIgcC0yIHJvdW5kZWQtbWQgYmctYmx1ZS01MDAgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICBTdG9wIFNlcnZlclxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBQb3B1cCBNZXNhasSxICovfVxuICAgICAge3BvcHVwTWVzc2FnZSAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9wdXBcIj5cbiAgICAgICAgICA8cD57cG9wdXBNZXNzYWdlfTwvcD5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFBvcHVwTWVzc2FnZShudWxsKX0+Q2xvc2U8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJsYW5TZXJ2ZXJTdGF0dXMiLCJzdGFydExBTlNlcnZlciIsIlRhYmxlIiwiU2VydmVyUGFnZSIsImxhblNlcnZlclN0YXQiLCJzZXRMYW5TZXJ2ZXJTdGF0IiwicG9wdXBNZXNzYWdlIiwic2V0UG9wdXBNZXNzYWdlIiwicG9ydCIsInNldFBvcnQiLCJmZXRjaFNlcnZlclN0YXR1cyIsInJlc3BvbnNlIiwiZXJyb3IiLCJjb25zb2xlIiwiaGFuZGxlU3RhcnRTZXJ2ZXIiLCJzdGF0dXMiLCJwcmV2U3RhdGUiLCJzZXJ2aWNlX2luZm8iLCJzZXJ2ZXJfc3RhdHVzIiwic2VydmVyX2JpbmRpbmciLCJzZXJ2ZXJfbGlzdGVuaW5nIiwiZXJyX2luZm8iLCJlcnJvcl9kZXNjIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJUYWJsZUhlYWRlciIsIlRhYmxlUm93cyIsIm5hbWUiLCJ2YWx1ZSIsImlwIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiZSIsIk51bWJlciIsInRhcmdldCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJwIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(core)/server/page.tsx\n"));

/***/ })

});