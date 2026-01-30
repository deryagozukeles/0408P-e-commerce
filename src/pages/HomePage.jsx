import { Swiper,SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "../index.css";
import EditorsPick from "../components/EditorsPick";
import BestSellerProducts from "../components/BestSellerProducts";

function HomePage(){
return(
   <section className="w-full">
    <Swiper modules={[Navigation]} navigation loop>
        <SwiperSlide>
            <div className="flex flex-col md:flex-row items-center bg-cyan-500 text-white px-6 py-12 md:px-16">
                <div className="flex flex-col gap-4 md:w-1/2">
                    <span className="text-sm tracking-wide">
                        SUMMER 2026
                    </span>
                    <h1 className="text-4xl font-bold">
                        NEW COLLECTION
                    </h1>
                    <p className="text-sm max-w-md">
                        We know how large objects will act, <br/>
                        but things on a small scale.
                    </p>
                    <button className="bg-green-500 px-6 py-3 w-fit text-sm font-semibold">
                        SHOP NOW
                    </button>
                    </div> 
                    <div className="hidden md:flex md:w-1/2 justify-end">
                    <img
                        src="/images/woman-pink-shopping.png"
                        alt="collection"
                        className="object-cover"
                    />

                    </div>
                  
            </div>
        </SwiperSlide>
        
        <SwiperSlide>
            <img
                        src="https://placeholdit.com/400x500/24c2e1/ffffff"
                        alt="collection"
                        className="object-cover"
                    />

        </SwiperSlide>
    </Swiper>
    <EditorsPick/>
    <BestSellerProducts/>

   </section>
)
}
export default HomePage;