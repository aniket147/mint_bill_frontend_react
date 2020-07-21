import React, { Component } from 'react';

class DisplayListUpcoming extends Component {
    handleDelete = (e) => {
        this.props.deleteEntry(e.target.id);
    }
    handleEdit = (e) => {
        this.props.editEntry(e.target.id);
    }
    render() {
        let del = (id) => {
            return <button id={id} onClick={this.handleDelete}>Delete</button>
        }
        let ele = (id) => {
            return <button id={id} onClick={this.handleEdit}>Edit</button>
        }
        let list = this.props.entry;
        let data = list.map((n) =>
            <tbody>
                <tr>
                    <td>{n.name}</td>
                    <td>{n.amount}</td>
                    <td>{n.date}</td>
                    <td>{ele(n.name)}</td>
                    <td>{del(n.name)}</td>
                </tr>
            </tbody>
        );
        return (
            <div>
                <h1>Upcoming Bills</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Bill Title</th>
                            <th>Amount</th>
                            <th>Due Date</th>
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

export default DisplayListUpcoming;
