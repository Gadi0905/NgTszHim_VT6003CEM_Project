import React, { useEffect, useState } from 'react'
// custom components
import CustomCard from '../components/custom_card.js';
// bootstrap components
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Container from 'react-bootstrap/Container';
// import CardGroup from 'react-bootstrap/CardGroup';
// import Card from 'react-bootstrap/Card';
// image
import Dog01 from '../img/dog01.jpg';
// import Dog02 from '../img/dog02.jpg';
// import Dog03 from '../img/dog03.jpg';
// import Dog04 from '../img/dog04.jpg';
// import Dog05 from '../img/dog05.jpg';
// import Dog06 from '../img/dog06.jpg';
// import Dog07 from '../img/dog07.jpg';
// import Dog08 from '../img/dog08.jpg';
// import Dog09 from '../img/dog09.jpg';
// import Paw from '../img/paw.png';

import axios from 'axios';

export default function Home() {
    const token = 'Bearer ' + localStorage.getItem('accessToken')
    const header = {
        'Authorization': token
    }

    const [dogDataList, setDogDataList] = useState({})

    useEffect(() => {
        axios.get('http://localhost:5000/dog', { 
            headers: header 
        }).then(res => {
            setDogDataList(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <>
            <br />
            <div>
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
            <br /><br /><br /><br />
        </>
    )
}