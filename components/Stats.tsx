import React, { useEffect, useState } from "react";
import { Semaphore } from "@/components/Stats/Semaphore";
import { StatsIcon } from "@/icons/components/index";
import { RegularLink } from "@/components/common";
import content from "../data/banner.json";
import { cx } from "utils";

type StatsProps = {};

export const Stats: React.FC<StatsProps> = () => {
  const [nodes, setNodes] = useState("");
  const [color, setColor] = useState<"orange" | "green" | "red">("green"); // default to orange?
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("https://api.swarmscan.io/v1/network/stats")
      .then((res) => res.json())
      .then((data) => {
        setColor("green");
        console.log(data);
        if (!data || !data.count) {
          setNodes("Network active");
        } else {
          setNodes(`${data.count}${content.nodes}`);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setNodes(content.error);
        setColor("red");
        setLoading(false);
      });
  }, []);

  return (
    <div className="ml-auto lg:block">
      <div className="pr-4.5 flex items-center justify-between space-x-4">
        <div
          className={cx(
            "flex items-center px-4 space-x-2 text-sm font-semibold leading-8 text-gray-800 transition-all  duration-1000 bg-gray-100 rounded-full bg-opacity-70 backdrop-blur-md"
          )}
        >
          {color && <Semaphore color={color} />}
          {isLoading === true ? (
            <div>{content.loading}</div>
          ) : (
            <div>{nodes}</div>
          )}
        </div>

        <div className="flex items-center px-4 space-x-2 text-sm font-semibold leading-8 text-gray-800 transition-all duration-1000 bg-gray-100 rounded-full bg-opacity-70 backdrop-blur-md">
          99.9%
        </div>

        <div className="flex items-center px-4 space-x-2 text-sm font-semibold leading-8 text-gray-800 transition-all duration-1000 bg-gray-100 rounded-full bg-opacity-70 backdrop-blur-md">
          #
        </div>
      </div>
    </div>
  );
};
