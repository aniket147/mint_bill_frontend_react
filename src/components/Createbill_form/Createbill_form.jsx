import React, { Component } from 'react';
import './form.css';

class Createbill_form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'billTitle': '',
            'billAmount': '',
            'billDate': '',
            'status': 'Advance',
            'isChecked': false
        };
    }
    setCheck = (params) => {
        this.setState({
            isChecked: !this.state.isChecked
          });
        if(this.state.status === 'Advance'){
            this.setState({'status': 'Paid'});
        }
        else {
            this.setState({'status': 'Advance'});
        }
    }
    handleClick = (e) => {
        e.preventDefault();
        this.props.onChange({
        'billTitle': this.state.billTitle,
        'billAmount': this.state.billAmount,
        'billDate': this.state.billDate,
        'status': this.state.status,
        'searchId': this.state.bilTitle
        });
    }
    changeTitle = (e) => {
        this.setState({'billTitle': e.target.value});
    }
    changeAmount = (e) => {
        this.setState({'billAmount': e.target.value});
    }
    changeDate = (e) => {
        this.setState({'billDate': e.target.value});
    }
    render() {
        console.log(this.state.billTitle);
        return (
            <div className="createbillForm">
                <div className="formHeading">
                    <h1>Create a new Bill</h1>
                </div>
                <div className="form-boundary"/>
                <div className="form-boundary" id="rightbound" />
                <form className="formItems" onSubmit={this.handleClick}>
                    <input className="field f1" type="text" onChange={this.changeTitle} name="billTitle" id="bilTitle" placeholder="Bill Title*" value={this.state.billTitle}/>
                    <input className="field f2" type="number" onChange={this.changeAmount} placeholder="Bill Amount*" name="billAmount" id="billAmount" value={this.state.billAmount}/>
                    <input className="field f3" type="text" onChange={this.changeDate} placeholder="Bill Date*" name="billDate" id="billDate" value={this.state.billDate}/>
                    <input className="check f4" type="checkbox" name="checkBox" id="checkBox" value={this.state.status} checked={this.state.isChecked} onChange={this.setCheck}/><label className="checktext" for="checkBox">{this.state.status}</label>
                    <input className="button f5" type="submit" value="Create" />
                </form>
            </div>
        );
    }
}

export default Createbill_form;
