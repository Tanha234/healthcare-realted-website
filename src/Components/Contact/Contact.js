import React from 'react';
import { Button, Row } from 'react-bootstrap';
import img from '../../images/chooseUs-removebg-preview (2).png'

const Contact = () => {
    return (
        <div className="doctors-part">
            <Row>
                <div className="col-md-6">
                    <img src={img}alt=""/>
                </div>
                <div className="col-md-6 mt-5">
                <h1 className="service-title">Contact Us</h1>
              
                    <input  className="w-75 mb-4" type="text" name="" placeholder="Enter Your Name" id="" />
                    <br/>
                   
             
                    <input  className="w-75 mb-4" type="email" name="" placeholder="Enter Your Email" id="" />
                    <br/>
                
                    <input  className="w-75 mb-4" type="number" name="" placeholder="Enter Your mobile number" id="" />
                    <br/>
                   
                    <br/>
                    <textarea className="w-75 h-25"name="Message" placeholder="Message" form="usrform"></textarea>
                    <br/>
                    <Button className="px-5" variant="secondary">Submit</Button>

                </div>
            </Row>
        </div>
    );
};

export default Contact;