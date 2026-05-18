import type { Metadata } from "next";
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfitFont = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
});
const ovoFont = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ovo",
});

export const metadata: Metadata = {
  title: "Kithya - Portfolio",
  description:
    "Portfolio of Nara Ratanakkithya, a frontend-focused web developer building clean React and Next.js projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${outfitFont.variable} ${ovoFont.variable} antialiased overflow-x-hidden scroll-smooth`}
      >
        {children}
      </body>
    </html>
  );
}
