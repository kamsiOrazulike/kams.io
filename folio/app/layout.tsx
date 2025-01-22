import "./globals.css";
import "../public/static/css/all.css";
import "../public/static/css/cube.scss";
import { Roboto } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
