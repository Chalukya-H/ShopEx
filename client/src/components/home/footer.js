import React from 'react'

function Footer () {
    return( 
      <footer className="page-footer font-small mt-5 bg-dark text-light ">  
        <div className="container-fluid ml-3 text-center text-md-left"> 
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <h3 className = 'text-warning' style ={{fontFamily: "Times New Roman",fontSize:'40px'}}>ShopEx</h3>
              <p >This website is a Project developed using JavaScript,React JS ,NodeJS ,Express JS & MongoDB.
                  <br/> This is a E-commerce shopping site like Flipkart where customer's can view the products and Order the liked one.
              </p> 
            </div> 

              <hr className="clearfix w-100 d-md-none pb-3" />
        
              <div className="col-md-3 mb-md-0 mb-3"> 
              </div> 

              <div className="col-md-3 mb-md-0 mb-3"> 
                <h4 style = {{fontFamily: "Times New Roman"}}><u>Personal Links</u></h4>

                <ul className="list-unstyled">
                  <li>
                    <i className='fas fa-envelope' style={{fontSize:'18px'}}> Chalukya001@gmail.com</i>
                  </li>
                  {/* <li>
                    <i className='fas fa-address-book' style={{fontSize:'18px'}}> +91 8095320791</i>
                  </li> */}
                  <li>
                    <span className = 'fa fa-git-square'  style={{fontSize:'20px'}}>  </span> 
                    <a href="https://github.com/Chalukya-H" target="_blank"  className = 'text-primary bg-dark'
                        style={{fontSize:'20px',fontFamily: "Times New Roman"}}> Chalukya-H</a>
                  </li>
                  <li>
                  <span className = 'fa fa-linkedin-square '  style={{fontSize:'20px'}}>  </span> 
                  <a href="https://www.linkedin.com/in/chalukya-h-77a0a8105/" target="_blank" 
                        className = 'text-primary bg-dark' style={{fontSize:'20px' , fontFamily: "Times New Roman"}}> Chalukya-H</a>
                  </li>
                </ul> 
              </div>

            </div> 
        </div> 
      </footer> 
   )
}

export default Footer