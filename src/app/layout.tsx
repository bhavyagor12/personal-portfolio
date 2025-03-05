import type { Metadata } from "next";
import { Bangers, Outfit } from "next/font/google";
import "./globals.css";

const bangers = Bangers({
  variable: "--font-bangers",
  subsets: ["latin"], // Include specific subsets
  weight: "400",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"], // Include specific subsets
  weight: ["400", "500", "600", "700"], // Define weights to load
  display: "swap", // Optional: control font-display behavior
});

export const metadata: Metadata = {
  title: "Bhavya Gor - Portfolio",
  description: "Curious developer, passionate about building things.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bangers.variable} ${outfit.variable}`}>
        {children}
      </body>
    </html>
  );
}
