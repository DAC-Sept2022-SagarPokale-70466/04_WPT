import Meals from "./Meals";
import Header from './Header'
import Footer from './Footer'
import { Link, Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from './About'
import Login from './Login'
import NotFound from "./NotFound";
import MyProtectedRoute from './myProtectedRouter'
import myAxios from "../Promise_Axios/AXIOS";

function MainUI()
{
    return(
        <div className="content">

            <Header></Header>
            <hr></hr>
            
            <Link to={"/home"}>Home</Link> {"  "}
            <Link to={"/about"}>About</Link> {"  "}
            <Link to={"/dashboard"}>Dashboard</Link> {"  "}
            <Link to={"/contact"}>Contact</Link> {"  "}
            <Link to={"/login"}>Login</Link> {"  "}
            <Link to={"/axios"}>AXIOS</Link>

            <Switch>

                <Route path='/' exact component={Home}></Route> 
                <Route path="/home" exact component={Home}></Route>
                <Route path='/about' exact component={About}></Route>
                <Route path={'/login'} exact component={Login}></Route>
                <MyProtectedRoute path='/dashboard' component={Meals}></MyProtectedRoute>
                <MyProtectedRoute path='/contact' component={About}></MyProtectedRoute>
                <Route path='/axios' exact component={myAxios}></Route>
                <Route path='*' exact component={NotFound}></Route>
            </Switch>
            <hr></hr>
            {/* <Meals></Meals> */}
            <Footer></Footer>
        </div>
    );
}

export default MainUI;