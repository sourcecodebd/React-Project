import React from 'react'
import {Switch, Route, Link} from 'react-router-dom'
import HomeContent from './HomeContent'
import Account from './Account'
import About from './About'
import View from './View'
import ReferCustomer from './ReferCustomer'
import Edit from './Edit'
import ViewBalance from './ViewBalance'
import StoreBalance from './StoreBalance'
import EditBalance from './EditBalance'
import EditRecharge from './EditRecharge'
import EditBill from './EditBill'
import EditLoanReq from './EditLoanReq'
import ViewReview from './ViewReview'
import AddReview from './AddReview'
import EditReview from './EditReview'
import ViewMessage from './ViewMessage'
import EditMessage from './Contact'
import Home from './Home/Home'

export default function Navbar() {
    return (
        <div>
  <nav style = {{"width": "905px"}} className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/E-Pay"><strong><span style={{"color":"darkblue"}}>E</span><span style={{"color":"green"}}>-Pay</span></strong></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/E-Pay/Customer/Home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/E-Pay/Customer/About">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/E-Pay/Customer/Refer">Refer Customer</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/E-Pay/Customer/Review/Add">Review</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/E-Pay/Customer/Home-Content">Content</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/E-Pay/Customer/Account">Account</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

                <Switch>
                    <Route path="/E-Pay/Customer/Home" component={Home}/>
                    <Route path="/E-Pay/Customer/Home-Content" component={HomeContent}/>
                    <Route path="/E-Pay/Customer/Account" component={Account}/>
                    <Route path= "/E-Pay/Customer/View/:id" component={View}/>
                    <Route path= "/E-Pay/Customer/Refer" component={ReferCustomer}/>
                    <Route path= "/E-Pay/Customer/Edit/:id" component={Edit}/>
                    <Route path="/E-Pay/Customer/About" component={About}/>
                    <Route path= "/E-Pay/Customer/Balance/View/:id" component={ViewBalance}/>
                    <Route path= "/E-Pay/Customer/Balance/Store/:id" component={StoreBalance}/>
                    <Route path= "/E-Pay/Customer/Balance/Edit/:id" component={EditBalance}/>
                    <Route path= "/E-Pay/Customer/Mobile-Balance/Recharge/:id" component={EditRecharge}/>
                    <Route path= "/E-Pay/Customer/Electricity-Bill/Pay/:id" component={EditBill}/>
                    <Route path= "/E-Pay/Customer/Loan/Manage/:id" component={EditLoanReq}/>
                    <Route path= "/E-Pay/Customer/Review/View/:id" component={ViewReview}/>
                    <Route path= "/E-Pay/Customer/Review/Add" component={AddReview}/>
                    <Route path= "/E-Pay/Customer/Review/Edit/:id" component={EditReview}/>
                    <Route path= "/E-Pay/Customer/Contact/View/:id" component={ViewMessage}/>
                    <Route path= "/E-Pay/Customer/Contact/:id" component={EditMessage}/>
                </Switch>

        </div>
    )
}
