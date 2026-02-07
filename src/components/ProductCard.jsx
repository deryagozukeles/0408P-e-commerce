import { Link } from "react-router-dom";

function ProductCard({product}){
    return(
        <Link to={`/product/${product.id}`} >
        <div className="group border raunded-lg owerflow-hidden hover:shadow-lg transition">
            <img
                src={product.image}
                alt={product.title}
                className="w-full h-[420px] object-cover transition-transform duration-300 group-hover:text-blue-500 "
            />
            <div className="p-4 text-center">
                <p className="text-sm text-gray-400">{product.category}</p>
                <h3 className="text-semibold mt-1 group-hover:text-blue-500 transition-colors">{product.title}</h3>
                <div className="flex justify-center gap-2 mt-2">
                    <span className="text-gray-400 line-through transition hover:scale-125">{product.oldPrice}</span>
                    <span className="text-green-600 font-semibold transition hover:scale-125">{product.price}</span>
                </div>
                <div className="flex justify-center gap-2 mt-3">
                    <span className="w-4 h-4 rounded-full bg-blue-500 cursor-pointer transition hover:scale-125"></span>
                    <span className="w-4 h-4 rounded-full bg-green-500 cursor-pointer transition hover:scale-125"></span>
                    <span className="w-4 h-4 rounded-full bg-orange-500 cursor-pointer transition hover:scale-125"></span>
                    <span className="w-4 h-4 rounded-full bg-black cursor-pointer transition hover:scale-125"></span>
                </div>
            </div>
        </div>
        </Link>
    );

}
export default ProductCard;