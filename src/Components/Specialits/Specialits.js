import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';



const Specialits = () => {
    const[specialts,setSpecialts]=useState([]);
    useEffect(()=>{
        fetch('./services.json')
        .then(res=>res.json())
        .then(json=>setSpecialts(json))

    },{})
    return (
        <div className="container my-5">
            <h2 className="service-title my-4">Our Doctors</h2>
            <p>Read more about our specialts team personal and their immense contribution.</p>
            

<Row xs={1} md={3} className="g-2">{
     specialts.map(servicer=>

  
    <Col>
      <Card className="w-75 mx-auto  service-card">
        <Card.Img  variant="top" src={servicer.doctor_img} />
        <Card.Body>
          <Card.Title>{servicer.doctor_name}</Card.Title>
          
        </Card.Body>
      </Card>
    </Col>
  
     )
}
</Row>
            
        </div>
    );
};

export default Specialits;