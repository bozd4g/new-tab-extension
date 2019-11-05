import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Todos from './scenes/Todos';

require('dotenv').config();

ReactDOM.render(<Todos />, document.getElementById('root'));
serviceWorker.unregister();
