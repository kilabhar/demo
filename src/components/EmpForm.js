import React,  { Component } from "react";



class EmpForm extends Component{

    constructor(props){
        super(props)

        this.state = {
			empId: '',
			empName: '',
			email: '',
            address:''
		}
    }

    handleEmpIdChange = event => {
		this.setState({
			empId: event.target.value
		})
	}

    handleEmpNameChange = event => {
		this.setState({
			empName: event.target.value
		})
	}

    handleEmailChange = event => {
		this.setState({
			email: event.target.value
		})
	}

    handleAddressChange = event => {
		this.setState({
			address: event.target.value
		})
	}

    handleSubmit = event => {
		alert(`${this.state.empId} ${this.state.empName} ${this.state.email} ${this.state.address}`)
		event.preventDefault()
	}




    render(){

       // const { empForm } = this.props;
        const { empId, empName, email, address } = this.state

        return(
            <div className="container">
                <h1>Add New EMployee</h1>
                <form onSubmit={this.handleSubmit}> 
                    
                    <div className="form-inline">
                        <label for="empId" className="mr-sm-2">Emp Id:</label>
                        <input type="text" className="form-control mb-2 mr-sm-2" value={empId} 
                        onChange={this.handleEmpIdChange}
                        placeholder="Enter emp Id" id="empId"/>
                        &nbsp;
                        <label for="empName" className="mr-sm-2">Emp Name:</label>
                        <input type="text" className="form-control mb-2 mr-sm-2" value={empName}
                         onChange={this.handleEmpNameChange}
                        placeholder="Enter emp Name" id="empName"/>
                    </div>

                    <div className="form-inline">
                        <label for="email" className="mr-sm-2">Email Id:</label>
                        <input type="email" className="form-control mb-2 mr-sm-2" value={email} 
                         onChange={this.handleEmailChange}
                        placeholder="Enter email" id="email"/>
                        &nbsp;
                        <label for="address" className="mr-sm-2">Address:</label>
                        <input type="text" className="form-control mb-2 mr-sm-2"  value={address}
                         onChange={this.handleAddressChange}
                           placeholder="Enter Address" id="address"/>
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