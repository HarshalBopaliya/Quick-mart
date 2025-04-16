const StatusMessage = ({ totalPrice }) => {
    return (
        <div style={{ 
            fontWeight: "bold", 
            marginTop: "10px",
            color: totalPrice === 0 ? "red" : "green" 
        }}>
            {totalPrice === 0 ? "⚠️ Warning: Your cart is empty!" : "✅ Success: Items added to cart!"}
        </div>
    );
};

export default StatusMessage;
