import { cx } from "utils";

const RoadmapItem: React.FC<{ status: string }> = ({ status }) => {
  return (
    <span
      className={cx(
        " flex items-center px-2 space-x-2 text-sm leading-loose rounded-lg overflow-hidden font-medium ",
        {
          completed: "text-[#117800] bg-[#D9EDDB]",
          "in-progress": "text-[#EB7000] bg-[#FFE2C0]",
          "next-up": "text-[#B2B6B8] bg-[#E5E9EC]",
        }[status]
      )}
    >
      {status === "completed" && (
        <>
          <svg
            className="w-4 h-4"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#a)" fill="#117800">
              <path d="M8 0a8 8 0 0 0 0 16A8 8 0 0 0 8 0Zm0 14a6 6 0 1 1 .01-12.01A6 6 0 0 1 8 14Z" />
              <path d="M7 11.41 3.59 8 5 6.59l2 2 4-4L12.41 6 7 11.41Z" />
            </g>
            <defs>
              <clipPath id="a">
                <path fill="#fff" d="M0 0h16v16H0z" />
              </clipPath>
            </defs>
          </svg>
          <span>Completed</span>
        </>
      )}

      {status === "in-progress" && (
        <>
          <svg
            className="w-4 h-4 animate-spin"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#a)">
              <path
                opacity=".4"
                d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16ZM8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"
                fill="#FF961A"
              />
              <path
                d="M16 8h-2a6 6 0 0 0-6-6V0a8 8 0 0 1 8 8Z"
                fill="#EB7000"
              />
              <path
                d="m9.98 15.73-.5-1.93a6 6 0 0 0 4.33-7.3l1.94-.5a8 8 0 0 1-5.77 9.73Z"
                fill="#EB7000"
              />
            </g>
            <defs>
              <clipPath id="a">
                <path fill="#fff" d="M0 0h16v16H0z" />
              </clipPath>
            </defs>
          </svg>
          <span>In Progress</span>
        </>
      )}

      {status === "next-up" && (
        <>
          <svg
            className="w-4 h-4"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#a)">
              <path
                opacity=".4"
                d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16ZM8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"
                fill="#000"
                fillOpacity=".5"
              />
            </g>
            <defs>
              <clipPath id="a">
                <path fill="#fff" d="M0 0h16v16H0z" />
              </clipPath>
            </defs>
          </svg>
          <span>Next up</span>
        </>
      )}
    </span>
  );
};

export default RoadmapItem;
