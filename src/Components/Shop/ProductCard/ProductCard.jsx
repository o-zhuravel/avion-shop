import './ProductCard.css';
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import addToCart from '../../../assets/image/add-to-cart.svg';
import {setProductsInCart, updateLS} from "../../../data/reducers/cartReducer";

const ProductCard = (props) => {

    let productsInCart = useSelector(state => state.cart.productsInCart)
    let dispatch = useDispatch();
    let navigate = useNavigate();
    const ShowMoreHandler = () => {
        navigate(`/all/${props.product.id}`)
    }

    const AddProductInCartHandler = () => {
        dispatch(setProductsInCart(props.product));
        console.log(productsInCart)
        dispatch(updateLS())
    }

    return (
        <div className='product-card'>
            <div className='photo'>
                <img src={props.product.images[0]} alt={props.product.title}/>
            </div>
            <h2>{props.product.title}</h2>
            <h3>{props.product.price}$</h3>
            <div className='buttons-container'>
                <button onClick={ShowMoreHandler}>Show more info</button>
                <button onClick={AddProductInCartHandler}><img src={addToCart} alt='addToCart'/></button>
            </div>

        </div>
    )
}

export default ProductCard;