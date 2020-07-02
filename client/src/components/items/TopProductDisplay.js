import React from 'react' 
import Card from 'react-bootstrap/Card' 
import {Link} from 'react-router-dom'
import {getCategories} from '../../actions/categoryAction'
import {getTopProducts} from '../../actions/productAction'
import {connect} from 'react-redux'


class  TopProductsShow extends React.Component {
    constructor(){
        super()
        this.state = {
            productID :'',
            products : []
        }
    }
    
    componentDidMount = ()=>{
        this.props.dispatch(getCategories()) 
        const refersh =  setInterval( () =>{  
            if( this.props.categories.length  ) {   
                    this.props.categories.map(category =>{
                        category.subType.map(type =>{ 
                             
                            return type.name === this.props.productType ? (
                                 
                                this.getProducts( {"categoryID":category._id,"subCategoryID":type._id }  )                           
                            )
                         :''
                    })
                }) 
            }
 
        },1000)
 
    }
 

    getProducts =(productId) =>{         
        this.props.dispatch(getTopProducts(productId)) 
        const refersh =  setInterval( () =>{ 
            if(this.props.products.length ) {             
                clearInterval(refersh) 
                const productID = this.props.products[0].subCategoryID
                this.setState({productID}) 
                this.setState ({products : this.props.products , productID})

            }
        },1000)
        
    }

    render() {
        console.log('Product Type', this.props.productType)
        return( 

            <ProductDisplay products = {this.state.products} type = {this.props.productType} productID = {this.state.productID} />
        )
    }
}


function ProductDisplay(props) { 
    return( 
        <div>
          {
              props.products.length ?
              <div className ='container-fluid mt-3 ml-2'>
                   
                    <div className="row justify-content-between">
                        <div className="col-1">
                            <h3> { props.type} </h3> 
                        </div>
                        <div className="col-2">
                            <u><Link to={`/products/query/${props.productID}`}> View More...</Link></u>
                        </div>
                    </div>
                  
                   
                  <div className ='row'>
                    {
                         props.products.map((product,i) =>{                                
                            return (
                                <Link className = 'col-md-3' to={`/products/${product._id}`} style ={{color:'black',textDecoration:'none'}} key={i+1}>                                             
                                    <Card className = 'border-none'  style ={{height:'100%'}} >
                                        <Card.Img variant="top" src= {product.mainImage}
                                            style ={{height:'200px',width:'50%',marginLeft: 'auto',  marginRight: 'auto'}}/>
                                        <Card.Body>
                                            <Card.Title>{product.name}</Card.Title>
                                            <Card.Text>
                                                <span className=" fa fa-rupee" id="basic-addon1"></span> {product.price}
                                            </Card.Text>
                                            
                                        </Card.Body>
                                    </Card>
                                    
                                </Link>
                                
                            )
                        })
                    }
                  </div> 
              </div> 
              : 
              <div className="d-flex justify-content-center">
                <div className="spinner-border text-danger m-5 " role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
          }

        </div>
           
    )
}
const mapStateToProps = (state) =>{ 
    return {
        categories:state.categories,
        products:state.products
    }
}
export default connect(mapStateToProps)(TopProductsShow)