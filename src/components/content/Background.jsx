import React from "react";
import { Container } from "@/components/layout/container";
const Background = () => {
  return (
    <section>
      <Container>
        {/* Background Company */}
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="flex flex-col items-center p-16 text-center lg:items-start lg:text-left">
            <div className=" flex-col items-center">
              <h1 className="text-4xl font-extrabold text-black mb-2">
                Background Company
              </h1>
              <h1>
                Mullob Store Background company about mullo store is lorem ipsum
                dolor sit amet, consectetur adipiscing elit.
              </h1>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">Test Image</div>
        </div>

        {/* Vision and Mission */}
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="flex flex-col items-center p-16 text-center lg:items-start lg:text-left">
            <div className=" flex-col items-center">
              <h1 className="text-4xl font-extrabold text-black mb-2">
                Vision
              </h1>
              <p>
                To become a globally trusted provider of high-quality
                agricultural products from Indonesia, empowering local farmers
                while promoting sustainable and ethical trade practices
                worldwide.
              </p>
            </div>
          </div>

          <div className="flex justify-center  sm: items-center">
            <div className=" flex-col items-center">
              <h1 className="text-4xl font-extrabold text-black mb-2">
                Mission
              </h1>
              <p>
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
