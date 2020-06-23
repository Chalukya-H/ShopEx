import axios from 'axios'

export const setCategoryInfo = (category) =>{
    return {type: 'SET_CATEGORY' ,  payload:category}
}
export const getCategories =()=>{
    return(dispatch) => {
        axios.get('/categories' )

         .then(response => {            
             dispatch( setCategoryInfo(response.data) )
             
         })
         .catch(err =>{
             console.log(err)
         })         
    }
}