import React from 'react'
import {connect} from 'react-redux'
import {getProducts} from'../../actions/productAction' 
  
class ShowSingleProduct extends React.Component{

    constructor () {
        super()
        this.state = {
            products:''            
        }
    }
    componentDidMount () {
        if (this.props.products.length === 0) {
            this.props.dispatch(getProducts())           
        }

        const refersh =  setInterval( () =>{  
            if(this.props.products.length ) {             
                clearInterval(refersh)
                  
                const products =   this.props.products[0]
                 console.log(this.props.products[0].mainImage)
                this.setState({products})
            }
        } , 1000)

    }

    render() { 
         return(
             <div>
                 {  
                     this.state.products != {} ?
                        <div className ='container-fluid ml-4'> 
                            <div className ='row'>                               
                                <div className ='col-3 align-self-center'> 
                                    <img src = {this.state.products.mainImage} className ='image img' alt="Image not found" style = {{height:'400px'}} />
                                    <br/>
                                    <input type= 'submit' id='submit' name ='submit' className ='btn btn-warning w-40 ml-3' 
                                    value ='ADD TO CART'  />  
                                    <input type= 'submit' id='submit' name ='submit' className ='btn btn-warning w-40 ml-3' 
                                    value ='BUY NOW'  />
                                </div>

                                <div className ='col'>
                                    <h3>{this.state.products.name}</h3> <h6>&nbsp;</h6>
                                    <h1> <span className ='fa fa-rupee'></span> {this.state.products.price}</h1> 
                                        <h6>&nbsp;</h6>
                                    <h4>
                                        {
                                            this.state.products.description ?
                                            this.state.products.description.split('--').map(text =>{
                                                return(<h4>{text}</h4>)
                                            }) :''
                                     }
                                     </h4>
                                </div>
                            </div>

                         </div>
                     :''
                 }
                 <br/>
                 <div className ='container ml-5'>
                     <h4> Cutomer Reviews:</h4>
                 </div>
                 
             </div>
         )
    }
}

const mapStateToProps =(state)=>{
    return {
        products:state.products
    }
}

export default connect(mapStateToProps)(ShowSingleProduct)