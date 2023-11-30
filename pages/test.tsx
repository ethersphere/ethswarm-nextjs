import type { NextPage } from "next";
import meta from "data/meta.json";
import { Button, ButtonGroup, Container, Meta } from "@/components/common";
import GridContainer from "@/components/common/GridContainer";
import Card from "@/components/common/Card";

const content = [
  {
    icon: "OpenIcon",
    title: "Open and Borderless",
    content:
      "Swarm is open source code, limited only by the people who use and maintain it - Join a community building the future of the web.",
  },
  {
    title: "Fault-tolerant",
    content:
      "Redundant storage with local replication ensures data availability even in the face of node dropouts or data loss.",
  },
  {
    title: "No downtime",
    content:
      "Swarm is decentralized and distributed, and so it’s also always up, making it stable and reliable.",
  },
  {
    title: "Privacy first",
    content:
      "Swarm cryptographic support enables you to use network in an unrestricted way while building blocks like “Single-owner-chunks” enable extraordinary zero-leak privacy.",
  },
  {
    title: "DDOS resistant",
    content:
      "Swarm network is fully decentralised peer-to-peer network while it’s resilience against DDoS grows with every additional node in the network.",
  },
  {
    title: "Credible neutrality",
    content:
      "Swarm is built to not discriminate - it’s in the very nature of our design, and permeates throughout our mission.",
  },
];

const Test: NextPage = (props: any) => {
  return (
    <div className="bg-[#0D1216] min-h-screen ">
      <Meta title={meta.title} />

      <main className="py-16">
        <section>
          <Container>
            <GridContainer>
              {content.map((item, index) => (
                <Card key={index} {...item} />
              ))}
            </GridContainer>
          </Container>
        </section>
      </main>
    </div>
  );
};

export default Test;
