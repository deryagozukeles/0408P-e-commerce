import hooli from "../assets/images/brands/fa-brands-1.png";
import lyft from "../assets/images/brands/fa-brands-2.png";
import leaf from "../assets/images/brands/fa-brands-3.png";
import stripe from "../assets/images/brands/fa-brands-4.png";
import aws from "../assets/images/brands/fa-brands-5.png";
import reddit from "../assets/images/brands/fa-brands-6.png";
const brands=[hooli,lyft,leaf,stripe,aws,reddit];
function Brands(){
    return(
        <section className="bg-gray-100 py-12">
            <div className="max-w-7xl mx-auto px-4 md:px-16">
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center">
                    {brands.map((logo,index)=>(
                        <div key={index}
                            className="flex justify-center items-center opacity-70 hover:opacity-100 transition"
                        >
                            <img
                                src={logo}
                                alt="brand"
                                className="h-8 object-contain"
                            
                            />
                        </div>

                    ))}
                </div>
            </div>
        </section>

    )

}
export default Brands;