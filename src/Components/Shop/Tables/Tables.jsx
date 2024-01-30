import './Tables.css';
import Header from "../../Header/Header";

const Tables = () => {
    return (
        <div className='Tables'>
            <Header/>
            <div className='header-image'>All products</div>
            <div className='shop'>
                <div className='filters'>FILTERS</div>
                <div className='products'>Tables</div>
            </div>
        </div>
    )
}

export default Tables;