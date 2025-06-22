"use client";
import React from "react";
import { Container } from "../layout/container";
import { CheckSquareIcon } from "@phosphor-icons/react";

const CompanyValues = () => {
  return (
    <section className="py-24">
      <Container>
        <div className="grid gap-10 items-center lg:grid-cols-2">
          {/* Text Content */}
          <div className="flex flex-col items-center text-center p-8 lg:items-start lg:text-left">
            <h2 className="text-2xl lg:text-4xl font-bold text-black mb-2 flex items-center gap-2 opacity-60">
              <CheckSquareIcon className="w-6 h-6" />
              High-quality product
            </h2>
            <h2 className="text-2xl lg:text-4xl font-extrabold text-black mb-2 flex items-center gap-2 opacity-75">
              <CheckSquareIcon className="w-6 h-6" />
              Environmentally friendly
            </h2>
            <h2 className="text-2xl lg:text-4xl font-black text-black mb-2 flex items-center gap-2 opacity-90">
              <CheckSquareIcon className="w-8 h-8" />
              Available locally and internationally
            </h2>
            <h2 className="text-2xl lg:text-4xl font-bold text-black mb-2 flex items-center gap-2 opacity-100">
              <CheckSquareIcon className="w-6 h-6" />
              Trusted by consumers
            </h2>
          </div>

          {/* Title (Right) */}
          <div className="flex flex-col justify-center items-center lg:items-end text-center lg:text-right">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-black mb-2">
              Store
            </h2>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-black">
              Values
            </h2>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CompanyValues;
