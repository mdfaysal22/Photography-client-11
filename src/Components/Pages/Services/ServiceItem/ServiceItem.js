import React from 'react';

const ServiceItem = ({service}) => {
    return (
        <div>
            <h1>{service.title}</h1>
        </div>
    );
};

export default ServiceItem;