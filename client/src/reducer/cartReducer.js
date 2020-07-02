
const cartInitState = []

const cartReducer = (state = cartInitState ,action) => {
    switch (action.type) {
        case 'CREATE_CART': {              
            return [].concat(action.payload)
        } 

        case 'EDIT_CART' :{
            return state.map (cart =>{
                if(cart._id === action.payload._id) {
                    return Object.assign({},cart,action.payload)
                } else {
                    return Object.assign({},cart)
                }
            })
        }

         
        default: {  
            return [].concat(state)
        }          
    }
}

export default cartReducer