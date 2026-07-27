/**
 * Renders question/answer pairs as plain semantic HTML.
 *
 * No accordion, no client JavaScript. An answer hidden behind a click is an
 * answer a crawler reads and a visitor does not, and this is the one page type
 * where the schema is required to match the visible text exactly.
 *
 * `headingLevel` exists because the FAQ page nests these under topic H2s while
 * a blog post's FAQ block sits under its own H2.
 */
export type FaqEntry = { id?: string; question: string; answer: string };

export default function FaqList({
  items,
  headingLevel = 3,
  idPrefix = "",
}: {
  items: readonly FaqEntry[];
  headingLevel?: 2 | 3;
  idPrefix?: string;
}) {
  const Heading = (headingLevel === 2 ? "h2" : "h3") as "h2" | "h3";

  return (
    <div className="space-y-8">
      {items.map((item, index) => {
        const anchor = item.id ?? `${idPrefix}q${index + 1}`;
        return (
          <div key={anchor} id={anchor} className="scroll-mt-28">
            <Heading className="text-lg font-semibold text-pw-text mb-2">
              {item.question}
            </Heading>
            <p className="text-pw-text-subtle leading-relaxed">{item.answer}</p>
          </div>
        );
      })}
    </div>
  );
}
