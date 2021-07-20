import React, {useState} from 'react'
import './centerStyle.css'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

export default function ReferCustomer() {

    let redirect= useHistory()

    const [add, setAdd] = useState({
    full_name: '', 
    email: ''
    })

    const {full_name, email} = add

    const changeUser = (e)=>{
        setAdd({...add, [e.target.name] : e.target.value})
    }

    const formSubmit = (e)=>{
        e.preventDefault();

        const result =  axios.post('http://localhost:8000/api/add', add).then((response) => {
            console.log(result)
            setAdd({full_name: '', email: ''})
            redirect.push('/E-Pay/Customer/Home')
        
        })

        // axios.post('http://localhost:8000/api/add', add);

        // setAdd({name: '', email: ''})
        // redirect.push('/')
        
    }
    

    return (
        <div>
            <br/>
            This is the Refer Customer Section
            <br/><br/>
            <div className="centerStyle">
            <form onSubmit={formSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" name= "full_name" value={full_name} onChange= {changeUser} className="form-control" placeholder="Enter Name"/>
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" name= "email" value={email} onChange= {changeUser} className="form-control"  placeholder="Enter Email"/>
                </div>
                <button type="submit" className="btn btn-success">Refer Customer</button>
            </form>
            </div>
        </div>
    )
}
