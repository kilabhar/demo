import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import data from "./mockData";
import EmpTable from './components/EmpTable';
import EmpForm from './components/EmpForm';


class App extends Component {

constructor(){
  super();
  this.state={
    empList: []
  }
}

componentWillMount(){
  console.log("Will");
}

componentDidMount(){
  console.log("DID");
  this.setState({empList: data});
}

addNewEmploee= () =>{

}

deleteEmployee=()=>{

}

editEmployee=()=>{

}


render(){
  const { empList } = this.state;
  return( <div classNmae="container">
    <EmpForm />
    <h1>Employee List</h1>
    <EmpTable empList={empList} />
  </div>
  )
}

}

export default App;
