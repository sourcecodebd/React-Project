import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default function Message() {
   
const [data1, setData] = useState([])
console.log(data1)

useEffect(async()=>
await axios.get('/api/messageindex').then(response => {
    setData(response.data.reverse())
}),[]
);

const deleteProfile = async (id)=>{
    await axios.delete(`/api/delete/messagedestroy/${id}`)
    axios.get('/api/messageindex').then(response => {
    setData(response.data.reverse())
})
}
   const user = JSON.parse(localStorage.getItem("userData"));
    return (
        <div>
            <br/>
            This is the Message to Admin section
            <br/><br/>
            <table className="table border shadow" style={{"color":"darkblue","minHeight": "10vh", "width":"132%"}}>
                <thead>
                    <tr>
                    <th scope="col">User Id.</th>
                    <th scope="col">Name</th>
                    <th scope="col">Message</th>
                    </tr>
                </thead>
                <tbody>
          {/* {
                        data1.map(user=>{
                            return( */}
                                <tr>
                                <th scope="row">{user.id}</th>
                                <td>{user.full_name}</td>
                                <td>{user.message}</td>
                                <td><Link className="btn btn-primary" to={`/E-Pay/Customer/Contact/View/${user.id}`}>View Message</Link></td>
                                <td><Link className="btn btn-warning" to={`/E-Pay/Customer/Contact/${user.id}`}>Send Message</Link></td>
                                </tr>
                            {/* )
                        })
                    } */}
                </tbody>
            </table>
        </div>
    )
}



