import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const Header = () => {
    const { user, logout } = useAuth();
    const { totalItems } = useCart();

    return (
        <header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/cart">Cart ({totalItems})</Link>
                {user ? (
                    <>
                        <span>Welcome, {user.username}</span>
                        <button onClick={logout}>Logout</button>
                    </>
                ) : (
                    <Link to="/login">Login</Link>
                )}
            </nav>
        </header>
    );
};

export default Header;