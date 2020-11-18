import React from 'react';
import Service from '../Service/Service';
import './Services.css'
import sw from '../../../images/icons/service3.png'
import web from '../../../images/icons/service1.png'
import it from '../../../images/icons/service5.png'

const services=[
    {
        title: 'Software Development',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
        image: sw
    },
    {
        title: 'Web Design & Development',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
        image: web

    },
    {
        title: 'IT Consultancy',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s. ',
        image: it
    }
]



const Services = () => {

   

    return (
        <section className="service my-5">
           <div className="container">
                    <h2 className="text-center"> <span style={{color:'#742CB9'}}>Services</span> We Provide </h2>
                    {
                        services.length===0 &&
                        <div class="d-flex justify-content-center mt-5">
                        <div class="spinner-border" role="status"></div>
                        <strong >Loading...</strong>
                      </div>
                        
                    }
                    <div className="row mt-5">
                        {
                            services.map(service => <Service service={service}></Service>)
                        }
                    </div>
            
           </div>
        </section>
    );
};

export default Services;