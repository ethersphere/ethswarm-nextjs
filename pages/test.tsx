import type { NextPage } from "next";
import meta from "data/meta.json";
import { Container, Meta } from "@/components/common";
import GridContainer from "@/components/common/GridContainer";

const Test: NextPage = (props: any) => {
  return (
    <div className="bg-[#0D1216] min-h-screen">
      <Meta title={meta.title} />

      <main className="">
        <Container>
          <GridContainer>
            <div className="col-span-3 text-[#F6F7F9]">asd</div>
          </GridContainer>
        </Container>
      </main>
    </div>
  );
};

export default Test;
