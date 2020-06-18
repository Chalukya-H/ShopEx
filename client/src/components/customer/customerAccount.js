import React from 'react'

class CustomerInfo extends React.Component {
    constructor(){
        super()
        this.state = {
            firstname:'',
            lastName:'',
            address:'',
            phno:'',
            email:'',
            gender:'',
            infoEdit:true
        }
    }

    handleInfoEdit = () => {

        this.setState( {infoEdit:false})
    }

    render(){
        return(
            <div className = 'container bg-light'>
                <div className ='row'>
                  <h2 className ='mb-4'>   Personal Information </h2>
                  <a href= '#' class=" ml-3  text-monospace text-decoration-none" onClick ={this.handleInfoEdit} style ={{fontSize:'lg'}}>Edit</a> 
                </div>
                <div className ='row'>                                     
                    <div className ='col-md-4'> First Name                 
                        <input type="text" aria-label="First name" class="form-control" disabled ={this.state.infoEdit} />  
                    </div>
                    <div className ='col-md-4'>  Last Name                     
                        <input type="text" aria-label="Last name" class="form-control" disabled ={this.state.infoEdit}/>  
                    </div>
                </div>

                <h6 className ='mt-3'>Your Gender</h6>
                <div className ='row ml-2'>                    
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" 
                            id="inlineRadio1" value="Male" disabled ={this.state.infoEdit} />
                        <label class="form-check-label" for="inlineRadio1">Male</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" 
                            id="inlineRadio2" value="Female" disabled ={this.state.infoEdit}/>
                        <label class="form-check-label" for="inlineRadio2">Female</label>
                    </div>
                </div>

                <h6 className ='mt-5'>Email Address</h6>
                <div className ='row'>
                    <div className ='col-md-4'>                    
                            <input type="email" aria-label="Email" class="form-control"  disabled ={this.state.infoEdit}/>  
                        </div>
                </div>

                <h6 className ='mt-4'>Mail Address</h6>
                <div className ='row'>
                    <div className ='col-md-4'>                    
                            <textarea type="text" aria-label="Address" class="form-control" disabled ={this.state.infoEdit}/>  
                    </div>
                </div>

                <h6 className ='mt-4'>Mobile Number</h6>
                <div className ='row'>
                    <div className ='col-md-4'>                    
                    <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">+91</span>
                    </div>
                    <input type="text" class="form-control" placeholder="Mobile Number" disabled ={this.state.infoEdit} />
                    </div>
                    </div>
                </div>

                <div className ='row mt-4'>
                    <div className ='col-md-4'>                    
                    <button type="button" className="btn btn-primary w-50" >
                        Save
                        </button>
                    </div>
                </div>



            </div>
        )
    }
}

export default  CustomerInfo