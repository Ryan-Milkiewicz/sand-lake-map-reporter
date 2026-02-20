import { FcOk, FcHighPriority } from "react-icons/fc";
import type { Location } from "../types/index";

type CardProps = {
  locations: Location[];
  onCardClick: (location: Location) => void;
};

export default function Card({ locations, onCardClick }: CardProps) {
  return (
    <>
      {locations.map((location, index) => (
        <div
          key={index}
          onClick={() => onCardClick(location)}
          className="bg-white rounded-xl shadow-md p-4 mb-4 pb-6 hover:shadow-lg transition-shadow duration-200"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {location.status === "Closed" ? (
                <FcOk size={28} />
              ) : (
                <FcHighPriority size={28} />
              )}

              <div>
                <p className="font-semibold text-md truncate">
                  {location.address}
                </p>
                <p className="text-sm text-gray-500">{location.submitted}</p>

                <span
                  className={`font-medium text-sm px-4 py-1 rounded-full ${
                    location.status === "Closed"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {location.status}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
