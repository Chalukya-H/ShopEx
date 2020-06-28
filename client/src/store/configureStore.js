import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import usersReducer from '../reducer/usersReducer'
import orderReducer from '../reducer/ordersReducer'
import productsReducer from '../reducer/productsReducer'
import categoryReducer from '../reducer/categoryReducer'
import cartReducer from '../reducer/cartReducer'
const configureStore =() =>{
    const store = createStore ( combineReducers ({
        users:usersReducer,
        orders:orderReducer,
        products:productsReducer,
        categories:categoryReducer,
        cartData:cartReducer
    }) , applyMiddleware(thunk) )
    return store
}

export default configureStore