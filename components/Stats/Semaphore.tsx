import * as React from "react";

type SemaphoreType = {
  color: "green" | "orange" | "red";
};

export const Semaphore: React.FC<SemaphoreType> = ({ color = "green" }) => {
  return (
    <>
      {/* Actual element */}
      <div className={`h-2.5 w-2.5 bg-${color}-500 rounded-full`}></div>

      {/* Tailwind purge override */}
      <span className="hidden bg-[#1effbb] opacity-0"></span>
      <span className="hidden bg-orange-500 opacity-0"></span>
      <span className="hidden bg-red-500 opacity-0"></span>
    </>
  );
};
