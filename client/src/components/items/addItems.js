import React from 'react'
import {connect} from 'react-redux' 
import {getCategories} from '../../actions/categoryAction'
import { addProduct } from '../../actions/productAction' 
//  import filepath from '../../media'

class AddProduct extends React.Component{
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
        if (this.props.categories.length === 0) {
            this.props.dispatch(getCategories())
            
        }  
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

        const formData = new FormData()
        formData.append('name',this.state.name)
        formData.append('description',this.state.description)
        formData.append('price',this.state.price)
        formData.append('quantity',this.state.quantity)
        formData.append('categoryID',this.state.category)
        formData.append('subCategoryID',this.state.subcategory)
        formData.append('mainImage',this.state.mainImage)
        formData.append('cartImage',this.state.cartImage)
         
        const redirect = () =>{
            return this.props.history.push('/products/list')             
        }


        this.props.dispatch(addProduct(formData,redirect))
      
    }

    render(){ 

        return(
            <div className ='container-fluid ml-3'>
                <h3> Adding Products </h3>
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

                            <div  className = 'form-group '>
                                <label htmlFor='mainImage' >Main Image :</label>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text fa fa-file-image-o" id="mainImage"></span>
                                    </div>
                                    <div className="custom-file">
                                        <input type="file" className="custom-file-input" id="reviewmainImage" name = 'mainImage'
                                           onChange ={this.handleImage} aria-describedby="mainImage"  />
                                        <label className="custom-file-label" htmlFor="reviewmainImage">
                                            { this.state.mainImage ===''  ? 'Choose Main image' : this.state.mainImage.name }</label>
                                    </div>
                                </div>
                            </div>
                            <div  className = 'form-group '>
                                <label htmlFor='quantity' >Cart Image :</label>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text fa fa-file-image-o" id="inputGroupFileAddon01"></span>
                                    </div>
                                    <div className="custom-file">
                                        <input type="file" className="custom-file-input" id="reviewcartImage"  name ='cartImage'
                                            aria-describedby="cartImage" onChange ={this.handleImage}  />
                                        <label className="custom-file-label" htmlFor="reviewcartImage">
                                        { this.state.cartImage ===''  ? 'Choose Cart image' : this.state.cartImage.name } </label>
                                    </div>
                                </div>
                            </div>
                       
                            
                            <div className = 'form-group'> 
                                <input type= 'submit' id='submit' name ='submit' className ='btn btn-success w-25' 
                                    value ='Add'  />
                            </div>
                        </form>  
                    </div>
                        {
                            this.state.mainImage   ? 
                                <div className ='col-4  ml-4'>
                                    <h5>Main Image Review</h5>
                                    <img src = {this.state.reviewmainImage} alt=''/> 
                                    
                                </div>
                                :'' 
                        }
                        {
                            this.state.cartImage ? 
                            <div className ='col-2  ml-1'>
                                <h5>Cart Image Review</h5>
                                <img src = {this.state.reviewcartImage} alt=''/> 
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
        categories : state.categories
    }
}
export default connect(mapStateToProps)(AddProduct)