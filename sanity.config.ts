import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemaTypes";

const projectId = "qlmlva8n";
const dataset = "production";

export default defineConfig({
  name: "grunge-hotel",
  title: "Grunge Hotel CMS",
  projectId,
  dataset,
  basePath: "/admingod",
  plugins: [structureTool(), visionTool()],
  schema: { types: schemaTypes },
});
