// axios
import Axios from 'axios'
// react
import React, { useState } from 'react'
// my components
import CustomCard from '../components/custom_card.js';
// bootstrap components
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
// image
import Dog01 from '../img/dog01.jpg';
/**
 * Component for Search Dog.
 *
 * @component
 * @example
 * 
 * return (
 *     <SearchDog />
 * )
 */
export default function SearchDog() {
    // var
    const [dogDataList, setDogDataList] = useState({})
    // data model
    const [data, setData] = useState({
        name: "",
    })
    // url
    const url = "http://localhost:5000/dog/" + data.name;
    // onSubmit
    function submit(e) {
        e.preventDefault();
        Axios.get(url, {
            name: data.name
        }).then(res => {
            setDogDataList(res.data)
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

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            <br />
            <Row xs={'auto'} md={'auto'} className="g-4 justify-content-md-center">
                {Array.from({ length: dogDataList.length }).map((_, index) => (
                    <div key={index}>
                        <CustomCard
                            dogImg={dogDataList[index]?.image || Dog01}
                            name={dogDataList[index]?.name || "N/A"}
                            sex={dogDataList[index]?.sex || "N/A"}
                            age={dogDataList[index]?.age || "N/A"}>
                        </CustomCard>
                    </div>
                ))}
            </Row>
        </div>
    )
}
