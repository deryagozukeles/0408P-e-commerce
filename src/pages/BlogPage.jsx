import PostCard from "../components/PostCard";
import { blogCard } from "../data/blogCard";

function BlogPage() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        
        
        <div className="text-center mb-16 space-y-3">
          <h6 className="text-blue-500 font-bold text-sm">Practice Advice</h6>
          <h2 className="text-4xl font-bold text-slate-800">Featured Posts</h2>
          <p className="text-gray-500 max-w-md mx-auto text-sm">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>

      
        <div className="grid grid-cols-1 md:grid-cols-2  gap-x-4 gap-y-12">
          {blogCard.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogPage;