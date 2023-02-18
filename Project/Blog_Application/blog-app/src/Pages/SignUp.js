import { useEffect, useState } from "react";
import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormFeedback, FormGroup, Input, Label, Row } from "reactstrap";
import Base from "../Components/Base";
import { singup } from "../services/user-service";
import { toast } from 'react-toastify';


const SignUp = () => {

    const [data, setData] = useState({

        name: '',
        email: '',
        password: '',
        about: ''
    },)

    // array destructer
    const [error, setError] = useState({
        errors: {},
        isError: false
    });

    // useEffect(() => { console.log(data) }, [data])

    const handleChange = (event, property) => {
        // dynamic setting of values
        setData({ ...data, [property]: event.target.value });


        // console.log(data);
    }


    // Reset the form
    const resetData = () => {
        setData({
            name: '',
            email: '',
            password: '',
            about: ''
        })
    }

    const submitForm = (event) => {
        debugger
        event.preventDefault()

        if (error.isError) {
            toast.error("Form data is Invalid !!!!!!!!!!")
            setError({...error, isError:false})
            return;
        }
        console.log(data);
        // Data validate

        // Call server API
        singup(data).then((response) => {
            console.log(response);
            console.log("Success LOG");
            toast.success("User Registred as " + response.id);
            setData({
                name: '',
                email: '',
                password: '',
                about: ''
            })
        }).catch((error) => {
            console.log(error)
            console.log("error log");
            // Handling Error
            setError({
                errors: error,
                isError: true
            })
        })
    }

    // .then and .catch are promise function

    return (<div>

        <Base>

            <Container>

                <Row className="mt-2">

                    {JSON.stringify(data)}

                    <Col sm={{ size: 6, offset: 3 }}>
                        <Card outline color="dark">
                            <CardHeader>

                                <h3>Fill Info to register</h3>

                            </CardHeader>

                            <CardBody>
                                {/* Creating Form */}

                                <Form onSubmit={submitForm}>

                                    <FormGroup>
                                        <Label for="name">Enter Your Name</Label>
                                        <Input
                                            type='text' placeholder="Enter Here"
                                            id="name"
                                            onChange={(e) => { handleChange(e, 'name') }}
                                            value={data.name}
                                            invalid={error.errors?.response?.data?.name ? true : false}
                                        // invalid={true}
                                        />

                                        <FormFeedback>
                                            {error.errors?.response?.data?.name}
                                        </FormFeedback>

                                    </FormGroup>


                                    <FormGroup>
                                        <Label for="email">Enter Your E-mail</Label>
                                        <Input type='email' placeholder="Enter Here" id="email"
                                            onChange={(e) => { handleChange(e, 'email') }}
                                            value={data.email}
                                            invalid={error.errors?.response?.data?.email ? true : false}></Input>
                                        <FormFeedback>
                                            {error.errors?.response?.data?.email}
                                        </FormFeedback>
                                    </FormGroup>


                                    <FormGroup>
                                        <Label for="password">Enter Your Password</Label>
                                        <Input type='password' placeholder="Enter Here" id="password"
                                            onChange={(e) => { handleChange(e, 'password') }}
                                            value={data.password}
                                            invalid={error.errors?.response?.data?.password ? true : false}></Input>

                                        <FormFeedback>
                                            {error.errors?.response?.data?.password}
                                        </FormFeedback>
                                    </FormGroup>

                                    <FormGroup>
                                        <Label for="about">
                                            Tell Something About Yourself
                                        </Label>
                                        <Input
                                            id="about"
                                            placeholder="Enter Here"
                                            type="textarea"
                                            style={{ height: "150px" }}
                                            onChange={(e) => { handleChange(e, 'about') }}
                                            value={data.about}
                                            invalid={error.errors?.response?.data?.about ? true : false}
                                        />

                                        <FormFeedback>
                                            {error.errors?.response?.data?.about}
                                        </FormFeedback>
                                    </FormGroup>

                                    <Container className="text-center">
                                        <Button outline color="primary">Register</Button>
                                        <Button onClick={resetData} outline color="secondary" className="ms-3">Reset</Button>
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

export default SignUp;