import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getCategories} from '../../actions/categoryAction'

class CategoriesSummary extends React.Component {

    componentDidMount = ()=>{
        this.props.dispatch(getCategories()) 

        const refersh =  setInterval( () =>{ 
            if(this.props.categories.length ) {             
                clearInterval(refersh)             
            }
        },1000)
    }

    render() {
        return(
            <div className ='container'>
                
                <div className="row justify-content-between">
                    <div className="col-4">
                        <h3> Categories Summary </h3>
                    </div>
                    <div className="col-4">
                        <Link to ='/categories/update' className ='btn btn-info'> Add More Category</Link>
                    </div>
                </div>
                 

                <table className="table table-striped table-dark table-bordered ">
                    <caption className ='align-text-top'>List of {this.props.categories.length} Categories</caption>
                    <thead className ='bg-success'>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Category ID</th>
                            <th scope="col">Category Name</th>
                            <th scope="col">Sub Categories</th> 
                        </tr>
                    </thead>
                    <tbody>

                        {
                            this.props.categories.map((category,i) =>{
                                return(
                                    <tr key = {i+1}>
                                        <th scope="row">{i+1}</th>
                                        <td >{category._id}</td>
                                        <td >{category.mainType}</td>
                                        <td>
                                            <ul style ={{listStyleType:'circle'}}>
                                            {
                                                category.subType.map( (sub,i) =>{                                                    
                                                    return <li key={i+1}> {sub.name}</li>
                                                })
                                            }
                                            </ul>
                                           
                                        </td>
                                    </tr>
                                )
                            })
                        }
                      
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps =(state) =>{
    return {
        categories :state.categories
    }
}

export default connect(mapStateToProps)(CategoriesSummary)