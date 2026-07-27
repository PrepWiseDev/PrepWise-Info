import type { Crumb } from "@/lib/schema";

/**
 * Visible breadcrumbs. The matching BreadcrumbList JSON-LD is emitted by the
 * page from the SAME crumb array, so the schema can never describe a trail the
 * visitor cannot see.
 */
export default function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-pw-text-muted">
        {crumbs.map((crumb, index) => {
          const isLast = index === crumbs.length - 1;
          return (
            <li key={crumb.path} className="flex items-center gap-2">
              {isLast ? (
                <span aria-current="page" className="text-pw-text-subtle">
                  {crumb.name}
                </span>
              ) : (
                <>
                  <a
                    href={crumb.path}
                    className="underline underline-offset-2 hover:text-pw-link transition-colors"
                  >
                    {crumb.name}
                  </a>
                  <span aria-hidden="true">/</span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
