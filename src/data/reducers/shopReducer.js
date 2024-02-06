import {createSlice} from "@reduxjs/toolkit";

const shopSlice = createSlice({
    name: 'shop',
    initialState: {
        products: [],
        sortProducts: [],
        foundProducts: [],
        clothes: [],
        shoes: [],
        furniture: [],
        electronics: [],
        isFiltering: false,
        isSorting: false,
        isFetching: false,
        searchingWord: '',
    },
    reducers: {
        setProducts(state, action) {
            return {...state, products: [...action.payload]}
        },
        setClothes(state, action) {
            return {...state, clothes: [...action.payload]}
        },
        setShoes(state, action) {
            return {...state, shoes: [...action.payload]}
        },
        setFurniture(state, action) {
            return {...state, furniture: [...action.payload]}
        },
        setElectronics(state, action) {
            return {...state, electronics: [...action.payload]}
        },
        toggleIsFetching(state, action) {
            return {...state, isFetching: action.payload}
        },
        setSorting(state, action) {
            console.log(action.payload)
            return {...state, isSorting: action.payload}
        },
        setSortingProducts(state, action) {
            console.log('do sort');
            console.log(action.payload);
            switch (action.payload) {
                case "1":
                    console.log('case 1');
                    return {
                        ...state, sortProducts: state.products.slice().sort((a, b) => {
                            if (a.price < b.price) {
                                console.log('-1')
                                return -1
                            }
                            if (a.price > b.price) {
                                console.log('1')
                                return 1
                            } else {
                                console.log('0');
                                return 0;
                            }
                        })
                    };
                case "2":
                    console.log('case 2');
                    return {
                        ...state, sortProducts: state.products.slice().sort((a, b) => {
                            if (a.price > b.price) {
                                console.log('-1')
                                return -1
                            }
                            if (a.price < b.price) {
                                console.log('1')
                                return 1
                            } else {
                                console.log('0');
                                return 0;
                            }
                        })
                    };
                case "3":
                    console.log('case 3');
                    return {
                        ...state, sortProducts: state.products.slice().sort((a, b) => {
                            if (a.category.id > b.category.id) {
                                console.log('-1')
                                return -1
                            }
                            if (a.category.id < b.category.id) {
                                console.log('1')
                                return 1
                            } else {
                                console.log('0');
                                return 0;
                            }
                        })
                    };
                default:
                    break;
            }
        },
        setSearchingWord(state, action) {
            return {...state, searchingWord: action.payload}
        },
        setFoundProduct(state, action) {
            return {...state, foundProducts: [...action.payload]}
        },

    }
})

export const {setProducts,setClothes,
    setShoes, setFurniture, setElectronics
    , toggleIsFetching, setSorting
    , setSortingProducts, setSearchingWord,
setFoundProduct} = shopSlice.actions;
export default shopSlice.reducer;