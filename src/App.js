import './App.css';
import {Route, Routes} from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Our_story from "./Components/Our_story/Our_story";
import Cart from "./Components/Cart/Cart";
import AllProducts from "./Components/Shop/AllProducts/AllProducts";
import Clothes from "./Components/Shop/Clothes/Clothes";

import Electronics from "./Components/Shop/Electronics/Electronics";
import Shoes from "./Components/Shop/Shoes/Shoes";
import Furniture from "./Components/Shop/Furniture/Furniture";

import Product from "./Components/Shop/Product/Product";
import {useDispatch, useSelector} from "react-redux";
import {synchronizationWithLS} from "./data/reducers/cartReducer";
import {useEffect} from "react";
import Checkout from "./Components/Checkout/Checkout";
import Search from "./Components/Shop/Search/Search";

function App() {

    let productsInCart = useSelector(state => state.cart.productsInCart);
    console.log(productsInCart);
    let dispatch = useDispatch();

    useEffect(() => {
            dispatch(synchronizationWithLS());
            console.log(localStorage.getItem('productsInCart'));
            console.log(productsInCart);
        }
    ,[])

  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/*' element={<div>Error</div>}/>
          <Route path='/our_story' element={<Our_story/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/all' element={<AllProducts/>}/>

          <Route path='/clothes' element={<Clothes/>}/>
          <Route path='/shoes' element={<Shoes/>}/>
          <Route path='/furniture' element={<Furniture/>}/>
          <Route path='/electronics' element={<Electronics/>}/>

          <Route path='/all/:productId' element={<Product/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/search' element={<Search/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
