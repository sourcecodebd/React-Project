import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function Home() {

    const [data, setData] = useState([])

    useEffect(()=>
    axios.get('http://localhost:8000/api').then(response => {
        setData(response.data)
    })
    );

    return (
        <div>
            This is the home section
            <table className="table border shadow">
                <thead>
                    <tr>
                    <th scope="col">User Id.</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(user=>{
                            return(
                                <tr>
                                <th scope="row">{user.id}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.created_at}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}