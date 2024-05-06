import "./globals.css";
import { Roboto } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const roboto = Roboto({
  weight: ["100", "300", "500", "400", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Kamsi Orazulike",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
