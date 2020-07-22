import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import Createbill_form from './components/Createbill_form/Createbill_form.jsx';
import './App.css';
import landingimage from './components/images/landing_image.jpg';
import DisplayListUpcoming from './components/DisplayList/DisplayListUpcoming.jsx';
import DisplayListPaid from './components/DisplayList/DisplayListPaid.jsx';
import Editbill_form from './components/Editbill_form/Editbill_form.jsx';

class App extends Component {
  constructor(){
    super();
    this.state = {
      'bills': 'upcoming',
      'page': 'home',
      'billTitle': '',
      'billAmount': '',
      'billDate': '',
      'status': 'Advance',
      entryUpcoming: [],
      entryPaid: []
    };
  }

  handleClick = (params) => { this.setState({'page': params.page}); }

  handleClickCreate = (params) => {
    if(params.status === 'Advance'){
      this.setState( {entryUpcoming: [...this.state.entryUpcoming, 
          {name: params.billTitle , amount: params.billAmount, date: params.billDate, id: params.searchId}
      ] } );
    }
    else {
      this.setState( {entryPaid: [...this.state.entryPaid, 
        {name: params.billTitle , amount: params.billAmount, date: params.billDate, id: params.searchId}
      ] } );
    }
    this.setState({'page': 'home'});
  }

  handleClickEdit = (params) => {
    console.log(params.billTitle);
    console.log(params.searchId);
    if(params.status === 'Advance'){
      let arr = [];
      for(var i=0; i<this.state.entryUpcoming.length; i++){
        if(this.state.entryUpcoming[i].name === params.searchId){
          arr = [...arr,{name: params.billTitle, amount: params.billAmount, date: params.billDate, id: params.searchId}];
        }
        else {
          arr = [...arr,{name: this.state.entryUpcoming[i].name, amount: this.state.entryUpcoming[i].amount, date: this.state.entryUpcoming[i].date, id: this.state.entryUpcoming[i].id}];
        }
      }
      this.setState({entryUpcoming: arr});
    }
    else {
      let arr = [];
      for(var i=0; i<this.state.entryPaid.length; i++){
        if(this.state.entryPaid[i].name === params.searchId){
          arr = [...arr,{name: params.billTitle, amount: params.billAmount, date: params.billDate, id: params.searchId}];
        }
        else {
          arr = [...arr,{name: this.state.entryPaid[i].name, amount: this.state.entryPaid[i].amount, date: this.state.entryPaid[i].date, id: this.state.entryPaid[i].id}];
        }
      }
      this.setState({entryPaid:arr});
    }
    this.setState({
      'page': 'home',
      'billTitle': '',
      'billAmount': '',
      'billDate': '',
      'status': 'Advance'
    });
  }

  editEntry = (id) => { 
    if(this.state.bills === 'upcoming'){
      for(var i=0;i<this.state.entryUpcoming.length;i++){
        if(this.state.entryUpcoming[i].name === id){
          this.setState( {
            status: 'Advance',
            billTitle: this.state.entryUpcoming[i].name,
            billAmount: this.state.entryUpcoming[i].amount,
            billDate: this.state.entryUpcoming[i].date
          });
        }
      }
    }
    else {
      for(var i=0;i<this.state.entryPaid.length;i++){
        if(this.state.entryPaid[i].name === id){
          this.setState( {
            status: 'Paid',
            billTitle: this.state.entryPaid[i].name,
            billAmount: this.state.entryPaid[i].amount,
            billDate: this.state.entryPaid[i].date
          });
        }
      }
    }
    this.setState({'page':'editBill'});
  }

  deleteEntry = (id) => {
    if(this.state.bills === 'upcoming'){
      let arr =[];
      for(var i=0;i<this.state.entryUpcoming.length;i++){
        if(this.state.entryUpcoming[i].name !== id){
          arr = [...arr,this.state.entryUpcoming[i]];
        }
      }
      this.setState({entryUpcoming:arr});
    }
    else {
      let arr = [];
      for(var i=0;i<this.state.entryPaid.length;i++){
        if(this.state.entryPaid[i].name !== id){
          arr = [...arr,this.state.entryPaid[i]];
        }
      }
      this.setState({entryPaid:arr});
    }
  }

  handleUpcoming = () => {
    this.setState({'bills': 'upcoming'});
  }

  handlePaid = () => {
    this.setState({'bills': 'paid'});
  }

  render() {
    if(this.state.page === 'home'){
      console.log('home');
        return (
          <div className="App">
            <Navbar onChange={this.handleClick}/>
            
            <div className="container">
                  <div className="landing">
                      <img src={landingimage} alt="" />
                      <p id="landinghead">Effortlessly stay on top of bills</p>
                      <p id="landingsub">Now you can manage bills and money together with Mint.</p>
                      <div onclick="">
                          <span><b>SIGN UP FOR FREE</b></span>
                      </div>
                  </div>
                  <div className="switch">
                      <a className="switch1" onClick={this.handleUpcoming}>Upcoming</a>
                      <a className="switch2" onClick={this.handlePaid}>Paid</a>
                  </div>
                  {(this.state.bills === 'upcoming') ?
                  <DisplayListUpcoming entry={this.state.entryUpcoming} editEntry={this.editEntry} deleteEntry={this.deleteEntry}/>:
                  <DisplayListPaid entry={this.state.entryPaid} editEntry={this.editEntry} deleteEntry={this.deleteEntry}/> }
              </div>

            <Footer />
          </div>
        );
    }
    else if (this.state.page === 'createBill'){
      console.log('createbill');
      return (
        <div className="App">
          <Navbar onChange={this.handleClick}/>
          <Createbill_form  
            onChange={this.handleClickCreate}
          />
          <Footer />
        </div>
      );
    }
    else if (this.state.page === 'editBill'){
      console.log('editbill');
      return (
        <div className="App">
          <Navbar onChange={this.handleClick}/>
          <Editbill_form 
            onChange={this.handleClickEdit}
            billTitle={this.state.billTitle}
            billAmount={this.state.billAmount}
            billDate={this.state.billDate}
            status={this.state.status}
          />
          <Footer />
        </div>
      );
    }
  }
}

export default App;
