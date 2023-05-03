import { defineConfig } from "tinacms";
import {
  section_itemFields,
  news_itemFields,
  featureFields,
  pageFields,
  job_postFields,
  eventFields,
} from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.HEAD ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.TINA_BRANCH ||
  "main";

export default defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT_ID || "", // Get this from tina.io
  token: process.env.TINA_TOKEN || "", // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        format: "md",
        label: "Home",
        name: "home",
        path: "content",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "home",
        },
        fields: [
          {
            type: "object",
            name: "meta",
            label: "Meta",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
              },
            ],
          },
          {
            type: "object",
            name: "upload",
            label: "Upload",
            fields: [...section_itemFields()],
          },
          {
            type: "object",
            list: true,
            templateKey: "template",
            label: "News items",
            name: "news",
            templates: [
              {
                fields: news_itemFields(),
                label: "News Item",
                name: "news_item",
                // nameOverride: "news-item",
              },
            ],
          },
          {
            type: "object",
            list: true,
            templateKey: "template",
            label: "Bounties",
            name: "bounties",
            templates: [
              {
                fields: featureFields(),
                label: "Feature",
                name: "feature",
              },
            ],
          },
          {
            type: "object",
            list: true,
            templateKey: "template",
            label: "Grantees",
            name: "grantees",
            templates: [
              {
                fields: featureFields(),
                label: "Feature",
                name: "feature",
              },
            ],
          },
        ],
      },
      {
        format: "md",
        label: "Pages",
        name: "pages",
        path: "content/pages",
        match: {
          include: "**/*",
        },
        fields: [...pageFields()],
      },
      {
        format: "md",
        label: "Jobs",
        name: "jobs",
        path: "content/jobs",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...job_postFields(),
        ],
      },
      {
        format: "md",
        label: "Events",
        name: "events",
        path: "content/events",
        match: {
          include: "**/*",
        },
        fields: [...eventFields()],
      },
    ],
  },
});
