import React, { Fragment, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Transition } from "@headlessui/react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Stats } from "@/components/index";
import { motion } from "framer-motion";

import { Container, RegularLink } from "@/components/common";
import Logo from "./Logo";
import { cx } from "utils";
import { ArrowIcon } from "@/icons/components/index";

import navigation from "../data/nav/main.json";
import GridContainer from "./common/GridContainer";

type NavigationProps = {
  textColor?: "text-gray-100" | "text-gray-700";
};

const Navigation: React.FC<NavigationProps> = ({
  textColor = "text-gray-100",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [offset, setOffset] = useState<number | null>();
  const [value, setValue] = useState<string | null>();
  const [activeTrigger, setActiveTrigger] = useState<HTMLButtonElement | null>(
    null
  );
  const listRef = useRef<HTMLUListElement>(null);
  const router = useRouter();

  const [expanded, setExpanded] = useState(-1);

  useEffect(() => {
    const list = listRef.current;
    //set the offset of the menu to position of the active trigger
    if (activeTrigger && list) {
      const listWidth = list.offsetWidth;
      const listCenter = listWidth / 2;

      const triggerOffsetRight =
        listWidth - activeTrigger.offsetLeft - activeTrigger.offsetWidth + 20;

      setOffset(Math.round(listCenter - triggerOffsetRight));
    }
  }, [activeTrigger, value]);

  useEffect(() => {
    setExpanded(-1);
  }, [isOpen]);

  return (
    <div
      className={cx(
        "absolute left-0 right-0 z-40 flex justify-center w-full top-8 lg:top-12",
        textColor
      )}
    >
      <Container className="w-full">
        <GridContainer>
          <NavigationMenu.Root
            delayDuration={0}
            onValueChange={setValue}
            className="relative flex items-center w-full col-span-12"
          >
            <Link href="/" className="group">
              <Logo
                className={cx(
                  "h-6 lg:h-8 fill-current group-hover:md:text-opacity-75 duration-150",
                  textColor
                )}
              />
            </Link>
            <div className="relative mr-auto">
              <NavigationMenu.List
                ref={listRef}
                className="items-center justify-center hidden w-full px-8 lg:flex"
              >
                {navigation.items.length > 0 &&
                  navigation.items.map((link, index) => (
                    <NavigationMenu.Item key={link.title} value={link.title}>
                      {link.children ? (
                        <NavigationMenu.Trigger
                          ref={(node) => {
                            if (link.title === value && activeTrigger !== node)
                              setActiveTrigger(node);

                            return node;
                          }}
                          className="flex items-center px-2.5 py-1 text-sm antialiased font-semibold text-gray-100 duration-100 hover:opacity-70"
                        >
                          {link.title}
                          <ArrowIcon
                            className={cx(
                              "w-2.5 h-2 ml-2 duration-100",
                              link.title === value
                                ? " -rotate-90"
                                : " rotate-90"
                            )}
                          />
                        </NavigationMenu.Trigger>
                      ) : (
                        <MenuLink
                          key={index}
                          {...link}
                          selected={router.asPath.startsWith(link.href)}
                        />
                      )}
                      {link.children && (
                        <NavigationMenu.Content className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full sm:w-auto">
                          <div className="grid p-1.5 w-56">
                            {link.children.map((child: any, index: any) => (
                              <NavigationMenu.Link
                                key={index}
                                href={child.href}
                                target={
                                  child.href.startsWith("http")
                                    ? "_blank"
                                    : undefined
                                }
                                className={cx(
                                  "px-3.5 py-2.5 antialiased duration-150 group hover:bg-[#0D1216] hover:bg-opacity-50 rounded-lg"
                                )}
                              >
                                <div className="text-sm font-semibold text-gray-100">
                                  {child.title}
                                </div>
                                {child.subtitle && (
                                  <div className="text-xs text-gray-100 text-opacity-70">
                                    {child.subtitle}
                                  </div>
                                )}
                              </NavigationMenu.Link>
                            ))}
                          </div>
                        </NavigationMenu.Content>
                      )}
                    </NavigationMenu.Item>
                  ))}
              </NavigationMenu.List>
              <div className="perspective-[2000px] absolute top-full left-0 w-full flex justify-center ">
                <NavigationMenu.Viewport
                  forceMount
                  className="relative mt-[10px] data-[state=closed]:opacity-0 data-[state=closed]:scale-50 h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden bg-opacity-90 border border-[#2D3843] bg-[#1F2831]  backdrop-blur-md rounded-xl  duration-100 sm:w-[var(--radix-navigation-menu-viewport-width)] shadow-dark "
                  style={{
                    transform: `translateX(${offset}px)`,
                    transition: `transform ${
                      activeTrigger === null ? 0 : 0.1
                    }s ease, opacity 0.1s ease , width 0.1s ease, height 0.1s ease`,
                  }}
                />
              </div>
            </div>
            <div className="hidden lg:block">
              <Link
                className="flex items-center h-8 px-4 space-x-2 text-sm font-bold leading-8 tracking-wider text-gray-800 truncate transition-all duration-1000 bg-gray-100 rounded-full bg-opacity-70 backdrop-blur-md"
                href="/get-bzz"
              >
                $BZZ
              </Link>
            </div>
            <div className="hidden lg:block">
              <Stats />
            </div>
            <div className="flex items-center lg:hidden">
              <HamburgerButton onClick={() => setIsOpen(true)} />
            </div>
          </NavigationMenu.Root>
        </GridContainer>
      </Container>

      <Transition
        as={Fragment}
        show={isOpen}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="absolute inset-0 -top-4">
          <div className="bg-gray-800 shadow-lg border border-[#2D3843] mx-2 rounded-xl backdrop-blur-md">
            <div className="pt-2">
              <div className="flex items-center justify-between px-4 pb-5 -mx-px ">
                <Link href="/" onClick={() => setIsOpen(false)}>
                  <Logo
                    className={cx("w-auto h-6 text-gray-100 fill-current")}
                  />
                </Link>
                <div className="-mr-2">
                  <CloseButton onClick={() => setIsOpen(false)} />
                </div>
              </div>

              <nav className="grid px-4">
                {navigation.items.length > 0 &&
                  navigation.items.map((link, index) => (
                    <Fragment key={index}>
                      {link.children && link.children.length > 0 ? (
                        <Fragment key={index}>
                          <button
                            className={cx(
                              expanded === index ? "text-opacity-70" : "",
                              "flex items-center py-3 text-sm font-semibold transition text-gray-100 rounded-md w-full "
                            )}
                            style={{ WebkitTapHighlightColor: "transparent" }}
                            onClick={() =>
                              expanded === index
                                ? setExpanded(-1)
                                : setExpanded(index)
                            }
                          >
                            {link.title}
                            <ArrowIcon
                              className={cx(
                                "w-2.5 h-2 ml-2 duration-200",
                                expanded === index ? "-rotate-90" : "rotate-90"
                              )}
                            />
                          </button>
                          <motion.div
                            className="overflow-hidden"
                            initial={{ height: 0 }}
                            animate={{
                              height: expanded === index ? "auto" : 0,
                            }}
                          >
                            <div className="bg-[#0D1216] bg-opacity-50 rounded-md overflow-hidden">
                              {link.children.map((child, index) => (
                                <RegularLink
                                  key={index}
                                  href={child.href}
                                  className={cx(
                                    "block px-3.5 py-2.5 antialiased border-b border border-[#1F2831]"
                                  )}
                                  onClick={() => setIsOpen(false)}
                                >
                                  <div className="text-sm font-semibold text-gray-100">
                                    {child.title}
                                  </div>
                                  {child.subtitle && (
                                    <div className="text-xs text-gray-100 text-opacity-70">
                                      {child.subtitle}
                                    </div>
                                  )}
                                </RegularLink>
                              ))}
                            </div>
                          </motion.div>
                        </Fragment>
                      ) : (
                        <RegularLink
                          onClick={() => setIsOpen(false)}
                          href={link.href}
                          className="flex items-center py-3 text-sm font-semibold text-gray-100 rounded-md "
                        >
                          {link.title}
                        </RegularLink>
                      )}
                    </Fragment>
                  ))}
              </nav>
              <div className="mt-3 mb-8">
                <Stats />
              </div>
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
  selected?: boolean;
};
const MenuLink: React.FC<MenuLinkProps> = ({
  href = "/",
  title,
  selected = false,
}) => {
  return (
    <RegularLink
      href={href}
      className={cx(
        "px-2.5 py-1 text-sm antialiased font-semibold  flex items-center duration-200 hover:opacity-70   text-gray-100"
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
      className="inline-flex items-center justify-center p-1.5 mt-px rounded-md text-gray-100 bg-transparent  focus:outline-none "
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
