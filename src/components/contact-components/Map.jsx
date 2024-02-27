/** @format */

// import locationIcon from "../../../src/Helpers/map/locationIcon.png";

import "./map.css";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const libraries = ["places"];
const mapContainerStyle = {
  width: "80vw",
  height: "50vh",
};
const center = {
  lat: 35.3447,
  lng: -0.7818,
};

const Map = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCJ_BxxFSy4VtXdUzJmT_e8bJ6nxktX_MQ",
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <div className="contact-map">
      <GoogleMap mapContainerStyle={mapContainerStyle} zoom={7} center={center}>
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
};

export default Map;
