import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import usersReducer from '../reducer/usersReducer'
import orderReducer from '../reducer/ordersReducer'
import productsReducer from '../reducer/productsReducer'
import categoryReducer from '../reducer/categoryReducer'
const configureStore =() =>{
    const store = createStore ( combineReducers ({
        users:usersReducer,
        orders:orderReducer,
        products:productsReducer,
        categories:categoryReducer
    }) , applyMiddleware(thunk) )
    return store
}

export default configureStore