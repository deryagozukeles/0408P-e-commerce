function EditorsCard({image,title}){
    return(
        <div className="relative w-full h-full">
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-end justify-center bg-black/30">
                <h3 className="text-black px-8 py-4 text-xl font-bold mb-4 bg-white  transition hover:scale-125">
                    {title}
                </h3>
            </div>
        </div>

    )

}
export default EditorsCard;