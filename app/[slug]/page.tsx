import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { SolutionPage } from "@/components/SolutionPage";
import { allContentPages, getContentPage } from "@/data/site-content";

export function generateStaticParams() {
  return allContentPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getContentPage(slug);
  if (!page) return {};
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `/${page.slug}` },
    openGraph: {
      title: `${page.title} | Devnet Limited`,
      description: page.description,
      url: `/${page.slug}`,
    },
  };
}

export default async function DynamicContentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getContentPage(slug);
  if (!page) notFound();
  return (
    <>
      <SiteNav />
      <SolutionPage page={page} />
      <SiteFooter />
    </>
  );
}
