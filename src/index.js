import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from './screens/home/Home.js';
import Character from './screens/character/Character.js';
import File from './screens/file/File.js';
import Configuration from './screens/configuration/Configuration.js';
import Help from './screens/help/Help.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes basename="index.html">
        <Route exact path="/" element={<Home />}/>
        <Route path="/Character" element={<Character />}/>
        <Route path="/File" element={<File />}/>
        <Route path="/Configuration" element={<Configuration />}/>
        <Route path="/Help" element={<Help />}/>
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
