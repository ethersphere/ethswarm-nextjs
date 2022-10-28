This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Development

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Icons (development)

Icons are in the `./icons/svg` folder, optimized and stripped of the width and height values.

Create components from the icons by running:

```bash
npm run build-icons
```

# Production

```bash
npm ci
npm run build
npm run export
```

# Content

All content is structured under the `/data` folder. Most of the pages are structured dynamically, which allows for custom modifications and enables building new content pages quickly. All Pages should be in the `/data/pages` folder. They are not automatically generated, the page slug has to be added in the `/pages/[...slug].tsx` file.
