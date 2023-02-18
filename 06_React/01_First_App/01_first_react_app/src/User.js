import { Component } from "react";
import './common.css'

class User extends Component {
    state = {
        allUser: []
    }

    componentDidMount() {
        var helper = new XMLHttpRequest();
        helper.onreadystatechange = () => {
            if (helper.status == 200 && helper.readyState == 4) {
                var result = JSON.parse(helper.responseText);
                this.setState({ allUser: result.data });
            }
        };
        helper.open("GET", "https://reqres.in/api/users")
        helper.send();

    }

    render() {
        return (
            <>
                <center>
                    <h1>Welcome to User Page</h1>
                </center>
                <hr></hr>
                <div className="container">
                    {this.state.allUser.map(user => {
                        return (<div key={user.id} className="content">
                            <img src={user.avatar} className="photo" />
                            <br></br>
                            <h2>
                                {user.first_name}
                                ..{user.last_name}
                            </h2>
                        </div>);
                    })}
                </div>

            </>);
    }
}

export default User;