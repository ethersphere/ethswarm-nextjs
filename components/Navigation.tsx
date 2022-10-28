import React, { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Transition } from "@headlessui/react";

import { Container, RegularLink } from "@/components/common";
import Logo from "./Logo";
import { cx } from "utils";
import { ArrowIcon } from "@/icons/components/index";

import navigation from "../data/nav/main.json";

type NavigationProps = {
  textColor?: "text-white" | "text-gray-700";
};

const Navigation: React.FC<NavigationProps> = ({
  textColor = "text-white",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [firstLevel, setFirstLevel] = useState<any>(false);
  const router = useRouter();

  useEffect(() => {
    // find navigation item that matches current route
    const item = navigation.items.find((item) =>
      router.asPath.startsWith(item.href)
    );

    if (item) {
      setFirstLevel(item);
    }
  }, [router]);

  return (
    <div
      className={cx(
        "absolute left-0 right-0 z-20 flex justify-center w-full top-8 lg:top-24",
        textColor
      )}
    >
      <Container className="">
        <div className="flex items-center justify-between">
          <div>
            <Link href="/">
              <a className="group">
                <Logo
                  className={cx(
                    "h-6 lg:h-9 fill-current group-hover:text-opacity-75 duration-150",
                    textColor
                  )}
                />
              </a>
            </Link>
          </div>
          <div className="justify-center hidden px-8 space-x-4 lg:flex">
            {navigation.items.length > 0 &&
              navigation.items
                .slice(0, navigation.items.length - 1)
                .map((link, index) => (
                  <MenuLink
                    key={index}
                    {...link}
                    textColor={textColor}
                    selected={router.asPath.startsWith(link.href)}
                  />
                ))}
          </div>

          <div className="hidden text-lg antialiased font-bold leading-10 tracking-wider uppercase font-display lg:flex">
            {navigation.items.length > 1 && (
              <MenuLink
                textColor={textColor}
                {...navigation.items[navigation.items.length - 1]}
                selected={router.asPath.startsWith(
                  navigation.items[navigation.items.length - 1].href
                )}
              />
            )}
          </div>

          <div className="flex items-center lg:hidden">
            <HamburgerButton onClick={() => setIsOpen(true)} />
          </div>
        </div>

        {firstLevel && firstLevel.children && firstLevel.children.length > 0 && (
          <div className="items-center justify-center hidden mt-4 space-x-4 lg:flex">
            {firstLevel.children.map((child: any, index: any) => (
              <RegularLink
                key={index}
                href={child.href}
                className={cx(
                  "inline-flex items-center px-4 py-1 text-lg antialiased font-bold leading-10 tracking-wider uppercase duration-150 font-display group hover:text-gray-400",
                  child.href === router.asPath ? "text-gray-400" : ""
                )}
              >
                <span>{child.title}</span>
                <div className="relative w-4 h-4 ml-2">
                  <ArrowIcon className="absolute inset-0 w-4 h-4 duration-200 group-hover:translate-x-4 group-hover:opacity-0 group-hover:text-gray-400" />
                  <ArrowIcon className="absolute inset-0 w-4 h-4 duration-200 -translate-x-4 opacity-0 group-hover:text-gray-400 group-hover:translate-x-0 group-hover:opacity-100" />
                </div>
              </RegularLink>
            ))}
          </div>
        )}
      </Container>

      <Transition
        as={Fragment}
        show={isOpen}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 scale-90"
        enterTo="opacity-100"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0 scale-90"
      >
        <div className="absolute inset-x-0 -top-8">
          <div className="bg-gray-800 shadow-lg">
            <div className="pt-6">
              <div className="flex items-center justify-between px-6 pb-6 border-b border-gray-500">
                <Link href="/">
                  <a onClick={() => setIsOpen(false)}>
                    <Logo className={cx("w-auto h-6 text-gray-100")} />
                  </a>
                </Link>
                <div className="-mr-2">
                  <CloseButton onClick={() => setIsOpen(false)} />
                </div>
              </div>

              <nav className="grid divide-y divide-gray-500">
                {navigation.items.length > 0 &&
                  navigation.items.map((link, index) => (
                    <div key={index} className="px-6 py-3">
                      <RegularLink
                        onClick={() => setIsOpen(false)}
                        href={link.href}
                        className="flex items-center px-3 py-4 text-base font-medium tracking-wider text-gray-100 uppercase rounded-md font-display hover:bg-gray-700"
                      >
                        {link.title}
                      </RegularLink>
                      {router.asPath.startsWith(link.href) &&
                        link.children &&
                        link.children.length > 0 && (
                          <div className="px-4 py-3 space-y-4">
                            {link.children.map((child, index) => (
                              <RegularLink
                                key={index}
                                onClick={() => setIsOpen(false)}
                                href={child.href}
                                className="flex items-center px-3 py-4 text-base font-medium tracking-wider text-gray-100 uppercase rounded-md font-display hover:bg-gray-700"
                              >
                                <span>{child.title}</span>
                                <ArrowIcon className="ml-2.5 w-4 h-4 text-gray-100" />
                              </RegularLink>
                            ))}
                          </div>
                        )}
                    </div>
                  ))}
              </nav>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default Navigation;

type MenuLinkProps = {
  href?: string;
  title: string;
  textColor?: "text-white" | "text-gray-700";
  selected?: boolean;
};
const MenuLink: React.FC<MenuLinkProps> = ({
  href = "/",
  title,
  textColor,
  selected = false,
}) => {
  return (
    <RegularLink
      href={href}
      className={cx(
        "px-4 py-1 text-lg antialiased font-bold leading-10 tracking-wider uppercase duration-150 font-display hover:bg-black hover:text-gray-100",
        selected ? "bg-black text-gray-100" : "",
        textColor === "text-white" ? "bg-gray-800" : ""
      )}
    >
      {title}
    </RegularLink>
  );
};

type HamburgerButtonProps = {
  onClick?: () => void;
};
const HamburgerButton: React.FC<HamburgerButtonProps> = ({ onClick }) => {
  return (
    <button className="focus:outline-none" onClick={onClick}>
      <span className="sr-only">Open menu</span>
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
  );
};

type CloseButtonProps = {
  onClick?: () => void;
};
const CloseButton: React.FC<CloseButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="inline-flex items-center justify-center p-2 text-gray-100 bg-transparent rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
    >
      <span className="sr-only">Close menu</span>
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
};
