import React from 'react';
import { Row } from 'react-bootstrap';
import history from '../../images/history.jpg'
import '../History/History.css'

const History = () => {
    return (
        <div>
            <Row className="my-5">
                <div className="col-md-6 ps-2">
                    <p>15 years of working excellence</p>
                    <h1>Welcome to <span className="history-name">Diagonstic Center</span></h1>
                    <p className="history-text px-5">We help your body restore itself by harnessing your own healing potential with a variety of techniques to combat areas of disease, injury or inflammation. This process involves a variety of techniques including a minimally invasive procedure conducted right in our clinic.We provide a long list of pediatric services to care for your child from infancy into adulthood.Family Medicine is committed to providing personalized, lifelong care for your entire family.Patients often experience tooth decay because of inappropriate nutritional habits, poor oral care at home or genetics leading to many cavities. Before creating a treatment plan, the dental professional will extensively review the patient’s medical history and their daily routine in efforts to detect any underlying issues such as medical ailments.

</p>

                </div>
                <div className="col-md-6 mt-3">
                    <img  className="w-75" src={history} alt=""/>

                </div>
            </Row>
        </div>
    );
};

export default History;