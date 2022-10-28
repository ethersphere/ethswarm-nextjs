---
meta:
  title: Build
sections:
- template: section
  type: Section
  data:
    hero:
      title: Build
      id: build
      content: Swarm provides a complete stack of essential base layer components
        for developers. Create and host dApps, NFT meta-data, and media files - all
        decentralised!
      ctas: []
      background:
        src: "/assets/hero/build.png"
        alt: ''
        position: ''
      footnote: ''
    items:
    - template: section-item
      contentWidth: half
      features:
        columns: []
        features: []
        type: ''
      title: Bee
      content: Bee is a peer-to-peer client that connects you with other peers all
        over the world to become part of Swarm network, a global distributed p2p storage
        network that aims to store and distribute all of the world's data. Running
        a full Bee node gives you all the functionalities of Swarm.
      ctas:
      - template: cta
        arrow: true
        type: default
        title: Get the Documentation
        href: https://docs.ethswarm.org/docs/dapps-on-swarm/introduction
        background: transparent
      image: ''
      code: Bee
    - template: section-item
      contentWidth: half
      features:
        columns: []
        features: []
        type: ''
      title: Bee-js
      content: Bee-js is Bee’s complementary JavaScript library. It’s a powerful tool
        for building completely decentralised apps with just a few lines of code.
      ctas:
      - template: cta
        arrow: true
        type: default
        title: Get the Documentation
        href: https://bee-js.ethswarm.org/docs/
        background: transparent
      image: ''
      code: Bee-js
    - template: section-item
      contentWidth: half
      features:
        columns: []
        features: []
        type: ''
      title: Swarm-CLI
      content: Manage your Bee node and interact with the Swarm network in the command
        line. Upload and download files, folders, and websites, or manage different
        feeds, identities and nodes easily. Convenient access to advanced Swarm features,
        including easier coding with swarm-cli, postage stamps management from the
        command line, and automation.
      ctas:
      - template: cta
        arrow: true
        type: default
        title: Read more on Github
        href: https://github.com/ethersphere/swarm-cli
        background: transparent
      image: ''
      code: Swarm-CLI
    - template: section-item
      contentWidth: half
      features:
        columns: []
        features: []
        type: ''
      title: Bee API
      content: The Bee API provides a HTTP interface with a rich set of endpoints
        for accessing data on the network - manage your node resources and get operational
        metrics and insights.
      ctas:
      - template: cta
        arrow: true
        type: default
        title: Get the Documentation
        href: https://docs.ethswarm.org/api/
        background: transparent
      image: ''
      code: Bee API
    - template: section-item
      contentWidth: full
      title: Layer2 tooling through ecosystem initiatives
      content: |-
        Below are several ecosystem-based projects that enable faster development while promoting data interoperability and sovereignty. The Swarm Foundation is pleased to support the projects presented, but makes no guarantees about how they'll work.

        All projects are in an intensive development phase, but contributions are more than welcome. Additionally, contributions to the projects listed below can be supported through [**Swarm grants**](https://my.ethswarm.org/grants).
      features:
        columns: three
        features:
        - template: feature
          cta:
            arrow: true
            type: default
            title: Read more
            href: https://docs.fairos.fairdatasociety.org/docs/
            background: transparent
          title: fairOS - run a database on top of Swarm
          content: With fairOS, instead of dealing with chunks and separate files
            directly on Swarm you can work with a distributed file system, key-value
            database or database doc (multi-index). fairOS provides developers a head
            start and a decentralised backend.
          icon: ''
        - template: feature
          cta:
            arrow: true
            type: default
            title: Test fairdrive
            href: https://fairdrive.fairdatasociety.org/
            background: transparent
          title: fairDRIVE - data store for your users
          content: Fairdrive is decentralised “Dropbox / Google drive”, running on
            Swarm. A UI for dapp and personal data. (D)apps can save and read data
            from it, which enables users to reclaim, own and manage their data while
            enabling developers to use it as a white-label and save on development
            time.
          icon: ''
        - template: feature
          cta:
            arrow: true
            type: default
            title: Read more
            href: https://fdp.fairdatasociety.org
            background: transparent
          title: Fair data protocol - interoperability
          content: Swarm imagines a plural future with multiple data stores serving
            different purposes. FDP is the glue between them, enabling interoperability.
            Currently, the project is under intense development. The community can
            contribute to or suggest improvements through Fair data improvement proposals.
          icon: ''
        type: default
      ctas: []
      image: ''
      code: ''
- template: section-cta
  type: Cta
  data:
    title: 'Join us! #develop-on-swarm room at our Discord Server'
    ctas:
    - template: cta
      arrow: true
      title: Participate
      href: https://discord.ethswarm.org/
      background: orange-onDark
      type: default
- template: section
  type: Section
  data:
    hero:
      title: Run a full node
      id: run
      content: The Swarm Network is economically self-sustaining due to a built-in
        incentive system built on smart contracts on the Ethereum blockchain. Swarm
        incentives are enabled by the BZZ token.
      ctas:
      - template: cta
        arrow: true
        title: Participate
        href: https://discord.ethswarm.org/
        background: orange-onDark
        type: default
      background:
        src: "/assets/hero/run.png"
        alt: ''
        position: ''
      footnote: ''
    items:
    - template: section-item
      contentWidth: full
      title: Incentivised P2P Storage
      content: |-
        Swarm uses the blockchain to provide a layer of incentivisation that has been missing from p2p file sharing and data transfer over decades of peer-to-peer research.

        Built-in incentives seek to optimise the allocation of bandwidth (SWAP) and storage resources (Postage stamps) and render Swarm economically self-sustaining.

        Swarm nodes track their relative bandwidth contribution on each peer connection, and excess debt due to unequal consumption can be settled in BZZ. Publishers in Swarm must spend BZZ to purchase the right to write data to Swarm and prepay some rent for long term storage.
      features:
        columns: two
        features:
        - template: feature
          cta:
            arrow: true
            background: []
            type: default
            title: ''
            href: ''
          title: Empower digital freedom
          content: By running a full Swarm node you are actively enabling a P2P data
            storage network that enables publishers and dapp developers making web3
            decentralised.
          icon: ''
        - template: feature
          cta:
            arrow: true
            background: []
            type: default
            title: ''
            href: ''
          title: Public Interest
          content: Swarm establishes a system where important public data projects,
            such as Open Street Maps, can be collectively funded. Check out Wikipedia
            prize.
          icon: ''
        type: large
      ctas: []
      image: ''
      code: ''
- template: section
  type: Section
  data:
    hero:
      title: Swarm Desktop
      id: desktop
      content: Swarm Desktop (Beta) offers decentralised access to the Swarm network
        and an easy-to-use experience.
      background:
        src: "/assets/hero/desktop.png"
        position: container
        alt: ''
      ctas:
      - template: cta
        arrow: true
        background: orange
        type: download
        title: ''
        href: ''
      - template: cta
        arrow: true
        title: View on GitHub
        background: transparent
        href: https://github.com/ethersphere/swarm-desktop/releases
        type: default
      footnote: Swarm Desktop is in Beta and currently includes the Sentry application
        monitoring and bug reporting software which automatically collects data in
        order to help improve the software.
    items:
    - template: section-item
      contentWidth: full
      features:
        type: default
        columns: three
        features:
        - template: feature
          cta:
            arrow: true
            background: []
            type: default
            title: ''
            href: ''
          title: Join Swarm with just 1 click
          content: Joining the Swarm network has never been easier, simply download
            and install Swarm Desktop.
          icon: PlusIcon
        - template: feature
          cta:
            arrow: true
            background: []
            type: default
            title: ''
            href: ''
          title: Unlimited access
          content: Upload and share content without limitations on the Swarm network
            by funding your node with BZZ.
          icon: UnlimitedIcon
        - template: feature
          cta:
            arrow: true
            background: []
            type: default
            title: ''
            href: ''
          title: Manage your data persistence
          content: Swarm Desktop (Beta) makes it easy to buy and manage the stamps
            that will keep your content alive on the Swarm network.
          icon: LayersIcon
        - template: feature
          cta:
            arrow: true
            background: []
            type: default
            title: ''
            href: ''
          title: Easily host websites
          content: Upload your website to the Swarm network and make it universally
            accessible. Easily share it with preview URLs, or link it with your ENS
            name for easy discovery.
          icon: ExpandIcon
        - template: feature
          cta:
            arrow: true
            background: []
            type: default
            title: ''
            href: ''
          title: Explore before you build
          content: Swarm Desktop makes it simple for you to try out and explore the
            functionality of the Swarm network. Easily check your Swarm light-node's
            status, settings, and wallet.
          icon: CompassIcon
        - template: feature
          cta:
            arrow: true
            background: []
            type: default
            title: ''
            href: ''
          title: Upload and forget
          content: No need to keep your node running. Once you have uploaded your
            content to Swarm, it will automatically be kept alive by a worldwide network
            of peers.
          icon: UploadIcon
      title: Access Swarm network
      content: |-
        Run a lightweight Swarm node on your own computer, and you'll have direct peer-to-peer access to the network. No need to rely on centralised gateways.

        Use your favourite web browser to manage your node, browse websites, and upload or download data directly from peers in the Swarm network.
      ctas:
      - template: cta
        arrow: true
        type: download
        background: orange
        title: ''
        href: ''
      - template: cta
        arrow: true
        type: default
        title: View on GitHub
        href: https://github.com/ethersphere/swarm-desktop/releases
        background: transparent
      image: "/uploads/swarm-desktop.png"
      code: ''

---
