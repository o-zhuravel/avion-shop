import './Footer.css';
import linkedin from '../../assets/image/logo--linkedin.svg';
import facebook from '../../assets/image/logo--facebook.svg';
import instagram from '../../assets/image/logo--instagram.svg';
import skype from '../../assets/image/logo--skype.svg';
import twitter from '../../assets/image/logo--twitter.svg';
import pinterest from '../../assets/image/logo--pinterest.svg';
import {useState} from "react";

const Footer = () => {

    let [bodyW, setBodyW] = useState(window.innerWidth);

    window.addEventListener('resize', () => {
        let windowWidth = window.innerWidth;
        setBodyW(windowWidth);
        console.log(window.innerWidth)
    });

    console.log(bodyW);

    if (bodyW > 500) {
        return (
            <div className='Footer'>
                <div className='footer-top'>
                    <div>
                        <div className='logo-text'>Avion</div>
                        <div>21 New York Street</div>
                        <div>New York City</div>
                        <div>United States of America</div>
                        <div>432 34</div>
                    </div>
                    <div>
                        <div>Social links</div>
                        <div className='social'>
                            <img src={linkedin} alt='linkedin'/>
                            <img src={facebook} alt='facebook'/>
                            <img src={instagram} alt='instagram'/>
                            <img src={skype} alt='skype'/>
                            <img src={twitter} alt='twitter'/>
                            <img src={pinterest} alt='pinterest'/>
                        </div>
                    </div>
                    <div>
                        <div className='item-name'>Menu</div>
                        <div>New arrivals</div>
                        <div>Best sellers</div>
                        <div>Recently viewed</div>
                        <div>Popular this week</div>
                        <div>All products</div>
                    </div>
                    <div>
                        <div className='item-name'>Categories</div>
                        <div>Crockery</div>
                        <div>Furniture</div>
                        <div>Tableware</div>
                        <div>Plant pots</div>
                        <div>Chairs</div>
                        <div>Crockery</div>
                    </div>
                    <div>
                        <div className='item-name'>Our company</div>
                        <div>About us</div>
                        <div>Vacancies</div>
                        <div>Contact us</div>
                        <div>Privacy</div>
                        <div>Returns policy</div>
                    </div>
                </div>
                <div className='footer-bottom'>Copyright 2022 Avion LTD</div>
            </div>
        )
    }
    else {
        return (
                <div className='Footer-shot'>
                    <div className='Footer-shot-container'>
                        <div>
                            <div className='item-name'>Categories</div>
                            <div>Crockery</div>
                            <div>Furniture</div>
                            <div>Tableware</div>
                            <div>Plant pots</div>
                            <div>Chairs</div>
                            <div>Crockery</div>
                        </div>
                        <div className='social'>
                            <img src={linkedin} alt='linkedin'/>
                            <img src={facebook} alt='facebook'/>
                            <img src={instagram} alt='instagram'/>
                            <img src={skype} alt='skype'/>
                            <img src={twitter} alt='twitter'/>
                            <img src={pinterest} alt='pinterest'/>
                        </div>
                        <div>
                            <div className='item-name'>Menu</div>
                            <div>New arrivals</div>
                            <div>Best sellers</div>
                            <div>Recently viewed</div>
                            <div>Popular this week</div>
                            <div>All products</div>
                        </div>
                        <div>
                            <div className='item-name'>Our company</div>
                            <div>About us</div>
                            <div>Vacancies</div>
                            <div>Contact us</div>
                            <div>Privacy</div>
                            <div>Returns policy</div>
                        </div>
                    </div>
                    <div className='footer-bottom'>Copyright 2022 Avion LTD</div>
                </div>
            )
    }
}

export default Footer;