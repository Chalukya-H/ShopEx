import axios from 'axios'   
import swal from 'sweetalert'

export const setUserInfo = (user) =>{
    return {type: 'SET_USER' ,  payload:user}
}

export const stratLogin = (userData,redirect,refresh) =>{
   
    return(dispatch) => {
        axios.post('/users/login',userData)
        .then(response => {
            if(response.data.hasOwnProperty('error')){                
                
                swal({
                    title: response.data.error,                     
                    icon: "error" ,
                    button :'OK'                   
                  })
             } else {
                 localStorage.setItem('token',response.data.token)
                 swal({
                    title: 'Login Successfull !',                    
                    icon: "success",
                    button :'OK' 
                    
                  })
                                
                 console.log('Token - ',localStorage.getItem('token'))

                 axios.get('users/account',{headers :{
                     'auth':localStorage.getItem('token')
                    }
                 })

                 .then(response =>{
                     dispatch(setUserInfo(response.data))
                     redirect()
                     refresh()
                 })

                 .catch(err=>{
                     console.log(err)
                 })

             }
        })

        .catch(err =>{
            console.log(err)
        })
    }

}

export const startRegister = (userData,redirect) =>{

    return(dispatch) =>{
        axios.post('/users/register',userData)
        .then( response =>{
            
            if(response.data.hasOwnProperty('error') || response.data.hasOwnProperty('errors')){                 
                alert(response.data.error)
                redirect()
            }
            else {
                alert('Registered Successfully')
                redirect()
            }
        })

        .catch(err =>{
            console.log(err)
        })
    }
}

 
export const startGetUser =() =>{
    return(dispatch) => {
        axios.get('/users/account' , {  headers : {
            'auth' : localStorage.getItem('token') 
             }
        })

         .then(response => {            
             dispatch( setUserInfo(response.data) )
             
         })
         .catch(err =>{
             console.log(err)
         })         
    }
}


export const editUser = (user) => {
    return {   type: 'EDIT_USER',   payload: user   }
}

export const EditUserInfo = (userData,id,refresh) =>{
    console.log('Edit',userData,id)
    return(dispatch) =>{
        axios.put(`/users/${id}`,userData,{
            headers : {
                'auth' : localStorage.getItem('token') 
                 }
        })

        .then( response =>{
            console.log(response.data)
            if(response.data.hasOwnProperty('error') || response.data.hasOwnProperty('errors')) {
                alert('Customer Data not Updated !')
            } else {
                const user = response.data
                dispatch(editUser(user))
                refresh()        
            }
        })
    }
}