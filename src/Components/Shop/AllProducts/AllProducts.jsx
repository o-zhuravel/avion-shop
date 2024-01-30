import './AllProducts.css';
import Header from "../../Header/Header";

const AllProducts = () => {
    return (
        <div className='All-products'>
            <Header/>
            <div className='header-image'>All products</div>
            <div className='shop'>
                <div className='filters'>FILTERS</div>
                <div className='products'>PRODUCTS</div>
            </div>
        </div>
    )
}

export default AllProducts;