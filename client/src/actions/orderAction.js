import axios from 'axios'
import swal from 'sweetalert'
import {getProducttoCart} from './cartAction'

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
             if(response.data.hasOwnProperty('error')){
                 
                swal({
                    title: response.data.error,                     
                    icon: "error" ,
                    button :'OK'                   
                  }).then( ()=>{
                      window.location.href='/'
                  }) 
                   
                
                
             }           
            else{
                dispatch( setOrderSummary(response.data) )
            }
             
         })
         .catch(err =>{
             console.log(err)
         })         
    }
}

export const getOrdersDetails =()=>{
    return(dispatch) => {
        axios.get('/orders/list' , {  headers : {
            'auth' : localStorage.getItem('token') 
             }
        })

         .then(response => { 
             if(response.data.hasOwnProperty('error')){                 
                swal({
                    title: response.data.error,                     
                    icon: "error" ,
                    button :'OK'                   
                  }).then( ()=>{
                      window.location.href='/'
                  })  
             }           
            else{
                dispatch( setOrderSummary(response.data) )
            }
             
         })
         .catch(err =>{
             console.log(err)
         })         
    }
}



export const addOrderInfo = (order) =>{
    return {type: 'CREATE_ORDER' ,  payload:order}
}

export const addProductstoOrder = (formData , refresh) =>{
    return(dispatch) => {     
            
        axios.delete(`/cart/delete/all`, {  headers : {
            'auth' : localStorage.getItem('token') 
             }
            })
         .then(response => {  
              if( response.data.hasOwnProperty('error')){
                  alert (response.data)
              } else {                  
                dispatch(getProducttoCart())               
                console.log()
                axios.post('/orders',formData,{  headers : {
                    'auth' : localStorage.getItem('token') 
                     }
                    })
                
                    .then(response =>{
                        if( response.data.hasOwnProperty('error')){
                            alert (response.data)
                        } else {
                             dispatch ( addOrderInfo(response.data) )
                             refresh()
                        }

                    })
                    .catch(err =>{
                        console.log(err)
                    })
                
              }
            })
            
        .catch(err =>{
            console.log(err)
        })
    }        
}