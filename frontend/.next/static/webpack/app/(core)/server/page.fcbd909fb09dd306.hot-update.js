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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ServerPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@15.0.3_react-dom@19.0.0-rc-66855b96-20241106_react@19.0.0-rc-66855b96-20241106__react@19.0.0-rc-66855b96-20241106/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@15.0.3_react-dom@19.0.0-rc-66855b96-20241106_react@19.0.0-rc-66855b96-20241106__react@19.0.0-rc-66855b96-20241106/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions */ \"(app-pages-browser)/./app/(core)/server/functions.tsx\");\n/* harmony import */ var _components_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/table */ \"(app-pages-browser)/./components/table.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction ServerPage() {\n    _s();\n    const [lanServerStat, setLanServerStat] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [port, setPort] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''); // Port state'i ekledik\n    const [popupMessage, setPopupMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null); // Popup mesajı için state\n    const [isPopupVisible, setIsPopupVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // Popup görünürlüğünü kontrol eden state\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"ServerPage.useEffect\": ()=>{\n            const fetchServerStatus = {\n                \"ServerPage.useEffect.fetchServerStatus\": async ()=>{\n                    try {\n                        const response = await (0,_functions__WEBPACK_IMPORTED_MODULE_2__.lanServerStatus)();\n                        setLanServerStat(response);\n                    } catch (error) {\n                        console.error(\"Error fetching server status:\", error);\n                    }\n                }\n            }[\"ServerPage.useEffect.fetchServerStatus\"];\n            fetchServerStatus();\n        }\n    }[\"ServerPage.useEffect\"], []);\n    const handleStartServer = async ()=>{\n        if (typeof port === 'number' && port > 0) {\n            try {\n                const response = await (0,_functions__WEBPACK_IMPORTED_MODULE_2__.startLANServer)(port);\n                // response.message ile sadece mesajı alıyoruz ve popupMessage'e ayarlıyoruz\n                setPopupMessage(response.message);\n                setIsPopupVisible(true); // Popup'ı görünür yapıyoruz\n                // Sunucu başlatıldıktan sonra yeni verileri güncelleyerek tabloyu yeniliyoruz\n                setLanServerStat((prevState)=>{\n                    if (!prevState) return null; // Eğer prevState null ise, bir şey yapma\n                    return {\n                        ...prevState,\n                        service_info: {\n                            ...prevState === null || prevState === void 0 ? void 0 : prevState.service_info,\n                            port: port,\n                            server_status: response.status || \"Unknown\"\n                        },\n                        server_binding: response.server_binding,\n                        server_listening: response.server_listening\n                    };\n                });\n                console.log(\"Server started on port: \".concat(port));\n            } catch (error) {\n                setPopupMessage('Error starting the server!');\n                setIsPopupVisible(true); // Hata durumunda da popup'ı göstereceğiz\n                console.error(\"Error starting server:\", error);\n            }\n        } else {\n            setPopupMessage('Invalid port number');\n            setIsPopupVisible(true);\n        }\n    };\n    const closePopup = ()=>{\n        setIsPopupVisible(false); // Popup'ı kapatmak için\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-4/5 mx-auto grid sm:w-full sm:grid-cols-1 md:w-full md:grid-cols-1 lg:w-4/5 lg:grid-cols-2 xl:w-4/5 xl:grid-cols-2 2xl:w-4/5 2xl:grid-cols-2 gap-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col aling-center justify-items-center border p-5 gap-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-3xl uppercase font-bold mx-auto\",\n                        children: \"LAN Server Status\"\n                    }, void 0, false, {\n                        fileName: \"/home/furkan/Desktop/peershare/frontend/app/(core)/server/page.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_table__WEBPACK_IMPORTED_MODULE_3__.Table, {\n                        TableHeader: [\n                            'Property Name',\n                            'Property Value'\n                        ],\n                        TableRows: [\n                            {\n                                name: 'IP',\n                                value: (lanServerStat === null || lanServerStat === void 0 ? void 0 : lanServerStat.service_info.ip) || 'Loading...'\n                            },\n                            {\n                                name: 'Port',\n                                value: (lanServerStat === null || lanServerStat === void 0 ? void 0 : lanServerStat.service_info.port) === 0 ? 'undefined' : (lanServerStat === null || lanServerStat === void 0 ? void 0 : lanServerStat.service_info.port) || 'Loading...'\n                            },\n                            {\n                                name: 'Server Status',\n                                value: (lanServerStat === null || lanServerStat === void 0 ? void 0 : lanServerStat.service_info.server_status) || 'Loading...'\n                            },\n                            {\n                                name: 'Server Binding',\n                                value: (lanServerStat === null || lanServerStat === void 0 ? void 0 : lanServerStat.server_binding) ? 'Yes' : 'No'\n                            },\n                            {\n                                name: 'Server Listening',\n                                value: (lanServerStat === null || lanServerStat === void 0 ? void 0 : lanServerStat.server_listening) ? 'Yes' : 'No'\n                            }\n                        ]\n                    }, void 0, false, {\n                        fileName: \"/home/furkan/Desktop/peershare/frontend/app/(core)/server/page.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full mx-auto flex flex-col items-center space-y-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                value: port,\n                                onChange: (e)=>setPort(Number(e.target.value)),\n                                className: \"border p-2 rounded-md w-1/2\",\n                                placeholder: \"Enter Port\"\n                            }, void 0, false, {\n                                fileName: \"/home/furkan/Desktop/peershare/frontend/app/(core)/server/page.tsx\",\n                                lineNumber: 97,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-row items-center justify-items-center gap-5\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: handleStartServer,\n                                        className: \"border p-2 rounded-md bg-blue-500 text-white\",\n                                        children: \"Start Binding\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/furkan/Desktop/peershare/frontend/app/(core)/server/page.tsx\",\n                                        lineNumber: 105,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"border p-2 rounded-md bg-blue-500 text-white\",\n                                        children: \"Start Listening\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/furkan/Desktop/peershare/frontend/app/(core)/server/page.tsx\",\n                                        lineNumber: 111,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"border p-2 rounded-md bg-blue-500 text-white\",\n                                        children: \"Stop Server\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/furkan/Desktop/peershare/frontend/app/(core)/server/page.tsx\",\n                                        lineNumber: 114,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/furkan/Desktop/peershare/frontend/app/(core)/server/page.tsx\",\n                                lineNumber: 104,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/furkan/Desktop/peershare/frontend/app/(core)/server/page.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/furkan/Desktop/peershare/frontend/app/(core)/server/page.tsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this),\n            isPopupVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-white p-6 rounded-md shadow-lg\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: popupMessage\n                        }, void 0, false, {\n                            fileName: \"/home/furkan/Desktop/peershare/frontend/app/(core)/server/page.tsx\",\n                            lineNumber: 125,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: closePopup,\n                            className: \"mt-4 p-2 bg-blue-500 text-white rounded-md\",\n                            children: \"Close\"\n                        }, void 0, false, {\n                            fileName: \"/home/furkan/Desktop/peershare/frontend/app/(core)/server/page.tsx\",\n                            lineNumber: 126,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/furkan/Desktop/peershare/frontend/app/(core)/server/page.tsx\",\n                    lineNumber: 124,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/furkan/Desktop/peershare/frontend/app/(core)/server/page.tsx\",\n                lineNumber: 123,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/furkan/Desktop/peershare/frontend/app/(core)/server/page.tsx\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, this);\n}\n_s(ServerPage, \"x8g8v6jRnAkgfdzqT6Lo2GPFCsg=\");\n_c = ServerPage;\nvar _c;\n$RefreshReg$(_c, \"ServerPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8oY29yZSkvc2VydmVyL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRW1EO0FBQ1c7QUFFbkI7QUFFNUIsU0FBU007O0lBQ3RCLE1BQU0sQ0FBQ0MsZUFBZUMsaUJBQWlCLEdBQUdQLCtDQUFRQSxDQUFrQztJQUNwRixNQUFNLENBQUNRLE1BQU1DLFFBQVEsR0FBR1QsK0NBQVFBLENBQWtCLEtBQUssdUJBQXVCO0lBQzlFLE1BQU0sQ0FBQ1UsY0FBY0MsZ0JBQWdCLEdBQUdYLCtDQUFRQSxDQUFnQixPQUFPLDBCQUEwQjtJQUNqRyxNQUFNLENBQUNZLGdCQUFnQkMsa0JBQWtCLEdBQUdiLCtDQUFRQSxDQUFDLFFBQVEseUNBQXlDO0lBRXRHQyxnREFBU0E7Z0NBQUM7WUFDUixNQUFNYTswREFBb0I7b0JBQ3hCLElBQUk7d0JBQ0YsTUFBTUMsV0FBVyxNQUFNYiwyREFBZUE7d0JBQ3RDSyxpQkFBaUJRO29CQUNuQixFQUFFLE9BQU9DLE9BQU87d0JBQ2RDLFFBQVFELEtBQUssQ0FBQyxpQ0FBaUNBO29CQUNqRDtnQkFDRjs7WUFDQUY7UUFDRjsrQkFBRyxFQUFFO0lBRUwsTUFBTUksb0JBQW9CO1FBQ3hCLElBQUksT0FBT1YsU0FBUyxZQUFZQSxPQUFPLEdBQUc7WUFDeEMsSUFBSTtnQkFDRixNQUFNTyxXQUFXLE1BQU1aLDBEQUFjQSxDQUFDSztnQkFFdEMsNEVBQTRFO2dCQUM1RUcsZ0JBQWdCSSxTQUFTSSxPQUFPO2dCQUNoQ04sa0JBQWtCLE9BQU8sNEJBQTRCO2dCQUVyRCw4RUFBOEU7Z0JBQzlFTixpQkFBaUJhLENBQUFBO29CQUNmLElBQUksQ0FBQ0EsV0FBVyxPQUFPLE1BQU0seUNBQXlDO29CQUN0RSxPQUFPO3dCQUNMLEdBQUdBLFNBQVM7d0JBQ1pDLGNBQWM7K0JBQ1RELHNCQUFBQSxnQ0FBQUEsVUFBV0MsWUFBWTs0QkFDMUJiLE1BQU1BOzRCQUNOYyxlQUFlUCxTQUFTUSxNQUFNLElBQUk7d0JBQ3BDO3dCQUNBQyxnQkFBZ0JULFNBQVNTLGNBQWM7d0JBQ3ZDQyxrQkFBa0JWLFNBQVNVLGdCQUFnQjtvQkFDN0M7Z0JBQ0Y7Z0JBR0FSLFFBQVFTLEdBQUcsQ0FBQywyQkFBZ0MsT0FBTGxCO1lBQ3pDLEVBQUUsT0FBT1EsT0FBTztnQkFDZEwsZ0JBQWdCO2dCQUNoQkUsa0JBQWtCLE9BQU8seUNBQXlDO2dCQUNsRUksUUFBUUQsS0FBSyxDQUFDLDBCQUEwQkE7WUFDMUM7UUFDRixPQUFPO1lBQ0xMLGdCQUFnQjtZQUNoQkUsa0JBQWtCO1FBQ3BCO0lBQ0Y7SUFFQSxNQUFNYyxhQUFhO1FBQ2pCZCxrQkFBa0IsUUFBUSx3QkFBd0I7SUFDcEQ7SUFFQSxxQkFDRSw4REFBQ2U7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQUdELFdBQVU7a0NBQXVDOzs7Ozs7a0NBQ3JELDhEQUFDekIsb0RBQUtBO3dCQUNKMkIsYUFBYTs0QkFBQzs0QkFBaUI7eUJBQWlCO3dCQUNoREMsV0FBVzs0QkFDVDtnQ0FDRUMsTUFBTTtnQ0FDTkMsT0FBTzVCLENBQUFBLDBCQUFBQSxvQ0FBQUEsY0FBZWUsWUFBWSxDQUFDYyxFQUFFLEtBQUk7NEJBQzNDOzRCQUNBO2dDQUNFRixNQUFNO2dDQUNOQyxPQUFPLENBQUM1QiwwQkFBQUEsb0NBQUFBLGNBQWVlLFlBQVksQ0FBQ2IsSUFBSSxNQUFLLElBQUssY0FBY0YsQ0FBQUEsMEJBQUFBLG9DQUFBQSxjQUFlZSxZQUFZLENBQUNiLElBQUksS0FBSTs0QkFDdEc7NEJBQ0E7Z0NBQ0V5QixNQUFNO2dDQUNOQyxPQUFPNUIsQ0FBQUEsMEJBQUFBLG9DQUFBQSxjQUFlZSxZQUFZLENBQUNDLGFBQWEsS0FBSTs0QkFDdEQ7NEJBQ0E7Z0NBQ0VXLE1BQU07Z0NBQ05DLE9BQU81QixDQUFBQSwwQkFBQUEsb0NBQUFBLGNBQWVrQixjQUFjLElBQUcsUUFBUTs0QkFDakQ7NEJBQ0E7Z0NBQ0VTLE1BQU07Z0NBQ05DLE9BQU81QixDQUFBQSwwQkFBQUEsb0NBQUFBLGNBQWVtQixnQkFBZ0IsSUFBRyxRQUFROzRCQUNuRDt5QkFDRDs7Ozs7O2tDQUVILDhEQUFDRzt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNPO2dDQUNDQyxNQUFLO2dDQUNMSCxPQUFPMUI7Z0NBQ1A4QixVQUFVLENBQUNDLElBQU05QixRQUFRK0IsT0FBT0QsRUFBRUUsTUFBTSxDQUFDUCxLQUFLO2dDQUM5Q0wsV0FBVTtnQ0FDVmEsYUFBWTs7Ozs7OzBDQUVkLDhEQUFDZDtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNjO3dDQUNDQyxTQUFTMUI7d0NBQ1RXLFdBQVU7a0RBQ1g7Ozs7OztrREFHRCw4REFBQ2M7d0NBQU9kLFdBQVU7a0RBQStDOzs7Ozs7a0RBR2pFLDhEQUFDYzt3Q0FBT2QsV0FBVTtrREFBK0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVF0RWpCLGdDQUNDLDhEQUFDZ0I7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNEO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ2dCO3NDQUFHbkM7Ozs7OztzQ0FDSiw4REFBQ2lDOzRCQUFPQyxTQUFTakI7NEJBQVlFLFdBQVU7c0NBQTZDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFoRztHQTlId0J4QjtLQUFBQSIsInNvdXJjZXMiOlsiL2hvbWUvZnVya2FuL0Rlc2t0b3AvcGVlcnNoYXJlL2Zyb250ZW5kL2FwcC8oY29yZSkvc2VydmVyL3BhZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGxhblNlcnZlclN0YXR1cywgc3RhcnRMQU5TZXJ2ZXIgfSBmcm9tIFwiLi9mdW5jdGlvbnNcIjtcbmltcG9ydCB7IExhblNlcnZlclN0YXR1c0ludGVyZmFjZSB9IGZyb20gJy4vZnVuY3Rpb25zJztcbmltcG9ydCB7IFRhYmxlIH0gZnJvbSBcIkAvY29tcG9uZW50cy90YWJsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZXJ2ZXJQYWdlKCkge1xuICBjb25zdCBbbGFuU2VydmVyU3RhdCwgc2V0TGFuU2VydmVyU3RhdF0gPSB1c2VTdGF0ZTxMYW5TZXJ2ZXJTdGF0dXNJbnRlcmZhY2UgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW3BvcnQsIHNldFBvcnRdID0gdXNlU3RhdGU8bnVtYmVyIHwgc3RyaW5nPignJyk7IC8vIFBvcnQgc3RhdGUnaSBla2xlZGlrXG4gIGNvbnN0IFtwb3B1cE1lc3NhZ2UsIHNldFBvcHVwTWVzc2FnZV0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTsgLy8gUG9wdXAgbWVzYWrEsSBpw6dpbiBzdGF0ZVxuICBjb25zdCBbaXNQb3B1cFZpc2libGUsIHNldElzUG9wdXBWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTsgLy8gUG9wdXAgZ8O2csO8bsO8cmzDvMSfw7xuw7wga29udHJvbCBlZGVuIHN0YXRlXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaFNlcnZlclN0YXR1cyA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgbGFuU2VydmVyU3RhdHVzKCk7XG4gICAgICAgIHNldExhblNlcnZlclN0YXQocmVzcG9uc2UpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHNlcnZlciBzdGF0dXM6XCIsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGZldGNoU2VydmVyU3RhdHVzKCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBoYW5kbGVTdGFydFNlcnZlciA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAodHlwZW9mIHBvcnQgPT09ICdudW1iZXInICYmIHBvcnQgPiAwKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHN0YXJ0TEFOU2VydmVyKHBvcnQpO1xuXG4gICAgICAgIC8vIHJlc3BvbnNlLm1lc3NhZ2UgaWxlIHNhZGVjZSBtZXNhasSxIGFsxLF5b3J1eiB2ZSBwb3B1cE1lc3NhZ2UnZSBheWFybMSxeW9ydXpcbiAgICAgICAgc2V0UG9wdXBNZXNzYWdlKHJlc3BvbnNlLm1lc3NhZ2UpO1xuICAgICAgICBzZXRJc1BvcHVwVmlzaWJsZSh0cnVlKTsgLy8gUG9wdXAnxLEgZ8O2csO8bsO8ciB5YXDEsXlvcnV6XG5cbiAgICAgICAgLy8gU3VudWN1IGJhxZ9sYXTEsWxkxLFrdGFuIHNvbnJhIHllbmkgdmVyaWxlcmkgZ8O8bmNlbGxleWVyZWsgdGFibG95dSB5ZW5pbGl5b3J1elxuICAgICAgICBzZXRMYW5TZXJ2ZXJTdGF0KHByZXZTdGF0ZSA9PiB7XG4gICAgICAgICAgaWYgKCFwcmV2U3RhdGUpIHJldHVybiBudWxsOyAvLyBFxJ9lciBwcmV2U3RhdGUgbnVsbCBpc2UsIGJpciDFn2V5IHlhcG1hXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgICAgIHNlcnZpY2VfaW5mbzoge1xuICAgICAgICAgICAgICAuLi5wcmV2U3RhdGU/LnNlcnZpY2VfaW5mbyxcbiAgICAgICAgICAgICAgcG9ydDogcG9ydCwgLy8gWWVuaSBwb3J0dSBnw7xuY2VsbGl5b3J1elxuICAgICAgICAgICAgICBzZXJ2ZXJfc3RhdHVzOiByZXNwb25zZS5zdGF0dXMgfHwgXCJVbmtub3duXCIsIC8vIFZhcnNhecSxbGFuIGRlxJ9lclxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlcnZlcl9iaW5kaW5nOiByZXNwb25zZS5zZXJ2ZXJfYmluZGluZyxcbiAgICAgICAgICAgIHNlcnZlcl9saXN0ZW5pbmc6IHJlc3BvbnNlLnNlcnZlcl9saXN0ZW5pbmcsXG4gICAgICAgICAgfTtcbiAgICAgICAgfSk7XG5cblxuICAgICAgICBjb25zb2xlLmxvZyhgU2VydmVyIHN0YXJ0ZWQgb24gcG9ydDogJHtwb3J0fWApO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgc2V0UG9wdXBNZXNzYWdlKCdFcnJvciBzdGFydGluZyB0aGUgc2VydmVyIScpO1xuICAgICAgICBzZXRJc1BvcHVwVmlzaWJsZSh0cnVlKTsgLy8gSGF0YSBkdXJ1bXVuZGEgZGEgcG9wdXAnxLEgZ8O2c3RlcmVjZcSfaXpcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHN0YXJ0aW5nIHNlcnZlcjpcIiwgZXJyb3IpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRQb3B1cE1lc3NhZ2UoJ0ludmFsaWQgcG9ydCBudW1iZXInKTtcbiAgICAgIHNldElzUG9wdXBWaXNpYmxlKHRydWUpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBjbG9zZVBvcHVwID0gKCkgPT4ge1xuICAgIHNldElzUG9wdXBWaXNpYmxlKGZhbHNlKTsgLy8gUG9wdXAnxLEga2FwYXRtYWsgacOnaW5cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy00LzUgbXgtYXV0byBncmlkIHNtOnctZnVsbCBzbTpncmlkLWNvbHMtMSBtZDp3LWZ1bGwgbWQ6Z3JpZC1jb2xzLTEgbGc6dy00LzUgbGc6Z3JpZC1jb2xzLTIgeGw6dy00LzUgeGw6Z3JpZC1jb2xzLTIgMnhsOnctNC81IDJ4bDpncmlkLWNvbHMtMiBnYXAtMTBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBhbGluZy1jZW50ZXIganVzdGlmeS1pdGVtcy1jZW50ZXIgYm9yZGVyIHAtNSBnYXAtNVwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgdXBwZXJjYXNlIGZvbnQtYm9sZCBteC1hdXRvXCI+TEFOIFNlcnZlciBTdGF0dXM8L2gyPlxuICAgICAgICA8VGFibGVcbiAgICAgICAgICBUYWJsZUhlYWRlcj17WydQcm9wZXJ0eSBOYW1lJywgJ1Byb3BlcnR5IFZhbHVlJ119XG4gICAgICAgICAgVGFibGVSb3dzPXtbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICdJUCcsXG4gICAgICAgICAgICAgIHZhbHVlOiBsYW5TZXJ2ZXJTdGF0Py5zZXJ2aWNlX2luZm8uaXAgfHwgJ0xvYWRpbmcuLi4nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAnUG9ydCcsXG4gICAgICAgICAgICAgIHZhbHVlOiAobGFuU2VydmVyU3RhdD8uc2VydmljZV9pbmZvLnBvcnQgPT09IDApID8gJ3VuZGVmaW5lZCcgOiBsYW5TZXJ2ZXJTdGF0Py5zZXJ2aWNlX2luZm8ucG9ydCB8fCAnTG9hZGluZy4uLicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAnU2VydmVyIFN0YXR1cycsXG4gICAgICAgICAgICAgIHZhbHVlOiBsYW5TZXJ2ZXJTdGF0Py5zZXJ2aWNlX2luZm8uc2VydmVyX3N0YXR1cyB8fCAnTG9hZGluZy4uLidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICdTZXJ2ZXIgQmluZGluZycsXG4gICAgICAgICAgICAgIHZhbHVlOiBsYW5TZXJ2ZXJTdGF0Py5zZXJ2ZXJfYmluZGluZyA/ICdZZXMnIDogJ05vJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICdTZXJ2ZXIgTGlzdGVuaW5nJyxcbiAgICAgICAgICAgICAgdmFsdWU6IGxhblNlcnZlclN0YXQ/LnNlcnZlcl9saXN0ZW5pbmcgPyAnWWVzJyA6ICdObycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF19XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LWZ1bGwgbXgtYXV0byBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBzcGFjZS15LTQnPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICB2YWx1ZT17cG9ydH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UG9ydChOdW1iZXIoZS50YXJnZXQudmFsdWUpKX0gLy8gaW5wdXQgZGXEn2VyaSBkZcSfacWfdGnEn2luZGUgc2V0UG9ydCDDp2HEn8SxcsSxeW9ydXpcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBwLTIgcm91bmRlZC1tZCB3LTEvMlwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFBvcnRcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktaXRlbXMtY2VudGVyIGdhcC01Jz5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU3RhcnRTZXJ2ZXJ9IC8vIEJ1dG9uYSB0xLFrbGFuZMSxxJ/EsW5kYSBoYW5kbGVTdGFydFNlcnZlciBmb25rc2l5b251bnUgw6dhxJ/EsXLEsXlvcnV6XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nYm9yZGVyIHAtMiByb3VuZGVkLW1kIGJnLWJsdWUtNTAwIHRleHQtd2hpdGUnXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFN0YXJ0IEJpbmRpbmdcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2JvcmRlciBwLTIgcm91bmRlZC1tZCBiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlJz5cbiAgICAgICAgICAgICAgU3RhcnQgTGlzdGVuaW5nXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdib3JkZXIgcC0yIHJvdW5kZWQtbWQgYmctYmx1ZS01MDAgdGV4dC13aGl0ZSc+XG4gICAgICAgICAgICAgIFN0b3AgU2VydmVyXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIFBvcHVwICovfVxuICAgICAge2lzUG9wdXBWaXNpYmxlICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIGJnLWJsYWNrIGJnLW9wYWNpdHktNTAgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtNiByb3VuZGVkLW1kIHNoYWRvdy1sZ1wiPlxuICAgICAgICAgICAgPHA+e3BvcHVwTWVzc2FnZX08L3A+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2Nsb3NlUG9wdXB9IGNsYXNzTmFtZT1cIm10LTQgcC0yIGJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcm91bmRlZC1tZFwiPlxuICAgICAgICAgICAgICBDbG9zZVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwibGFuU2VydmVyU3RhdHVzIiwic3RhcnRMQU5TZXJ2ZXIiLCJUYWJsZSIsIlNlcnZlclBhZ2UiLCJsYW5TZXJ2ZXJTdGF0Iiwic2V0TGFuU2VydmVyU3RhdCIsInBvcnQiLCJzZXRQb3J0IiwicG9wdXBNZXNzYWdlIiwic2V0UG9wdXBNZXNzYWdlIiwiaXNQb3B1cFZpc2libGUiLCJzZXRJc1BvcHVwVmlzaWJsZSIsImZldGNoU2VydmVyU3RhdHVzIiwicmVzcG9uc2UiLCJlcnJvciIsImNvbnNvbGUiLCJoYW5kbGVTdGFydFNlcnZlciIsIm1lc3NhZ2UiLCJwcmV2U3RhdGUiLCJzZXJ2aWNlX2luZm8iLCJzZXJ2ZXJfc3RhdHVzIiwic3RhdHVzIiwic2VydmVyX2JpbmRpbmciLCJzZXJ2ZXJfbGlzdGVuaW5nIiwibG9nIiwiY2xvc2VQb3B1cCIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwiVGFibGVIZWFkZXIiLCJUYWJsZVJvd3MiLCJuYW1lIiwidmFsdWUiLCJpcCIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwiZSIsIk51bWJlciIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwib25DbGljayIsInAiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(core)/server/page.tsx\n"));

/***/ })

});