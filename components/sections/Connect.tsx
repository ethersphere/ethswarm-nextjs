import * as React from "react";
import { Container, Tagline } from "@/components/common";
import { HeadingUnderline } from "@/components/common";
import content from "../../data/connect.json";
import Icons from "@/icons/components/index";
import { getAllEvents } from "lib/events";

type ConnectProps = {
  events: {
    title: string;
    href: string;
    add_to_calendar: string;
  }[];
};

const Connect: React.FC<ConnectProps> = ({ events }) => {
  return (
    <section className="relative flex justify-center overflow-hidden text-[#F6F7F9]">
      <Container className="flex flex-col py-20 md:py-40">
        <Tagline copy={content.tagline} />

        <div className="mb-8 md:mb-12">
          <HeadingUnderline title={content.title} />
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div className="">
            <h3 className="pl-2 mb-8 -ml-2 text-xl font-bold border-l border-black sm:-ml-4 sm:pl-4 md:text-2xl">
              {content.events_title}
            </h3>
            <div className="space-y-4">
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

          <div className="">
            <h3 className="pl-2 mb-8 -ml-2 text-xl font-bold border-l border-black sm:pl-4 sm:-ml-4 md:text-2xl">
              {content.community_title}
            </h3>
            <div className="space-y-4">
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
        </div>
      </Container>
    </section>
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
    <div className="flex items-center space-x-4 ">
      {href && href.length > 0 ? (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="font-medium md:text-lg hover:underline"
        >
          {title}
        </a>
      ) : (
        <span className="font-medium md:text-lg">{title}</span>
      )}

      {add_to_calendar && add_to_calendar.length > 0 ? (
        <a
          href={add_to_calendar}
          target="_blank"
          rel="noreferrer"
          className="font-medium text-gray-700 duration-150 md:text-lg hover:underline hover:text-gray-500"
        >
          <span className="sr-only">Add to Calendar</span>
          <svg
            className="w-5 h-5 md:w-6 md:h-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_921_7852)">
              <path
                d="M18 12C16.8133 12 15.6533 12.3519 14.6666 13.0112C13.6799 13.6705 12.9109 14.6075 12.4567 15.7039C12.0026 16.8003 11.8838 18.0067 12.1153 19.1705C12.3468 20.3344 12.9182 21.4035 13.7574 22.2426C14.5965 23.0818 15.6656 23.6532 16.8295 23.8847C17.9933 24.1162 19.1997 23.9974 20.2961 23.5433C21.3925 23.0892 22.3295 22.3201 22.9888 21.3334C23.6481 20.3467 24 19.1867 24 18C24 16.4087 23.3679 14.8826 22.2426 13.7574C21.1174 12.6321 19.5913 12 18 12ZM21 19H19V21H17V19H15V17H17V15H19V17H21V19Z"
                fill="currentColor"
              />
              <path
                d="M23 3H18V1C18 0.734784 17.8946 0.48043 17.7071 0.292893C17.5196 0.105357 17.2652 0 17 0C16.7348 0 16.4804 0.105357 16.2929 0.292893C16.1054 0.48043 16 0.734784 16 1V3H8V1C8 0.734784 7.89464 0.48043 7.70711 0.292893C7.51957 0.105357 7.26522 0 7 0C6.73478 0 6.48043 0.105357 6.29289 0.292893C6.10536 0.48043 6 0.734784 6 1V3H1C0.734784 3 0.48043 3.10536 0.292893 3.29289C0.105357 3.48043 0 3.73478 0 4L0 22C0 22.2652 0.105357 22.5196 0.292893 22.7071C0.48043 22.8946 0.734784 23 1 23H10V21H2V7H22V11H24V4C24 3.73478 23.8946 3.48043 23.7071 3.29289C23.5196 3.10536 23.2652 3 23 3Z"
                fill="currentColor"
              />
            </g>
            <defs>
              <clipPath id="clip0_921_7852">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </a>
      ) : (
        ""
      )}
    </div>
  );
};

type CommunityLinkProps = {
  href: string;
  title: string;
  icon: string;
};

const CommunityLink: React.FC<CommunityLinkProps> = ({
  href = "/",
  title,
  icon = "DiscordIcon",
}) => {
  const icons: any = {
    DiscordIcon: Icons.DiscordIcon,
    TwitterIcon: Icons.TwitterIcon,
    GitHubIcon: Icons.GitHubIcon,
    RedditIcon: Icons.RedditIcon,
    YouTubeIcon: Icons.YouTubeIcon,
  };

  const IconTag: any = icon ? icons[icon] : false;

  return (
    <a
      href={href}
      className="flex items-center space-x-4 group"
      target="_blank"
      rel="noreferrer"
    >
      <IconTag className="w-6 h-6" />
      <span className="text-lg font-medium group-hover:underline">{title}</span>
    </a>
  );
};
