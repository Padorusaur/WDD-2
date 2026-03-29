import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Welcome to Our E-Commerce Store</h1>
            <p>Find the best products here.</p>
            <Link to="/products">Browse Products</Link>
        </div>
    );
};

export default Home;