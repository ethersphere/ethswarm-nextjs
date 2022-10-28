import * as React from "react";

type SemaphoreType = {
  color: "green" | "orange" | "red";
};

const Semaphore: React.FC<SemaphoreType> = ({ color = "green" }) => {
  return (
    <>
      {/* Tailwind purge override */}
      <span className="hidden bg-green-500 opacity-0"></span>
      <span className="hidden bg-orange-500 opacity-0"></span>
      <span className="hidden bg-red-500 opacity-0"></span>

      {/* Actual element */}
      <div className={`h-4 w-4 bg-${color}-500 rounded-full`}></div>
    </>
  );
};
export default Semaphore;
