import Navbar from "./Navbar";
import Footer from "./Footer";
import { Noto_Serif } from "next/font/google";
import DarkModeToggle from "./theme";

const notoserif = Noto_Serif({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-noto-serif",
});

export default function Layout({ children }) {
  return (
    <div className={`${notoserif.className}`}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
