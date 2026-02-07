import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { Eye, Heart, ShoppingCart,ChevronRight } from "lucide-react";
import BestSellerProducts from "../components/BestSellerProducts";
import Brands from "../components/Brands";

function ProductDetail(){
    const {id}= useParams();
    const product=products.find((item)=>item.id===Number(id));
    if(!product){
        return <p>Ürün bulunamadı</p>
    }
    return(
        
        <main className="px-4 py-6 mx-auto md:px-16">
            <section className="flex m-4 items-center gap-2 text-sm text-gray-400">
                <span className="hover:text-gray-600 cursor-pointer">Home</span>
                <ChevronRight size={14} />

                <span className="hover:text-gray-600 cursor-pointer">Shop</span>
                <ChevronRight size={14} />

                <span className="text-gray-700 font-medium">
                    {product.title}
                </span>
            </section>
            <div className="flex flex-col md:flex-row gap-2 text-left">
                <div className="md:w-1/2 flex justify-center md:justify-start">
                    <img
                        src={product.image}
                        title={product.title} 
                        className="
                        w-full
                        max-w-[220px]
                        sm:max-w-[260px]
                        md:max-w-[320px]
                        object-contain
                        rounded
                        "
                    /> 
                </div>
                <div className="flex-1 flex flex-col gap-4">
                <h1 className="text-xl font-semibold mb-2">{product.title}</h1>
                <p className="text-gray-500 mb-4">{product.description}</p>
                <span className="text-lg font-bold">{product.price}</span>
                <p className="text-sm text-gray-500">
                    Availability:<span className="text-blue-500">In Stock</span>
                </p>
                <p className="text-gray-500 mb-4 border-b">Met minim Mollie non desert Alamo est sit cliquey dolor 
                do met sent. RELIT official consequent door ENIM RELIT Mollie. 
                Excitation venial consequent sent nostrum met.</p>
                <div className="flex gap-2 mt-3">
                    <span className="w-4 h-4 rounded-full bg-blue-500 cursor-pointer transition hover:scale-125"></span>
                    <span className="w-4 h-4 rounded-full bg-green-500 cursor-pointer transition hover:scale-125"></span>
                    <span className="w-4 h-4 rounded-full bg-orange-500 cursor-pointer transition hover:scale-125"></span>
                    <span className="w-4 h-4 rounded-full bg-black cursor-pointer transition hover:scale-125"></span>
                </div>
                <div className="flex gap-4 mt-4">
                    <button className="flex items-center gap-2 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
                        Select Option
                    </button>
                    <button>

                    </button>
                    <button className="rounded-full bg-gray-50 px-2 hover:bg-gray-200 transition">
                        <Heart size={18}/>
                    </button>
                    <button className="rounded-full bg-gray-50 px-2 hover:bg-gray-200 transition">
                        <ShoppingCart />
                    </button>
                    <button className="rounded-full bg-gray-50 px-2 hover:bg-gray-200 transition">
                        <Eye size={18}/>
                    </button>

                </div>

                </div>
            </div>
            <section className="mt-12">
                <div className="flex gap-12 border-b text-sm text-center justify-center">
                    <button className="font-semibold border-b-2 pb-2">
                        Description
                    </button>
                    <button className="font-semibold border-b-2 pb-2">Additional Info</button>
                    <button className="font-semibold border-b-2 pb-2">Reviews (0)</button>
                </div>
                <div className="mt-6 grid md:grid-cols-3 gap-6">
                    <img
                        src={product.image}
                        title={product.title} 
                        className="
                        max-w-[120px]
                        sm:max-w-[160px]
                        md:max-w-[220px]
                        object-contain
                        rounded
                        "
                    /> 
                    <p className="text-sm mt-6 text-gray-600 text-left">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.<br/>

                    Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.<br/>

                    Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.<br/>
                    </p>
                    <div>
                        <div className="text-sm text-gray-600">
                        <h4 className="font-bold">the quick fox jumps over </h4>
                        <ul>
                            <li>
                                <ChevronRight />the quick fox jumps over the lazy dog
                            </li>
                            <li>
                                <ChevronRight />the quick fox jumps over the lazy dog
                            </li>
                            <li>
                                <ChevronRight />the quick fox jumps over the lazy dog
                            </li>
                            <li>
                                <ChevronRight />the quick fox jumps over the lazy dog
                            </li>
                        </ul>
                    </div>
                    <div className="text-sm text-gray-600 mt-2">
                        <h3 className="font-bold">the quick fox jumps over </h3>
                        <ul>
                            <li>
                                <ChevronRight />the quick fox jumps over the lazy dog
                            </li>
                            <li>
                                <ChevronRight />the quick fox jumps over the lazy dog
                            </li>
                            <li>
                                <ChevronRight />the quick fox jumps over the lazy dog
                            </li>
                        </ul>
                    </div>

                    </div>
                    
                </div>
            </section>
            <section>
                <BestSellerProducts/>
            </section>
            <section>
                <Brands/>
            </section>
        </main>

    )
}
export default ProductDetail;