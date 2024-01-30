import './Chairs.css';
import Header from "../../Header/Header";
import {NavLink} from "react-router-dom";

const Chairs = () => {
    return (
        <div className='Chairs'>
            <Header/>
            <NavLink to='/all'><div>To all products</div></NavLink>
            <div className='shop'>
                <div className='filters'>FILTERS</div>
                <div className='products'>CHAIRS</div>
            </div>
        </div>
    )
}

export default Chairs;
