import React,  { Component } from "react";



class EmplTable extends Component{

    constructor(props){
        super(props)
    }


    render(){
        const { empList, deleteEmployee, editEmployee  } = this.props;

        return(
            <div>
                <table  className="table table-striped">
                    <thead>
                        <th>Emp Id</th>
                        <th>Emp Name</th>
                        <th>Emp Email</th>
                        <th>Emp Address</th>
                        <th>Actions</th>
                    </thead>
                    <tbody>
                    { empList.map((emp,index)=>(
                    <tr key={index}>
                            <td>{emp.emp_id}</td>
                            <td>{emp.emp_name}</td>
                            <td>{emp.email}</td>
                            <td>{emp.adress}</td>
                            <td><button onClick={()=>{deleteEmployee(emp.emp_id)}}>Delete</button> | 
                            <button onClick={()=>{editEmployee(emp.emp_id) }}>Edit</button></td>
                        </tr>))
                        }
                    </tbody>
                </table>
            </div>
        )
    }



}

export default EmplTable;