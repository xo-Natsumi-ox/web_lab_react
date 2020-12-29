import React, {useEffect} from 'react';
import {ContainerStyle} from "../styles/General.styled"
import Header from "../components/Header";
import { 
    CartButtonsBlockStyle, CartButtonStyle, CartItemsUlStyle, CartTitleStyle, CartTotalPriceStyle
} from "../styles/Cart.styled";
import {Link} from "react-router-dom";
import CartItem from "../components/CartItem";
import {useDispatch, useSelector} from "react-redux";
import {getCartItems, getTotalPrice} from "../redux/cartSlice";
import {getCheckout, getSuccess, setCheckout} from "../redux/checkoutSlice";
import Checkout from "../components/Checkout";
import Success from "../components/Success";

function Cart() {

    useEffect(()=>{
        console.log()
    })
    let totalPrice = useSelector(getTotalPrice);
    let cartItems = useSelector(getCartItems);
    let checkout = useSelector(getCheckout);
    let success = useSelector(getSuccess);

    const dispatch = useDispatch();

    function onCartContinueClick() {
        dispatch(setCheckout(true));
    }

    switch (true) {
        case success:
            return (
                <>
                    <Header search={false}/>
                        <ContainerStyle>
                            <Success/>
                        </ContainerStyle>
                </>
            );
        case checkout:
            return (
                <>
                    <Header search={false}/>
                        <ContainerStyle>
                            <CartTitleStyle>Checkout</CartTitleStyle>
                            <Checkout/>
                        </ContainerStyle>
                </>
            );

        default:
            return (
                <>
                    <Header search={false}/>
                        <ContainerStyle>

                            <CartTitleStyle>Shopping Cart</CartTitleStyle>
                                <CartItemsUlStyle>
                                    {cartItems.map((item) => (
                                        <CartItem key={item.id} item={item}/>
                                    ))}

                                </CartItemsUlStyle>
                                <CartTotalPriceStyle>Total price: {totalPrice}UAH</CartTotalPriceStyle>
                            <CartButtonsBlockStyle>
                                <Link to="/catalog">
                                    <CartButtonStyle>Back to Catalog</CartButtonStyle>
                                </Link>
                                <CartButtonStyle onClick={onCartContinueClick}>Continue</CartButtonStyle>
                            </CartButtonsBlockStyle>
                        </ContainerStyle>
                </>
            );
    }
}

export default Cart;