import React from 'react'
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react'
import { remove, increment, decrement } from '../reduxStore/actions.js';
import { useSelector } from 'react-redux';

function Cart() {



    return ( <div className = "Cart" >
        <h1>Shopping Cart</h1>

        </div>
    );
}

export default Cart;
