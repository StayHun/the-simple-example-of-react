import React from 'react';
import ReactDOM from 'react-dom';
import All from './components/All';
//import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<All />, document.getElementById('example'));
registerServiceWorker();
