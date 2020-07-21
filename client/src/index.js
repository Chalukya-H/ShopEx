import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux' 
import configureStore from './store/configureStore'
import {startGetUser} from './actions/userAction'
import {getCategories} from './actions/categoryAction'
import {getProducts} from './actions/productAction'
import  'bootstrap/dist/css/bootstrap.css'
import Footer from '../src/components/home/footer'

const store = configureStore()
store.subscribe( () =>{
  // console.log(store.getState())
  store.getState()
})
 
// handle page reload
if(localStorage.getItem('token')) {
  store.dispatch(startGetUser())
  store.dispatch(getCategories())
  // store.dispatch(getProducts())
}

const ele = (
  <Provider store ={store}>
      <App/>
      <Footer/>
  </Provider>
)

ReactDOM.render( ele, document.getElementById('root')
);
  
