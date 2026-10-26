import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemaTypes";
import { structure } from "./sanity/structure";
import { seedTool } from "./sanity/seedTool";

const projectId = "qlmlva8n";
const dataset = "production";

export default defineConfig({
  name: "grunge-hotel",
  title: "Grunge Hotel CMS",
  projectId,
  dataset,
  basePath: "/admingod",
  plugins: [structureTool({ structure }), visionTool(), seedTool()],
  schema: { types: schemaTypes },
});
