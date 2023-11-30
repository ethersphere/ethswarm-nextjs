import type { NextPage } from "next";
import meta from "data/meta.json";
import { Button, ButtonGroup, Container, Meta } from "@/components/common";
import GridContainer from "@/components/common/GridContainer";
import Card from "@/components/common/Card";

const Test: NextPage = (props: any) => {
  return (
    <div className="bg-[#0D1216] min-h-screen ">
      <Meta title={meta.title} />

      <main className="py-16">
        <section>
          <Container>
            <GridContainer>
              <Card
                title="Open and Borderless"
                content={`<p>Swarm is open source code, limited only by the people who
                    use and maintain it - Join a community building the future
                    of the web.</p><p>Swarm is open source code, limited only by the people who
                    use and maintain it - Join a community building the future
                    of the web.</p>`}
                ctas={[
                  {
                    title: "More ->",
                    href: "/",
                    background: "transparent",
                    color: "gray",
                  },
                ]}
              />
            </GridContainer>
          </Container>
        </section>
      </main>
    </div>
  );
};

export default Test;
