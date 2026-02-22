import { createFileRoute } from "@tanstack/react-router";
import type { Location } from "../types";
import Card from "../components/Card";
import { FormDialog } from "@/components/FormDialog";
import Map from "../components/Map";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null,
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const locations: {
    name: string;
    address: string;
    position: [number, number];
    submitted: string;
    status: "Open" | "Closed";
  }[] = [
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
  ];

  const handleClick = (location: Location) => {
    console.log(location);
    setSelectedLocation(location);
  };
  return (
    <div className="app">
      {/* Main Grid */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="border-2 border-green-600 text-green-600 px-5 py-2 m-2 rounded-2xl font-medium hover:bg-green-600 hover:text-white transition-colors duration-200 cursor-pointer"
      >
        Submit Request
      </button>
      <FormDialog open={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-150 p-6">
        {/* Spans 4 Cols */}
        <div className="md:col-span-4 bg-gray-100 p-4 rounded-lg">
          <Card locations={locations} onCardClick={handleClick} />
        </div>

        {/* Spans 8 Cols */}
        <div className="md:col-span-8 space-y-6">
          <Map locations={locations} selectedLocation={selectedLocation} />
        </div>
      </div>
    </div>
  );
}
