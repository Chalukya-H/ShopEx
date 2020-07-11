import React from 'react'  
import {Link} from 'react-router-dom' 
import {getProductsbyQuery} from '../../actions/productAction'
import {connect} from 'react-redux'


class ProductSeachbyName extends React.Component {
    constructor(){
        super()
        this.state={
            products :[],
            path : window.location.origin   
        }
    }
    componentDidMount = ()=>{ 
        const text  = this.props.match.params.text.split('=')[1] 
        this.props.dispatch(getProductsbyQuery(text)) 
         
        const refersh =  setInterval( () =>{            
            if(this.props.products.length ){
                clearInterval(refersh)   
                this.setState({ products:this.props.products})                
            }
        },1000)
 
    }
 
    render() { 
        return(         
            <div>
              {
                  this.state.products.length !== 0 ?
                    <div className ='container  ml-5'>  
                        {
                            this.state.products.map((product,i) =>{  
                                    return (
                                    <Link className = 'col-md-3' to={`/products/${product._id}`} 
                                        style ={{color:'black',textDecoration:'none'}} key={i+1}>                                            
                                        <div className="card mb-1" >
                                            <div className="row no-gutters">
                                                <div className="col-md-3 mt-3">
                                                    <img src= {`${this.state.path}/${product.mainImage}`} className="card-img ml-5" alt="..." 
                                                        style ={{height:'200px',width:'150px'}}/>
                                                </div>
                                                <div className="col-md-9">
                                                    <div className="card-body">
                                                        <h5 className="card-title">{product.name}</h5>
                                                        <h4> <span className ='fa fa-rupee'></span> {product.price}</h4> 
                                                        
                                                        <ul style ={{listStyleType:'circle'}}>
                                                        {
                                                            
                                                            product.description.split('--').map((text,i) =>{
                                                                return   <li key ={i}>{text}</li>  
                                                            })
                                                        }
                                                    </ul>
                                                    </div>
                                                </div>
                                            </div>
                                      </div>
                                    </Link>
                                    )
                            })
                        } 
                  </div> 
                  : 
                  <div className="d-flex justify-content-center">
                    <div className="spinner-border text-danger m-5 " role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                  </div>
                //   <h2> Products not found for selected category... {this.state.products.length }</h2>
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
export default connect(mapStateToProps)(ProductSeachbyName)