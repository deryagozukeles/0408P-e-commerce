import { editorsPick } from "../data/editorsPick";
import "../index.css";
function EditorsPick(){
    return(
        <section className="max-w-7xl mx-auto px-4 py-12">
            <h2 className="text-2xl font-bold text-center mb-8">
                EDITOR'S PICS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {editorsPick.map((img)=>(
                    <div key={img.id} className="relative aspect-[4/5]">
                        <img
                            src={img.image}
                            alt={img.title}
                            className="w-full h-full object-cover"
                        />
                        <button className="absolute inset-0 flex items-end justify-center bg-black/30">
                            <h3 className="text-white text-xl font-bold">
                                {img.title}
                            </h3> 
                        </button>
                    </div>
                ))}
            </div>
        </section>
    )

}
export default EditorsPick;