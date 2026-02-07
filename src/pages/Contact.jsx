import LocationCard from "../components/LocationCard";
import { locations } from "../data/locations";
import banner from "../assets/images/banners/banner-1.jpg";
function Contact(){
    return(
       <section className="relative min-h-[700px] flex md:items-center overflow-hidden pt-24">

  <img
    src={banner}
       alt="Contact"
       className="absolute inset-0 w-full h-full object-cover"   
  />

  <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 to-transparent"></div>

  <div className="relative z-10 max-w-7xl mx-auto w-full px-6 flex flex-col md:flex-row text-white">

    <div className="md:w-1/2 space-y-6 flex flex-col items-center text-center md:items-start md:text-left md:px-16">
      <h2 className="text-4xl font-bold">CONTACT US</h2>

      <p className="text-sm opacity-90 max-w-md">
        Problems trying to resolve the conflict between<br className="hidden md:block"/>
        the two major realms of Classical physics:<br className="hidden md:block"/>
        Newtonian mechanics
      </p>

      <button className="bg-sky-500 px-6 py-3 rounded-md text-sm font-semibold w-fit">
        CONTACT US
      </button>
    </div>

    <div className="md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8 text-sm mt-12 md:mt-0 text-center md:text-left ">
      {locations.map((item) => (
        <div key={item.city} className="space-y-1">
          <h4 className="font-semibold text-base">{item.city}</h4>
          <p>{item.address}</p>
          <p className="w-10 mb-4 border-b border-blue-400 md:mx-0 mx-auto"></p>
          <p>75000 Paris</p>
          <p>{item.zip}</p>
          <p>Phone : {item.phone}</p>
          <p>Fax : {item.fax}</p> 
        </div>
      ))}
    </div>

  </div>
</section>


    );
}
export default Contact;