import React, { Fragment, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Transition } from "@headlessui/react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

import { Container, RegularLink } from "@/components/common";
import Logo from "./Logo";
import { cx } from "utils";
import { ArrowIcon } from "@/icons/components/index";

import navigation from "../data/nav/main.json";
import { Stats } from "@/components/Stats";

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

  useEffect(() => {
    const list = listRef.current;

    if (activeTrigger && list) {
      const listWidth = list.offsetWidth;
      const listCenter = listWidth / 2;

      const triggerOffsetRight =
        listWidth - activeTrigger.offsetLeft - activeTrigger.offsetWidth + 6;

      setOffset(Math.round(listCenter - triggerOffsetRight));
    } else if (value === "") {
      setOffset(null);
    }
  }, [activeTrigger, value]);

  console.log(offset);

  return (
    <div
      className={cx(
        "absolute left-0 right-0 z-40 flex justify-center w-full top-8 lg:top-12",
        textColor
      )}
    >
      <Container className="">
        <NavigationMenu.Root
          onValueChange={setValue}
          className="relative flex items-center w-full"
        >
          <Link href="/" className="group">
            <Logo
              className={cx(
                "h-6 lg:h-8 fill-current group-hover:text-opacity-75 duration-150",
                textColor
              )}
            />
          </Link>
          <NavigationMenu.List
            ref={listRef}
            className="items-center justify-center hidden w-full px-8 mr-auto lg:flex"
          >
            {navigation.items.length > 0 &&
              navigation.items.map((link, index) => (
                <>
                  <NavigationMenu.Item key={link.title} value={link.title}>
                    {link.children ? (
                      <NavigationMenu.Trigger
                        ref={(node) => {
                          if (link.title === value && activeTrigger !== node)
                            setActiveTrigger(node);

                          return node;
                        }}
                      >
                        <MenuLink
                          key={index}
                          {...link}
                          icon
                          selected={value === link.title}
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
                            <RegularLink
                              key={index}
                              href={child.href}
                              className={cx(
                                "  px-3.5 py-2.5 antialiased duration-150 group hover:bg-[#0D1216] hover:bg-opacity-50 rounded-lg"
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
                            </RegularLink>
                          ))}
                        </div>
                      </NavigationMenu.Content>
                    )}
                  </NavigationMenu.Item>
                </>
              ))}
          </NavigationMenu.List>

          <Stats />

          <div className="flex items-center lg:hidden">
            <HamburgerButton onClick={() => setIsOpen(true)} />
          </div>

          <div className="perspective-[2000px] absolute top-full left-0 flex w-full justify-center">
            <NavigationMenu.Viewport
              className="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden bg-opacity-90 border border-[#2D3843] bg-[#1F2831] backdrop-blur-md rounded-xl    duration-200 sm:w-[var(--radix-navigation-menu-viewport-width)] transition-all "
              style={{
                // Avoid transitioning from initial position when first opening
                // display: !offset ? "none" : undefined,
                transform: `translateX(${offset}px)`,
                transition: "all 0.25s ease",
              }}
            />
          </div>
        </NavigationMenu.Root>
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
                <Link href="/" onClick={() => setIsOpen(false)}>
                  <Logo className={cx("w-auto h-6 text-gray-100")} />
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
  selected?: boolean;
  icon?: boolean;
};
const MenuLink: React.FC<MenuLinkProps> = ({
  href = "/",
  title,
  icon,
  selected = false,
}) => {
  return (
    <RegularLink
      href={href}
      className={cx(
        "px-5 py-1 text-sm antialiased font-semibold  flex items-center duration-200 hover:opacity-70   text-gray-100"
      )}
    >
      {title}
      {icon && (
        <ArrowIcon
          className={cx(
            "w-3 h-3 duration-200",
            selected ? " -rotate-90" : " rotate-90"
          )}
        />
      )}
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
