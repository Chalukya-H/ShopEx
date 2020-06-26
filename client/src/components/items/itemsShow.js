import React from 'react'  
import TopProductsShow from './TopProductDisplay'
import ItemSlides from './itemSlides'

// This is for Main page to show some of the top selling products in home page
class  AllItemsShow extends React.Component {
 
    render() {
        return( 
            <div>
                <ItemSlides/> 
                <TopProductsShow productType ={"Mobile"}/>
            </div>
               
        )
    }
}

export default AllItemsShow