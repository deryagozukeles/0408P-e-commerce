import { Link } from "react-router-dom";
function CategoryCard({category}){
    const gender = category.gender === "k" ? "kadin" : "erkek";
    const titleUrl = category.title.toLowerCase();
    return(
        <Link 
      to={`/shop/${gender}/${titleUrl}/${category.id}`} 
        className="relative h-[200px] md:h-[240px] overflow-hidden rounded cursor-pointer group">
            <img
            src={category.img}
            alt={category.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"/>
            <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white">
                <h3 className="text-lg font-bold">{category.title}</h3>
                <p className="text-sm">Rating: {category.rating} ⭐</p>
            </div>
        </Link>
    )

}
export default CategoryCard;



