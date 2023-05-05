import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import {startGetMenuItems} from '../src/actions/menuAction'
import { startGetOrderList } from '../src/actions/orderAction'
import App from './App';
const store = configureStore()



store.subscribe(() => {
  console.log('state updated', store.getState())
})
// when the state variable changes we can have the data sing subscribe

console.log(store.getState())
store.dispatch(startGetMenuItems())
store.dispatch(startGetOrderList())
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>

  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

