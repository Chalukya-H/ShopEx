import React from 'react' 

class Register extends React.Component {
    constructor(){
        super()
        this.state ={
            firstName : '',
            lastName :'',
            email:'',
            password:'',
            confirmPwd :''
        }
    }

    render() {
        return(
            <div className ='container mt-2'>               
                <div className ='row  justify-content-center' >                   
                    
                    <div className ='col-md-6'>
                         <div className ='text-center mb-4'>
                                 <h3 className = 'text'> Create Account</h3>
                            </div>
                        <form className ='form'>
                       
                            <div className ='form-group'>
                                 <label htmlFor='firstName' >First Name :</label>
                                <input type= 'firstName'id='firstName' required={true} name ='firstName' className ='form-control' 
                                    placeholder ='Enter the firstName' />
                            </div>
                            <div className ='form-group'>
                                 <label htmlFor='lastName' >Last Name :</label>
                                <input type= 'lastName'id='lastName' required={true} name ='lastName' className ='form-control' 
                                    placeholder ='Enter the lastName' />
                            </div>
                            <div className ='form-group'>
                                 <label htmlFor='email' >Email :</label>
                                <input type= 'email' id='email' required={true} name ='email' className ='form-control' 
                                    placeholder ='Enter the Email' />
                            </div> 
                            <div className ='form-group'>
                                 <label htmlFor='password' >Password :</label>
                                <input type= 'password' id='password' required={true} name ='password' className ='form-control' 
                                    placeholder ='Enter the Password' />
                            </div> 
                            <div className ='form-group'>
                                 <label htmlFor='confirmPwd' >Confirm Password :</label>
                                <input type= 'password' id='confirmPwd' required={true} name ='confirmPwd' className ='form-control' 
                                    placeholder ='Enter the Password' />
                            </div>     
                            
                            
                                <input type= 'submit' id='submit' name ='submit' className ='btn btn-success w-50' 
                                    value ='Register' />
                             
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}


export default Register