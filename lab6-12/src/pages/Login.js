import React, {useState} from 'react';
import {ContainerStyle} from "../styles/General.styled";
import * as yup from "yup";
import {ErrorMessage, Form, Formik, Field} from "formik";
import {Error} from "../styles/Checkout.styled";
import {LoginButtonStyle, LoginFormStyle, LoginInputBlockStyle, LoginLabelStyle, LoginTitleStyle} from "../styles/Login.styled";
import {Link} from "react-router-dom";
import {loginUser} from "../store/axios";
import {loggedInKey} from "../constants/constants";
import {useDispatch} from "react-redux";
import {setAccess} from "../redux/accessSlice";


function Login() {

    const dispatch = useDispatch();
    const [buttonActive, setButtonActive] = useState(true);

    function reRenderRouting(data){
        localStorage.setItem(loggedInKey, data.loggedInValue);
        dispatch(setAccess(true));
    }

    function onSubmitLogin(email, password) {
        setButtonActive(false);
        loginUser(email, password).then((data) => {
            if (data.loggedInValue) {
                setButtonActive(true);
                reRenderRouting(data);
            } else {
                alert('Email or password is incorrect!')
                setButtonActive(true);
            }
        });
    }

    return (
            <ContainerStyle>
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    validationSchema={yup.object({
                        email: yup
                            .string()
                            .required('Email is required')
                            .email('Invalid email address'),
                        password: yup
                            .string()
                            .required('Password is required')
                            .min(6, 'too short password')
                            .max(50, 'too long password')
                    })}
                    onSubmit={(values) => {
                        onSubmitLogin(values.email, values.password);
                        console.log(values);
                    }}>
                    {({
                          values,
                          errors,
                          touched,
                          handleChange,
                          handleBlur,
                          isValid, handleSubmit, dirty
                      }) => {
                        return (
                            <Form>
                                <LoginFormStyle>

                                    <LoginTitleStyle>Login</LoginTitleStyle>

                                    <LoginInputBlockStyle>
                                        <LoginLabelStyle htmlFor="email">Email</LoginLabelStyle>
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
                                    </LoginInputBlockStyle>

                                    <LoginInputBlockStyle>
                                        <LoginLabelStyle htmlFor="password">Password</LoginLabelStyle>
                                        <Field
                                            type={'password'}
                                            name={'password'}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            placeholder='Enter your password'
                                            value={values.password}/>
                                        {touched.password && errors.password
                                        &&
                                        <ErrorMessage name='password'>{error => <Error>{error}</Error>}</ErrorMessage>
                                        }
                                    </LoginInputBlockStyle>

                                    <p>Not a member? <Link to="/register">Sign up</Link></p>

                                    {buttonActive
                                        ? (
                                            <LoginButtonStyle disabled={!isValid && !dirty} onClick={handleSubmit} type='submit'>Login me</LoginButtonStyle>
                                        ) : (
                                            <LoginButtonStyle disabled={true} onClick={handleSubmit} type='submit'>Login me</LoginButtonStyle>
                                        )}
                                </LoginFormStyle>
                            </Form>)}}
                </Formik>
            </ContainerStyle>
    );

}

export default Login;