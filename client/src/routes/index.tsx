import { createFileRoute } from "@tanstack/react-router";
import type { Location } from "../types";
import Card from "../components/Card";
import { RequestForm } from "@/components/RequestForm";
import Map from "../components/Map";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const [locations, setLocations] = useState<Location[]>([
    {
      name: "Lakeview On Crystal Lake",
      address: "4 Old Rte 66, Averill Park, NY 12018",
      position: [42.63495, -73.55412],
      submitted: "Submitted 5 days ago",
      status: "Open",
    },
    {
      name: "Gipfel Coffee Company",
      address: "2869 NY-43, Averill Park, NY 12018",
      position: [42.6356, -73.5519],
      submitted: "Submitted 5 days ago",
      status: "Closed",
    },
    {
      name: "The Towne Tavern",
      address: "2850 NY-43, Averill Park, NY 12018",
      position: [42.635, -73.553],
      submitted: "Submitted 5 days ago",
      status: "Open",
    },
  ]);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null,
  );
  const [pickedPosition, setPickedPosition] = useState<[number, number] | null>(
    null,
  );

  // const [submittedValues, setSubmittedValues] = useState<{
  //   requestType: string;
  //   details: string;
  //   position: [number, number] | null;
  // } | null>(null);

  const getAddress = async (lat: number, lng: number): Promise<string> => {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`,
    );
    const data = await res.json();
    return data.display_name ?? "Unknown address";
  };

  const handleMapClick = (lat: number, lng: number) => {
    console.log("CLICKED MAP!!!");
    setPickedPosition([lat, lng]);
  };

  // const locations: {
  //   name: string;
  //   address: string;
  //   position: [number, number];
  //   submitted: string;
  //   status: "Open" | "Closed";
  // }[] = [
  //   {
  //     name: "Lakeview On Crystal Lake",
  //     address: "4 Old Rte 66, Averill Park, NY 12018",
  //     position: [42.63495, -73.55412],
  //     submitted: "Submitted 5 days ago",
  //     status: "Open",
  //   },
  //   {
  //     name: "Gipfel Coffee Company",
  //     address: "2869 NY-43, Averill Park, NY 12018",
  //     position: [42.6356, -73.5519],
  //     submitted: "Submitted 5 days ago",
  //     status: "Closed",
  //   },
  //   {
  //     name: "The Towne Tavern",
  //     address: "2850 NY-43, Averill Park, NY 12018",
  //     position: [42.635, -73.553],
  //     submitted: "Submitted 5 days ago",
  //     status: "Open",
  //   },
  // ];

  const handleClick = (location: Location) => {
    console.log(location);
    setSelectedLocation(location);
  };
  return (
    <div className="app">
      {/* Main Grid */}

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-150 p-6">
        {/* Spans 4 Cols */}
        <div className="md:col-span-4 bg-gray-100 p-4 rounded-lg">
          <Tabs defaultValue="current" className="w-100">
            <TabsList>
              <TabsTrigger
                value="current"
                className="rounded-full text-green-700 data-[state=active]:bg-green-600 data-[state=active]:text-white hover:bg-green-100 transition-colors"
              >
                Current Requests
              </TabsTrigger>
              <TabsTrigger
                value="submit"
                className="rounded-full text-green-700 data-[state=active]:bg-green-600 data-[state=active]:text-white hover:bg-green-100 transition-colors"
              >
                Submit Request
              </TabsTrigger>
            </TabsList>
            <TabsContent value="current">
              <Card locations={locations} onCardClick={handleClick} />
            </TabsContent>
            <TabsContent value="submit">
              <RequestForm
                pickedPosition={pickedPosition}
                onSubmit={async (values) => {
                  if (!values.position) return;
                  const address = await getAddress(
                    values.position[0],
                    values.position[1],
                  );
                  const newLocation: Location = {
                    name: values.requestType,
                    address,
                    position: values.position,
                    submitted: "Just now",
                    status: "Open",
                  };
                  setLocations((prev) => [...prev, newLocation]);
                }}
                // onSubmit={(values) => {
                //   if (!values.position) return;
                //   const newLocation: Location = {
                //     name: values.requestType,
                //     address: "Unknown",
                //     position: values.position,
                //     submitted: "Just now",
                //     status: "Open",
                //   };
                //   setLocations((prev) => [...prev, newLocation]);
                // }}
                //onSubmit={(values) => setSubmittedValues(values)}
              />
            </TabsContent>
          </Tabs>
        </div>

        {/* Spans 8 Cols */}
        <div className="md:col-span-8 space-y-6">
          <Map
            locations={locations}
            selectedLocation={selectedLocation}
            onMapClick={handleMapClick}
          />
        </div>
      </div>
    </div>
  );
}
