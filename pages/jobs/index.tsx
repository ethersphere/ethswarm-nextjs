import type { NextPage } from "next";
import { Footer, Hero } from "@/components/index";
import meta from "data/meta.json";
import content from "data/pages/jobs.json";
import { Meta } from "@/components/common";
import ContentContainer from "@/components/sections/ContentContainer";
import { getAllJobs } from "lib/jobs";
import { getAllEvents } from "lib/events";
import { Container } from "@/components/common";

const Jobs: NextPage = ({ jobs, events }: any) => {
  return (
    <main className="overflow-hidden">
      <Meta title={content.meta.title ?? meta.title} />

      <Hero {...content.hero} />

      {jobs && jobs.length === 0 && (
        <div className="flex justify-center pb-8 mt-32 md:mt-40">
          <Container>No positions available at this time.</Container>
        </div>
      )}

      {jobs && jobs.length > 0 && (
        <div className="relative z-10 flex flex-col items-center mt-32 mb-32 space-y-16 lg:mt-20 lg:pb-48 md:space-y-32">
          {jobs.map((item: any, index: number) => (
            <ContentContainer
              key={index}
              {...item}
              features={{
                columns: "three",
                features: item.items.map((job: any) => ({
                  title:
                    job.job.title +
                    (job.job.subtitle ? " (" + job.job.subtitle + ")" : ""),
                  content: job.job.description,
                  ctas: [
                    {
                      title: "More ->",
                      href: `/jobs/${job.slug}`,
                      arrow: true,
                      background: "transparent",
                    },
                  ],
                })),
              }}
            />
          ))}
        </div>
      )}

      <Footer events={events} />
    </main>
  );
};

export default Jobs;

export async function getStaticProps() {
  const events = getAllEvents();
  const jobs = getAllJobs();

  // Find unique categories from list
  const categories = jobs
    .reduce((acc: any, item: any) => {
      if (!acc.includes(item.job.category[0])) {
        acc.push(item.job.category[0]);
      }
      return acc;
    }, [])
    .filter((item: any) => item !== undefined);

  const order = [
    "Bee",
    "JS / Bee-JS",
    "Research",
    "Comms",
    "Fair Data Society project",
  ];

  // Sort categories by order
  categories.sort((a: any, b: any) => {
    return order.indexOf(a) - order.indexOf(b);
  });

  // Group jobs by the categories above and list them
  const groupedJobs = categories.map((category: string) => ({
    title: category,
    items: jobs.filter((job: any) => job.job.category[0] === category),
  }));

  return {
    props: { jobs: groupedJobs, events },
  };
}
