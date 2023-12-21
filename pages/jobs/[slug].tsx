import type { NextPage } from "next";

import { Footer, Hero } from "@/components/index";
import meta from "data/meta.json";
import { Meta } from "@/components/common";
import { getJobBySlug, getJobsSlugs } from "lib/jobs";

import { getAllEvents } from "lib/events";
import ContentContainer from "@/components/sections/ContentContainer";

const JobSingle: NextPage = (content: any) => {
  return (
    <main>
      <Meta title={content.meta.title ?? meta.title} />

      <Hero
        title={content.job.title}
        content={content.job.subtitle}
        ctas={[
          {
            title: "<- Open roles",
            href: "/jobs",
            back: true,
            arrow: true,
            background: "orange",
          },
        ]}
        background={{ src: "/assets/hero/join_alt.png", alt: "" }}
      />

      <div className="mt-32 mb-32 space-y-16 md:space-y-24 md:mt-20 md:mb-48">
        {content.job.items.map((item: any, index: number) => (
          <ContentContainer key={index} {...item} />
        ))}
      </div>

      <Footer events={content.events} />
    </main>
  );
};

export default JobSingle;

export async function getStaticProps(context: any) {
  const events = getAllEvents();
  const job: any = getJobBySlug(context.params.slug, [
    "job",
    "meta",
    "slug",
    "content",
  ]);

  return {
    props: { ...job, content: job.content, events },
  };
}

export async function getStaticPaths() {
  const paths = getJobsSlugs();

  return {
    paths: paths.map((path) => ({ params: { slug: path.slice(0, -3) } })),
    fallback: false,
  };
}
