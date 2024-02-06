import './Shoes.css';
import Header from "../../Header/Header";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {setShoes, toggleIsFetching} from "../../../data/reducers/shopReducer";
import axios from "axios";
import Preloader from "../../../Common/Preloader";
import ProductCard from "../ProductCard/ProductCard";
import { v4 as uuidv4 } from 'uuid';
import Filters from "../Filters/Filters";
import Banner from "../../Banner/Banner";

const Shoes = () => {
    let shoes = useSelector(state => state.shop.shoes);
    let isFetching = useSelector(state => state.shop.isFetching);
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(toggleIsFetching(true));
        axios.get('https://api.escuelajs.co/api/v1/products/?categoryId=4')
            .then(response => {
                dispatch(setShoes(response.data));
                dispatch(toggleIsFetching(false));
                console.log(shoes)
            })
    }, []);

    return (
        <div className='Shoes'>
            <Header/>
            <Banner/>
            <div className='shop'>
                {/*<Filters/>*/}
                <div className='products'>
                    {
                        isFetching ? <Preloader/> : shoes.map(product => <ProductCard key={uuidv4()} product={product}/>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Shoes;