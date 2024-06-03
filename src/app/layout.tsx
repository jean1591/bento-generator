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
            "bg-indigo-50/25 text-indigo-950"
          )}
        >
          <div className="my-16 px-4 mx-auto max-w-5xl">{children}</div>
        </body>
      </html>
    </StoreProvider>
  );
}
