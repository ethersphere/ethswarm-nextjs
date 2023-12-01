import { Tab } from "@headlessui/react";

import { ButtonGroup, Container, SectionContent } from "@/components/common";

import { TabType } from "types";
import CodeBlock from "./CodeBlock";
import { useState } from "react";
import GridContainer from "@/components/common/GridContainer";

type TabsProps = {
  tabs?: Array<TabType>;
  className?: string;
};

const Tabs: React.FC<TabsProps> = ({ tabs = [], className = "" }) => {
  const [selected, setSelected] = useState(0);

  if (tabs.length === 0) {
    return null;
  }

  return (
    <Container className="">
      <GridContainer className="items-center ">
        <Tab.Group as="div" onChange={setSelected} className="col-span-6 py-20">
          <Tab.List className="flex gap-x-2 sm:gap-x-4">
            {tabs.map((tab, index) => (
              <Tab
                key={index}
                className={({ selected }: any) =>
                  selected
                    ? "font-display font-bold px-3 md:px-4 bg-[#F6F7F9] leading-8 rounded-full text-[#0D1216] text-sm  focus:outline-none"
                    : "font-display font-bold px-3 md:px-4 bg-transparent leading-8  text-[#F6F7F9] text-sm "
                }
              >
                {tab.title}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="pt-4">
            {tabs.map((tab, index) => (
              <Tab.Panel key={index} className="mr-8">
                <SectionContent
                  className="pb-8 text-[#F6F7F9]"
                  content={tab.content}
                />

                <ButtonGroup className="" ctas={tab.ctas} />
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>{" "}
        <CodeBlock className="col-span-6 " code={tabs[selected].code} />
      </GridContainer>
    </Container>
  );
};

export default Tabs;
