import { useEffect, useRef } from "react";
import { Marker, Popup } from "react-leaflet";

export default function LocationMarker({
  location,
  selectedLocation,
}: {
  location: any;
  selectedLocation: any;
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
