import '../shop.css';

import Header from "../../Header/Header";
import Preloader from "../../../Common/Preloader";
import ProductCard from "../ProductCard/ProductCard";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {setElectronics, toggleIsFetching} from "../../../data/reducers/shopReducer";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import Banner from "../../Banner/Banner";

const Electronics = () => {
    let electronics = useSelector(state => state.shop.electronics);
    let isFetching = useSelector(state => state.shop.isFetching);
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(toggleIsFetching(true));
        axios.get('https://api.escuelajs.co/api/v1/products/?categoryId=2')
            .then(response => {
                dispatch(setElectronics(response.data));
                dispatch(toggleIsFetching(false));
                console.log(electronics)
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
        <div className='Electronics'>
            <Header/>
            <Banner/>
            <div className='shop'>
                {/*<Filters/>*/}
                <div className='products'>
                    {
                        isFetching ? <Preloader/> : electronics.map(product => <ProductCard key={uuidv4()} product={product}/>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Electronics;
