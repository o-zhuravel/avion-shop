import {createSlice} from "@reduxjs/toolkit";

const selectProductSlice = createSlice({
    name: 'selectProduct',
    initialState: {
        product: {},
        isFetching : false,
    },
    reducers: {
        setProduct (state, action) {
            return {...state, product: action.payload}
        },
        toggleFetching(state, action) {
            return {...state, isFetching: action.payload}
        }
    }
})

export const {setProduct, toggleFetching} = selectProductSlice.actions;
export default selectProductSlice.reducer;