import { products } from "../data/products";
import ProductCard from "./ProductCard";


function BestSellerProducts(){
    return(
        <section className="max-w-7xl mx-auto px-4 py-16">
            <h3 className="text-center text-gray-300 mb-10">Featured Product</h3>
            <h2 className="text-2xl font-bold text-center mb-2">
                BESTSELLER PRODUCTS
            </h2>
            <p className="text-center text-gray-400 mb-10">
                Problem trying to resolve the conflict between
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {products.map((product)=>(
                    <ProductCard key={product.id} product={product}/>
                ))}
            </div>
        </section>
    )

}
export default BestSellerProducts;