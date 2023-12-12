import type { NextPage } from "next";
import {
  DevelopSection,
  FairdDriveSection,
  Odyssey,
  Footer,
  GeneralSection,
  Navigation,
  LandingHero,
} from "@/components/index";
import meta from "data/meta.json";
import content from "data/pages/index.json";
import { CtaType, TabType } from "types";
import { Meta } from "@/components/common";
import { getAllEvents } from "lib/events";
import { getHome } from "lib/home";

const Home: NextPage = (props: any) => {
  return (
    <div className="bg-[#0D1216]">
      <Meta title={meta.title} />

      <main className="">
        {/* <Banner /> */}

        <Navigation />

        <LandingHero
          title={content.LandingHero.title}
          content={content.LandingHero.content}
          ctas={content.LandingHero.ctas as Array<CtaType>}
        />

        {/* @ts-ignore */}
        <GeneralSection content={content.unstoppable} />

        <Odyssey
          title={content.odyssey.title}
          content={content.odyssey.content}
          ctas={content.odyssey.ctas as Array<CtaType>}
          tagline={content.odyssey.tagline}
        />

        <DevelopSection
          tagline={content.develop.tagline}
          title={content.develop.title}
          ctas={content.develop.ctas as Array<CtaType>}
          content={content.develop.content}
          tabs={content.develop.tabs as Array<TabType>}
        />

        <GeneralSection content={content.news.content} />

        <FairdDriveSection
          tagline={content.fairdata.tagline}
          title={content.fairdata.title}
          content={content.fairdata.content}
          ctas={content.fairdata.ctas as Array<CtaType>}
        />

        <GeneralSection
          content={{
            tagline: content.builders.tagline,
            title: content.builders.title,
            content: content.builders.content,
            // @ts-ignore
            ctas: content.builders.ctas,
            cards: props.home.grantees,
          }}
        />

        <Footer events={props.events} />
      </main>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const home = getHome();
  const events = getAllEvents();

  return {
    props: { home, events },
  };
}
