import { MapContainer, TileLayer } from "react-leaflet";
import LocationMarker from "./LocationMarker";
import FlyToLocation from "./FlyToLocation";
import type { MapLocation } from "../types/index";
import "leaflet/dist/leaflet.css";

type MapProps = {
  locations: MapLocation[];
  selectedLocation: Location | null;
};

function Map({ locations, selectedLocation }: MapProps) {
  const sandLake: [number, number] = [42.6342, -73.5525];

  return (
    <MapContainer
      center={sandLake}
      zoom={15}
      className="h-[600px] w-full rounded-lg"
    >
      <TileLayer
        {...{
          url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }}
      />

      <FlyToLocation selectedLocation={selectedLocation} />

      {locations.map((location, index) => (
        <LocationMarker
          key={index}
          location={location}
          selectedLocation={selectedLocation}
        />
      ))}
    </MapContainer>
  );
}

export default Map;
