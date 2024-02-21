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
                    <div>Safe and fast delivery of every order. </div>
                    <div>Our delivery service operates efficiently, so you can enjoy your new items as soon as possible.</div>
                </div>
                <div>
                    <img src={checkmark} alt='checkmark'/>
                    <div>Special attention to quality and comfort. </div>
                    <div>All our clothing is made from high-quality materials.</div>
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