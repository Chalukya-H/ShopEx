import React from 'react' 
import Card from 'react-bootstrap/Card' 
import {Link} from 'react-router-dom' 
import {getProductsbyCategory} from '../../actions/productAction'
import {connect} from 'react-redux'


class  ProductShowByCategory extends React.Component {
   
    constructor(){
        super()
        this.state={
            products :[]
        }
    }
    componentDidMount = ()=>{
        this.props.dispatch(getProductsbyCategory(this.props.match.params.id)) 

        const refersh =  setInterval( () =>{            
            if(this.props.products.length){
                clearInterval(refersh) 
                this.setState({products:this.props.products})
            }
        },1000)
 
    }
 
    render() {
            console.log()
        return( 
        
            <div>
              {
                  this.state.products.length   ?
                  <div className ='container-fluid mt-3 ml-2'>  
                        {
                            this.state.products.map((product,i) =>{                                 
                                    return (
                                        <Link   to='/account' style ={{color:'black'}} key ={i+1}>                                             
                                            <div className="card mb-3" style={{maxWidth: "540px"}}>
                                                <div className="row no-gutters">
                                                    <div className="col-md-4">
                                                        <img src= {product.mainImage} className="card-img" alt="..." />
                                                    </div>
                                                    <div className="col-md-8">
                                                        <div className="card-body">
                                                            <h5 className="card-title">Card title</h5>
                                                            <p className="card-text">
                                                                    This is a wider cr.</p>
                                                            <p className="card-text">
                                                                <small className="text-muted">Last updated 3 mins ago</small></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                       
                                    )
                            })
                        }
                     
                     
                  </div> 
                  : <h2> Products not Retrived</h2>
              }
 
            </div>
               
        )
    }
}

const mapStateToProps = (state) =>{
    return { 
        products:state.products
    }
}
export default connect(mapStateToProps)(ProductShowByCategory)