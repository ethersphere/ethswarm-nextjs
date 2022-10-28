import type { NextPage } from "next";
import Head from "next/head";
import { Banner, Connect, Footer, Navigation } from "@/components/index";
import meta from "data/meta.json";
import content from "data/pages/privacy.json";
import { Container, Meta, SectionContent } from "@/components/common";
import { getAllEvents } from "lib/events";

const Privacy: NextPage = (props: any) => {
  return (
    <div className="bg-gray-100">
      <Meta title={`Privacy policy`} />

      <main className="">
        <Banner />

        <Navigation textColor="text-gray-700" />

        <div className="absolute z-0 w-screen min-h-screen pointer-events-none bg-gray-gradient"></div>

        <div className="relative z-10 flex flex-wrap justify-center">
          <Container className="w-full pt-48 lg:pt-96">
            <h1 className="font-bold text-6xl lg:text-[88px] tracking-[-0.01em] leading-[1.1] py-10">
              Privacy policy
            </h1>

            <SectionContent
              className="pt-8 pb-24 md:py-40"
              content={content.content}
              fullWidth={true}
            />
          </Container>
        </div>

        <Connect events={props.events} />

        <Footer />
      </main>
    </div>
  );
};

export default Privacy;

export async function getStaticProps() {
  const events = getAllEvents();

  return {
    props: { events },
  };
}
