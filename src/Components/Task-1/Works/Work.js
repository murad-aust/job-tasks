import React from 'react';
import WorkDetails from './WorkDetails';
import './Work.css';
import CA from '../../../images/work-1.PNG'
import VN from '../../../images/work-2.PNG'
import TG from '../../../images/work-3.png'
import ema from '../../../images/carousel-1.png'
import online from '../../../images/work-5.PNG'
import gadget from '../../../images/work-6.PNG'
import Fade from 'react-reveal/Fade';
const works= [
    {
     
        image:CA,

    },
    {
       
        image:VN,
       
    },
    {
       
        image:TG,
        
    },
    {
     
        image:ema,
       
    },
    {
       
        image:online,
       
    },
    {
        
        image:gadget,
      
    }
]


const Work = () => {
    return (
        <section className="work my-5">
            <div className="container">
            <Fade right big>
            <h1 className="text-center">Our Recent <span style={{color:'#742CB9'}}>Projects</span></h1>
             
            </Fade>
            {
                        works.length===0 &&
                        <div class="d-flex justify-content-center mt-5">
                        <div class="spinner-border" role="status"></div>
                        <strong >Loading...</strong>
                      </div>
                        
                    }
                    <div className="row mt-5">
                        {
                            works.map(work => <WorkDetails work={work}></WorkDetails>)
                        }
                    </div>
                    </div>
        </section>
    );
};

export default Work;