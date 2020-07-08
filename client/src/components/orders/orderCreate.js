import React from 'react'
import {getProducttoCart} from '../../actions/cartAction'
import { connect } from 'react-redux'
import NumberFormat from 'react-number-format' 

class OrderCreate extends React.Component {
    constructor(){
        super()
        this.state={             
            path : window.location.origin ,
            address: '',
            contactNum:'',
            readyToOrder : false,
            price:0,
            tax:0
        }
    }
    componentDidMount =()=>{

        this.props.dispatch(getProducttoCart()) 
        const refersh =  setInterval( () =>{  
            if(this.props.cartData.length ) {            
                clearInterval(refersh) 
                let price = 0
                this.props.cartData.map( cart =>{
                    price += cart.price * cart.quantity
                    return price  
                })   
                
                if (price > 0 ){
                    const tax = price * 1 /100
                    this.setState({price,tax})
                }  
            }
        } , 1000)
    }

    handleChange = (e) =>{

        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        this.setState({
            readyToOrder : true
        })
    }

    handleInfoEdit = (e) =>{

        this.setState({
            readyToOrder : false
        })
    }

    handleOrders = (e) =>{
        e.preventDefault() 

        const refresh =() =>{
            return window.location.reload()
        }
        const orders = this.props.cartData.map(cart =>{
            return {
                name:  cart.name,
                price : cart.price,
                quantity:cart.quantity,
                image: cart.image,
                customerID: this.props.users._id,
                address: this.state.address,
                contactNum: this.state.contactNum
            }
        })
        console.log(orders)
        this.props.dispatch(addProductstoOrder(orders,refresh))
    }
    render(){
        
        return (
            <div className ='container-fluid'>
               
                {
                   this.props.cartData.length && this.state.readyToOrder ? 
                   <div className="row justify-content-between">
                    
                            <h3 className="col-12"> Confirm Order </h3>  <br/>
                            <a href= '#' className=" ml-3  text-monospace text-decoration-none" onClick ={this.handleInfoEdit} 
                                    style ={{fontSize:'lg'}}>Edit</a>  
                            <p className="col-12 mr-5 pr-5"  style ={{wordWrap:'break-word'}} >  Delivery Address : {this.state.address} <br/> Mobile : {this.state.contactNum} </p>    
                         
                                 
                        <div className="col-6"> 
                        {
                            this.props.cartData.map( (cart,i) =>{
                                return (
                                    <div className="card mb-2"  key ={i+1}>
                                        <div className="row no-gutters">
                                            <div className="col-md-1 mt-3">
                                                <img src={`${this.state.path}/${cart.image}`} className="card-img" alt="No Image" 
                                                /> 
                                            </div>
                                            
                                            <div className="col-md-10">
                                                <div className="card-body">
                                                    <div className='row'>
                                                        <div className ='col'>  
                                                            <h5 className="card-title">{cart.name}</h5>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h5 className="card-text text-left mt-3">
                                                            <NumberFormat thousandSeparator={true} thousandsGroupStyle="lakh" 
                                                                className="card-title text-left"
                                                                displayType = 'text' prefix={'₹'} value={cart.price }/>
                                                                   &nbsp;&nbsp; Quantity - {cart.quantity}   
                                                        </h5> 
                                                        
                                                    </div>  
                                                </div> 
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                            
                        } 
                    </div>
                  
                   <div className="col-3  mr-auto ml-5" style ={{height:'100%',width:'150%'}}>
                       <div className="card">
                           <div className="card-header">
                               <h5>PRICE DETAILS</h5>
                           </div>
                           <div className="card-body">
                               <div className ='row justify-content-between'>
                                   <h5 className="card-title float-left">{`Price (${this.props.cartData.length} items)`} </h5> 
                                   <h5 className="card-title float-right">
                                    <NumberFormat thousandSeparator={true} thousandsGroupStyle="lakh" className="card-title float-right"
                                        displayType = 'text' prefix={'₹'} value={this.state.price}/>
                                    </h5>
                               </div>
                              <div className ='row justify-content-between'>
                                   <h5 className="card-title float-left">TAX  </h5> 
                                   <h5 className="card-title float-right">
                                    <NumberFormat thousandSeparator={true} thousandsGroupStyle="lakh" className="card-title float-right"
                                        displayType = 'text' prefix={'₹'} value={ this.state.tax}/>
                                    </h5>
                              </div>
                               
                           </div>
                           <div className="card-footer">                                
                               <h5 className="card-title float-left">TOTAL PRICE </h5> 
                               <h5 className="card-title float-right">
                                    <NumberFormat thousandSeparator={true} thousandsGroupStyle="lakh" className="card-title float-right"
                                        displayType = 'text' prefix={'₹'} value={ this.state.price + this.state.tax}/>
                                    </h5>
                           </div>
                           <input type= 'submit' id='submit' name ='submit' className ='btn btn-danger ' 
                                       value ='CONFIRM ORDER'  onClick = {this.handleOrders} /> 
                          
                       </div>
                       
                   </div>
                   
               </div>
                
                   : 
                   <div className ='container-fluid ml-3'>
                   <h3> Delivery Details: </h3>
                   <div className='row mt-4'>
                       <div className ='col-md-5 '>
                           <form   encType="multipart/form-data" onSubmit ={this.handleSubmit} >                              
                               <div className = 'form-group'>
                                   <label htmlFor='address' >Delivery Address:</label>
                                   <textarea  id='address' required={true} name ='address'
                                     className ='form-control h-40' rows='5' required = 'true'
                                     placeholder ='Enter the address' value ={this.state.address}
                                     onChange ={this.handleChange}   />
                               </div>
                               
                                <div className = 'form-group'> 
                                <label htmlFor='contactNum' >Mobile Number:  [Please provide valid number to get order details as SMS]</label>                   
                                    <div className="input-group mb-3">                                        
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="basic-addon1">+91</span>
                                        </div>
                                        
                                        <input type="text" className="form-control" placeholder="Mobile Number" id= 'contactNum' required = 'true'
                                            name= 'contactNum' value = {this.state.contactNum} onChange ={this.handleChange} />
                                    </div>
                                </div>
                                 <input type ='submit' className ='btn btn-primary' value ='ADD DETAILS' />
                            </form>
                         </div>
                    </div>
                   </div>         
                }
            </div>
        )
    }
} 

const mapStateTOProps = (state) =>{
    return{
        cartData:state.cartData,
        users : state.users
    }
}
export default connect(mapStateTOProps)(OrderCreate)
 