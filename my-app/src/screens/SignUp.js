import Axios from 'axios'
import React, { useState } from 'react'
// bootstrap components
// import Card from 'react-bootstrap/Card';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';

export default function SignUp() {
    const url = "http://localhost:5000/employee";
    const [data, setData] = useState({
        name: "",
        age: "",
        sex: "",
        email: "",
        password: "",
        sign_up_code: "",
    })

    function submit(e){
        e.preventDefault();
        Axios.post(url,{
            name: data.name,
            age: data.age,
            sex: data.sex,
            email: data.email,
            password: data.password,
            sign_up_code: data.sign_up_code
        }).then(res => {
            console.log(res.data)
        })
    }

    function handle(e){
        const newdata={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }

    return (
        <div>
            <br />
            <form onSubmit={(e)=>submit(e)}>
                <input onChange={(e)=>handle(e)} id="name" value={data.name} placeholder="name" type="text"></input><br /><br />
                <input onChange={(e)=>handle(e)} id="age" value={data.age} placeholder="age" type="text"></input><br /><br />
                <input onChange={(e)=>handle(e)} id="sex" value={data.sex} placeholder="sex" type="text"></input><br /><br />
                <input onChange={(e)=>handle(e)} id="email" value={data.email} placeholder="email" type="email"></input><br /><br />
                <input onChange={(e)=>handle(e)} id="password" value={data.password} placeholder="password" type="password"></input><br /><br />
                <input onChange={(e)=>handle(e)} id="sign_up_code" value={data.sign_up_code} placeholder="sign_up_code" type="text"></input><br /><br />
                <button>Submit</button>
            </form>
        </div>
    )
}
