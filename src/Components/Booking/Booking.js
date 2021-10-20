
import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';

const Booking = () => {
    const { serviceId } = useParams();

    const [detail, setDetail] = useState([]);

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setDetail(data))

    }, [])

    
    return (
        <div className="login col-md-12">
               <h3 className="mt-5">Nam: {detail[serviceId-1]?.service_name}</h3>
            <div>
            {
           
                <img className="w-25" src={detail[serviceId-1]?.service_img} alt=""/>
            
            }
            </div>
            <p>{detail[serviceId-1]?.service_description}</p>
    
            
            
        </div>
    );
};
export default Booking;