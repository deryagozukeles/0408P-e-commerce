import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchProducts,
  setCategoryId,
  setFilter,
  setSort,
} from "../store/actions/productActions";

import CategorySection from "../components/CategorySection";
import ProductGrid from "../components/ProductGrid";
import Pagination from "../components/Pagination";
import Brands from "../components/Brands";

function ShopPage() {
  const dispatch = useDispatch();
  const { categoryId } = useParams();

  const {
    productList,
    total,
    fetchState,
    categoryId: reduxCategoryId,
    filter,
    sort,
  } = useSelector((state) => state.product);

  const ITEMS_PER_PAGE = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const [filterInput, setFilterInput] = useState(filter || "");

 

  useEffect(() => {
    if (categoryId) {
      dispatch(setCategoryId(categoryId));
    } else {
      dispatch(setCategoryId(null));
    }
  }, [categoryId, dispatch]);

  
  useEffect(() => {
    dispatch(fetchProducts(currentPage, ITEMS_PER_PAGE));
  }, [dispatch, currentPage, reduxCategoryId, filter, sort]);

  

  useEffect(() => {
    setCurrentPage(1);
  }, [reduxCategoryId, filter, sort]);

  

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    dispatch(setFilter(filterInput));
  };

  const totalPages = Math.ceil(total / ITEMS_PER_PAGE);

  return (
    <main className="w-full">

     
      <section className="flex flex-col md:flex-row md:items-center md:justify-between px-8 py-6">
        <h1 className="text-2xl font-bold text-gray-900">Shop</h1>
        <p className="text-sm text-gray-400 mt-2 md:mt-0">
          Home / Shop
        </p>
      </section>

      
      <CategorySection />

     
      <section className="flex flex-wrap items-center justify-between px-8 py-4 bg-white border-b gap-4">

        <p className="text-sm font-bold text-gray-500">
          Showing {total} results
        </p>

        <div className="flex flex-wrap items-center gap-4">

         
          <form onSubmit={handleFilterSubmit} className="flex gap-2">
            <input
              type="text"
              placeholder="Search products..."
              value={filterInput}
              onChange={(e) => setFilterInput(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 text-sm outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="bg-[#23A6F0] text-white px-4 py-2 rounded text-sm font-bold"
            >
              Filter
            </button>
          </form>

         
          <select
            value={sort || ""}
            onChange={(e) => dispatch(setSort(e.target.value))}
            className="border border-gray-300 rounded px-3 py-2 text-sm bg-gray-50 outline-none"
          >
            <option value="">Sort By</option>
            <option value="price:asc">Price: Low to High</option>
            <option value="price:desc">Price: High to Low</option>
            <option value="rating:asc">Rating: Low to High</option>
            <option value="rating:desc">Rating: High to Low</option>
          </select>
        </div>
      </section>

      
      <section className="min-h-[400px] px-8 py-8">
        {fetchState === "FETCHING" ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            <span className="ml-3">Loading products...</span>
          </div>
        ) : productList.length > 0 ? (
          <ProductGrid products={productList} />
        ) : (
          <div className="text-center py-20 text-gray-500">
            No products found matching your criteria.
          </div>
        )}
      </section>

      
      {totalPages > 1 && (
        <div className="flex justify-center py-8">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      )}

      
      <Brands />

    </main>
  );
}

export default ShopPage;
