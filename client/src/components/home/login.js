import React from 'react' 
import {connect} from 'react-redux'
import {stratLogin} from '../../actions/userAction'

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password :''
        }
    }
 
    handleChange =(e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit =(e) =>{
        e.preventDefault()
        const userData = {
            email : this.state.email,
            password : this.state.password
        }

        const redirect = () =>{
            return this.props.history.push('/')             
        }

        const refresh =() =>{
            return window.location.reload()
        }

        this.props.dispatch(stratLogin(userData,redirect,refresh))
        
    }

    render() {
        return(
            <div className = 'container'>
                <div className ='row login-row justify-content-center mt-5' >
                    <div className ='col-sm-5'> 
                        <form className = 'form' >  
                            <div className ='text-center mb-4'>
                                 <h3 className = 'text'>Login Here!</h3>
                            </div>
                            <div className = 'form-group'>
                                <label htmlFor='email' >Email :</label>
                                <input type= 'email'id='email' required={true} name ='email' className ='form-control' 
                                    placeholder ='Enter the Email' value ={ this.state.email} onChange ={this.handleChange} />
                            </div>
                            <div className = 'form-group'>
                                <label htmlFor='password' >Password :</label>
                                <input type= 'password' id='password' required={true} name ='password' className ='form-control' 
                                    placeholder ='Enter the Password' value = { this.state.password} onChange ={this.handleChange}  />
                            </div>
                            
                            
                            <div className = 'form-group'> 
                                <input type= 'submit' id='submit' name ='submit' className ='btn btn-success w-25' 
                                    value ='Login' onClick ={this.handleSubmit}/>
                            </div>
                            New Customer <a href='/register'> Register here </a>
                        </form> 
                    </div>
                </div>


            </div>
        )
    }
}

export default connect()(Login)