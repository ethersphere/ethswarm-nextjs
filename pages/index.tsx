import type { NextPage } from "next";
import {
  DevelopSection,
  FairdDriveSection,
  Odyssey,
  Footer,
  GeneralSection,
  Navigation,
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
  console.log(props.home.grantees);
  return (
    <div className="bg-[#0D1216]">
      <Meta title={meta.title} />

      <main className="">
        {/* <Banner /> */}

        <Navigation />

        <EventPopup href={props.events[0].href} title={props.events[0].title} />

        <LandingHero
          title={content.LandingHero.title}
          content={content.LandingHero.content}
          ctas={content.LandingHero.ctas as Array<CtaType>}
        />

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
            ctas: content.builders.ctas,
            cards: content.builders.features,
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
