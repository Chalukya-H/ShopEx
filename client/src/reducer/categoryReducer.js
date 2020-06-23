
const categoryInitState = []

const categoryReducer = (state = categoryInitState ,action) => {
    switch (action.type) {
        case 'SET_CATEGORY': {              
            return [].concat(action.payload)
        } 
         
        default: {  
            return [].concat(state)
        }          
    }
}

export default categoryReducer