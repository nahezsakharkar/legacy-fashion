import Layout from "@/layout/Layout";
import "./globals.scss";

export const metadata = {
  title: "Legacy Fashion | Luxury Fashion & Accessories",
  description:
    "Discover Legacy Fashion's stunning collection of clothes, shoes, watches, bags, sunglasses, jewellery, and belts. Explore luxury, casual, and trendy styles with high-quality photos and videos.",
  keywords: [
    "fashion",
    "luxury fashion",
    "clothes showcase",
    "shoes collection",
    "designer watches",
    "handbags",
    "sunglasses",
    "jewellery",
    "belts",
    "new arrivals",
    "fashion accessories",
    "designer fashion India",
  ],
  authors: [{ name: "Legacy Fashion" }],
  creator: "Legacy Fashion",
  publisher: "Legacy Fashion",

  // Open Graph (Facebook, WhatsApp, LinkedIn previews)
  openGraph: {
    type: "website",
    url: "https://www.mybrand.com",
    title: "Legacy Fashion | Luxury Fashion & Accessories",
    description:
      "Browse Legacy Fashion's exclusive portfolio of fashion products – clothes, shoes, bags, jewellery, sunglasses, and more.",
    siteName: "MyBrand",
    images: [
      {
        url: "https://www.mybrand.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Legacy Fashion Fashion Portfolio",
      },
    ],
  },

  // Twitter Cards
  twitter: {
    card: "summary_large_image",
    site: "@mybrand",
    creator: "@mybrand",
    title: "Legacy Fashion | Luxury Fashion & Accessories",
    description:
      "Discover exclusive fashion collections: clothes, shoes, watches, jewellery & more.",
    images: ["https://www.mybrand.com/og-image.jpg"],
  },

  // Icons
  icons: {
    icon: "/assets/icons/favicon.ico",
    shortcut: "/assets/icons/favicon-16x16.png",
    apple: "/assets/icons/apple-touch-icon.png",
  },

  // Other SEO helpers
  manifest: "/assets/icons/site.webmanifest",
  metadataBase: new URL("https://www.mybrand.com"),
  alternates: {
    canonical: "https://www.mybrand.com",
  },
  themeColor: "#ffffffff",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
