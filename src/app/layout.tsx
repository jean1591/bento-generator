import "./globals.css";

import { Inter } from "next/font/google";
import { StoreProvider } from "./lib/store/storeProvider";
import { classNames } from "@/utils";

const inter = Inter({ subsets: ["latin"] });
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
            "bg-base-color text-base-content-500"
          )}
        >
          <div className="py-8 mx-auto max-w-5xl px-4 mb-16">{children}</div>
        </body>
      </html>
    </StoreProvider>
  );
}
