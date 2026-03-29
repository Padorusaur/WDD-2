import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const { addToCart } = useCart();

    useEffect(() => {
        fetch(`/api/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [id]);

    if (!product) return <div>Loading...</div>;

    return (
        <Card title={product.name}>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <Button onClick={() => addToCart(product)}>Add to Cart</Button>
        </Card>
    );
};

export default ProductDetail;