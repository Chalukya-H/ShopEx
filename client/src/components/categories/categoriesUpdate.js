import React from 'react'
import {connect} from 'react-redux'
import {getCategories} from '../../actions/categoryAction'
import CategoryAdd from './categoryAdd'
import CategoryModify from './catogoryModify'

class CategoryUpdate extends React.Component {

    constructor(){
        super()
        this.state = {
            categoryType :''
        }
    }
    
    componentDidMount = ()=>{
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
    render(){
        return(
            <div className ='container'>
                <h3> Add / Update Category </h3>
                <form className ='px-4 py-3'>
                    <div className="form-group">
                        <h4 className ='mt-3'>Select Category Type</h4>
                        <div className ='row ml-2'>                    
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="categoryType" 
                                    id="Existing" value="Existing"  onChange ={this.handleChange}
                                    checked = {this.state.categoryType ==='Existing' ? true : false} />
                                <label className="form-check-label" htmlFor="Existing">Existing Category</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="categoryType" 
                                    id="categoryNew" value="New"  onChange ={this.handleChange} 
                                    checked = {this.state.categoryType ==='New' ? true : false} />
                                <label className="form-check-label" htmlFor="categoryNew">New Category</label>
                            </div>
                        </div>
                        {
                            this.state.categoryType === 'Existing' ? 
                                <div>
                                    <CategoryModify/>                                   
                                </div>
                            : <div>
                                <CategoryAdd/>
                            </div>
                        }
                    </div>
                </form>
            </div>
        )
    }
}



const mapStateToProps =(state) =>{
    return {
        categories :state.categories
    }
}

export default connect(mapStateToProps)(CategoryUpdate)