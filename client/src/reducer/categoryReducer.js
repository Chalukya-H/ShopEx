
const categoryInitState = []

const categoryReducer = (state = categoryInitState ,action) => {
    switch (action.type) {
        case 'SET_CATEGORY': {              
            return [].concat(action.payload)
        } 

        case 'CREATE_CATEGORY' :{
            return state.concat(action.payload)
        }

        case 'EDIT_CATEGORY' :{
            return state.map (category =>{
                if(category._id === action.payload._id) {
                    return Object.assign({},category,action.payload)
                } else {
                    return Object.assign({},category)
                }
            })
        }
         
        default: {  
            return [].concat(state)
        }          
    }
}

export default categoryReducer