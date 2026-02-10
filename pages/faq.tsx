import type { GetStaticProps, NextPage } from "next";
import { Footer, Hero } from "@/components/index";
import { Container, Meta } from "@/components/common";
import FaqItem from "@/components/common/FaqItem";
import { getAllEvents } from "lib/events";
import { getAllFaqsGrouped } from "lib/faqs";

type FaqCategory = {
  category: string;
  label: string;
  items: { title: string; body: string }[];
};

type FaqPageProps = {
  faqGroups: FaqCategory[];
  events: { title: string; href: string; add_to_calendar: string }[];
};

const FaqPage: NextPage<FaqPageProps> = ({ faqGroups, events }) => {
  return (
    <main>
      <Meta title="FAQ" />

      <Hero title="Frequently Asked Questions" />

      <section className="relative z-10 pb-20 md:pb-32">
        <Container className="w-full px-4">
          <div className="space-y-16">
            {faqGroups.map((group) => (
              <div key={group.category}>
                <h2 className="mb-6 text-2xl font-bold text-[#F6F7F9] md:text-3xl">
                  {group.label}
                </h2>
                <div className="space-y-3">
                  {group.items.map((faq, index) => (
                    <FaqItem key={index} title={faq.title} body={faq.body} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Footer events={events} />
    </main>
  );
};

export default FaqPage;

export const getStaticProps: GetStaticProps = async () => {
  const faqGroups = getAllFaqsGrouped();
  const events = getAllEvents();

  return {
    props: { faqGroups, events },
  };
};
