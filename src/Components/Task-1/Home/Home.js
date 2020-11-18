import React from 'react';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Work from '../Works/Work';
import Footer from '../Footer/Footer';
import Feedbacks from '../Feedback/Feedbacks';

const Home = () => {
    return (
        <div>
            
            <Header></Header>
            <Services></Services>
            <Work></Work>
            <Feedbacks></Feedbacks>
            <Footer></Footer>
        </div>
    );
};

export default Home;