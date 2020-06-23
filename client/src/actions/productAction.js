import axios from 'axios'

export const addProductinfo= (product) => {
    return { type: 'ADD_PRODUCT', payload: product}
}


export const addProduct = (productInfo)=>{

    return(dispatch) =>{
        axios.post('/products/add',productInfo)
        .then(response =>{
            dispatch(addProductinfo(response.data))
        })
        .catch( err =>{
            console.log(err)
        })
    }
}