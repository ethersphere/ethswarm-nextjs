import type { NextPage } from "next";
import { Footer, Hero } from "@/components/index";
import content from "data/pages/privacy.json";
import { Container, Meta, SectionContent } from "@/components/common";
import { getAllEvents } from "lib/events";
import ContentContainer from "@/components/sections/ContentContainer";

const Privacy: NextPage = (props: any) => {
  return (
    <main className="">
      <Meta title={`Privacy policy`} />

      <Hero title="Privacy policy" />

      <ContentContainer
        content={content.content}
        contentWidth="full"
        title=""
        markdown={false}
      />

      <div className="relative z-10 flex flex-wrap justify-center">
        <Container className="w-full pt-48 lg:pt-96">
          {/* <SectionContent
            className="pt-8 pb-24 md:py-40"
            content={content.content}
            fullWidth={true}
            markdown={false}
          /> */}
        </Container>
      </div>

      <Footer events={props.events} />
    </main>
  );
};

export default Privacy;

export async function getStaticProps() {
  const events = getAllEvents();

  return {
    props: { events },
  };
}
