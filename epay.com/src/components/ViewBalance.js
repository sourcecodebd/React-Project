import React, {useState, useEffect} from 'react'
import './centerStyle.css'
import axios from 'axios'
import {useParams} from 'react-router-dom'

export default function ViewBalance() {

    const {id} = useParams();

    const [view, setView] = useState({
    card_no: '', bank_name: '', balance: '', added: '', mobile_recharge: '', loan: '',  loanreq: '', loanpaid: '', electricity_bill: '', created_at: ''
    })

    const {card_no, bank_name, balance, added, mobile_recharge, electricity_bill, loan,  loanreq, loanpaid, created_at} = view

    useEffect(()=>loadUser(),[])

    const loadUser = async ()=>{
        const result = await axios.get(`http://localhost:8000/api/view/balance/${id}`)
        console.log(result)
        setView(result.data)
        }
    

    return (
       <div>
           <br/>
            This is the View Balance Section
            <br/><br/>
            <table className="table border shadow" style={{"color":"darkblue", "minHeight": "10vh", "width":"132%"}}>
                <thead>
                    <tr>
                    <th scope="col">User Id.</th>
                    <th scope="col">Card Number</th>
                    <th scope="col">Bank Name</th>
                    <th scope="col">Balance</th>
                    <th scope="col"><p style = {{"color":"red"}}>Balance (Without Loan)</p></th>
                    <th scope="col">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                                <tr>
                                <th scope="row">{id}</th>
                                <td>{card_no}</td>
                                <td>{bank_name}</td>
                                <td>৳{parseInt(balance)/* +parseInt(added)-parseInt(mobile_recharge) */}</td>
                                <td>৳{parseInt(balance)-parseInt(loan)}</td>
                                <td>{created_at}</td>
                                </tr>
                    }
                </tbody>
                <thead>
                    <tr>
                    <th scope="col">Added Amount</th>
                    <th scope="col">Recharged Mobile Amount</th>
                    <th scope="col">Electricity Bill</th>
                    <th scope="col">Loan Amount</th>
                    <th scope="col">Requested Loan Amount</th>
                    <th scope="col"><p style = {{"color":"green"}}>Paid Loan Amount</p></th>
                    </tr>
                </thead>
                <tbody>
                    {
                                <tr>
                                <td>৳{added}</td>
                                <td>৳{mobile_recharge}</td>
                                <td>৳{electricity_bill}</td>
                                <td>৳{loan}</td>
                                <td>৳{loanreq}</td>
                                <td>৳{loanpaid}</td>
                                </tr>
                    }
                </tbody>
            </table>
        </div>
    )
}
