import React from 'react'
import {connect} from 'react-redux'
// import {addProduct}  from '../../actions/productAction'
import {getCategories} from '../../actions/categoryAction'
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
            reviewMainImage:'',
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
        console.log(e.target.filepath,'Images')
        this.setState({
            [e.target.name]:filepath
        })

        const reader = new FileReader()
        reader.addEventListener("load",()=>{
            console.log(reader.result)
            this.setState({reviewMainImage:reader.result})
        },false)
        reader.readAsDataURL(filepath)
    }


    render(){
         console.log(this.state.mainImage.filepath,'aaddd')
        return(
            <div className ='container'>
                <h3> Adding Products </h3>
                <div className='row '>
                    <div className ='col-6 border'>
                        <form className = 'form' encType="multipart/form-data" >                              
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
                                        <input type="file" className="custom-file-input" id="mainImage" name = 'mainImage'
                                           onChange ={this.handleImage} aria-describedby="mainImage"  />
                                        <label className="custom-file-label" htmlFor="mainImage">
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
                                        <input type="file" className="custom-file-input" id="cartImage"  name ='cartImage'
                                            aria-describedby="cartImage" onChange ={this.handleImage}  />
                                        <label className="custom-file-label" htmlFor="inputGroupFile01">
                                        { this.state.cartImage ===''  ? 'Choose Cart image' : this.state.cartImage.name } </label>
                                    </div>
                                </div>
                            </div>
                       
                            
                            <div className = 'form-group'> 
                                <input type= 'submit' id='submit' name ='submit' className ='btn btn-success w-25' 
                                    value ='Add' onClick ={this.handleSubmit}/>
                            </div>
                        </form> 

                        {
                            this.state.mainImage ? <div className ='col-5'>
                                    <img src = {this.state.reviewMainImage} alt=''/> 
                                </div>
                                :''
                        }
                    </div>
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