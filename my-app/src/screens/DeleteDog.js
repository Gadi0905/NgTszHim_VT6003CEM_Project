import Axios from 'axios'
import React, { useState } from 'react'
// bootstrap components
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function DeleteDog() {
    const token = 'Bearer ' + localStorage.getItem('accessToken')
    const header = {
        'Authorization': token
    }
    const [data, setData] = useState({
        id: "",
    })
    const url = "http://localhost:5000/dog/" + data.id;

    function submit(e) {
        e.preventDefault();
        Axios.delete(url, {
            headers: header,
            id: data.id
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
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}
