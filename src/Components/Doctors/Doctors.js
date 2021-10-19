
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Doctors/Doctors.css'

const Doctors = () => {
    const[doctors,setDoctors]=useState([]);
    useEffect(()=>{
        fetch('./doctors.json')
        .then(res=>res.json())
        .then(json=>setDoctors(json))

    },{})
    return (
        <div className="mx-auto mb-5 doctors-part">
            <h2 className="service-title mb-4 fs-1">Our Doctors </h2>
            

<Row xs={1} md={3} className="g-1">{
     doctors.map(doctor=>

  
    <Col >
      <Card className="w-75 mx-auto service-card container" >
        <Card.Img variant="top" src={doctor.doctor_img} />
        <Card.Body>
        <Card.Title className=" fs-3">{doctor.doctor_name}</Card.Title>
          <Card.Title>{doctor.specialist}</Card.Title>
          <Card.Text className="mt-5">Monday-Friday  9am-7pm</Card.Text>
          
              -------------------------------------
        
          <Card.Text>Saturday    11am-6pm</Card.Text>
          -------------------------------------
          <Card.Text>Sunday      10am-5pm</Card.Text>
          <Link to="/appointment">
          <Button className="px-5 mt-2 py-2" variant="secondary">Book An Appoinment</Button>
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

export default Doctors;