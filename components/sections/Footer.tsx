import * as React from "react";
import { Newsletter } from "@/components/index";
import content from "../../data/footer.json";
import { Container, RegularLink } from "../common";
import Link from "next/link";
import Logo from "../Logo";
import GridContainer from "../common/GridContainer";

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="relative flex flex-col items-center overflow-hidden text-gray-100 bg-gray-800 bg-gradient-to-b from-[#1F2831] to-[#000]">
      <div className="flex flex-wrap justify-center w-full max-w-6xl pt-0 sm:pt-12 2xl:max-w-7xl">
        <Container>
          <GridContainer className="py-20 lg:py-32">
            <div className="lg:col-span-4">
              <Logo className="h-[26px] fill-current text-white" />
              <p className="sm:mt-8 text-sm leading-5 text-[#8B909A]">
                {content.copy}
              </p>
              <ul className="mt-4 space-y-3 text-sm font-semibold sm:mt-8 lg:space-y-4">
                {content.primary.map((item, index) => (
                  <li key={index}>
                    <RegularLink href={item.href} className="hover:underline">
                      {item.title}
                    </RegularLink>
                  </li>
                ))}
              </ul>
            </div>
            {content.secondary.map((section, index) => (
              <div key={index} className="col-span-2 text-sm">
                <h3 className="pl-2 mb-4 -ml-2 font-semibold text-[#8B909A] sm:pl-4 sm:-ml-4 sm:mb-8">
                  {section.title}
                </h3>
                <ul className="space-y-3 font-semibold sm:mt-8 lg:space-y-4 ">
                  {section.items.map((item, index) => (
                    <li key={index}>
                      <RegularLink href={item.href} className="hover:underline">
                        {item.title}
                      </RegularLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </GridContainer>
        </Container>
      </div>
      <div className="flex justify-center w-full bg-black text-gray-275">
        <div className="flex flex-col w-full max-w-6xl gap-8 px-6 lg:flex-row py-14 2xl:max-w-7xl xl:px-4">
          <div className="flex text-[10px] antialiased   text-[#F6F7F9] text-opacity-50">
            <div>
              {content.copyright}, {new Date().getFullYear()} ·{" "}
              <RegularLink
                href={content.privacy_cta.href}
                className="hover:underline"
              >
                {content.privacy_cta.title}
              </RegularLink>
            </div>
            <Link
              href="https://swarm.bzz.link/"
              target="_blank"
              className="ml-2"
            >
              Hosted on Swarm
            </Link>
          </div>
          <div className=" lg:w-1/2">
            <Newsletter />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
