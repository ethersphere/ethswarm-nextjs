import type { TinaField } from "tinacms";
export function backgroundFields() {
  return [
    {
      type: "object",
      name: "background",
      label: "Background",
      fields: [
        {
          type: "string",
          name: "src",
          label: "Image",
          options: [
            "/assets/hero/build.png",
            "/assets/hero/run.png",
            "/assets/hero/desktop.png",
            "/assets/hero/impact.png",
            "/assets/hero/join_alt",
            "/assets/hero/roadmap2.png",
            "/assets/hero/wws.png",
          ],
        },
        {
          type: "string",
          name: "alt",
          label: "Alt",
        },
        {
          type: "string",
          name: "position",
          label: "Position",
          options: ["default", "container"],
        },
      ],
    },
  ] as TinaField[];
}
export function ctaFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "href",
      label: "URL",
    },
    {
      type: "boolean",
      name: "arrow",
      label: "Arrow",
    },
    {
      type: "string",
      name: "background",
      label: "Background",
      options: ["white", "orange", "transparent", "orange-onDark", "black"],
    },
    {
      type: "string",
      name: "type",
      label: "Type",
      options: ["default", "download"],
    },
    {
      type: "boolean",
      name: "back",
      label: "Back",
    },
  ] as TinaField[];
}
export function eventFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "href",
      label: "Link to event",
    },
    {
      type: "string",
      name: "add_to_calendar",
      label: "Calendar link",
    },
    {
      type: "datetime",
      name: "start_date",
      label: "Event start date",
    },
  ] as TinaField[];
}
export function featureFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "content",
      label: "Content",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "boolean",
      name: "exchanges",
      label: "Show exchanges",
    },
    {
      type: "boolean",
      name: "bzzPrice",
      label: "Show BZZ Token Price",
    },
    {
      type: "boolean",
      name: "bzzPot",
      label: "Show BZZ Pot value",
    },
    ...iconFields(),
    {
      type: "object",
      name: "cta",
      label: "CTA",
      fields: [...ctaFields()],
    },
  ] as TinaField[];
}
export function homepageFields() {
  return [
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
          nameOverride: "news-item",
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
  ] as TinaField[];
}
export function iconFields() {
  return [
    {
      type: "string",
      name: "icon",
      label: "Icon",
      options: [
        "PlusIcon",
        "LayersIcon",
        "ExpandIcon",
        "CompassIcon",
        "UploadIcon",
        "UnlimitedIcon",
        "OpenIcon",
        "FaultIcon",
        "DowntimeIcon",
        "PrivacyIcon",
        "DdosIcon",
        "CredibleIcon",
        "ForkIcon",
        "ConnectIcon",
        "GrowIcon",
        "LockIcon",
        "LeakIcon",
        "NutIcon",
        "OpenIcon",
        "BoxArrowIcon",
        "HeartIcon",
        "RouteIcon",
        "PushIcon",
        "PullIcon",
        "RetrieveIcon",
      ],
    },
  ] as TinaField[];
}
export function job_postFields() {
  return [
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
      name: "job",
      label: "Job",
      fields: [
        {
          type: "string",
          name: "category",
          label: "Category",
          list: true,
          ui: {
            component: "tags",
          },
        },
        {
          type: "string",
          name: "title",
          label: "Title",
        },
        {
          type: "string",
          name: "description",
          label: "Description",
          ui: {
            component: "textarea",
          },
        },
      ],
    },
  ] as TinaField[];
}
export function news_itemFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "category",
      label: "Category",
      list: true,
      ui: {
        component: "tags",
      },
    },
    {
      type: "string",
      name: "readTime",
      label: "Read time",
    },
    {
      type: "image",
      name: "image",
      label: "Image",
    },
    {
      type: "string",
      name: "href",
      label: "URL",
    },
    {
      type: "string",
      name: "copy",
      label: "Short copy",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "object",
      name: "cta",
      label: "CTA",
      fields: [...ctaFields()],
    },
  ] as TinaField[];
}
export function pageFields() {
  return [
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
      list: true,
      templateKey: "template",
      label: "Sections",
      name: "sections",
      templates: [
        {
          fields: sectionFields(),
          label: "Section",
          name: "section",
        },
        {
          fields: section__ctaFields(),
          label: "Section: CTA",
          name: "section_cta",
          nameOverride: "section-cta",
        },
        {
          fields: roadmapFields(),
          label: "Roadmap",
          name: "roadmap",
        },
        {
          fields: postFields(),
          label: "Post",
          name: "post",
        },
      ],
    },
  ] as TinaField[];
}
export function postFields() {
  return [
    {
      type: "string",
      name: "type",
      label: "type",
    },
    {
      type: "object",
      name: "data",
      label: "Data",
      fields: [
        {
          type: "boolean",
          name: "border",
          label: "Border",
        },
        {
          type: "object",
          name: "sidebar",
          label: "Sidebar",
          fields: [
            {
              type: "string",
              name: "content",
              label: "Content",
              ui: {
                component: "textarea",
              },
            },
            {
              type: "object",
              list: true,
              templateKey: "template",
              label: "CTAs",
              name: "ctas",
              templates: [
                {
                  fields: ctaFields(),
                  label: "CTA",
                  name: "cta",
                },
              ],
            },
          ],
        },
        {
          type: "string",
          name: "content",
          label: "Content",
          ui: {
            component: "textarea",
          },
        },
      ],
    },
  ] as TinaField[];
}
export function roadmap_itemFields() {
  return [
    {
      type: "string",
      name: "status",
      label: "Status",
      options: ["completed", "in-progress", "next-up"],
      required: true,
    },
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "content",
      label: "Content",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "object",
      list: true,
      templateKey: "template",
      label: "CTAs",
      name: "ctas",
      templates: [
        {
          fields: ctaFields(),
          label: "CTA",
          name: "cta",
        },
      ],
    },
  ] as TinaField[];
}
export function roadmapFields() {
  return [
    {
      type: "string",
      name: "type",
      label: "Type",
    },
    {
      type: "object",
      name: "data",
      label: "Data",
      fields: [
        {
          type: "boolean",
          name: "border",
          label: "Border",
        },
        {
          type: "string",
          name: "custom_id",
          nameOverride: "id",
          label: "Id",
        },
        {
          type: "object",
          name: "sidebar",
          label: "Sidebar",
          fields: [
            {
              type: "string",
              name: "content",
              label: "Content",
              ui: {
                component: "textarea",
              },
            },
            {
              type: "object",
              list: true,
              templateKey: "template",
              label: "CTAs",
              name: "ctas",
              templates: [
                {
                  fields: ctaFields(),
                  label: "CTA",
                  name: "cta",
                },
              ],
            },
          ],
        },
        {
          type: "object",
          list: true,
          templateKey: "template",
          label: "Items",
          name: "items",
          templates: [
            {
              fields: roadmap_itemFields(),
              label: "Roadmap Item",
              name: "roadmap_item",
              nameOverride: "roadmap-item",
            },
          ],
        },
      ],
    },
  ] as TinaField[];
}
export function section__ctaFields() {
  return [
    {
      type: "string",
      name: "type",
      label: "Type",
    },
    {
      type: "object",
      name: "data",
      label: "Data",
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
        },
        {
          type: "object",
          list: true,
          templateKey: "template",
          label: "CTAs",
          name: "ctas",
          templates: [
            {
              fields: ctaFields(),
              label: "CTA",
              name: "cta",
            },
          ],
        },
      ],
    },
  ] as TinaField[];
}
export function section_itemFields() {
  return [
    {
      type: "string",
      name: "contentWidth",
      label: "Content Width",
      options: ["half", "full"],
      required: true,
    },
    {
      type: "string",
      name: "tagline",
      label: "Tagline",
    },
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "content",
      label: "Content",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "image",
      name: "image",
      label: "Image",
    },
    {
      type: "object",
      name: "features",
      label: "Features",
      fields: [
        {
          type: "string",
          name: "columns",
          label: "Columns",
          options: ["two", "three"],
        },
        {
          type: "string",
          name: "type",
          label: "Type",
          options: ["default", "large"],
        },
        {
          type: "object",
          list: true,
          templateKey: "template",
          label: "Features",
          name: "features",
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
      type: "object",
      list: true,
      templateKey: "template",
      label: "CTAs",
      name: "ctas",
      templates: [
        {
          fields: ctaFields(),
          label: "CTA",
          name: "cta",
        },
      ],
    },
    {
      type: "string",
      name: "code",
      label: "Code",
      options: ["Bee", "Bee-js", "Swarm-CLI", "Bee API"],
    },
  ] as TinaField[];
}
export function sectionFields() {
  return [
    {
      type: "string",
      name: "type",
      label: "Type",
    },
    {
      type: "object",
      name: "data",
      label: "Data",
      fields: [
        {
          type: "object",
          name: "hero",
          label: "Hero",
          fields: [
            {
              type: "string",
              name: "title",
              label: "Title",
            },
            {
              type: "string",
              name: "custom_id",
              nameOverride: "id",
              label: "ID (Anchor)",
            },
            {
              type: "string",
              name: "content",
              label: "Content",
              ui: {
                component: "textarea",
              },
            },
            {
              type: "object",
              list: true,
              templateKey: "template",
              label: "CTAs",
              name: "ctas",
              templates: [
                {
                  fields: ctaFields(),
                  label: "CTA",
                  name: "cta",
                },
              ],
            },
            ...backgroundFields(),
            {
              type: "string",
              name: "footnote",
              label: "Footnote",
              ui: {
                component: "textarea",
              },
            },
          ],
        },
        {
          type: "object",
          list: true,
          templateKey: "template",
          label: "Items",
          name: "items",
          templates: [
            {
              fields: section_itemFields(),
              label: "Section Item",
              name: "section_item",
              nameOverride: "section-item",
            },
          ],
        },
        {
          type: "boolean",
          name: "disclaimer",
          label: "Show disclaimer",
        },
      ],
    },
  ] as TinaField[];
}
