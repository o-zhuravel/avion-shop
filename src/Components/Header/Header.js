import './Header.css';
import cart from '../../assets/image/shopping--cart.svg';
import profile from '../../assets/image/user--avatar.svg';
import menu from '../../assets/image/menu.svg';
import {useRef, useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setSearchingWord} from "../../data/reducers/shopReducer";

const Header = () => {

    let [bodyW, setBodyW] = useState(window.innerWidth);

    window.addEventListener('resize', () => {
        let windowWidth = window.innerWidth;
        setBodyW(windowWidth);
        console.log(window.innerWidth)
    });

    console.log(bodyW);

    let menuDiv = useRef();

    function toggleMenu () {
        let el = document.querySelector('.menu');
        let st = window.getComputedStyle(el).display;
        console.log(st);
        if (st === 'none') {
            menuDiv.current.style.display = 'block';
        }
        else {
            menuDiv.current.style.display = 'none';
        }
    }

    let dispatch = useDispatch();
    let searchingWord = useSelector(state => state.shop.searchingWord);
    let navigator = useNavigate();

    const searchingHandler = (e) => {
        console.log(e.target.value);
        dispatch(setSearchingWord(e.target.value));
    }

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            searching();
        }
    })

    const searching = () => {
        console.log('search');
        console.log(searchingWord);
        if (searchingWord) {
            navigator('/search')
        }
    }

    let prodInCart = useSelector(state => state.cart.productsInCart.length);

    if (bodyW > 500) {
        return (
            <div className='Header'>
                <div className='header-top'>
                    <div className='search-line'>
                        <input type='text' placeholder='Enter product' onChange={(e) => searchingHandler(e)}/>
                        <div className='btn' onClick={searching}></div>
                    </div>
                    <NavLink to='/'><div className='logo'>Avion</div></NavLink>
                    <div className='user-container'>
                        <div className='whole-cart'>
                            <NavLink to='/cart'><img src={cart} alt='cart'/></NavLink>
                            <div className='number-prod-in-cart'>{prodInCart}</div>
                        </div>
                        <img src={profile} alt='user'/>
                    </div>
                </div>
                <div className='header-bottom'>
                    <NavLink to='/all'><div className='category-item'>All</div></NavLink>
                    <NavLink to='/clothes'><div className='category-item'>Clothes</div></NavLink>
                    <NavLink to='/shoes'><div className='category-item'>Shoes</div></NavLink>
                    <NavLink to='/furniture'><div className='category-item'>Furniture</div></NavLink>
                    <NavLink to='/electronics'><div className='category-item'>Electronics</div></NavLink>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className='Header-shot'>
               <div className='logo-text-shot'>Avion</div>
                <div className='menu-container'>
                    <div className='search-line'>
                        <input type='text' placeholder='Enter product' onChange={(e) => searchingHandler(e)}/>
                        <div className='btn' onClick={searching}></div>
                    </div>
                    <img src={menu} alt='menu' onClick={toggleMenu}/>
                </div>
                <div className='menu' ref={menuDiv}>
                    <NavLink to='/'><div className='category-item'>Home</div></NavLink>
                    <NavLink to='/all'><div className='category-item'>All products</div></NavLink>
                    <NavLink to='/clothes'><div className='category-item'>Clothes</div></NavLink>
                    <NavLink to='/shoes'><div className='category-item'>Shoes</div></NavLink>
                    <NavLink to='/furniture'><div className='category-item'>Furniture</div></NavLink>
                    <NavLink to='/electronics'><div className='category-item'>Electronics</div></NavLink>
                    <NavLink to='/cart'><div className='category-item cart-item'>Cart</div></NavLink>
                    <div onClick={toggleMenu} className='close'>X</div>
                </div>
            </div>
        )
    }


}

export default Header;