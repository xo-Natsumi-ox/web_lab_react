import React, {useEffect} from "react";
import * as yup from 'yup';
import {ErrorMessage, Field, Form, Formik} from "formik";
import {
    AddressInputBlockStyle,
    CheckoutRowStyle,
    Error,
    InputBlockStyle,
    LabelStyle
} from "../styles/Checkout.styled";
import {CartButtonsBlockStyle, CartButtonStyle} from "../styles/Cart.styled";
import {setCheckout, setSuccess} from "../redux/checkoutSlice";
import {useDispatch} from "react-redux";

function Checkout() {
    
    const phoneRegExUkraine = /^\+?3?8?(0\d{9})$/


    const dispatch = useDispatch();

    function onCheckoutBackClick() {
        dispatch(setCheckout(false));
    }

    useEffect(() => {
        return () => {
            dispatch(setCheckout(false));
        }
    }, [dispatch])

    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                address: ''
            }}
            validationSchema={yup.object({
                firstName: yup
                    .string()
                    .required('First name is required'),
                lastName: yup
                    .string()
                    .required('Last name is required'),
                email: yup
                    .string()
                    .email('Invalid email address'),
                phone: yup
                    .string()
                    .matches(phoneRegExUkraine, 'Invalid phone number')
                    .required('Phone number is required'),
                address: yup
                    .string()
                    .required('Address is required')
            })}

            onSubmit={(values) => {
                dispatch(setSuccess(true))
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
                        <CheckoutRowStyle>
                            <InputBlockStyle>
                                <LabelStyle htmlFor="firstName">First Name</LabelStyle>
                                <Field
                                    type={'text'}
                                    name={'firstName'}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder='Enter your first name'
                                    value={values.firstName}/>
                                {touched.firstName && errors.firstName && <ErrorMessage name='firstName'>{error => <Error>{error}</Error>}</ErrorMessage>}
                            </InputBlockStyle>
                            <InputBlockStyle>
                                <LabelStyle htmlFor="lastName">Last Name</LabelStyle>
                                <Field
                                    type={'text'}
                                    name={'lastName'}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder='Enter your last name'
                                    value={values.lastName}/>
                                {touched.lastName && errors.lastName && <ErrorMessage name='lastName'>{error => <Error>{error}</Error>}</ErrorMessage>}
                            </InputBlockStyle>
                        </CheckoutRowStyle>
                        <CheckoutRowStyle>
                            <InputBlockStyle>
                                <LabelStyle htmlFor="email">Email</LabelStyle>
                                <Field
                                    type={'text'}
                                    name={'email'}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder='Enter your email'
                                    value={values.email}/>
                                {touched.email && errors.email && <ErrorMessage name='email'>{error => <Error>{error}</Error>}</ErrorMessage>}
                            </InputBlockStyle>
                            <InputBlockStyle>
                                <LabelStyle htmlFor="phone">Phone</LabelStyle>
                                <Field
                                    type={'text'}
                                    name={'phone'}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder='Enter your phone'
                                    value={values.phone}/>
                                {touched.phone && errors.phone && <ErrorMessage name='phone'>{error => <Error>{error}</Error>}</ErrorMessage>}
                            </InputBlockStyle>
                        </CheckoutRowStyle>
                        <AddressInputBlockStyle>
                            <LabelStyle htmlFor="address">Address</LabelStyle>
                            <Field
                                type={'text'}
                                name={'address'}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder='Enter your address'
                                value={values.address}/>
                            {touched.address && errors.address && <ErrorMessage name='address'>{error => <Error>{error}</Error>}</ErrorMessage>}
                        </AddressInputBlockStyle>
                    <CartButtonsBlockStyle>
                        <CartButtonStyle
                            onClick={onCheckoutBackClick}>Go Back</CartButtonStyle>
                        <CartButtonStyle disabled={!dirty} onClick={handleSubmit} type='submit'>Continue</CartButtonStyle>
                    </CartButtonsBlockStyle>
                </Form>)
            }}
        </Formik>
    );
}

export default Checkout;