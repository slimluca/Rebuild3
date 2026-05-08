import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "SessoChat.net | Guida Italiana alle Chat Webcam Live",
    template: "%s | SessoChat.net"
  },
  description: siteConfig.description,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: siteConfig.name,
    url: siteConfig.url,
    title: "SessoChat.net | Guida Italiana alle Chat Webcam Live",
    description: siteConfig.description
  },
  twitter: {
    card: "summary",
    title: "SessoChat.net | Guida Italiana alle Chat Webcam Live",
    description: siteConfig.description
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body>
        <JsonLd data={[websiteSchema(), organizationSchema()]} />
        <Header />
        <main className="site-main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
