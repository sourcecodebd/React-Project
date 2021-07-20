import React, {useState} from 'react'
import './centerStyle.css'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

export default function AddReview() {

    let redirect= useHistory()

    const [ladd, setlAdd] = useState({
        full_name: '', 
        review: ''
        })
    
    const {full_name, review} = ladd


    const lchangeUser = (e)=>{
        setlAdd({...ladd, [e.target.name] : e.target.value})
    }
    


    const formSubmit = (e)=>{
        e.preventDefault();

        const result =  axios.post('http://localhost:8000/api/add/reviewstore', ladd).then((response) => {
            console.log(result)
            setlAdd({full_name: '', review: ''})
            redirect.push('/E-Pay/Customer/Home-Content')
        
        })

        // axios.post('http://localhost:8000/api/add', add);

        // setAdd({name: '', email: ''})
        // redirect.push('/')
        
    }
    

    return (
        <div>
            <br/>
            This is the Add Review Section
            <br/><br/>
            <div className="centerStyle">
            <form onSubmit={formSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" name= "full_name" value={full_name} onChange= {lchangeUser} className="form-control" placeholder="Enter Name"/>
                </div>
                <div className="form-group">
                    <label>Review</label>
                    <input type="text" name= "review" value={review} onChange= {lchangeUser} className="form-control"  placeholder="Enter Review"/>
                </div>
                <button type="submit" className="btn btn-success">Create Review</button>
            </form>
            </div>
        </div>
    )
}
