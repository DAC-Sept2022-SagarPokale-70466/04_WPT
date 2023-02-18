import { useEffect, useState } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css'

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => // This will run only once
    {
        var helper = new XMLHttpRequest();
        helper.onreadystatechange = () => {

            if (helper.readyState == 4 && helper.status == 200) {
                //debugger
                var userReceived = JSON.parse(helper.responseText);
                setUsers(userReceived); // Setstate after 
            }

        }
        helper.open("GET", "http://localhost:9898/users");

        var credentials = window.btoa("sagar:sagar@123");

        helper.setRequestHeader("Authorization", "Basic " + credentials);

        helper.send();
    }, [])

    return <div>
        <h1>Users</h1>
        <div className="text-center">
            <table className="table table-bordered border-primary">
                <tbody>
                    {
                        users.map(user => {
                            return (<tr>
                                <td>{user.No}</td>
                                <td>{user.Name}</td>
                                <td>{user.Adrress}</td>
                            </tr>);
                        })
                    }
                </tbody>
            </table>
        </div>

    </div>
}

export default Users;