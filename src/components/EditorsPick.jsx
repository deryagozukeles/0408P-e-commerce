import { editorsPick } from "../data/editorsPick";
import "../index.css";
import EditorsCard from "./EditorsCards";
function EditorsPick(){
     
    return(
        
        <section className="max-w-7xl mx-auto mt-8">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold ">
                     EDITOR'S PICS    
                </h2>
                <p className="text-sm mt-3 text-gray-500">
                    Problems trying to resolve the conflict between
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                
                <EditorsCard
                image={editorsPick[0].image}
                title={editorsPick[0].title}
               
                />
                <EditorsCard
                image={editorsPick[1].image}
                title={editorsPick[1].title}
                />
                <div className="flex flex-col gap-6 h-full">
                    <EditorsCard
                        image={editorsPick[2].image}
                        title={editorsPick[2].title}
                    />
                    <EditorsCard
                        image={editorsPick[3].image}
                        title={editorsPick[3].title}
                    />

                </div>          
            </div>
             
        </section>
       
    )

}
export default EditorsPick;