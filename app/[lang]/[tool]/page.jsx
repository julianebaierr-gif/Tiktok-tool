import React from 'react';
import { notFound } from 'next/navigation';
import LocalizedToolPage from '../../../components/LocalizedToolPage';
import { VALID_TOOLS, VALID_LANGS, getToolSeoMetadata } from '../../../lib/tools';

export function generateStaticParams() {
  const params = [];
  for (const lang of VALID_LANGS) {
    for (const tool of VALID_TOOLS) {
      params.push({ lang, tool });
    }
  }
  return params;
}

export async function generateMetadata({ params }) {
  const { lang, tool } = params;
  if (!VALID_LANGS.includes(lang) || !VALID_TOOLS.includes(tool)) {
    return {};
  }
  return getToolSeoMetadata(lang, tool);
}

export default function DynamicToolPage({ params }) {
  const { lang, tool } = params;

  if (!VALID_LANGS.includes(lang) || !VALID_TOOLS.includes(tool)) {
    notFound();
  }

  return <LocalizedToolPage langCode={lang} toolSlug={tool} />;
}
