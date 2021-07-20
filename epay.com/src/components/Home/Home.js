import React, { Component } from "react";
import { Button } from "reactstrap";
import { Redirect, Link } from "react-router-dom";

export default class Home extends Component {
  state = {
    navigate: false,
  };

  onLogoutHandler = () => {
    localStorage.clear();
    window.location.reload(false)
    this.setState({
      navigate: true,
    });
  };
  render() {
    const user = JSON.parse(localStorage.getItem("userData"));
    const { navigate } = this.state;
    if (navigate) {
      return <Redirect to="/E-Pay/Customer/Sign-Up" push={true} />;
    }
    return (
      <div className="container border shadow" style={{"minHeight": "100vh", "width":"134%"}}>
        <br/>
        <h3> Home</h3>
        <br/>
            <h5> Welcome, {user.full_name} </h5> You have Logged in
            successfully.
   
        <table>
          <tbody className="table border shadow" style={{"minHeight": "10vh", "width":"132%"}}>

                                <tr>
                                <th scope="row">{user.id}</th>
                                <td>{user.full_name}</td>
                                <td>{user.email}</td>
                                <td>{user.created_at}</td>
                                <td><Link className="btn btn-primary" to={`/E-Pay/Customer/View/${user.id}`}>View</Link></td>
                                <td><Link className="btn btn-warning" to={`/E-Pay/Customer/Edit/${user.id}`}>Edit</Link></td>
                                {/* <td><button className="btn btn-danger" onClick = {()=>  deleteProfile(user.id)}>Ban</button></td> */}
                                </tr>
                </tbody>
        </table>        

                <br/><br/>
          <div className="col-xl-3 col-sm-12 col-md-3">
            <Button
              className="btn btn-danger"
              onClick={this.onLogoutHandler}
            >
              Logout
            </Button>
          </div>
          </div>
    );
  }
}
