"use client";
import Image from "next/image";
import { Container } from "@/components/layout/container";
import UcupAngkat from "../src/ucupangkat.png";

const DescriptionSection = () => {
  return (
    <section className="py-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Image Section - pindah ke atas */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-2xl">
                <Image
                  src={UcupAngkat || "/placeholder.svg"}
                  alt="Ucup Angkat - Mullob Store"
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 320px, 384px"
                  priority
                />
              </div>
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
