import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SideBar from "@/components/SideBar";
import SideIcon from "@/components/SideIcon";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Online Shopping in Nepal | Best Deals, Prices & Discounts",
  description: "This is the ecommerce website ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <SideBar />
        {children}

        <SideIcon />

        <Footer />
      </body>
    </html>
  );
}
