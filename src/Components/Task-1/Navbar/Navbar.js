import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo-b.png'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light ">
                 <img src={logo} alt="" style={{height:'30px', width:'30px'}}/>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <Link className="nav-link text-bol " style={{fontWeight:'bold'}}  to="/">Task-1</Link> 
                </li>
                <li className="nav-item">
                    <Link className="nav-link" style={{fontWeight:'bold'}}  to="/imagePreview">Task-2&3</Link> 
                </li>
                
                <li className="nav-item">
                    <Link className="nav-link" style={{fontWeight:'bold'}} to="/draggable">Task-4&5&6</Link> 
                </li>
                </ul>
               
            </div>
            </nav>
                        
        </div>
    );
};

export default Navbar;