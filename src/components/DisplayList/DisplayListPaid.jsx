import React, { Component } from 'react';
import './List.css';

class DisplayListPaid extends Component {
    handleDelete = (e) => {
        this.props.deleteEntry(e.target.id);
    }
    handleEdit = (e) => {
        this.props.editEntry(e.target.id);
    }
    render() {
        let del = (id) => {
            return <button className="list_btn" id={id} onClick={this.handleDelete}>Delete</button>
        }
        let ele = (id) => {
            return <button className="list_btn" id={id} onClick={this.handleEdit}>Edit</button>
        }
        let list = this.props.entry;
        let data = list.map((n) =>
            <tbody className="tableBody">
                <tr>
                    <td className="tabledate t">{n.date}</td>
                    <td className="tablename t">{n.name}</td>
                    <td className="tableamount t">${n.amount}</td>
                    <td>{ele(n.name)}</td>
                    <td>{del(n.name)}</td>
                </tr>
            </tbody>
        );
        return (
            <div className="tableContainer">
                <h1 className="tableHead">Paid Bills</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th className="tabledate h">Cleared On</th>
                            <th className="tablename h">Bill Title</th>
                            <th className="tableamount h">Amount</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    {data}
                </table>
            </div>
        );
    }
}
export default DisplayListPaid;