
const userInitState = []

const usersReducer = (state = userInitState ,action) => {
    switch (action.type) {
        case 'SET_USER': {              
            return [].concat(action.payload)
        } 
    
        default: {  
            return [].concat(state)
        }          
    }
}

export default usersReducer