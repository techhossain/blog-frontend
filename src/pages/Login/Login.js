import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';

const Login = () => {
    const { emailPasswordLogin, user } = useAuth();
    const navigate = useNavigate();
    // const location = useLocation();
    // const redirect_uri = navigate?.state?.from || '/';
    // const { formLogin, setUser, googleSignIn, successMsg } = useAuth();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        let { email, password } = data;
        emailPasswordLogin(email, password);
        // navigate(location);
    };


    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <Form className="card card-body p-5 mt-2" onSubmit={handleSubmit(onSubmit)}>
                            <h2 className="text-center">Login</h2>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" {...register("email", { required: true })} />
                                <Form.Text className="text-muted d-none">
                                    {errors.email && <span className="text-danger">Email is required</span>}
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" {...register("password", { required: true })} />
                                <Form.Text className="text-muted d-none">
                                    {errors.password && <span className="text-danger">Password field is required</span>}
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