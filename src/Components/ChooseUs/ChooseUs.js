import React from 'react';
import { Row } from 'react-bootstrap';
import choose from '../../images/chooseUs-removebg-preview (2).png'

const ChooseUs = () => {
    return (
        <div className="container">
            <Row>
                <div className="col-md-6">
                    <img className="w-100" src={choose} alt=""/>
                </div>
           <div className="col-md-6 mt-5">
               <h1>Why choose Us?</h1>
               <div>
                   <h5>Expert doctors</h5>
                   </div>
           </div>



            </Row>
            
        </div>
    );
};

export default ChooseUs;