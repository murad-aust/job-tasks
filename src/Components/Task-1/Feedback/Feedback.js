import React from 'react';
import './Feedbacks.css';

const Feedback = (props) => {

    return (

        <div  className=" col-md-4" >

        <div className="card shadow-sm mb-5 ">
        <div className="card-header d-flex ">
            
                <img className="mx-3 " src={props.image} alt="" height="60" style={{borderRadius: '50%'}}  width="60"/>
            
            <div>
                <h6 >{feedback.name}</h6>
                <p style={{color:'black'}}>{feedback.designation}</p>
            </div>
            </div>
           
        <div className="card-body text-justify">
            <p className="card-text text-secondary">{feedback.description}</p>
        </div>
            
       </div>
        </div>


    );
};

export default Feedback;