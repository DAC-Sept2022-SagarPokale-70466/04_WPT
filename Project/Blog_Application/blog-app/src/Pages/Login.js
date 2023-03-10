import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { doLogin } from "../auth";
import Base from "../Components/Base";
import userContext from "../context/userContext";
import { loginUser } from "../services/user-service";

const LogIn = () => {
    
    const userContxtData = useContext(userContext);

    const navigate = useNavigate();

    const [loginDetail, setLoginDetail] = useState({
        username: '',
        password: ''
    })

    const handleChange = (event, field) => {

        let actualValue = event.target.value;
        setLoginDetail({
            ...loginDetail, [field]: actualValue
            //Actual value with updated value
        })
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();

        console.log(loginDetail);

        // Validation

        if (loginDetail.username.trim() == '' || loginDetail.password.trim() == '') {
            toast.error("Credentials is Required !!!!")
        }

        // Submit the data to server to generate token
        loginUser(loginDetail).then((data) => {
            // console.log("User Logged in : ")
            console.log(data);
            toast.success("Logged In");
            // debugger
            // Save the Data to localStorage
            doLogin(data, () => {
                console.log("login details saved to localstorage .. Here in Login")

                // Redirect to user Dashboard page
                     userContxtData.setUser({
                        data : data,
                        log : true 
                     });
                navigate("/user/dashboard")
            })

        }).catch((error) => {
            console.log(error);
            // debugger
            if (error.response.status == 400 || error.response.status == 404) {
                toast.error(error.response.data.message)
            } else
                toast.error("Invalid Username or Password");
        })

    }

    const handleReset = () => {
        setLoginDetail(
            {
                username: '',
                password: ''
            }
        )
    }

    return (<div>

        <Base>
            <Container>
                <Row className="mt-3">
                    <Col sm={{ size: 6, offset: 3 }}>

                        <Card outline color="dark">
                            <CardHeader>
                                <h3>Login Here</h3>
                            </CardHeader>

                            <CardBody>
                                <Form onSubmit={handleFormSubmit}>

                                    <FormGroup>
                                        <Label for="email">Enter Email</Label>
                                        <Input type="text" id="email" value={loginDetail.username}
                                            onChange={(e) => handleChange(e, 'username')} />
                                    </FormGroup>

                                    <FormGroup>
                                        <Label for="password">Enter Password</Label>
                                        <Input type="password" id="password" value={loginDetail.password}
                                            onChange={(e) => handleChange(e, 'password')} />
                                    </FormGroup>

                                    <Container className="text-center">
                                        <Button outline color="primary">Login</Button>
                                        <Button outline color="secondary" className="ms-2"
                                            onClick={handleReset}>
                                            Clear
                                        </Button>
                                    </Container>

                                </Form>

                            </CardBody>
                        </Card>


                    </Col>
                </Row>


            </Container>



        </Base>

    </div>);
}

export default LogIn;