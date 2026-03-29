import { useState } from 'react';
import { useCart } from '../context/CartContext';
import Card from '../components/Card';
import Button from '../components/Button';

const Checkout = () => {
    const { cart, clearCart } = useCart();
    const [orderPlaced, setOrderPlaced] = useState(false);

    const total = cart.reduce((sum, item) => sum + item.price, 0);

    const handleCheckout = () => {
        // Simulate order placement
        setOrderPlaced(true);
        clearCart();
    };

    if (orderPlaced) {
        return <div>Order placed successfully!</div>;
    }

    return (
        <Card title="Checkout">
            <div>
                {cart.map(item => (
                    <div key={item.id}>
                        <p>{item.name} - ${item.price}</p>
                    </div>
                ))}
                <p>Total: ${total}</p>
                <Button onClick={handleCheckout}>Place Order</Button>
            </div>
        </Card>
    );
};

export default Checkout;