import { categories } from "../data/categories";
import CategoryCard from "./CategoryCard";

function CategorySection(){
    return(
        <section className="px:4 md:px-16 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
            {categories.map((category)=>(
                <CategoryCard key={category.id} category={category}/>
            ))}
        </div>
    </section>


    )
    
}
export default CategorySection;