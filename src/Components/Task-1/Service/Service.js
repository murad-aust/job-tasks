import React from 'react';
import { Link } from 'react-router-dom';
import Bounce from 'react-reveal/Bounce';

const Service = ({service}) => {
  
    return (
        <div  className=" col-md-4"  >
         <Bounce right>

            <div className="card  mb-5 " style={{Height:"auto"}} >
                <div className="card-header mt-1 d-flex justify-content-center">
                    <img className="mx-3 " src={service.image} alt="" width="60"/>
                </div>
            
            <div className="card-body text-center">
                <h6 style={{color:'black'}}>{service.title}</h6>
                <p className="card-text text-secondary text-center">{service.description}</p>
            </div>
                
            </div>
            </Bounce>
        </div>

  
    );
};

export default Service;