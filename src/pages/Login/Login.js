import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <Form className="card card-body p-5 mt-2">
                            <h2 className="text-center">Login</h2>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted d-none">
                                    Please insert a valid email address
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                                <Form.Text className="text-muted d-none">
                                    Invalid Password
                                </Form.Text>
                            </Form.Group>
                            <Button variant="success" type="submit">
                                Login
                            </Button>
                            <p className="text-center mt-2">New User? <Link to="/register">Register</Link></p>
                        </Form>
                        <hr />
                        <p className="text-center">
                            <Button variant="success" className="mx-2">Google</Button>
                            <Button variant="success" className="mx-2">GitHub</Button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;