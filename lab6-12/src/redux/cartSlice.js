import {createSlice} from "@reduxjs/toolkit";
import {getClothesById} from "../store/axios";

export const cartSlice = createSlice({
    name: "cartReducer",
    initialState: {
        cartItems: [],
        totalPrice: 0,
    },
    reducers: {
        increment: (store, action) => {
            store.cartItems = store.cartItems.map((item) => {
                if (item.id === action.payload) {
                    item.quantity += 1;
                }
                return item;
            });
            store.totalPrice = countTotalPrice(store);
        },
        decrement: (store, action) => {
            store.cartItems = store.cartItems.map((item) => {
                if (item.id === action.payload) {
                    item.quantity -= 1;
                }
                return item;
            });
            store.totalPrice = countTotalPrice(store);
        },
        deleteItem: (store, action) => {
            store.cartItems = store.cartItems.filter(item => {
                return item.id !== action.payload;
            });
            store.totalPrice = countTotalPrice(store);
        },
        add: (store, action) => {
            let addToArray = true;
            store.cartItems.forEach(item => {
                if (item.id === action.payload.id) {
                    item.quantity += 1;
                    addToArray = false;
                }
            })
            if (addToArray) {store.cartItems.push({...action.payload, quantity: 1});}
            store.totalPrice = countTotalPrice(store);
        },
        clear: (store, action) => {
            store.cartItems = [];
            store.totalPrice = countTotalPrice(store);
        }
    }
});

function countTotalPrice(store) {
    let totalPrice = 0;
    store.cartItems.forEach((item) => {
        totalPrice += item.quantity * item.price
    })
    return totalPrice;
}

export default cartSlice.reducer

const {increment, decrement, deleteItem, clear, add} = cartSlice.actions;
export {increment, decrement, deleteItem, clear}

export const getTotalPrice = (store) => store.cartReducer.totalPrice;
export const getCartItems = (store) => store.cartReducer.cartItems;

export const addToCartAsync = (id) => (dispatch) => {
    getClothesById(id).then(item => {
        dispatch(add(item))
    })
};