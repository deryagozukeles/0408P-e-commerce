function ProductCard({product}){
    return(
        <div className="border raunded-lg owerflow-hidden hover:shadow-lg transition">
            <img
                src={product.image}
                alt={product.title}
                className="w-full h-[300px] object-cover"
            />
            <div className="p-4 text-center">
                <p className="text-sm text-gray-400">{product.category}</p>
                <h3 className="text-semibold mt-1">{product.title}</h3>
                <div className="flex justify-center gap-2 mt-2">
                    <span className="text-gray-400 line-through">{product.oldPrice}</span>
                    <span className="text-green-600 font-semibold">{product.price}</span>

                </div>
            </div>
        </div>
    );

}
export default ProductCard;