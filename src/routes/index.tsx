import { createFileRoute } from "@tanstack/react-router";

// The home route ships no og:image, so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Blank Project" },
      { name: "description", content: "A blank web app project." },
      { property: "og:title", content: "Blank Project" },
      { property: "og:description", content: "A blank web app project." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <main aria-label="Blank Project" className="min-h-screen bg-background" />;
}
