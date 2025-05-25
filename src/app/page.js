import { notFound } from "next/navigation";
import { headers } from "next/headers";
import { fetchPageData } from "@/lib/api/siteservice";
import { MOCK_DATA } from "@/lib/mock/mockdata";
import RamanSinghHeader from '@/components/sections/RamanSinghHeader';
import RamanSinghHero from '@/components/sections/RamanSinghHero';
import RamanSinghServices from '@/components/sections/RamanSinghServices';
import RamanSinghAbout from '@/components/sections/RamanSinghAbout';
import RamanSinghGallery from '@/components/sections/RamanSinghGallery';
import RamanSinghTeam from '@/components/sections/RamanSinghTeam';
import RamanSinghTestimonials from '@/components/sections/RamanSinghTestimonials';
import RamanSinghContact from '@/components/sections/RamanSinghContact';

// Force dynamic rendering since we're using headers()
export const dynamic = "force-dynamic";
export const runtime = "edge";

// Helper function to get subdomain from host
function getSubdomain(host) {
  console.log("Getting subdomain from host:", host);

  // Always return d2d for localhost for development
  if (host.includes("localhost")) {
    console.log("Localhost detected, returning 'd2d'");
    return "d2d";
  }

  // Extract subdomain from host (e.g., 'mysite.example.com' -> 'mysite')
  const parts = host.split(".");
  // Check if we have a subdomain
  if (parts.length > 2) {
    console.log("Subdomain detected:", parts[0]);
    return parts[0];
  }

  // Default subdomain or handle www
  const subdomain = parts[0] === "www" ? "default" : parts[0];
  console.log("Using subdomain:", subdomain);
  return subdomain;
}

export async function generateMetadata({ params, searchParams }) {
  try {
    const headersList = await headers();
    const host = headersList.get("host") || "localhost:3000";
    console.log("Host in generateMetadata:", host);

    // Get subdomain through our helper function
    const subdomain = getSubdomain(host);
    // Try to fetch real site data
    const { siteMeta } = await fetchPageData(subdomain, params.slug || "home");

    return {
      title: siteMeta.title,
      description: siteMeta.description,
      openGraph: {
        images: siteMeta.og_image ? [siteMeta.og_image] : [],
      },
      keywords: siteMeta.keywords,
      twitter: {
        card: "summary_large_image",
        handle: siteMeta.twitter_handle,
      },
      icons: {
        icon: siteMeta.favicon,
      },
    };
  } catch (error) {
    console.error("siteMeta", error);
    // Fallback to mock data
    const siteMeta = MOCK_DATA.siteMeta;
    return {
      title: siteMeta.title,
      description: siteMeta.description,
      openGraph: {
        images: siteMeta.og_image ? [siteMeta.og_image] : [],
      },
      keywords: siteMeta.keywords,
      twitter: {
        card: "summary_large_image",
        handle: siteMeta.twitter_handle,
      },
      icons: {
        icon: siteMeta.favicon,
      },
    };
  }
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <RamanSinghHeader />
      <RamanSinghHero />
      <RamanSinghServices />
      <RamanSinghAbout />
      <RamanSinghGallery />
      <RamanSinghTeam />
      <RamanSinghTestimonials />
      <RamanSinghContact />
    </div>
  );
}
