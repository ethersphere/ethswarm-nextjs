import type { NextPage } from "next";

import { Banner, Connect, Footer, Navigation, Post } from "@/components/index";
import meta from "data/meta.json";
import SecondaryHero from "@/components/sections/SecondaryHero";
import { Meta } from "@/components/common";
import { getJobBySlug, getJobsSlugs } from "lib/jobs";

import markdownToHtml from "../../lib/markdownToHtml";
import { getAllEvents } from "lib/events";

const JobSingle: NextPage = (content: any) => {
  return (
    <div className="bg-gray-100">
      <Meta title={content.meta.title ?? meta.title} />

      <main>
        <Banner />

        <Navigation textColor="text-gray-700" />

        {/* @ts-ignore */}
        <SecondaryHero
          index={0}
          title={content.job.title}
          background={{ src: "/assets/hero/join_alt.png", alt: "" }}
        />

        <div className="md:pt-20 lg:pt-40">
          <Post
            sidebar={{
              ctas: [
                {
                  title: "All Jobs",
                  href: "/jobs",
                  back: true,
                  arrow: true,
                  background: "transparent",
                },
              ],
            }}
            content={content.content}
            border={false}
          />
        </div>

        <Connect events={content.events} />

        <Footer />
      </main>
    </div>
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

  const content = await markdownToHtml(job.content || "");

  return {
    props: { ...job, content, events },
  };
}

export async function getStaticPaths() {
  const paths = getJobsSlugs();

  return {
    paths: paths.map((path) => ({ params: { slug: path.slice(0, -3) } })),
    fallback: false,
  };
}
