import { ChevronRight, FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import TeamCard from "../components/TeamCard";
import { teamMembers } from "../data/teamMembers";
import team1 from "../assets/images/team/team-1.png";
import team2 from "../assets/images/team/team-2.png";
import team3 from "../assets/images/team/team-3.png";
import team4 from "../assets/images/team/team-4.png";
import team5 from "../assets/images/team/team-5.png";

function Team(){
    return(
        
        <main >
            <section className="my-8" >
                <h5 className="font-bold text-gray-900 tracking-widest uppercase text-sm mb-4">What we do</h5>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Innovation tailored for you</h1>
                <div className="flex justify-center">
                    <span className="hover:text-gray-600 cursor-pointer">Home</span>
                    <ChevronRight className="text-2xl text-blue-600" />
                    <span className="hover:text-gray-600 cursor-pointer">Team</span>
                </div>
                
            </section>
        <section className="max-w-7xl flex flex-col md:flex-row gap-3 overflow-hidden">
                <img
                    src={team1}
                    alt="Collection"
                    className="w-full md:w-1/2 h-[530px]"
                />
           
            <div className="w-full md:w-1/2 grid grid-cols-2 gap-3">
                    <img
                        src={team2}
                        alt="Collection"
                        className="h-[260px]"
                    />
               
                    <img
                        src={team3}
                        alt="Collection"
                        className="h-[260px]"
                    />
               
                
                    <img
                        src={team4}
                        alt="Collection"
                        className="h-[260px]"
                    />

                    <img
                        src={team5}
                        alt="Collection"
                        className="h-[260px]"
                    />
                
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
        <section className="text-center px-6 py-20">
            <h2 className="font-bold text-4xl mb-6">Start your 14 days free trial</h2>
            <p className="text-gray-700 max-w-md mx-auto mb-8 text-xs leading-relaxed"> Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent.</p>
            <button className="bg-blue-500 text-white rounded-md font-bold px-10 py-4 mb-10 hover:blue-700 transition"> Try it free now</button>
            <div className="flex gap-4 justify-center text-blue-500">
                        <TwitterIcon className="w-5 h-5 cursor-pointer hover:text-sky-600 transition" ></TwitterIcon>
                        <FacebookIcon className="w-5 h-5 cursor-pointer hover:text-blue-600 transition" ></FacebookIcon>
                        <InstagramIcon className="w-5 h-5 cursor-pointer hover:text-blue-600 transition" ></InstagramIcon>
                        <LinkedinIcon  className="w-5 h-5 cursor-pointer hover:text-blue-600 transition"></LinkedinIcon>
                        
                     </div>
        </section>
        
        </main>
    )
}
export default Team;