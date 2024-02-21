import './Product.css';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect} from "react";
import axios from "axios";
import {toggleFetching, setProduct} from "../../../data/reducers/selectProductReducer";
import Preloader from "../../../Common/Preloader";
import Header from "../../Header/Header";

const Product = () => {
    let selectProduct = useSelector(state => state.selectProduct.product);
    let isFetching = useSelector(state => state.selectProduct.isFetching);
    let dispatch = useDispatch();
    let navigation = useNavigate();
    let selectProductId = useParams();

    let id = selectProductId.productId;
    console.log(id)

    useEffect(() => {
        dispatch(toggleFetching(true));
        axios.get(`https://api.escuelajs.co/api/v1/products/${id}`)
            .then(response => {
                console.log(response);
                dispatch(setProduct(response.data));
                dispatch(toggleFetching(false));
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

    console.log(selectProduct);

    const backToAllProducts = () => {
        navigation('/all')
    }

    return (
            isFetching ? <Preloader/> : <div className='product'>
            {/*<img src={selectProduct.images[0]} decoding='async' alt={selectProduct.title}/>*/}
                <Header/>
                <div onClick={() => backToAllProducts()} className='backToAllProducts'>Back to all products</div>
                <div className='product-info'>
                    <div id="carouselExample" className="carousel slide">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="https://i.imgur.com/cBuLvBi.jpeg" className="d-block w-100" alt="one"/>
                            </div>
                            <div className="carousel-item">
                                <img src="https://i.imgur.com/cBuLvBi.jpeg" className="d-block w-100" alt="two"/>
                            </div>
                            <div className="carousel-item">
                                <img src="https://i.imgur.com/cBuLvBi.jpeg" className="d-block w-100" alt="three"/>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div className='description'>
                        <h2>{selectProduct.title}</h2>
                        <h3>Price: {selectProduct.price}$</h3>
                        <p>{selectProduct.description}</p>
                    </div>
                </div>

        </div>
    )
}

export default Product;