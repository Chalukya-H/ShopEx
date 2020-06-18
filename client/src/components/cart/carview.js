import React from 'react'
import image5 from '../../media/imageHeader/image5.jpg'
class Cart extends React.Component {

    render() {
        return(
            <div className ='container-fluid m-3'>
                <h4> My Cart</h4>               
                
            
            <div className="row justify-content-between">
                <div className="col-7">
                    <div className="card mb-2" >
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src={image5} className="card-img" alt="..."  style = {{width:'80%',height:'90%'}}/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
 
                </div>
                <div className="col-4  mr-5" style ={{height:'100%',width:'150%'}}>
                    <div className="card">
                        <div className="card-header">
                            <h5>PRICE DETAILS</h5>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Price
                                <h5 className="card-title float-right">$20000</h5>
                            </h5> 
                             
                        </div>
                        <div class="card-footer">
                            <h5>TOTAL PRICE</h5>
                        </div>
                    </div>
                    
                </div>
            </div>
                 
            </div>
        )
    }
}

export default Cart