export type Location = {
  name: string;
  address: string;
  position: [number, number];
  submitted: string;
  status: "Open" | "Closed";
};

// This type is used for the Map component, which doesn't need the "submitted" and "status" properties.
// Omit removes the specified keys from the Location type, creating a new type that only includes the necessary properties for the Map component.
export type MapLocation = Omit<Location, "submitted" | "status">;
