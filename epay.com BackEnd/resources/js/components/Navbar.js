import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'

export default function Navbar() {
    return (
        <div>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">Diary</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/About">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Contact">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/About" component={About}/>
                    <Route path="/Contact" component={Contact}/>
                </Switch>

        </div>
    )
}
