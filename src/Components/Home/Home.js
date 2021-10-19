import React from 'react';
import Banner from '../Banner/Banner';
import ChooseUs from '../ChooseUs/ChooseUs';
import Department from '../Department/Department';
import History from '../History/History';
import Services from '../Services/Services';
import Specialits from '../Specialits/Specialits';

const Home = () => {
    return (
        <div className="bg-grey">
            <Banner/>
            <History></History>
            <Services></Services>
            <Department/>
            <Specialits></Specialits>
            
        </div>
    );
};

export default Home;