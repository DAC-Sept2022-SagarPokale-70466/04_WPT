import { Component } from "react";
import Child from './Child'

class Parent extends Component
{
    state = { cname : "Sunbeam"}

    change = () =>{         // This method is getting called by using child class
        this.setState({cname : "Coupa"})
    }
    render()
    {
        console.log("Parent rendere is getting Called")
        return(<div>
                <Child mydata = {this.state.cname}
                        f1 = {this.change}/>
        
                </div>);
    }
}

export default Parent;