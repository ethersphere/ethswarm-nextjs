import React, { useEffect, useRef, useState } from "react";
import { Semaphore } from "@/components/Stats/Semaphore";
import content from "../data/banner.json";
import { cx } from "utils";
import { AnimatePresence, motion } from "framer-motion";

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
    <div className="flex items-center justify-between pl-4 space-x-4">
      <motion.div
        className={cx(
          "flex items-center px-4 space-x-2 text-sm font-semibold leading-8 text-gray-800 transition-all duration-1000 bg-gray-100 rounded-full bg-opacity-70 backdrop-blur-md truncate"
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

      <div className="flex items-center px-4 space-x-2 text-sm font-semibold leading-8 text-gray-800 transition-all duration-1000 bg-gray-100 rounded-full bg-opacity-70 backdrop-blur-md">
        99.9%
      </div>

      <div className="flex items-center px-4 space-x-2 text-sm font-semibold leading-8 text-gray-800 transition-all duration-1000 bg-gray-100 rounded-full bg-opacity-70 backdrop-blur-md">
        #
      </div>
    </div>
  );
};

export default Stats;
