// react
import React, { useEffect, useState } from 'react'
// custom components
import CustomCard from '../components/custom_card.js';
// bootstrap components
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
// image
import Dog01 from '../img/dog01.jpg';
// axios
import axios from 'axios';
/**
 * Component for show home screen.
 *
 * @component
 * @example
 * 
 * return (
 *     <Home />
 * )
 */
export default function Home() {
    // var
    const [show, setShow] = useState(true)
    const [dogDataList, setDogDataList] = useState({})
    const [dogDataList2, setDogDataList2] = useState({})
    // call api to get dog
    useEffect(() => {
        // asc api
        axios.get('http://localhost:5000/dogASC').then(res => {
            setDogDataList(res.data)
        }).catch(err => {
            console.log(err)
        })
        // desc api
        axios.get('http://localhost:5000/dogDESC').then(res => {
            setDogDataList2(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <>  
            <Button variant="primary" onClick={() => setShow(!show)}>ASC/DESC</Button>
            <br />
            {/* ASC LIST */}
            {
                show ?
                    <div>
                        <h1>ASC</h1>
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
                    : null
            }
            {/* DESC LIST */}
            {
                show ? null :
                    <div>
                        <h1>DESC</h1>
                        <Row xs={'auto'} md={'auto'} className="g-4 justify-content-md-center">
                            {Array.from({ length: dogDataList.length }).map((_, index) => (
                                <div key={index}>
                                    <CustomCard
                                        dogImg={dogDataList2[index]?.image || Dog01}
                                        name={dogDataList2[index]?.name || "N/A"}
                                        sex={dogDataList2[index]?.sex || "N/A"}
                                        age={dogDataList2[index]?.age || "N/A"}>
                                    </CustomCard>
                                </div>
                            ))}
                        </Row>
                    </div>
            }
            <br /><br /><br /><br />
        </>
    )
}