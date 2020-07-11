
const productInitState = []

const productsReducer = (state = productInitState ,action) => {
    switch (action.type) {
        case 'ADD_PRODUCT': {    
                       
            return [].concat(action.payload)
        } 
        case 'UPDATE_PRODUCT': {              
            return [].concat(action.payload)
        } 
         
        case 'EDIT_PRODUCT' :{
            return state.map(product =>{
                if(product._id === action.payload._id) {
                    return Object.assign({},product,action.payload)
                } else {
                    return Object.assign({},product)
                }
            })
        }
        default: {  
            return [].concat(state)
        }          
    }
}

export default productsReducer