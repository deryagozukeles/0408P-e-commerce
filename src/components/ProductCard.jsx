
import { useHistory } from "react-router-dom"; 
import { createSlug } from "../utils/createSlug";

function ProductCard({ product }) {
  const history = useHistory();
const productImage = product.images?.[0]?.url || product.image || product.img;
  const handleProductClick = () => {
    const productNameSlug = createSlug(product.name); 
    history.push(`/shop/gender/category/${product.category_id}/${productNameSlug}/${product.id}`);
  };

    return(
        
        <div onClick={handleProductClick} className="group border raunded-lg owerflow-hidden hover:shadow-lg transition">
            <img
                src={productImage}
                alt={product.name}
                className="w-full h-[420px] object-cover transition-transform duration-300 group-hover:text-blue-500 "
            />
            <div className="p-4 text-center">
                <h3 className="text-semibold mt-1 group-hover:text-blue-500 transition-colors">{product.name}</h3>
                <div className="flex justify-center gap-2 mt-2">
                    <p className="text-gray-400 line-through transition hover:scale-125">${product.sell_count}</p>
                    <p className="text-green-600 font-semibold transition hover:scale-125">${product.price}</p>
                </div>
                <div className="flex justify-center gap-2 mt-3">
                    <span className="w-4 h-4 rounded-full bg-blue-500 cursor-pointer transition hover:scale-125"></span>
                    <span className="w-4 h-4 rounded-full bg-green-500 cursor-pointer transition hover:scale-125"></span>
                    <span className="w-4 h-4 rounded-full bg-orange-500 cursor-pointer transition hover:scale-125"></span>
                    <span className="w-4 h-4 rounded-full bg-black cursor-pointer transition hover:scale-125"></span>
                </div>
            </div>
        </div>
       
    );

}
export default ProductCard;