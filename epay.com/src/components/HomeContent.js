import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Review from './Review'
import Message from './Message'
import {useHistory} from 'react-router-dom'

export default function HomeContent() {

    const redirect = useHistory()

    const [data1, setData] = useState([])
    console.log(data1)

    useEffect(async()=>
    await axios.get('/api').then(response => {
        setData(response.data.reverse())
    }),[]
    );

    const deleteProfile = async (id)=>{
        await axios.delete(`/api/delete/${id}`)
        axios.get('/api').then(response => {
        setData(response.data.reverse())
        redirect.push("/E-Pay/Customer/Sign-Up")
    })
    }
    const user = JSON.parse(localStorage.getItem("userData"));
    return (
        <div>
            <br/>
            This is the Customer Profile section
            <br/><br/>
            <table className="table border shadow" style={{"color":"darkblue","minHeight": "10vh", "width":"132%"}}>
                <thead>
                    <tr>
                    <th scope="col">User Id.</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {
                        data1.map(user=>{
                            return( */}
                                <tr>
                                <th scope="row">{user.id}</th>
                                <td>{user.full_name}</td>
                                <td>{user.email}</td>
                                <td>{user.created_at}</td>
                                <td><Link className="btn btn-primary" to={`/E-Pay/Customer/View/${user.id}`}>View</Link></td>
                                <td><Link className="btn btn-warning" to={`/E-Pay/Customer/Edit/${user.id}`}>Edit</Link></td>
                                <td><button className="btn btn-danger" onClick = {()=>  deleteProfile(user.id)}>Ban</button></td>
                                </tr>
                            {/* )
                        })
                    } */}
                </tbody>
            </table>
            <br/>
            <Review/>
            <Message/>
        </div>
    )
}