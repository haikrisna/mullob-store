import React from "react";
import { Container } from "@/components/layout/container";

const DescriptionSection = () => {
  return (
    <section className="py-46">
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              pellentesque sodales eros, id aliquam augue laoreet vel.
              Suspendisse posuere tempus aliquet. Morbi vulputate vitae enim
              eget sagittis. Curabitur nunc leo, pharetra ac consectetur sed,
              luctus ac arcu.
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
