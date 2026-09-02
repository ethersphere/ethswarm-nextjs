import type { NextPage } from "next";
import { Footer, Hero } from "@/components/index";
import content from "data/pages/discord-bot-privacy.json";
import { Meta } from "@/components/common";
import { getAllEvents } from "lib/events";
import ContentContainer from "@/components/sections/ContentContainer";

const DiscordBotPrivacy: NextPage = (props: any) => {
  return (
    <main className="">
      <Meta title={`Swarm Support Watcher privacy policy`} />

      <Hero title="Swarm Support Watcher privacy policy" />

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

export default DiscordBotPrivacy;

export async function getStaticProps() {
  const events = getAllEvents();

  return {
    props: { events },
  };
}
