import React from "react";
import { ButtonGroup, Container } from "../common";
import { CtaType } from "types";

type CtaProps = {
  title: string;
  ctas?: Array<CtaType>;
};

const Cta: React.FC<CtaProps> = ({ title, ctas = [] }) => {
  return (
    <section className="flex justify-center bg-gray-800">
      <Container className="w-full py-16 md:py-20">
        <h2 className="font-bold text-gray-100 text-3xl md:text-[40px]">
          {title}
        </h2>
        <ButtonGroup className="mt-9" ctas={ctas} />
      </Container>
    </section>
  );
};

export default Cta;
