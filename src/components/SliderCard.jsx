import { Swiper,SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "../index.css";
import hero1 from "../assets/images/shop-hero/hero-1.jpg";
import hero2 from "../assets/images/shop-hero/hero-2.png";
function SliderCard(){
    return(
       <section className="w-full">
      <Swiper modules={[Navigation]} navigation loop className="w-full">
        <SwiperSlide>
          <div className="relative w-full h-auto min-h-[500px] md:h-[716px] flex items-center bg-[#23856D] overflow-hidden py-12 md:py-0">
            <img
              src={hero1}
              alt="background"
              className="absolute inset-0 w-full h-full object-cover opacity-10" 
            />
            <div className="relative z-10 max-w-5xl mx-auto w-full px-8 md:px-12">
              <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="flex flex-col gap-5 text-white text-center md:text-left order-1 md:order-1 max-w-[450px]">
                  <span className="text-sm font-bold tracking-widest opacity-90">SUMMER 2020</span>
                  <h1 className="text-3xl md:text-5xl font-bold leading-[1.1]">
                    Vita Classic <br className="hidden md:block" /> Product
                  </h1>
                  <p className="text-sm md:text-lg opacity-80 mx-auto md:mx-0 max-w-[320px] md:max-w-none">
                    We know how large objects will act. We know how are objects will act.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center gap-6 mt-4">
                    <span className="text-2xl font-bold">$16.48</span>
                    <button className="bg-[#2DC071] hover:bg-[#28a761] px-5 py-2 rounded text-xs font-medium uppercase tracking-wide transition">
                      ADD TO CART
                    </button>
                  </div>
                </div>
                <div className="relative flex justify-center md:justify-end order-2 md:order-2 w-full md:w-auto">
                  <img
                    src={hero2}
                    alt="model"
                    className="w-[260px] sm:w-[320px] md:w-[480px] object-contain drop-shadow-2xl"
                  />
                </div>

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
export default SliderCard;