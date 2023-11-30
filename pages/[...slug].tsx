import type { NextPage } from "next";

import {
  Connect,
  Cta,
  Footer,
  Navigation,
  Post,
  Roadmap,
  Section,
  Disclaimer,
} from "@/components/index";
import { getPageSlugs, getPageBySlug } from "lib/pages";
import meta from "data/meta.json";
import { Meta } from "@/components/common";
import { getAllEvents } from "lib/events";

const Page: NextPage = (content: any) => {
  const sections: any = {
    Section: Section,
    Cta: Cta,
    Post: Post,
    Roadmap: Roadmap,
  };

  return (
    <div className="bg-gray-100">
      <Meta title={content.meta.title ?? meta.title} />

      <main>
        <Navigation textColor="text-gray-700" />

        {content.sections.map((section: any, index: number) => {
          const SectionTag = sections[section.type];
          return <SectionTag key={index} index={index} {...section.data} />;
        })}

        <Connect events={content.events} />

        <Footer />
      </main>
    </div>
  );
};

export default Page;

export async function getStaticProps(context: any) {
  const events = getAllEvents();
  const content = getPageBySlug(context.params.slug);

  return {
    props: { ...content, events },
  };
}

export async function getStaticPaths() {
  const paths = getPageSlugs().map((slug: any) => ({
    params: { slug: slug.split("/") },
  }));

  return {
    paths,
    fallback: false,
  };
  // return {
  //   paths: [
  //     { params: { slug: ["grants"] } },
  //   ],
  //   fallback: false,
  // };
}
