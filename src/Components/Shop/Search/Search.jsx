import './Search.css';
import Header from "../../Header/Header";
import Banner from "../../Banner/Banner";
import Preloader from "../../../Common/Preloader";
import ProductCard from "../ProductCard/ProductCard";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {setFoundProduct, toggleIsFetching} from "../../../data/reducers/shopReducer";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Search = () => {
    let foundProducts = useSelector(state => state.shop.foundProducts);
    let searchingWord = useSelector(state => state.shop.searchingWord);
    let isFetching = useSelector(state => state.shop.isFetching);
    let dispatch = useDispatch();
    let navigation = useNavigate();

    useEffect(() => {
        dispatch(toggleIsFetching(true));
        axios.get(`https://api.escuelajs.co/api/v1/products/?title=${searchingWord}`)
            .then(response => {
                console.log(response.data);
                    dispatch(setFoundProduct(response.data));
                    dispatch(toggleIsFetching(false));
                console.log(foundProducts);
            })
            .catch(function (error) {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                    alert('Server error. Try refreshing the page or returning to the main page');
                    window.location.reload();
                } else if (error.request) {
                    console.log(error.request);
                    alert('Server error. Try refreshing the page or returning to the main page');
                    window.location.reload();
                } else {
                    console.log('Error', error.message);
                    alert('Server error. Try refreshing the page or returning to the main page');
                    window.location.reload();
                }
                console.log(error.config);
            });
    }, [searchingWord]);

    const backToAllProducts = () => {
        navigation('/all')
    }

    return (
        <div className='Search'>
            <Header/>
            <Banner/>
            <div className='shop'>
                <div onClick={() => backToAllProducts()} className='backToAllProducts'>Back to all products</div>
                <div className='products'>
                    {
                        !isFetching ? foundProducts.map(product => <ProductCard key={product.id} product={product}/>) : <Preloader/>
                    }
                    {
                        !isFetching && foundProducts.length === 0 ? <div className='not-found-product'>Sorry, this product is not found</div> : foundProducts.map(product => <ProductCard key={product.id} product={product}/>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Search;