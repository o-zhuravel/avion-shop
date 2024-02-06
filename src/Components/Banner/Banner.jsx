import './Banner.css';
import close from '../../assets/image/close-square.svg';
import {useState} from "react";

const Banner = () => {

    let [hidden, setHidden] = useState(false)
    let hiddenBanner = () => {
        setHidden(true)
    }
    console.log(hidden)

    return (
        hidden ?  <div></div> :
        <div className='Banner'>
            <div className='banner-text'>Free delivery on all orders over $50 with code easter checkout</div>
            <div onClick={hiddenBanner}><img src={close} alt='close' /></div>
        </div>
    )
}

export default Banner;