import './ProductCardInCart.css';
import {useDispatch} from "react-redux";
import {removeProductAtCart, setCounterFromCart, updateLS, calculateTotalPerProduct} from "../../../data/reducers/cartReducer";
import deleteImg from '../../../assets/image/deleteImg.svg';

const ProductCardInCart = (props) => {

    console.log(props.product);

    let dispatch = useDispatch();

    const setCountFromCart = (e) => {
        let actionObj = {
            id: props.product.id,
            count: e.target.value,
        };
        console.log(actionObj);
        dispatch(setCounterFromCart(actionObj));
    }

    const removeFromCart = () => {
        dispatch(removeProductAtCart(props.product.id));
        dispatch(updateLS());
    }

    return (
        <div className='Product-card-in-cart'>
            <div><img src={props.product.images[0]} alt={props.product.title}/></div>
            <div>
                <div>{props.product.title}</div>
                <div>{props.product.price}$</div>
            </div>
            <input type='number' value={props.product.counter} min='1' className='input-counter' onChange={(e) => setCountFromCart(e)}></input>
            <div>{props.product.totalPrice}$</div>
            <div onClick={() => removeFromCart()}><img src={deleteImg} alt='delete' className='delete-img'/></div>
        </div>
    )
}

export default ProductCardInCart;