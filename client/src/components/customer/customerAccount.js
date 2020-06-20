import React from 'react'
import {startGetUser,EditUserInfo} from '../../actions/userAction'
import {connect} from 'react-redux'

class CustomerInfo extends React.Component {
    constructor(){
        super()
        this.state = {
            firstName:'',
            lastName:'',
            address:'',
            mobile:'',
            email:'',
            gender:'',
            infoEdit:true
        }
    }

    componentDidMount =()=>{
        this.props.dispatch(startGetUser()) 

        const refersh =  setInterval( () =>{  
            if(this.props.users.length ) {             
                clearInterval(refersh)
                 
                this.setState({
                    firstName:this.props.users[0].firstName,
                    lastName:this.props.users[0].lastName,
                    address:this.props.users[0].address,
                    mobile:this.props.users[0].mobile,
                    email:this.props.users[0].email  ,
                    gender:this.props.users[0].gender           
                })
            }
        } , 1000)
    }

    handleInfoEdit = () => {
        this.setState( {infoEdit:false})
    }

    handleChange = (e) =>{
        this.setState ({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit =(e) =>{
        e.preventDefault()
        const userData = {
            firstName: this.state.firstName,
            lastName:this.state.lastName,
            address:this.state.address,
            mobile:this.state.mobile,
            email:this.state.email,
            gender:this.state.gender 
        }

        const refresh =() =>{
            return window.location.reload()
        }

        this.props.dispatch(EditUserInfo(userData , this.props.users[0]._id , refresh))
    }

    render(){
          
        return(
            <div className = 'container bg-light'>
                <div className ='row'>
                  <h2 className ='mb-4'> Personal Information </h2>
                  <a href= '#' className=" ml-3  text-monospace text-decoration-none" onClick ={this.handleInfoEdit} 
                    style ={{fontSize:'lg'}}>Edit</a> 
                </div>

                <div className ='row'>                                     
                    <div className ='col-md-4'> First Name                 
                        <input type="text" aria-label="First name" className="form-control" disabled ={this.state.infoEdit} 
                            name ='firstName'  value = {this.state.firstName} onChange ={this.handleChange} />  
                    </div>
                    <div className ='col-md-4'>  Last Name                     
                        <input type="text" aria-label="Last name" className="form-control" disabled ={this.state.infoEdit}
                           name ='lastName'  value = {this.state.lastName} onChange ={this.handleChange}  />  
                    </div>
                </div>

                <h6 className ='mt-3'>Your Gender</h6>
                <div className ='row ml-2'>                    
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="gender" 
                            id="Male" value="Male" disabled ={this.state.infoEdit} onChange ={this.handleChange}
                            checked = {this.state.gender ==='Male' ? true : false} />
                        <label className="form-check-label" htmlFor="Male">Male</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="gender" 
                            id="Female" value="Female" disabled ={this.state.infoEdit} onChange ={this.handleChange} 
                            checked = {this.state.gender ==='Female' ? true : false} />
                        <label className="form-check-label" htmlFor="Female">Female</label>
                    </div>
                </div>

                <h6 className ='mt-5'>Email Address</h6>
                <div className ='row'>
                    <div className ='col-md-4'>                    
                            <input type="email" aria-label="Email" className="form-control"  disabled ={this.state.infoEdit}
                                name= 'email' value = {this.state.email} onChange ={this.handleChange} />  
                        </div>
                </div>

                <h6 className ='mt-4'>Mail Address</h6>
                <div className ='row'>
                    <div className ='col-md-4'>                    
                            <textarea type="text" aria-label="Address" className="form-control" disabled ={this.state.infoEdit}
                              name= 'address' value = {this.state.address} onChange ={this.handleChange} />  
                    </div>
                </div>

                <h6 className ='mt-4'>Mobile Number</h6>
                <div className ='row'>
                    <div className ='col-md-4'>                    
                    <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">+91</span>
                    </div>
                    <input type="text" className="form-control" placeholder="Mobile Number" disabled ={this.state.infoEdit}
                          name= 'mobile' value = {this.state.mobile} onChange ={this.handleChange} />
                    </div>
                    </div>
                </div>

                <div className ='row mt-4'>
                    <div className ='col-md-4'>                    
                    <button type="button" className="btn btn-primary w-50" onClick={this.handleSubmit}>
                        Save
                        </button>
                    </div>
                </div>



            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return  {
        users : state.users
    }

}

export default  connect(mapStateToProps)(CustomerInfo)