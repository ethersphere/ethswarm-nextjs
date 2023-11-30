import type { NextPage } from "next";
import meta from "data/meta.json";
import { Container, Meta } from "@/components/common";
import GridContainer from "@/components/common/GridContainer";

const Test: NextPage = (props: any) => {
  return (
    <div className="bg-[#0D1216] min-h-screen">
      <Meta title={meta.title} />

      <main className="py-16">
        <section>
          <Container>
            <GridContainer>
              <div className="col-span-3 text-[#F6F7F9] border border-[#2D3843] rounded-xl bg-[#1F2831]/70 py-8 px-5 shadow-dark">
                asd
              </div>
            </GridContainer>
          </Container>
        </section>
      </main>
    </div>
  );
};

export default Test;
