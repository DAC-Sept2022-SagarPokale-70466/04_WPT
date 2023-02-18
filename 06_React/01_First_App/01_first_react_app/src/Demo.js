import React, { Component } from 'react';

// String type of elements
class Demo extends Component
{
    state = { myName : "Sagar"};

    // constructor(){
    //     //XHR Call
    // }

    doSomething=()=>{
        //this.state.cname = "infosys";         // NOT WORK
        this.setState({myName : "Sagar Pokale"})
        console.log("Inside the DoSomthing method")
    }

    componentDidMount(){
        console.log("Inside the Mount Method")
    }   
    
    componentDidUpdate(){
        console.log("Component Updated")
    }

    render() {
        console.log("Inside the render method");
        return (
            <div>
            <h1>Hiii There : {this.state.myName}</h1>     
            <button onClick={this.doSomething}> Click Click</button>
            </div>    
        );
    }
}

export default Demo