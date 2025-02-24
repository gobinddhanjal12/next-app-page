import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

export default function ClientFetching() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products/category/smartphones")
            .then((res) => res.json())
            .then((data) => setProducts(data.products));
    }, []);

    return (
        <div className="container">
            <h1>Client-Side Fetching</h1>
            <div className="grid">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}
