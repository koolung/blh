import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Beauté Lia Hair Salon | Halifax, Nova Scotia",
  description: "Premier hair salon in Halifax, Nova Scotia. Expert cuts, balayage, keratin treatments, and color services. Book your appointment at Beauté Lia Hair today!",
  keywords: ["hair salon Halifax", "balayage Halifax", "keratin treatment", "hair coloring Nova Scotia", "Beauté Lia Hair", "Halifax hair stylist"],
  authors: [{ name: "Beauté Lia Hair" }],
  openGraph: {
    title: "Beauté Lia Hair Salon | Halifax, Nova Scotia",
    description: "Premier hair salon in Halifax, Nova Scotia. Expert cuts, balayage, keratin treatments, and color services.",
    type: "website",
    locale: "en_CA",
    siteName: "Beauté Lia Hair",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beauté Lia Hair Salon | Halifax, Nova Scotia",
    description: "Premier hair salon in Halifax, Nova Scotia. Expert cuts, balayage, keratin treatments, and color services.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    "name": "Beauté Lia Hair",
    "image": "https://beauteliahair.com/og-image.jpg",
    "description": "Premier hair salon in Halifax, Nova Scotia offering expert cuts, balayage, keratin treatments, and color services.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "56 Supreme Court",
      "addressLocality": "Halifax",
      "addressRegion": "NS",
      "postalCode": "B3M 0E6",
      "addressCountry": "CA"
    },
    "telephone": "+1-902-989-5949",
    "url": "https://beauteliahair.com",
    "priceRange": "$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "10:00",
        "closes": "17:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "200"
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
