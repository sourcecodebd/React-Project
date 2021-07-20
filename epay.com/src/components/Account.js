import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default function Account() {

    const [data1, setData] = useState([])
    console.log(data1)
    
    useEffect(async()=>
    await axios.get('/api/balanceindex').then(response => {
        setData(response.data.reverse())
    }),[]
    );
    
    const deleteProfile = async (id)=>{
        await axios.delete(`/api/delete/balancedestroy/${id}`)
        axios.get('/api/balanceindex').then(response => {
        setData(response.data.reverse())
    })
    }
       const user = JSON.parse(localStorage.getItem("userData"));
        return (
            <div>
                <br/>
                This is the Balance section
                <br/><br/>
                <table className="table border shadow" style={{"color":"darkblue","minHeight": "10vh", "width":"132%"}}>
                    <thead>
                        <tr>
                        <th scope="col">Card No.</th>
                        <th scope="col">Bank Name</th>
                        <th scope="col">Balance</th>
                        </tr>
                    </thead>
                    <tbody>
              {/* {
                            data1.map(user=>{
                                return( */}
                                    <tr>
                                    <th scope="row">{user.card_no}</th>
                                    <td>{user.bank_name}</td>
                                    <td>{parseInt(user.balance)}</td>
                                    <td><Link className="btn btn-primary" to={`/E-Pay/Customer/Balance/View/${user.id}`}>View Balance</Link></td>
                                    <td><Link className="btn btn-warning" to={`/E-Pay/Customer/Balance/Store/${user.id}`}>Store Balance</Link></td>
                                    <td><Link className="btn btn-danger" to={`/E-Pay/Customer/Balance/Edit/${user.id}`}>Cash In/Out</Link></td>
                                    </tr>
                                    <tr scope="row">
                                    <td><Link className="btn btn-primary" to={`/E-Pay/Customer/Mobile-Balance/Recharge/${user.id}`}>Mobile Recharge</Link></td>
                                    <td><Link className="btn btn-warning" to={`/E-Pay/Customer/Electricity-Bill/Pay/${user.id}`}>Electricity Bill</Link></td>
                                    <td><Link className="btn btn-danger" to={`/E-Pay/Customer/Loan/Manage/${user.id}`}>Manage Loan</Link></td>
                                    </tr>
                                {/* )
                            })
                        } */}
                    </tbody>
                </table>
            </div>
        )
}