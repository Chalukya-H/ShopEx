import React from 'react'
import {connect} from 'react-redux'
import {getProductsbyID} from'../../actions/productAction' 
  import {addProducttoCart} from '../../actions/cartAction'
class ShowSingleProduct extends React.Component{

    constructor () {
        super()
        this.state = {
            products: {}  ,
            path : window.location.origin ,
            quantity : 1
                 
        }
    }
    componentDidMount () {  
             
        this.props.dispatch(getProductsbyID(this.props.match.params.id ))  

        const refersh =  setInterval( () =>{  
            if(this.props.products.length ) {             
                clearInterval(refersh)                  
                const products =   this.props.products[0] 
                this.setState({products})
            }
        } , 1000)
    }
 
    handleCartAdd = () =>{
        const formData = {
            name : this.state.products.name,
            price :this.state.products.price,
            quantity: this.state.quantity,
            image : this.state.products.cartImage,
            productID:this.state.products._id
        }
        
        const redirect = () =>{
            return window.location.href = '/cart'            
        }
        
        this.props.dispatch(addProducttoCart(formData,redirect))

    }
    render() { 
       
         return(
             <div>
                 { 
                    this.state.products !== {} && this.state.products.mainImage?
                        <div className ='container-fluid  mt-5'> 
                            <div className ='row'>                               
                                <div className ='col-3 align-self-center'> 
                                    <img src = {`${this.state.path}/${this.state.products.mainImage}`} 
                                          className ='image img mb-5'
                                        alt="Image not found" style = {{ height:'300px',width:'80%',marginLeft: '6%',  marginRight: 'auto'}} />
                                    <br/>
                                    {
                                        localStorage.getItem('token')  ?
                                         <div>
                                            <input type= 'submit' id='submit' name ='submit' className ='btn btn-warning w-100  ml-3' 
                                                value ='ADD TO CART' onClick ={this.handleCartAdd}  disabled = {this.props.users[0].role ==='Admin' ? true : false }/>  
                                            
                                          </div> 
                                          :  
                                          <h4> Login or Register to order the product </h4>  
                                    }
                                   
                                </div>

                                <div className ='col'>
                                    <h2>{this.state.products.name}</h2> <h6>&nbsp;</h6>
                                    <h4> <span className ='fa fa-rupee'></span> {this.state.products.price}</h4> 
                                                                        
                                     <ul style ={{listStyleType:'circle',fontSize:'22px'}}>
                                        {
                                            
                                            this.state.products.description ?
                                            this.state.products.description.split('--').map((text,i) =>{
                                                return   <li key ={i}>{text}</li>  
                                            }) : ''
                                        }
                                    </ul>
                                    
                                </div>
                            </div>

                         </div>
                     :''
                 }
                 <br/>
                 
             </div>
         )
    }
}

const mapStateToProps =(state)=>{
    return {
        products:state.products,
        users:state.users
    }
}

export default connect(mapStateToProps)(ShowSingleProduct)