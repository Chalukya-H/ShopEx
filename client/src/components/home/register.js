import React from 'react' 
import {startRegister} from '../../actions/userAction'
import {connect} from 'react-redux'

class Register extends React.Component {
    constructor(){
        super()
        this.state ={
            firstName : '',
            lastName :'',
            email:'',
            password:'',
            confirmPwd :'',
            pwdMsg:''
        }
    }

    handleChange = (e) =>{
        this.setState ({
            [e.target.name] : e.target.value
        })
    }


    handleSubmit =(e) =>{
        e.preventDefault()

        const redirect = () =>{
            return this.props.history.push('/login')
        }
        

        if(this.state.password === this.state.confirmPwd){
             const userData = {
                firstName: this.state.firstName,
                lastName : this.state.lastName ,
                email: this.state.email,
                password:this.state.password
             }

             this.props.dispatch(startRegister(userData,redirect))
        } 
        else{
            this.setState({pwdMsg:'Password not matched',confirmPwd:''})
            
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
                                    placeholder ='Enter the firstName' value ={this.state.firstName} onChange ={this.handleChange}  />
                            </div>
                            <div className ='form-group'>
                                 <label htmlFor='lastName' >Last Name :</label>
                                <input type= 'lastName'id='lastName' required={true} name ='lastName' className ='form-control' 
                                    placeholder ='Enter the lastName' value ={this.state.lastName} onChange ={this.handleChange} />
                            </div>
                            <div className ='form-group'>
                                 <label htmlFor='email' >Email :</label>
                                <input type= 'email' id='email' required={true} name ='email' className ='form-control' 
                                    placeholder ='Enter the Email' value ={this.state.email} onChange ={this.handleChange}/>
                            </div> 
                            <div className ='form-group'>
                                 <label htmlFor='password' >Password :</label>
                                <input type= 'password' id='password' required={true} name ='password' className ='form-control' 
                                    placeholder ='Enter the Password' value ={this.state.password} onChange ={this.handleChange}/>
                            </div> 
                            <div className ='form-group'>
                                 <label htmlFor='confirmPwd' >Confirm Password :</label>
                                <input type= 'password' id='confirmPwd' required={true} name ='confirmPwd' className ='form-control' 
                                    placeholder ='Enter the Password' value ={this.state.confirmPwd} onChange ={this.handleChange}/>
                                <span style ={{color:'red'}}>
                                  {this.state.pwdMsg}
                                </span>
                            </div>     
                            
                            
                            <input type= 'submit' id='submit' name ='submit' className ='btn btn-success w-50' 
                                value ='Register' onClick ={this.handleSubmit} />
                             
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}


export default connect () (Register)