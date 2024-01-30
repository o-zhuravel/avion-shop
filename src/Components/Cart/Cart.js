import './Cart.css';
import Header from "../Header/Header";

const Cart = () => {
    return (
      <div className='Cart'>
          <Header/>
          <div className='cart-container'>
              <div className='title-cart'>Your shopping cart</div>
          </div>
      </div>
    )
}

export default Cart;