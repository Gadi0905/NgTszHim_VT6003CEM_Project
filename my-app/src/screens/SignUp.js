// axios
import Axios from 'axios'
// react
import React, { useState } from 'react'
// bootstrap components
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
/**
 * Component for Sign Up.
 *
 * @component
 * @example
 * 
 * return (
 *     <SignUp />
 * )
 */
export default function SignUp() {
    // data model
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        sign_up_code: "",
    })
    // url
    const url = "http://localhost:5000/employee";
    // onSubmit
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
    // onHandle
    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }
    // form style
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
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control onChange={(e) => handle(e)} id="name" value={data.name} placeholder="Enter name" type="text" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control onChange={(e) => handle(e)} id="email" value={data.email} placeholder="Enter email" type="email" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onChange={(e) => handle(e)} id="password" value={data.password} placeholder="Enter password" type="password" />
                        </Form.Group>

                        <Form.Group className="mb-3">
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
