import './Banner.css';
import close from '../../assets/image/close.svg';

const Banner = () => {

    return (
        <div className='Banner'>
            <div className='banner-text'>Free delivery on all orders over £50 with code easter checkout</div>
            <img src={close} alt='close'/>
        </div>
    )
}

export default Banner;