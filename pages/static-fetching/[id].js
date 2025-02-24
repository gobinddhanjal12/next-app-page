import ProductCard from "../../components/ProductCard";
import "../../styles/globals.css";

export async function getStaticPaths() {
    const res = await fetch("https://dummyjson.com/products/category/smartphones");
    const products = await res.json();
    const paths = products.products.map((product) => ({ params: { id: product.id.toString() } }));

    return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
    const res = await fetch(`https://dummyjson.com/products/${params.id}`);
    const data = await res.json();

    return {
        props: { product: data },
        revalidate: 10,
    };
}

export default function StaticFetching({ product }) {
    return (
        <div className="container">
            <h1>Static site generation</h1>
            <ProductCard product={product} />
        </div>
    );
}
