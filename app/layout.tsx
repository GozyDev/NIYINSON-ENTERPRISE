import type { Metadata } from "next";
import poppins from "@/lib/font";
import "./globals.css";

export const metadata: Metadata = {
  title: "NIYI ENTERPRISE | Carpentry, Custom Furniture & Interiors",
  description:
    "NIYI ENTERPRISE delivers expert carpentry, custom furniture, and interior design solutions. Trusted craftsmanship for homes and businesses in [Nigeria , Lagos].",
  keywords: [
    "carpentry services",
    "custom furniture",
    "woodwork",
    "home interiors",
    "office furniture",
    "interior carpentry",
    "furniture maker [Nigeria , Lagos]",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "NIYI ENTERPRISE | Carpentry, Custom Furniture & Interiors",
    description:
      "Expert carpentry and furniture solutions that bring beauty and durability to your home or office.",
    url: "https://niyienterprise.com",
    siteName: "NIYI ENTERPRISE",
    images: [
      {
        url: "/opengraph.png",
        width: 1200,
        height: 630,
        alt: "NIYI ENTERPRISE Carpentry & Furniture",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NIYI ENTERPRISE | Carpentry & Custom Furniture",
    description:
      "Trusted carpentry and custom furniture services for homes and businesses.",
    images: ["/opengraph.png"],
    creator: "@Gozy_Dev"
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
