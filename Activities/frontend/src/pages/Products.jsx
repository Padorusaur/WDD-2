import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch products from API
        fetch('/api/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <div>
            <h1>Products</h1>
            <div className="products-grid">
                {products.map(product => (
                    <Card key={product.id} title={product.name}>
                        <p>{product.description}</p>
                        <p>${product.price}</p>
                        <Link to={`/product/${product.id}`}>View Details</Link>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Products;