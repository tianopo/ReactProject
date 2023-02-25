"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_teste_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/teste.module.css */ \"./public/teste.module.css\");\n/* harmony import */ var _public_teste_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_teste_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nclass List extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {\n    render() {\n        const lista = this.props.lista;\n        if (lista.length < 10) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_public_teste_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_public_teste_module_css__WEBPACK_IMPORTED_MODULE_2___default().titulo),\n                        children: \"Adicione Tarefas Para Fazer\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Matheus\\\\Github\\\\react\\\\todo\\\\pages\\\\index.js\",\n                        lineNumber: 10,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: (_public_teste_module_css__WEBPACK_IMPORTED_MODULE_2___default().atividade),\n                        value: this.props.inputValue,\n                        onChange: this.props.handleInputChange\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Matheus\\\\Github\\\\react\\\\todo\\\\pages\\\\index.js\",\n                        lineNumber: 11,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_public_teste_module_css__WEBPACK_IMPORTED_MODULE_2___default().remover),\n                        onClick: this.props.handleAdicionar,\n                        children: \"Adicionar\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Matheus\\\\Github\\\\react\\\\todo\\\\pages\\\\index.js\",\n                        lineNumber: 14,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: [\n                            \"N\\xfamero total de tarefas \",\n                            lista.length\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\Matheus\\\\Github\\\\react\\\\todo\\\\pages\\\\index.js\",\n                        lineNumber: 16,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: lista.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: (_public_teste_module_css__WEBPACK_IMPORTED_MODULE_2___default().lista),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"checkbox\",\n                                        checked: item.completed,\n                                        onChange: ()=>this.props.handleMensagem(index)\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Matheus\\\\Github\\\\react\\\\todo\\\\pages\\\\index.js\",\n                                        lineNumber: 20,\n                                        columnNumber: 21\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_public_teste_module_css__WEBPACK_IMPORTED_MODULE_2___default().lista__palavras),\n                                        style: {\n                                            textDecoration: item.completed ? \"line-through\" : \"none\"\n                                        },\n                                        children: item.task\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Matheus\\\\Github\\\\react\\\\todo\\\\pages\\\\index.js\",\n                                        lineNumber: 22,\n                                        columnNumber: 21\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: (_public_teste_module_css__WEBPACK_IMPORTED_MODULE_2___default().remover),\n                                        onClick: ()=>this.props.handleRemover(index),\n                                        children: \"Remover\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Matheus\\\\Github\\\\react\\\\todo\\\\pages\\\\index.js\",\n                                        lineNumber: 24,\n                                        columnNumber: 21\n                                    }, this)\n                                ]\n                            }, index, true, {\n                                fileName: \"E:\\\\Matheus\\\\Github\\\\react\\\\todo\\\\pages\\\\index.js\",\n                                lineNumber: 19,\n                                columnNumber: 17\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Matheus\\\\Github\\\\react\\\\todo\\\\pages\\\\index.js\",\n                        lineNumber: 17,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Matheus\\\\Github\\\\react\\\\todo\\\\pages\\\\index.js\",\n                lineNumber: 9,\n                columnNumber: 9\n            }, this);\n        } else {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_public_teste_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_public_teste_module_css__WEBPACK_IMPORTED_MODULE_2___default().titulo),\n                        children: \"Adicione Tarefas Para Fazer\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Matheus\\\\Github\\\\react\\\\todo\\\\pages\\\\index.js\",\n                        lineNumber: 33,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: (_public_teste_module_css__WEBPACK_IMPORTED_MODULE_2___default().atividade),\n                        value: this.props.inputValue,\n                        onChange: this.props.handleInputChange\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Matheus\\\\Github\\\\react\\\\todo\\\\pages\\\\index.js\",\n                        lineNumber: 34,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: (_public_teste_module_css__WEBPACK_IMPORTED_MODULE_2___default().descricao),\n                        children: \"M\\xe1ximo de 10 tarefas apenas\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Matheus\\\\Github\\\\react\\\\todo\\\\pages\\\\index.js\",\n                        lineNumber: 37,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: [\n                            \"N\\xfamero total de tarefas \",\n                            lista.length\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\Matheus\\\\Github\\\\react\\\\todo\\\\pages\\\\index.js\",\n                        lineNumber: 39,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: lista.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: (_public_teste_module_css__WEBPACK_IMPORTED_MODULE_2___default().lista),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"checkbox\",\n                                        checked: item.completed,\n                                        onChange: ()=>this.props.handleMensagem(index)\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Matheus\\\\Github\\\\react\\\\todo\\\\pages\\\\index.js\",\n                                        lineNumber: 43,\n                                        columnNumber: 21\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_public_teste_module_css__WEBPACK_IMPORTED_MODULE_2___default().lista__palavras),\n                                        style: {\n                                            textDecoration: item.completed ? \"line-through\" : \"none\"\n                                        },\n                                        children: item.task\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Matheus\\\\Github\\\\react\\\\todo\\\\pages\\\\index.js\",\n                                        lineNumber: 45,\n                                        columnNumber: 21\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: (_public_teste_module_css__WEBPACK_IMPORTED_MODULE_2___default().remover),\n                                        onClick: ()=>this.props.handleRemover(index),\n                                        children: \"Remover\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Matheus\\\\Github\\\\react\\\\todo\\\\pages\\\\index.js\",\n                                        lineNumber: 47,\n                                        columnNumber: 21\n                                    }, this)\n                                ]\n                            }, index, true, {\n                                fileName: \"E:\\\\Matheus\\\\Github\\\\react\\\\todo\\\\pages\\\\index.js\",\n                                lineNumber: 42,\n                                columnNumber: 17\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Matheus\\\\Github\\\\react\\\\todo\\\\pages\\\\index.js\",\n                        lineNumber: 40,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Matheus\\\\Github\\\\react\\\\todo\\\\pages\\\\index.js\",\n                lineNumber: 32,\n                columnNumber: 11\n            }, this);\n        }\n    }\n}\nclass App extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {\n    handleAdicionar() {\n        this.setState((prevState)=>({\n                lista: [\n                    ...prevState.lista,\n                    {\n                        task: prevState.inputValue,\n                        completed: false\n                    }\n                ]\n            }));\n    }\n    handleRemover(index) {\n        this.setState((prevState)=>({\n                lista: prevState.lista.filter((item, i)=>i !== index)\n            }));\n    }\n    handleInputChange(event) {\n        this.setState({\n            inputValue: event.target.value\n        });\n    }\n    handleMensagem(index) {\n        this.setState((prevState)=>({\n                lista: prevState.lista.map((item, i)=>{\n                    if (i === index) {\n                        return {\n                            ...item,\n                            completed: !item.completed\n                        };\n                    }\n                    return item;\n                })\n            }));\n    }\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(List, {\n                lista: this.state.lista,\n                handleAdicionar: this.handleAdicionar,\n                handleRemover: this.handleRemover,\n                handleInputChange: this.handleInputChange.length > 0,\n                handleMensagem: this.handleMensagem\n            }, void 0, false, {\n                fileName: \"E:\\\\Matheus\\\\Github\\\\react\\\\todo\\\\pages\\\\index.js\",\n                lineNumber: 101,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"E:\\\\Matheus\\\\Github\\\\react\\\\todo\\\\pages\\\\index.js\",\n            lineNumber: 100,\n            columnNumber: 9\n        }, this);\n    }\n    constructor(props){\n        super(props);\n        this.state = {\n            lista: [],\n            inputValue: \"\",\n            mensagem: true\n        };\n        this.handleAdicionar = this.handleAdicionar.bind(this);\n        this.handleRemover = this.handleRemover.bind(this);\n        this.handleInputChange = this.handleInputChange.bind(this);\n        this.handleMensagem = this.handleMensagem.bind(this);\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxHQUFHO1lBQUV6QyxPQUFPLEVBQUU7WUFBRVcsWUFBWTtZQUFJZ0MsVUFBVSxJQUFJO1FBQUM7UUFDekQsSUFBSSxDQUFDMUIsZUFBZSxHQUFHLElBQUksQ0FBQ0EsZUFBZSxDQUFDMkIsSUFBSSxDQUFDLElBQUk7UUFDckQsSUFBSSxDQUFDWixhQUFhLEdBQUcsSUFBSSxDQUFDQSxhQUFhLENBQUNZLElBQUksQ0FBQyxJQUFJO1FBQ2pELElBQUksQ0FBQy9CLGlCQUFpQixHQUFHLElBQUksQ0FBQ0EsaUJBQWlCLENBQUMrQixJQUFJLENBQUMsSUFBSTtRQUN6RCxJQUFJLENBQUNqQixjQUFjLEdBQUcsSUFBSSxDQUFDQSxjQUFjLENBQUNpQixJQUFJLENBQUMsSUFBSTtJQUNyRDtBQXlDRjtBQUVBLCtEQUFlVixHQUFHQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlIGZyb20gJy4uL3B1YmxpYy90ZXN0ZS5tb2R1bGUuY3NzJztcclxuXHJcbmNsYXNzIExpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICBjb25zdCBsaXN0YSA9IHRoaXMucHJvcHMubGlzdGE7XHJcbiAgICAgIGlmKGxpc3RhLmxlbmd0aCA8IDEwKXtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZS50aXR1bG99PkFkaWNpb25lIFRhcmVmYXMgUGFyYSBGYXplcjwvaDE+XHJcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e3N0eWxlLmF0aXZpZGFkZX0gdmFsdWU9e3RoaXMucHJvcHMuaW5wdXRWYWx1ZX0gXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5wcm9wcy5oYW5kbGVJbnB1dENoYW5nZX0gLz5cclxuXHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZS5yZW1vdmVyfSBvbkNsaWNrPXt0aGlzLnByb3BzLmhhbmRsZUFkaWNpb25hcn0+QWRpY2lvbmFyPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICA8aDM+TsO6bWVybyB0b3RhbCBkZSB0YXJlZmFzIHtsaXN0YS5sZW5ndGh9PC9oMz5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAge2xpc3RhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlLmxpc3RhfSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17aXRlbS5jb21wbGV0ZWR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gdGhpcy5wcm9wcy5oYW5kbGVNZW5zYWdlbShpbmRleCl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZS5saXN0YV9fcGFsYXZyYXN9IHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiBpdGVtLmNvbXBsZXRlZCA/ICdsaW5lLXRocm91Z2gnIDogJ25vbmUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS50YXNrfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGUucmVtb3Zlcn0gb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5oYW5kbGVSZW1vdmVyKGluZGV4KX0+UmVtb3ZlcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGUudGl0dWxvfT5BZGljaW9uZSBUYXJlZmFzIFBhcmEgRmF6ZXI8L2gxPlxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtzdHlsZS5hdGl2aWRhZGV9IHZhbHVlPXt0aGlzLnByb3BzLmlucHV0VmFsdWV9IFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMucHJvcHMuaGFuZGxlSW5wdXRDaGFuZ2V9IC8+XHJcblxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlLmRlc2NyaWNhb30+TcOheGltbyBkZSAxMCB0YXJlZmFzIGFwZW5hczwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgIDxoMz5Ow7ptZXJvIHRvdGFsIGRlIHRhcmVmYXMge2xpc3RhLmxlbmd0aH08L2gzPlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICB7bGlzdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGUubGlzdGF9IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXtpdGVtLmNvbXBsZXRlZH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB0aGlzLnByb3BzLmhhbmRsZU1lbnNhZ2VtKGluZGV4KX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlLmxpc3RhX19wYWxhdnJhc30gc3R5bGU9e3sgdGV4dERlY29yYXRpb246IGl0ZW0uY29tcGxldGVkID8gJ2xpbmUtdGhyb3VnaCcgOiAnbm9uZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnRhc2t9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZS5yZW1vdmVyfSBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmhhbmRsZVJlbW92ZXIoaW5kZXgpfT5SZW1vdmVyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0geyBsaXN0YTogW10sIGlucHV0VmFsdWU6IFwiXCIsIG1lbnNhZ2VtOiB0cnVlIH07XHJcbiAgICB0aGlzLmhhbmRsZUFkaWNpb25hciA9IHRoaXMuaGFuZGxlQWRpY2lvbmFyLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhhbmRsZVJlbW92ZXIgPSB0aGlzLmhhbmRsZVJlbW92ZXIuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UgPSB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhhbmRsZU1lbnNhZ2VtID0gdGhpcy5oYW5kbGVNZW5zYWdlbS5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQWRpY2lvbmFyKCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlKSA9PiAoe1xyXG4gICAgICBsaXN0YTogW1xyXG4gICAgICAgIC4uLnByZXZTdGF0ZS5saXN0YSxcclxuICAgICAgICB7IHRhc2s6IHByZXZTdGF0ZS5pbnB1dFZhbHVlLCBjb21wbGV0ZWQ6IGZhbHNlIH0sXHJcbiAgICAgIF1cclxuICAgIH0pKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVJlbW92ZXIoaW5kZXgpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4gKHtcclxuICAgICAgbGlzdGE6IHByZXZTdGF0ZS5saXN0YS5maWx0ZXIoKGl0ZW0sIGkpID0+IGkgIT09IGluZGV4KSxcclxuICAgIH0pKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUlucHV0Q2hhbmdlKGV2ZW50KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgaW5wdXRWYWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlTWVuc2FnZW0oaW5kZXgpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4gKHtcclxuICAgICAgbGlzdGE6IHByZXZTdGF0ZS5saXN0YS5tYXAoKGl0ZW0sIGkpID0+IHtcclxuICAgICAgICBpZiAoaSA9PT0gaW5kZXgpIHtcclxuICAgICAgICAgIHJldHVybiB7IC4uLml0ZW0sIGNvbXBsZXRlZDogIWl0ZW0uY29tcGxldGVkIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICB9KSxcclxuICAgIH0pKTtcclxuICB9XHJcbiAgXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxMaXN0IGxpc3RhPXt0aGlzLnN0YXRlLmxpc3RhfSBoYW5kbGVBZGljaW9uYXI9e3RoaXMuaGFuZGxlQWRpY2lvbmFyfVxyXG4gICAgICAgICAgICBoYW5kbGVSZW1vdmVyPXt0aGlzLmhhbmRsZVJlbW92ZXJ9IGhhbmRsZUlucHV0Q2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlLmxlbmd0aCA+IDB9XHJcbiAgICAgICAgICAgIGhhbmRsZU1lbnNhZ2VtPXt0aGlzLmhhbmRsZU1lbnNhZ2VtfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuICBcclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZSIsIkxpc3QiLCJDb21wb25lbnQiLCJyZW5kZXIiLCJsaXN0YSIsInByb3BzIiwibGVuZ3RoIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiaDEiLCJ0aXR1bG8iLCJpbnB1dCIsImF0aXZpZGFkZSIsInZhbHVlIiwiaW5wdXRWYWx1ZSIsIm9uQ2hhbmdlIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJidXR0b24iLCJyZW1vdmVyIiwib25DbGljayIsImhhbmRsZUFkaWNpb25hciIsImgzIiwidWwiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJsaSIsInR5cGUiLCJjaGVja2VkIiwiY29tcGxldGVkIiwiaGFuZGxlTWVuc2FnZW0iLCJzcGFuIiwibGlzdGFfX3BhbGF2cmFzIiwidGV4dERlY29yYXRpb24iLCJ0YXNrIiwiaGFuZGxlUmVtb3ZlciIsImRlc2NyaWNhbyIsIkFwcCIsInNldFN0YXRlIiwicHJldlN0YXRlIiwiZmlsdGVyIiwiaSIsImV2ZW50IiwidGFyZ2V0Iiwic3RhdGUiLCJjb25zdHJ1Y3RvciIsIm1lbnNhZ2VtIiwiYmluZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});