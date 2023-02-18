import { Route } from "react-router-dom";
import Login from "./Login";

function ProtectedRoute(props) {
    if (sessionStorage.getItem("isloggedin") == "true") {
        return <Route path={props.path} component={props.component}></Route>
    }
    else {
        return <Login></Login>
    }
}

export default ProtectedRoute;