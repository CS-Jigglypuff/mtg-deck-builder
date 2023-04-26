import _jsx from "@babel/runtime/helpers/jsx";
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.js';
import { BrowserRouter } from 'react-router-dom';
import './css/style.css';
var domNode = document.getElementById('root');
var root = createRoot(domNode);
root.render( /*#__PURE__*/_jsx(BrowserRouter, {}, void 0, /*#__PURE__*/_jsx(App, {})));