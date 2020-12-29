import React, {useState} from 'react';
import {ContainerStyle} from "../styles/General.styled";
import {ErrorMessage, Form, Formik, Field} from "formik";
import * as yup from "yup";
import {Error} from "../styles/Checkout.styled";
import { RegisterButtonStyle, RegisterFormStyle, RegisterInputBlockStyle, RegisterLabelStyle, RegisterTitleStyle} from "../styles/Register.styled";
import {Link, useHistory} from "react-router-dom";
import {registerUser} from "../store/axios";

function Register() {

    const [buttonActive, setButtonActive] = useState(true);
    const history = useHistory();

    function onSubmitRegister(username, email, password) {
        setButtonActive(false);
        registerUser(username, email, password).then((data) => {
            if (data.result === true) {
                alert('You have registered!');
                setButtonActive(true);
                history.push('/login');
            } else if (data.result === 'username' || data.result === 'email') {
                alert(`User with such ${data.result} already exists!`);
                setButtonActive(true);
            }
        });
    }

    return (
            <ContainerStyle>
                <Formik
                    initialValues={{
                        username: '',
                        email: '',
                        password: '',
                        confirmPassword: ''
                    }}
                    validationSchema={yup.object({
                        username: yup
                            .string()
                            .required('Username is required')
                            .max(20, "Nice try, nobody has a first name that long"),
                        email: yup
                            .string()
                            .required('Email is required')
                            .max(40, "Email too long")
                            .email('Invalid email address'),
                        password: yup
                            .string()
                            .min(3, "Password very short")
                            .required('Password is required'),
                        confirmPassword: yup
                            .string()
                            .min(3, "Password very short")
                            .required('Confirm password is required'),
                    })}

                    onSubmit={(values) => {
                        onSubmitRegister(values.username, values.email, values.password);
                        console.log(values);
                    }}>
                    {({
                          values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty
                      }) => {
                        return (
                            <Form>
                                <RegisterFormStyle>
                                    <RegisterTitleStyle>Register</RegisterTitleStyle>
                                    <RegisterInputBlockStyle>
                                        <RegisterLabelStyle htmlFor="username">Username</RegisterLabelStyle>
                                        <Field type={'text'}
                                            name={'username'}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            placeholder='Enter username'
                                            value={values.username}/>
                                        {touched.username && errors.username
                                        &&
                                        <ErrorMessage name='username'>{error => <Error>{error}</Error>}</ErrorMessage>
                                        }
                                    </RegisterInputBlockStyle>

                                    <RegisterInputBlockStyle>
                                        <RegisterLabelStyle htmlFor="email">Email</RegisterLabelStyle>
                                        <Field
                                            type={'text'}
                                            name={'email'}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            placeholder='Enter your email'
                                            value={values.email}/>
                                        {touched.email && errors.email
                                        && <ErrorMessage name='email'>{error => <Error>{error}</Error>}</ErrorMessage>
                                        }
                                    </RegisterInputBlockStyle>

                                    <RegisterInputBlockStyle>
                                        <RegisterLabelStyle htmlFor="password">Password</RegisterLabelStyle>
                                        <Field
                                            type={'password'}
                                            name={'password'}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            placeholder='Enter password'
                                            value={values.password}/>
                                        {touched.password && errors.password
                                        &&
                                        <ErrorMessage name='password'>{error => <Error>{error}</Error>}</ErrorMessage>
                                        }
                                    </RegisterInputBlockStyle>

                                    <RegisterInputBlockStyle>
                                        <RegisterLabelStyle htmlFor="confirmPassword">Confirm password</RegisterLabelStyle>
                                        <Field type={'password'} name={'confirmPassword'} onChange={handleChange} onBlur={handleBlur} placeholder='Confirm password' value={values.confirmPassword}/>
                                        {touched.confirmPassword && errors.confirmPassword  && <ErrorMessage name='confirmPassword'>{error =>
                                            <Error>{error}</Error>}</ErrorMessage>}
                                    </RegisterInputBlockStyle>

                                     <Link to="/login">Sign in</Link>

                                    {buttonActive
                                        ? (<RegisterButtonStyle disabled={!isValid && !dirty} onClick={handleSubmit} type='submit'> Login </RegisterButtonStyle>
                                        ) : (<RegisterButtonStyle disabled={true} onClick={handleSubmit} type='submit'> Login </RegisterButtonStyle>)}

                                </RegisterFormStyle>
                            </Form>)}}
                </Formik>
            </ContainerStyle>
    );
}

export default Register;