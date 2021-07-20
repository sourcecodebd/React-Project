import React, {useState, useEffect} from 'react'
import './centerStyle.css'
import axios from 'axios'
import {useHistory, useParams} from 'react-router-dom'

export default function EditBalance() {

    let redirect = useHistory()

    const {id} = useParams();
    
    const [edit, setEdit] = useState({
        card_no: '', bank_name: '', added: ''
    })

    const {card_no, bank_name, added} = edit

    const changeUser = (e)=>{
        setEdit({...edit, [e.target.name] : e.target.value})
    }

    useEffect(()=>loadUser(),[])

    const loadUser = async ()=>{
        const result = await axios.get(`http://localhost:8000/api/edit/balanceeditAdded/${id}`)
        console.log(result)
        setEdit(result.data)
        }

    const formSubmit = (e)=>{
        e.preventDefault();

        axios.post(`http://localhost:8000/api/update/balanceupdateAdded/${id}`, edit).then((response) => {
            setEdit({card_no: '', bank_name: '', added: parseInt(0)})
            redirect.push('/E-Pay/Customer/Account')
        })

        // axios.post(`http://localhost:8000/api/update/${id}`, edit);

        // setEdit({name: '', email: ''})
        // redirect.push('/')
    }
    

    return (
        <div>
            <br/>
            This is the Cash-In/Cash-Out Section
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
                    <label>Add Amount</label>
                    <input type="text" name= "added" value={edit.added} onChange= {changeUser} className="form-control" placeholder="Enter Amount"/>
                </div>
                <button type="submit" className="btn btn-success">Cash In/Out</button>
            </form>
            </div>
        </div>
    )
}
