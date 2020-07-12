import React from 'react'
import {getOrdersDetails} from '../../actions/orderAction'
import { connect } from 'react-redux'
import NumberFormat from 'react-number-format' 

class OrdersDisplay extends React.Component{
    constructor(){
        super()
        this.state={             
            path : window.location.origin 
        }
    }
    componentDidMount =()=>{
        this.props.dispatch(getOrdersDetails()) 
        const refersh =  setInterval( () =>{  
            if(this.props.orders.length ) {             
                clearInterval(refersh)   
            }
        } , 1000)
    }
    render(){
        return(
            <div className ='container-fluid m-3 '>
                 <h4 style ={{ visibility : this.props.orders.length ? 'visible' : 'hidden'}}  > My Orders</h4> 
                {
                   this.props.orders.length ? 
                   <div className="row justify-content-between">                        
                        <div className="col-6"> 
                        {
                            this.props.orders.map( (order,i) =>{
                                return (
                                    <div className="card"  key ={i+1}>
                                        <div className="row no-gutters">
                                            <div className="col-md-1 mt-3">
                                                <img src={`${this.state.path}/${order.image}`} className="card-img" alt="No Image" /> 
                                            </div>
                                            
                                            <div className="col-md-10">
                                                <div className="card-body">
                                                    <div className='row'>
                                                        <div className ='col'>  
                                                            <h6 className="card-title">{order.name}</h6>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h6 className="card-text text-left mt-1">
                                                            <NumberFormat thousandSeparator={true} thousandsGroupStyle="lakh" 
                                                                className="card-title text-left"
                                                                displayType = 'text' prefix={'₹'} value={order.price }/>
                                                            &nbsp;&nbsp;&nbsp;Qty :  {order.quantity}  
                                                        </h6> 
                                                        <label> Ordered : {order.orderAt.split('T')[0]}</label>
                                                    </div> 
                                                </div>                                                 
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                            
                        } 
                        </div>
                    </div>
                    :''
                }
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        orders : state.orders
    }
}

export default connect(mapStateToProps)(OrdersDisplay)