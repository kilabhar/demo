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
    empList: [],
    activeEmp: {
    empId: '',
    empName: '',
    email: '',
    address:''
  }
  }
}

componentWillMount(){
  console.log("Will");
}

componentDidMount(){
  this.setState({empList: data});
}

addNewEmploee= (emp) =>{

  const { empList } = this.state;
  const d = empList.filter(i=>i.emp_id === emp.emp_id);

if(d.length){
const  index = empList.indexOf(d[0]);
empList[index] = emp;
}else{
  empList.push(emp);
}



  this.setState({empList: empList});


}

deleteEmployee=(id)=>{

  const { empList } = this.state;

  const updatedList = empList.filter(item=>item.emp_id !== id);



  this.setState({empList: updatedList});
}

editEmployee=(empId)=>{
  console.log(empId);
  const { empList } = this.state;
  const emp = empList.filter(item=>empId === item.emp_id);
  this.setState({activeEmp: emp[0]});

}


render(){
  const { empList, activeEmp } = this.state;
  return( <div classNmae="container">
    <EmpForm
    activeEmp={activeEmp}
     addNewEmploee={this.addNewEmploee}

     />
    <h1>Employee List</h1>
    <EmpTable      deleteEmployee={this.deleteEmployee}
     editEmployee={this.editEmployee} empList={empList}/>
  </div>
  )
}

}

export default App;
