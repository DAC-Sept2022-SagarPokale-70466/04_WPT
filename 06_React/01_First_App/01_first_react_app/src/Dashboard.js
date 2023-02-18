import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './common.css'

class Dashboard extends Component {
    state = {
        employees: [
            { No: 11, Name: "Sachin", City: "Pune" },
            { No: 12, Name: "Amit", City: "Mumbai" },
            { No: 13, Name: "Nilesh", City: "Chennai" },
            { No: 14, Name: "Rohan", City: "Panji" },
            { No: 15, Name: "Madhura", City: "Mumbai" },
            { No: 16, Name: "Mahesh", City: "Pune" },
            { No: 17, Name: "Rahul", City: "Pune" }
        ],
        employee: { No: 0, Name: "", City: "" },
        searchText: ""
    };

    HandleChange = (args) => {
        var copyOfEmployee = { ...this.state.employee };
        debugger
        copyOfEmployee[args.target.name] = args.target.value;
        this.setState({ employee : copyOfEmployee });
    }

    Search = (args) => {
        this.setState({ searchText: args.target.value });
    }

    Clear = () => {
        this.setState({ searchText: "" });
    }
    Clean = () => {
        this.setState({ employee: { No: 0, Name: "", City: "" } });
    }

    Add = () => {
        var copyOfEmployees = [...this.state.employees];
        copyOfEmployees.push(this.state.employee);
        debugger;
        this.setState({ employees: copyOfEmployees });
        this.setState({ employee: { No: 0, Name: "", City: "" } })
    }
    Remove = (no) => {
        // console.log("U asked to remove " + no);
        var filteredEmployees = this.state.employees.filter((emp) => {
            return (emp.No != no);
        });
        this.setState({ employees: filteredEmployees });
    }
    render() {
        debugger;
        console.log("rendering....");
        return (<div className='table-responsive'>
            <center>
                <table className='table table-bordered registerTable'>
                    <tbody>
                        <tr>
                            <td>No</td>
                            <td>
                                <input type={"text"} name="No"
                                    value={this.state.employee.No}
                                    onChange={this.HandleChange} />
                            </td>

                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>
                                <input type={"text"} name="Name"
                                    value={this.state.employee.Name}
                                    onChange={this.HandleChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>City</td>
                            <td>
                                <input type={"text"} name="City"
                                    value={this.state.employee.City}
                                    onChange={this.HandleChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <center>
                                    <button className='btn btn-primary'
                                        onClick={this.Add}>
                                        Add Employee
                                    </button>
                                </center>
                            </td>
                            <td>
                                <center>
                                    <button className='btn btn-info'
                                        onClick={this.Clean}>
                                        Clear
                                    </button>
                                </center>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <hr></hr>
                Search By City: <input type={"text"}
                    value={this.state.searchText}
                    onChange={this.Search} /> {" "}
                <button className='btn btn-info'
                    onClick={this.Clear}>Clear</button>
                <hr></hr>

                <table className='table table-bordered content'>
                    <tbody>
                        {
                            this.state.employees.map(emp => {
                                if (emp.City.toLowerCase().includes
                                    (this.state.searchText.toLowerCase())) {
                                    return (<tr key={emp.No}>
                                        <td>
                                            {emp.No}
                                        </td>
                                        <td>
                                            {emp.Name}
                                        </td>
                                        <td>
                                            {emp.City}
                                        </td>
                                        <td>
                                            <button className='btn btn-danger'
                                                onClick=
                                                {
                                                    () => {
                                                        this.Remove(emp.No)
                                                    }
                                                }>
                                                Delete
                                            </button>
                                        </td>
                                    </tr>)

                                }
                            })
                        }
                    </tbody>
                </table>
            </center>
        </div>);
    }
}

export default Dashboard;