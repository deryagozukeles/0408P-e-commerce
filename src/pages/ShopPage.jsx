import { useState } from "react";
import CategorySection from "../components/CategorySection";
import { products } from "../data/shop-product";
import ProductGrid from "../components/ProductGrid";
import Pagination from "../components/Pagination";
import Brands from "../components/Brands";


function ShopPage(){
    const ITEMS_PER_PAGE=8;
    const [currentPage,setCurrentPage]=useState(1);
    const totalPages=Math.ceil(products.length/ITEMS_PER_PAGE);
    const startIndex=(currentPage-1)*ITEMS_PER_PAGE;
    const currentsProducts=products.slice(startIndex,startIndex+ITEMS_PER_PAGE);
    return(
        <main className="w-full">
        <section className="flex flex-col md:flex-row md:items-center md:justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Shop</h1>
            <p className="text-sm text-gray-400 mt-2 md:mt-0">Home/Shop</p>
        </section>
        <section>
            <CategorySection/>
        </section>
        <section>
            <ProductGrid products={currentsProducts}/>
        </section>
        <section>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage} 
            />
        </section>
        <section>
            <Brands/>
        </section>

        </main>
        
    )

}
export default ShopPage;