import React from 'react'
import NumberFormat from 'react-number-format' 
import {Link} from 'react-router-dom'
 import {getProducttoCart,deleteProducttoCart,updateCartQuantity} from '../../actions/cartAction'
import { connect } from 'react-redux'

class Cart extends React.Component {

    constructor(){
        super()
        this.state={             
            path : window.location.origin ,
            price :0 ,
            tax : 0  

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

    handleCartQuantity = (e , cart) =>{
        const valTYpe = e.target.name 

        if(valTYpe === 'less' && cart.quantity === 1 ) {           
            alert ('Item quantity can not be less than 1')
        } else if( cart.quantity >= 3 && valTYpe === 'add' ){
            alert('Upto 3 quantity only purchase at a time ')
        }

        const refresh =() =>{
            return window.location.reload()
        }

        if(valTYpe === 'less' &&  cart.quantity > 1 ) {
            const formData = {
                id : cart.productID,
                cartQuantity : -1,
                cartid : cart._id,
                productQuantity : 1,
                currentQuantity : cart.quantity,
                auth : localStorage.getItem('token')
            }
            
           
            this.props.dispatch(updateCartQuantity(formData,refresh))   

        } else if(valTYpe === 'add' &&  cart.quantity >=1 && cart.quantity < 3 ){
            const formData = {
                id : cart.productID,
                cartQuantity : 1,
                cartid : cart._id,
                productQuantity : -1,
                currentQuantity : cart.quantity,
                auth : localStorage.getItem('token')
            }
            this.props.dispatch(updateCartQuantity(formData,refresh))  
        }


    }

    handleRemove = (e) =>{
        const id = e.target.value
        
        const refresh =() =>{
            return window.location.reload()
        }
        this.props.dispatch(deleteProducttoCart(id ,refresh))

    }

    

    render() {
        
        return(
            <div className ='container-fluid m-3 '>
                 <h4 style ={{ visibility : this.props.cartData.length ? 'visible' : 'hidden'}}  > My Cart</h4> 
                {
                   this.props.cartData.length ? 
                   <div className="row justify-content-between">                        
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
                                                        </h5> 
                                                    </div>
                                                    <div className ='row mt-3'>
                                                        <div className ='col-4'>
                                                            <input type ='submit' className ='card-text border-white rounded-circle' name = 'less' 
                                                                onClick = { (e) => {this.handleCartQuantity (e,cart)} }  value = '-' />
                                                                     
                                                            <input type ='text' disabled value = {cart.quantity} 
                                                                className ='text-center w-25'/>
                                                             <input type ='submit' className ='card-text border-white rounded-circle'
                                                              name = 'add'  onClick = { (e) => {this.handleCartQuantity (e,cart)} }  value = '+' />
                                                               
                                                        </div>  
                                                        <div className ='col-7'>
                                                            <button className="card-text float-right btn btn-danger mt-3" 
                                                                value ={cart._id} onClick ={this.handleRemove} > Remove</button>   
                                                        </div>    
                                                         
                                                                                                       
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
                           {/* <input type= 'submit' id='submit' name ='submit' className ='btn btn-danger ' 
                                       value ='PLACE ORDER'  onClick = {this.handleOrder} /> */}
                            <Link to ='/orders/add' id='submit' name ='submit' className ='btn btn-danger ' > PLACE ORDER </Link>
                       </div>
                       
                   </div>
                   
               </div>
                
                   : 
                   <div className = 'container border mx-auto' style ={{height:'200px'}}> 
                    <h4> My Cart</h4>                                       
                       <div className="row justify-content-md-center mt-5">
                            <div className="col-11 offset-md-9">
                                <h5> Your cart is empty! </h5>
                            </div>
                         
                        </div>
                        <div className="row justify-content-md-center mt-5">
                            <div className="col-11 offset-md-9">
                               <Link to = '/' className ='btn btn-primary'> Shop More..</Link>
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
export default connect(mapStateTOProps)(Cart)