import React from "react";
import { Container } from "@/components/layout/container";

const DescriptionSection = () => {
  return (
    <section className=" py-58">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Text Content */}
          <div className="flex flex-col items-center p-16 text-center lg:items-start lg:text-left">
            <h2 className="text-4xl font-extrabold text-black mb-2">
              Introduce
            </h2>
            <h2 className="text-4xl font-extrabold text-black mb-6">
              Mullob Store
            </h2>
            <p className="max-w-xl text-muted-foreground text-lg leading-relaxed mx-auto lg:mx-0 font-handwriting">
              At Mullob Store, we believe in the power of natural produce. From
              the richness of Indonesian soil, we harvest and deliver
              vegetables, fruits, spices, and grains to customers around the
              world. With a focus on sustainability and trust, we connect
              farmers to global opportunities.
            </p>
          </div>

          {/* Image Placeholder */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-[300px] h-[300px] rounded-2xl border-2 border-gray-700 bg-[url('/images/diagonal-lines.svg')] bg-cover">
              <div className="absolute top-[-20px] right-[-20px] w-[80px] h-[80px] border-2 border-gray-700 rounded-xl bg-transparent"></div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DescriptionSection;
