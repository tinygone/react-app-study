import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SingerCategory from './SingerCategory';;
//import ManageSystem from "./ManageSystem"
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<SingerCategory />, document.getElementById('root'));
registerServiceWorker();
//ReactDOM.render(<h1>Hello World</h1>, document.getElementById('root'));
