import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import ControlPanel from './3-flux/views/ControlPanel.js'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ControlPanel />, document.getElementById('root'));
registerServiceWorker();
