import './Header.css';
import search from '../../assets/image/search.svg';
import cart from '../../assets/image/shopping--cart.svg';
import profile from '../../assets/image/user--avatar.svg';
import menu from '../../assets/image/menu.svg';
import {useRef, useState} from "react";
import {NavLink} from "react-router-dom";

const Header = () => {

    let [bodyW, setBodyW] = useState(window.innerWidth);

    window.addEventListener('resize', () => {
        let windowWidth = window.innerWidth;
        setBodyW(windowWidth);
        console.log(window.innerWidth)
    });

    console.log(bodyW);

    let menuDiv = useRef();

    function showMenu () {
            menuDiv.current.style.display = 'block';
    }

    function closeMenu () {
        menuDiv.current.style.display = 'none';
    }

    if (bodyW > 500) {
        return (
            <div className='Header'>
                <div className='header-top'>
                    <img src={search} alt='search'/>
                    <NavLink to='/'><div className='logo'>Avion</div></NavLink>
                    <div className='user-container'>
                        <NavLink to='/cart'><img src={cart} alt='cart'/></NavLink>
                        <img src={profile} alt='user'/>
                    </div>
                </div>
                <div className='header-bottom'>
                    <NavLink to='/all'><div className='category-item'>All</div></NavLink>
                    <NavLink to='/chairs'><div className='category-item'>Chairs</div></NavLink>
                    <NavLink to='/tables'><div className='category-item'>Tables</div></NavLink>
                    <NavLink to='/tableware'><div className='category-item'>Tableware</div></NavLink>
                    <NavLink to='/ceramics'><div className='category-item'>Ceramics</div></NavLink>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className='Header-shot'>
               <div className='logo-text-shot'>Avion</div>
                <div className='menu-container'>
                    <img src={search} alt='search'/>
                    <img src={menu} alt='menu' onClick={showMenu}/>
                </div>
                <div className='menu' ref={menuDiv}>
                    <NavLink to='/all'><div className='category-item'>All</div></NavLink>
                    <NavLink to='/chairs'><div className='category-item'>Chairs</div></NavLink>
                    <NavLink to='/tables'><div className='category-item'>Tables</div></NavLink>
                    <NavLink to='/tableware'><div className='category-item'>Tableware</div></NavLink>
                    <NavLink to='/ceramics'><div className='category-item'>Ceramics</div></NavLink>
                    <div onClick={closeMenu}>X</div>
                </div>
            </div>
        )
    }


}

export default Header;