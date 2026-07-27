import React from "react";

// The smallest possible inline markup for blog body copy: [label](/href) and
// **bold**. Deliberately not Markdown and deliberately not MDX.
//
// Two reasons. A post is DATA, and data that can contain arbitrary HTML is data
// that can quietly break the page's structure (a stray <h1> in a paragraph
// fails the build gate's one-h1 rule). And the FAQ answers on this site are
// plain text on purpose, because the JSON-LD must match the visible string
// exactly; keeping the inline vocabulary tiny keeps that promise cheap to hold.

const TOKEN = /\[([^\]]+)\]\(([^)\s]+)\)|\*\*([^*]+)\*\*/g;

function isExternal(href: string): boolean {
  return /^https?:\/\//i.test(href);
}

/** Render one string of body copy with inline links and bold. */
export function renderInline(text: string, keyPrefix: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  let cursor = 0;
  let match: RegExpExecArray | null;

  TOKEN.lastIndex = 0;
  while ((match = TOKEN.exec(text)) !== null) {
    if (match.index > cursor) nodes.push(text.slice(cursor, match.index));

    const [, linkLabel, href, boldText] = match;
    if (linkLabel && href) {
      const external = isExternal(href);
      nodes.push(
        <a
          key={`${keyPrefix}-l${match.index}`}
          href={href}
          className="text-pw-link underline underline-offset-2 hover:text-pw-accent transition-colors"
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {linkLabel}
        </a>
      );
    } else if (boldText) {
      nodes.push(
        <strong key={`${keyPrefix}-b${match.index}`} className="text-pw-text font-semibold">
          {boldText}
        </strong>
      );
    }
    cursor = match.index + match[0].length;
  }

  if (cursor < text.length) nodes.push(text.slice(cursor));
  return nodes;
}

export default function Paragraph({
  text,
  id,
  className = "",
}: {
  text: string;
  id: string;
  className?: string;
}) {
  return <p className={className}>{renderInline(text, id)}</p>;
}
