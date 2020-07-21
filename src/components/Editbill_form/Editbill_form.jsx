import React, { Component } from 'react';

class Editbill_form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'billTitle': props.billTitle,
            'billAmount': props.billAmount,
            'billDate': props.billDate,
            'status': props.status,
            'isChecked': props.status==='Advance'?false:true
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
            'searchId': this.props.billTitle
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
        console.log(this.props.billTitle);
        return (
            <div className="createbillForm">
                <div>
                    <h1>Edit Bill</h1>
                </div>
                <div className="form-boundary"/>
                <div className="form-boundary" id="rightbound" />
                <form onSubmit={this.handleClick}>
                    <input type="text" onChange={this.changeTitle} name="billTitle" id="bilTitle" placeholder="Bill Title*" value={this.state.billTitle}/>
                    <input type="number" onChange={this.changeAmount} placeholder="Bill Amount*" name="billAmount" id="billAmount" value={this.state.billAmount}/>
                    <input type="text" onChange={this.changeDate} placeholder="Bill Date*" name="billDate" id="billDate" value={this.state.billDate}/>
                    <input type="checkbox" name="checkBox" id="checkBox" value={this.state.status} checked={this.state.isChecked} onChange={this.setCheck}/><label for="checkBox">{this.state.status}</label>
                    <input type="submit" value="Create" />
                </form>
            </div>
        );
    }
}

export default Editbill_form;
