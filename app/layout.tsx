import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const font = Space_Grotesk({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Galsen Digital | Votre partenaire digital au Sénégal",
  description:
    "Création de sites web sur mesure, design graphique et stratégie digitale. Donnons vie à vos projets au Sénégal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
