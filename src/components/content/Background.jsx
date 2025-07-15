"use client";
import Image from "next/image";
import { Container } from "@/components/layout/container";
import Company1 from "../src/company1.jpg"; // Menggunakan impor gambar Anda
import Company2 from "../src/company2.jpg"; // Menggunakan impor gambar Anda
import Company3 from "../src/company3.jpg"; // Menggunakan impor gambar Anda

const Background = () => {
  return (
    <section className="py-16 ">
      <Container>
        {/* Background Company */}
        <div className="grid items-center gap-10 lg:grid-cols-2 mb-20">
          <div className="flex flex-col items-center p-8 text-center lg:items-start lg:text-left">
            <div className="flex-col items-center">
              <h1 className="text-4xl font-extrabold text-black mb-6">
                Background Company
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                Mullob Store began as a small home-based business with a passion
                for quality local produce. Over time, it has grown into a
                trusted food supplier, providing vegetables, fruits, spices, and
                grains to both local and international markets.
              </p>
            </div>
          </div>
          {/* Photo Section */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative flex flex-col items-center justify-center gap-4 lg:gap-8 lg:flex-row lg:items-start lg:w-full lg:max-w-xl xl:max-w-2xl">
              <div className="relative w-full sm:max-w-[300px] aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={Company1 || "/placeholder.svg"}
                  alt="Company building exterior"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full sm:max-w-[300px] aspect-[3/4] overflow-hidden rounded-lg shadow-lg lg:mt-16">
                <Image
                  src={Company2 || "/placeholder.svg"}
                  alt="Company product display"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full sm:max-w-[300px] aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={Company3 || "/placeholder.svg"}
                  alt="Company team working"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Vision and Mission */}
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="flex flex-col items-center p-8 text-center lg:items-start lg:text-left">
            <div className="flex-col items-center ">
              <h1 className="text-4xl font-extrabold text-black mb-6">
                Vision
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                To become a globally trusted provider of high-quality
                agricultural products from Indonesia, empowering local farmers
                while promoting sustainable and ethical trade practices
                worldwide.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="flex-col items-center text-center lg:text-left p-8 ">
              <h1 className="text-4xl font-extrabold text-black mb-6">
                Mission
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our mission is to supply premium vegetables, fruits, spices, and
                grains to global and local markets by empowering Indonesian
                farmers, ensuring consistent quality, and upholding sustainable
                agricultural practices that benefit communities and the
                environment.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Background;
