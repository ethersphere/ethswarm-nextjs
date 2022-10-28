import React, { useEffect, useState } from "react";
import { SearchInput, Semaphore } from "@/components/Banner/index";
import { StatsIcon } from "@/icons/components/index";
import { RegularLink } from "@/components/common";
import content from "../data/banner.json";

type BannerProps = {};

const Banner: React.FC<BannerProps> = () => {
  const [nodes, setNodes] = useState("");
  const [color, setColor] = useState<"orange" | "green" | "red">("green"); // default to orange?
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("https://swarmscan-api.resenje.org/v1/network/stats")
      .then((res) => res.json())
      .then((data) => {
        setColor("green");
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
    <div className="absolute top-0 left-0 right-0 z-20 hidden text-white bg-black lg:block">
      <div className="py-3 px-4.5 flex items-center justify-between">
        <div className="flex items-center text-xs font-semibold leading-none text-gray-300 gap-x-2">
          {color && <Semaphore color={color} />}
          {isLoading === true ? (
            <div>{content.loading}</div>
          ) : (
            <div>{nodes}</div>
          )}

          <StatsIcon className="w-3.5 h-3.5" />

          {content.link && content.link.href && content.link.children && (
            <RegularLink className="hover:underline" href={content.link.href}>
              {content.link.children}
            </RegularLink>
          )}
        </div>

        <div className="hidden sm:block">
          <SearchInput placeholder={content.searchPlaceholder} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
