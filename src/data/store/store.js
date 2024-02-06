import {configureStore} from "@reduxjs/toolkit";
import shopReducer from "../reducers/shopReducer";
import selectProductReducer from "../reducers/selectProductReducer";
import cartReducer from "../reducers/cartReducer";

let store = configureStore({
    reducer: {
        shop: shopReducer,
        selectProduct: selectProductReducer,
        cart: cartReducer,
    }
})

export default store;