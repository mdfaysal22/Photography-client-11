import React from 'react';
import { Link } from 'react-router-dom';

const AddedService = () => {
    return (
        <div className='text-center flex justify-center items-center min-h-screen'>
            <div>
                <h1 className='text-7xl font-light my-5 text-black text-center'>Build your Own Services and Get New profit System.</h1>
            <Link to={"/services"} className='btn '>Became a PhotoGrapher</Link>
            </div>
        </div>
    );
};

export default AddedService;