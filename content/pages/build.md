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
        content: >-
          Swarm provides a complete stack of essential base 
          layer components for developers. Build and host dApps, 
          NFT meta-data, and media files, all within a decentralised framework!
        ctas: []
        background:
          src: /assets/hero/build.png
          alt: ""
          position: ""
        footnote: ""
      items:
        - template: section_item
          contentWidth: half
          features:
            columns: []
            features: []
            type: ""
          title: Bee
          content: >-
            Bee is a peer-to-peer client that connects you with other peers all
            over the world to become part of the Swarm network, a global distributed
            P2P storage network that aims to store and distribute all of the
            world's data. Running a full Bee node gives you access to all the
            functionalities of Swarm.
          ctas:
            - template: cta
              arrow: true
              type: default
              title: Get the Documentation
              href: "https://docs.ethswarm.org/docs/dapps-on-swarm/introduction"
              background: transparent
          image: ""
          code: Bee
        - template: section_item
          contentWidth: half
          features:
            columns: []
            features: []
            type: ""
          title: Bee-js
          content: >-
            Bee-js is Bee’s complementary JavaScript library. It’s a powerful
            tool for building completely decentralised apps with just a few
            lines of code.
          ctas:
            - template: cta
              arrow: true
              type: default
              title: Get the Documentation
              href: "https://bee-js.ethswarm.org/docs/"
              background: transparent
          image: ""
          code: Bee-js
        - template: section_item
          contentWidth: half
          features:
            columns: []
            features: []
            type: ""
          title: Swarm-CLI
          content: >-
           Swarm-CLI simplifies the process of node management and decentralised application 
           development on the Swarm network by offering an intuitive and user-friendly command 
           line interface which can be used for engaging with the Swarm ecosystem. 
           This powerful tool enables effortless uploading and downloading of files, folders, 
           and entire websites. Additionally, it streamlines the process of managing feeds and 
           identities, and it makes node management a breeze.  
          ctas:
            - template: cta
              arrow: true
              type: default
              title: Learn more on Github
              href: "https://github.com/ethersphere/swarm-cli"
              background: transparent
          image: ""
          code: Swarm-CLI
        - template: section_item
          contentWidth: half
          features:
            columns: []
            features: []
            type: ""
          title: Bee API
          content: >-
            The Bee API provides a powerful HTTP interface with a rich set of endpoints
            for interacting with the Swarm network. It offers a wide range of functionalities 
            for managing node resources and obtaining operational metrics and insights which 
            are vital for node operators and decentralised application developers.
          ctas:
            - template: cta
              arrow: true
              type: default
              title: Get the Documentation
              href: "https://docs.ethswarm.org/api/"
              background: transparent
          image: ""
          code: Bee API
        - template: section_item
          contentWidth: full
          title: Layer2 tooling through ecosystem initiatives
          content: |-
            Highlighted below are various ecosystem-driven projects designed to accelerate decentralised application development and foster data interoperability and sovereignty. The Swarm Foundation proudly supports these initiatives but does not guarantee their performance.

            Currently, all projects are undergoing intensive development, and contributions are highly encouraged. Additionally, the Swarm Foundation offers [grants](https://my.ethswarm.org/grants) to support contributions to the projects listed.
          features:
            columns: three
            features:
              - template: feature
                cta:
                  arrow: true
                  type: default
                  title: Try fairOS
                  href: "https://docs.fairos.fairdatasociety.org/docs/"
                  background: transparent
                title: fairOS - decentralise your app
                content: >-
                  fairOS transforms the way you interact with Swarm by offering a distributed 
                  file system and versatile database solutions, including key-value and document 
                  (multi-index) databases. By freeing up developers to focus on building their 
                  applications rather than worrying about the intricacies of Swarm, fairOS 
                  gives developers a significant head start on their projects.  
                icon: ""
              - template: feature
                cta:
                  arrow: true
                  type: default
                  title: Test fairdrive
                  href: "https://fairdrive.fairdatasociety.org/"
                  background: transparent
                title: Fairdrive - take back control of your data
                content: >-                                  
                  Fairdrive is a decentralised alternative to services like Dropbox 
                  and Google Drive, powered by Swarm. It provides a user-friendly 
                  interface for decentralised applications (dApps) and personal data storage. 
                  Fairdrive empowers users to take control of their data and allows developers 
                  to leverage it to easily add decentralised storage to their dApps.
                icon: ""
              - template: feature
                cta:
                  arrow: true
                  type: default
                  title: Learn more
                  href: "https://fdp.fairdatasociety.org"
                  background: transparent
                title: Fair data protocol - help foster interoperability
                content: >-
                  Swarm envisions a diverse future with multiple data stores catering 
                  to various needs. Fair Data Protocol (FDP) acts as the connecting link, 
                  facilitating interoperability. Presently, the project is in an active 
                  development phase, and community members are encouraged to participate 
                  by contributing to or proposing enhancements through 
                  [Fair data Improvement Proposals](https://github.com/fairDataSociety/FIPs).
                icon: ""
            type: default
          ctas: []
          image: ""
          code: ""
  - template: section_cta
    type: Cta
    data:
      title: "Join us! #develop-on-swarm room at our Discord Server"
      ctas:
        - template: cta
          arrow: true
          title: Participate
          href: "https://discord.ethswarm.org/"
          background: orange-onDark
          type: default
_template: page
---
