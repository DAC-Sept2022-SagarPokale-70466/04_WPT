import { Component } from "react";

// Reading the entered data from the user
class Register extends Component {
    state = { customer: { cname: "Sunbeam", caddress : "Pune"}};

    doSomething = (arg) => {
        // console.log("inside the doSomething Function")
        // debugger
        // this.setState({ cname: arg.target })
        // console.log(this.state.cname);

        var copyCustomer = {...this.state.customer};
        copyCustomer[arg.target.name] = arg.target.value;
        this.setState({customer : copyCustomer});
    }

    show = () =>{
        console.log(this.state.customer)
    }

    render() {
        return (<div>
            <input type={"text"}
                name="cname"
                value={this.state.customer.cname}
                onChange={this.doSomething}
            />
            <br></br>
            <input type={"text"}
                name="caddress"
                value={this.state.customer.caddress}
                onChange={this.doSomething}
            />
            <button onClick={this.show}>Show Data</button>
        </div>);
    }
}

export default Register;