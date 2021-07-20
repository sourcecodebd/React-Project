import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default function Review() {
   
const [data1, setData] = useState([])
console.log(data1)

useEffect(async()=>
await axios.get('/api/reviewindex').then(response => {
    setData(response.data.reverse())
}),[]
);

const deleteProfile = async (id)=>{
    await axios.delete(`/api/delete/reviewdestroy/${id}`)
    axios.get('/api/reviewindex').then(response => {
    setData(response.data.reverse())
})
}
   const user = JSON.parse(localStorage.getItem("userData"));
    return (
        <div>
            <br/>
            This is the Customer Review section
            <br/><br/>
            <table className="table border shadow" style={{"color":"darkblue","minHeight": "10vh", "width":"132%"}}>
                <thead>
                    <tr>
                    <th scope="col">User Id.</th>
                    <th scope="col">Name</th>
                    <th scope="col">Review</th>
                    <th scope="col">Date</th>
                    </tr>
                </thead>
                <tbody>
          {/*           {
                        data1.map(user=>{
                            return( */}
                                <tr>
                                <th scope="row">{user.id}</th>
                                <td>{user.full_name}</td>
                                <td>{user.review}</td>
                                <td>{user.created_at}</td>
                                </tr>
                    {/*                             )
                        })
                    } */}

                    {
                        data1.map((user)=>{
                            return(
                                <tr key={user.id}>
                                <th scope="row">{user.id}</th>
                                <td>{user.full_name}</td>
                                <td>{user.review}</td>
                                <td>{user.created_at}</td>
                                <td><Link className="btn btn-primary" to={`/E-Pay/Customer/Review/View/${user.id}`}>View Review</Link></td>
                                </tr>
                          )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}



