import './Filters.css';
import {setSorting, setSortingProducts} from "../../../data/reducers/shopReducer";
import {useDispatch, useSelector} from "react-redux";

const Filters = () => {

    let isSorting = useSelector(state => state.shop.isSorting);
    let dispatch = useDispatch();

    const doSorting = (e) => {
        console.log(e.target.value)
        console.log('sort');
        if (e.target.value === '0') {
            dispatch(setSorting(false));
            console.log('isSortingFalse');
            console.log(isSorting)
        } else {
            dispatch(setSorting(true));
            dispatch(setSortingProducts(e.target.value));
        }
    }

    return (
        <div className='filters'>
            <div className='sorting'>
                Sorting by:
                <select onChange={(e)=> doSorting(e)}>
                    <option value='0'>---</option>
                    <option value='1'>Cheap at first</option>
                    <option value='2'>Expensive at first</option>
                    <option value='3'>Category</option>
                </select>
            </div>
            {/*<div className='filtering'>*/}
            {/*    Filtering by:*/}
            {/*    <div className='price-filtering'>Price*/}
            {/*        <label><input type='checkbox' value='20'/> up to 20$</label>*/}
            {/*        <label><input type='checkbox' value='50'/> up to 50$</label>*/}
            {/*        <label><input type='checkbox' value='100'/> up to 100$</label>*/}
            {/*    </div>*/}
            {/*    <div className='category-filtering'>Category*/}
            {/*        <select>*/}
            {/*            <option value='0'>All</option>*/}
            {/*            <option value='1'>Clothes</option>*/}
            {/*            <option value='2'>Electronics</option>*/}
            {/*            <option value='3'>Furniture</option>*/}
            {/*            <option value='4'>Shoes</option>*/}
            {/*            <option value='5'>Miscellaneous</option>*/}
            {/*        </select>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    )
}

export default Filters;