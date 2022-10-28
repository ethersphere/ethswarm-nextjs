import * as React from "react";
import { Tab } from "@headlessui/react";

import { ButtonGroup, SectionContent } from "@/components/common";

import { TabType } from "types";
import CodeBlock from "./CodeBlock";

type TabsProps = {
  tabs?: Array<TabType>;
  className?: string;
};

const Tabs: React.FC<TabsProps> = ({ tabs = [], className = "" }) => {
  if (tabs.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col">
      <div className="text-lg">
        <Tab.Group>
          <Tab.List className="flex pb-4 gap-x-2 sm:gap-x-4">
            {tabs.map((tab, index) => (
              <Tab
                key={index}
                className={({ selected }: any) =>
                  selected
                    ? "font-display font-bold px-3 md:px-4 bg-black py-2 text-gray-100 text-sm md:text-lg tracking-wider uppercase focus:outline-none"
                    : "font-display font-bold px-3 md:px-4 bg-transparent py-2 text-black text-sm md:text-lg tracking-wider uppercase"
                }
              >
                {tab.title}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="pt-4">
            {tabs.map((tab, index) => (
              <Tab.Panel key={index}>
                <SectionContent className="pb-8" content={tab.content} />

                <ButtonGroup className="" ctas={tab.ctas} />

                <CodeBlock className="mt-8 -mx-4" code={tab.code} />
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default Tabs;
