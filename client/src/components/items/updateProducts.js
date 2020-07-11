import React from 'react'
import {connect} from 'react-redux'  
import { updateProduct ,getProductsbyID} from '../../actions/productAction' 

class UpdateProduct extends React.Component{
    constructor(){
        super()
        this.state = {
            name:'',
            description:'',
            category : '',
            subcategory :'',
            price:'',
            quantity:'',
            mainImage:'',
            cartImage:'',
            reviewmainImage:'',
            reviewcartImage:''             
        }
    }

    componentDidMount() { 

        this.props.dispatch(getProductsbyID( this.props.match.params.id ))     
        const refersh =  setInterval( () =>{  
            if(this.props.products.length ) {             
                clearInterval(refersh)                  
                const products =   this.props.products[0] 
                this.setState({
                    name :products.name,
                    description:products.description,
                    category : products.categoryID,
                    subcategory :products.subCategoryID,
                    price:products.price,
                    quantity:products.quantity,
                    mainImage:products.mainImage,
                    cartImage:products.cartImage
                })
            }
        } , 1000)
    }

    handleChange =(e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleImage =(e) =>{
        const filepath = e.target.files[0]        
        this.setState({
            [e.target.name]:filepath
        })
         
        //Image Review
         const events = [e.target.id]          
        const reader = new FileReader()
        reader.addEventListener("load",( )=>{                    
            this.setState({ [events]:reader.result})
        },false)
        reader.readAsDataURL(filepath)
    }

    handleSubmit = (e) =>{
        e.preventDefault()

        const formData = {
            'name':this.state.name,
            'description': this.state.description,
            'price':this.state.price,
            'quantity':this.state.quantity,
            'categoryID':this.state.category,
            'subCategoryID':this.state.subcategory 
        }
         
        const redirect = () =>{
            return this.props.history.push('/products/list')             
        }


        this.props.dispatch(updateProduct(formData,this.props.match.params.id,redirect))
      
    }

    render(){  
        return( 
            <div className ='container-fluid ml-3'>
                <h3> Update Product </h3>
                <div className='row '>
                    <div className ='col-5 border'>
                        <form   encType="multipart/form-data" onSubmit ={this.handleSubmit} >                              
                            <div className = 'form-group'>
                                <label htmlFor='name' >Product Name :</label>
                                <input type= 'text'id='name' required={true} name ='name' className ='form-control' 
                                    placeholder ='Enter the Product name' value ={this.state.name} onChange ={this.handleChange}  />
                            </div>
                            {/* category list */}
                            <div className = 'form-group'>
                                <label htmlFor='category' >Category:</label>                                    
                                <br/>
                                <select className="form-control w-50" name = 'category'  id ='category' onChange ={this.handleChange}>        
                                    <option>--Select Category--</option>                               
                                    {
                                        this.props.categories.map ((item,i)=>{
                                            return(
                                                <option key ={i+1} value ={item._id}  >{item.mainType}</option>
                                            )
                                        })    
                                    }
                                </select>                      
                                
                            </div>
                           {/* Sub category list */}
                           <div className = 'form-group'>
                                <label htmlFor='subcategory' >Sub Category:</label>                                    
                                <br/>
                                <select className="form-control w-50" name ='subcategory' id='subcategory' onChange = {this.handleChange}>  
                                    <option>--Select Sub Category--</option>                                      
                                    {
                                        this.props.categories.map ((item)=> {                                           
                                            
                                            if(item.subType.length===0 && item._id === this.state.category)
                                            {
                                                return (
                                                    <option key ='1' value ={'NA'}   > Others </option>
                                                )
                                            }
                                            else if(  item._id === this.state.category){
                                                return item.subType.map((subtypes,j)=>{                                                        
                                                    return(
                                                        <option key ={j+1} value ={subtypes._id} 
                                                            >{subtypes.name}</option>
                                                    )
                                                })
                                            } 
                                        })    
                                    }
                                </select>                    
                                 
                            </div>

                            <div className = 'form-group'>
                                <label htmlFor='description' >Description :</label>
                                <textarea  id='description' required={true} name ='description'
                                     className ='form-control h-50' rows='10' placeholder ='Enter the description' value ={this.state.description}
                                     onChange ={this.handleChange}   />
                            </div>
                            
                            <label htmlFor='price' >Price :</label>                                  
                            <div className = 'form-group input-group mb-3'>
                                <div className="input-group-prepend">
                                    <span className="input-group-text fa fa-rupee" id="basic-addon1"></span>
                                </div>
                                
                                <input type= 'text' id='price' required={true} name ='price' className ='form-control' 
                                    placeholder ='Enter the Product price' value ={this.state.price} onChange ={this.handleChange}  /> 
                            </div>

                            <div className = 'form-group'>
                                <label htmlFor='quantity' >Quantity Avilable:</label>
                                <input type= 'text'id='quantity' required={true} name ='quantity' className ='form-control' 
                                    placeholder ='Enter the Product quantity' value ={this.state.quantity} onChange ={this.handleChange}  />
                            </div>
 
                            
                            <div className = 'form-group'> 
                                <input type= 'submit' id='submit' name ='submit' className ='btn btn-success w-25' 
                                    value ='UPDATE'  />
                            </div>
                        </form>  
                    </div>
                        {
                            this.state.mainImage   ? 
                                <div className ='col-4  ml-4'>
                                    <h5>Main Image Review</h5>
                                    <img src = {`${window.location.origin}/${this.state.mainImage}`}  alt=''/> 
                                    
                                </div>
                                :'' 
                        }
                        
                </div>

            </div>
        )
    }
}


const mapStateToProps =(state) =>{
    return{
        products : state.products,
         categories :state.categories

    }
}
export default connect(mapStateToProps)(UpdateProduct)