import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';

const Booking = () => {
    const { serviceId } = useParams();

    const[service,setService]=useState([]);
    const[services,setServices]=useState([])
    useEffect(()=>{

        fetch('/services.json')
        .then(res=>res.json())
        .then(json=>{
            setServices(json);
            const servicesDetails=services.filter(service=>service.id===serviceId)
            setService(servicesDetails);
            console.log(service)
        })
        

    },[services])
    
       
    
    return (
        <div className="login">
            
            {/* /* <h2>this is booking: {serviceId}</h2> */} 
            
                <h2>Thsi{services.service_name}</h2>
            

    
            
            
        </div>
    );
};

export default Booking;