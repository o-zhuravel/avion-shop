import Header from "../Header/Header";
import rightPhoto from '../../assets/image/rightImage.png';
import './Home.css';
import rightImage from '../../assets/image/rightImage2.png';
import Different from "../Different/Different";
import Join from "../Join/Join";
import {useNavigate} from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();

    return (
        <div className='Home'>
            <Header/>
            <div className='pres-cont'>
            <div className='presentation'>

                    <div className='presentation-container'>
                        <div>The furniture brand for the future, with timeless designs</div>
                        <div className='view-collection-btn' onClick={() => navigate('/all')}>View collection</div>
                        <div className='new-era'>A new era in eco friendly furniture with Avelon, the French luxury retail brand
                            with nice fonts, tasteful colors and a beautiful way to display things digitally
                            using modern web technologies.</div>
                    </div>
                    <img src={rightPhoto} alt='photo'/>
                </div>
            </div>

            <Different/>

            <div className='new-products'>
                <h2>New products</h2>
            </div>

            <div className='popular-products'>
                <h2>Our popular products</h2>
            </div>

            <Join/>

            <div className='story-container'>
                <div className='story'>
                    <div>From a studio in London to a global brand with
                        over 400 outlets</div>
                    <div>When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.</div>
                    <div>Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</div>
                    <div onClick={() => navigate('/our_story')}>Get in touch</div>
                </div>
                <img src={rightImage} alt='rightImage'/>
            </div>

        </div>
    )
}

export default Home;