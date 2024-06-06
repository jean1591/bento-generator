import "./globals.css";

import { Footer } from "./components/footer";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import { StoreProvider } from "./lib/store/storeProvider";
import { classNames } from "@/utils";

const inter = Inter({ subsets: ["latin"] });

const metaDescription = "Create beautiful bentos without the hassle";

export const metadata: Metadata = {
  title: {
    template: "Bento generator",
    default: "Bento generator",
  },
  description: metaDescription,
  metadataBase: new URL("https://bento-generator.jeanrobertou.com/"),
  openGraph: {
    title: "Bento generator",
    description: metaDescription,
    url: "https://bento-generator.jeanrobertou.com/",
    siteName: "Bento generator",
    images: [
      {
        url: "/hero-profile.jpeg",
        width: 500,
        height: 500,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="fr" suppressHydrationWarning>
        <body
          className={classNames(
            inter.className,
            "bg-indigo-50/25 text-indigo-950"
          )}
        >
          <div className="my-16 px-4 mx-auto max-w-5xl min-h-screen">
            {children}
          </div>
          <Footer />
        </body>
      </html>
    </StoreProvider>
  );
}
