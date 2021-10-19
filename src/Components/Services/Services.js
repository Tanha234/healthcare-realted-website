import React, { useEffect, useState } from 'react';
import { Card, Col, Row,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Services/Services.css'

const Services = () => {
    const[services,setServices]=useState([]);
    useEffect(()=>{
        fetch('./services.json')
        .then(res=>res.json())
        .then(json=>setServices(json))

    },[])
    return (
        <div className="container my-5">
            <h2 className="service-title my-4">Our General Services </h2>
            

<Row xs={1} md={3} className="g-2">{
     services.map(service=>

  
    <Col>
      <Card className="w-75 mx-auto service-card ">
        <Card.Img variant="top" src={service.service_img} />
        <Card.Body>
          <Card.Title>{service.service_name}</Card.Title>
          <Card.Text>{service.service_description}</Card.Text>
          <Card.Title>Cost:${service.cost}</Card.Title>
          <Link to={`/booking/${service.id}`}>
          <Button className="px-5 mt-2 py-2" variant="secondary">Details</Button>
            </Link>
          
        </Card.Body>
      </Card>
    </Col>
  
     )
}
</Row>
            
        </div>
    );
};

export default Services;