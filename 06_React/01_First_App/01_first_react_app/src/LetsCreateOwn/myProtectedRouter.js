import { Route } from "react-router-dom";
import Login from "./Login";

function MyProtectedRoute(props)
{
    var isLoggedIn = false;

    var isLoggedInFromSessionStorage = sessionStorage.getItem("isLoggedIn")

    if(isLoggedInFromSessionStorage != null){
        if(isLoggedInFromSessionStorage == "true")
            isLoggedIn = true;
    }

    if(isLoggedIn){
        return <Route path={props.path} exact component={props.component}></Route>
    }
    else{
        return <Login></Login>

    }
}

export default MyProtectedRoute;