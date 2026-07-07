import fs from "node:fs";
import path from "node:path";

const REFIL_PAGES_DIR = path.join(
  /* turbopackIgnore: true */ process.cwd(),
  "data",
  "refil",
  "pages"
);

function resolvePagePath(slug?: string[]) {
  if (!slug || slug.length === 0) {
    return path.join(REFIL_PAGES_DIR, "index.html");
  }

  return path.join(REFIL_PAGES_DIR, ...slug, "index.html");
}

export async function GET(
  _request: Request,
  context: { params: Promise<{ slug?: string[] }> }
) {
  const { slug } = await context.params;
  const filePath = resolvePagePath(slug);

  if (!fs.existsSync(filePath)) {
    return new Response("Not Found", { status: 404 });
  }

  const html = fs.readFileSync(filePath, "utf8");

  return new Response(html, {
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "public, max-age=300",
    },
  });
}
