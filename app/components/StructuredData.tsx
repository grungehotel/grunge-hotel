type JsonLdProps = { data: Record<string, unknown> | Record<string, unknown>[] };

export default function StructuredData({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const siteUrl = "https://www.grungehotel.com.kz";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["MusicGroup", "Organization"],
  name: "Grunge Hotel",
  url: siteUrl,
  logo: `${siteUrl}/images/logo-white.png`,
  description:
    "Живая группа и музыкальный подрядчик для корпоративов, свадеб и частных мероприятий в Алматы.",
  areaServed: { "@type": "City", name: "Алматы" },
  telephone: "+77072996264",
  sameAs: [
    "https://www.instagram.com/grungehotel.liveband",
    "https://www.youtube.com/@GrungeHotel_Almaty",
  ],
};
