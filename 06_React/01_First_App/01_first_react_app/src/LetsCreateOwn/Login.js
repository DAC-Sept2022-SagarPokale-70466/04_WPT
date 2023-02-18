import userEvent from "@testing-library/user-event";
import { hasSelectionSupport } from "@testing-library/user-event/dist/utils";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function Login() {
    var [user, setUser] = useState({ username: "", password: "" })
    var [msg, setMsg] = useState("")
    var history = useHistory();
    // ------------------------------------------------------------------

    var HandleChange = (arg) => {
        var copyOfUser = { ...user };
        copyOfUser[arg.target.name] = arg.target.value
        setUser(copyOfUser);
    }
    // ------------------------------------------------------------------

    var SignIN = () => {
        if (user.username == "sagar" && user.password == 123) {
            setMsg("")
            sessionStorage.setItem("isLoggedIn","true");
            sessionStorage.setItem("username",user.username);
            history.push('/dashboard');
        }
        else{
            setUser({username : "", password : ""})
            setMsg("Invalid Login")
        }
    }

    // var SignIN = () => {
    //     //Credentials : mahesh@test.com and mahesh23
    //     var helper = new XMLHttpRequest();
    //     helper.onreadystatechange = () => {
    //         if (helper.readyState == 4 && helper.status == 200) {
    //             debugger
    //             var replyServer = JSON.parse(helper.responseText);
    //             if (replyServer.isLoggedIn == "True") {
    //                 setMsg("");
    //                 debugger
    //                 sessionStorage.setItem("isLoggedIn", replyServer.isLoggedIn);
    //                 sessionStorage.setItem("userName", user.username);
    //                 sessionStorage.setItem("authToken", replyServer.authToken);
    //                 history.push('/dashboard');
    //             }
    //             else {
    //                 setUser({ username: "", password: "" })
    //                 setMsg("Something is Wrong")
    //             }
    //         }
    //     }

    //     helper.open("POST", "https://iasys.azurewebsites.net/Auth/Sign");
    //     var credentilas = window.btoa(user.username + ":" + user.password);
    //     helper.setRequestHeader("Authorization", "Basic :" + credentilas);
    //     helper.send();

    // }

    


    var Clear = () => {
        setUser({ username: "", password: "" })
    }
    // ------------------------------------------------------------------

    return (<div>
        <center>
            <table>
                <tbody>
                    <tr>
                        <td>UserName ::  </td>
                        <td>
                            <input type="text" name="username"
                                onChange={HandleChange}
                                value={user.username} />
                        </td>
                    </tr>

                    <tr>
                        <td>Password  ::  </td>
                        <td>
                            <input type="text" name="password"
                                onChange={HandleChange}
                                value={user.password} />
                        </td>
                    </tr>

                    <tr>
                        <td style={{ colspan: 2 }}>
                            <button onClick={SignIN}>Sign In</button>
                        </td>
                    </tr>

                    <tr>
                        <td className="btn btn-info">
                            <button onClick={Clear}>Clear</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div>
                {msg}
            </div>
        </center>
    </div>);

}

export default Login;