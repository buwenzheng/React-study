import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import ControlPanel from './2-props/ControlPanel.js'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ControlPanel />, document.getElementById('root'));
registerServiceWorker();
