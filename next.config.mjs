/** @type {import('next').NextConfig} */
import nextMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import rehypePrism from "@mapbox/rehype-prism";

const nextConfig = {
  images: {
    domains: [
      "localhost",
      "avatars.githubusercontent.com",
      "api.microlink.io",
      "res.cloudinary.com",
      "portfolio-backend-najv.onrender.com"
    ],
  },
  experimental: {
    mdxRs: true,
  },
};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
});

export default withMDX(nextConfig);
