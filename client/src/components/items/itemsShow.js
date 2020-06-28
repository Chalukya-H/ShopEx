import React from 'react'  
import TopProductsShow from './TopProductDisplay'
import ItemSlides from './itemSlides'
import {connect} from 'react-redux'

// This is for Main page to show some of the top selling products in home page
class  AllItemsShow extends React.Component {
 
    render() {
        return( 
            <div>
                <ItemSlides/> 
                <div>
                    <TopProductsShow productType ={"Mobile"} />
                </div>
                <div>
                <TopProductsShow productType ={"Laptops"}  />
                </div>
               
            </div>
               
        )
    }
}

export default connect()(AllItemsShow)