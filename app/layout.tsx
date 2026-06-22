import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://oculusweddings.com"),
  title: {
    default: "Oculus Weddings — Fine-art wedding photography",
    template: "%s · Oculus Weddings",
  },
  description:
    "Fine-art wedding photography for couples who feel more than they say. Based in Bengaluru, available worldwide.",
  openGraph: {
    title: "Oculus Weddings — Fine-art wedding photography",
    description:
      "Fine-art wedding photography. Based in Bengaluru, available worldwide.",
    type: "website",
    siteName: site.name,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Jost:wght@300;400;500&family=Pinyon+Script&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
