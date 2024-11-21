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

/***/ "(app-pages-browser)/./app/(core)/server/functions.tsx":
/*!*****************************************!*\
  !*** ./app/(core)/server/functions.tsx ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   lanServerStatus: () => (/* binding */ lanServerStatus),\n/* harmony export */   startLANServer: () => (/* binding */ startLANServer)\n/* harmony export */ });\nasync function lanServerStatus() {\n    const response = await fetch('http://127.0.0.1:8000/server/lan/server-status');\n    if (!response.ok) {\n        throw new Error('Failed to fetch server status');\n    }\n    const data = await response.json();\n    console.log(data);\n    return data;\n}\nasync function startLANServer(port) {\n    const response = await fetch(\"http://127.0.0.1:8000/server/lan/start-server\", {\n        method: \"POST\",\n        headers: {\n            \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify({\n            port\n        })\n    });\n    if (!response.ok) {\n        // Sunucu hatası varsa\n        const errorData = await response.json();\n        throw errorData; // Hata durumunda exception döner\n    }\n    // Başarılı yanıtı işleyin\n    const data = await response.json();\n    return data;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8oY29yZSkvc2VydmVyL2Z1bmN0aW9ucy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7QUFhTyxlQUFlQTtJQUNsQixNQUFNQyxXQUFXLE1BQU1DLE1BQU07SUFDN0IsSUFBSSxDQUFDRCxTQUFTRSxFQUFFLEVBQUU7UUFDZCxNQUFNLElBQUlDLE1BQU07SUFDcEI7SUFDQSxNQUFNQyxPQUFPLE1BQU1KLFNBQVNLLElBQUk7SUFDaENDLFFBQVFDLEdBQUcsQ0FBQ0g7SUFDWixPQUFPQTtBQUNYO0FBRU8sZUFBZUksZUFBZUMsSUFBWTtJQUM3QyxNQUFNVCxXQUFXLE1BQU1DLE1BQU0saURBQWlEO1FBQzFFUyxRQUFRO1FBQ1JDLFNBQVM7WUFDTCxnQkFBZ0I7UUFDcEI7UUFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO1lBQUVMO1FBQUs7SUFDaEM7SUFFQSxJQUFJLENBQUNULFNBQVNFLEVBQUUsRUFBRTtRQUNkLHNCQUFzQjtRQUN0QixNQUFNYSxZQUFxQyxNQUFNZixTQUFTSyxJQUFJO1FBQzlELE1BQU1VLFdBQVcsaUNBQWlDO0lBQ3REO0lBRUEsMEJBQTBCO0lBQzFCLE1BQU1YLE9BQWdDLE1BQU1KLFNBQVNLLElBQUk7SUFDekQsT0FBT0Q7QUFDWCIsInNvdXJjZXMiOlsiL2hvbWUvZnVya2FuL0Rlc2t0b3AvcGVlcnNoYXJlL2Zyb250ZW5kL2FwcC8oY29yZSkvc2VydmVyL2Z1bmN0aW9ucy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIExhblNlcnZpY2VJbmZvIHtcbiAgICBpcDogc3RyaW5nXG4gICAgcG9ydDogbnVtYmVyXG4gICAgc2VydmVyX3N0YXR1czogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGFuU2VydmVyU3RhdHVzSW50ZXJmYWNlIHtcbiAgICBzdGF0dXM6IHN0cmluZ1xuICAgIHNlcnZpY2VfaW5mbzogTGFuU2VydmljZUluZm9cbiAgICBzZXJ2ZXJfYmluZGluZzogYm9vbGVhblxuICAgIHNlcnZlcl9saXN0ZW5pbmc6IGJvb2xlYW5cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxhblNlcnZlclN0YXR1cygpOiBQcm9taXNlPExhblNlcnZlclN0YXR1c0ludGVyZmFjZT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly8xMjcuMC4wLjE6ODAwMC9zZXJ2ZXIvbGFuL3NlcnZlci1zdGF0dXMnKTtcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGZldGNoIHNlcnZlciBzdGF0dXMnKTtcbiAgICB9XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgIHJldHVybiBkYXRhO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3RhcnRMQU5TZXJ2ZXIocG9ydDogbnVtYmVyKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9zZXJ2ZXIvbGFuL3N0YXJ0LXNlcnZlclwiLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHBvcnQgfSksIC8vIFBvcnQgYmlsZ2lzaW5pIEpTT04gZm9ybWF0xLFuZGEgZ8O2bmRlclxuICAgIH0pO1xuXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAvLyBTdW51Y3UgaGF0YXPEsSB2YXJzYVxuICAgICAgICBjb25zdCBlcnJvckRhdGE6IHN0YXJ0TEFOU2VydmVyRXhjZXB0aW9uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICB0aHJvdyBlcnJvckRhdGE7IC8vIEhhdGEgZHVydW11bmRhIGV4Y2VwdGlvbiBkw7ZuZXJcbiAgICB9XG5cbiAgICAvLyBCYcWfYXLEsWzEsSB5YW7EsXTEsSBpxZ9sZXlpblxuICAgIGNvbnN0IGRhdGE6IHN0YXJ0TEFOU2VydmVySW50ZXJmYWNlID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiBkYXRhO1xufSJdLCJuYW1lcyI6WyJsYW5TZXJ2ZXJTdGF0dXMiLCJyZXNwb25zZSIsImZldGNoIiwib2siLCJFcnJvciIsImRhdGEiLCJqc29uIiwiY29uc29sZSIsImxvZyIsInN0YXJ0TEFOU2VydmVyIiwicG9ydCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImVycm9yRGF0YSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(core)/server/functions.tsx\n"));

/***/ })

});