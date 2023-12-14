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

const Home: NextPage = (props: any) => {
  return (
    <main>
      <Meta title={meta.title} />

      <LandingHero
        title={content.LandingHero.title}
        content={content.LandingHero.content}
        ctas={content.LandingHero.ctas as Array<CtaType>}
      />

      <EventPopup
        href={props.events[3].href}
        title={props.events[3].title}
        content={props.events[3].content}
      />

      <GeneralSection content={content.unstoppable} />

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
