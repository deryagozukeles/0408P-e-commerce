import { Play } from "lucide-react";
import ellipse from "../assets/images/about/ellipse.png";
import technology from "../assets/images/about/technology.png";
import video from "../assets/images/about/video.png";
import resim from "../assets/images/about/resim.png";
import TeamCard from "../components/TeamCard";
import { teamMembers } from "../data/teamMembers";
import Brands from "../components/Brands";
function AboutPage(){
    return(
        <>
        <section className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-center md:text-left space-y-6">
                <h5 className="hidden md:block font-bold tracking-widest text-sm uppercase">
                    About Company
                </h5>
                <h1 className="text-4xl md:text-6xl font-bold uppercase">
                    About Us
                </h1>
                <p className="text-gray-800 text-lg max-w-sm mx-auto md:mx-0">
                    We know how large objects will act, but things on a small scale.
                </p>
                <button className="bg-blue-500 text-white px-8 py-4 rounded-md font-bold">
                    Get Quete Now
                </button>
            </div>
            <div>
                <div className="relative flex items-center justify-center w-full max-w-[600px] mx-auto py-10">
                    <img
                        src={ellipse}
                        alt="Ellipse"
                        className="absolute w-[85%] md:w-[95%] h-auto -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-80"        
                    />
                    <img
                        src={technology}
                        alt="Technology"
                        className="relative z-10 w-full h-auto object-contain drop-shadow-xl"
                    />
                </div>
            </div>
        </section>
        <section className="container mx-auto px-6 py-16">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
               <div className="md:w-[35%] text-center md:text-left">
                    <p className="text-red-500 font-bold text-sm mb-4" >Problems trying</p>
                    <h2 className="text-2xl font-bold">
                        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
                    </h2>
               </div>
               <div className="md:w-[50%] flex items-center">
                <p className="text-gray-600 text-sm leading-relaxed text-center md:text-left font-medium">
                    Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
                </p>
               </div>

            </div>
        </section>
        <section className="container mx-auto px-6 py-20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-0 text-center">
                <div className="flex flex-col items-center">
                    <h2 className="text-5xl md:text-6xl font-bold text-gray-900">15K</h2>
                    <p className="text-gray-700 font-bold text-sm md:text-base mt-2">Happy Customers</p>
                </div>
                <div className="flex flex-col items-center">
                    <h2 className="text-5xl md:text-6xl font-bold text-gray-900">150K</h2>
                    <p className="text-gray-700 font-bold text-sm md:text-base mt-2">Monthly Visitors</p>
                </div>
                <div className="flex flex-col items-center">
                    <h2 className="text-5xl md:text-6xl font-bold text-gray-900">15</h2>
                    <p className="text-gray-700 font-bold text-sm md:text-base mt-2">Countries Worldwide</p>
                </div>
                <div className="flex flex-col items-center">
                    <h2 className="text-5xl md:text-6xl font-bold text-gray-900">100+</h2>
                    <p className="text-gray-700 font-bold text-sm md:text-base mt-2">Top Partners</p>
                </div>
            </div>
        </section>
        <section className="container mx-auto px-4 py-12 md:px-6 md:py-20">
            <div className="relative w-full h-[480px] md:h-[540px] rounded-3xl overflow-hidden shadow-2xl group">
                <img
                src={video}
                alt="Video"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00000080] via-transparent "></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <div className="relative mb-8 cursor-pointer group-btn">
                    <div className="absolute inset-0  rounded-full  opacity-25"></div>
                    <div className="relative bg-[#23A6F0] w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center shadow-lg transition-all group-hover/btn:scale-110">
                        <Play fill="white" className="text-white ml-1 " size={32}/>
                    </div>
                   </div> 
                    <div className="max-w-2xl">
            <h2 className="text-white text-3xl md:text-5xl font-bold mb-4 tracking-tight">
              Designing Better Experience
            </h2>
            <p className="text-white/90 text-sm md:text-base font-medium max-w-lg mx-auto leading-relaxed">
              Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
            </p>
          </div>

                </div>
            </div>
        </section>
        <section className="py-16 px-6 text-center bg-gray-50">
            <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-800">Meet Our Team</h2>
                    <p className="text-sm text-gray-500 mt-3 max-w-md mx-auto">
                         Problems trying to resolve the conflict between <br/>
                         the two major realms of Classical physics:<br/>
                         Newtonian mechanics
                    </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 max-w-6xl mx-auto">
                    {teamMembers.map((member)=>(
                        <TeamCard key={member.id} member={member}/>
                    ))}
            </div>
        </section>
        <section className="mb-8 bg-gray-100">
            <div className="w-full">
                <h2 className="text-gray-900 text-3xl md:text-5xl font-bold mb-4 tracking-tight">
                Big Companies Are Here
                </h2>
                <p className="text-gray-500 text-sm md:text-base font-medium max-w-lg mx-auto leading-relaxed">
                    Problems trying to resolve the conflict between 
                    the two major realms of Classical physics: Newtonian mechanics 
                </p>  
                 <Brands/> 
            </div>
         
                    
        </section>
        <section className="hidden md:flex bg-[#2A7CC7] h-[430px] text-white overflow-hidden">
            <div className="w-2/3 p-16 lg:p-24 flex flex-col justify-center items-start">
                <h5 className="font-bold uppercase tracking-widest text-sm mb-6">
                WORK WITH US
                </h5>
                
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight max-w-md">
                Now Let’s grow Yours
                </h2>
                
                <p className="text-sm lg:text-base mb-8 max-w-sm leading-relaxed">
                The gradual accumulation of information about atomic and 
                small-scale behavior during the first quarter of the 20th
                </p>
                
                <button className="border border-white px-10 py-3 rounded-md font-bold hover:bg-white hover:text-[#2A7CC7] transition-all duration-300">
                Button
                </button>
            </div>
            <div className="w-1/3 relative">
                <img 
                src={resim}
                alt="Work with us" 
                className="absolute inset-0 w-full h-full object-cover"
                />
            </div>

        </section>
        </>

    )
}
export default AboutPage;