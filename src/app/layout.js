import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CricSim",
  description: "A cricket simulation project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#EEEDE7] text-gray-900`}>
        {children}
      </body>
    </html>
  );
}
