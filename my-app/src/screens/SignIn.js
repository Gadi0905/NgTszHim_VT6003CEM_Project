// axios
import Axios from 'axios'
//react
import React, { useState } from 'react'
// bootstrap components
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// Sign In function
export default function SignIn() {
  // data model
  const [data, setData] = useState({
    email: "",
    password: "",
  })
  // url
  const url = "http://localhost:5000/login";
  // onSubmit
  function submit(e) {
    e.preventDefault();
    Axios.post(url, {
      email: data.email,
      password: data.password
    }).then(res => {
      console.log(res.data)
      localStorage.setItem("accessToken", res.data.accessToken)
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
              <Form.Label>Email address</Form.Label>
              <Form.Control onChange={(e) => handle(e)} id="email" value={data.email} placeholder="Enter email" type="email" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control onChange={(e) => handle(e)} id="password" value={data.password} placeholder="Enter password" type="password" />
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
