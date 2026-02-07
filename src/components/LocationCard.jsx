

function LocationCard({location}){
    return(
        <div className="text-white">
            <h4 className="font-semibold text-lg mb-1">{location.city}</h4>
            <p className="text-sm">{location.address}</p>
            <p className="text-sm">{location.phone}</p>
            <p className="text-sm">{location.fax}</p>
        </div>
    );
}
export default LocationCard;