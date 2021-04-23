import React,  { Component } from "react";



class EmpForm extends Component{

    constructor(props){
        super(props)
    }


    render(){

        const { empForm } = this.props;

        return(
            <div className="conatiner">
                <h1>Add New EMployee</h1>
                <form>
                    
                    <div className="form-inline">
                        <label for="emp Id" className="mr-sm-2">Emp Id:</label>
                        <input type="empId" className="form-control mb-2 mr-sm-2" placeholder="Enter emp Id" id="emp Id"/>
                        &nbsp;
                        <label for="emp Name" className="mr-sm-2">Emp Name:</label>
                        <input type="empName" className="form-control mb-2 mr-sm-2" placeholder="Enter emp Name" id="emp Name"/>
                    </div>

                    <div className="form-inline">
                        <label for="email" className="mr-sm-2">Email Id:</label>
                        <input type="email" className="form-control mb-2 mr-sm-2" placeholder="Enter email" id="email"/>
                        &nbsp;
                        <label for="pwd" className="mr-sm-2">Password:</label>
                        <input type="password" className="form-control mb-2 mr-sm-2" placeholder="Enter password" id="pwd"/>
                    </div>
                    <div className="form-group form-check">
                        <label className="form-check-label">
                        <input className="form-check-input" type="checkbox" /> Remember me
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }



}

export default EmpForm;