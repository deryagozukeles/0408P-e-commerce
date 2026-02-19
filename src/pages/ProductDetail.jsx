import { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom"; // useNavigate yerine useHistory
import { useSelector, useDispatch } from "react-redux";
import { fetchProductDetail } from "../store/actions/productActions"; 
import { Eye, Heart, ShoppingCart, ChevronRight, ArrowLeft } from "lucide-react";
import BestSellerProducts from "../components/BestSellerProducts";
import Brands from "../components/Brands";
import { addToCart } from "../store/actions/shoppingCartActions";

function ProductDetail() {
    const { productId } = useParams(); 
    const history = useHistory(); 
    const dispatch = useDispatch();

    
    const { activeProduct, fetchState } = useSelector((state) => state.product);

    useEffect(() => {
        
        if (productId) {
            dispatch(fetchProductDetail(productId));
        }
       
        window.scrollTo(0, 0);
    }, [productId, dispatch]);

    
    if (fetchState === "FETCHING") {
        return (
            <div className="flex flex-col justify-center items-center min-h-[600px]">
                <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-500"></div>
                <p className="mt-4 text-gray-600 font-medium">Ürün detayları yükleniyor...</p>
            </div>
        );
    }

    
    if (fetchState === "FAILED" || (!activeProduct && fetchState === "FETCHED")) {
        return (
            <div className="text-center py-20">
                <p className="text-red-500 mb-4">Ürün bulunamadı veya bir hata oluştu.</p>
                <button onClick={() => history.push("/shop")} className="text-blue-500 underline">
                    Mağazaya Geri Dön
                </button>
            </div>
        );
    }

    
    if (!activeProduct) return null;

    return (
        <main className="px-4 py-6 mx-auto md:px-16">
           
            <div className="flex flex-col gap-4 mb-6 text-left">
                
                <button 
                    onClick={() => history.goBack()} 
                    className="flex items-center gap-2 text-blue-500 font-bold hover:text-blue-700 transition w-fit"
                >
                    <ArrowLeft size={20} /> Back
                </button>
                
                <section className="flex items-center gap-2 text-sm text-gray-400">
                    <span className="hover:text-gray-600 cursor-pointer" onClick={() => history.push("/")}>Home</span>
                    <ChevronRight size={14} />
                    <span className="hover:text-gray-600 cursor-pointer" onClick={() => history.push("/shop")}>Shop</span>
                    <ChevronRight size={14} />
                    <span className="text-gray-700 font-medium">
                        {activeProduct.name}
                    </span>
                </section>
            </div>

           
            <div className="flex flex-col md:flex-row gap-8 text-left">
                
                <div className="md:w-1/2 flex justify-center bg-gray-50 rounded-lg p-4">
                    <img
                        src={activeProduct.images?.[0]?.url} 
                        alt={activeProduct.name} 
                        className="w-full max-w-[450px] object-contain rounded shadow-sm"
                    /> 
                </div>

                
                <div className="flex-1 flex flex-col gap-4">
                    <h1 className="text-2xl font-semibold text-gray-800">{activeProduct.name}</h1>
                    
                    <div className="flex items-center gap-2">
                        <div className="flex text-yellow-400">
                            {"★".repeat(Math.round(activeProduct.rating || 0))}
                            {"☆".repeat(5 - Math.round(activeProduct.rating || 0))}
                        </div>
                        <span className="text-gray-400 text-sm font-bold">({activeProduct.sell_count} Reviews)</span>
                    </div>

                    <span className="text-2xl font-bold text-gray-900">{activeProduct.price} ₺</span>
                    
                    <p className="text-sm font-bold">
                        Availability: 
                        <span className={activeProduct.stock > 0 ? "text-blue-500 ml-1" : "text-red-500 ml-1"}>
                            {activeProduct.stock > 0 ? "In Stock" : "Out of Stock"}
                        </span>
                    </p>

                    <p className="text-gray-500 leading-relaxed border-b pb-6">
                        {activeProduct.description}
                    </p>

                   
                    <div className="flex gap-2 mt-2">
                        <span className="w-6 h-6 rounded-full bg-[#23A6F0] cursor-pointer hover:ring-2 ring-offset-2 ring-blue-500 transition"></span>
                        <span className="w-6 h-6 rounded-full bg-[#2DC071] cursor-pointer hover:ring-2 ring-offset-2 ring-green-500 transition"></span>
                        <span className="w-6 h-6 rounded-full bg-[#E77C40] cursor-pointer hover:ring-2 ring-offset-2 ring-orange-500 transition"></span>
                        <span className="w-6 h-6 rounded-full bg-[#252B42] cursor-pointer hover:ring-2 ring-offset-2 ring-black transition"></span>
                    </div>

                   
                    <div className="flex gap-4 mt-6">
                        <button 
                            onClick={()=>dispatch(addToCart(activeProduct))}
                            className="bg-[#23A6F0] text-white px-8 py-3 rounded-md font-bold hover:bg-blue-600 transition shadow-md">
                            Add to Cart
                        </button>
                        
                        <div className="flex gap-2">
                            <button className="p-3 border rounded-full hover:bg-gray-100 transition shadow-sm bg-white">
                                <Heart size={20} className="text-[#252B42]"/>
                            </button>
                            <button className="p-3 border rounded-full hover:bg-gray-100 transition shadow-sm bg-white">
                                <ShoppingCart size={20} className="text-[#252B42]" />
                            </button>
                            <button className="p-3 border rounded-full hover:bg-gray-100 transition shadow-sm bg-white">
                                <Eye size={20} className="text-[#252B42]"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <section className="mt-16">
                <div className="flex gap-8 border-b text-sm font-bold text-gray-500 justify-center">
                    <button className="border-b-2 border-[#23A6F0] pb-4 text-[#252B42]">Description</button>
                    <button className="pb-4 hover:text-[#252B42]">Additional Information</button>
                    <button className="pb-4 hover:text-[#252B42]">Reviews (0)</button>
                </div>
                <div className="mt-10 grid md:grid-cols-2 gap-12 items-start text-left">
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-[#252B42]">{activeProduct.name}</h3>
                        <p className="text-gray-600 text-sm leading-7">
                            {activeProduct.description} <br/><br/>
                        </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg flex justify-center">
                        <img
                            src={activeProduct.images?.[0]?.url}
                            className="w-full max-w-[400px] rounded shadow-md"
                            alt="Product Detail Section"
                        /> 
                    </div>
                </div>
            </section>

            <BestSellerProducts />
            <Brands />
        </main>
    );
}

export default ProductDetail;