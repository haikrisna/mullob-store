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
              <h1>
                Mullob Store Background company about mullo store is lorem ipsum
                dolor sit amet, consectetur adipiscing elit.
              </h1>
            </div>
          </div>

          <div className="flex justify-center lg:justify-start sm:justify-center">
            <div className=" flex-col items-center">
              <h1 className="text-4xl font-extrabold text-black mb-2">
                Mission
              </h1>
              <h1>
                Mullob Store Background company about mullo store is lorem ipsum
                dolor sit amet, consectetur adipiscing elit.
              </h1>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Background;
