import * as React from "react";
import { Newsletter } from "@/components/index";
import content from "../../data/footer.json";
import { RegularLink } from "../common";
import Link from "next/link";
import Logo from "../Logo";

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <section className="relative flex flex-col items-center overflow-hidden text-gray-100 bg-gray-800">
      <div className="flex flex-wrap justify-center w-full max-w-6xl pt-0 sm:pt-12 2xl:max-w-7xl">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-20 md:grid-cols-4 lg:grid-cols-6 lg:py-32 xl:px-4">
          <div className="lg:col-span-3">
            <Logo className="h-[26px] fill-current text-white" />
            <ul className="mt-4 space-y-3 text-sm sm:mt-8 md:text-base lg:space-y-4 lg:text-lg font-display">
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
            <div key={index}>
              <h3 className="pl-2 mb-4 -ml-2 font-bold uppercase border-l border-gray-100 sm:pl-4 sm:-ml-4 sm:mb-8 sm:text-lg font-display">
                {section.title}
              </h3>
              <ul className="space-y-3 text-sm sm:mt-8 md:text-base lg:space-y-4 lg:text-lg font-display">
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
        </div>
      </div>
      <div className="flex justify-center w-full bg-black text-gray-275">
        <div className="flex flex-col justify-center w-full max-w-6xl gap-8 px-6 lg:flex-row py-14 2xl:max-w-7xl xl:px-4">
          <div className="order-2 text-sm antialiased leading-6 tracking-wider text-center lg:w-1/2 font-display lg:order-first lg:text-left">
            <div>
              {content.copyright}, {new Date().getFullYear()} ·{" "}
              <RegularLink
                href={content.privacy_cta.href}
                className="hover:underline"
              >
                {content.privacy_cta.title}
              </RegularLink>
            </div>
            <Link href="https://swarm.bzz.link/">
              <a
                target="_blank"
                className="flex items-center justify-center mt-3 space-x-4 font-semibold text-orange-onDark lg:justify-start"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 15.7485L4.05 18L8.1 15.7485V11.2545L4.05 9L0 11.2545V15.7485Z"
                    fill="#FF7A00"
                  />
                  <path
                    d="M13.9414 0L11.7024 1.34328L11.6992 1.36343V4.04664L13.9414 5.38993L13.9602 5.4L16.1992 4.06008V1.35336L13.9414 0Z"
                    fill="#FF7A00"
                  />
                  <path
                    d="M18.0004 11.2545L13.9504 9L9.90039 11.2545V15.7485L13.9504 18L18.0004 15.7485V11.2545Z"
                    fill="#FF7A00"
                  />
                  <path
                    d="M8.99332 0.899902L4.5 3.15214V7.64767L9 9.8999L13.5 7.64767V5.8572L11.3085 4.76088L10.7171 4.46594V3.86117V1.81748L8.99332 0.899902Z"
                    fill="#FF7A00"
                  />
                </svg>
                <span>Hosted on Swarm</span>
              </a>
            </Link>
          </div>
          <div className="order-1 lg:w-1/2 lg:order-first">
            <Newsletter />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
