import type { BlogSection } from "@/lib/blog";

/**
 * Jump links for each H2, on long-form posts only (see needsTableOfContents).
 * Plain anchors, no client JavaScript: the browser already knows how to scroll
 * to a fragment, and a TOC that needs JS is a TOC that does not work in a
 * search result snippet.
 */
export default function TableOfContents({ sections }: { sections: BlogSection[] }) {
  return (
    <nav
      aria-label="On this page"
      className="rounded-2xl border border-pw-border-soft bg-pw-bg-card/60 p-6 mb-12"
    >
      <h2 className="text-sm font-semibold uppercase tracking-wide text-pw-text-muted mb-3">
        On this page
      </h2>
      <ol className="space-y-2 text-sm">
        {sections.map((section, index) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className="text-pw-text-subtle hover:text-pw-link underline underline-offset-2 transition-colors"
            >
              {index + 1}. {section.heading}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
