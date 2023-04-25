import React from 'react';
import {createRoot} from 'react-dom/client';

const domNode = document.getElementById('root');
const root = createRoot(domNode)

import App from './App.js'

root.render(<App/>)
