import * as React from "react";
import { Container } from "@/components/common";
import content from "../../data/connect.json";
import GridContainer from "../common/GridContainer";
import Newsletter from "../Newsletter";

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
      <GridContainer className="w-full space-y-12 py-14 lg:space-y-0">
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

const EventLink: React.FC<EventLinkProps> = ({ href = "", title }) => {
  return (
    <div className="">
      {href && href.length > 0 ? (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="text-sm font-semibold text-[#F6F7F9] transition hover:text-opacity-70"
        >
          {title}
        </a>
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
