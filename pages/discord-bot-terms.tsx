import type { NextPage } from "next";
import { Footer, Hero } from "@/components/index";
import content from "data/pages/discord-bot-terms.json";
import { Meta } from "@/components/common";
import { getAllEvents } from "lib/events";
import ContentContainer from "@/components/sections/ContentContainer";

const DiscordBotTerms: NextPage = (props: any) => {
  return (
    <main className="">
      <Meta title={`Swarm Support Watcher terms of service`} />

      <Hero title="Swarm Support Watcher terms of service" />

      <ContentContainer
        content={content.content}
        contentWidth="full"
        title=""
        markdown={false}
      />

      <Footer events={props.events} />
    </main>
  );
};

export default DiscordBotTerms;

export async function getStaticProps() {
  const events = getAllEvents();

  return {
    props: { events },
  };
}
