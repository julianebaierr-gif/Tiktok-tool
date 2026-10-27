import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs({ items = [] }) {
  if (!items || items.length === 0) return null;

  // Build full URLs for JSON-LD schema
  const baseUrl = 'https://quktik.com';
  const schemaList = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: baseUrl,
    },
    ...items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 2,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${baseUrl}${item.url}`,
    })),
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: schemaList,
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-1">
      {/* BreadcrumbList Structured Data Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Visual Accessible Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center text-xs sm:text-sm text-slate-500 font-medium">
        <ol className="flex items-center flex-wrap gap-1.5 sm:gap-2">
          <li className="inline-flex items-center">
            <Link
              href="/"
              className="inline-flex items-center gap-1 text-slate-500 hover:text-rose-700 transition-colors"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
          </li>

          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={item.url || index} className="inline-flex items-center gap-1.5 sm:gap-2">
                <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                {isLast ? (
                  <span className="text-slate-900 font-semibold truncate max-w-[200px] sm:max-w-none" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.url}
                    className="text-slate-500 hover:text-rose-700 transition-colors truncate max-w-[150px] sm:max-w-none"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
}
