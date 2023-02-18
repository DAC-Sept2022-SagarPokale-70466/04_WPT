import { Component } from "react";


// Array Type of Elements
class Company extends Component {
    state = { location: ["Nashik", "Pune", "Hydrabad", "Banglore"] };

    add = () => {
        let companyRef = [...this.state.location];
        companyRef.push("Nagpur");
        this.setState({ location: companyRef })
    }


    render() {
        return (<div>
            {this.state.location.map(loc => {
                return (<h1 key={loc}>{loc}</h1>);
            })}
            <button onClick={this.add}>Click Click</button>


        </div>)
    }
}

export default Company;