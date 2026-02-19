import { useSelector } from "react-redux"; 
import CategoryCard from "./CategoryCard";

function CategorySection() {
    
    const { list } = useSelector((state) => state.categories);

 
    const top5Categories = [...(list || [])] 
        .sort((a, b) => (b.rating || 0) - (a.rating || 0)) 
        .slice(0, 5); 

    return (
        <section className="px-4 md:px-16 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
                {top5Categories.map((category) => (
                    <CategoryCard key={category.id} category={category} />
                ))}
            </div>
        </section>
    );
}

export default CategorySection;