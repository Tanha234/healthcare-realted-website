import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Service = () => {
    const[service,setService]=useState([]);
    useEffect(()=>{
        fetch('./doctors.json')
        .then(res=>res.json())
        .then(json=>setService(json))

    },{})
    return (
        <div className="mx-auto px-5  doctors-part">
            <h2 className="service-title mb-4 fs-1">Our Services </h2>
            

<Row xs={1} md={3} className="g-1">{
     service.map(items=>

  
    <Col className="container">
      <Card className="w-75 mx-auto service-card ">
        <Card.Img variant="top" src={items.service_img} />
        <Card.Body>
        <Card.Title className="fs-3 pt-2" >{items.service_name}</Card.Title>
          <Card.Text className="mx-auto pt-3 pb-3 px-1">{items.service_description}</Card.Text>
          <Card.Title className="fs-4" >Cost:${items.cost}</Card.Title>
          
          
          
        </Card.Body>
      </Card>
    </Col>
  
     )
}
</Row>
            
        </div>
    );
};

export default Service;