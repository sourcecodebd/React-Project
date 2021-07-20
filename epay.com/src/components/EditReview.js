import React, {useState, useEffect} from 'react'
import './centerStyle.css'
import axios from 'axios'
import {useHistory, useParams} from 'react-router-dom'

export default function Edit() {

    let redirect = useHistory()

    const {id} = useParams();
    
    const [edit, setEdit] = useState({
    name: '', 
    review: ''
    })

    const {name, review} = edit

    const changeUser = (e)=>{
        setEdit({...edit, [e.target.name] : e.target.value})
    }

    useEffect(()=>loadUser(),[])

    const loadUser = async ()=>{
        const result = await axios.get(`http://localhost:8000/api/edit/reviewedit/${id}`)
        console.log(result)
        setEdit(result.data)
        }

    const formSubmit = (e)=>{
        e.preventDefault();

        axios.post(`http://localhost:8000/api/update/reviewupdate/${id}`, edit).then((response) => {
            setEdit({name: '', review: ''})
            redirect.push('/E-Pay/Customer/Home-Content')
        })

        // axios.post(`http://localhost:8000/api/update/${id}`, edit);

        // setEdit({name: '', email: ''})
        // redirect.push('/')
    }
    

    return (
        <div>
            <br/>
            This is the Edit Review Section
            <br/><br/>
            <div className="centerStyle">
            <form onSubmit={formSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" name= "full_name" value={edit.full_name} onChange= {changeUser} className="form-control" placeholder="Enter Name"/>
                </div>
                <div className="form-group">
                    <label>Review</label>
                    <input type="text" name= "review" value={edit.review} onChange= {changeUser} className="form-control"  placeholder="Enter Review"/>
                </div>
                <button type="submit" className="btn btn-warning">Save</button>
            </form>
            </div>
        </div>
    )
}
