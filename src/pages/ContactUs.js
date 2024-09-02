import React, { useState } from 'react';
import { Row, Button, Form, Col } from 'react-bootstrap';

function Contect() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const nameChangeHandler = (event) => {
        setName(event.target.value);
    };
    const emailChangeHandler = (event) => {
        setEmail(event.target.value);
    };
    const messageChangeHandler = (event) => {
        setMessage(event.target.value);
    };
    const phoneNumberChangeHandler = (event) => {
        setPhoneNumber(event.target.value);
    };

    const formSubmitHandler = async (event) => {
        event.preventDefault();
        console.log(name, email, message, phoneNumber);

        const contactData = {
            name: name,
            email: email,
            message: message,
            phoneNumber: phoneNumber
        };
        await addContactHandler(contactData);
        setName('');
        setEmail('');
        setMessage('');
        setPhoneNumber('');
    };

    async function addContactHandler(contactData) {
        try {
            const response = await fetch(
                'https://e-commerce-78210-default-rtdb.firebaseio.com/ContactData.json',
                {
                    method: 'POST',
                    body: JSON.stringify(contactData),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Failed to add the contact data.', error);
        }
    }

    return (
        <div>
            <Row className="my-5">
                <Col md={6} className="mx-auto">
                    <h3 className="text-center text-uppercase mb-4" style={{ color: '#343D3F' }}>
                        Contact Us
                    </h3>
                    <Form onSubmit={formSubmitHandler}>
                        <Form.Group controlId="formName" className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your name"
                                value={name}
                                onChange={nameChangeHandler}
                            />
                        </Form.Group>
                        <Form.Group controlId="formEmail" className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={emailChangeHandler}
                            />
                        </Form.Group>
                        <Form.Group controlId="formMessage" className="mb-3">
                            <Form.Label>Message</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Write your message here..."
                                value={message}
                                onChange={messageChangeHandler}
                            />
                        </Form.Group>
                        <Form.Group controlId="phonenumber" className="mb-3">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                type="tel"
                                placeholder="Enter your phone number"
                                value={phoneNumber}
                                onChange={phoneNumberChangeHandler}
                            />
                        </Form.Group>
                        <Button
                            variant="dark"
                            type="submit"
                            className="d-flex justify-content-center"
                        >
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </div>
    );
}

export default Contect;