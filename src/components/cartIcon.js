import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const CartIcon = ({ itemsInCart }) => {
    return (
        <div className='cart-num' style={{ position: "relative", display: "inline-block" }}>
            <FontAwesomeIcon icon={faCartShopping} size="2x" />
            
            {itemsInCart > 0 ? (
                <div className='cart-items' 
                    style={{
                        position: "absolute",
                        top: "-5px",
                        right: "-10px",
                        backgroundColor: "red",
                        color: "white",
                        borderRadius: "50%",
                        width: "20px",
                        height: "20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "14px",
                        fontWeight: "bold"
                    }}>
                    {itemsInCart}
                </div>
            ) : (
                <div style={{ color: "gray", fontSize: "12px", marginTop: "5px" }}>
                    Cart is empty
                </div>
            )}
        </div>
    );
};

export default CartIcon;
