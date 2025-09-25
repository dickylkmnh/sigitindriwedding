"use client";

import AOS from "aos";
import { use, useEffect } from "react";
import { Sacramento } from "next/font/google";
import Link from "next/link";

const sacramento = Sacramento({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sacramento",
});

export default function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = use(searchParams);
  const name = params?.name ?? "Tamu Undangan";

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="app" className="font-sans bg-[#800000ae]">
      {/* HERO */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Wayang Gunungan (center background) */}
        <img
          src="/img/gunung_wayang.png"
          alt="Gunungan Wayang"
          className="absolute inset-0 mx-auto my-auto w-[500px] md:w-[700px] opacity-20"
        />

        {/* Ornaments Bunga */}
        <img
          src="/img/bingkai.png"
          alt="Bunga Kiri Atas"
          className="absolute top-0 left-0 w-32 md:w-48 opacity-80 scale-x-[-1] scale-y-[-1]"
        />
        <img
          src="/img/bingkai.png"
          alt="Bunga Kanan Atas"
          className="absolute top-0 right-0 w-32 md:w-48 opacity-80 scale-y-[-1]"
        />
        <img
          src="/img/bingkai.png"
          alt="Bunga Kiri Bawah"
          className="absolute bottom-0 left-0 w-32 md:w-48 opacity-80 scale-x-[-1]"
        />
        <img
          src="/img/bingkai.png"
          alt="Bunga Kanan Bawah"
          className="absolute bottom-0 right-0 w-32 md:w-48 opacity-80"
        />

        {/* Content */}
        <div
          className="relative z-10 text-center space-y-2 p-6"
          data-aos="zoom-out-down"
          data-aos-easing="ease-in-back"
          data-aos-duration="1000"
        >
          <div className="space-y-2">
            <div className="text-lg text-[#FAF8F5] mb-4">The Wedding</div>

            <div
              className={`text-5xl md:text-6xl font-bold text-[#D4AF37] ${sacramento.className}`}
            >
              Sigit Komarudin
            </div>
            <div
              className={`text-[#FAF8F5] text-2xl ${sacramento.className}`}
            >
              &
            </div>
            <div
              className={`text-5xl md:text-6xl font-bold text-[#D4AF37] ${sacramento.className}`}
            >
              Indri Ismawati
            </div>

            <div className="text-sm md:text-base text-[#FAF8F5]">
              Minggu, 12 Oktober 2025
            </div>
          </div>

          <Link
            href="/landing"
            className="inline-block mt-4 bg-[#D4AF37] hover:bg-[#E6BE8A] text-[#2E2E2E] text-sm md:text-base font-medium px-6 py-2 rounded-lg shadow"
          >
            Buka Undangan
          </Link>

          <div className="mt-6 space-y-1">
            <p className="text-sm">Kepada :</p>
            <p className="text-sm">{name}</p>
            <p className="font-semibold">Di Tempat</p>
          </div>
        </div>
      </section>
    </div>
  );
}
