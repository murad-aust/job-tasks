import React from 'react';
import Bounce from 'react-reveal/Bounce';

const WorkDetails = ({work}) => {
    
    return (
        <div  className=" col-md-4 mb-5"  >
        <Bounce bottom>
                <div className="card  ">
                   <div className="card-header ">
                        <img className="work-img" src={work.image} alt=""  />
                    </div>
                </div>
           </Bounce>
       </div>
    );
};

export default WorkDetails;