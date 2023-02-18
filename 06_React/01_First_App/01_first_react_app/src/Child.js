import { Component } from "react";

class Child extends Component {
    constructor(props)
    {
    super(props)// Set all over the Child and its sub-class
    }

    render() {
        console.log("Inside the child")
        return (<>
            <h1>{this.props.mydata}</h1>
             <button onClick={this.props.f1}>  {/* Invoking parent method with the help of child */}
                Click Click
            </button>
        </>);
    }
}

export default Child;