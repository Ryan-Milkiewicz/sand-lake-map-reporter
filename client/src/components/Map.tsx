import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";
import LocationMarker from "./LocationMarker";
import FlyToLocation from "./FlyToLocation";
import type { Location } from "../types/index";
import "leaflet/dist/leaflet.css";

type MapProps = {
  locations: Location[];
  selectedLocation: Location | null;
  onMapClick?: (lat: number, lng: number) => void;
};

function Map({ locations, selectedLocation, onMapClick }: MapProps) {
  const sandLake: [number, number] = [42.6342, -73.5525];

  function ClickHandler({
    onClick,
  }: {
    onClick: (lat: number, lng: number) => void;
  }) {
    useMapEvents({
      click(e) {
        onClick(e.latlng.lat, e.latlng.lng);
      },
    });
    return null;
  }

  return (
    <MapContainer
      center={sandLake}
      zoom={15}
      className="h-150 w-full rounded-lg"
    >
      {onMapClick && <ClickHandler onClick={onMapClick} />}
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
