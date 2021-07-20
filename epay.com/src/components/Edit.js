import React, {useState, useEffect} from 'react'
import './centerStyle.css'
import axios from 'axios'
import {useHistory, useParams} from 'react-router-dom'

export default function EditReview() {

    let redirect = useHistory()

    const {id} = useParams();
    
    const [edit, setEdit] = useState({
    name: '', 
    email: '',
    password: ''
    })

    const {name, email, password} = edit

    const changeUser = (e)=>{
        setEdit({...edit, [e.target.name] : e.target.value})
    }

    //Image-Upload
    const [imagedata, setImagedata] = useState("")

    const handleChange = (file) => {
        setImagedata(file[0])
    }

    useEffect(()=>loadUser(),[])

    const loadUser = async ()=>{
        const result = await axios.get(`http://localhost:8000/api/edit/${id}`)
        console.log(result)
        setEdit(result.data)
        }

    const formSubmit = (e)=>{
        e.preventDefault();

        axios.post(`http://localhost:8000/api/update/${id}`, edit).then((response) => {
            setEdit({name: '', email: '', password: ''})
            redirect.push('/E-Pay/Customer/Home')
        })

        //Image-Upload
        const fData = new FormData();
        fData.append("myfile", imagedata)

        axios.post(`http://localhost:8000/api/update/image/${id}`, fData).then((response) => {
            console.log("Success!",response)
        })
        .catch((e) => {
            console.error("Failed!", e)
        })

    }

    // //Image Upload - Section

    // const [imagedata, setImagedata] = useState("")

    // const handleChange = (file) => {
    //     setImagedata(file[0])
    // }

    // const submitData = (e) =>{
    //     e.preventDefault();
    //     const fData = new FormData();
    //     fData.append("myfile", imagedata)

    //     axios.post(`http://localhost:8000/api/update/image/${id}`, fData).then((response) => {
    //         console.log("Success!",response)
    //     })
    //     .catch((e) => {
    //         console.error("Failed!", e)
    //     })
    // }



    return (
        <div>
            <br/>
            This is the Edit Customer Profile Section
            <br/><br/>
            <div className="centerStyle">

            {/* <form onSubmit={submitData}>
                <div className="form-group">
                    <label>Upload Profile Picture</label>
                    <input type="file" id="myfile" name= "myfile" onChange= {(e)=> handleChange(e.target.files)} className="form-control"/>
                </div>
                <button type="submit" className="btn btn-primary">Upload</button>
            </form>
            <br/> */}

            <form onSubmit={formSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" name= "full_name" value={edit.full_name} onChange= {changeUser} className="form-control" placeholder="Enter Name"/>
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" name= "email" value={edit.email} onChange= {changeUser} className="form-control"  placeholder="Enter Email"/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="text" name= "password" value={edit.password} onChange= {changeUser} className="form-control"  placeholder="Enter New Password"/>
                </div>
                <div className="form-group">
                    <label>Upload Profile Picture</label>
                    <input type="file" id="myfile" name= "myfile" onChange= {(e)=> handleChange(e.target.files)} className="form-control"/>
                </div>
                <button type="submit" className="btn btn-warning">Save</button>
            </form>
            </div>
        </div>
    )
}
