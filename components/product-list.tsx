import Stripe from "stripe";
import { ProductCard } from "./product-card";

interface Props {
    products: Stripe.Product[];
}

export const ProductList = ({ products }: { products: Stripe.Product[] }) => {
    return (
        <div>
            <div>
                <input type="text" placeholder="Search products..." className="border p-2 rounded mb-4 w-full" />
            </div>
            <ul>
                {products.map((product, key) => {
                    return <li key={key}><ProductCard product={product} /></li>
                }
                )}
            </ul>
        </div>
    )
}