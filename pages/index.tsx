import type { NextPage } from "next";
import {
  DevelopSection,
  FairdDriveSection,
  Odyssey,
  Footer,
  GeneralSection,
  LandingHero,
  EventPopup,
} from "@/components/index";
import meta from "data/meta.json";
import content from "data/pages/index.json";
import { CtaType, TabType } from "types";
import { Meta } from "@/components/common";
import { getAllEvents } from "lib/events";
import { getHome } from "lib/home";
import VideoSection from "@/components/sections/VideoSection";

const Home: NextPage = (props: any) => {
  return (
    <main>
      <Meta title={meta.title} />

      <LandingHero
        title={content.hero.title}
        content={content.hero.content}
        ctas={content.hero.ctas as Array<CtaType>}
      />

      <EventPopup
        cta={content.event.cta}
        // @ts-ignore
        title={content.event.title}
        content={content.event.content}
        // @ts-ignore
        image={content.event.image}
      />

      <VideoSection content={content.video} />

      <GeneralSection content={content.unstoppable} />

      <DevelopSection
        tagline={content.develop.tagline}
        title={content.develop.title}
        ctas={content.develop.ctas as Array<CtaType>}
        content={content.develop.content}
        tabs={content.develop.tabs as Array<TabType>}
      />

      <Odyssey
        title={content.odyssey.title}
        content={content.odyssey.content}
        ctas={content.odyssey.ctas as Array<CtaType>}
        tagline={content.odyssey.tagline}
      />

      <GeneralSection content={content.news.content} />

      <GeneralSection
        className="-mt-40 md:-mt-48"
        content={{
          tagline: content.decentralise.tagline,
          title: content.decentralise.title,
          cards: content.decentralise.features,
        }}
      />

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
          ctas: content.builders.ctas,
          cards: content.builders.features,
        }}
      />

      <Footer events={props.events} />
    </main>
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
