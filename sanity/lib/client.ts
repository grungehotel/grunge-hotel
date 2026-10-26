import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const sanityClient = createClient({
  projectId: "qlmlva8n",
  dataset: "production",
  apiVersion: "2025-02-19",
  useCdn: true,
});

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source: Parameters<typeof builder.image>[0]) => builder.image(source);
