import { Component } from "react";

// Object type of elements
class Sample extends Component {

    state = { person: { Name: "Sagar", Age: "22", Address: "Pune" } }

    change=()=>{
        this.setState({
            person : {...this.state.person, Name : "Sush"}
                        // Make full copt || Assign New
        })
    }

    render() {
        return (
            <div>
                <h1>Hello :: {this.state.person.Name}</h1>
                <h3>From :: {this.state.person.Address}</h3>

                <br></br>
                <button onClick={this.change}>Click Click</button>
            </div>


        );
    }

}

export default Sample