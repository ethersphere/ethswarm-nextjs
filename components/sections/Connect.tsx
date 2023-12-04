import * as React from "react";
import { Container, Tagline } from "@/components/common";
import { HeadingUnderline } from "@/components/common";
import content from "../../data/connect.json";
import Icons from "@/icons/components/index";
import { getAllEvents } from "lib/events";
import Newsletter from "../Newsletter";
import GridContainer from "../common/GridContainer";

type ConnectProps = {
  events: {
    title: string;
    href: string;
    add_to_calendar: string;
  }[];
};

const Connect: React.FC<ConnectProps> = ({ events }) => {
  return (
    <Container>
      <GridContainer className="w-full pt-14">
        <div className="col-span-3">
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

        <div className="col-span-2 col-start-7">
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
        <div className="col-span-4 col-start-9">
          <h3 className="text-sm font-semibold  text-[#8B909A]">
            {content.newsletter_title}
          </h3>
          <Newsletter />
        </div>
        <div className="w-full col-span-12 h-px bg-[#2D3843] mt-9" />
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
          className="text-sm font-semibold"
        >
          {title}
        </a>
      ) : (
        <span className="font-medium md:text-lg">{title}</span>
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
    <a href={href} className="block" target="_blank" rel="noreferrer">
      <span className="text-sm font-semibold">{title}</span>
    </a>
  );
};
