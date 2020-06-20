
const userInitState = []

const usersReducer = (state = userInitState ,action) => {
    switch (action.type) {
        case 'SET_USER': {              
            return [].concat(action.payload)
        } 
        
        case 'EDIT_USER' :{
            return state.map (user =>{
                if(user._id === action.payload._id) {
                    return Object.assign({},user,action.payload)
                } else {
                    return Object.assign({},user)
                }
            })
        }

        default: {  
            return [].concat(state)
        }          
    }
}

export default usersReducer