
const cartInitState = []

const cartReducer = (state = cartInitState ,action) => {
    switch (action.type) {
        case 'CREATE_CART': {              
            return [].concat(action.payload)
        } 

       
         
        default: {  
            return [].concat(state)
        }          
    }
}

export default cartReducer