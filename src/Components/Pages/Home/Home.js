import React from 'react';
import useTitle from '../../../Hooks/useTitle';
import About from './About/About';
import Banner from './Banner/Banner';
import CompanyLogo from './CompanyLogo/CompanyLogo';
import Review from './Review/Review';
import Services from './Services/Services';
import SLider from './Slider/SLider';
import Teams from './Teams/Teams';

const Home = () => {
    useTitle("Home")
    return (
        <div>
            <SLider></SLider>
            <Services></Services>
            <About></About>
            <Banner></Banner>
            <Review></Review>
            <Teams></Teams>
            <CompanyLogo></CompanyLogo>
        </div>
    );
};

export default Home;