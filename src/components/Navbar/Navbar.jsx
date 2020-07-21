import React, { Component } from 'react';
import logo from './../images/mint_logo.jpg';
import './Navbar.css';

class Navbar extends Component {
    constructor(props) {
        super(props);
    }
    createBill = () => {
        this.props.onChange({'page': 'createBill'});
    }
    createHome = () => {
        this.props.onChange({'page': 'home'});
    }
    render() {
        return (
            <div>
                <div className="Navbar-container">
                    <div className="Navbar-logo" onClick={this.createHome}>
                        <img src={logo} alt="LOGO" />
                    </div>
                    <div className="Navbar-options">
                        <a href="">Add Payment</a>
                        <a onClick={this.createBill}>Create Bill</a>
                        <a href="#">+ Add Accounts</a>
                        <a href="#">Settings</a>
                        <a href="#">Profile</a>
                        <a href="#">Tour</a>
                        <a href="#">Log Out</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;