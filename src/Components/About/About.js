import React from 'react';
import { Row } from 'react-bootstrap';
import patient from '../../images/patient-removebg-preview.png'
import doctor from '../../images/doctors-removebg-preview.png'
const About = () => {
    return (
        <div>
            <Row>
                <div className="col-md-6">
                    <img src={patient} alt=""/>
                </div>
                <div className="col-md-6 mt-5 pt-5 px-5">
                    <h2 className="service-title my-4">About Our Servcice</h2>
                    <p>We have talent, experienced, reputed and dynamic doctors in our team working in a growing practice. All the doctors are whole heartedly waiting to help out the patients with majestic treatments. Our doctors are supported by practice nurses, management and clerical staff all providing high quality care to our patients.
                    Diagnostic Services facilitates the provision of timely, cost-effective, and high quality diagnostic care in safe and secure environments. It includes the clinical services of Pathology and Laboratory Medicine, Radiology, and Nuclear Medicine . These services function in the settings of ambulatory care, acute care, mental health, geriatric and rehabilitative care. Facility based diagnostic service employees include physicians, nurses, technicians, technologists, administrators, as well as program assistants and analysts. Combining these diagnostic services and employees
                    </p>

                </div>
            </Row>
            <Row>
            <div className="col-md-6 mt-5 pt-5 px-5">
                    <h2 className="service-title my-4">Why people choose Us?</h2>
                    <p>Health systems around the world seek to address patients’ unmet health needs for a range of acute and chronic diseases. Simultaneously, governments strive to keep healthcare spending sustainable, while providing equal access to high-quality care. This has fuelled debate around what constitutes a valuable healthcare intervention in a health system and the corollary consideration of what governments are willing to pay for a certain health intervention. Until recently, the value of information in general, and the value of diagnostic information (VODI) specifically, was not part of the discussion.However, investment in diagnostic information can be a key development as information may guide more effective and efficient healthcare and help maintain an affordable health system. This paper therefore explores ways to best define, evaluate, and reward the value created from diagnostics in healthcare and how to include these value considerations in decision-making processes for diagnostics. The authors ultimately call for a holistic VODI framework that accounts for the full range of potential benefits of diagnostic testing, beyond the traditional clinical and health economic domains, and that is essential.</p>

                </div>
                 <div className="col-md-6 mt-5 pt-5">
                    <img src={doctor} alt=""/>
                </div> 
                
            </Row>
        </div>
    );
};

export default About;