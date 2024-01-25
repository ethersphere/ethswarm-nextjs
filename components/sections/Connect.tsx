import * as React from "react";
import { Container } from "@/components/common";
import content from "../../data/connect.json";
import GridContainer from "../common/GridContainer";
import Newsletter from "../Newsletter";
import Link from "next/link";

type ConnectProps = {
  events: {
    title: string;
    href: string;
    add_to_calendar: string;
  }[];
};

const Connect: React.FC<ConnectProps> = ({ events }) => {
  return (
    <Container className="w-full">
      <GridContainer className="w-full space-y-12 py-14 md:space-y-0">
        <div className="col-span-12 md:col-span-6 ">
          <h3 className="text-sm font-semibold  text-[#8B909A]">
            {content.events_title}
          </h3>
          <div className="mt-4 space-y-4">
            {events.map((event, index) => (
              <EventLink
                key={index}
                title={event.title}
                add_to_calendar={event.add_to_calendar}
                href={event.href}
              />
            ))}
          </div>
        </div>

        <div className="col-span-12 md:col-span-2 md:col-start-7">
          <h3 className="text-sm font-semibold  text-[#8B909A]">
            {content.community_title}
          </h3>
          <div className="mt-4 space-y-4">
            {content.community.map((item, index) => (
              <CommunityLink
                key={index}
                title={item.title}
                icon={item.icon}
                href={item.href}
              />
            ))}
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 md:col-start-9">
          <h3 className="text-sm font-semibold  text-[#8B909A]">
            {content.newsletter_title}
          </h3>
          <Newsletter />
        </div>
      </GridContainer>

      <GridContainer>
        <div className="col-span-12 h-px bg-[#2D3843]" />
      </GridContainer>
    </Container>
  );
};

export default Connect;

type EventLinkProps = {
  href?: string;
  title: string;
  add_to_calendar?: string;
};

const EventLink: React.FC<EventLinkProps> = ({
  href = "",
  title,
  add_to_calendar = "",
}) => {
  return (
    <div className="">
      {href && href.length > 0 ? (
        <div className="flex items-center gap-4">
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-[#F6F7F9] transition hover:text-opacity-70"
          >
            {title}
          </a>

          {add_to_calendar.length > 0 && (
            <Link href={add_to_calendar} target="_blank">
              <span className="sr-only">Add to calendar</span>
              <svg
                className="w-4 h-4 hover:opacity-70"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 16"
              >
                <g fill="#F6F7F9" clipPath="url(#a)">
                  <path d="M8.467 14h-6V6h12v2h2V4a1 1 0 0 0-1-1h-2V1a1 1 0 0 0-2 0v2h-6V1a1 1 0 0 0-2 0v2h-2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h7v-2Z" />
                  <path d="M15.967 12h-1.5v-1.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V12h-1.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1.5v1.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V14h1.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5Z" />
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M.467 0h16v16h-16z" />
                  </clipPath>
                </defs>
              </svg>
            </Link>
          )}
        </div>
      ) : (
        <span className="font-medium md:text-lg ">{title}</span>
      )}
    </div>
  );
};

type CommunityLinkProps = {
  href: string;
  title: string;
  icon: string;
};

const CommunityLink: React.FC<CommunityLinkProps> = ({ href = "/", title }) => {
  return (
    <a
      href={href}
      className="block text-[#F6F7F9] transition hover:text-opacity-70"
      target="_blank"
      rel="noreferrer"
    >
      <span className="text-sm font-semibold">{title}</span>
    </a>
  );
};
