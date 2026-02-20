import { useEffect } from "react";
import { useMap } from "react-leaflet";

export default function FlyToLocation({
  selectedLocation,
}: {
  selectedLocation: any;
}) {
  const map = useMap();

  useEffect(() => {
    if (selectedLocation) {
      map.panTo(selectedLocation.position);
      //   map.flyTo(selectedLocation.position, 16, {
      //     duration: 1.5,
      //   });
    }
  }, [selectedLocation]);

  return null;
}
