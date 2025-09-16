// src/app/layout.tsx
import "./globals.css";
import { Inter, Dancing_Script } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const handwriting = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-handwriting",
});

export const metadata = {
  title: "Ruby feat. Martin",
  description: "CV site inspiré Ruby, projet personnel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${handwriting.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
