import React from 'react'

// Bootstrap
import Container from 'react-bootstrap/Container';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from 'react-bootstrap/Button';

//images
import Advertise from '../../assets/advertise.png'

//Scss
import './AddBanner.scss'

const AddBanner = () => {
  return (
    <div class="saleAdvertise fullCustomWidth">
       <Container className='customAdvertise'> 
       <Row xs={1} md={2} className="g-4">
            <Col>
                <h2>
                    SALE UP TO <br/> 50% OFF
                </h2>
                <p>Whether wrapped, tied-and-twisted or draped finished over bare shoulders collection all ages in time.</p>
                <Button variant="primary" >Shop Collection</Button>
            </Col>  
            
            <Col>
               <img src={Advertise} alt="Advertisement"  className='img-fluid' />
            </Col>
        </Row>
        
         </Container> 
    </div>
  )
}

export default AddBanner;