import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Cart.css";

export default function Cart() {
  const { items, updateQuantity, removeFromCart, totalPrice } = useCart();
  const navigate = useNavigate();

  if (!items.length) {
    return (
      <section className="cart-page">
        <h2>Your cart is empty</h2>
        <p>
          <Link className="btn btn-primary" to="/products">
            Browse products
          </Link>
        </p>
      </section>
    );
  }

  return (
    <section className="cart-page">
      <h2>Shopping Cart</h2>
      <div className="cart-grid">
        <div className="cart-items">
          {items.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>₱{item.price.toFixed(2)}</p>
                <div className="cart-controls">
                  <label>
                    Qty
                    <input
                      type="number"
                      min="1"
                      max={item.countInStock}
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.id, Number(e.target.value))
                      }
                    />
                  </label>
                  <button
                    className="btn btn-secondary"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <aside className="cart-summary">
          <h3>Order summary</h3>
          <p>
            Total: <strong>₱{totalPrice.toFixed(2)}</strong>
          </p>
          <button
            className="btn btn-primary"
            onClick={() => navigate("/checkout")}
          >
            Proceed to Checkout
          </button>
        </aside>
      </div>
    </section>
  );
}