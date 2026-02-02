import "../index.css";
import winter from "../assets/images/winter-card/winter-clothes.png";
function WinterCard(){
    return(
       <section className="w-full">
        <div className="max-w-6xl max-auto bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="flex flex-col md:flex-row-reverse text-center md:text-left items-center">
                <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col gap-4">
                    <span className="text-xs tracking-widest text-gray-400">
                        SUMMER 2020
                    </span>
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
                        Part of the Neural <br className="hidden md:block" /> Universe
                    </h2>
                    <p className="text-sm md:text-base text-gray-500">
                        We know how large objects will act,<br/>
                        but things on a small scale.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 mt-4 items-center">
                        <button className=" w-32 sm:w-auto bg-green-500 text-center text-white px-6 py-3 text-sm font-semibold rounded hover:brightness-110 transition">
                             BUY NOW
                        </button>
                        <button className=" w-32 sm:w-auto border border-green-500 text-center text-green-500 px-6 py-3 text-xs font-semibold rounded hover:bg-green-50 transition">
                            READ MORE 
                        </button>
                    </div>
                </div >
                <div className="w-full md:w-1/2">
                    <img
                        src={winter}
                        alt="Neural Universe"
                        className="w-full h-[260px] md:h-full object-cover"
                    
                    />
                </div>
            </div>
        </div>
       </section>
                    
    )

}
export default WinterCard;