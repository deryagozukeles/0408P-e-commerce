import ProductCard from "./ProductCard";
function ProductGrid({products}){
    return(
        <section className="px-4 md:px-16 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {products.map((product)=>(
                    <ProductCard key={product.id} product={product}/>
                ))}
            </div>
        </section>
    )
}
export default ProductGrid;