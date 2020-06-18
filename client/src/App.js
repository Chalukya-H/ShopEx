import React from 'react';
import {BrowserRouter, Switch,Route} from 'react-router-dom'
import './App.css';
import TopMenu from './components/home/topMenu'
import Login from './components/home/login'
import Register from './components/home/register'
import AllItemsShow from './components/items/itemsShow'
import CustomerInfo from './components/customer/customerAccount'
import Cart from './components/cart/carview'


function App() {
  return (
    <BrowserRouter>
       <div> 
          <TopMenu/> 
        </div>

    <Switch>
        <Route path ='/' component = {AllItemsShow} exact ={true} />
        <Route path ='/login' component = {Login} />
        <Route path ='/register' component ={Register} />
        <Route path ='/account' component ={CustomerInfo} />
        <Route path ='/cart' component ={Cart} />
    </Switch>
    </BrowserRouter>
   
  );
}

export default App;
