"use client";

import { useState } from "react";
import { Container } from "@/components/layout/container";

const VideoShowcase = () => {
  const [hoveredVideoId, setHoveredVideoId] = useState();

  return (
    <section className="py-10">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:items-stretch">
          {/* Video Section - Left Column */}
          {/* Menambahkan gap-8 di sini untuk jarak antar video di mobile */}
          <div className="flex flex-col items-center justify-center w-full h-full relative gap-8">
            {/* Video 1 */}
            <div
              className={`relative w-full max-w-md aspect-video overflow-hidden rounded-lg shadow-xl
                transition-all duration-300 ease-in-out transform
                ${hoveredVideoId === "video1" ? "z-20 scale-105" : "z-10"}
              `}
              onMouseEnter={() => setHoveredVideoId("video1")}
              onMouseLeave={() => setHoveredVideoId(null)}
            >
              <video
                className="w-full h-full object-cover pointer-events-none"
                autoPlay
                muted
                loop
                playsInline
                onContextMenu={(e) => e.preventDefault()}
                src="introduce1edit.mp4"
                aria-label="Video showcase 1: Company overview"
              >
                Your browser does not support the video tag.
              </video>
            </div>
            {/* Video 2 */}
            <div
              className={`relative w-full max-w-md aspect-video overflow-hidden rounded-lg shadow-xl
                lg:-mt-16 lg:ml-16 /* Efek bersilangan hanya di desktop */
                transition-all duration-300 ease-in-out transform
                ${hoveredVideoId === "video2" ? "z-20 scale-105" : "z-10"}
              `}
              onMouseEnter={() => setHoveredVideoId("video2")}
              onMouseLeave={() => setHoveredVideoId(null)}
            >
              <video
                className="w-full h-full object-cover pointer-events-none"
                autoPlay
                muted
                loop
                playsInline
                onContextMenu={(e) => e.preventDefault()}
                src="introduce2edit.mp4"
                aria-label="Video showcase 2: Product highlights"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Text Section - Right Column */}
          <div className="flex flex-col items-center p-8 text-center lg:items-start lg:text-left">
            <h2 className="text-4xl font-extrabold text-black mb-6">
              Our Story in Motion
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Saksikan perjalanan Mullob Store melalui video-video eksklusif
              kami. Dari kebun hingga meja Anda, kami berkomitmen untuk
              menghadirkan produk pertanian terbaik dengan praktik
              berkelanjutan.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Video pertama menampilkan sekilas operasional kami di lapangan,
              sementara video kedua menyoroti proses kualitas dan inovasi produk
              kami. Kami percaya transparansi adalah kunci kepercayaan.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default VideoShowcase;
