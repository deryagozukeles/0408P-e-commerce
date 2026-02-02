import { Swiper,SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "../index.css";
import banner1 from "../assets/images/banners/banner-1.jpg";
function Slider(){
    return(
        <section className="w-full">
    <Swiper modules={[Navigation]} navigation loop className="w-full">
        <SwiperSlide>
            <div className="relative w-full h-[420px] sm:h-[520px] md:h-[716px] flex items-center">
                <img
                        src={banner1}
                        alt="collection"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                <div className="relative z-10 max-w-7xl mx-auto w-full px-8 sm:px-16 md:px-32">
                <div className="flex flex-col gap-3 max-w-full sm:max-w-[420px] text-white text-center md:text-left">
                    <span className="text-xm sm:text-sm tracking-wide">
                        SUMMER 2026
                    </span>
                    <h1 className="text-xl sm:text-2xl  md:text-4xl font-bold leading-tight">
                        NEW <br className="block md:hidden" /> COLLECTION
                    </h1>
                    <p className="text-xs md:text-base text-white/90">
                        We know how large objects will act, <br/>
                        but things on a small scale.
                    </p>
                    <button className="mt-4 bg-green-500 px-6 py-3 w-fit mx-auto md:mx-0 text-sm font-semibold transition hover:brightness-110">
                        SHOP NOW
                    </button>
                    </div> 
                    
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
     </section>
    )
}
export default Slider;
