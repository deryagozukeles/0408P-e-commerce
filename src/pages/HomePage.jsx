
import EditorsPick from "../components/EditorsPick";
import BestSellerProducts from "../components/BestSellerProducts";

import SliderCard from "../components/SliderCard";
import WinterCard from "../components/WinterCard";
import PostsCard from "../components/PostsCard";
import Slider from "../components/Slider";

function HomePage(){
return(
   <section className="w-full">
    <Slider/>
    <EditorsPick/>
    <BestSellerProducts/>
    <SliderCard/>
    <WinterCard/>
    <PostsCard/>
    

   </section>
)
}
export default HomePage;