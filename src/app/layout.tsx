import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Undangan Pernikahan Sigit Komarudin & Indri Ismawati",
  description: "Cinta mempertemukan kami, dan kini kami ingin merayakan awal perjalanan baru bersama. Hadirlah dalam momen berharga ini.",
  openGraph: {
    title: "Undangan Pernikahan Sigit & Indri",
    description: "Cinta mempertemukan kami, dan kini kami ingin merayakan awal perjalanan baru bersama. Hadirlah dalam momen berharga ini.",
    url: "https://sigitindriwedding.vercel.app",
    siteName: "Undangan Pernikahan",
    images: [
      {
        url: "https://sigitindriwedding.vercel.app/img/berdua.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
