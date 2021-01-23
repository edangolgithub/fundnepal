import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap';

export class NgoForm extends Component {
    render() {
        return (
            <div>
                <Form>
                    <Form.Group controlId="formOrganizationName">
                        <Form.Label>organization Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Organization Name" />
                        
                    </Form.Group>

                    <Form.Group controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

export default NgoForm
