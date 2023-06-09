import type { NextPage } from "next";
import {
  Dapp,
  DevelopSection,
  FairdDriveSection,
  Odyssey,
  Banner,
  Hero,
  Builders,
  Millions,
  Connect,
  Footer,
  GeneralSection,
  Navigation,
} from "@/components/index";
import meta from "data/meta.json";
import content from "data/pages/index.json";
import { CtaType, FeatureType, TabType } from "types";
import Bounties from "@/components/sections/Bounties";
import { Meta } from "@/components/common";
import { getAllEvents } from "lib/events";
import { getHome } from "lib/home";
import Summit from "@/components/sections/Summit";

const Home: NextPage = (props: any) => {
  return (
    <div className="bg-gray-100">
      <Meta title={meta.title} />

      <main className="">
        <Banner />

        <Navigation />

        <Summit
          tagline={content.summit.tagline}
          title={content.summit.title}
          content={content.summit.content}
          // @ts-ignore
          ctas={content.summit.ctas}
          quote={content.hero.quote}
          //  @ts-ignore
          cta={content.hero.cta}
        />

        <Hero
          title={content.hero.title}
          background={content.hero.background}
          content={content.hero.content}
          ctas={content.hero.ctas as Array<CtaType>}
          quote={content.hero.quote}
          //  @ts-ignore
          cta={content.hero.cta}
        />

        {/* @ts-ignore */}
        <GeneralSection content={content.unstoppable} textColor="text-black" />

        {/* We hide this section for now */}
        {/* <Wikipedia
          titleSuffix={content.wikipedia.titleSuffix}
          content={content.wikipedia.content}
          ctas={content.wikipedia.ctas as Array<CtaType>}
          tagline={content.wikipedia.tagline}
        /> */}

        <Odyssey
          title={props.home.upload.title}
          content={props.home.upload.content}
          ctas={props.home.upload.ctas as Array<CtaType>}
          tagline={props.home.upload.tagline}
        />

        <DevelopSection
          tagline={content.develop.tagline}
          title={content.develop.title}
          ctas={content.develop.ctas as Array<CtaType>}
          content={content.develop.content}
          tabs={content.develop.tabs as Array<TabType>}
        />

        <GeneralSection
          content={{
            tagline: content.news.content.tagline,
            title: content.news.content.title,
            // @ts-ignore
            ctas: content.news.content.ctas,
            news: props.home.news,
          }}
          // @ts-ignore
          background={content.news.background}
          // @ts-ignore
          textColor={content.news.textColor}
        />

        <Dapp
          tagline={content.dapp.tagline}
          title={content.dapp.title}
          ctas={content.dapp.ctas as Array<CtaType>}
          features={content.dapp.features as Array<FeatureType>}
        />

        <FairdDriveSection
          tagline={content.fairdata.tagline}
          title={content.fairdata.title}
          content={content.fairdata.content}
          ctas={content.fairdata.ctas as Array<CtaType>}
        />

        <Builders
          tagline={content.builders.tagline}
          title={content.builders.title}
          content={content.builders.content}
          ctas={content.builders.ctas as Array<CtaType>}
          features={props.home.grantees as Array<FeatureType>}
        />

        {/* <Millions
          tagline={content.millions.tagline}
          title={content.millions.title}
          content={content.millions.content}
          ctas={content.millions.ctas as Array<CtaType>}
          // @ts-ignore
          starts_in={content.millions.starts_in}
        /> */}
        {/*
        <Bounties
          tagline={content.bounties.tagline}
          title={content.bounties.title}
          content={content.bounties.content}
          ctas={content.bounties.ctas as Array<CtaType>}
          features={props.home.bounties as Array<FeatureType>}
        /> */}

        <Connect events={props.events} />
        <Footer />
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
