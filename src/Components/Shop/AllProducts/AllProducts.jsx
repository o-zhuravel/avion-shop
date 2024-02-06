import './AllProducts.css';
import Header from "../../Header/Header";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {setProducts, toggleIsFetching} from "../../../data/reducers/shopReducer";
import Preloader from "../../../Common/Preloader";
import ProductCard from "../ProductCard/ProductCard";
import Banner from "../../Banner/Banner";
import Filters from "../Filters/Filters";

const AllProducts = () => {
    let allProducts = useSelector(state => state.shop.products);
    let sortProducts = useSelector(state => state.shop.sortProducts);
    let isFetching = useSelector(state => state.shop.isFetching);
    let isSorting = useSelector(state => state.shop.isSorting);
    let dispatch = useDispatch();

    useEffect(() => {
            dispatch(toggleIsFetching(true));
            axios.get('https://api.escuelajs.co/api/v1/products')
                .then(response => {
                    dispatch(setProducts(response.data.splice(0, 43)));
                    dispatch(toggleIsFetching(false));
                    console.log(allProducts)

                })
    }, [isSorting]);



    console.log(isSorting)
    console.log(sortProducts)

   if (isSorting === false) {return (
        <div className='All-products'>
            <Header/>
            <Banner/>
            <div className='shop'>
                <Filters/>
                <div className='products'>
                    {
                        isFetching ? <Preloader/> : allProducts.map(product => <ProductCard key={product.id} product={product}/>)
                    }
                </div>
            </div>
        </div>
    )}
   else { return (
       <div className='All-products'>
           <Header/>
           <Banner/>
           <div className='shop'>
               <Filters/>
               <div className='products'>
                   {
                       isFetching ? <Preloader/> : sortProducts.map(product => <ProductCard key={product.id} product={product}/>)
                   }
               </div>
           </div>
       </div>
   )

   }
}

export default AllProducts;