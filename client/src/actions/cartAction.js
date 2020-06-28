import axios from 'axios'

export const addCartInfo = (cart) =>{
    return {type: 'CREATE_CART' ,  payload:cart}
}

export const addProducttoCart = (formdata,redirect)=>{
    return(dispatch) => {
         
        axios.post('/cart', formdata,{  headers : {
            'auth' : localStorage.getItem('token') 
             }
            })
         .then(response => {  
             dispatch( addCartInfo(response.data) )
              redirect()
         })
         .catch(err =>{
             console.log(err)
         })         
    }
}

export const getProducttoCart = ()=>{
    return(dispatch) => {
         
        axios.get('/cart', {  headers : {
            'auth' : localStorage.getItem('token') 
             }
            })
         .then(response => {  
             dispatch( addCartInfo(response.data) )
              
         })
         .catch(err =>{
             console.log(err)
         })         
    }
}


export const deleteProducttoCart = (id)=>{
    
    return(dispatch) => {         
        axios.delete(`/cart/${id}`, {  headers : {
            'auth' : localStorage.getItem('token') 
             }
            })
         .then(response => {  
              
            dispatch(getProducttoCart())
              
         })
         .catch(err =>{
             console.log(err)
         })         
    }
}