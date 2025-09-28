"use client";

import AOS from "aos";
import { useEffect, useState, useRef } from "react";
import { Sacramento } from "next/font/google";

const sacramento = Sacramento({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sacramento",
});

export default function Landing() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(true);
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    AOS.init();
    audioRef.current?.play();
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  const copyText = async (id: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(id);
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      // fallback for older browsers
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand("copy");
        setCopied(id);
        setTimeout(() => setCopied(null), 2000);
      } finally {
        document.body.removeChild(textarea);
      }
    }
  };

  return (
    <div className="bg-[#800000ae] overflow-x-hidden">
      {/* INVITATION */}
      <section
        id="invitation"
        className="relative min-h-screen flex items-center justify-center overflow-x-hidden"
      >
        {/* Background */}
        <img
          src="/img/gunung_wayang.png"
          alt="Gunungan Wayang"
          className="absolute inset-0 mx-auto my-auto max-w-full max-h-full opacity-20 z-0"
        />

        <div
          className="relative z-10 max-w-3xl mx-auto text-center space-y-4 px-4"
          data-aos="zoom-out"
          data-aos-duration="1000"
        >
          <div className="space-y-2">
            <h2 className="text-md md:text-xl font-semibold text-[#D4AF37]">
              Assalamu’alaikum Warahmatullaahi Wabarakaatuh
            </h2>
            <br />
            <p className="text-[#FAF8F5] text-sm">
              Dengan memohon ridho dan rahmat Allah SWT. Kami bermaksud
              menyelenggarakan resepsi pernikahan kami,
            </p>
          </div>

          <br />

          <div className="mt-6 space-y-3">
            <div>
              <h3
                className={`text-5xl font-bold text-[#D4AF37] ${sacramento.className}`}
              >
                Sigit Komarudin
              </h3>
              <p className="text-[#FAF8F5] text-sm">
                Putra dari Bapak Sudirman dan Ibu Komalasari
              </p>
            </div>
            <p className="text-md font-medium tracking-[0.5rem]">dengan</p>
            <div>
              <h3
                className={`text-5xl font-bold text-[#D4AF37] ${sacramento.className}`}
              >
                Indri Ismawati
              </h3>
              <p className="text-[#FAF8F5] text-sm">
                Putri dari Alm. Bapak Harun Karyana dan Ibu Cucum Sumiati
              </p>
            </div>
          </div>

          <br />

          <div className="flex justify-center items-center gap-1 mt-6">
            <img
              src="/img/bunga_wayang.png"
              alt="flower"
              className="w-20 md:w-20"
            />
          </div>
        </div>
      </section>

      {/* EVENT */}
      <section id="event">
        <div className="max-w-5xl mx-auto px-4">
          <div
            className="text-center mb-10"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <h2 className="text-lg text-gray-500">OUR SPECIAL EVENT</h2>
            <h3
              className={`text-4xl md:text-5xl font-bold text-[#D4AF37] ${sacramento.className}`}
            >
              Wedding Events
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card Akad */}
            <div
              className="p-6 bg-[#f8f8f84b] rounded-xl shadow hover:shadow-lg transition"
              data-aos="fade-left"
            >
              <h4 className="text-xl font-semibold mb-4 text-center text-[#1c1c1c]">
                Akad Nikah
              </h4>
              <hr className="my-4 border-[#1c1c1c]" />
              <div className="flex justify-around text-sm">
                <div className="text-center text-[#1c1c1c] font-semibold">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/709/709511.png"
                    alt="clock"
                    className="w-6 mx-auto"
                  />
                  <p>09.00 WIB</p>
                  <p>10.00 WIB</p>
                </div>
                <div className="text-center text-[#1c1c1c] font-semibold">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3239/3239948.png"
                    alt="calendar"
                    className="w-6 mx-auto"
                  />
                  <p>Minggu</p>
                  <p>12 Oktober 2025</p>
                </div>
              </div>
            </div>

            {/* Card Resepsi */}
            <div
              className="p-6 bg-[#f8f8f84b] rounded-xl shadow hover:shadow-lg transition"
              data-aos="fade-left"
            >
              <h4 className="text-xl font-semibold mb-4 text-center text-[#1c1c1c]">
                Resepsi
              </h4>
              <hr className="my-4 border-[#1c1c1c]" />
              <div className="flex justify-around text-sm">
                <div className="text-center text-[#1c1c1c] font-semibold">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/709/709511.png"
                    alt="clock"
                    className="w-6 mx-auto"
                  />
                  <p>11.00 WIB</p>
                  <p>17.00 WIB</p>
                </div>
                <div className="text-center text-[#1c1c1c] font-semibold">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3239/3239948.png"
                    alt="calendar"
                    className="w-6 mx-auto"
                  />
                  <p>Minggu</p>
                  <p>12 Oktober 2025</p>
                </div>
              </div>
            </div>
          </div>

          {/* Location */}
          <div
            className="mt-8 p-6 bg-[#f8f8f84b] rounded-xl shadow text-center"
            data-aos="fade-up"
          >
            <h4 className="text-xl font-semibold mb-3 text-[#1c1c1c]">Location</h4>
            <hr className="my-4 border-[#1c1c1c]" />
            <p className="text-[#1c1c1c] mb-4">
              KP.Sukamaju RT.003 / RW.003 Desa.Ciptaharha Kec.Cipatat
              Kab.Bandung Barat
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3961.4916724192885!2d107.372407!3d-6.831497999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwNDknNTMuNCJTIDEwN8KwMjInMjAuNyJF!5e0!3m2!1sen!2sid!4v1758800109081!5m2!1sen!2sid"
              className="w-full rounded-lg"
              height="350"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <a
              href="https://maps.app.goo.gl/jwWr6yajf5bxAPMVA"
              className="inline-block mt-4 bg-[#D4AF37] hover:bg-[#E6BE8A] text-[#2E2E2E] text-sm md:text-base font-medium px-6 py-2 rounded-lg shadow"
              target="_blank"
              rel="noreferrer"
            >
              Buka di Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* TURUT MENGUNDANG */}
      <section id="turut_mengundang" className="pt-20">
        <div className="max-w-5xl mx-auto px-4">
          <div
            className="text-center mb-10"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <h3
              className={`text-4xl md:text-5xl font-bold text-[#D4AF37] ${sacramento.className}`}
            >
              Turut Mengundang
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div
              className="p-6 bg-[#f8f8f84b] rounded-xl shadow hover:shadow-lg transition"
              data-aos="fade-right"
            >
              <p className="text-center font-semibold text-[#1c1c1c]">
                Keluarga Besar Bapak Sudirman
              </p>
              <p className="text-center text-[#1c1c1c]">&</p>
              <p className="text-center font-semibold text-[#1c1c1c]">
                Keluarga Besar Ibu Komalasari
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="p-6 bg-[#f8f8f84b] rounded-xl shadow hover:shadow-lg transition"
              data-aos="fade-left"
            >
              <p className="text-center font-semibold text-[#1c1c1c]">
                Keluarga Besar Alm. Bapak Harun Karyana
              </p>
              <p className="text-center text-[#1c1c1c]">&</p>
              <p className="text-center font-semibold text-[#1c1c1c]">
                Keluarga Besar Ibu Cucum Sumiati
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* GALLERY */}
      <section id="gallery" className="pt-20">
        <div className="max-w-xl1 mx-auto px-4">
          <div
            className="text-center mb-10"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <h2 className="text-lg text-gray-400">OUR MEMORIES</h2>
            <h3
              className={`text-4xl md:text-5xl font-bold text-[#D4AF37] ${sacramento.className}`}
            >
              Wedding Gallery
            </h3>
          </div>

          <div className="flex justify-center">
            {/* Foto 1 */}
            <div
              className="overflow-hidden rounded-xl shadow hover:scale-105 transition"
              data-aos="fade-up"
            >
              <img
                src="/img/berdua.png"
                alt="Gallery 1"
                className="w-[600px] md:w-[800px] h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* GIFT / KADO SECTION */}
      <section id="gift" className="pt-20">
        <div className="max-w-4xl mx-auto px-4">
          <div
            className="text-center mb-8"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <h2 className="text-lg text-gray-400">GIFT</h2>
            <h3
              className={`text-4xl md:text-5xl font-bold text-[#D4AF37] ${sacramento.className}`}
            >
              Kirim Kado
            </h3>
            <p className="text-sm text-[#FAF8F5] mt-2">
              Terima kasih atas doa dan restu yang telah Anda berikan. Bagi yang
              berkenan mengirimkan tanda kasih, dapat disampaikan melalui cara di
              bawah ini. Dengan segala kerendahan hati, kami ucapkan terima kasih.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div
              className="p-6 bg-[#f8f8f84b] rounded-xl shadow hover:shadow-lg transition relative"
              data-aos="fade-up"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-semibold text-[#1c1c1c]">
                    SIGIT KOMARUDIN
                  </h4>
                  <p className="text-sm text-[#1c1c1c]">Bank Mandiri</p>
                </div>
                <img
                  src="/img/mandiri.png"
                  alt="Logo Mandiri"
                  className="h-10 w-auto"
                />
              </div>

              <div className="mt-12 flex items-center justify-between gap-2">
                <p className="select-all font-mono text-md text-[#1c1c1c]">
                  1320028535939
                </p>
                <button
                  onClick={() => copyText("mandiri", "1320028535939")}
                  className="ml-2 px-3 py-2 bg-[#D4AF37] hover:bg-[#E6BE8A] rounded-md font-semibold text-[#1c1c1c]"
                >
                  Salin
                </button>
              </div>

              {copied === "mandiri" && (
                <span className="absolute top-4 right-4 bg-[#1c1c1c] text-white text-xs px-2 py-1 rounded">
                  Tersalin!
                </span>
              )}
            </div>

            {/* Card 2 */}
            <div
              className="p-6 bg-[#f8f8f84b] rounded-xl shadow hover:shadow-lg transition relative"
              data-aos="fade-up"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-semibold text-[#1c1c1c]">DANA</h4>
                  <p className="text-sm text-[#1c1c1c]">(E-Wallet)</p>
                </div>
                <img src="/img/dana.png" alt="Logo Dana" className="h-8 w-auto" />
              </div>

              <div className="mt-12 flex items-center justify-between gap-2">
                <p className="select-all font-mono text-md text-[#1c1c1c]">
                  083116558561
                </p>
                <button
                  onClick={() => copyText("dana", "083116558561")}
                  className="ml-2 px-3 py-2 bg-[#D4AF37] hover:bg-[#E6BE8A] rounded-md font-semibold text-[#1c1c1c]"
                >
                  Salin
                </button>
              </div>

              {copied === "dana" && (
                <span className="absolute top-4 right-4 bg-[#1c1c1c] text-white text-xs px-2 py-1 rounded">
                  Tersalin!
                </span>
              )}
            </div>

            {/* Card 3 */}
            <div
              className="p-6 bg-[#f8f8f84b] rounded-xl shadow hover:shadow-lg transition relative"
              data-aos="fade-up"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-semibold text-[#1c1c1c]">
                    INDRI ISMAWATI
                  </h4>
                  <p className="text-sm text-[#1c1c1c]">Bank Mandiri</p>
                </div>
                <img
                  src="/img/mandiri.png"
                  alt="Logo Mandiri"
                  className="h-10 w-auto"
                />
              </div>

              <div className="mt-12 flex items-center justify-between gap-2">
                <p className="select-all font-mono text-md text-[#1c1c1c]">
                  1820010438265
                </p>
                <button
                  onClick={() => copyText("mandiri", "1820010438265")}
                  className="ml-2 px-3 py-2 bg-[#D4AF37] hover:bg-[#E6BE8A] rounded-md font-semibold text-[#1c1c1c]"
                >
                  Salin
                </button>
              </div>

              {copied === "mandiri" && (
                <span className="absolute top-4 right-4 bg-[#1c1c1c] text-white text-xs px-2 py-1 rounded">
                  Tersalin!
                </span>
              )}
            </div>
          </div>

          <p className="text-xs text-center text-[#FAF8F5] mt-4">
            Terima kasih atas doa dan kebaikan Anda ❤️
          </p>
        </div>
      </section>


      {/* FOOTER */}
      <section id="footer" className="pt-10 mb-5 text-center text-white">
        <hr className="pb-5 border-[#1c1c1c]" />
        <div className="space-y-2">
          <p className="text-lg">Thank You</p>
          <h3
            className={`text-4xl font-bold text-[#D4AF37] ${sacramento.className}`}
          >
            Sigit & Indri
          </h3>
        </div>
      </section>
      <section id="footer-me" className="bg-[#D4AF37]">
        <div className="space-y-2 text-center">
          <p className="text-sm font-bold text-[#1c1c1c]">
            Built with love by{" "}
            <a
              href="https://www.instagram.com/dcylk_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1c1c1c] hover:underline border-b-[1px] border-[#1c1c1c]"
            >
              @dcylk_
            </a>
          </p>
        </div>
      </section>

      {/* Music Player Button */}
      <div className="fixed bottom-5 right-5 z-50">
        <button
          onClick={togglePlay}
          className="w-14 h-14 rounded-full bg-[#D4AF37] text-[#1c1c1c] shadow-lg flex items-center justify-center hover:bg-[#E6BE8A] transition"
        >
          {playing ? "⏸️" : "▶️"}
        </button>
        <audio ref={audioRef} src="/music/music.mp3" loop />
      </div>
    </div>
  );
}
