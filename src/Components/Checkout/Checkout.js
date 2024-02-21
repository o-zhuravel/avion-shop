import './Checkout.css';
import Header from "../Header/Header";
import {useSelector} from "react-redux";

const Checkout = () => {

    let subtotal = useSelector(state => state.cart.subtotal);

    const  checkData = () => {

    }

    return (
        <div className='Checkout-container'>
            <Header/>
            <div className='checkout'>
                <div className='price-delivery'>
                    {
                        subtotal > 50 ? <div>Free delivery</div> : <div>Delivery at the carrier`s tariffs</div>
                    }
                </div>
                <div className='form'>
                    <div className='container1'>
                        <label>First name</label><input type='text' name='name' autoFocus='true' required='true' minLength={2} maxLength={20} placeholder='Your first name'/>
                        <label>Last name</label><input type='text' required='true' minLength={3} maxLength={30} placeholder='Your last name'/>
                        <label>Email</label><input type='email' placeholder='Your email'/>
                        <label>Telephone number</label><input type='phone' required='true' placeholder='Your telephone number'/>
                    </div>
                    <div className='container1'>
                        <label>Region</label><input type='text' required='true' placeholder='Your region'/>
                        <label>City</label><input type='text' required='true' placeholder='Your city'/>
                        <label>NovaPost office number</label><input type='number' min={1} required='true' placeholder='Your NovaPost office number'/>
                    </div>

                </div>
                <div className='submit-btn' onClick={checkData} >Place an order</div>
            </div>
        </div>
    )
}

export default Checkout;