import './Cart.css';
import Header from "../Header/Header";
import {useDispatch, useSelector} from "react-redux";
import ProductCardInCart from "./ProductCardInCart/ProductCardInCart";
import { v4 as uuidv4 } from 'uuid';
import {useNavigate} from "react-router-dom";

const Cart = () => {

    let productsInCart = useSelector(state => state.cart.productsInCart)
    let dispatch = useDispatch();
    let navigate = useNavigate();

    console.log(productsInCart)

    return (
      <div className='Cart'>
          <Header/>
          <div className='cart-container'>
              <div className='title-cart'>Your shopping cart</div>
              <div className='products-in-cart-container'>
                  {
                      productsInCart === [] ? <div>is empty</div>
                          : <div>
                                  <div className='header-cart-table'>
                                     <div>Product</div>
                                      <div>Quantity</div>
                                      <div>Total</div>
                                  </div>
                              {
                                  productsInCart.map(prodInCart => <ProductCardInCart key={uuidv4()} product={prodInCart}/>)
                              }
                              <div className='footer-cart-table'>
                                  <div>Subtotal {}</div>
                                  <div>Taxes and shipping are calculated at checkout</div>
                                  <button onClick={() => navigate('/checkout')}>Go to checkout</button>
                              </div>
                          </div>
                  }
              </div>
          </div>
      </div>
    )
}

export default Cart;