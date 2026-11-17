import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kupidom — kupi nekretninu direktno",
  description: "Nekretnine na mapi. Rezerviraj kaparu online, ugovor i prijenos vlasništva idu preko javnog bilježnika.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hr">
      <body>{children}</body>
    </html>
  );
}
