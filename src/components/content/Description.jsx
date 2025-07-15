"use client";
import { Container } from "@/components/layout/container";
import { useState } from "react";

const DescriptionSection = () => {
  const [hoveredVideoId, setHoveredVideoId] = useState();

  return (
    <section className="py-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 pt-32">
          {/* Image Section - pindah ke atas */}
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

          {/* Text Content */}
          <div className="flex flex-col items-center p-8 text-center lg:items-start lg:text-left">
            <h2 className="text-4xl font-extrabold text-black mb-2">
              Introduce
            </h2>
            <h2 className="text-4xl font-extrabold text-black mb-6">
              Mullob Stores
            </h2>
            <p className="max-w-xl text-muted-foreground text-lg leading-relaxed mx-auto lg:mx-0 font-handwriting">
              At Mullob Store, we believe in the power of natural produce. From
              the richness of Indonesian soil, we harvest and deliver
              vegetables, fruits, spices, and grains to customers around the
              world. With a focus on sustainability and trust, we connect
              farmers to global opportunities.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DescriptionSection;
