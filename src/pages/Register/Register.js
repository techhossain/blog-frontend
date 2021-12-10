import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';

const Register = () => {

    const { emailPasswordRegister, user } = useAuth();
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        let { email, password } = data;
        emailPasswordRegister(email, password, navigate);
        // navigate("/");
    };

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <Form className="card card-body p-5 mt-2" onSubmit={handleSubmit(onSubmit)}>
                            <h2 className="text-center">Register</h2>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" {...register("email", { required: true })} />
                                <Form.Text className="text-muted">
                                    {errors.email && <span className="text-danger">Email is required</span>}
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" {...register("password", { required: true })} />
                                <Form.Text className="text-muted">
                                    {errors.password && <span className="text-danger">Password field is required</span>}
                                </Form.Text>
                            </Form.Group>
                            <Button variant="success" type="submit">
                                Register
                            </Button>

                            <p className="text-center mt-2">Already Registred? <Link to="/login">Login</Link></p>
                        </Form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;