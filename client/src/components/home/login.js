import React from 'react' 


class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password :''
        }
    }
 
    render() {
        return(
            <div className = 'container'>
                <div className ='row login-row justify-content-center mt-5' >
                    <div className ='col-sm-5'> 
                        <form className = 'form'>   
                            {/* <img src = {logo}  className = 'img-thumbnail rounded  mx-auto d-block mb-4'/>  */}

                            <div className ='text-center mb-4'>
                                 <h3 className = 'text'>Login Here!</h3>
                            </div>
                            <div className = 'form-group'>
                                <label htmlFor='email' >Email :</label>
                                <input type= 'email'id='email' required={true} name ='email' className ='form-control' 
                                    placeholder ='Enter the Email' />
                            </div>
                            <div className = 'form-group'>
                                <label htmlFor='password' >Password :</label>
                                <input type= 'password' id='password' required={true} name ='password' className ='form-control' 
                                    placeholder ='Enter the Password' />
                            </div>
                            
                            
                            <div className = 'form-group'> 
                                <input type= 'submit' id='submit' name ='submit' className ='btn btn-success w-25' 
                                    value ='Login' />
                            </div>
                            New Customer <a href='/register'> Register here </a>
                        </form> 
                    </div>
                </div>


            </div>
        )
    }
}

export default Login