import axios from 'axios' 

export const setUserInfo = (user) =>{
    return {type: 'SET_USER' ,  payload:user}
}

export const stratLogin = (userData,redirect) =>{
    console.log(userData,'LoginAction')
    return(dispatch) => {
        axios.post('/users/login',userData)
        .then(response => {
            if(response.data.hasOwnProperty('error')){                
                alert (response.data.error)
             } else {
                 localStorage.setItem('token',response.data.token)
                 alert('Login SuccessFull !')
                 console.log('Token - ',localStorage.getItem('token'))

                 axios.get('users/account',{headers :{
                     'auth':localStorage.getItem('token')
                    }
                 })

                 .then(response =>{
                     dispatch(setUserInfo(response.data))
                     redirect()
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
                console.log(response.data)
                alert(response.data.message)
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