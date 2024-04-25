import "../globals.css";
import "../../public/static/css/all.css";
import "../../public/static/css/cube.scss";
import { Inter, Poppins } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ["100", "200", "400", "800"],
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
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
