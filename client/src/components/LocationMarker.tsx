import { useEffect, useRef } from "react";
import { Marker, Popup } from "react-leaflet";
import type { Location } from "../types/index";

export default function LocationMarker({
  location,
  selectedLocation,
}: {
  location: Location;
  selectedLocation: Location | null;
}) {
  const markerRef = useRef<L.Marker>(null);

  useEffect(() => {
    if (selectedLocation && selectedLocation.name === location.name) {
      markerRef.current?.openPopup();
    }
  }, [selectedLocation, location]);

  return (
    <Marker position={location.position} ref={markerRef}>
      <Popup>
        <div>
          <h3 className="font-bold">{location.name}</h3>
          <p>{location.address}</p>
          <p>{location.status}</p>
        </div>
      </Popup>
    </Marker>
  );
}
