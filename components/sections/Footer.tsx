import * as React from "react";
import { Connect, Newsletter } from "@/components/index";
import content from "../../data/footer.json";
import { Container, RegularLink } from "../common";
import Link from "next/link";
import Logo from "../Logo";
import GridContainer from "../common/GridContainer";
import { cx } from "utils";

type FooterProps = {
  events: {
    title: string;
    href: string;
    add_to_calendar: string;
  }[];
};

const Footer: React.FC<FooterProps> = ({ events }) => {
  return (
    <footer className="relative flex flex-col items-center overflow-hidden text-gray-100 bg-gray-800 bg-gradient-to-b from-[#1F2831] to-[#000]">
      <Connect events={events} />

      <Container className="w-full">
        <GridContainer className="pt-20 pb-8 md:pt-14 md:pb-6">
          <div className="col-span-12 mb-12 md:col-span-4 md:mb-0">
            <Logo className="h-[26px] fill-current text-white" />
            <p className="mt-8 text-sm leading-5 text-[#8B909A]">
              {content.copy}
            </p>
            <ul className="mt-8 space-y-3 text-sm font-semibold md:space-y-4">
              {content.primary.map((item, index) => (
                <li key={index}>
                  <RegularLink
                    href={item.href}
                    className="text-[#F6F7F9] transition hover:text-opacity-70"
                  >
                    {item.title}
                  </RegularLink>
                </li>
              ))}
            </ul>
          </div>
          {content.secondary.map((section, index) => (
            <div
              key={index}
              className={cx(
                "col-span-6 md:col-span-2 text-sm",
                `md:col-start-${7 + index * 2}`
              )}
            >
              <h3 className="pl-2 mb-4 -ml-2 font-semibold text-[#8B909A] sm:pl-4 sm:-ml-4 sm:mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3 font-semibold sm:mt-4 lg:space-y-4 ">
                {section.items.map((item, index) => (
                  <li key={index}>
                    <RegularLink
                      href={item.href}
                      className=" text-[#F6F7F9] transition hover:text-opacity-70"
                    >
                      {item.title}
                    </RegularLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </GridContainer>
      </Container>

      <Container className="w-full">
        <GridContainer className="w-full py-8">
          <div className="flex text-[10px] antialiased   text-[#F6F7F9] text-opacity-50 col-span-12 lg:col-span-5">
            {content.copyright}, {new Date().getFullYear()} ·{" "}
            <RegularLink
              href={content.privacy_cta.href}
              className="hover:underline"
            >
              {content.privacy_cta.title}
            </RegularLink>
            <Link
              href="https://swarm.bzz.link/"
              target="_blank"
              className="ml-2"
            >
              Hosted on Swarm
            </Link>
          </div>
        </GridContainer>
      </Container>
    </footer>
  );
};

export default Footer;
