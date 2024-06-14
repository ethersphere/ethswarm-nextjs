---
meta:
  title: Get BZZ Token
sections:
  - template: section
    type: Section
    data:
      hero:
        title: BZZ token
        id: bzz
        content: The native token of Swarm grants users access to data relay and storage services while also serving as compensation for node operators who provide these services.
        background:
          src: "/assets/hero/bzz.png"
          alt: ""
          position: ""
        ctas:
          - template: cta
            arrow: true
            type: default
            title: Get bzz ->
            href: "#how-to-get-bzz"
            background: orange
            back: false
        footnote: ""
      items:
        - template: section_item

          blocks:
            type: large
            columns: two
            bzzPrice: true
            bzzPot: true
            features:
              - template: feature
                title: Write and persist data
                content: BZZ is used by publishers to write data to the Swarm network and have it stored securely for extended periods of time.
              - template: feature
                title: Participate as a storage provider
                content: The BZZ tokens which publishers pay to upload and store data on the Swarm network are redistributed to full node operators in exchange for the data storage services which they provide.
          title: Uses
          content: ""
          image: ""
          ctas: []
          code: ""
        - template: section_item

          blocks:
            type: large
            columns: two
            features:
              - template: feature
                title: Decentralised exchanges (DEXs)
                exchanges: true
                content: Make certain to check you are connected to the correct blockchain in your browser extension wallet (such as Metamask) when using any of these DEXes.
              - template: feature
                title: Centralised exchanges (CEXs)
                content:
                  An updated list of centralised exchanges can be found listed on
                  price-tracking websites such as [Coingecko](https://www.coingecko.com/en/coins/swarm#markets)
                  or [Coinmarketcap](https://coinmarketcap.com/currencies/ethereum-swarm/markets/)
                  under their ‘markets’ tab.
              - template: feature
                title: Bridges
                bridges: true
                content: For purchasing BZZ from one chain to another, you can use the following bridges
          title: How to get BZZ
          id: "how-to-get-bzz"
          content: |-
            BZZ tokens are available on both the [Ethereum (BZZ) and Gnosis Chain (xBZZ) blockchains](https://docs.ethswarm.org/docs/learn/tokens#swarm-ecosystem-tokens). However, only the Gnosis Chain version (xBZZ) can be used for specific functions, such as:
            - [Purchasing postage stamp batches](https://docs.ethswarm.org/docs/develop/access-the-swarm/buy-a-stamp-batch) for writing data to Swarm network.
            - [Staking](https://docs.ethswarm.org/docs/bee/working-with-bee/staking) to operate a full node and earn BZZ for providing storage.

            *Warning: The use of any cryptocurrency exchange platform entails risks—it is vital to stay informed on the best practices in order avoid potential losses.*
          image: ""
          ctas: []
        - template: section_item

          features:
            type: default
            columns: three
            features:
              - template: feature
                title: Stake BZZ to run a full node
                content: BZZ is required as non-refundable [stake](https://docs.ethswarm.org/docs/bee/working-with-bee/staking) in order to operate a Swarm full node and become eligible for earning more BZZ in exchange for providing data storage services.
                cta:
                  arrow: true
                  background: transparent
                  type: default
                  title: Run a full node ->
                  href: "/build/run-a-full-node"
              - template: feature
                title: Upload and download data with Swarm Desktop
                content: Use BZZ to purchase the postage stamp batches which are used to pay for [publishing data on Swarm](https://docs.ethswarm.org/docs/desktop/upload-content). Install Swarm Desktop in order to [buy your first batch](https://docs.ethswarm.org/docs/desktop/postage-stamps) and get direct access to the Swarm P2P network.
                cta:
                  arrow: true
                  background: transparent
                  type: default
                  title: Install Swarm Desktop ->
                  href: "/build/desktop"
              - template: feature
                title: Use BZZ to make your dApp unstoppable
                content: Reserve space on the Swarm network by [buying postage stamp batches](https://docs.ethswarm.org/docs/learn/technology/contracts/postage-stamp) using BZZ so you can [host](https://docs.ethswarm.org/docs/develop/access-the-swarm/upload-a-directory) your censorship resistant decentralised application.
                cta:
                  arrow: true
                  background: transparent
                  type: default
                  title: Start Building ->
                  href: /build
          title: How to use BZZ
          content: ""
          image: ""
          ctas: []
          code: ""
        - template: section_item

          blocks:
            type: large
            columns: two
            features:
              - template: feature
                title: Is the token supply deflationary like Bitcoin?
                content: The token supply is fixed at 63,149,437. It is an standard ERC-20 token, the contract for which can be found [here](https://etherscan.io/token/0x19062190b1925b5b6689d7073fdfc8c2976ef8cb).
              - template: feature
                title: What can I store with BZZ?
                content: Almost anything you can imagine! You can store and retrieve many types of data—from webpages, NFT metadata, archives, to database backups, streaming audio and video, and much more. You can get started with uploading data by [purchasing your first batch of stamps](https://docs.ethswarm.org/docs/develop/access-the-swarm/buy-a-stamp-batch).
              - template: feature
                title: Will I receive BZZ if I run a full node?
                content:
                  The storage incentive system compensates storage providers through
                  a redistribution mechanism, depending on the amount of BZZ tokens they
                  stake, and whether or not they are selected for redistribution. Read more about the incentive system
                  [here](https://medium.com/ethereum-swarm/the-mechanics-of-swarm-networks-storage-incentives-3bf68bf64ceb) and [here](https://docs.ethswarm.org/docs/bee/working-with-bee/staking#maximizing-staking-rewards).
              - template: feature
                cta:
                  arrow: true
                  type: default
                title: Where is the BZZ token present?
                content: >-
                  BZZ is an ERC-20 token which was originally created on the
                  Ethereum network and was later also bridged to the Gnosis Chain
                  blockchain to serve as the payment and incentive token for
                  the Swarm network. BZZ may be transferred back and forth between
                  the two chains using the [Omnibridge](https://omnibridge.gnosischain.com/bridge)
                  decentralised cross-chain token bridge, however it is only the Gnosis Chain
                  version which may be used to directly interact with Swarm.
          title: FAQ
          content: ""
          image: ""
          ctas: []
          code: ""
        - template: section_item

          title: Disclaimer
          content: BZZ utility token should not be purchased for financial gain or speculation. There are risks related with holding and using BZZ token and other cryptocurrency, staking and participating in the network as a node operator. The node may not receive any reward at all, amounts staked may be unexpectedly slashed, uploaded data may become unavailable or corrupt, temporarily or permanently lost depending on the performance of the network during these phases. Only by participating actively in the network, its parameters can be tested and patched when needed. An external audit on the upgrades will be conducted in parallel with the estimated delivery date being March 2023. All dates and information in this page is indicative and may change without prior warning. Follow us on discord and twitter for updates.
---
