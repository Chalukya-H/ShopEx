import React from 'react'
import {connect} from 'react-redux'
import {getOrderSummary} from '../../actions/orderAction'

class OrderSummary extends React.Component {

    componentDidMount = ()=>{
        this.props.dispatch(getOrderSummary()) 

        const refersh =  setInterval( () =>{  

            if(this.props.orders.length ) {             
                clearInterval(refersh)  
                console.log(this.props.orders)               
            }
        },1000)
    }

    render() {
        return(
            <div className ='container'>
                <h3> Order Summary </h3>
                <table className="table table-striped table-dark table-bordered ">
                    <caption className ='align-text-top'>List of {this.props.orders.length} orders</caption>
                    <thead className ='bg-success'>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Order ID</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            this.props.orders.map((order,i) =>{
                                return(
                                    <tr key = {i+1}>
                                        <th scope="row">{i+1}</th>
                                        <td >{order._id}</td>
                                        <td className ='align-self-center'>{order.name}</td>
                                        <td>{order.price}</td>
                                        <td>{order.quantity}</td>
                                        <td>{order.status}</td>
                                    </tr>
                                )
                            })
                        }
                      
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps =(state) =>{
    return {
        orders :state.orders
    }
}

export default connect(mapStateToProps)(OrderSummary)