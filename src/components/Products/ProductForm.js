import React from 'react'
import FormContainer from '../FormContainer/FormContainer'
import {Form, Button, Row, Col} from 'react-bootstrap'
import './ProductForm.css'


const ProductForm = () => {
  return (
    <div className='prfr bg-white'>
        <FormContainer className = ''>
            <h3 className='text-primary'> Get a Price Quote! </h3>
            <Form>
                
            <Row className='rowmarginer'>
                <Col>
                    <Form.Group controlId='firstname' className='frmgrp'>
                        <Form.Label className=' text-primary labcl'>
                            First Name
                        </Form.Label>
                        <Form.Control
                            type='firstName'
                            className='prcn'
                        >
                        </Form.Control>
                </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId='lastname' className='frmgrp'>
                        <Form.Label className=' text-primary labcl'> 
                            Last Name
                        </Form.Label>
                        <Form.Control
                            type='lastName'
                            className='prcn'
                        >
                        </Form.Control>
                    </Form.Group>
                </Col>
            </Row>

            <Form.Group controlId='email' className='rowmarginer'>
                    <Form.Label className='frmlog  text-primary labcl'>
                        Email Address
                    </Form.Label>
                    <Form.Control
                        type='email'
                        className='prcn'
                        
                    > 
                    </Form.Control>
                </Form.Group>

            <Row className='rowmarginer'>
                <Col>
                    <Form.Group controlId='firstname' className='frmgrp'>
                        <Form.Label className=' text-primary labcl'>
                            Code
                        </Form.Label>
                        <Form.Control
                            type='firstName'
                            className='prcn'
                        >
                        </Form.Control>
                </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId='lastname' className='frmgrp'>
                        <Form.Label className=' text-primary labcl'> 
                            Phone
                        </Form.Label>
                        <Form.Control
                            type='lastName'
                            className='prcn'
                        >
                        </Form.Control>
                    </Form.Group>
                </Col>
            </Row>

            <Row className='rowmarginer'>
                <Col>
                    <Form.Group controlId='firstname' className='frmgrp'>
                        <Form.Label className=' text-primary labcl'>
                            Which product are you looking for?
                        </Form.Label>
                        <Form.Control
                            type='firstName'
                            className='prcn'
                        >
                        </Form.Control>
                </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId='lastname' className='frmgrp'>
                        <Form.Label className=' text-primary labcl'> 
                            Quantity
                        </Form.Label>
                        <Form.Control
                            type='number'
                            className='prcn'
                        >
                        </Form.Control>
                    </Form.Group>
                </Col>
            </Row>

            <Form.Group controlId='email' className='rowmarginer'>
                    <Form.Label className='frmlog  text-primary labcl'>
                        Address
                    </Form.Label>
                    <Form.Control
                        className='prcn'
                    > 
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='email' className='rowmarginer'>
                    <Form.Label className='frmlog  text-primary labcl'>
                        Company
                    </Form.Label>
                    <Form.Control
                        className='prcn'
                    > 
                    </Form.Control>
                </Form.Group>
                <Button className='bg-info prbutt'>
                     Request
                </Button>
            </Form>

        </FormContainer>
    </div>
  )
}

export default ProductForm