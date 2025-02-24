
export default function ProductCard({ product }) {
    return (
        <div className="card">
            <img src={product.thumbnail} alt={product.title} />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <div>
                <span className="price">${product.price}</span> | <span className="rating">⭐ {product.rating}</span>
            </div>
        </div>
    );
}
