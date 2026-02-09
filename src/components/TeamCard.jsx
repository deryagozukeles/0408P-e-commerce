import {FacebookIcon,
  InstagramIcon,
  TwitterIcon,
 
} from "lucide-react";
function TeamCard({member}){
    return(
        <div className="flex flex-col items-center text-center gap-3 bg-white py-16">
            <img
                src={member.image}
                alt={member.title}
                className="w-24 h-24 rounded-full object-cover"
            
            />
            <p className="text-sm text-sky-500 font-semibold">
                {member.role}
            </p>
            <h4 className="font-semibold text-gray-800">
                {member.name}
            </h4>
            <p className="text-sm text-gray-500 max-w-[200px]">
                the quick fox jumps over the lazy dog
            </p>
            <div className="flex gap-4">
                        <FacebookIcon className="w-5 h-5 cursor-pointer text-blue-500 hover:text-blue-700 transition" ></FacebookIcon>
                        <InstagramIcon className="w-5 h-5 cursor-pointer text-blue-500 hover:text-blue-700 transition" ></InstagramIcon>
                        <TwitterIcon className="w-5 h-5 cursor-pointer text-blue-500 hover:text-blue-700 transition" ></TwitterIcon>
                     </div>
        </div>
    )

}
export default TeamCard;