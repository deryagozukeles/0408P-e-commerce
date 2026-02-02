import { postsCard } from "../data/postsCard";
import PostCard from "./PostCard";

function PostsCard(){
    return(
        <div className="p-4 md:p-8">
            <div className="p-4 md:p-8">
                <h1 className="mt-8 text-2xl md:text-4xl font-bold text-gray-900 ">Featured Products</h1>
                <p className="py-4 text-sm md:text-base text-gray-500">Problems trying to resolve the conflict between<br className="hidden md:block"/>
                        the two major realms of Classical physics: Newtonian mechanics </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
                {
                    postsCard.map((post)=>(
                        <PostCard key={post.id} post={post}/>
                    ))
                }

            </div>
        </div>
    )

}
export default PostsCard;