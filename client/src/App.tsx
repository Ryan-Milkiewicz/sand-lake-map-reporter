import Card from "./components/Card";
import Map from "./components/Map";
import Navbar from "./components/Navbar";
import "./App.css";
import { useState } from "react";

function App() {
  const [selectedLocation, setSelectedLocation] = useState<any>(null);

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

  const handleClick = (location: any) => {
    console.log(location);
    setSelectedLocation(location);
  };
  return (
    <div className="app">
      <Navbar />

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-[600px] p-6">
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

export default App;
