import axios from 'axios'

export const redirect = (path) =>{
    return window.location.href = path            
}

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
                'Content-Type' :'multipart/form-data',
                'auth' : localStorage.getItem('token') 
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
 

export const getTopProducts = ()=>{
    
        return(dispatch) =>{
            axios.post('/products/topnew')
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


export const getProductsbyQuery = (searchText)=>{ 
    return(dispatch) =>{
         
        axios.get(`/products/search/${ searchText}`,{ 
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


export const updateProductinfo= (product) => {
    return { type: 'EDIT_PRODUCT', payload: product}
} 

export const updateProduct = (formData, id , redirect) =>{
    return(dispatch) =>{ 
        axios.put(`/products/update/${id}`,formData )
        .then(response =>{  
            dispatch(updateProductinfo(response.data))
            redirect()
        })
        .catch( err =>{
            console.log(err)
        })

         
    }
}