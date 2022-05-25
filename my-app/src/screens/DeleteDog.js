// axios
import Axios from 'axios'
// react
import React, { useState } from 'react'
// bootstrap components
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// Delete Dog function
export default function DeleteDog() {
    // accessToken
    const token = 'Bearer ' + localStorage.getItem('accessToken')
    // header
    const header = {
        'Authorization': token
    }
    // data model
    const [data, setData] = useState({
        id: "",
    })
    // url
    const url = "http://localhost:5000/dog/" + data.id;
    // onSubmit
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
