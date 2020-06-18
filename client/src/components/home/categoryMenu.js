import React from 'react'

class CategoryMenu extends React.Component {

    render() {
        return(
            <div className ='row ml-5 mb-3'>
                 
                 <div className="dropdown mr-2">
                    <button type="button" className="btn  dropdown-toggle" data-toggle="dropdown" 
                        aria-haspopup="true" aria-expanded="false">
                        Electronics
                    </button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#"> Mobiles </a>
                        <a className="dropdown-item" href="#">Headphones</a>
                        <a className="dropdown-item" href="#">Laptops</a>
                    </div>                      
                </div>
                <div className="dropdown">
                    <button type="button" className="btn  dropdown-toggle" data-toggle="dropdown" 
                        aria-haspopup="true" aria-expanded="false">
                        Home Appliances
                    </button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#"> TV </a>
                        <a className="dropdown-item" href="#">Washing Machine</a>
                        <a className="dropdown-item" href="#">Air Conditioners</a>
                    </div>                      
                </div>
                
                <div className="dropdown ml-2">
                    <button type="button" className="btn  dropdown-toggle" data-toggle="dropdown" 
                        aria-haspopup="true" aria-expanded="false">
                       Watches
                    </button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#"> Men's Watch </a>
                        <a className="dropdown-item" href="#">Women's Watch</a>
                       
                    </div>                      
                </div>
                <div className ='ml-2'>
                    <button type="button" className="btn  " aria-haspopup="true" aria-expanded="false">
                            Books
                    </button>
                </div>
                 
            </div>
        )
    }
}

export default CategoryMenu