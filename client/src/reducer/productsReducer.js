
const productInitState = []

const productsReducer = (state = productInitState ,action) => {
    switch (action.type) {
        case 'ADD_PRODUCT': {              
            return [].concat(action.payload)
        } 
        case 'UPDATE_PRODUCT': {              
            return [].concat(action.payload)
        } 
         
        default: {  
            return [].concat(state)
        }          
    }
}

export default productsReducer