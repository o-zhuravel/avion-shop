import './ProductCardInCart.css';

const ProductCardInCart = (props) => {

    console.log(props.product)

    return (
        <div className='Product-card-in-cart'>
            <div><img src={props.product.images[0]} alt={props.product.title}/></div>
            <div>
                <div>{props.product.title}</div>
                <div>{props.product.price}$</div>
            </div>
            <div>{props.product.counter}</div>
            <div>{props.product.price * props.product.counter}$</div>
        </div>
    )
}

export default ProductCardInCart;