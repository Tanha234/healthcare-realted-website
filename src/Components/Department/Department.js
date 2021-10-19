import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import '../Department/Department.css'

const Department = () => {
    const[department,setDepartment]=useState([]);
    useEffect(()=>{
        fetch('./departments.json')
        .then(res=>res.json())
        .then(json=>setDepartment(json))

    },[])
    return (
        <div className="container mx-auto my-5">
            <h1 className="service-title my-4 py-5">Our Departments</h1>
            <Row xs={1} md={4} className="g-2">{
     department.map(departments=>

  
    <Col>
      <Card className="w-75 mx-auto department-cards">
        <Card.Img  className="w-25 mx-auto" variant="top" src={departments.icon_img} />
        <Card.Body>
          <Card.Title>{departments.icon_name}</Card.Title>
          
        </Card.Body>
      </Card>
    </Col>
  
     )
}
</Row>
        </div>
    );
};

export default Department;