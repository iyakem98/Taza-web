import React from 'react'
import './ContactScreen.css'
import FormContainer from '../components/FormContainer/FormContainer'
import {Form, Button, Row, Col} from 'react-bootstrap'
import emailjs from 'emailjs-com'

const ContactScreen = () => {
    
     function sendEmail (e){
       e.preventDefault();
       emailjs.sendForm('service_egcmg9r', 'template_uzrir6f', e.target).then(res => {console.log(res);
       }).catch(err => console.log(err));
      };

     const sendooo = (e) => {
         console.log('clicked')
     };
      

  return (
    <div className='contactScreen'>
        <div className='contactHeader'>
            <h1 className='text-white conh1'>CONTACT US!</h1>
        </div>

        <div className='contactBot'>

            <p className='text-primary p1con'> Lebu next to Haile garment, Addis Ababa, Ethiopia <br/> 
            Tel: +251930439838, +251946353535. +251930294808 <br/> Tazaplc1997@gmail.com </p>

            <div className='frmcontact'>
                <FormContainer className = 'contform'>
                    <h2 className='text-primary'> Ask us anything </h2>
                    <Form>
                        
                    <Row className='rowmarginer'>
                        <Col>
                            <Form.Group controlId='firstname' className='frmgrp'>
                                <Form.Label className='text-primary labcl'>
                                    First Name
                                </Form.Label>
                                <Form.Control
                                    type='firstName'
                                    name='firstName'
                                    placeholder='Enter your first name'
                                >
                                </Form.Control>
                        </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId='lastname' className='frmgrp'>
                                <Form.Label className='text-primary labcl'> 
                                    Last Name
                                </Form.Label>
                                <Form.Control
                                    type='lastName'
                                    name='lastName'
                                    placeholder='Enter your last name'
                                >
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                        <Form.Group controlId='userEmail' className='rowmarginer'>
                            <Form.Label className='frmlog text-primary labcl'>
                                Email Address*
                            </Form.Label>
                            <Form.Control
                                type='userEmail'
                                name='userEmail'
                                placeholder='Enter email'
                               
                            > 
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId='phoneNum' className='rowmarginer'>
                            <Form.Label className='frmlog text-primary labcl'>
                                Phone Number
                            </Form.Label>
                            <Form.Control
                                type='phoneNum'
                                name='phoneNum'
                                placeholder='Enter phone number'

                               
                            > 
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId='message' className='rowmarginer'>
                            <Form.Label className='frmlog text-primary labcl'>
                                Message
                            </Form.Label>
                            <Form.Control as="textarea" rows={5}
                                type = 'message'
                                name = 'message'
                                placeholder='Enter your message here'
                                className='messageform'
                            > 
                            </Form.Control>
                        </Form.Group>
                        <Button className='bg-info contbutt' onClick={(e) => sendooo()}>
                            Submit
                        </Button>
                    </Form>

                </FormContainer>

            </div>

        </div>
    </div>
  )
}

export default ContactScreen