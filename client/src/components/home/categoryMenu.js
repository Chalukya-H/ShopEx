import React from 'react'
import {connect} from 'react-redux'
import  {getCategories} from '../../actions/categoryAction'
class CategoryMenu extends React.Component {

    componentDidMount () {
        this.props.dispatch(getCategories())
    }
    
    render() {
        return(
            <div className ='row ml-5 mb-3'>
                 {
                     this.props.categories ?
                        this.props.categories.map((category,i) =>{
                          return  <div className="dropdown mr-2" key ={i+1}>
                                <button type="button" className="btn  dropdown-toggle" data-toggle="dropdown" 
                                    aria-haspopup="true" aria-expanded="false">
                                    {category.mainType}
                                </button>
                                <div className="dropdown-menu">
                                    {
                                        category.subType.map( (sub,i) =>{
                                            return  <a className="dropdown-item" href={`/products/query/${sub._id}`} key ={i+1}> 
                                                    {sub.name} </a>
                                        })
                                    } 
                                </div>                      
                            </div> 
                        })
                     : ''
                 } 
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        categories : state.categories
    }
}
export default connect(mapStateToProps)(CategoryMenu)