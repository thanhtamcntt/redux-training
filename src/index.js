import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

// tạo ra một đối tượng toàn cục dùng cho app
import { createStore } from 'redux'

import {Provider} from 'react-redux';

import allReducers from './reducers';

const store = createStore(allReducers);

ReactDOM.render(<Provider store={store}>
  <App />
</Provider>,
document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
