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
          <div className="my-16 px-4 mx-auto max-w-5xl">{children}</div>
        </body>
      </html>
    </StoreProvider>
  );
}
