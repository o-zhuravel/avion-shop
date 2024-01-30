import './Different.css';
import delivery from "../../assets/image/delivery2.png";
import checkmark from "../../assets/image/checkmark--outline.svg";
import purchase from "../../assets/image/purchase.svg";
import sprout from "../../assets/image/sprout.svg";

const Different = () => {
    return (
        <div className='different-container'>
            <h3>What makes our brand different</h3>
            <div className='different'>
                <div>
                    <img src={delivery} alt='delivery'/>
                    <div>Next day as standard</div>
                    <div>Order before 3pm and get your order
                        the next day as standard</div>
                </div>
                <div>
                    <img src={checkmark} alt='checkmark'/>
                    <div>Made by true artisans</div>
                    <div>Handmade crafted goods made with
                        real passion and craftmanship</div>
                </div>
                <div>
                    <img src={purchase} alt='purchase'/>
                    <div>Unbeatable prices</div>
                    <div>For our materials and quality you won’t find better prices anywhere</div>
                </div>
                <div>
                    <img src={sprout} alt='sprout'/>
                    <div>Recycled packaging</div>
                    <div>We use 100% recycled packaging to ensure our footprint is manageable</div>
                </div>
            </div>
        </div>
    )
}

export default Different;