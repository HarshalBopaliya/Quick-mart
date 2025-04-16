// client/src/components/Header.js
import React, { useContext } from 'react';
// import { FontAwesomeIcon }
//     from '@fortawesome/react-fontawesome'
// import { faCartShopping }
//     from '@fortawesome/free-solid-svg-icons'
import CartIcon from './cartIcon.js';
import { ItemContext } from '../context/ItemContext.js';
import StatusMessage from './StatusMessage.js';
const Navbar = () => {
  
    const { itemsInCart, totalPrice } = useContext(ItemContext);

    return (
        <nav className='navbar'>
            <div className='navbar-brand'>
                <h1 className='ecom'>
                  your cart
                </h1>
            </div>
            <div className='navbar-items'>
                {/* <h3 style={{ color: "green" }} className='total-price'>
                    Total Price: {totalPrice} Rs
                </h3> */}
                <div>
            <h3 style={{ color: "green" }} className='total-price'>
                Total Price: {totalPrice} Rs
            </h3>
            <StatusMessage totalPrice={totalPrice} />
        </div>
                {/* <div className='cart-num'>
                    <FontAwesomeIcon
                        icon={faCartShopping} size="2x" />
                    <div className='cart-items'>
                        {itemsInCart}
                    </div>
                </div> */}
                <div>
            <CartIcon itemsInCart={itemsInCart} />
        </div>
            </div>
        </nav>

        
    );
};

export default Navbar;
