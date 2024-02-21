import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice( {
    name: 'cart',
    initialState: {
        productsInCart: [],
        isFetching: false,
        subtotal: 0,
    },
    reducers: {
        setProductsInCart(state, action) {
            let {id} = action.payload;
            let productInCart = {...action.payload, counter: 1};
            if (!state.productsInCart.some(product => product.id === id)) {
                return {...state, productsInCart: [...state.productsInCart, productInCart]}
            } else {
                state.productsInCart.forEach(el => {
                    if (el.id === id) {
                        el.counter += 1;
                    }
                });
            }
        },
        setCounter(state, action) {
            let {id} = action.payload;
            state.productsInCart.forEach(el => {
                if (el.id === id) {
                    el.counter += 1;
                }
            });
        },
        setCounterFromCart(state, action) {
            let id = action.payload.id;
            console.log(id);
            state.productsInCart.forEach(el => {
                if (el.id === id) {
                    el.counter = action.payload.count;
                    console.log(el.counter);
                }
            });
        },
        removeProductAtCart(state, action) {
            let id = action.payload;
            return {...state, productsInCart: [...state.productsInCart.filter(el => el.id !== id)]}
        },
        synchronizationWithLS(state) {
            if (localStorage.getItem('productsInCart') === null) {
                return {...state}
            }
            else {
                let prodInCartLS = JSON.parse(localStorage.getItem('productsInCart'));
                return {...state, productsInCart: prodInCartLS}
            }
        },
        updateLS(state) {
            localStorage.setItem('productsInCart', JSON.stringify(state.productsInCart));
        },
        calculateTotalPerProduct (state, action) {
            let id = action.payload.id;
            console.log(id);
            state.productsInCart.forEach(el => {
                if (el.id === id) {
                    el.totalPrice = action.payload.counter * action.payload.price;
                    console.log(el.totalPrice);
                }
            });
        },
        calculateSubtotal (state) {
            let sum = 0;
            state.productsInCart.forEach(el => {
                sum += el.totalPrice;
            });
            console.log(sum);
            return {...state, subtotal: sum}
        },
    }
})

export const {setProductsInCart, setCounter, removeProductAtCart, synchronizationWithLS
    , updateLS, setCounterFromCart, calculateTotalPerProduct, calculateSubtotal, } = cartSlice.actions;
export default cartSlice.reducer;