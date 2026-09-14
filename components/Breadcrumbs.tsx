import Link from "next/link";
import BreadcrumbSchema, { type BreadcrumbItem } from "@/components/BreadcrumbSchema";

/**
 * Visible breadcrumb trail + matching BreadcrumbList JSON-LD in one call.
 * Use this instead of BreadcrumbSchema directly on new pages — schema with
 * no on-page equivalent is against Google's own structured-data guidance,
 * and on 3-4 level deep URLs (locations/region/suburb/floor-preparation)
 * it's the only way back up besides the main nav.
 */
export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <>
      <nav aria-label="Breadcrumb" className="border-b border-slate-200 bg-slate-50">
        <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-1.5 gap-y-1 px-5 py-2.5 text-xs font-medium text-slate-500">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={item.url} className="flex items-center gap-1.5">
                {index > 0 && (
                  <span aria-hidden="true" className="text-slate-300">
                    /
                  </span>
                )}
                {isLast ? (
                  <span className="font-bold text-slate-900" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link href={item.url} className="transition-colors hover:text-yellow-600">
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <BreadcrumbSchema items={items} />
    </>
  );
}
