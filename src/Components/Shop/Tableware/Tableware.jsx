import './Tableware.css';
import Header from "../../Header/Header";

const Tableware = () => {
    return (
        <div className='Tableware'>
            <Header/>
            <div className='header-image'>All products</div>
            <div className='shop'>
                <div className='filters'>FILTERS</div>
                <div className='products'>Tableware</div>
            </div>
        </div>
    )
}

export default Tableware;