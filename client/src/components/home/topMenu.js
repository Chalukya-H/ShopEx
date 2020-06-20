import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../media/download-11.jpg'
import CategoryMenu from './categoryMenu'

function TopMenu () {
    const handleLogout = () =>{
        localStorage.removeItem('token')
         window.location.href ='/'
      }

    return (
        <div>
          <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/"><img src = {logo} /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse " id="navbarSupportedContent">     
                    <div className="input-group mt-2">
                        <input className="form-control w-25" type="text" placeholder="Search" aria-label="Search" />
                        <div className="input-group-append">
                        <button className="btn btn-md btn-outline-warning " type="submit">Search</button>
                        </div>
                    </div>

                    <ul className="navbar-nav  ml-auto" >
                        {
                            localStorage.getItem('token') ? 
                            <div className ='navbar-nav '>
                                <li className="nav-item active">
                                    <Link to ='/account' className ='nav-link navbar-brand ' >Account </Link>
                                </li>
                                <li className="nav-item active">
                                    <Link to ='/cart' className ='nav-link navbar-brand fa fa-shopping-cart' >  </Link>
                                </li>
                                <li className="nav-item active">
                                    <Link to ='#' onClick ={handleLogout} className ='nav-link navbar-brand fa fa-sign-out' >
                                              </Link>
                                </li>
                            </div>
                            :
                            <div className ='navbar-nav'>
                                <li className="nav-item active">
                                    <Link to ='/login' className ='nav-link navbar-brand'  > Signin </Link>
                                </li>
                                <li className="nav-item active">
                                    <Link to ='/register' className ='nav-link navbar-brand' > SignUp </Link>
                                </li>
                               
                            </div>                        
                        }                         
                    </ul> 
                </div>
             </nav>
            </div>
          
            <CategoryMenu/>
           
        </div>
      
    )
}

export default TopMenu