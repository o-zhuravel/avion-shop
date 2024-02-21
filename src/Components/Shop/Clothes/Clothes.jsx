import '../shop.css';
import Header from "../../Header/Header";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {setClothes, toggleIsFetching} from "../../../data/reducers/shopReducer";
import axios from "axios";
import Preloader from "../../../Common/Preloader";
import ProductCard from "../ProductCard/ProductCard";
import { v4 as uuidv4 } from 'uuid';
import Banner from "../../Banner/Banner";

const Clothes = () => {
    let clothes = useSelector(state => state.shop.clothes);
    let isFetching = useSelector(state => state.shop.isFetching);
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(toggleIsFetching(true));
        axios.get('https://api.escuelajs.co/api/v1/products/?categoryId=1')
            .then(response => {
                dispatch(setClothes(response.data));
                dispatch(toggleIsFetching(false));
                console.log(clothes)
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
    }, []);

    return (
        <div className='Clothes'>
            <Header/>
            <Banner/>
            <div className='shop'>
                {/*<Filters/>*/}
                <div className='products'>
                    {
                        isFetching ? <Preloader/> : clothes.map(product => <ProductCard key={uuidv4()} product={product}/>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Clothes;
