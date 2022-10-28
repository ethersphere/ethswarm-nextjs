import React, { useState, useEffect } from "react";
import {
  ButtonGroup,
  Container,
  SectionContent,
  Tagline,
} from "@/components/common";
import { CtaType, FeatureType } from "types";

type MillionsProps = {
  tagline?: string;
  title: string;
  content: string;
  features?: Array<FeatureType>;
  ctas: Array<CtaType>;
  starts_in?: {
    label: string;
    date: string;
  };
};

const Millions: React.FC<MillionsProps> = ({
  tagline,
  title,
  content,
  features = [],
  ctas,
  starts_in,
}) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [timerOver, isTimerOver] = useState(false);

  function startsIn() {
    if (!starts_in) {
      return;
    }
    const now = new Date().getTime();
    const countdownDate = new Date(starts_in.date).getTime();

    const timeleft = countdownDate - now;

    setDays(Math.floor(timeleft / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    setMinutes(Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60)));
  }

  useEffect(() => {
    // if any value is negative, we set timer to over
    if (days < 0 || hours < 0 || minutes < 0) {
      isTimerOver(true);
    }
  }, [minutes, hours, days]);

  useEffect(() => {
    setInterval(() => {
      startsIn();
    }, 1000);
  }, []);

  return (
    <section className="relative flex justify-center overflow-hidden text-gray-100 bg-gray-800">
      <img
        loading="lazy"
        src={`/assets/wam.png`}
        alt={`Background`}
        className="absolute z-0 object-cover w-screen h-full pointer-events-none"
      />

      {/* <div className="absolute inset-0 w-full h-full pointer-events-none bg-millions-gradient mask" /> */}

      <Container className="z-20 flex flex-col py-20 md:py-40">
        <Tagline copy={tagline} />

        <div className="mb-8 md:mb-14">
          <img
            src="/assets/millions_logo.png"
            alt={title}
            className="md:h-12"
          />
        </div>

        <SectionContent className="text-gray-100 mb-14" content={content} />

        <div className="">
          {timerOver || !starts_in ? (
            <div className=""></div>
          ) : (
            <div className="flex flex-wrap gap-8">
              <span className="text-lg font-bold md:mr-28">
                {starts_in.label}
              </span>
              <div className="flex">
                <div className="">
                  <div className="inline-flex items-center px-4 text-lg font-bold border-l border-gray-100">
                    {days}
                  </div>
                  <div className="px-4 mt-4 font-bold md:text-lg">Days</div>
                </div>

                <div className="">
                  <div className="inline-flex items-center px-4 text-lg font-bold border-l border-gray-100">
                    {hours}
                  </div>
                  <div className="px-4 mt-4 font-bold md:text-lg">Hours</div>
                </div>

                {/* <div className="">
                  <div className="inline-flex items-center px-4 text-lg font-bold border-l border-gray-100">
                    {minutes}
                  </div>
                  <div className="px-4 mt-4 font-bold md:text-lg">Minutes</div>
                </div> */}
              </div>
            </div>
          )}
        </div>

        <ButtonGroup ctas={ctas} className="mt-16 mb-4" />
      </Container>
    </section>
  );
};

export default Millions;
