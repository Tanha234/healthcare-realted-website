import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';

const Booking = () => {
    const { serviceId } = useParams();

    const[service,setService]=useState([]);
    useEffect(()=>{

        fetch('./services.json')
        .then(res=>res.json())
        .then(json=>console.log(json))

    },{})
    const temp=service.filter(arr=>
        arr.id===serviceId)
        console.log(temp)
    return (
        <div className="login">
            <h2>this is booking: {serviceId}</h2>
       {/* <h1>{serviceId.service_name}</h1> */}
            
        </div>
    );
};

export default Booking;