import ProductCard from "../../components/ProductCard";

export async function getServerSideProps(context) {
    const { id } = context.params;
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await res.json();

    return {
        props: { product: data },
    };
}

export default function ServerFetching({ product }) {
    return (
        <div className="container">
            <h1>Server-Side Fetching</h1>
            <ProductCard product={product} />
        </div>
    );
}
