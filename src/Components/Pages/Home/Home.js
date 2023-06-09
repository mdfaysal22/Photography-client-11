import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../Hooks/useTitle';
import About from './About/About';
import Banner from './Banner/Banner';
import CompanyLogo from './CompanyLogo/CompanyLogo';
import Review from './Review/Review';
import Services from './Services/Services';
import Teams from './Teams/Teams';
import AddedService from './Added Service/AddedService';
import Short from './Short/Short';
import ServiceUs from './ServiceUs/ServiceUs';
import GetInTouch from './GetInTouch/GetInTouch';

const Home = () => {
    useTitle("Home")
    return (
        <div>
            <AddedService/>
            <Short/>
            <div className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
                    <div className="md:h-80 flex flex-col sm:flex-row bg-gray-200 overflow-hidden">
                        <div className="w-full sm:w-1/2 lg:w-2/5 h-48 sm:h-auto order-first sm:order-none bg-gray-300">
                            <img
                                src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&q=75&fit=crop&w=1000"
                                alt="by Andras Vas"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                        <div className="w-full sm:w-1/2 lg:w-3/5 flex flex-col p-4 sm:p-8">
                            <h2 className="text-gray-800 text-xl md:text-2xl lg:text-4xl font-bold mb-4">
                                Get 20% off
                            </h2>

                            <p className="max-w-md text-gray-600 mb-8">
                                Using my Private Token{" "}
                                <span className="font-semibold">#faysal0011</span>
                            </p>

                            <div className="mt-auto">
                                <Link to={"/services"}>
                                <button
                                    href="#"
                                    className="btn bg-white hover:bg-black hover:text-white rounded-none focus-visible:ring ring-indigo-300 text-gray-800 text-sm md:text-base font-semibold text-center border-none transition duration-100 px-8 py-3"
                                >
                                    Booking Now
                                </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Services></Services>
            <About></About>
            <Banner></Banner>
            <ServiceUs/>
            <Review></Review>
            <Teams></Teams>
            <GetInTouch/>
            <CompanyLogo></CompanyLogo>
        </div>
    );
};

export default Home;