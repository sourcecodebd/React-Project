import React, {useState, useEffect} from 'react'
import './centerStyle.css'
import axios from 'axios'
import {useHistory, useParams} from 'react-router-dom'

export default function EditRecharge() {

    let redirect = useHistory()

    const {id} = useParams();
    
    const [edit, setEdit] = useState({
        card_no: '', bank_name: '', phone: '', mobile_recharge: ''
    })

    const {card_no, bank_name, phone, mobile_recharge} = edit

    const changeUser = (e)=>{
        setEdit({...edit, [e.target.name] : e.target.value})
    }

    useEffect(()=>loadUser(),[])

    const loadUser = async ()=>{
        const result = await axios.get(`http://localhost:8000/api/edit/balanceeditRecharge/${id}`)
        console.log(result)
        setEdit(result.data)
        }

    const formSubmit = (e)=>{
        e.preventDefault();

        axios.post(`http://localhost:8000/api/update/balanceupdateRecharge/${id}`, edit).then((response) => {
            setEdit({card_no: '', bank_name: '', phone: '', mobile_recharge: parseInt(0)})
            redirect.push('/E-Pay/Customer/Account')
        })

        // axios.post(`http://localhost:8000/api/update/${id}`, edit);

        // setEdit({name: '', email: ''})
        // redirect.push('/')
    }
    

    return (
        <div>
            <br/>
            This is the Customer Mobile-Recharge Section
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
                    <label>Mobile Recharge</label>
                    <input type="text" name= "mobile_recharge" value={edit.mobile_recharge} onChange= {changeUser} className="form-control" placeholder="Enter Amount"/>
                </div>
                <div className="form-group">
                    <label>Phone Number</label>
                    <input type="text" name= "phone" value={edit.phone} onChange= {changeUser} className="form-control" placeholder="Enter Phone Number"/>
                </div>
                <button type="submit" className="btn btn-success">Recharge</button>
            </form>
            </div>
        </div>
    )
}
