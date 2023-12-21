---
meta:
  title: Milestone 3
sections:
  - type: Section
    data:
      hero:
        title: Milestone 3
        id: ""
        content: >-
          Node-operators are directly rewarded for contributing their storage
          space
        ctas:
          - template: cta
            arrow: true
            type: default
            title: <- Roadmap
            href: "/roadmap"
            background: orange
            back: true
        background:
          src: /assets/hero/roadmap.png
          alt: ""
          position: ""
        footnote: ""
      items: []
    template: section
  - type: Section
    data:
      items:
        - template: section_item
          titleSize: small
          title: Phase 1 - Postage stamp upgrade and incentives calibration (September 12th release)
          content: >-
            Full reserve total size is correctly calculated and clients are able
             to consent on storage depth within neighbourhoods. This involves the
             update of the Postage Stamp smart contract so that we can release the
             value currently locked in the contract, paving the way for the rollout
             of the storage incentives roadmap.
        - template: section_item
          titleSize: small
          title: Phase 2 - Smart Contracts to deploy (Staking & Schelling/Redistribution)
          content: >-
            The new storage incentives implement a Schelling game based on reserve
            commitment. The storage incentives contract pays out the pot to a random
            neighbourhood choosing the winner node based on neighbourhood stake
            density. No slashing and no verification of claim.

            After staking and committing, applicants reveal their reserve
            commitments and the truth is selected in proportion to stake density.
            Winner is selected in proportion to stake and paid the pot.
        - template: section_item
          titleSize: small
          title: Phase 3 - The Price Oracle smart contract (phases 2&3 October release to incentivised testnet)
          content: >-
            The price oracle contract reacts to signals of changing supply and
            demand by setting the global price of storage (unit is chunk per block)
            accordingly.
        - template: section_item
          titleSize: small
          title: Phase 4 - Reserve Commitment Verification I (December development, release TBD)
          content: >-
            The winning claim is verified for retention, relevance, reserve
            utilisation rate, verified correctness of reserve commitment, requiring
            segment inclusion proof of a deterministically random chunk in RC for
            valid claim (proof of retention), requires postage stamp (proof of
            relevance), verify PO(stamp, anchor) > reported depth, reserve size
            estimation is based on inclusion proofed sample density (proof of
            reserve size).

            Calculated the reserve commitment (RC) hash (iteration over reserved
            chunks within storage depth and calculate a sample of n (128) chunks
            whose transformed data hash to the smallest integers).

            Slashing introduced - to prevent non-conformant proofs of reserve by
            slashing stake
        - template: section_item
          titleSize: small
          title: Phase 5 - Reserve Commitment Verification II (January development, release TBD)
          content: >-
            A secondary reserve commitment (RC2) is included in the winning claim
            and verified in the contract. RC2 is a similar 128-chunk sample of batch
            indexes to prevent content mining attack using valid stamps from
            self-owned batches

        ##

    template: post
---
