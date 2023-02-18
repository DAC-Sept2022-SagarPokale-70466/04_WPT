import { Link, Route, Router, Switch } from "react-router-dom";

import Header from "./header";
import Footer from "./footer";
import Users from "./users";
import About from "./about";
import Contact from "./contact";
import ProtectedRoute from "./ProtectedRoute";

function Dashboard() {
    return (<div>

        <Header></Header>

        <hr></hr>
        <Link to="/home">Home</Link>{" | "}
        <Link to="/about">About Us</Link>{" | "}
        <Link to="/contact" className="btn-primary">Contact Us</Link>{" | "}
        <hr></hr>

        <Switch>
            {/* <Route path="/home" component={Users} /> */}
            <ProtectedRoute path="/home" component={Users} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/" component={Users} />
        </Switch>
        <Footer></Footer>

    </div>)
}

export default Dashboard;