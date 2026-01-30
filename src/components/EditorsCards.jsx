function EditorsCard({image,title}){
    return(
        <div className="relative w-full h-full min-h-[240px]">
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-end justify-center bg-black/30">
                <h3 className="text-white text-xl font-bold mb-4">
                    {title}
                </h3>
            </div>
        </div>

    )

}
export default EditorsCard;