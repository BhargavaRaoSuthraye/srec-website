import "../styles/globals.css";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { Poppins } from "next/font/google";

/* FONT CONFIG */
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap", // faster loading
});

/* SEO META */
export const metadata = {
  title: "SREC – Santhiram Engineering College",
  description:
    "Santhiram Engineering College, Nandyal - Empowering Future Engineers with Quality Education, Innovation and Excellence.",
  keywords: [
    "SREC",
    "Santhiram Engineering College",
    "Engineering College Nandyal",
    "Top Colleges AP",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {/* NAVBAR */}
        <Navbar />

        {/* PAGE CONTENT */}
        <main>{children}</main>

        {/* FOOTER */}
        <Footer />
      </body>
    </html>
  );
}