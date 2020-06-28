import React from 'react'
import {connect} from 'react-redux' 
import {updateCategories,getCategories} from '../../actions/categoryAction'

class CategoryModify extends React.Component {
    constructor (){
        super()
        this.state ={
            mainId :'',
            subCategory:''
        }
    }

    componentDidMount ()  {
        this.props.dispatch(getCategories())
        const refersh =  setInterval( () =>{ 
            if(this.props.categories.length ) {             
                clearInterval(refersh)             
            }
        },1000)
    }

    handleChange =(e)=> {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit =(e) =>{
        e.preventDefault()
        const formData = {
            _id : this.state.mainId ,
            subType : { name : this.state.subCategory}
        } 
 
        this.props.dispatch(updateCategories(formData,'/categories/list'))
    }
    render(){
        return(
            <div className ='container mt-4'> Update existing category 
                <br/>
                 <label htmlFor='mainId' className ='mt-3' >Category:</label> 
                <div className = 'row'> 
                    <div className ='col-md-6 mb-1'> 
                        <select className="form-control" name = 'mainId'  id ='mainId' onChange ={this.handleChange}>        
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
                    
                </div>
                <div className ='row mt-2'>                                     
                    <div className ='col-md-6'>  Sub Category :                   
                        <input type="text"  className="form-control" placeholder ='like.. Mobiles ,Laptop'
                        name ='subCategory'  value = {this.state.subCategory} onChange ={this.handleChange}  />  
                    </div>                          
                </div> 
                    
                <div className ='row mt-4'>
                    <div className ='col-md-4'>                    
                    <button type="button" className="btn btn-primary w-50" onClick={this.handleSubmit}>
                        Add
                        </button> 
                    </div>
                </div>


                
            </div>
        )
    }
}
 
const mapStateToProps= (state) =>{
    return{
        categories :state.categories
    }
}
export default connect(mapStateToProps)(CategoryModify)