import React from 'react';
import { Row,Button, Accordion } from 'react-bootstrap';
import appoinment from '../../images/app-removebg-preview.png'

const Appoinment = () => {
    return (
        <div className="doctors-part">
            <Row>
                <div className="col-md-6">
                    <img src={appoinment} alt=""/>
                </div>
                <div className="col-md-6">
                   <h1 className="service-title mb-4 fs-1 mt-2">Make An Appointment</h1>
                   <input  className="w-75 mb-4 py-2" type="text" name="" placeholder="Enter Your Name" id="" />
                    <br/>
                   
             
                   
                
                    <input  className="w-75 mb-4 py-2" type="number" name="" placeholder="Enter Your mobile number" id="" />
                    <br/>
                   
                    <Accordion className="w-50 ms-5 px-5 mb-4" defaultActiveKey="0" flush>
  <Accordion.Item eventKey="0">
    <Accordion.Header>Neuosurgen</Accordion.Header>
    <Accordion.Body>
     Neuosurgen tickts available at 9am-6pm
     <br/>
     Doctor:Anant Disai
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>Eye</Accordion.Header>
    <Accordion.Body>
     Eye tickts available at 9am-6pm
     <br/>
     Doctor:Sukaanna Shah

    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header>Genecology</Accordion.Header>
    <Accordion.Body>
     Genecology tickts available at 9am-6pm
     <br/>
     Doctor:Aressi Rahman

    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="4">
    <Accordion.Header>Cardology</Accordion.Header>
    <Accordion.Body>
     Cardology tickts available at 10am-6pm
     <br/>
    </Accordion.Body>
  </Accordion.Item>
  
    <Accordion.Item eventKey="5">
    <Accordion.Header>Orthopedic</Accordion.Header>
    <Accordion.Body>
    Orthpedic tickts available at 10am-6pm
    Doctor:Erica Ferandaz

    </Accordion.Body>
  </Accordion.Item>
  
</Accordion>
                    <input  className="w-75 mb-4 py-2" type="text" name="" placeholder="Choose Department" id="" />
                    <br/>
                   
                    <br/>
                    
                    <Button className="px-5 mb-3" variant="secondary">Submit</Button>

                </div>
            </Row>
        </div>
    );
};

export default Appoinment;