import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import * as serviceWorker from './serviceWorker';
import configureStore from './store/configureStore'
import {startGetUser} from './actions/userAction'
import  'bootstrap/dist/css/bootstrap.css'

const store = configureStore()
store.subscribe( () =>{
  console.log(store.getState())
})
 
// handle page reload
if(localStorage.getItem('token')) {
  store.dispatch(startGetUser())
}

const ele = (
  <Provider store ={store}>
      <App/>
  </Provider>
)

ReactDOM.render( <App/>, document.getElementById('root')
);
 
serviceWorker.unregister();
