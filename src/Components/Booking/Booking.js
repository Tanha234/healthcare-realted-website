
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
        <div className=" col-md-12 doctors-part">
               <h3 className="pt-5">Nam: {detail[serviceId-1]?.service_name}</h3>
            <div>
            {
           
                <img className="w-25" src={detail[serviceId-1]?.service_img} alt=""/>
            
            }
            </div>
            <p className="p-1">Cost:${detail[serviceId-1]?.cost}</p>
            <p className="pb-5 px-5 pb-5">{detail[serviceId-1]?.service_description}</p>
    
            
            
        </div>
    );
};
export default Booking;