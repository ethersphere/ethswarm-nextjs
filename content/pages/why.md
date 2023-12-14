---
meta:
  title: Why & How
sections:
  - template: section
    type: Section
    data:
      hero:
        title: Swarm tech
        id: world
        content: >-
          Swarm exists to provide a decentralised infrastructure to transfer and
          store the world’s data.
        background:
          src: /assets/hero/wws.png
          alt: ""
          position: ""
        ctas:
          - template: cta
            arrow: true
            type: default
            title: Book of Swarm ->
            background: orange
            href: "https://www.ethswarm.org/The-Book-of-Swarm.pdf"
          - template: cta
            arrow: true
            type: default
            title: Whitepaper ->
            href: "https://www.ethswarm.org/swarm-whitepaper.pdf"
            background: transparent
        footnote: ""
      items:
        - template: section_item

          features:
            type: default
            columns: three
            features:
              - template: feature
                cta:
                  arrow: true
                  background: []
                  type: default
                  title: ""
                  href: ""
                title: Permissionless and private
                content: >-
                  Censorship resistant and private by design, Swarm nodes will
                  provide leak proof messaging and private, unfiltered access to
                  data via a distributed network.
                icon: PrivacyIcon
              - template: feature
                cta:
                  arrow: true
                  background: []
                  type: default
                  title: ""
                  href: ""
                title: Leak-proof messaging made real
                content: >-
                  The third element of the Ethereum trinity, Whisper, has also
                  been incorporated into Swarm as PSS, bringing the possibility
                  of truly leak proof messaging for full nodes.
                icon: LeakIcon
              - template: feature
                cta:
                  arrow: true
                  background: []
                  type: default
                  title: ""
                  href: ""
                title: Built for builders
                content: >-
                  With powerful primitives such as Single Owner Chunks and
                  Postal Service over Swarm, the Swarm network provides a
                  fertile basis for you to build never before seen completely
                  decentralised applications.
                icon: BuildersIcon
              - template: feature
                cta:
                  arrow: true
                  background: []
                  type: default
                  title: ""
                  href: ""
                title: Completely decentralised
                content: >-
                  Swarm exists so the internet can again be decentralised.
                  Swarm’s vision is to become the operating system of the
                  re-decentralised internet. It provides a scalable and
                  self-sustaining infrastructure for a supply-chain economy of
                  data.
                icon: OpenIcon
              - template: feature
                cta:
                  arrow: true
                  background: []
                  type: default
                  title: ""
                  href: ""
                title: Scalable with zero hosting costs
                content: >-
                  Cost of hosting stays same no matter if the content or dapp is
                  accessed by one person or one million due to cryptoeconomic
                  incentives of the network. No more VCs or monetisation needed
                  in order to support popular dapps or content.
                icon: ScalableIcon
              - template: feature
                cta:
                  arrow: true
                  background: []
                  type: default
                  title: ""
                  href: ""
                title: Public interest
                content: >-
                  Since anyone can contribute, Swarm establishes a system for
                  important data commons such as Open Street Maps data to be
                  collectively funded by the public.
                icon: PublicIcon
          title: Why Swarm
          content: ""
          image: ""
          ctas: []
          code: ""
        - template: section_item

          features:
            type: large
            columns: two
            features:
              - template: feature
                cta:
                  arrow: true
                  background: []
                  type: default
                  title: ""
                  href: ""
                title: Kademlia Routing
                content: >-
                  Nodes use Kademlia routing to arrange themselves in a regular
                  network that gives each node responsibility for storing and
                  forwarding chunks based on the addressing scheme. This means
                  that all nodes can access all of the data in the swarm.
                icon: KademliaIcon
              - template: feature
                cta:
                  arrow: true
                  background: []
                  type: default
                  title: ""
                  href: ""
                title: Push
                content: >-
                  When data is uploaded to the swarm, it is split into 4kb
                  chunks and distributed using the Kademlia routing protocol to
                  their closest neighbourhood whose nodes are responsible for
                  storing them. This distributes data evenly across the swarm
                  network.
                icon: PushIcon
              - template: feature
                cta:
                  arrow: true
                  background: []
                  type: default
                  title: ""
                  href: ""
                title: Pull
                content: >-
                  When each full node joins the swarm it becomes part of a
                  global hard drive - chunks in its radius of responsibility are
                  synced from nodes in each node’s radius. This ensures each
                  node is able to serve up chunks that are close to its address
                  when requested by the retrieval protocol.
                icon: PullIcon
              - template: feature
                cta:
                  arrow: true
                  background: []
                  type: default
                  title: ""
                  href: ""
                title: Retrieval
                content: >-
                  The retrieval protocol routes each node’s request for chunks
                  to the node closest to that chunk’s neighbourhood. In this
                  way, every node in the swarm is able to access chunks from
                  their neighbourhood of responsibility.
                icon: RetrieveIcon
          title: How it works
          image: ""
          code: ""
_template: page
---
