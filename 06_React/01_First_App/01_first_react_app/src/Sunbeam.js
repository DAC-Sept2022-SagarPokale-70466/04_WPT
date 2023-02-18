// import { getDefaultNormalizer } from "@testing-library/react";
// import { Component } from "react";
// import '../node_modules/bootstrap/dist/css/bootstrap.css'
// import './common.css'

// class Sunbeam extends Component {
//     state = { meal: [] };

//     componentDidMount() {
//         debugger;
//         var helper = new XMLHttpRequest();
//         helper.onreadystatechange = () => {
//             if (helper.status == 200 && helper.readyState == 4) {
//                 debugger;
//                 var result = JSON.parse(helper.responseText)
//                 debugger
//                 this.setState({ meal: result.meals[0] })
//             }
//         }
//         helper.open("GET", "https://www.themealdb.com/api/json/v1/1/random.php")
//         helper.send();

//     }

//     render() {
//         return (
//             <div>
//                 <h2>{this.state.meal.strMeal}</h2>
//                 <h2>Hii</h2>
//             </div>
//         );
//     }
// }

// export default Sunbeam;


import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './common.css'
class Sunbeam extends Component {

    state = { user: [] };

    componentDidMount() {
        var helper = new XMLHttpRequest();
        helper.onreadystatechange = () => {
            if (helper.readyState == 4 && helper.status == 200) {
                debugger
                var result = JSON.parse(helper.responseText);
                this.setState({ user : result.data });
                debugger
            }
        };
        helper.open("GET", "https://reqres.in/api/users")
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
                                    <td>{u.first_name}</td>
                                    <td>{u.last_name}</td>
                                    <td>{u.email}</td>
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

export default Sunbeam;
