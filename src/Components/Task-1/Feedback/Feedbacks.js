import React from 'react';
import Feedback from './Feedback';
import './Feedbacks.css';
import user from '../../../images/user.png';
import Slide from 'react-reveal/Slide';

const customers=[
    {
        name:'Miriam Barron',
        image:user,
        designation:'CEO, Express',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas.'

    },
    {
        name:'Miriam Barron',
        image:user,
        designation:'CEO, Express',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas.'

    },
    {
        name:'Miriam Barron',
        image:user,
        designation:'CEO, Express',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas.'

    }
]

const Feedbacks = () => {

 
    return (
        <section className="reviews py-5 my-5 px-5">
             <div className="container">
             <Slide left>
                    <h2 className="text-center">Customers <span style={{color:'#742CB9'}}>Feedbacks</span></h2>
                </Slide>   
                    {
                        customers.length===0 &&
                        <div class="d-flex justify-content-center mt-5">
                        <div class="spinner-border" role="status"></div>
                        <strong >Loading...</strong>
                      </div>
                        
                    }
                    <Slide bottom>
                    <div className=" row mt-5  ">
                       {
                           customers.map((feedback => <Feedback feedback={feedback}></Feedback>))
                       } 
                    </div>
                    </Slide>
            
           </div>
        </section>
    );
};

export default Feedbacks;