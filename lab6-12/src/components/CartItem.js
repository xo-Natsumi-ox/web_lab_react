import React from 'react';
import {
    CartItemButtonStyle, CartItemCounterStyle, CartItemCountNumStyle, CartItemImgStyle,
    CartItemLiStyle, CartItemPriceDeleteBlockStyle, CartItemPriceStyle, CartItemTitleStyle
} from "../styles/CartItem.styled";
import {useDispatch} from "react-redux";
import {decrement, deleteItem, increment} from "../redux/cartSlice";

function CartItem({item}) {
    const dispatch = useDispatch();

    function onMinusClick() {
        if (item.quantity > 1) {
            dispatch(decrement(item.id));
        }
    }

    function onPlusClick() {
        dispatch(increment(item.id));
    }

    function onDeleteClick() {
        dispatch(deleteItem(item.id));
    }

    return (
        <CartItemLiStyle>
            <CartItemImgStyle>
                <img src={item.img} height="100%"/>
                <CartItemTitleStyle>{item.title}</CartItemTitleStyle>
            </CartItemImgStyle>

            <CartItemCounterStyle>
                <CartItemButtonStyle onClick={onMinusClick}>-</CartItemButtonStyle>
                <CartItemCountNumStyle>{item.quantity}</CartItemCountNumStyle>
                <CartItemButtonStyle onClick={onPlusClick}>+</CartItemButtonStyle>
            </CartItemCounterStyle>

            <CartItemPriceDeleteBlockStyle>
                <CartItemPriceStyle>{item.price}UAH</CartItemPriceStyle>
                <CartItemButtonStyle onClick={onDeleteClick}>X</CartItemButtonStyle>
            </CartItemPriceDeleteBlockStyle>
        </CartItemLiStyle>
    );
}

export default CartItem;