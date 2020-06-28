import axios from 'axios'

export const addProductinfo= (product) => {
    return { type: 'ADD_PRODUCT', payload: product}
}



export const addProduct = (productInfo,redirect)=>{
 
    return(dispatch) =>{
        axios.post('/products',productInfo,{
            headers : { 
                'Content-Type' :'multipart/form-data'
            }
        })
        .then(response =>{
            dispatch(addProductinfo(response.data))
            redirect()
        })
        .catch( err =>{
            console.log(err)
        })
    }
}


export const getProductinfo= (product) => {
    return { type: 'UPDATE_PRODUCT', payload: product}
}


export const getProducts = ()=>{ 
    return(dispatch) =>{
        
        axios.get('/products',{
            headers : { 
                'Content-Type' :'multipart/form-data'
            }
        })
        .then(response =>{
             
            dispatch(getProductinfo(response.data))
        })
        .catch( err =>{
            console.log(err)
        })
    }
}



export const getTopProducts = (productInfo)=>{
    
        return(dispatch) =>{
            axios.post('/products/topfew',productInfo)
            .then(response =>{
                 
                dispatch(addProductinfo(response.data))
                 
            })
            .catch( err =>{
                console.log(err)
            })
        }
    }


    export const getProductsbyCategory = (id)=>{    
        return(dispatch) =>{
            axios.get(`/products/query/${id}`, {
                headers : { 
                    'Content-Type' :'multipart/form-data'
                }
            })
            .then(response =>{                
                dispatch(addProductinfo(response.data))
               
            })
            .catch( err =>{
                console.log(err)
            })
        }
    }

    
    export const getProductsbyID = (id)=>{    
        return(dispatch) =>{
            axios.get(`/products/${id}`, {
                headers : { 
                    'Content-Type' :'multipart/form-data'
                }
            })
            .then(response =>{                
                dispatch(addProductinfo(response.data))
                 
            })
            .catch( err =>{
                console.log(err)
            })
        }
    }
