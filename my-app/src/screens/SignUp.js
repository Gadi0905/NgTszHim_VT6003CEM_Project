import Axios from 'axios'
import React, { useState } from 'react'
// bootstrap components
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function SignUp() {
    const url = "http://localhost:5000/employee";
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        sign_up_code: "",
    })

    function submit(e) {
        e.preventDefault();
        Axios.post(url, {
            name: data.name,
            email: data.email,
            password: data.password,
            sign_up_code: data.sign_up_code
        }).then(res => {
            console.log(res.data)
        })
    }

    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }

    const formStyle = {
        margin: 'auto', 
        width: '400px',
        backgroundColor: "lightblue"
    };

    return (
        <div>
            <br />
            <Card style={formStyle}>
                <Card.Body>
                    <Form onSubmit={(e) => submit(e)}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control onChange={(e) => handle(e)} id="name" value={data.name} placeholder="Enter name" type="text" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control onChange={(e) => handle(e)} id="email" value={data.email} placeholder="Enter email" type="email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onChange={(e) => handle(e)} id="password" value={data.password} placeholder="Enter password" type="password" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicSignUpCode">
                            <Form.Label>Sign up code</Form.Label>
                            <Form.Control onChange={(e) => handle(e)} id="sign_up_code" value={data.sign_up_code} placeholder="Enter sign up code" type="text" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}
