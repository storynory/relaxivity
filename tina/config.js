import { defineConfig, defineSchema } from "tinacms";

const router = ({ document, collection }) => {
  return `/${collection.name}/${document._sys.filename}`
}
const extendedRouter = ({ document, collection }) => {
  return `/${collection.name}/${document._sys.breadcrumbs.join('/')}`
}

const schema = defineSchema({
  collections: [
    {
      label: "Page Content",
      name: "page",
      path: "pages",
      format: "mdx",
      fields: [
        {
          type: "string",
          label: "Title",
          name: "title",
        },
        {
          name: "body",
          label: "Main Content",
          type: "string",
          isBody: true,
        },
      ],
      ui: {
        router: ({ document }) => {
          if (document._sys.filename === "home") {
            return `/`;
          }
          return undefined;``
        },
      },
    },
    {
      label: "Posts",
      name: "post",
      path: "posts",
      defaultItem: () => {
        return {
          // When a new post is created the title field will be set to "New post"
          title: 'New Post',
          author: "Bertie",
          excerpt: "The latest relaxing post",
          date: new Date().toISOString()
        }
      },

      fields: [
        {
          type: "string",
          label: "Title",
          name: "title",
        },
        {
          type: "string",
          label: "Author",
          name: "author",
        },
        {
          label: "Excerpt",
          name: "excerpt",
          type: "string",
          ui: {
            component: "textarea"
          }
        },
        {
          type: "string",
          label: "URL",
          name: "url",
        },
        {
          label: "Audio",
          name: "audio",
          type: "object",
          fields: [
            {
              label: "mp3",
              name: "mp3",
              type: "string"
            },
            {
              label: "Length",
              name: "length",
              type: "number"
            },
            {
              label: "Duration",
              name: "duration",
              type: "number"
            }
          ]
        },
        {
        type: "string",
        label: "Series",
        name: "series",
      },
      {
        label: 'Tags',
        name: 'tags',
        type: 'string',
        list: true,
      },
      {
        label: "Date",
        name: "date",
        type: "datetime",
     
        
        ui: {
          dateFormat: 'YYYY MM DD'
        }
      },
      {
        label: "Cover Art",
        name: "coverart",
        type: "object",
        fields: [
          {
            label: "src",
            name: "src",
            type: "string"
          },
          {
            label: "alt text",
            name: "alt",
            type: "image"
          }
        ]
      },
      {
        label: "Video Art",
        name: "videoart",
        type: "object",
        fields: [
          {
            label: "src",
            name: "src",
            type: "image"
          },
          {
            label: "alt text",
            name: "alt",
            type: "string"
          }
        ]
      },

        {
         label: "Blog Post Body",
          name: "body",
          isBody: true,
          type: "rich-text",
        },
      ],
      ui: {
        router: ({ document }) => {
          return `/posts/${document._sys.breadcrumbs.join('/')}`;
        },
      },
    },
  ],
});

export const config = defineConfig({
  clientId: process.env.PUBLIC_TINA_CLIENT_ID,
  branch:
    process.env.NEXT_PUBLIC_TINA_BRANCH || // custom branch env override
    process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF || // Vercel branch env
    process.env.HEAD, // Netlify branch env
  token: process.env.TINA_TOKEN,
  media: {
    // If you wanted cloudinary do this
    // loadCustomStore: async () => {
    //   const pack = await import("next-tinacms-cloudinary");
    //   return pack.TinaCloudCloudinaryMediaStore;
    // },
    // this is the config for the tina cloud media store
    tina: {
      publicFolder: "public",
      mediaRoot: "images",
    },
  },
  build: {
    publicFolder: "_site", // The public asset folder for your framework
    outputFolder: "admin", // within the public folder
  },
  schema,
});

export default config;
