import { FcOk, FcHighPriority } from "react-icons/fc";

function StatusIcon({ status }: { status: string }) {
  return (
    <div className="flex items-center gap-2">
      {status === "Closed" ? (
        <FcOk size={28} /> // green check icon
      ) : (
        <FcHighPriority size={28} /> // red alert icon
      )}
      <span
        className={`font-medium text-sm ${
          status === "Closed" ? "text-green-700" : "text-red-600"
        }`}
      >
        {status}
      </span>
    </div>
  );
}

export default StatusIcon;
