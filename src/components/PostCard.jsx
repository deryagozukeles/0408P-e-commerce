import { AlarmClockIcon, ArrowRight, ChartArea,  ChevronRight, Clock } from "lucide-react";

function PostCard({post}){
    return(
        <article className="bg-white overflow-hidden shadow-sm hover:shadow-md transition">
            <div className="w-full h-[240px]">
                <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                
                />
            </div>
            <div className="p-5 flex flex-col gap-3">
                <div className="flex gap-3 text-xs text-gray-400">
                    <span className=" hover:text-blue-500 transition">Google</span>
                    <span className=" hover:text-blue-500 transition">Trending</span>
                    <span className=" hover:text-blue-500 transition">New</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 leading-snug text-left items-center">{post.title}</h3>
                <p className="text-sm leading-relaxed text-gray-500 text-left items-center">{post.description}</p>
                <div className="flex text-xs justify-between mt-3 text-gray-400">
                    <span className="flex items-center gap-1">
                        <AlarmClockIcon className="text-blue-500" size={14}/>
                        {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                        <ChartArea className="text-green-700" size={14}/>
                        {post.comments}
                    </span>
                </div>
                <button className=" group mt-2 flex item-center gap-1 text-sm font-semibold text-gray-500 hover:underline self-start">
                    Learn More 
                    <ChevronRight className="text-blue-500 transition-transform group-hover:translate-x-1" />
                </button>
            </div>
            

        </article>
    )

}
export default PostCard;