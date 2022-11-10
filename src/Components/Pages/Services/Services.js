import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../../../Contexts/AuthContext';
import useTitle from '../../../Hooks/useTitle';
import ServiceItem from './ServiceItem/ServiceItem';
import './Services.css'

const Services = () => {

    useTitle("Services")
    const { user } = useContext(UserAuth)
    const [services, SetServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => SetServices(data))
    }, [])

    return (
        <div>
            <div className='text-center bg-image text-slate-200 hero' >
                <div className='hero-content p-10'>
                    <div>
                        <h1 className='text-4xl font-semibold'>Thanks For your Login</h1>
                        <h2 className='text-5xl font-semibold'>Get Premium Service</h2>
                    </div>
                </div>
            </div>
            <div className='my-5 flex justify-between items-center'>
                <div>
                    <h2 className='text-xl font-semibold'>Ours Services</h2>
                </div>
                {
                    user?.uid ? <Link to={"/add-service"}>
                        <button className='btn btn-outline text-white border-black bg-black hover:bg-white hover:text-black border-2 rounded-none btn-sm '>Add Service</button>
                    </Link>
                        :
                        <Link to={'/login'}><button className='btn btn-outline text-white border-black bg-black hover:bg-white hover:text-black border-2 rounded-none btn-sm '>Please Login</button></Link>

                }
            </div>

            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-x-4 md:gap-x-6 gap-y-8'>
                {
                    services.map(service => <ServiceItem key={service._id} service={service}></ServiceItem>)
                }
            </div>
        </div>
    );
};

export default Services;