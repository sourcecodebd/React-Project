import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useHistory, useParams} from 'react-router-dom'

export default function EditMessage() {

    let redirect = useHistory()

    const {id} = useParams();
    
    const [edit, setEdit] = useState({
    name: '', 
    message: ''
    })

    const {name, message} = edit

    const changeUser = (e)=>{
        setEdit({...edit, [e.target.name] : e.target.value})
    }

    useEffect(()=>loadUser(),[])

    const loadUser = async ()=>{
        const result = await axios.get(`http://localhost:8000/api/edit/messageedit/${id}`)
        console.log(result)
        setEdit(result.data)
        }

    const formSubmit = (e)=>{
        e.preventDefault();

        axios.post(`http://localhost:8000/api/update/messageupdate/${id}`, edit).then((response) => {
            setEdit({name: '', message: ''})
            redirect.push('/E-Pay/Customer/Home-Content')
        })

        // axios.post(`http://localhost:8000/api/update/${id}`, edit);

        // setEdit({name: '', email: ''})
        // redirect.push('/')
    }
    

    return (
        <div>
            <br/>
            This is the Message to Admin Section
            <br/><br/>
            <div>
            <form onSubmit={formSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" name= "full_name" value={edit.full_name} onChange= {changeUser} className="form-control" placeholder="Enter Name"/>
                </div>
                <div className="form-group">
                    <label>Message</label>
                    <textarea name= "message" rows="10" cols="100" value={edit.message} onChange= {changeUser} className="form-control"  placeholder="Enter Message"/>
                </div>
                <button type="submit" className="btn btn-warning">Send Message</button>
            </form>
            </div>
        </div>
    )
}
