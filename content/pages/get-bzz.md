---
meta:
  title: Get BZZ Token
sections:
  - template: section
    type: Section
    data:
      disclaimer: true
      hero:
        title: BZZ token
        id: bzz
        content:
          The native token of Swarm grants users access to data relay and storage services while also serving as compensation for node operators who provide these services.
        background:
          src: "/assets/hero/bzz.png"
          alt: ""
          position: ""
        ctas:
          - template: cta
            arrow: true
            type: default
            title: Get bzz
            href: "#how-to-get-bzz"
            background: orange
            back: false
        footnote: ""
      items:
        - template: section_item
          contentWidth: full
          features:
            type: large
            columns: two
            features:
              - template: feature
                title: Write and persist data
                content:
                  BZZ is used by publishers to write data to the Swarm network and have it stored securely for extended periods of time.
                bzzPrice: true
              - template: feature
                title: Participate as a storage provider
                content:
                  The BZZ tokens which publishers p ay to upload and store data on the Swarm network are redistributed to full node operators in exchange for the data storage services which they provide.
                bzzPot: true
          title: Uses
          content: ""
          image: ""
          ctas: []
          code: ""
        - template: section_item
          contentWidth: full
          features:
            type: large
            columns: two
            features:
              - template: feature
                title: Decentralised exchanges (DEXs)
                exchanges: true
                content:
                  Make certain to check you are connected to the correct blockchain in your browser extension wallet (such as Metamask) when using any of these DEXes. 
              - template: feature
                title: Centralised exchanges (CEXs)
                content:
                  An updated list of centralised exchanges can be found listed on
                  price-tracking websites such as [Coingecko](https://www.coingecko.com/en/coins/swarm#markets)
                  or [Coinmarketcap](https://coinmarketcap.com/currencies/ethereum-swarm/markets/)
                  under their "markets" tab. Make certain to take note when withdrawing BZZ from a CEX to specify the desired blockchain network.
          title: How to get BZZ
          content: |-
            There are various ways to acquire BZZ tokens, including through centralised custodial exchanges where BZZ can be traded for either fiat currency or cryptocurrency, and also through decentralised non-custodial exchanges and protocols where BZZ can be traded directly for other cryptocurrencies.

            Note that BZZ is available as a token on both the [Ethereum and Gnosis Chain blockchains](https://docs.ethswarm.org/docs/learn/tokens#swarm-ecosystem-tokens), however it is only the Gnosis version which can be used to [purchase postage stamp batches](https://docs.ethswarm.org/docs/develop/access-the-swarm/buy-a-stamp-batch) which are used for writing data to Swarm, and also used as [stake](https://docs.ethswarm.org/docs/bee/working-with-bee/staking) to operate a full node and earn BZZ for providing storage. 

            *Warning: The use of any cryptocurrency exchange platform entails risks—it is vital to stay informed on the best practices in order avoid potential losses.*
          image: ""
          ctas: []
        - template: section_item
          contentWidth: full
          features:
            type: default
            columns: three
            features:
              - template: feature
                title: Stake BZZ to run a full node
                content:
                  BZZ is required as non-refundable [stake](https://docs.ethswarm.org/docs/bee/working-with-bee/staking) in order to operate a Swarm full node and become eligible for earning more BZZ in exchange for providing data storage services. 
                cta:
                  arrow: true
                  background: []
                  type: default
                  title: Run a full node
                  href: "/build/run-a-full-node"
              - template: feature
                title: Upload and download data with Swarm Desktop
                content: Use BZZ to purchase the postage stamp batches which are used to pay for [publishing data on Swarm](https://docs.ethswarm.org/docs/desktop/upload-content). Install Swarm Desktop in order to [buy your first batch](https://docs.ethswarm.org/docs/desktop/postage-stamps) and get direct access to the Swarm P2P network.
                cta:
                  arrow: true
                  background: []
                  type: default
                  title: Install Swarm Desktop
                  href: "/build/desktop"
              - template: feature
                title: Use BZZ to make your dApp unstoppable  
                content: Reserve space on the Swarm network by [buying postage stamp batches](https://docs.ethswarm.org/docs/learn/technology/contracts/postage-stamp) using BZZ so you can [host](https://docs.ethswarm.org/docs/develop/access-the-swarm/upload-a-directory) your censorship resistant decentralised application.
                cta:
                  arrow: true
                  background: []
                  type: default
                  title: Start Building
                  href: /build
          title: How to use BZZ
          content: ""
          image: ""
          ctas: []
          code: ""
        - template: section_item
          contentWidth: full
          features:
            type: large
            columns: two
            features:
              - template: feature
                title: Is the token supply deflationary like Bitcoin?
                content:
                  The token supply is not fixed and can increase or decrease via
                  the bonding curve. Put simply, if the supply goes up by one token, so
                  does its price in the bonding curve contract, and vice versa. This makes
                  BZZ neither inflationary nor deflationary. You can read about Swarm’s
                  supply and bonding curve in detail [here](https://medium.com/ethereum-swarm/swarm-and-its-bzzaar-bonding-curve-ac2fa9889914).
              - template: feature
                title: What can I store with BZZ?
                content:
                  Almost anything you can imagine! You can store and retrieve many types of data—from webpages, NFT metadata, archives, to database backups, streaming audio and video, and much more. You can get started with uploading data by [purchasing your first batch of stamps](https://docs.ethswarm.org/docs/develop/access-the-swarm/buy-a-stamp-batch).
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
---
