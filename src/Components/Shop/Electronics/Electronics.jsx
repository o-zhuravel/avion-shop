import './Electronics.css'

import Header from "../../Header/Header";
import Preloader from "../../../Common/Preloader";
import ProductCard from "../ProductCard/ProductCard";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {setElectronics, setProducts, toggleIsFetching} from "../../../data/reducers/shopReducer";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import Filters from "../Filters/Filters";
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
