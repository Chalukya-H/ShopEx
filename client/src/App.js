import React from 'react';
import {BrowserRouter, Switch,Route} from 'react-router-dom'
import './App.css';
import TopMenu from './components/home/topMenu'
import Login from './components/home/login'
import Register from './components/home/register'
import AllItemsShow from './components/items/itemsShow'
import CustomerInfo from './components/customer/customerAccount'
import Cart from './components/cart/carview'
import OrderSummary from './components/orders/orderSummary'
import AddProduct from './components/items/addItems'
import ShowSingleProduct from './components/items/singleItemShow'
import ProductsSummary from './components/items/productList'
import ProductShowByCategory from './components/items/productsDisplay'
import CategoriesSummary from './components/categories/cartegoriesList'
import CategoryUpdate from './components/categories/categoriesUpdate'
import ProductSeachbyName from './components/items/productsBySearch'
import UpdateProduct from './components/items/updateProducts'
import OrderCreate from './components/orders/orderCreate'
import OrdersDisplay from './components/orders/orderShow'

function App() {
  return (
    <BrowserRouter>
       <div> 
          <TopMenu/> 
        </div>
         
      <Switch>
          <Route path ='/' component = {AllItemsShow} exact ={true} />
          <Route path ='/ShopEx' component = {AllItemsShow} exact ={true} />
          <Route path ='/login' component = {Login} exact ={true}/>
          <Route path ='/register' component ={Register} exact ={true}/>
          <Route path ='/account' component ={CustomerInfo} exact ={true}/>
          <Route path ='/cart' component ={Cart} exact ={true}/>

          <Route path ='/orders' component ={OrderSummary} exact ={true}/>
          <Route path ='/orders/add' component ={OrderCreate} exact ={true}/>
          <Route path ='/orders/summary' component ={OrdersDisplay} exact ={true}/>


          <Route path ='/categories/list' component ={CategoriesSummary} exact ={true}/>
          <Route path ='/categories/update' component ={CategoryUpdate} exact ={true}/>

          <Route path ='/products/list' component ={ProductsSummary} exact ={true} />
          <Route path ='/products/add' component ={AddProduct} exact ={true} />  
          <Route path ='/search/:text' component ={ProductSeachbyName} exact ={true}/>        
          <Route path ='/products/query/:id' component ={ProductShowByCategory} exact ={true}/>  
          <Route path ='/products/update/:id' component ={UpdateProduct} exact ={true}/>        
          <Route path ='/products/:id' component ={ShowSingleProduct} exact ={true}/>
          
          
      </Switch>
      
    </BrowserRouter>
   
  );
}

export default App;
