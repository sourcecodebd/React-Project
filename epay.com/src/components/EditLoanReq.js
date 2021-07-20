import React, {useState, useEffect} from 'react'
import './centerStyle.css'
import axios from 'axios'
import {useHistory, useParams} from 'react-router-dom'

export default function EditLoanReq() {

    let redirect = useHistory()

    const {id} = useParams();
    
    const [edit, setEdit] = useState({
        card_no: '', bank_name: '', loanreq: ''
    })

    const [editAp, setEditAp] = useState({
        card_no: '', bank_name: '', loan: ''
    })

    const [editPaid, setEditPaid] = useState({
        card_no: '', bank_name: '', loanpaid: ''
    })

    const {card_no, bank_name, loanreq} = edit
    const {loan} = editAp
    const {loanpaid} = editPaid


    const changeUser = (e)=>{
        setEdit({...edit, [e.target.name] : e.target.value})
    }

    const changeUserAp = (e)=>{
        setEditAp({...editAp, [e.target.name] : e.target.value})
    }

    const changeUserPaid = (e)=>{
        setEditPaid({...editPaid, [e.target.name] : e.target.value})
    }

    useEffect(()=>loadUser(),[])
    useEffect(()=>loadUserAp(),[])
    useEffect(()=>loadUserPaid(),[])

    const loadUser = async ()=>{
        const result = await axios.get(`http://localhost:8000/api/edit/balanceeditLoan/${id}`)
        console.log(result)
        setEdit(result.data)

        }

        const loadUserAp = async ()=>{
            const resultApprove = await axios.get(`http://localhost:8000/api/edit/balanceeditLoanAp/${id}`)
            console.log(resultApprove)
            setEditAp(resultApprove.data)
    
        }

        const loadUserPaid = async ()=>{
            const resultPaid = await axios.get(`http://localhost:8000/api/edit/balanceeditLoanPaid/${id}`)
            console.log(resultPaid)
            setEditPaid(resultPaid.data)
    
        }

    const formSubmit = (e)=>{
        e.preventDefault();

        axios.post(`http://localhost:8000/api/update/balanceupdateLoan/${id}`, edit).then((response) => {
            setEdit({card_no: '', bank_name: '', loanreq: parseInt(0)})
            redirect.push('/E-Pay/Customer/Account')
        })

        // axios.post(`http://localhost:8000/api/update/${id}`, edit);

        // setEdit({name: '', email: ''})
        // redirect.push('/')
    }

    const formSubmitApprove = (e)=>{
        e.preventDefault();

        axios.post(`http://localhost:8000/api/update/balanceupdateLoanAp/${id}`, editAp).then((response) => {
            setEditAp({card_no: '', bank_name: '', loan: parseInt(0)})
            redirect.push('/E-Pay/Customer/Account')
        })

    }

    const formSubmitPaid = (e)=>{
        e.preventDefault();

        axios.post(`http://localhost:8000/api/update/balanceupdateLoanPaid/${id}`, editPaid).then((response) => {
            setEditPaid({card_no: '', bank_name: '', loanpaid: parseInt(0)})
            redirect.push('/E-Pay/Customer/Account')
        })

    }
    

    return (
        <div>
            <br/>
            This is the Customer Loan Request Section
            <br/><br/>
            <div className="centerStyle">
            <form onSubmit={formSubmit}>
                <div className="form-group">
                <label>Card Number</label>
                    <input type="text" name= "card_no" value={edit.card_no} onChange= {changeUser} className="form-control" placeholder="Enter Name"/>
                </div>
                <div className="form-group">
                    <label>Bank Name</label>
                    <input type="text" name= "bank_name" value={edit.bank_name} onChange= {changeUser} className="form-control"  placeholder="Enter Email"/>
                </div>
                <div className="form-group">
                    <label>Request Loan</label>
                    <input type="text" name= "loanreq" value={edit.loanreq} onChange= {changeUser} className="form-control" placeholder="Enter Amount"/>
                </div>
                <button type="submit" className="btn btn-success">Request</button>
            </form>
            </div>


            <br/>
            This is the Customer Loan Pay Section
            <br/><br/>
            <div className="centerStyle">
            <form onSubmit={formSubmitPaid}>
                <div className="form-group">
                <label>Card Number</label>
                    <input type="text" name= "card_no" value={editPaid.card_no} onChange= {changeUserPaid} className="form-control" placeholder="Enter Name"/>
                </div>
                <div className="form-group">
                    <label>Bank Name</label>
                    <input type="text" name= "bank_name" value={editPaid.bank_name} onChange= {changeUserPaid} className="form-control"  placeholder="Enter Email"/>
                </div>
                <div className="form-group">
                    <label>Pay Loan</label>
                    <input type="text" name= "loanpaid" value={editPaid.loanpaid} onChange= {changeUserPaid} className="form-control" placeholder="Enter Amount"/>
                </div>
                <button type="submit" className="btn btn-success">Pay</button>
            </form>
            </div>


            <br/>
            This is the Customer Loan Approve Section
            <br/><br/>
            <div className="centerStyle">
            <form onSubmit={formSubmitApprove}>
                <div className="form-group">
                <label>Card Number</label>
                    <input type="text" name= "card_no" value={editAp.card_no} onChange= {changeUserAp} className="form-control" placeholder="Enter Name"/>
                </div>
                <div className="form-group">
                    <label>Bank Name</label>
                    <input type="text" name= "bank_name" value={editAp.bank_name} onChange= {changeUserAp} className="form-control"  placeholder="Enter Email"/>
                </div>
                <div className="form-group">
                    <label>Approve Loan</label>
                    <input type="text" name= "loan" value={editAp.loan} onChange= {changeUserAp} className="form-control" placeholder="Enter Amount"/>
                </div>
                <button type="submit" className="btn btn-success">Approve</button>
            </form>
            </div>

        </div>
    )
}
