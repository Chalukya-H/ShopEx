import axios from 'axios'

export const setOrderSummary = (orders) =>{
    return {type: 'SET_ORDERS' ,  payload:orders}
}
export const getOrderSummary =()=>{
    return(dispatch) => {
        axios.get('/orders' , {  headers : {
            'auth' : localStorage.getItem('token') 
             }
        })

         .then(response => {            
             dispatch( setOrderSummary(response.data) )
             
         })
         .catch(err =>{
             console.log(err)
         })         
    }
}