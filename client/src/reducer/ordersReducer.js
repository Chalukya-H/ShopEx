
const orderInitState = []

const orderReducer = (state = orderInitState ,action) => {
    switch (action.type) {
        case 'SET_ORDERS': {              
            return [].concat(action.payload)
        } 
        case 'CREATE_ORDER': {              
            return [].concat(action.payload)
        }   
        
        default: {  
            return [].concat(state)
        }          
    }
}

export default orderReducer