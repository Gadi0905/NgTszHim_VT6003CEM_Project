import Axios from 'axios'
import React, { useState } from 'react'
// bootstrap components
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function UpdateDog() {
    const token = 'Bearer ' + localStorage.getItem('accessToken')
    const header = {
        'Authorization': token
    }
    const [data, setData] = useState({
        id: "",
        name: "",
        age: "",
        sex: "",
    })
    const url = "http://localhost:5000/dog";

    function submit(e) {
        e.preventDefault();
        Axios.put(url, {
            headers: header,
            id: data.id,
            name: data.name,
            age: data.age,
            sex: data.sex,
        }, {
            headers: header
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
                        <Form.Group className="mb-3">
                            <Form.Label>ID</Form.Label>
                            <Form.Control onChange={(e) => handle(e)} id="id" value={data.id} placeholder="Enter id" type="text"/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control onChange={(e) => handle(e)} id="name" value={data.name} placeholder="Enter name" type="text"/>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Age</Form.Label>
                            <Form.Control onChange={(e) => handle(e)} id="age" value={data.age} placeholder="Enter age" type="text" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Sex</Form.Label>
                            <Form.Control onChange={(e) => handle(e)} id="sex" value={data.sex} placeholder="Enter sex" type="text" />
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
