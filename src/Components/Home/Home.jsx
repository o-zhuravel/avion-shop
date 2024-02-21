import Header from "../Header/Header";
import rightPhoto from '../../assets/image/rightPhoto2.jpg';
import './Home.css';
import rightImage from '../../assets/image/rightPhoto.jpg';
import Different from "../Different/Different";
import Join from "../Join/Join";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import ProductCard from "../Shop/ProductCard/ProductCard";
import {useEffect} from "react";
import {setProducts, toggleIsFetching} from "../../data/reducers/shopReducer";
import axios from "axios";

const Home = () => {

    const navigate = useNavigate();

    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(toggleIsFetching(true));
        axios.get('https://api.escuelajs.co/api/v1/products')
            .then(response => {
                dispatch(setProducts(response.data.splice(0, 43)));
                dispatch(toggleIsFetching(false));
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

    let newProducts = useSelector(state => state.shop.products).slice(0, 4);

    return (
        <div className='Home'>
            <Header/>
            <div className='pres-cont'>
            <div className='presentation'>

                    <div className='presentation-container'>
                        <div>The brand for the future, with timeless designs</div>
                        <div className='view-collection-btn' onClick={() => navigate('/all')}>View collection</div>
                        <div className='new-era'>This business originated from a desire to provide people not only with quality
                            clothing but also with the opportunity to express their uniqueness through style.
                            It all began with the idea of enriching the fashion market with authentic and
                            creative solutions in clothing.</div>
                    </div>
                    <div className='img-container'><img src={rightPhoto} alt='photo'/></div>
                </div>
            </div>

            <Different/>

            <div className='new-products'>
                <h2>New products</h2>
                <div className='new-prod-container'>
                    {
                        newProducts.map(product => <ProductCard key={product.id + 100} product={product}/>)
                    }
                </div>
            </div>

            <Join/>

            <div className='story-container'>
                <div className='story'>
                    <div>From a studio in London to a global brand with
                        over 400 outlets</div>
                    <div>The initial steps included creating unique designs, selecting high-quality fabrics, and establishing mutually beneficial relationships with suppliers. An essential part of the business's development was attracting talented designers and fashion experts.</div>
                    <div>Over time, the brand gained recognition for its originality and became popular among those who appreciate quality and style. The initial idea of expressive clothing for self-expression evolved into a successful business that continues to inspire and impress its customers.</div>
                    <a href='https://www.instagram.com/' target='_blank'>View our instagram</a>
                </div>
                <div className='rightImage'><img src={rightImage} alt='rightImage'/></div>
            </div>

        </div>
    )
}

export default Home;