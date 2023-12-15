import React, { useEffect, useRef, useState } from "react";
import { Semaphore } from "@/components/Stats/Semaphore";
import content from "../data/banner.json";
import { cx } from "utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

type StatsProps = {};

const Stats: React.FC<StatsProps> = () => {
  const [nodes, setNodes] = useState("");
  const [color, setColor] = useState<"orange" | "green" | "red">("green"); // default to orange?
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const startTime = new Date().getTime();

    fetch("https://api.swarmscan.io/v1/network/stats")
      .then((res) => res.json())
      .then((data) => {
        setColor("green");
        if (!data || !data.count) {
          setNodes("Network active");
        } else {
          setNodes(`${data.count}${content.nodes}`);
        }

        const endTime = new Date().getTime();
        const timeDiff = endTime - startTime;
        const timeout = timeDiff < 1000 ? 1000 - timeDiff : 0;

        setTimeout(() => {
          setLoading(false);
        }, timeout);
      })
      .catch((err) => {
        console.log(err);
        setNodes(content.error);
        setColor("red");
        setLoading(false);
      });
  }, []);

  return (
    <div
      className={cx(
        "flex items-center lg:justify-between pl-4 lg:pl-4 space-x-4"
      )}
    >
      <Link
        href="https://swarmscan.io/"
        target="_blank"
        className="rounded-full"
      >
        <motion.div
          className={cx(
            "h-8 flex items-center px-4 space-x-2 text-sm font-semibold leading-8 text-gray-800 transition-all duration-1000 bg-gray-100 rounded-full bg-opacity-70 backdrop-blur-md truncate"
          )}
        >
          <AnimatePresence initial={false} mode="wait">
            {isLoading === true && (
              <motion.div
                key="loading"
                initial={false}
                animate={{ x: 0 }}
                exit={{
                  x: "-150%",
                }}
              >
                {content.loading}
              </motion.div>
            )}

            {isLoading === false && (
              <motion.div
                key="notLoading"
                className="flex items-center space-x-2"
                initial={{ x: "150%" }}
                animate={{ x: 0 }}
                exit={{
                  x: "150%",
                }}
              >
                <Semaphore color={color} />
                <div>{nodes}</div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </Link>

      <Link
        href="#"
        target="_blank"
        className="flex items-center h-8 px-4 space-x-2 text-sm font-semibold leading-8 text-gray-800 transition-all duration-1000 bg-gray-100 rounded-full bg-opacity-70 backdrop-blur-md"
      >
        <svg
          className="h-[19px] w-[19px]"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 19 20"
        >
          <path
            fill="#000"
            d="M9.5.5C14.739.5 19 4.762 19 10c0 5.239-4.261 9.5-9.5 9.5C4.262 19.5 0 15.239 0 10 0 4.762 4.262.5 9.5.5ZM6.443 11.583a3.143 3.143 0 0 0 1.564 3.585 3.17 3.17 0 0 0 4.285-1.3c.068-.129.216-.41.832-2.285h4.133c.104-.511.16-1.04.16-1.583 0-4.365-3.552-7.917-7.917-7.917S1.583 5.635 1.583 10c0 .542.056 1.072.16 1.583h4.7Z"
          />
          <path
            fill="#000"
            d="M12.36 6.2a.397.397 0 0 1 .686.366c-.187.609-1.83 5.96-2.15 6.555a1.584 1.584 0 0 1-2.793-1.493c.318-.594 3.855-4.935 4.257-5.428Z"
          />
        </svg>
      </Link>

      <Link
        href="https://gateway.ethswarm.org/access/"
        target="_blank"
        className="flex items-center h-8 px-4 space-x-2 text-sm font-semibold leading-8 text-gray-800 transition-all duration-1000 bg-gray-100 rounded-full bg-opacity-70 backdrop-blur-md"
      >
        #
      </Link>
    </div>
  );
};

export default Stats;
