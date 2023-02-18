
import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './common.css'
class JavaProjectWithReact extends Component {

    state = { user: [] };

    componentDidMount() {
        var helper = new XMLHttpRequest();
        helper.onreadystatechange = () => {
            if (helper.readyState == 4 && helper.status == 200) {
                debugger
                var result = JSON.parse(helper.responseText);
                this.setState({ user : result });
                debugger
            }
        };
        helper.open("GET", "http://localhost:8080/employee")
        helper.send()
    }

    render() {
        return (<div className='content'>
            <center>
                <h1>Welcome</h1>
            </center>
            <hr></hr>
            <button className='btn btn-primary'>
                Create New Record
            </button>
            <hr></hr>
            <div className='table-responsive'>
                <table className='table table-bordered'>
                    <tbody>
                        {
                            this.state.user.map((u) => {
                                return (<tr key={u.id}>
                                    <td>{u.id}</td>
                                    <td>{u.firstName}</td>
                                    <td>{u.lastName}</td>
                                    <td>{u.address}</td>
                                    <td>{u.joinDate}</td>
                                    <td>{u.salary}</td>
                                    <td>
                                        <button className='btn btn-warning'>
                                            Edit
                                        </button>
                                    </td>
                
                                    <td>
                                        <button className='btn btn-danger'>
                                            Delete
                                        </button>
                                    </td>
                                </tr>);
                            })
                        }
                    </tbody>
                </table>
            </div>

        </div>
        );
    }
}

export default JavaProjectWithReact;

// id": 1,
//         "firstName": "Sagar",
//         "lastName": "Pokale",
//         "address": "Nashik",
//         "joinDate": null,
//         "salary": 999,
//         "dept": "Admin"
//     },
//     {
//         "id": 2,
//         "firstName": "Sushama",
//         "lastName": "Pokale",
//         "address": "Jail Road",
//         "joinDate": "2021-12-12T00:00:00.000+00:00",
//         "salary": 1999,
//         "dept": "Customer"
//     },
//     {
//         "id": 3,
//         "firstName": "Prafull",
//         "lastName": "Shinde",
//         "address": "Nashik Road",
//         "joinDate": "2019-12-12T00:00:00.000+00:00",
//         "salary": 2299,
//         "dept": "Admin"