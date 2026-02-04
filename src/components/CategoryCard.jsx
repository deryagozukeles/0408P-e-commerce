function CategoryCard({category}){
    return(
        <div className="relative h-[200px] md:h-[240px] overflow-hidden rounded cursor-pointer group">
            <img
            src={category.image}
            alt={category.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"/>
            <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white">
                <h3 className="text-lg font-bold">{category.title}</h3>
                <p className="text-sm">{category.count}</p>
            </div>
        </div>
    )

}
export default CategoryCard;