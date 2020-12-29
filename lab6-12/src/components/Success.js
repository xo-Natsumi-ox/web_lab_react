import React, {useEffect} from "react";
import {setSuccess} from "../redux/checkoutSlice";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {clear} from "../redux/cartSlice";
import success from '../images/success.png'
import {
    SuccessButtonStyle,
    SuccessImgStyle,
    SuccessParagraphStyle,
    SuccessStyle,
    SuccessTitleStyle
} from "../styles/Success.styled";

function Success() {

    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            dispatch(setSuccess(false));
            dispatch(clear());
        }
    }, [dispatch])

    return (
        <SuccessStyle>
            <SuccessImgStyle src={success}/>
            <h3>Success!</h3>
            <SuccessParagraphStyle>Your order was sent to processing!</SuccessParagraphStyle>
            <SuccessParagraphStyle>Check your email box for further information.</SuccessParagraphStyle>
            <Link to="/catalog">
                <SuccessButtonStyle>Go back to Catalog</SuccessButtonStyle>
            </Link>
        </SuccessStyle>
    )
}

export default Success;