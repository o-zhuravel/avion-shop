import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice( {
    name: 'cart',
    initialState: {
        productsInCart: [],
        isFetching: false,
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
        removeProductAtCart(state, action) {
            let {id} = action.payload;
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
        }
    }
})

export const {setProductsInCart, setCounter, removeProductAtCart, synchronizationWithLS, updateLS} = cartSlice.actions;
export default cartSlice.reducer;